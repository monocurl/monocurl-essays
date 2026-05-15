export interface MonocurlMathJax {
    tex2svg(source: string, options?: {
        display?: boolean;
    }): unknown;
    startup?: {
        promise?: Promise<unknown>;
        adaptor?: {
            outerHTML(node: unknown): string;
            tags?: (node: unknown, name: string) => unknown[];
        };
    };
}
export interface MonocurlMathJaxRendererOptions {
    mathJax?: MonocurlMathJax;
    display?: boolean;
}
export type MonocurlLatexSvgRenderer = (kind: string, source: string) => string;
declare global {
    var MathJax: MonocurlMathJax | undefined;
    var __monocurlRenderLatexSvg: MonocurlLatexSvgRenderer | undefined;
}
export declare class MissingMathJaxError extends Error {
    constructor();
}
export declare function installMonocurlMathJaxRenderer(options?: MonocurlMathJaxRendererOptions): () => void;
export declare function renderMathJaxSvg(mathJax: MonocurlMathJax, source: string, display?: boolean): string;
export declare function normalizeMathJaxSvg(svg: string): string;
