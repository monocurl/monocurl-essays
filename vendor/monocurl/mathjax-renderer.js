import { liteAdaptor } from "mathjax-full/js/adaptors/liteAdaptor.js";
import { RegisterHTMLHandler } from "mathjax-full/js/handlers/html.js";
import { AllPackages } from "mathjax-full/js/input/tex/AllPackages.js";
import { TeX } from "mathjax-full/js/input/tex.js";
import { mathjax } from "mathjax-full/js/mathjax.js";
import { SVG } from "mathjax-full/js/output/svg.js";
const installedRenderers = [];
let baseRenderer;
const MATHJAX_SVG_UNITS_PER_TEX_POINT = 100;
const adaptor = liteAdaptor();
RegisterHTMLHandler(adaptor);
const texInput = new TeX({ packages: AllPackages });
const svgOutput = new SVG({ fontCache: "none" });
const mathDocument = mathjax.document("", {
    InputJax: texInput,
    OutputJax: svgOutput,
});
export function installMonocurlMathJaxRenderer() {
    if (installedRenderers.length === 0) {
        baseRenderer = globalThis.__monocurlRenderLatexSvg;
    }
    const entry = {
        renderer: (kind, source) => renderMathJaxSvg(kind, source),
    };
    installedRenderers.push(entry);
    globalThis.__monocurlRenderLatexSvg = entry.renderer;
    return () => {
        const index = installedRenderers.indexOf(entry);
        if (index === -1) {
            return;
        }
        installedRenderers.splice(index, 1);
        const current = installedRenderers[installedRenderers.length - 1];
        if (current !== undefined) {
            globalThis.__monocurlRenderLatexSvg = current.renderer;
            return;
        }
        globalThis.__monocurlRenderLatexSvg = baseRenderer;
        baseRenderer = undefined;
    };
}
function renderMathJaxSvg(kind, source) {
    const container = mathDocument.convert(mathJaxSource(kind, source), {
        display: false,
    });
    const svg = adaptor.tags(container, "svg")[0];
    if (svg === undefined) {
        throw new Error("MathJax did not produce SVG markup");
    }
    return serializeNormalizedSvg(svg);
}
function mathJaxSource(kind, source) {
    return kind === "text" ? `\\text{${source}}` : source;
}
function serializeNormalizedSvg(svg) {
    const rawViewBox = adaptor.getAttribute(svg, "viewBox");
    const viewBox = parseViewBox(typeof rawViewBox === "string" ? rawViewBox : "");
    if (viewBox === undefined) {
        return adaptor.outerHTML(svg);
    }
    const unitScale = 1 / MATHJAX_SVG_UNITS_PER_TEX_POINT;
    const scaledViewBox = viewBox.map((value) => value * unitScale);
    adaptor.setAttribute(svg, "viewBox", formatViewBox(scaledViewBox));
    adaptor.setAttribute(svg, "width", formatNumber(scaledViewBox[2]));
    adaptor.setAttribute(svg, "height", formatNumber(scaledViewBox[3]));
    wrapRenderableChildren(svg, unitScale);
    return adaptor.outerHTML(svg);
}
function wrapRenderableChildren(svg, scale) {
    const group = adaptor.node("g", {
        transform: `scale(${formatNumber(scale)})`,
    });
    for (const child of adaptor.childNodes(svg)) {
        if (!isDefsNode(child)) {
            adaptor.append(group, child);
        }
    }
    if (adaptor.childNodes(group).length > 0) {
        adaptor.append(svg, group);
    }
}
function isDefsNode(node) {
    return adaptor.kind(node) === "defs";
}
function parseViewBox(source) {
    const values = parseNumberList(source);
    if (values.length !== 4 || values.some((value) => !Number.isFinite(value))) {
        return undefined;
    }
    return values;
}
function parseNumberList(source) {
    const values = [];
    let token = "";
    const flush = () => {
        if (token !== "") {
            values.push(Number(token));
            token = "";
        }
    };
    for (const char of source.trim()) {
        if (char === "," || char.trim() === "") {
            flush();
        }
        else {
            token += char;
        }
    }
    flush();
    return values;
}
function formatViewBox(viewBox) {
    return viewBox.map(formatNumber).join(" ");
}
function formatNumber(value) {
    return Number.parseFloat(value.toFixed(6)).toString();
}
