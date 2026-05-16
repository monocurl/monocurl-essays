import type { CameraSnapshot, ExecutionSnapshot, MonocurlSnapshotListener } from "./index.js";
export interface MonocurlWebGlRendererOptions {
    contextAttributes?: WebGLContextAttributes;
    pixelRatio?: number | (() => number);
    lineWidthPx?: number;
    dotRadiusPx?: number;
}
export interface MonocurlWebGlRenderOptions {
    camera?: CameraSnapshot;
}
export interface MonocurlCameraControllerOptions {
    renderer?: MonocurlWebGlRenderer;
    rendererOptions?: MonocurlWebGlRendererOptions;
    enabled?: boolean;
}
export interface MonocurlSnapshotSource {
    addSnapshotListener(listener: MonocurlSnapshotListener): () => void;
}
export declare class UnsupportedWebGlRendererError extends Error {
    constructor();
}
export declare class MonocurlWebGlRenderer {
    readonly canvas: HTMLCanvasElement;
    readonly gl: WebGL2RenderingContext;
    private readonly triangleProgram;
    private readonly lineProgram;
    private readonly dotProgram;
    private readonly triangleBuffer;
    private readonly lineBuffer;
    private readonly dotBuffer;
    private readonly triangleVao;
    private readonly lineVao;
    private readonly dotVao;
    private readonly pixelRatio;
    private readonly lineWidthPx;
    private readonly dotRadiusPx;
    private disposed;
    constructor(canvas: HTMLCanvasElement, options?: MonocurlWebGlRendererOptions);
    render(snapshot: ExecutionSnapshot, options?: MonocurlWebGlRenderOptions): void;
    resizeToDisplaySize(): boolean;
    dispose(): void;
    private drawTriangles;
    private drawLines;
    private drawDots;
    private resolvedPixelRatio;
    private assertLive;
}
export declare function createMonocurlWebGlRenderer(canvas: HTMLCanvasElement, options?: MonocurlWebGlRendererOptions): MonocurlWebGlRenderer;
export declare class MonocurlCameraController {
    readonly canvas: HTMLCanvasElement;
    readonly renderer: MonocurlWebGlRenderer;
    private readonly unsubscribeSnapshot;
    private readonly ownsRenderer;
    private readonly abortController;
    private readonly previousCursor;
    private readonly previousTouchAction;
    private resizeObserver;
    private latestSnapshot;
    private cameraOverride;
    private resetCamera;
    private dragState;
    private disposed;
    constructor(canvas: HTMLCanvasElement, loop: MonocurlSnapshotSource, options?: MonocurlCameraControllerOptions);
    reset(): void;
    dispose(): void;
    private installPointerListeners;
    private installResizeObserver;
    private beginDrag;
    private updateDrag;
    private endDrag;
    private renderLatest;
    private displayCamera;
    private syncSceneCamera;
}
export declare function installMonocurlCameraController(canvas: HTMLCanvasElement, loop: MonocurlSnapshotSource, options?: MonocurlCameraControllerOptions): MonocurlCameraController;
