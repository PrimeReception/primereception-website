"use client";

import { useState, useEffect, useRef } from "react";

const WORDS = ["Life", "Chat", "Work"];
const FINAL = "Calls";
const ALL = [...WORDS, FINAL];

// Enter: explosive start, smooth deceleration (no overshoot — text is right-aligned)
const ENTER = "0.4s cubic-bezier(0.16, 1, 0.3, 1)";
// Exit: slow start then WHOOSH yanked away
const EXIT_DUR = "0.35s";
const EXIT_EASE = "cubic-bezier(0.7, 0, 0.84, 0)";

export default function HeroHeading() {
  const [step, setStep] = useState(-1);
  const [maxWidth, setMaxWidth] = useState<number | undefined>();
  const [easyIndent, setEasyIndent] = useState<number>(0);
  const measureRef = useRef<HTMLSpanElement>(null);

  // Measure all words + "C" character for indent calculation
  useEffect(() => {
    const measure = () => {
      if (!measureRef.current) return;
      const spans = measureRef.current.children;
      // First ALL.length spans are the words, last span is "C" alone
      let max = 0;
      const wordWidths: number[] = [];
      for (let i = 0; i < ALL.length; i++) {
        const w = (spans[i] as HTMLElement).getBoundingClientRect().width;
        wordWidths.push(w);
        if (w > max) max = w;
      }
      const cW = (spans[ALL.length] as HTMLElement).getBoundingClientRect().width;
      const callsW = wordWidths[ALL.length - 1]; // "Calls" is last
      const mw = Math.ceil(max) + 2;
      setMaxWidth(mw);
      // "a" position = right-align offset of "Calls" + width of "C"
      setEasyIndent((mw - callsW + cW) * 0.65);
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
        {/* "C" alone — for computing indent of "easy." under the "a" in "Calls" */}
        <span className="inline-block whitespace-nowrap">C</span>
      </span>

      {/*
        Fixed-width container + text-right = "made" never moves.
        Shorter words get extra space on the LEFT (leading edge).
        Two-layer: outer inline-block (baseline), inner absolute (clipping).
      */}
      <span
        className="inline-block relative text-right"
        style={{ width: maxWidth ? `${maxWidth}px` : undefined }}
      >
        {/* Invisible sizer — provides height and baseline */}
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
                className="absolute inset-0 text-right text-white/40 font-normal"
                style={style}
              >
                {word}
              </span>
            );
          })}

          {/* Calls — drops from above with bounce (full white, bold) */}
          <span
            className="absolute inset-0 text-right"
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
      <span style={{ paddingLeft: easyIndent ? `${easyIndent}px` : undefined }}>
        easy.
      </span>
    </h1>
  );
}
