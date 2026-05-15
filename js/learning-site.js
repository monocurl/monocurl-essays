import {
  MonocurlWebGlRenderer,
  createMonocurlLoop,
} from "/vendor/monocurl/index.js";

document.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-copy-code]");
  if (!(button instanceof HTMLButtonElement)) return;

  const code = button.closest(".code-shell")?.querySelector("code");
  if (!code) return;

  try {
    await navigator.clipboard.writeText(code.textContent ?? "");
    button.textContent = "Copied";
    window.setTimeout(() => {
      button.textContent = "Copy";
    }, 1200);
  } catch (_) {
    button.textContent = "Failed";
    window.setTimeout(() => {
      button.textContent = "Copy";
    }, 1200);
  }
});

for (const block of document.querySelectorAll("[data-mcl-slideshow]")) {
  void mountSlideshow(block).catch((error) => {
    const status = block.querySelector("[data-mcl-status]");
    if (status) {
      status.textContent = error instanceof Error ? error.message : String(error);
      status.classList.add("error");
    }
  });
}

async function mountSlideshow(block) {
  const canvas = block.querySelector("[data-mcl-canvas]");
  const sourceNode = block.querySelector("[data-mcl-source]");
  const status = block.querySelector("[data-mcl-status]");
  const slideHost = block.querySelector("[data-mcl-slides]");
  const slidePicker = block.querySelector("[data-mcl-slide-picker]");
  const currentSlideButton = block.querySelector("[data-mcl-current-slide]");
  const paramPanel = block.querySelector("[data-mcl-param-panel]");
  const paramHost = block.querySelector("[data-mcl-params]");
  const timeLabel = block.querySelector("[data-mcl-time]");
  const playButton = block.querySelector("[data-mcl-play]");
  const previousButton = block.querySelector("[data-mcl-prev]");
  const nextButton = block.querySelector("[data-mcl-next]");

  if (!(canvas instanceof HTMLCanvasElement) || !sourceNode) {
    throw new Error("missing slideshow mount point");
  }

  const source = JSON.parse(sourceNode.textContent || "\"\"");
  const renderer = new MonocurlWebGlRenderer(canvas);
  const allow = new Set(
    (block.getAttribute("data-allow") || "")
      .split(",")
      .map((name) => name.trim())
      .filter(Boolean),
  );
  const ranges = parseRanges(block.getAttribute("data-ranges"));

  let latestSnapshot = undefined;
  let reportSlides = [];
  let renderedParamKeys = "";
  let activeSlide = 0;
  let displaySlideOverride = 0;
  let playbackPump = undefined;

  await globalThis.MathJax?.startup?.promise;

  const loop = await createMonocurlLoop({
    onStep(result) {
      for (const snapshot of result.snapshots) {
        latestSnapshot = snapshot;
        renderer.render(snapshot);
      }
      if (latestSnapshot) {
        const displayTimestamp = resolveDisplayTimestamp(
          latestSnapshot,
          reportSlides,
          displaySlideOverride,
        );
        displaySlideOverride = displayTimestamp.override;
        activeSlide = displayTimestamp.slide;
        updateRuntimeStatus(status, latestSnapshot);
        updateTimeLabel(timeLabel, displayTimestamp);
        updateSlidePicker(slideHost, currentSlideButton, reportSlides, activeSlide);
        updateParameterPanel(
          block,
          paramPanel,
          paramHost,
          loop,
          latestSnapshot,
          allow,
          ranges,
          renderedParamKeys,
          (keys) => {
            renderedParamKeys = keys;
          },
        );
      }
      if (playButton) {
        playButton.classList.toggle("is-playing", result.isPlaying);
        playButton.setAttribute("aria-label", result.isPlaying ? "pause" : "play");
      }
    },
    onError(error) {
      reportRuntimeError(status, error);
    },
  });

  const schedulePlaybackPump = () => {
    if (playbackPump !== undefined) return;
    const tick = async () => {
      playbackPump = undefined;
      try {
        await loop.step();
      } catch (error) {
        reportRuntimeError(status, error);
        return;
      }
      if (loop.isPlaying || loop.needsWork) {
        playbackPump = window.setTimeout(tick, 16);
      }
    };
    playbackPump = window.setTimeout(tick, 16);
  };

  const report = loop.loadSource(source);
  reportSlides = normalizeSlides(report.slides ?? []);
  if (!report.ok) {
    const diagnostic = report.diagnostics?.[0];
    throw new Error(diagnostic?.message ?? "Monocurl compile failed");
  }

  const selectSlide = (slide) => {
    if (!slide) return;
    activeSlide = slide.index;
    displaySlideOverride = slide.index;
    updateSlidePicker(slideHost, currentSlideButton, reportSlides, activeSlide);
  };

  loop.setPlaybackMode("presentation");
  renderSlides(slideHost, reportSlides, loop, currentSlideButton, selectSlide);
  activeSlide = reportSlides[0]?.index ?? 0;
  displaySlideOverride = activeSlide;
  seekToSlideStart(loop, reportSlides, reportSlides[0]);
  updateSlidePicker(slideHost, currentSlideButton, reportSlides, activeSlide);
  await loop.step();

  playButton?.addEventListener("click", () => {
    if (loop.isPlaying) {
      loop.pause();
    } else {
      const runtimeTimestamp = latestSnapshot?.currentTimestamp;
      let targetSlide = slideByIndex(reportSlides, activeSlide);
      if (
        runtimeTimestamp?.time === null &&
        !boundaryBeforeSlide(reportSlides, runtimeTimestamp, targetSlide)
      ) {
        seekToSlideStart(loop, reportSlides, targetSlide);
      }
      if (targetSlide) {
        displaySlideOverride = targetSlide.index;
        loop.play({
          until: {
            slide: targetSlide.runtimeIndex ?? targetSlide.index,
            time: Number.POSITIVE_INFINITY,
          },
        });
      }
    }
    schedulePlaybackPump();
  });
  previousButton?.addEventListener("click", () => {
    void runRuntimeCommand(loop, () => {
      const slide = adjacentSlide(reportSlides, activeSlide, -1);
      selectSlide(slide);
      seekToSlideStart(loop, reportSlides, slide);
    });
  });
  nextButton?.addEventListener("click", () => {
    void runRuntimeCommand(loop, () => {
      const slide = adjacentSlide(reportSlides, activeSlide, 1);
      selectSlide(slide);
      seekToSlideStart(loop, reportSlides, slide);
    });
  });
  currentSlideButton?.addEventListener("click", () => {
    const expanded = currentSlideButton.getAttribute("aria-expanded") === "true";
    setSlideMenuOpen(slideHost, currentSlideButton, !expanded);
  });
  document.addEventListener("click", (event) => {
    if (!slidePicker?.contains(event.target)) {
      setSlideMenuOpen(slideHost, currentSlideButton, false);
    }
  });
}

