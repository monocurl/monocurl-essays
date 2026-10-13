const root = document.documentElement;
root.classList.add("js");

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const siteRoot = document.body.dataset.root || "./";
const READ_KEY = "monocurl-essays-read";

let monocurlRuntime;

function loadMonocurlRuntime() {
  monocurlRuntime ??= import(new URL("../vendor/monocurl/index.js", import.meta.url).href);
  return monocurlRuntime;
}

// ---- small behaviours ----

document.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-copy-code]");
  if (!(button instanceof HTMLButtonElement)) return;

  const code = button.closest(".code-shell")?.querySelector("code");
  if (!code) return;

  let label = "Copied";
  try {
    await navigator.clipboard.writeText(code.textContent ?? "");
  } catch (_) {
    label = "Failed";
  }
  button.textContent = label;
  window.setTimeout(() => {
    button.textContent = "Copy";
  }, 1200);
});

document.addEventListener("click", (event) => {
  if (!event.target.closest("[data-open-shared]")) return;
  const shared = document.getElementById("shared-definitions");
  if (shared) shared.open = true;
});

document.addEventListener("click", (event) => {
  const option = event.target.closest(".quiz-option");
  if (!option || option.classList.contains("is-right") || option.classList.contains("is-wrong")) {
    return;
  }
  option.classList.add(option.hasAttribute("data-correct") ? "is-right" : "is-wrong");
});

// ---- reading state: progress line, section spy, read marks ----

function readLessons() {
  try {
    return new Set(JSON.parse(localStorage.getItem(READ_KEY) || "[]"));
  } catch (_) {
    return new Set();
  }
}

function markLessonRead(id) {
  const read = readLessons();
  if (read.has(id)) return;
  read.add(id);
  try {
    localStorage.setItem(READ_KEY, JSON.stringify([...read]));
  } catch (_) {
    // private mode: marks just do not persist
  }
  decorateReadLessons();
}

function decorateReadLessons() {
  const read = readLessons();
  for (const link of document.querySelectorAll("[data-lesson]")) {
    link.classList.toggle("is-read", read.has(link.dataset.lesson));
  }

  const start = document.querySelector("[data-continue]");
  if (!start) return;
  const rows = [...document.querySelectorAll(".lesson-row")];
  const next = rows.findIndex((row) => !read.has(row.dataset.lesson));
  if (next > 0) {
    start.href = rows[next].href;
    start.textContent = `Continue with lesson ${next + 1}`;
  }
}

function setupReadingState() {
  const article = document.querySelector(".essay");
  const prose = article?.querySelector(".prose");
  const tocLinks = [...document.querySelectorAll(".toc a")];
  const headings = tocLinks
    .map((link) => document.getElementById(decodeURIComponent(link.hash.slice(1))))
    .filter(Boolean);

  let queued = false;
  const update = () => {
    queued = false;
    if (!prose) return;

    const rect = prose.getBoundingClientRect();
    const span = rect.height - window.innerHeight * 0.6;
    const progress = span > 0 ? Math.min(1, Math.max(0, -rect.top / span)) : 0;
    root.style.setProperty("--read", progress.toFixed(4));
    if (progress > 0.9 && article.dataset.essay) markLessonRead(article.dataset.essay);

    const line = window.innerHeight * 0.3;
    let active = -1;
    headings.forEach((heading, index) => {
      if (heading.getBoundingClientRect().top < line) active = index;
    });
    tocLinks.forEach((link, index) => link.classList.toggle("active", index === active));
  };

  window.addEventListener(
    "scroll",
    () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(update);
    },
    { passive: true },
  );
  window.addEventListener("resize", update);
  update();
}

// ---- figures: autoplay in view, scrub, step through ----

