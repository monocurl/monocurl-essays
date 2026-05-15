import type { MonocurlMathJax } from "./mathjax-renderer.js";
export type PlaybackMode = "preview" | "presentation";
export type Vec2 = [number, number];
export type Vec3 = [number, number, number];
export type Vec4 = [number, number, number, number];
export type ExecutionStatus = "playing" | "paused" | "runtimeError" | "compileError";
export { MonocurlWebGlRenderer, UnsupportedWebGlRendererError, createMonocurlWebGlRenderer, } from "./webgl-renderer.js";
export type { MonocurlWebGlRendererOptions } from "./webgl-renderer.js";
export { MissingMathJaxError, installMonocurlMathJaxRenderer, renderMathJaxSvg, } from "./mathjax-renderer.js";
export type { MonocurlLatexSvgRenderer, MonocurlMathJax, MonocurlMathJaxRendererOptions, } from "./mathjax-renderer.js";
export interface Timestamp {
    slide: number;
    time: number;
}
export interface RuntimeIteration {
    snapshots: ExecutionSnapshot[];
    nextFrameInterval?: number;
}
export interface RuntimeStepResult extends RuntimeIteration {
    snapshotCount: number;
    nowSeconds: number;
    isPlaying: boolean;
    needsWork: boolean;
}
export interface PlayOptions {
    until?: Timestamp;
}
export interface CompilationReport {
    ok: boolean;
    diagnostics: CompilationDiagnostic[];
    slides: SlideMetadata[];
}
export interface SlideMetadata {
    index: number;
    name: string | null;
}
export interface CompilationDiagnostic {
    kind: "parseError" | "compileError" | "compileWarning";
    title: string;
    message: string;
    span: SourceSpan;
}
export interface ExecutionSnapshot {
    background?: BackgroundSnapshot;
    camera?: CameraSnapshot;
    cameraVersion?: number;
    meshes?: MeshSnapshot[];
    errors?: RuntimeErrorSnapshot[];
    currentTimestamp: Timestamp;
    status: ExecutionStatus;
    isLoading: boolean;
    slideCount: number;
    slideNames: Array<string | null>;
    slideDurations: Array<number | null>;
    minimumSlideDurations: Array<number | null>;
    parameters?: ParameterSnapshot;
    transcript?: TranscriptSection[];
}
export interface RuntimeErrorSnapshot {
    message: string;
    span: SourceSpan;
    hint?: string;
    callstack?: RuntimeCallFrameSnapshot[];
}
export interface RuntimeCallFrameSnapshot {
    section: number;
    span: SourceSpan;
}
export interface BackgroundSnapshot {
    color: Vec4;
}
export interface CameraSnapshot {
    position: Vec3;
    lookAt: Vec3;
    up: Vec3;
    near: number;
    far: number;
}
export interface MeshSnapshot {
    version: number;
    tag: number[];
    uniform: MeshUniforms;
    dots: DotSnapshot[];
    lines: LineSnapshot[];
    triangles: TriangleSnapshot[];
}
export interface MeshUniforms {
    alpha: number;
    strokeMiterRadiusScale: number;
    strokeRadius: number;
    dotRadius: number;
    dotVertexCount: number;
    smooth: boolean;
    gloss: number;
    image?: string;
    zIndex: number;
}
export interface DotSnapshot {
    position: Vec3;
    normal: Vec3;
    color: Vec4;
    inverse: number;
    isDominantSibling: boolean;
}
export interface LineVertexSnapshot {
    position: Vec3;
    color: Vec4;
}
export interface LineSnapshot {
    a: LineVertexSnapshot;
    b: LineVertexSnapshot;
    normal: Vec3;
    previous: number;
    next: number;
    inverse: number;
    isDominantSibling: boolean;
}
export interface TriangleVertexSnapshot {
    position: Vec3;
    color: Vec4;
    uv: Vec2;
}
export interface TriangleSnapshot {
    a: TriangleVertexSnapshot;
    b: TriangleVertexSnapshot;
    c: TriangleVertexSnapshot;
    edgeAb: number;
    edgeBc: number;
    edgeCa: number;
    isDominantSibling: boolean;
}
export interface ParameterSnapshot {
    params: ParameterEntrySnapshot[];
    meshes: MeshEntrySnapshot[];
}
export interface ParameterEntrySnapshot {
    target: PresentationUpdateTarget;
    name: string;
    value: ParameterValue;
    locked: boolean;
}
export interface MeshEntrySnapshot {
    leaderIndex: number;
    name: string;
    locked: boolean;
    attributes: MeshAttributeSnapshot[];
}
export interface MeshAttributeSnapshot {
    target: PresentationUpdateTarget;
    name: string;
    value: ParameterValue;
}
export type PresentationUpdateTarget = {
    kind: "param";
    leaderIndex: number;
} | {
    kind: "meshAttribute";
    leaderIndex: number;
    name: string;
};
export type ParameterValue = {
    kind: "int";
    value: number;
} | {
    kind: "vectorInt";
    value: number[];
} | {
    kind: "float";
    value: number;
} | {
    kind: "vectorFloat";
    value: number[];
} | {
    kind: "complex";
    re: number;
    im: number;
} | {
    kind: "camera";
    value: CameraSnapshot;
} | {
    kind: "other";
};
export interface ParameterUpdate {
    target: PresentationUpdateTarget;
    value: ParameterValue;
}
export interface TranscriptSection {
    entries: TranscriptEntry[];
}
export interface TranscriptEntry {
    span: SourceSpan;
    section: number;
    isRoot: boolean;
    text: string;
}
export interface SourceSpan {
    start: number;
    end: number;
}
export interface PackedMeshSnapshot {
    version: number;
    tag: Int32Array;
    uniform: MeshUniforms;
    dots: PackedDotBuffer;
    lines: PackedLineBuffer;
    triangles: PackedTriangleBuffer;
}
export interface PackedDotBuffer {
    count: number;
    positions: Float32Array;
    normals: Float32Array;
    colors: Float32Array;
    inverse: Int32Array;
    isDominantSibling: Uint8Array;
}
export interface PackedLineBuffer {
    count: number;
    positions: Float32Array;
    colors: Float32Array;
    normals: Float32Array;
    previous: Int32Array;
    next: Int32Array;
    inverse: Int32Array;
    isDominantSibling: Uint8Array;
}
export interface PackedTriangleBuffer {
    count: number;
    positions: Float32Array;
    colors: Float32Array;
    uvs: Float32Array;
    edges: Int32Array;
    isDominantSibling: Uint8Array;
}
export interface MonocurlWasmRuntimeHandle {
    needs_work(): boolean;
    is_playing(): boolean;
    seek_to(slide: number, time: number): void;
    toggle_play(nowSeconds: number): void;
    set_presentation_mode(): void;
    set_preview_mode(): void;
    update_parameters?(updatesJson: string, nowSeconds: number): void;
    step(nowSeconds: number): Promise<number>;
    step_json?(nowSeconds: number): Promise<string>;
    load_source?(source: string, importsJson: string): string;
    load_source_with_root_path?(rootPath: string, source: string, importsJson: string): string;
    free?(): void;
}
export interface MonocurlWasmModule {
    Runtime: new () => MonocurlWasmRuntimeHandle;
}
export type MonocurlWasmSource = MonocurlWasmModule | Promise<MonocurlWasmModule> | (() => MonocurlWasmModule | Promise<MonocurlWasmModule>);
export type MonocurlWasmInitInput = unknown;
export interface RuntimeClock {
    nowSeconds(): number;
}
export interface FrameScheduler {
    request(callback: () => void): number;
    cancel(handle: number): void;
}
export interface CreateMonocurlLoopOptions {
    /**
     * Optional override for tests or custom bundlers. By default the packaged
     * Monocurl wasm runtime is initialized and used automatically.
     */
    wasm?: MonocurlWasmSource;
    /**
     * Optional input passed to wasm-bindgen initialization. Leave unset to fetch
     * the packaged `web_runtime_bg.wasm` next to this package's wasm JS glue.
     */
    wasmInit?: MonocurlWasmInitInput;
    runtime?: MonocurlWasmRuntimeHandle;
    /**
     * MathJax instance to install for Text/Tex rendering. By default, an existing
     * global `MathJax` is installed automatically when available. Pass `false` to
     * opt out.
     */
    mathJax?: MonocurlMathJax | false;
    mathJaxDisplay?: boolean;
    clock?: RuntimeClock;
    scheduler?: FrameScheduler;
    onStep?: (result: RuntimeStepResult) => void;
    onIdle?: (result: RuntimeStepResult) => void;
    onError?: (error: unknown) => void;
}
export declare class UnsupportedWasmMethodError extends Error {
    constructor(method: string);
}
export declare function packMeshSnapshot(mesh: MeshSnapshot): PackedMeshSnapshot;
export declare function packSnapshotMeshes(snapshot: ExecutionSnapshot): PackedMeshSnapshot[];
export declare function parseRuntimeIterationJson(json: string): RuntimeIteration;
export declare function parseCompilationReport(json: string): CompilationReport;
export declare const performanceClock: RuntimeClock;
export declare const animationFrameScheduler: FrameScheduler;
export declare function createMonocurlLoop(options?: CreateMonocurlLoopOptions): Promise<MonocurlLoop>;
type MonocurlLoopOptions = Omit<CreateMonocurlLoopOptions, "wasm" | "wasmInit" | "runtime" | "mathJax" | "mathJaxDisplay">;
export declare class MonocurlLoop {
    readonly runtime: MonocurlWasmRuntimeHandle;
    private readonly clock;
    private readonly scheduler;
    private readonly onStep?;
    private readonly onIdle?;
    private readonly onError?;
    private scheduledFrame;
    private pendingStep;
    private playUntil;
    private disposed;
    constructor(runtime: MonocurlWasmRuntimeHandle, options?: MonocurlLoopOptions);
    get isPlaying(): boolean;
    get needsWork(): boolean;
    loadSource(source: string, imports?: Record<string, string>, rootPath?: string): CompilationReport;
    setPlaybackMode(mode: PlaybackMode): void;
    seekTo(timestamp: Timestamp): void;
    updateParameter(target: PresentationUpdateTarget, value: ParameterValue, nowSeconds?: number): void;
    updateParameters(updates: ParameterUpdate[], nowSeconds?: number): void;
    togglePlay(): void;
    play(options?: PlayOptions): void;
    pause(): void;
    private requestStep;
    step(nowSeconds?: number): Promise<RuntimeStepResult>;
    private stop;
    dispose(): void;
    private runStep;
    private applyPlayUntil;
    private assertLive;
}