function reportRuntimeError(status, error) {
  console.error(error);
  if (!status) return;
  status.textContent = error instanceof Error ? error.message : String(error);
  status.classList.add("error");
}

function renderSlides(host, slides, loop, currentSlideButton, selectSlide) {
  if (!host) return;
  host.textContent = "";

  for (const slide of slides) {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.slideIndex = String(slide.index);
    button.role = "option";
    button.textContent = slide.name || `slide ${slide.index}`;
    button.addEventListener("click", () => {
      void runRuntimeCommand(loop, () => {
        selectSlide?.(slide);
        seekToSlideStart(loop, slides, slide);
      });
      setSlideMenuOpen(host, currentSlideButton, false);
    });
    host.append(button);
  }
}

function normalizeSlides(slides) {
  return slides.map((slide, position) => {
    const runtimeIndex = Number.isInteger(slide.index) ? slide.index : position;
    return {
      ...slide,
      index: runtimeIndex,
      runtimeIndex,
    };
  });
}

function seekToSlideStart(loop, slides, slide) {
  if (!slide) return;
  const previous = previousSlide(slides, slide);
  const boundarySlide = previous?.runtimeIndex ?? Math.max(0, slide.index - 1);
  loop.seekTo({ slide: boundarySlide, time: Number.POSITIVE_INFINITY });
}

function slideByIndex(slides, index) {
  return slides.find((slide) => slide.index === index);
}

function adjacentSlide(slides, current, delta) {
  if (slides.length === 0) return undefined;
  const currentPosition = slides.findIndex((slide) => slide.index === current);
  const base = currentPosition === -1 ? 0 : currentPosition;
  const nextPosition = Math.max(0, Math.min(slides.length - 1, base + delta));
  return slides[nextPosition];
}

function previousSlide(slides, slide) {
  const position = slides.findIndex((candidate) => candidate.index === slide?.index);
  return position > 0 ? slides[position - 1] : undefined;
}

async function runRuntimeCommand(loop, command) {
  command();
  try {
    await loop.step();
  } catch (error) {
    console.error(error);
  }
}

function updateSlidePicker(host, currentButton, slides, activeSlide) {
  if (currentButton) {
    const slide = slides.find((candidate) => candidate.index === activeSlide);
    currentButton.textContent = slide?.name || `slide ${activeSlide}`;
  }
  if (!host) return;
  for (const button of host.querySelectorAll("[data-slide-index]")) {
    const active = Number(button.dataset.slideIndex) === activeSlide;
    button.classList.toggle("active", active);
    if (active) button.setAttribute("aria-current", "true");
    else button.removeAttribute("aria-current");
  }
}

