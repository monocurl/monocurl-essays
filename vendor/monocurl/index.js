import initPackagedWasm, * as packagedWasm from "./wasm/web_runtime.js";
import { installMonocurlMathJaxRenderer } from "./mathjax-renderer.js";
export { MonocurlWebGlRenderer, UnsupportedWebGlRendererError, createMonocurlWebGlRenderer, } from "./webgl-renderer.js";
export { MissingMathJaxError, installMonocurlMathJaxRenderer, renderMathJaxSvg, } from "./mathjax-renderer.js";
export class UnsupportedWasmMethodError extends Error {
    constructor(method) {
        super(`The loaded Monocurl wasm runtime does not expose ${method}`);
        this.name = "UnsupportedWasmMethodError";
    }
}
function writeVec2(out, offset, value) {
    out[offset] = value[0];
    out[offset + 1] = value[1];
}
function writeVec3(out, offset, value) {
    out[offset] = value[0];
    out[offset + 1] = value[1];
    out[offset + 2] = value[2];
}
function writeVec4(out, offset, value) {
    out[offset] = value[0];
    out[offset + 1] = value[1];
    out[offset + 2] = value[2];
    out[offset + 3] = value[3];
}
export function packMeshSnapshot(mesh) {
    return {
        version: mesh.version,
        tag: Int32Array.from(mesh.tag),
        uniform: mesh.uniform,
        dots: packDots(mesh.dots),
        lines: packLines(mesh.lines),
        triangles: packTriangles(mesh.triangles),
    };
}
export function packSnapshotMeshes(snapshot) {
    return (snapshot.meshes ?? []).map(packMeshSnapshot);
}
function packDots(dots) {
    const count = dots.length;
    const positions = new Float32Array(count * 3);
    const normals = new Float32Array(count * 3);
    const colors = new Float32Array(count * 4);
    const inverse = new Int32Array(count);
    const isDominantSibling = new Uint8Array(count);
    for (const [index, dot] of dots.entries()) {
        writeVec3(positions, index * 3, dot.position);
        writeVec3(normals, index * 3, dot.normal);
        writeVec4(colors, index * 4, dot.color);
        inverse[index] = dot.inverse;
        isDominantSibling[index] = dot.isDominantSibling ? 1 : 0;
    }
    return { count, positions, normals, colors, inverse, isDominantSibling };
}
function packLines(lines) {
    const count = lines.length;
    const positions = new Float32Array(count * 6);
    const colors = new Float32Array(count * 8);
    const normals = new Float32Array(count * 3);
    const previous = new Int32Array(count);
    const next = new Int32Array(count);
    const inverse = new Int32Array(count);
    const isDominantSibling = new Uint8Array(count);
    for (const [index, line] of lines.entries()) {
        writeVec3(positions, index * 6, line.a.position);
        writeVec3(positions, index * 6 + 3, line.b.position);
        writeVec4(colors, index * 8, line.a.color);
        writeVec4(colors, index * 8 + 4, line.b.color);
        writeVec3(normals, index * 3, line.normal);
        previous[index] = line.previous;
        next[index] = line.next;
        inverse[index] = line.inverse;
        isDominantSibling[index] = line.isDominantSibling ? 1 : 0;
    }
    return {
        count,
        positions,
        colors,
        normals,
        previous,
        next,
        inverse,
        isDominantSibling,
    };
}
function packTriangles(triangles) {
    const count = triangles.length;
    const positions = new Float32Array(count * 9);
    const colors = new Float32Array(count * 12);
    const uvs = new Float32Array(count * 6);
    const edges = new Int32Array(count * 3);
    const isDominantSibling = new Uint8Array(count);
    for (const [index, triangle] of triangles.entries()) {
        writeVec3(positions, index * 9, triangle.a.position);
        writeVec3(positions, index * 9 + 3, triangle.b.position);
        writeVec3(positions, index * 9 + 6, triangle.c.position);
        writeVec4(colors, index * 12, triangle.a.color);
        writeVec4(colors, index * 12 + 4, triangle.b.color);
        writeVec4(colors, index * 12 + 8, triangle.c.color);
        writeVec2(uvs, index * 6, triangle.a.uv);
        writeVec2(uvs, index * 6 + 2, triangle.b.uv);
        writeVec2(uvs, index * 6 + 4, triangle.c.uv);
        edges[index * 3] = triangle.edgeAb;
        edges[index * 3 + 1] = triangle.edgeBc;
        edges[index * 3 + 2] = triangle.edgeCa;
        isDominantSibling[index] = triangle.isDominantSibling ? 1 : 0;
    }
    return { count, positions, colors, uvs, edges, isDominantSibling };
}
export function parseRuntimeIterationJson(json) {
    const parsed = JSON.parse(json);
    return {
        snapshots: parsed.snapshots ?? [],
        nextFrameInterval: parsed.nextFrameInterval,
    };
}
export function parseCompilationReport(json) {
    const parsed = JSON.parse(json);
    return {
        ok: parsed.ok === true,
        diagnostics: parsed.diagnostics ?? [],
        slides: parsed.slides ?? [],
    };
}
function timestampCompare(a, b) {
    return a.slide === b.slide ? a.time - b.time : a.slide - b.slide;
}
function validateTimestamp(timestamp, label) {
    if (!Number.isInteger(timestamp.slide) || timestamp.slide < 0) {
        throw new TypeError(`${label}.slide must be a non-negative integer`);
    }
    if (Number.isNaN(timestamp.time)) {
        throw new TypeError(`${label}.time must not be NaN`);
    }
}
export const performanceClock = {
    nowSeconds() {
        return globalThis.performance.now() / 1000;
    },
};
export const animationFrameScheduler = {
    request(callback) {
        if (typeof globalThis.requestAnimationFrame === "function") {
            return globalThis.requestAnimationFrame(() => callback());
        }
        return globalThis.setTimeout(callback, 16);
    },
    cancel(handle) {
        if (typeof globalThis.cancelAnimationFrame === "function") {
            globalThis.cancelAnimationFrame(handle);
            return;
        }
        globalThis.clearTimeout(handle);
    },
};
export async function createMonocurlLoop(options = {}) {
    const uninstallMathJax = await installMathJaxIfAvailable(options);
    try {
        const runtime = options.runtime ?? new (await resolveWasmModule(options)).Runtime();
        const loop = new MonocurlLoop(runtime, options);
        if (uninstallMathJax !== undefined) {
            loopCleanup.set(loop, uninstallMathJax);
        }
        return loop;
    }
    catch (error) {
        uninstallMathJax?.();
        throw error;
    }
}
async function resolveWasmModule(options) {
    if (options.wasm === undefined) {
        await initPackagedWasm(options.wasmInit);
        return packagedWasm;
    }
    if (typeof options.wasm === "function") {
        return await options.wasm();
    }
    return await options.wasm;
}
async function installMathJaxIfAvailable(options) {
    if (options.mathJax === false) {
        return undefined;
    }
    const mathJax = options.mathJax ?? globalThis.MathJax;
    if (mathJax === undefined) {
        return undefined;
    }
    await mathJax.startup?.promise;
    return installMonocurlMathJaxRenderer({
        mathJax,
        display: options.mathJaxDisplay,
    });
}
const loopCleanup = new WeakMap();
export class MonocurlLoop {
    runtime;
    clock;
    scheduler;
    onStep;
    onIdle;
    onError;
    scheduledFrame;
    pendingStep;
    playUntil;
    disposed = false;
    constructor(runtime, options = {}) {
        this.runtime = runtime;
        this.clock = options.clock ?? performanceClock;
        this.scheduler = options.scheduler ?? animationFrameScheduler;
        this.onStep = options.onStep;
        this.onIdle = options.onIdle;
        this.onError = options.onError;
    }
    get isPlaying() {
        return this.runtime.is_playing();
    }
    get needsWork() {
        return this.runtime.needs_work();
    }
    loadSource(source, imports = {}, rootPath) {
        const importsJson = JSON.stringify(imports);
        let reportJson;
        if (rootPath === undefined) {
            if (this.runtime.load_source === undefined) {
                throw new UnsupportedWasmMethodError("load_source");
            }
            reportJson = this.runtime.load_source(source, importsJson);
        }
        else {
            if (this.runtime.load_source_with_root_path === undefined) {
                throw new UnsupportedWasmMethodError("load_source_with_root_path");
            }
            reportJson = this.runtime.load_source_with_root_path(rootPath, source, importsJson);
        }
        const report = parseCompilationReport(reportJson);
        this.playUntil = undefined;
        this.requestStep();
        return report;
    }
    setPlaybackMode(mode) {
        this.playUntil = undefined;
        if (mode === "presentation") {
            this.runtime.set_presentation_mode();
        }
        else {
            this.runtime.set_preview_mode();
        }
        this.requestStep();
    }
    seekTo(timestamp) {
        validateTimestamp(timestamp, "timestamp");
        this.playUntil = undefined;
        this.runtime.seek_to(timestamp.slide, timestamp.time);
        this.requestStep();
    }
    updateParameter(target, value, nowSeconds = this.clock.nowSeconds()) {
        this.updateParameters([{ target, value }], nowSeconds);
    }
    updateParameters(updates, nowSeconds = this.clock.nowSeconds()) {
        if (this.runtime.update_parameters === undefined) {
            throw new UnsupportedWasmMethodError("update_parameters");
        }
        this.runtime.update_parameters(JSON.stringify(updates), nowSeconds);
        this.requestStep();
    }
    togglePlay() {
        this.playUntil = undefined;
        this.runtime.toggle_play(this.clock.nowSeconds());
        this.requestStep();
    }
    play(options = {}) {
        this.playUntil = options.until;
        if (this.playUntil !== undefined) {
            validateTimestamp(this.playUntil, "options.until");
        }
        if (!this.runtime.is_playing()) {
            this.runtime.toggle_play(this.clock.nowSeconds());
        }
        this.requestStep();
    }
    pause() {
        this.playUntil = undefined;
        if (this.runtime.is_playing()) {
            this.runtime.toggle_play(this.clock.nowSeconds());
            this.requestStep();
        }
    }
    requestStep() {
        this.assertLive();
        if (this.scheduledFrame !== undefined || this.pendingStep !== undefined) {
            return;
        }
        this.scheduledFrame = this.scheduler.request(() => {
            this.scheduledFrame = undefined;
            void this.step().catch((error) => {
                this.onError?.(error);
            });
        });
    }
    async step(nowSeconds = this.clock.nowSeconds()) {
        this.assertLive();
        if (this.pendingStep !== undefined) {
            return this.pendingStep;
        }
        this.pendingStep = this.runStep(nowSeconds);
        try {
            return await this.pendingStep;
        }
        finally {
            this.pendingStep = undefined;
        }
    }
    stop() {
        if (this.scheduledFrame !== undefined) {
            this.scheduler.cancel(this.scheduledFrame);
            this.scheduledFrame = undefined;
        }
    }
    dispose() {
        if (this.disposed) {
            return;
        }
        this.stop();
        this.runtime.free?.();
        loopCleanup.get(this)?.();
        loopCleanup.delete(this);
        this.disposed = true;
    }
    async runStep(nowSeconds) {
        let iteration;
        let snapshotCount;
        if (this.runtime.step_json !== undefined) {
            iteration = parseRuntimeIterationJson(await this.runtime.step_json(nowSeconds));
            iteration = await this.applyPlayUntil(iteration, nowSeconds);
            snapshotCount = iteration.snapshots.length;
        }
        else {
            snapshotCount = await this.runtime.step(nowSeconds);
            iteration = { snapshots: [] };
        }
        const result = {
            ...iteration,
            snapshotCount,
            nowSeconds,
            isPlaying: this.runtime.is_playing(),
            needsWork: this.runtime.needs_work(),
        };
        this.onStep?.(result);
        if (result.isPlaying || result.needsWork) {
            this.requestStep();
        }
        else {
            this.onIdle?.(result);
        }
        return result;
    }
    async applyPlayUntil(iteration, nowSeconds) {
        if (this.playUntil === undefined) {
            return iteration;
        }
        const until = this.playUntil;
        const reachedIndex = iteration.snapshots.findIndex((snapshot) => timestampCompare(snapshot.currentTimestamp, until) >= 0);
        if (reachedIndex === -1) {
            return iteration;
        }
        this.playUntil = undefined;
        const beforeLimit = iteration.snapshots.slice(0, reachedIndex);
        this.runtime.seek_to(until.slide, until.time);
        const stepJson = this.runtime.step_json;
        if (stepJson === undefined) {
            return { snapshots: beforeLimit };
        }
        const stopped = parseRuntimeIterationJson(await stepJson.call(this.runtime, nowSeconds));
        return {
            snapshots: beforeLimit.concat(stopped.snapshots),
            nextFrameInterval: stopped.nextFrameInterval,
        };
    }
    assertLive() {
        if (this.disposed) {
            throw new Error("MonocurlLoop has been disposed");
        }
    }
}
