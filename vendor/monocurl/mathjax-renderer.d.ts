type MonocurlLatexSvgRenderer = (kind: string, source: string) => string;
declare global {
    var __monocurlRenderLatexSvg: MonocurlLatexSvgRenderer | undefined;
}
export declare function installMonocurlMathJaxRenderer(): () => void;
export {};