function setSlideMenuOpen(host, button, open) {
  if (host) host.hidden = !open;
  if (button) button.setAttribute("aria-expanded", open ? "true" : "false");
}

function updateRuntimeStatus(status, snapshot) {
  if (!status) return;
  const error = snapshot.errors?.[0];
  if (error) {
    status.textContent = error.message;
    status.classList.add("error");
    return;
  }
  status.classList.remove("error");
  status.textContent = snapshot.isLoading ? "Loading..." : "";
}

function resolveDisplayTimestamp(snapshot, slides, override) {
  const timestamp = snapshot.currentTimestamp;
  if (!timestamp) return { slide: 0, time: 0, isEnd: false, override };

  if (override !== undefined) {
    const overrideSlide = slideByIndex(slides, override);
    if (boundaryBeforeSlide(slides, timestamp, overrideSlide)) {
      return { slide: override, time: 0, isEnd: false, override };
    }
    override = undefined;
  }

  if (timestamp.time === null) {
    const current = timestamp.slide;
    if (current === 0) {
      const firstSlide = slides[0];
      return {
        slide: firstSlide?.index ?? 0,
        time: 0,
        isEnd: false,
        override: firstSlide?.index,
      };
    }

    const nextSlide = adjacentSlide(slides, current, 1);
    if (nextSlide && nextSlide.index !== current) {
      return {
        slide: nextSlide.index,
        time: 0,
        isEnd: false,
        override: nextSlide.index,
      };
    }

    return { slide: current, time: 0, isEnd: true, override };
  }

  return { slide: timestamp.slide, time: timestamp.time, isEnd: false, override };
}

function boundaryBeforeSlide(slides, timestamp, slide) {
  if (!timestamp || !slide || timestamp.time !== null) return false;
  const previous = previousSlide(slides, slide);
  const boundarySlide = previous?.runtimeIndex ?? Math.max(0, slide.index - 1);
  return timestamp.slide === boundarySlide;
}

function updateTimeLabel(label, timestamp) {
  if (!label) return;
  if (timestamp.isEnd) {
    label.textContent = "end";
  } else {
    label.textContent = `${
      Number.isFinite(timestamp.time) ? timestamp.time.toFixed(2) : "0.00"
    }s`;
  }
}

function updateParameterPanel(
  block,
  panel,
  host,
  loop,
  snapshot,
  allow,
  ranges,
  renderedParamKeys,
  setRenderedParamKeys,
) {
  if (!host) return;
  const controls = collectControls(snapshot, allow);
  const keys = controls.map((control) => control.key).join("|");

  block.classList.toggle("has-params", controls.length > 0);
  if (panel) panel.hidden = controls.length === 0;
  if (controls.length === 0) {
    host.textContent = "";
    if (renderedParamKeys !== "") setRenderedParamKeys("");
    return;
  }

  if (keys !== renderedParamKeys) {
    host.textContent = "";
    for (const control of controls) {
      host.append(createControlRow(loop, control, ranges.get(control.label)));
    }
    setRenderedParamKeys(keys);
  }

  for (const control of controls) {
    const row = host.querySelector(`[data-param-key="${cssEscape(control.key)}"]`);
    if (row) {
      syncControlLock(row, control);
      if (!row.matches(":focus-within")) {
        syncControlValue(row, control.value);
      }
    }
  }
}

function collectControls(snapshot, allow) {
  const controls = [];
  const parameters = snapshot.parameters;
  if (!parameters) return controls;

  for (const param of parameters.params ?? []) {
    if (allow.size !== 0 && !allow.has(param.name)) continue;
    controls.push({
      key: JSON.stringify(param.target),
      label: param.name,
      group: "param",
      target: param.target,
      value: param.value,
      locked: param.locked,
    });
  }

  for (const mesh of parameters.meshes ?? []) {
    if (allow.size !== 0 && !allow.has(mesh.name)) continue;
    for (const attribute of mesh.attributes ?? []) {
      controls.push({
        key: JSON.stringify(attribute.target),
        label: `${mesh.name}.${attribute.name}`,
        group: "mesh",
        target: attribute.target,
        value: attribute.value,
        locked: mesh.locked,
      });
    }
  }

  return controls;
}

function createControlRow(loop, control, range) {
  const row = document.createElement("label");
  row.className = "param-row";
  row.dataset.paramKey = control.key;

  const top = document.createElement("span");
  top.className = "param-row-top";

  const name = document.createElement("strong");
  name.textContent = control.label;
  const valueLabel = document.createElement("output");
  valueLabel.className = "param-value";
  top.append(name, valueLabel);

  const input = inputForValue(control.value, range);
  input.addEventListener("change", () => updateControlFromInput(loop, row, input, control));
  if (input.type === "range") {
    input.addEventListener("input", () => updateControlFromInput(loop, row, input, control));
  }

  row.append(top, input);
  syncControlLock(row, control);
  syncControlValue(row, control.value);
  return row;
}

