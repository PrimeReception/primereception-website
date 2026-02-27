"use client";

import { useState, useEffect, useRef } from "react";

const WORDS = ["Work", "Chat", "Life"];
const FINAL = "Calls";
const ALL = [...WORDS, FINAL];

// Enter: explosive launch then smooth deceleration with overshoot
const ENTER = "0.4s cubic-bezier(0.22, 1.4, 0.36, 1)";
// Exit: slow start then WHOOSH yanked away
const EXIT_DUR = "0.35s";
const EXIT_EASE = "cubic-bezier(0.7, 0, 0.84, 0)";

export default function HeroHeading() {
  const [step, setStep] = useState(-1);
  const [widths, setWidths] = useState<number[]>([]);
  const measureRef = useRef<HTMLSpanElement>(null);

  // Measure each word's rendered width (re-measure on resize)
  useEffect(() => {
    const measure = () => {
      if (!measureRef.current) return;
      const spans = measureRef.current.children;
      const w: number[] = [];
      for (let i = 0; i < spans.length; i++) {
        w.push((spans[i] as HTMLElement).getBoundingClientRect().width);
      }
      setWidths(w);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Step timers
  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(0), 100),
      setTimeout(() => setStep(1), 1600),
      setTimeout(() => setStep(2), 3100),
      setTimeout(() => setStep(3), 4600),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  // Dynamic width based on active word
  const activeIdx = step < 0 ? 0 : step >= 3 ? 3 : step;
  const containerWidth = widths[activeIdx]
    ? Math.ceil(widths[activeIdx]) + 1
    : undefined;

  return (
    <h1
      className="font-serif text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.1] relative"
      style={
        step === 3
          ? { animation: "hero-shake 0.3s ease-out 0.35s" }
          : undefined
      }
    >
      {/* Off-screen measurement spans — inherit h1 font properties */}
      <span
        ref={measureRef}
        className="absolute left-[-9999px] top-0 pointer-events-none"
        aria-hidden="true"
      >
        {ALL.map((word, i) => (
          <span
            key={word}
            className={`inline-block whitespace-nowrap ${
              i < WORDS.length ? "font-normal" : ""
            }`}
          >
            {word}
          </span>
        ))}
      </span>

      {/*
        Two-layer structure:
        - OUTER span: inline-block, no overflow (preserves text baseline)
        - INNER span: absolute + overflow-hidden (clips animated words)
        Width transitions dynamically to match the active word.
      */}
      <span
        className="inline-block relative"
        style={{
          width: containerWidth ? `${containerWidth}px` : undefined,
          transition: step >= 0 ? "width 0.3s ease" : "none",
        }}
      >
        {/* Invisible sizer — provides height and baseline only */}
        <span className="invisible" aria-hidden="true">
          {FINAL}
        </span>

        {/* Clipping layer */}
        <span className="absolute inset-0 overflow-hidden">
          {/* Sliding words: Work → Chat → Life */}
          {WORDS.map((word, i) => {
            const style: React.CSSProperties = {};

            if (step < i) {
              style.transform =
                "translateX(-110%) scaleX(1) scaleY(1) skewX(0deg)";
            } else if (step === i) {
              style.transform =
                "translateX(0) scaleX(1) scaleY(1) skewX(0deg)";
              style.transition = `transform ${ENTER}`;
            } else if (i === 2 && step === 3) {
              style.transform =
                "translateX(0) scaleX(1) scaleY(0) skewX(0deg)";
              style.transformOrigin = "bottom";
              style.transition = "transform 0.4s ease-in";
            } else if (step === i + 1) {
              style.transform =
                "translateX(200%) scaleX(1.15) scaleY(1) skewX(-3deg)";
              style.opacity = 0;
              style.transition = `transform ${EXIT_DUR} ${EXIT_EASE}, opacity 0.05s linear 0.3s`;
            } else {
              style.transform =
                "translateX(200%) scaleX(1.15) scaleY(1) skewX(-3deg)";
              style.visibility = "hidden";
              style.opacity = 0;
            }

            return (
              <span
                key={word}
                className="absolute inset-0 text-white/40 font-normal"
                style={style}
              >
                {word}
              </span>
            );
          })}

          {/* Calls — drops from above with bounce (full white, bold) */}
          <span
            className="absolute inset-0"
            style={
              step < 3
                ? { transform: "translateY(-150%)", opacity: 0 }
                : { animation: "hero-drop 0.8s linear forwards" }
            }
          >
            {FINAL}
          </span>
        </span>
      </span>{" "}
      made
      <br />
      easy.
    </h1>
  );
}
