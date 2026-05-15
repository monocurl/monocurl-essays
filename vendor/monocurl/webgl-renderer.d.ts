import type { ExecutionSnapshot } from "./index.js";
export interface MonocurlWebGlRendererOptions {
    contextAttributes?: WebGLContextAttributes;
    pixelRatio?: number | (() => number);
    lineWidthPx?: number;
    dotRadiusPx?: number;
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
    render(snapshot: ExecutionSnapshot): void;
    resizeToDisplaySize(): boolean;
    dispose(): void;
    private drawTriangles;
    private drawLines;
    private drawDots;
    private resolvedPixelRatio;
    private assertLive;
}
export declare function createMonocurlWebGlRenderer(canvas: HTMLCanvasElement, options?: MonocurlWebGlRendererOptions): MonocurlWebGlRenderer;
