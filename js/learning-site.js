let monocurlRuntime;

function loadMonocurlRuntime() {
  monocurlRuntime ??= import(new URL("../vendor/monocurl/index.js", import.meta.url).href);
  return monocurlRuntime;
}

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
  prepareLazySlideshow(block);
}

function prepareLazySlideshow(block) {
  setSlideshowControlsDisabled(block, true);

  let observer;
  let mountPromise;
  const mountOnce = () => {
    observer?.disconnect();
    if (mountPromise) return mountPromise;

    block.setAttribute("data-mcl-load-state", "loading");
    mountPromise = mountSlideshow(block)
      .then(() => {
        block.setAttribute("data-mcl-load-state", "ready");
        setSlideshowControlsDisabled(block, false);
      })
      .catch((error) => {
        block.setAttribute("data-mcl-load-state", "error");
        setSlideshowControlsDisabled(block, true);
        reportRuntimeError(block.querySelector("[data-mcl-status]"), error);
      });
    return mountPromise;
  };

  block.addEventListener("focusin", () => void mountOnce(), { once: true });
  block.addEventListener("pointerenter", () => void mountOnce(), { once: true });

  if (!("IntersectionObserver" in window)) {
    void mountOnce();
    return;
  }

  observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        void mountOnce();
      }
    },
    { threshold: 0 },
  );
  observer.observe(block);
}

