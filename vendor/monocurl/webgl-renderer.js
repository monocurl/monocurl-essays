import { DOT_VERTEX_SHADER, LINE_VERTEX_SHADER, SOLID_FRAGMENT_SHADER, TRIANGLE_FRAGMENT_SHADER, TRIANGLE_VERTEX_SHADER, } from "./webgl-shaders.js";
export class UnsupportedWebGlRendererError extends Error {
    constructor() {
        super("MonocurlWebGlRenderer requires a WebGL2 rendering context");
        this.name = "UnsupportedWebGlRendererError";
    }
}
const DEFAULT_CAMERA_FOV = 1.0247789;
const MIN_CAMERA_NEAR = 0.01;
const REFERENCE_WIDTH = 1480;
const DEFAULT_LINE_MITER_SCALE = 4;
const DEPTH_STEP = 1e-6;
const EPSILON = 1e-6;
const LINE_VERTEX_INDICES = [
    0, 2, 1, 1, 2, 4, 1, 4, 3, 3, 4, 5, 6, 7, 3, 3, 7, 8, 3, 8, 1, 1, 8, 9,
];
export class MonocurlWebGlRenderer {
    canvas;
    gl;
    triangleProgram;
    lineProgram;
    dotProgram;
    triangleBuffer;
    lineBuffer;
    dotBuffer;
    triangleVao;
    lineVao;
    dotVao;
    pixelRatio;
    lineWidthPx;
    dotRadiusPx;
    disposed = false;
    constructor(canvas, options = {}) {
        const gl = canvas.getContext("webgl2", {
            alpha: true,
            antialias: true,
            depth: true,
            premultipliedAlpha: false,
            ...options.contextAttributes,
        });
        if (gl === null) {
            throw new UnsupportedWebGlRendererError();
        }
        this.canvas = canvas;
        this.gl = gl;
        this.pixelRatio = options.pixelRatio ?? (() => globalThis.devicePixelRatio || 1);
        this.lineWidthPx = options.lineWidthPx ?? 1;
        this.dotRadiusPx = options.dotRadiusPx ?? 3.5;
        this.triangleProgram = createProgramInfo(gl, TRIANGLE_VERTEX_SHADER, TRIANGLE_FRAGMENT_SHADER, [
            "uCameraPosition",
            "uCameraRight",
            "uCameraUp",
            "uCameraForward",
            "uCameraClip",
            "uViewportScale",
            "uDepthBias",
            "uAlpha",
            "uGloss",
        ]);
        this.lineProgram = createProgramInfo(gl, LINE_VERTEX_SHADER, SOLID_FRAGMENT_SHADER, [
            "uCameraPosition",
            "uCameraRight",
            "uCameraUp",
            "uCameraForward",
            "uCameraClip",
            "uViewportScale",
            "uViewportAndLineWidth",
            "uDepthBiasAndMiterScale",
        ]);
        this.dotProgram = createProgramInfo(gl, DOT_VERTEX_SHADER, SOLID_FRAGMENT_SHADER, [
            "uCameraPosition",
            "uCameraRight",
            "uCameraUp",
            "uCameraForward",
            "uCameraClip",
            "uViewportScale",
            "uViewportAndRadius",
            "uDepthBias",
        ]);
        this.triangleBuffer = createBuffer(gl);
        this.lineBuffer = createBuffer(gl);
        this.dotBuffer = createBuffer(gl);
        this.triangleVao = createTriangleVao(gl, this.triangleBuffer);
        this.lineVao = createLineVao(gl, this.lineBuffer);
        this.dotVao = createDotVao(gl, this.dotBuffer);
    }
    render(snapshot, options = {}) {
        this.assertLive();
        this.resizeToDisplaySize();
        const gl = this.gl;
        gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LEQUAL);
        gl.depthMask(true);
        gl.clearDepth(1);
        const background = snapshot.background?.color ?? [1, 1, 1, 1];
        gl.clearColor(background[0], background[1], background[2], background[3]);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        const meshes = sortedVisibleMeshes(snapshot.meshes ?? []);
        const camera = cameraBasis(options.camera ?? snapshot.camera);
        const viewportScale = [1, 1];
        let depthBias = 0;
        for (const mesh of meshes) {
            const triangles = buildTriangleData(mesh);
            if (triangles.length > 0) {
                this.drawTriangles(triangles, mesh, camera, viewportScale, depthBias);
                depthBias += DEPTH_STEP;
            }
            const lineRadius = meshLineRadiusPx(mesh, this.canvas.width, this.lineWidthPx);
            if (lineRadius > EPSILON) {
                const lines = buildLineData(mesh);
                if (lines.length > 0) {
                    this.drawLines(lines, mesh, camera, viewportScale, lineRadius, depthBias);
                    depthBias += DEPTH_STEP;
                }
            }
            const dotRadius = meshDotRadiusPx(mesh, this.resolvedPixelRatio(), this.dotRadiusPx);
            if (dotRadius > EPSILON) {
                const dots = buildDotData(mesh, mesh.uniform.dotVertexCount);
                if (dots.length > 0) {
                    this.drawDots(dots, mesh, camera, viewportScale, dotRadius, depthBias);
                    depthBias += DEPTH_STEP;
                }
            }
        }
    }
    resizeToDisplaySize() {
        const ratio = this.resolvedPixelRatio();
        const width = Math.max(1, Math.round(this.canvas.clientWidth * ratio));
        const height = Math.max(1, Math.round(this.canvas.clientHeight * ratio));
        if (this.canvas.width === width && this.canvas.height === height) {
            return false;
        }
        this.canvas.width = width;
        this.canvas.height = height;
        return true;
    }
    dispose() {
        if (this.disposed) {
            return;
        }
        const gl = this.gl;
        gl.deleteVertexArray(this.triangleVao);
        gl.deleteVertexArray(this.lineVao);
        gl.deleteVertexArray(this.dotVao);
        gl.deleteBuffer(this.triangleBuffer);
        gl.deleteBuffer(this.lineBuffer);
        gl.deleteBuffer(this.dotBuffer);
        gl.deleteProgram(this.triangleProgram.program);
        gl.deleteProgram(this.lineProgram.program);
        gl.deleteProgram(this.dotProgram.program);
        this.disposed = true;
    }
    drawTriangles(data, mesh, camera, viewportScale, depthBias) {
        const gl = this.gl;
        gl.useProgram(this.triangleProgram.program);
        setCameraUniforms(gl, this.triangleProgram, camera, this.canvas, viewportScale);
        gl.uniform1f(this.triangleProgram.uniforms.uDepthBias, depthBias);
        gl.uniform1f(this.triangleProgram.uniforms.uAlpha, mesh.uniform.alpha);
        gl.uniform1f(this.triangleProgram.uniforms.uGloss, mesh.uniform.gloss);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.triangleBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, data, gl.DYNAMIC_DRAW);
        gl.bindVertexArray(this.triangleVao);
        gl.drawArrays(gl.TRIANGLES, 0, data.length / 12);
        gl.bindVertexArray(null);
    }
    drawLines(data, mesh, camera, viewportScale, lineRadius, depthBias) {
        const gl = this.gl;
        gl.useProgram(this.lineProgram.program);
        setCameraUniforms(gl, this.lineProgram, camera, this.canvas, viewportScale);
        gl.uniform4f(this.lineProgram.uniforms.uViewportAndLineWidth, this.canvas.width, this.canvas.height, lineRadius, mesh.uniform.alpha);
        gl.uniform2f(this.lineProgram.uniforms.uDepthBiasAndMiterScale, depthBias, meshLineMiterScale(mesh));
        gl.bindBuffer(gl.ARRAY_BUFFER, this.lineBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, data, gl.DYNAMIC_DRAW);
        gl.bindVertexArray(this.lineVao);
        gl.drawArrays(gl.TRIANGLES, 0, data.length / 14);
        gl.bindVertexArray(null);
    }
    drawDots(data, mesh, camera, viewportScale, dotRadius, depthBias) {
        const gl = this.gl;
        gl.useProgram(this.dotProgram.program);
        setCameraUniforms(gl, this.dotProgram, camera, this.canvas, viewportScale);
        gl.uniform4f(this.dotProgram.uniforms.uViewportAndRadius, this.canvas.width, this.canvas.height, dotRadius, mesh.uniform.alpha);
        gl.uniform1f(this.dotProgram.uniforms.uDepthBias, depthBias);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.dotBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, data, gl.DYNAMIC_DRAW);
        gl.bindVertexArray(this.dotVao);
        gl.drawArrays(gl.TRIANGLES, 0, data.length / 9);
        gl.bindVertexArray(null);
    }
    resolvedPixelRatio() {
        const ratio = typeof this.pixelRatio === "function" ? this.pixelRatio() : this.pixelRatio;
        return Number.isFinite(ratio) ? Math.max(1, ratio) : 1;
    }
    assertLive() {
        if (this.disposed) {
            throw new Error("MonocurlWebGlRenderer has been disposed");
        }
    }
}
export function createMonocurlWebGlRenderer(canvas, options) {
    return new MonocurlWebGlRenderer(canvas, options);
}
const CAMERA_ORBIT_RADIANS_PER_VIEW = Math.PI;
const CAMERA_MAX_PITCH = Math.PI / 2 - 0.05;
const CAMERA_COMPARE_EPS = 1e-4;
export class MonocurlCameraController {
    canvas;
    renderer;
    unsubscribeSnapshot;
    ownsRenderer;
    abortController = new AbortController();
    previousCursor;
    previousTouchAction;
    resizeObserver;
    latestSnapshot;
    cameraOverride;
    resetCamera;
    dragState;
    disposed = false;
    constructor(canvas, loop, options = {}) {
        this.canvas = canvas;
        this.renderer =
            options.renderer ?? new MonocurlWebGlRenderer(canvas, options.rendererOptions);
        this.ownsRenderer = options.renderer === undefined;
        this.previousCursor = canvas.style.cursor;
        this.previousTouchAction = canvas.style.touchAction;
        this.unsubscribeSnapshot = loop.addSnapshotListener((snapshot) => {
            this.latestSnapshot = snapshot;
            this.syncSceneCamera(snapshot);
            this.renderLatest();
        });
        if (options.enabled !== false) {
            this.installPointerListeners();
        }
        this.installResizeObserver();
    }
    reset() {
        this.cameraOverride = undefined;
        this.resetCamera = undefined;
        this.renderLatest();
    }
    dispose() {
        if (this.disposed) {
            return;
        }
        this.abortController.abort();
        this.resizeObserver?.disconnect();
        this.unsubscribeSnapshot();
        this.canvas.style.cursor = this.previousCursor;
        this.canvas.style.touchAction = this.previousTouchAction;
        if (this.ownsRenderer) {
            this.renderer.dispose();
        }
        this.disposed = true;
    }
    installPointerListeners() {
        this.canvas.style.cursor = "grab";
        this.canvas.style.touchAction = "none";
        const signal = this.abortController.signal;
        this.canvas.addEventListener("pointerdown", (event) => this.beginDrag(event), {
            signal,
        });
        this.canvas.addEventListener("pointermove", (event) => this.updateDrag(event), {
            signal,
        });
        this.canvas.addEventListener("pointerup", (event) => this.endDrag(event), {
            signal,
        });
        this.canvas.addEventListener("pointercancel", (event) => this.endDrag(event), {
            signal,
        });
    }
    installResizeObserver() {
        if (!("ResizeObserver" in globalThis)) {
            return;
        }
        this.resizeObserver = new ResizeObserver(() => {
            this.renderLatest();
        });
        this.resizeObserver.observe(this.canvas);
    }
    beginDrag(event) {
        if (event.button !== 0 || this.latestSnapshot === undefined) {
            return;
        }
        const rect = this.canvas.getBoundingClientRect();
        if (rect.width <= 0 || rect.height <= 0) {
            return;
        }
        const sceneCamera = resolvedCamera(this.latestSnapshot);
        if (this.cameraOverride === undefined) {
            this.resetCamera = sceneCamera;
        }
        else {
            this.resetCamera ??= sceneCamera;
        }
        this.dragState = {
            mode: event.shiftKey ? "pan" : "orbit",
            pointerId: event.pointerId,
            startClientX: event.clientX,
            startClientY: event.clientY,
            startCamera: this.displayCamera(this.latestSnapshot),
            sceneWidth: rect.width,
            sceneHeight: rect.height,
        };
        this.canvas.setPointerCapture(event.pointerId);
        this.canvas.style.cursor = "grabbing";
        event.preventDefault();
    }
    updateDrag(event) {
        const drag = this.dragState;
        if (drag === undefined || event.pointerId !== drag.pointerId) {
            return;
        }
        const dx = drag.startClientX - event.clientX;
        const dy = event.clientY - drag.startClientY;
        const nextCamera = drag.mode === "pan"
            ? panCamera(drag.startCamera, dx, dy, drag.sceneWidth, drag.sceneHeight)
            : orbitCamera(drag.startCamera, dx, dy, drag.sceneWidth, drag.sceneHeight);
        if (this.resetCamera !== undefined && camerasClose(nextCamera, this.resetCamera)) {
            this.cameraOverride = undefined;
            this.resetCamera = undefined;
        }
        else {
            this.cameraOverride = nextCamera;
        }
        this.renderLatest();
        event.preventDefault();
    }
    endDrag(event) {
        const drag = this.dragState;
        if (drag === undefined || event.pointerId !== drag.pointerId) {
            return;
        }
        this.dragState = undefined;
        if (this.canvas.hasPointerCapture(event.pointerId)) {
            this.canvas.releasePointerCapture(event.pointerId);
        }
        this.canvas.style.cursor = "grab";
        event.preventDefault();
    }
    renderLatest() {
        if (this.latestSnapshot === undefined) {
            return;
        }
        this.renderer.render(this.latestSnapshot, { camera: this.displayCamera(this.latestSnapshot) });
    }
    displayCamera(snapshot) {
        return this.cameraOverride ?? resolvedCamera(snapshot);
    }
    syncSceneCamera(snapshot) {
        if (this.cameraOverride === undefined || this.resetCamera === undefined) {
            return;
        }
        const sceneCamera = resolvedCamera(snapshot);
        if (!camerasClose(sceneCamera, this.resetCamera)) {
            this.cameraOverride = undefined;
            this.resetCamera = undefined;
            this.dragState = undefined;
        }
    }
}
export function installMonocurlCameraController(canvas, loop, options) {
    return new MonocurlCameraController(canvas, loop, options);
}
function createProgramInfo(gl, vertexSource, fragmentSource, uniformNames) {
    const program = createProgram(gl, vertexSource, fragmentSource);
    const uniforms = {};
    for (const name of uniformNames) {
        const location = gl.getUniformLocation(program, name);
        if (location === null) {
            throw new Error(`WebGL program is missing uniform ${name}`);
        }
        uniforms[name] = location;
    }
    return { program, uniforms };
}
function createProgram(gl, vertexSource, fragmentSource) {
    const vertex = createShader(gl, gl.VERTEX_SHADER, vertexSource);
    const fragment = createShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
    const program = gl.createProgram();
    if (program === null) {
        throw new Error("failed to create WebGL program");
    }
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    gl.deleteShader(vertex);
    gl.deleteShader(fragment);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        const log = gl.getProgramInfoLog(program) ?? "unknown link error";
        gl.deleteProgram(program);
        throw new Error(`failed to link WebGL program: ${log}`);
    }
    return program;
}
function createShader(gl, kind, source) {
    const shader = gl.createShader(kind);
    if (shader === null) {
        throw new Error("failed to create WebGL shader");
    }
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        const log = gl.getShaderInfoLog(shader) ?? "unknown compile error";
        gl.deleteShader(shader);
        throw new Error(`failed to compile WebGL shader: ${log}`);
    }
    return shader;
}
function createBuffer(gl) {
    const buffer = gl.createBuffer();
    if (buffer === null) {
        throw new Error("failed to create WebGL buffer");
    }
    return buffer;
}
function createVertexArray(gl) {
    const vao = gl.createVertexArray();
    if (vao === null) {
        throw new Error("failed to create WebGL vertex array");
    }
    return vao;
}
function createTriangleVao(gl, buffer) {
    const vao = createVertexArray(gl);
    gl.bindVertexArray(vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    vertexAttrib(gl, 0, 3, 12, 0);
    vertexAttrib(gl, 1, 3, 12, 3);
    vertexAttrib(gl, 2, 4, 12, 6);
    vertexAttrib(gl, 3, 2, 12, 10);
    gl.bindVertexArray(null);
    return vao;
}
function createLineVao(gl, buffer) {
    const vao = createVertexArray(gl);
    gl.bindVertexArray(vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    vertexAttrib(gl, 0, 3, 14, 0);
    vertexAttrib(gl, 1, 4, 14, 3);
    vertexAttrib(gl, 2, 3, 14, 7);
    vertexAttrib(gl, 3, 3, 14, 10);
    vertexAttrib(gl, 4, 1, 14, 13);
    gl.bindVertexArray(null);
    return vao;
}
function createDotVao(gl, buffer) {
    const vao = createVertexArray(gl);
    gl.bindVertexArray(vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    vertexAttrib(gl, 0, 3, 9, 0);
    vertexAttrib(gl, 1, 4, 9, 3);
    vertexAttrib(gl, 2, 2, 9, 7);
    gl.bindVertexArray(null);
    return vao;
}
function vertexAttrib(gl, index, size, strideFloats, offsetFloats) {
    gl.enableVertexAttribArray(index);
    gl.vertexAttribPointer(index, size, gl.FLOAT, false, strideFloats * 4, offsetFloats * 4);
}
function sortedVisibleMeshes(meshes) {
    return meshes
        .map((mesh, order) => ({ mesh, order }))
        .filter(({ mesh }) => mesh.uniform.alpha > 0)
        .sort((a, b) => a.mesh.uniform.zIndex - b.mesh.uniform.zIndex ||
        a.order - b.order)
        .map(({ mesh }) => mesh);
}
function setCameraUniforms(gl, program, camera, canvas, viewportScale) {
    gl.uniform3fv(program.uniforms.uCameraPosition, camera.position);
    gl.uniform3fv(program.uniforms.uCameraRight, camera.right);
    gl.uniform3fv(program.uniforms.uCameraUp, camera.up);
    gl.uniform3fv(program.uniforms.uCameraForward, camera.forward);
    gl.uniform4f(program.uniforms.uCameraClip, camera.near, camera.far, camera.tanHalfFov, canvas.width / Math.max(1, canvas.height));
    gl.uniform2f(program.uniforms.uViewportScale, viewportScale[0], viewportScale[1]);
}
function cameraBasis(camera) {
    const snapshot = camera ?? defaultCamera();
    const forward = normalizedOr(sub(snapshot.lookAt, snapshot.position), [0, 0, -1]);
    const upHint = normalizedOr(snapshot.up, [0, 1, 0]);
    let right = cross(forward, upHint);
    if (lengthSquared(right) <= 1e-6) {
        const fallbackUp = lengthSquared(cross(forward, [0, 1, 0])) > 1e-6 ? [0, 1, 0] : [0, 0, 1];
        right = cross(forward, fallbackUp);
    }
    right = normalize(right);
    const up = normalize(cross(right, forward));
    const near = Math.max(MIN_CAMERA_NEAR, snapshot.near);
    return {
        position: snapshot.position,
        right,
        up,
        forward,
        near,
        far: Math.max(near, snapshot.far),
        tanHalfFov: Math.max(0.05, Math.tan(DEFAULT_CAMERA_FOV * 0.5)),
    };
}
function defaultCamera() {
    return {
        position: [0, 0, 4],
        lookAt: [0, 0, 0],
        up: [0, 1, 0],
        near: 0.1,
        far: 100,
    };
}
function resolvedCamera(snapshot) {
    return snapshot.camera ?? defaultCamera();
}
function camerasClose(a, b) {
    return (lengthSquared(sub(a.position, b.position)) <= CAMERA_COMPARE_EPS * CAMERA_COMPARE_EPS &&
        lengthSquared(sub(a.lookAt, b.lookAt)) <= CAMERA_COMPARE_EPS * CAMERA_COMPARE_EPS &&
        lengthSquared(sub(a.up, b.up)) <= CAMERA_COMPARE_EPS * CAMERA_COMPARE_EPS &&
        Math.abs(a.near - b.near) <= CAMERA_COMPARE_EPS &&
        Math.abs(a.far - b.far) <= CAMERA_COMPARE_EPS);
}
function orbitCamera(camera, dx, dy, sceneWidth, sceneHeight) {
    const width = Math.max(1, sceneWidth);
    const height = Math.max(1, sceneHeight);
    const yaw = (dx / width) * CAMERA_ORBIT_RADIANS_PER_VIEW;
    const pitchDelta = (dy / height) * CAMERA_ORBIT_RADIANS_PER_VIEW;
    const worldUp = normalizedOr(camera.up, [0, 1, 0]);
    const offset = sub(camera.position, camera.lookAt);
    const radius = Math.max(MIN_CAMERA_NEAR, length(offset));
    const horizontal = sub(offset, scale(worldUp, dot(offset, worldUp)));
    let horizontalDir;
    if (lengthSquared(horizontal) <= 1e-6) {
        horizontalDir = normalizedOr(cross(cameraBasis(camera).right, worldUp), [0, 0, 1]);
    }
    else {
        horizontalDir = normalize(horizontal);
    }
    const currentPitch = Math.atan2(dot(offset, worldUp), Math.max(1e-6, length(horizontal)));
    const pitch = clamp(currentPitch + pitchDelta, -CAMERA_MAX_PITCH, CAMERA_MAX_PITCH);
    horizontalDir = rotateAroundAxis(horizontalDir, worldUp, yaw);
    const nextOffset = add(scale(horizontalDir, radius * Math.cos(pitch)), scale(worldUp, radius * Math.sin(pitch)));
    return {
        position: add(camera.lookAt, nextOffset),
        lookAt: camera.lookAt,
        up: worldUp,
        near: camera.near,
        far: camera.far,
    };
}
function panCamera(camera, dx, dy, sceneWidth, sceneHeight) {
    const width = Math.max(1, sceneWidth);
    const height = Math.max(1, sceneHeight);
    const basis = cameraBasis(camera);
    const depth = Math.max(MIN_CAMERA_NEAR, dot(sub(camera.lookAt, camera.position), basis.forward));
    const aspect = Math.max(0.1, width / height);
    const halfHeight = depth * basis.tanHalfFov;
    const halfWidth = halfHeight * aspect;
    const translation = add(scale(basis.right, (2 * halfWidth * dx) / width), scale(basis.up, (2 * halfHeight * dy) / height));
    return {
        position: add(camera.position, translation),
        lookAt: add(camera.lookAt, translation),
        up: camera.up,
        near: camera.near,
        far: camera.far,
    };
}
function rotateAroundAxis(vector, axis, angle) {
    const unitAxis = normalizedOr(axis, [0, 1, 0]);
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return add(add(scale(vector, cos), scale(cross(unitAxis, vector), sin)), scale(unitAxis, dot(unitAxis, vector) * (1 - cos)));
}
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
function buildTriangleData(mesh) {
    const smoothNormals = mesh.uniform.smooth ? averagedTriangleNormals(mesh) : undefined;
    const out = [];
    for (const triangle of mesh.triangles) {
        if (triangle.a.color[3] <= EPSILON &&
            triangle.b.color[3] <= EPSILON &&
            triangle.c.color[3] <= EPSILON) {
            continue;
        }
        const faceNormal = triangleFaceNormal(triangle.a.position, triangle.b.position, triangle.c.position);
        pushTriangleVertex(out, triangle.a, triangleVertexNormal(smoothNormals, triangle.a.position, faceNormal));
        pushTriangleVertex(out, triangle.b, triangleVertexNormal(smoothNormals, triangle.b.position, faceNormal));
        pushTriangleVertex(out, triangle.c, triangleVertexNormal(smoothNormals, triangle.c.position, faceNormal));
    }
    return new Float32Array(out);
}
function pushTriangleVertex(out, vertex, normal) {
    out.push(vertex.position[0], vertex.position[1], vertex.position[2], normal[0], normal[1], normal[2], vertex.color[0], vertex.color[1], vertex.color[2], vertex.color[3], vertex.uv[0], vertex.uv[1]);
}
function averagedTriangleNormals(mesh) {
    const normals = new Map();
    for (const triangle of mesh.triangles) {
        if (triangle.a.color[3] <= EPSILON &&
            triangle.b.color[3] <= EPSILON &&
            triangle.c.color[3] <= EPSILON) {
            continue;
        }
        const areaNormal = cross(sub(triangle.b.position, triangle.a.position), sub(triangle.c.position, triangle.a.position));
        if (lengthSquared(areaNormal) <= 1e-12) {
            continue;
        }
        for (const position of [triangle.a.position, triangle.b.position, triangle.c.position]) {
            const key = positionKey(position);
            const current = normals.get(key);
            normals.set(key, current === undefined ? areaNormal : add(current, areaNormal));
        }
    }
    return normals;
}
function triangleVertexNormal(smoothNormals, position, fallback) {
    const normal = smoothNormals?.get(positionKey(position));
    if (normal !== undefined && lengthSquared(normal) > 1e-12) {
        return normalize(normal);
    }
    return fallback;
}
function triangleFaceNormal(a, b, c) {
    const normal = cross(sub(b, a), sub(c, a));
    return lengthSquared(normal) <= 1e-12 ? [0, 0, 1] : normalize(normal);
}
function buildLineData(mesh) {
    const out = [];
    for (const source of mesh.lines) {
        if (!lineVisible(source) || !source.isDominantSibling) {
            continue;
        }
        const previous = source.previous >= 0 ? mesh.lines[source.previous] : source;
        const next = source.next >= 0 ? mesh.lines[source.next] : source;
        const tangent = sub(source.b.position, source.a.position);
        const previousTangent = sub(source.a.position, previous?.a.position ?? source.a.position);
        const nextTangent = sub(next?.b.position ?? source.b.position, source.b.position);
        const reverseTangent = negate(tangent);
        const reversePreviousTangent = negate(nextTangent);
        const reverseNextTangent = negate(previousTangent);
        const vertices = [
            lineVertex(source.a.position, source.a.color, tangent, previousTangent, 1),
            lineVertex(source.a.position, source.a.color, tangent, tangent, 0),
            lineVertex(source.a.position, source.a.color, tangent, tangent, 1),
            lineVertex(source.b.position, source.b.color, tangent, tangent, 0),
            lineVertex(source.b.position, source.b.color, tangent, tangent, 1),
            lineVertex(source.b.position, source.b.color, tangent, nextTangent, 1),
            lineVertex(source.b.position, source.b.color, reverseTangent, reversePreviousTangent, 1),
            lineVertex(source.b.position, source.b.color, reverseTangent, reverseTangent, 1),
            lineVertex(source.a.position, source.a.color, reverseTangent, reverseTangent, 1),
            lineVertex(source.a.position, source.a.color, reverseTangent, reverseNextTangent, 1),
        ];
        for (const index of LINE_VERTEX_INDICES) {
            pushLineVertex(out, vertices[index]);
        }
    }
    return new Float32Array(out);
}
function lineVisible(line) {
    return line.a.color[3] > EPSILON || line.b.color[3] > EPSILON;
}
function lineVertex(position, color, tangent, previousTangent, extrude) {
    return { position, color, tangent, previousTangent, extrude };
}
function pushLineVertex(out, vertex) {
    out.push(vertex.position[0], vertex.position[1], vertex.position[2], vertex.color[0], vertex.color[1], vertex.color[2], vertex.color[3], vertex.tangent[0], vertex.tangent[1], vertex.tangent[2], vertex.previousTangent[0], vertex.previousTangent[1], vertex.previousTangent[2], vertex.extrude);
}
function buildDotData(mesh, vertexCount) {
    const out = [];
    const count = Math.max(3, Math.floor(vertexCount));
    const local = Array.from({ length: count }, (_, index) => {
        const angle = (2 * Math.PI * index) / count;
        return [Math.cos(angle), Math.sin(angle)];
    });
    for (const dot of mesh.dots) {
        if (!dot.isDominantSibling || dot.color[3] <= EPSILON) {
            continue;
        }
        for (let index = 1; index < count - 1; index += 1) {
            pushDotVertex(out, dot, local[0]);
            pushDotVertex(out, dot, local[index]);
            pushDotVertex(out, dot, local[index + 1]);
        }
    }
    return new Float32Array(out);
}
function pushDotVertex(out, dot, local) {
    out.push(dot.position[0], dot.position[1], dot.position[2], dot.color[0], dot.color[1], dot.color[2], dot.color[3], local[0], local[1]);
}
function meshLineRadiusPx(mesh, width, fallbackLineWidthPx) {
    const radius = Number.isFinite(mesh.uniform.strokeRadius)
        ? Math.max(0, mesh.uniform.strokeRadius)
        : Math.max(0, fallbackLineWidthPx) * 0.5;
    return radius * Math.max(1, width) / REFERENCE_WIDTH;
}
function meshLineMiterScale(mesh) {
    return Number.isFinite(mesh.uniform.strokeMiterRadiusScale)
        ? Math.max(0, mesh.uniform.strokeMiterRadiusScale)
        : DEFAULT_LINE_MITER_SCALE;
}
function meshDotRadiusPx(mesh, pixelRatio, fallbackDotRadiusPx) {
    const rasterScale = Number.isFinite(pixelRatio) ? Math.max(1, pixelRatio) : 1;
    if (Number.isFinite(mesh.uniform.dotRadius)) {
        return Math.max(0, mesh.uniform.dotRadius) * rasterScale;
    }
    return Math.max(0, fallbackDotRadiusPx) * rasterScale;
}
function positionKey(position) {
    return `${position[0]},${position[1]},${position[2]}`;
}
function add(a, b) {
    return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}
function scale(value, factor) {
    return [value[0] * factor, value[1] * factor, value[2] * factor];
}
function sub(a, b) {
    return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}
function negate(value) {
    return [-value[0], -value[1], -value[2]];
}
function cross(a, b) {
    return [
        a[1] * b[2] - a[2] * b[1],
        a[2] * b[0] - a[0] * b[2],
        a[0] * b[1] - a[1] * b[0],
    ];
}
function lengthSquared(value) {
    return value[0] * value[0] + value[1] * value[1] + value[2] * value[2];
}
function length(value) {
    return Math.sqrt(lengthSquared(value));
}
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function normalize(value) {
    const length = Math.sqrt(lengthSquared(value));
    if (length <= EPSILON) {
        return [0, 0, 0];
    }
    return [value[0] / length, value[1] / length, value[2] / length];
}
function normalizedOr(value, fallback) {
    return lengthSquared(value) <= 1e-6 ? fallback : normalize(value);
}