function setupFigures() {
  const stages = [...document.querySelectorAll(".fig-stage")];
  if (!("IntersectionObserver" in window)) {
    stages.filter((stage) => stage.dataset.player).forEach(setupPlayer);
    return;
  }

  // fetch a video shortly before it scrolls into view
  const warm = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const video = entry.target.querySelector("video");
        if (video && video.preload !== "auto") {
          video.preload = "auto";
          video.load();
        }
        warm.unobserve(entry.target);
      }
    },
    { rootMargin: "900px 0px" },
  );

  for (const stage of stages) {
    if (stage.dataset.player) {
      warm.observe(stage);
      setupPlayer(stage);
    }
  }
}

function setupPlayer(stage) {
  const video = stage.querySelector("video");
  const toggle = stage.querySelector(".fig-toggle");
  const bar = stage.querySelector(".fig-bar");
  const figure = stage.closest(".fig") ?? stage.parentElement;
  const mode = stage.dataset.player;
  const steps = [...figure.querySelectorAll(".step-labels li")].map((label) => ({
    end: Number(label.dataset.end),
    label,
  }));
  const stepped = mode === "steps" && steps.length > 0;
  const prevButton = figure.querySelector("[data-step-prev]");
  const nextButton = figure.querySelector("[data-step-next]");
  const nextText = nextButton?.querySelector("span");
  const count = figure.querySelector(".step-count");
  const END_HOLD_MS = 1800;
  const EPSILON = 0.04;

  let visible = false;
  let userPaused = reduceMotion;
  let step = 0;
  let stepDone = false;
  let started = false;
  let holdTimer = 0;
  let frame = 0;

  if (reduceMotion && video.dataset.still) video.poster = video.dataset.still;

  const duration = () =>
    Number.isFinite(video.duration) && video.duration > 0
      ? video.duration
      : Number(stage.dataset.duration) || 1;
  const stepEnd = (index) => Math.min(steps[index].end, duration()) - EPSILON;

  const paint = () => {
    const progress = Math.min(1, video.currentTime / duration());
    stage.style.setProperty("--progress", progress.toFixed(4));
    bar?.setAttribute("aria-valuenow", String(Math.round(progress * 100)));
  };

  const syncSteps = () => {
    if (!stepped) return;
    steps.forEach((entry, index) => entry.label.classList.toggle("active", index === step));
    if (count) count.textContent = `${step + 1} / ${steps.length}`;
    if (prevButton) prevButton.disabled = step === 0 && !stepDone;
    const atEnd = step === steps.length - 1 && stepDone;
    if (nextText) nextText.textContent = atEnd ? "Replay" : "Next";
    nextButton?.setAttribute("aria-label", atEnd ? "Replay from the start" : "Next step");
  };

  const setState = () => {
    const ended = !stepped && mode === "once" && video.ended;
    stage.classList.toggle("is-ended", ended);
    stage.classList.toggle("is-paused", video.paused && !ended && (userPaused || stepped));
    toggle?.setAttribute(
      "aria-label",
      ended ? "Replay animation" : video.paused ? "Play animation" : "Pause animation",
    );
  };

  const tick = () => {
    paint();
    if (stepped && !video.paused && video.currentTime >= stepEnd(step)) {
      // no seek back to the exact boundary: a frame of overshoot is invisible, and a
      // seek would stall on hosts without range requests
      video.pause();
      stepDone = true;
      syncSteps();
      setState();
      return;
    }
    if (!video.paused) frame = requestAnimationFrame(tick);
  };

  const play = () => {
    window.clearTimeout(holdTimer);
    if (video.preload !== "auto") video.preload = "auto";
    started = true;
    video
      .play()
      .then(() => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(tick);
        setState();
      })
      .catch(() => {
        userPaused = true;
        setState();
      });
  };

  const pause = () => {
    window.clearTimeout(holdTimer);
    video.pause();
    setState();
  };

  const playStep = (index) => {
    step = index;
    stepDone = false;
    userPaused = false;
    const from = index === 0 ? 0 : stepEnd(index - 1);
    if (Math.abs(video.currentTime - from) > 0.08 || video.currentTime > stepEnd(index)) {
      video.currentTime = from;
    }
    syncSteps();
    play();
  };

  const showStepEnd = (index) => {
    pause();
    step = index;
    stepDone = true;
    video.currentTime = stepEnd(index);
    paint();
    syncSteps();
  };

  const next = () => {
    if (!stepDone) return showStepEnd(step);
    playStep(step === steps.length - 1 ? 0 : step + 1);
  };

  const previous = () => {
    if (step === 0) {
      pause();
      stepDone = false;
      video.currentTime = 0;
      paint();
      syncSteps();
      return;
    }
    showStepEnd(step - 1);
  };

  const togglePlayback = () => {
    if (stepped) return next();
    if (video.ended) {
      userPaused = false;
      video.currentTime = 0;
      return play();
    }
    userPaused = !video.paused;
    if (video.paused) play();
    else pause();
  };

  video.addEventListener("ended", () => {
    paint();
    setState();
    if (mode !== "loop" || userPaused) return;
    holdTimer = window.setTimeout(() => {
      if (!visible || userPaused) return;
      video.currentTime = 0;
      play();
    }, END_HOLD_MS);
  });
  video.addEventListener("pause", setState);
  video.addEventListener("seeked", paint);

  stage.addEventListener("click", (event) => {
    if (event.target.closest(".fig-bar")) return;
    togglePlayback();
  });
  nextButton?.addEventListener("click", next);
  prevButton?.addEventListener("click", previous);
  figure.addEventListener("keydown", (event) => {
    if (!stepped || event.target.closest(".fig-source")) return;
    if (event.key === "ArrowRight") next();
    else if (event.key === "ArrowLeft") previous();
    else return;
    event.preventDefault();
  });

  if (bar) setupScrubber(bar, video, duration, {
    begin: () => {
      const wasPlaying = !video.paused;
      pause();
      return wasPlaying;
    },
    end: (wasPlaying) => {
      if (stepped) {
        step = Math.max(0, steps.findIndex((_, index) => video.currentTime <= stepEnd(index) + EPSILON));
        stepDone = video.currentTime >= stepEnd(step) - EPSILON;
        syncSteps();
        if (wasPlaying && !stepDone) play();
      } else if (wasPlaying) {
        play();
      }
      setState();
    },
    paint,
  });

  new IntersectionObserver(
    ([entry]) => {
      visible = entry.isIntersecting && entry.intersectionRatio >= 0.55;
      if (!visible) {
        if (!video.paused) pause();
        return;
      }
      if (userPaused) return;
      if (stepped) {
        if (!started) playStep(0);
        else if (!stepDone) play();
      } else if (!video.ended || mode === "loop") {
        if (video.ended) video.currentTime = 0;
        play();
      }
    },
    { threshold: [0, 0.55, 1] },
  ).observe(stage);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden && !video.paused) pause();
    else if (!document.hidden && visible && !userPaused && !(stepped && stepDone) && !video.ended) play();
  });

  syncSteps();
  setState();
}