function updateControlFromInput(loop, row, input, control) {
  updateRangeProgress(input);
  const value = parseInputValue(input, input.dataset.kind ?? control.value.kind);
  if (!value) return;

  const output = row.querySelector("output");
  if (output) output.textContent = formatParameterValue(value);
  input.title = formatParameterValue(value);
  loop.updateParameter(control.target, value);
}

function syncControlLock(row, control) {
  const input = row.querySelector("input");
  const isLocked = Boolean(control.locked);
  row.classList.toggle("locked", isLocked);
  row.setAttribute("aria-disabled", isLocked ? "true" : "false");
  row.title = isLocked ? "Locked while the scene is animating" : "";
  if (input) {
    input.disabled = isLocked || input.dataset.readonly === "true";
  }
}

function inputForValue(value, range) {
  const input = document.createElement("input");
  input.dataset.kind = value.kind;
  if (range) {
    input.dataset.rangeMin = String(range.min);
    input.dataset.rangeMax = String(range.max);
    if (range.step !== undefined) input.dataset.rangeStep = String(range.step);
  }
  syncInputForKind(input, value);
  return input;
}

function syncControlValue(row, value) {
  const input = row.querySelector("input");
  if (!input) return;
  syncInputForKind(input, value);
  const output = row.querySelector("output");
  if (output) output.textContent = formatParameterValue(value);
}

function syncInputForKind(input, value) {
  if (value.kind === "float" || value.kind === "int") {
    input.type = "range";
    input.min = input.dataset.rangeMin ?? String(Math.min(-10, Math.floor(value.value - 5)));
    input.max = input.dataset.rangeMax ?? String(Math.max(10, Math.ceil(value.value + 5)));
    input.step = input.dataset.rangeStep ?? (value.kind === "int" ? "1" : "0.01");
    input.value = String(value.value);
    input.title = String(value.value);
    updateRangeProgress(input);
  } else if (value.kind === "vectorFloat" || value.kind === "vectorInt") {
    input.type = "text";
    input.value = value.value.join(", ");
  } else if (value.kind === "complex") {
    input.type = "text";
    input.value = `${value.re}, ${value.im}`;
  } else if (value.kind === "camera") {
    input.type = "text";
    input.value = "camera";
    input.dataset.readonly = "true";
    input.disabled = true;
  } else {
    input.type = "text";
    input.value = value.kind;
    input.dataset.readonly = "true";
    input.disabled = true;
  }
}

function updateRangeProgress(input) {
  if (input.type !== "range") return;
  const min = Number(input.min);
  const max = Number(input.max);
  const value = Number(input.value);
  const percent =
    Number.isFinite(min) && Number.isFinite(max) && max !== min
      ? Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100))
      : 0;
  input.style.setProperty("--range-progress", `${percent}%`);
}

function parseRanges(source) {
  const map = new Map();
  if (!source) return map;
  try {
    const parsed = JSON.parse(source);
    for (const [name, range] of Object.entries(parsed)) {
      if (typeof range?.min !== "number" || typeof range?.max !== "number") continue;
      map.set(name, {
        min: range.min,
        max: range.max,
        step: typeof range.step === "number" ? range.step : undefined,
      });
    }
  } catch (error) {
    console.warn("invalid Monocurl range metadata", error);
  }
  return map;
}

function formatParameterValue(value) {
  if (value.kind === "float") return value.value.toFixed(3);
  if (value.kind === "int") return String(value.value);
  if (value.kind === "vectorFloat" || value.kind === "vectorInt") {
    return `[${value.value.map((item) => Number(item).toFixed(2)).join(", ")}]`;
  }
  if (value.kind === "complex") return `${value.re.toFixed(2)} + ${value.im.toFixed(2)}i`;
  return value.kind;
}

function parseInputValue(input, kind) {
  if (kind === "float") {
    return { kind, value: Number(input.value) };
  }
  if (kind === "int") {
    return { kind, value: Math.round(Number(input.value)) };
  }
  if (kind === "vectorFloat" || kind === "vectorInt") {
    const values = input.value.split(",").map((part) => Number(part.trim()));
    if (values.some(Number.isNaN)) return undefined;
    return {
      kind,
      value: kind === "vectorInt" ? values.map(Math.round) : values,
    };
  }
  if (kind === "complex") {
    const [re, im] = input.value.split(",").map((part) => Number(part.trim()));
    if (Number.isNaN(re) || Number.isNaN(im)) return undefined;
    return { kind, re, im };
  }
  return undefined;
}

function cssEscape(value) {
  if (globalThis.CSS?.escape) return globalThis.CSS.escape(value);
  return value.replace(/["\\]/g, "\\$&");
}
