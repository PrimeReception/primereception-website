"use client";

import { useState, useEffect } from "react";

const WORDS = ["Work", "Chat", "Life"];
const FINAL = "Calls";

// Enter: explosive launch then smooth deceleration with overshoot
const ENTER = "0.4s cubic-bezier(0.22, 1.4, 0.36, 1)";
// Exit: slow start then WHOOSH yanked away
const EXIT_DUR = "0.35s";
const EXIT_EASE = "cubic-bezier(0.7, 0, 0.84, 0)";

export default function HeroHeading() {
  const [step, setStep] = useState(-1);

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
      className="font-serif text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.1]"
      style={
        step === 3
          ? { animation: "hero-shake 0.3s ease-out 0.35s" }
          : undefined
      }
    >
      {/*
        Two-layer structure:
        - OUTER span: inline-block with NO overflow (preserves text baseline)
        - INNER span: absolute + overflow-hidden (clips animated words)
        This avoids the CSS rule where overflow:hidden on inline-block
        changes the baseline to the bottom margin edge.
      */}
      <span className="inline-block relative">
        {/* Invisible sizer — sets width AND baseline for the inline-block */}
        <span className="invisible" aria-hidden="true">
          {FINAL}
          <span className="inline-block" style={{ width: "0.3em" }} />
        </span>

        {/* Clipping layer — overflow-hidden here, not on the inline-block */}
        <span className="absolute inset-0 overflow-hidden">
          {/* Sliding words: Work → Chat → Life */}
          {WORDS.map((word, i) => {
            const style: React.CSSProperties = {};

            if (step < i) {
              // Waiting off-screen left
              style.transform =
                "translateX(-110%) scaleX(1) scaleY(1) skewX(0deg)";
            } else if (step === i) {
              // Entering — rockets in, tiny overshoot, settles
              style.transform =
                "translateX(0) scaleX(1) scaleY(1) skewX(0deg)";
              style.transition = `transform ${ENTER}`;
            } else if (i === 2 && step === 3) {
              // Life gets crushed by Calls
              style.transform =
                "translateX(0) scaleX(1) scaleY(0) skewX(0deg)";
              style.transformOrigin = "bottom";
              style.transition = "transform 0.4s ease-in";
            } else if (step === i + 1) {
              // Actively exiting — yanked away with stretch + lean
              style.transform =
                "translateX(200%) scaleX(1.15) scaleY(1) skewX(-3deg)";
              style.opacity = 0;
              style.transition = `transform ${EXIT_DUR} ${EXIT_EASE}, opacity 0.05s linear 0.3s`;
            } else {
              // Fully exited — nuke it
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