function setupScrubber(bar, video, duration, hooks) {
  let wasPlaying = false;

  const seek = (event) => {
    const rect = bar.getBoundingClientRect();
    const fraction = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
    video.currentTime = fraction * duration();
    hooks.paint();
  };

  bar.addEventListener("pointerdown", (event) => {
    bar.setPointerCapture(event.pointerId);
    bar.classList.add("is-dragging");
    wasPlaying = hooks.begin();
    seek(event);
  });
  bar.addEventListener("pointermove", (event) => {
    if (bar.classList.contains("is-dragging")) seek(event);
  });
  const release = () => {
    if (!bar.classList.contains("is-dragging")) return;
    bar.classList.remove("is-dragging");
    hooks.end(wasPlaying);
  };
  bar.addEventListener("pointerup", release);
  bar.addEventListener("pointercancel", release);
  bar.addEventListener("keydown", (event) => {
    const delta = event.key === "ArrowRight" ? 0.5 : event.key === "ArrowLeft" ? -0.5 : 0;
    if (!delta) return;
    event.preventDefault();
    event.stopPropagation();
    const playing = hooks.begin();
    video.currentTime = Math.min(duration(), Math.max(0, video.currentTime + delta));
    hooks.paint();
    hooks.end(playing);
  });
}

// ---- search ----

