"use client";

import { useState, useEffect } from "react";

const WORDS = ["Work", "Chat", "Life"];
const FINAL = "Calls";

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
      <span className="inline-block relative overflow-hidden">
        {/* Invisible sizer — keeps container width stable */}
        <span className="invisible" aria-hidden="true">
          {FINAL}
        </span>

        {/* Sliding words: Work → Chat → Life */}
        {WORDS.map((word, i) => {
          const style: React.CSSProperties = {};

          if (step < i) {
            // Waiting off-screen left
            style.transform = "translateX(-110%)";
          } else if (step === i) {
            // Slide into view
            style.transform = "translateX(0) scaleY(1)";
            style.transition = "transform 0.5s ease-out";
          } else if (i === 2 && step === 3) {
            // Life gets crushed by Calls
            style.transform = "translateX(0) scaleY(0)";
            style.transformOrigin = "bottom";
            style.transition = "transform 0.4s ease-in";
          } else {
            // Exited right
            style.transform = "translateX(110%)";
            style.transition = "transform 0.4s ease-in";
          }

          return (
            <span key={word} className="absolute inset-0" style={style}>
              {word}
            </span>
          );
        })}

        {/* Calls — drops from above with bounce */}
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
      </span>{" "}
      made
      <br />
      easy.
    </h1>
  );
}
