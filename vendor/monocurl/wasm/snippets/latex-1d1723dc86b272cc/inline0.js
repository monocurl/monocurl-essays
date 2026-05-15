
function normalizeMathJaxSvg(svg) {
  const match = svg.match(/<svg\b([^>]*)>([\s\S]*)<\/svg>/i);
  if (!match) {
    return svg;
  }

  const attributes = match[1];
  const viewBoxMatch = attributes.match(/\bviewBox\s*=\s*(['"])(.*?)\1/i);
  if (!viewBoxMatch) {
    return svg;
  }

  const values = viewBoxMatch[2].trim().split(/[\s,]+/).map(Number);
  if (values.length !== 4 || values.some((value) => !Number.isFinite(value))) {
    return svg;
  }

  const scale = 0.01;
  const scaled = values.map((value) => value * scale);
  let nextAttributes = writeSvgAttribute(attributes, "viewBox", scaled.map(formatNumber).join(" "));
  nextAttributes = writeSvgAttribute(nextAttributes, "width", formatNumber(scaled[2]));
  nextAttributes = writeSvgAttribute(nextAttributes, "height", formatNumber(scaled[3]));
  return `<svg${nextAttributes}><g transform="scale(${formatNumber(scale)})">${match[2]}</g></svg>`;
}

function writeSvgAttribute(attributes, name, value) {
  const pattern = new RegExp(`\\s${name}\\s*=\\s*(['"]).*?\\1`, "i");
  const replacement = ` ${name}="${value}"`;
  return pattern.test(attributes) ? attributes.replace(pattern, replacement) : `${attributes}${replacement}`;
}

function formatNumber(value) {
  return Number.parseFloat(value.toFixed(6)).toString();
}

export function monocurlRenderLatexSvg(kind, source) {
  const hook = globalThis.__monocurlRenderLatexSvg;
  if (typeof hook === "function") {
    const rendered = hook(kind, source);
    if (typeof rendered !== "string") {
      throw new Error("__monocurlRenderLatexSvg must return an SVG string");
    }
    return rendered;
  }

  const mathJax = globalThis.MathJax;
  if (mathJax && typeof mathJax.tex2svg === "function") {
    const node = mathJax.tex2svg(source, { display: false });
    const adaptor = mathJax.startup && mathJax.startup.adaptor;
    if (typeof SVGSVGElement !== "undefined" && node instanceof SVGSVGElement) {
      return normalizeMathJaxSvg(node.outerHTML);
    }
    if (typeof Element !== "undefined" && node instanceof Element) {
      const svg = node.matches("svg") ? node : node.querySelector("svg");
      if (svg) {
        return normalizeMathJaxSvg(svg.outerHTML);
      }
    }
    if (adaptor && typeof adaptor.outerHTML === "function") {
      const tagged = typeof adaptor.tags === "function" ? adaptor.tags(node, "svg") : undefined;
      const svg = tagged && tagged[0] ? tagged[0] : node;
      const markup = adaptor.outerHTML(svg);
      const match = markup.match(/<svg\b[\s\S]*<\/svg>/i);
      return normalizeMathJaxSvg(match ? match[0] : markup);
    }
    if (typeof node.outerHTML === "string") {
      const match = node.outerHTML.match(/<svg\b[\s\S]*<\/svg>/i);
      return normalizeMathJaxSvg(match ? match[0] : node.outerHTML);
    }
  }

  throw new Error("Monocurl wasm text rendering requires globalThis.__monocurlRenderLatexSvg(kind, source) or a loaded MathJax tex2svg runtime");
}

export function monocurlJsErrorMessage(value) {
  if (typeof value === "string") {
    return value;
  }
  if (value && typeof value.message === "string") {
    return value.message;
  }
  try {
    return String(value);
  } catch {
    return "browser text backend failed";
  }
}