function setSlideshowControlsDisabled(block, disabled) {
  for (const control of block.querySelectorAll(
    "[data-mcl-prev], [data-mcl-play], [data-mcl-next], [data-mcl-current-slide]",
  )) {
    if (control instanceof HTMLButtonElement) {
      control.disabled = disabled;
    }
  }
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

  const {
    MonocurlWebGlRenderer,
    createMonocurlLoop,
    installMonocurlCameraController,
  } = await loadMonocurlRuntime();
  const source = JSON.parse(sourceNode.textContent || "\"\"");
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
  const controlCache = new Map();

  const loop = await createMonocurlLoop();
  if (block.hasAttribute("data-mcl-slideshow3d")) {
    installMonocurlCameraController(canvas, loop);
  } else {
    const renderer = new MonocurlWebGlRenderer(canvas);
    observeCanvasResize(canvas, renderer, () => latestSnapshot);
    loop.addSnapshotListener((snapshot) => {
      renderer.render(snapshot);
    });
  }
  loop.addSnapshotListener((snapshot) => {
    latestSnapshot = snapshot;
    const displayTimestamp = resolveDisplayTimestamp(snapshot);
    activeSlide = displayTimestamp.slide;
    updateRuntimeStatus(status, snapshot);
    updateTimeLabel(timeLabel, displayTimestamp);
    updateSlidePicker(slideHost, currentSlideButton, reportSlides, activeSlide);
    updateParameterPanel(
      block,
      paramPanel,
      paramHost,
      loop,
      snapshot,
      allow,
      ranges,
      controlCache,
      renderedParamKeys,
      (keys) => {
        renderedParamKeys = keys;
      },
    );
  });
  loop.addStepListener((result) => {
    if (playButton) {
      playButton.classList.toggle("is-playing", result.isPlaying);
      playButton.setAttribute("aria-label", result.isPlaying ? "pause" : "play");
    }
  });
  loop.addErrorListener((error) => {
    reportRuntimeError(status, error);
  });

  const report = loop.loadSource(source);
  reportSlides = normalizeSlides(report.slides ?? []);
  if (!report.ok) {
    const diagnostic = report.diagnostics?.[0];
    throw new Error(diagnostic?.message ?? "Monocurl compile failed");
  }

  const selectSlide = (slide) => {
    if (!slide) return;
    activeSlide = slide.index;
    updateSlidePicker(slideHost, currentSlideButton, reportSlides, activeSlide);
  };

  renderSlides(slideHost, reportSlides, loop, currentSlideButton, selectSlide);
  activeSlide = 0;
  seekToSceneStart(loop);
  updateSlidePicker(slideHost, currentSlideButton, reportSlides, activeSlide);
  await loop.step();

  playButton?.addEventListener("click", () => {
    void runRuntimeCommand(loop, () => {
      if (!loop.isPlaying && isAtSceneEnd(latestSnapshot, reportSlides.length)) {
        seekToSceneStart(loop);
      }
      loop.togglePlay();
    });
  });
  previousButton?.addEventListener("click", () => {
    void runRuntimeCommand(loop, () => {
      loop.pause();
      const target = previousSlideTarget(latestSnapshot, reportSlides.length);
      loop.seekTo(target);
    });
  });
  nextButton?.addEventListener("click", () => {
    void runRuntimeCommand(loop, () => {
      loop.pause();
      const target = nextSlideTarget(latestSnapshot, reportSlides.length);
      loop.seekTo(target);
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

function observeCanvasResize(canvas, renderer, getSnapshot) {
  if (!("ResizeObserver" in window)) return;

  const redraw = () => {
    const snapshot = getSnapshot();
    if (snapshot) {
      renderer.render(snapshot);
    }
  };

  const observer = new ResizeObserver(redraw);
  observer.observe(canvas);
}

function renderSlides(host, slides, loop, currentSlideButton, selectSlide) {
  if (!host) return;
  host.textContent = "";

  const sceneStartButton = document.createElement("button");
  sceneStartButton.type = "button";
  sceneStartButton.dataset.slideIndex = "0";
  sceneStartButton.role = "option";
  sceneStartButton.textContent = "initial";
  sceneStartButton.addEventListener("click", () => {
    void runRuntimeCommand(loop, () => {
      loop.pause();
      selectSlide?.({ index: 0 });
      seekToSceneStart(loop);
    });
    setSlideMenuOpen(host, currentSlideButton, false);
  });
  host.append(sceneStartButton);

  for (const slide of slides) {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.slideIndex = String(slide.index);
    button.role = "option";
    button.textContent = slide.name || `slide ${slide.index}`;
    button.addEventListener("click", () => {
      void runRuntimeCommand(loop, () => {
        loop.pause();
        selectSlide?.(slide);
        seekToSlideEnd(loop, slide);
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

function seekToSceneStart(loop) {
  loop.seekTo({ slide: 0, time: Infinity });
}

function seekToSlideEnd(loop, slide) {
  if (!slide) return;
  loop.seekTo({ slide: slide.runtimeIndex ?? slide.index, time: Infinity });
}

function previousSlideTarget(snapshot, slideCount) {
  if (slideCount === 0) return { slide: 0, time: Infinity };
  const timestamp = runtimeTimestamp(snapshot);
  const slide = Math.min(timestamp.slide, slideCount);
  return { slide: Math.max(0, slide - 1), time: Infinity };
}

function nextSlideTarget(snapshot, slideCount) {
  if (slideCount === 0) return { slide: 0, time: Infinity };
  const timestamp = runtimeTimestamp(snapshot);
  const slide = Math.min(timestamp.slide, slideCount);
  const targetSlide =
    timestamp.time === Infinity ? Math.min(slide + 1, slideCount) : slide;
  return { slide: targetSlide, time: Infinity };
}

function isAtSceneEnd(snapshot, slideCount) {
  if (slideCount === 0) return false;
  const timestamp = runtimeTimestamp(snapshot);
  return timestamp.time === Infinity && timestamp.slide >= slideCount;
}

function runtimeTimestamp(snapshot) {
  const timestamp = snapshot?.currentTimestamp;
  if (!timestamp) return { slide: 0, time: Infinity };
  return {
    slide: Number.isInteger(timestamp.slide) ? timestamp.slide : 0,
    time: timestamp.time === null ? Infinity : timestamp.time,
  };
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
    if (activeSlide === 0) {
      currentButton.textContent = "initial";
    } else {
      const slide = slides.find((candidate) => candidate.index === activeSlide);
      currentButton.textContent = slide?.name || `slide ${activeSlide}`;
    }
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

function resolveDisplayTimestamp(snapshot) {
  const timestamp = snapshot.currentTimestamp;
  if (!timestamp) return { slide: 0, time: 0 };

  if (timestamp.time === null) {
    return {
      slide: timestamp.slide,
      time: boundaryDisplayTime(snapshot, timestamp.slide),
    };
  }

  return { slide: timestamp.slide, time: timestamp.time };
}

function boundaryDisplayTime(snapshot, slide) {
  if (slide === 0) return 0;
  const duration =
    snapshot.slideDurations?.[slide - 1] ?? snapshot.minimumSlideDurations?.[slide - 1];
  return typeof duration === "number" && Number.isFinite(duration) ? duration : 0;
}

function updateTimeLabel(label, timestamp) {
  if (!label) return;
  label.textContent = `${
    Number.isFinite(timestamp.time) ? timestamp.time.toFixed(2) : "0.00"
  }s`;
}

function updateParameterPanel(
  block,
  panel,
  host,
  loop,
  snapshot,
  allow,
  ranges,
  controlCache,
  renderedParamKeys,
  setRenderedParamKeys,
) {
  if (!host) return;
  const controls = collectControls(snapshot, allow, controlCache);
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

const HIDDEN_PARAMETER_NAMES = new Set(["camera", "background"]);

function collectControls(snapshot, allow, cache) {
  const controls = [];
  const parameters = snapshot.parameters;
  if (!parameters) {
    return allow.size !== 0 && cache
      ? Array.from(cache.values()).filter(
          (control) =>
            allow.has(control.allowKey) && !HIDDEN_PARAMETER_NAMES.has(control.allowKey),
        )
      : controls;
  }

  for (const param of parameters.params ?? []) {
    if (HIDDEN_PARAMETER_NAMES.has(param.name)) continue;
    if (allow.size !== 0 && !allow.has(param.name)) continue;
    controls.push({
      key: JSON.stringify(param.target),
      cacheKey: `param:${param.name}`,
      allowKey: param.name,
      label: param.name,
      group: "param",
      target: param.target,
      value: param.value,
      locked: param.locked,
    });
  }

  for (const mesh of parameters.meshes ?? []) {
    if (HIDDEN_PARAMETER_NAMES.has(mesh.name)) continue;
    if (allow.size !== 0 && !allow.has(mesh.name)) continue;
    for (const attribute of mesh.attributes ?? []) {
      controls.push({
        key: JSON.stringify(attribute.target),
        cacheKey: `mesh:${mesh.name}.${attribute.name}`,
        allowKey: mesh.name,
        label: `${mesh.name}.${attribute.name}`,
        group: "mesh",
        target: attribute.target,
        value: attribute.value,
        locked: mesh.locked,
      });
    }
  }

  if (allow.size === 0 || !cache) {
    return controls;
  }

  for (const control of controls) {
    const cachedControl = cache.get(control.cacheKey);
    if (cachedControl) {
      Object.assign(cachedControl, control);
    } else {
      cache.set(control.cacheKey, control);
    }
  }

  return Array.from(cache.values()).filter(
    (control) => allow.has(control.allowKey) && !HIDDEN_PARAMETER_NAMES.has(control.allowKey),
  );
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

  control.value = value;
  const output = row.querySelector("output");
  if (output) output.textContent = formatParameterValue(value);
  input.title = formatParameterValue(value);
  loop.updateParameter(control.target, value);
  void loop.step().catch((error) => {
    console.error(error);
  });
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