function setupSearch() {
  const openers = document.querySelectorAll("[data-search-open]");
  if (openers.length === 0 || typeof HTMLDialogElement === "undefined") return;

  let dialog;
  let input;
  let list;
  let index;
  let results = [];
  let active = 0;

  const build = () => {
    dialog = document.createElement("dialog");
    dialog.className = "search-modal";
    dialog.setAttribute("aria-label", "Search lessons");
    input = document.createElement("input");
    input.className = "search-input";
    input.type = "search";
    input.placeholder = "Search lessons: derivative, Bayes, eigenvector…";
    input.autocomplete = "off";
    input.spellcheck = false;
    list = document.createElement("ul");
    list.className = "search-results";
    dialog.append(input, list);
    document.body.append(dialog);

    input.addEventListener("input", () => {
      active = 0;
      render();
    });
    input.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        const step = event.key === "ArrowDown" ? 1 : -1;
        active = (active + step + results.length) % Math.max(1, results.length);
        render();
      } else if (event.key === "Enter" && results[active]) {
        window.location.href = siteRoot + results[active].u;
      }
    });
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  };

  const score = (entry, words) => {
    let total = 0;
    for (const word of words) {
      const title = entry.t.toLowerCase();
      if (title.startsWith(word)) total += 8;
      else if (title.includes(word)) total += 5;
      else if (entry.k.toLowerCase().includes(word)) total += 3;
      else if (entry.s.toLowerCase().includes(word)) total += 2;
      else if (entry.d.toLowerCase().includes(word)) total += 1;
      else return 0;
    }
    return total;
  };

  const render = () => {
    const words = input.value.toLowerCase().split(/\s+/).filter(Boolean);
    results = (index ?? [])
      .map((entry) => ({ entry, rank: words.length ? score(entry, words) : 1 }))
      .filter((item) => item.rank > 0)
      .sort((a, b) => b.rank - a.rank)
      .slice(0, 12)
      .map((item) => item.entry);

    list.textContent = "";
    if (results.length === 0) {
      const empty = document.createElement("li");
      empty.className = "search-empty";
      empty.textContent = index ? "No lesson matches that yet." : "Loading…";
      list.append(empty);
      return;
    }
    results.forEach((entry, position) => {
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = siteRoot + entry.u;
      link.classList.toggle("active", position === active);
      const series = document.createElement("span");
      series.className = "search-series";
      series.textContent = entry.s;
      const title = document.createElement("b");
      title.textContent = entry.t;
      const summary = document.createElement("small");
      summary.textContent = entry.d;
      link.append(series, title, summary);
      item.append(link);
      list.append(item);
      if (position === active) link.scrollIntoView({ block: "nearest" });
    });
  };

  const open = async () => {
    if (!dialog) build();
    if (dialog.open) return;
    dialog.showModal();
    input.value = "";
    input.focus();
    render();
    if (!index) {
      try {
        index = await (await fetch(`${siteRoot}search.json`)).json();
      } catch (_) {
        index = [];
      }
      render();
    }
  };

  openers.forEach((opener) => opener.addEventListener("click", open));
  document.addEventListener("keydown", (event) => {
    const typing = event.target.closest?.("input, textarea, select, [contenteditable]");
    if ((event.key === "/" && !typing) || (event.key === "k" && (event.metaKey || event.ctrlKey))) {
      event.preventDefault();
      void open();
    }
  });
}

decorateReadLessons();
// ---- theme: follows the system until the reader picks one ----

function setupTheme() {
  const toggle = document.querySelector("[data-theme-toggle]");
  if (!toggle) return;
  toggle.addEventListener("click", () => {
    const dark =
      root.dataset.theme === "dark" ||
      (!root.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);
    root.dataset.theme = dark ? "light" : "dark";
    try {
      localStorage.setItem("monocurl-essays-theme", root.dataset.theme);
    } catch {
      // private mode: the choice lasts for this page only
    }
  });
}

setupTheme();
setupReadingState();
setupFigures();
setupSearch();

// ---- live figures (wasm runtime) ----

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
