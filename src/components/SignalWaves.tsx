"use client";

import { useEffect, useRef } from "react";

interface Wave {
  /** Source point index */
  src: number;
  /** Current arc radius */
  radius: number;
  /** Expansion speed (px per frame) */
  speed: number;
  /** Vertical drift accumulated */
  drift: number;
  /** Drift speed (px per frame) */
  driftSpeed: number;
  /** Starting opacity */
  startOpacity: number;
  /** Current opacity */
  opacity: number;
  /** Stroke width */
  lineWidth: number;
  /** Arc start angle (radians) */
  arcStart: number;
  /** Arc sweep (radians) */
  arcSweep: number;
  /** Max radius before removal */
  maxRadius: number;
}

interface Source {
  /** X as fraction of width */
  xFrac: number;
  /** Y as fraction of height */
  yFrac: number;
}

const SOURCES: Source[] = [
  { xFrac: 0.12, yFrac: 0.85 },
  { xFrac: 0.45, yFrac: 0.95 },
  { xFrac: 0.78, yFrac: 0.88 },
];

export default function SignalWaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wavesRef = useRef<Wave[]>([]);
  const rafRef = useRef<number>(0);
  const spawnTimersRef = useRef<number[]>(SOURCES.map(() => 0));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement!.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const W = () => canvas.parentElement!.getBoundingClientRect().width;
    const H = () => canvas.parentElement!.getBoundingClientRect().height;

    function spawnWave(srcIndex: number): Wave {
      const startOpacity = 0.08 + Math.random() * 0.12;
      return {
        src: srcIndex,
        radius: 4 + Math.random() * 8,
        speed: 0.35 + Math.random() * 0.45,
        drift: 0,
        driftSpeed: 0.15 + Math.random() * 0.2,
        startOpacity,
        opacity: startOpacity,
        lineWidth: 1 + Math.random() * 2,
        arcStart: -Math.PI * (0.55 + Math.random() * 0.25),
        arcSweep: Math.PI * (0.4 + Math.random() * 0.35),
        maxRadius: 120 + Math.random() * 200,
      };
    }

    // Seed a few initial waves at varying progress
    for (let s = 0; s < SOURCES.length; s++) {
      for (let i = 0; i < 3; i++) {
        const w = spawnWave(s);
        const progress = Math.random() * 0.6;
        w.radius += w.maxRadius * progress;
        w.drift += w.driftSpeed * w.maxRadius * progress / w.speed;
        w.opacity = w.startOpacity * (1 - progress);
        wavesRef.current.push(w);
      }
    }

    function animate() {
      const w = W();
      const h = H();
      ctx!.clearRect(0, 0, w, h);

      const waves = wavesRef.current;
      const timers = spawnTimersRef.current;

      // Spawn waves per source
      for (let s = 0; s < SOURCES.length; s++) {
        timers[s]++;
        const interval = 50 + Math.random() * 30;
        if (timers[s] > interval) {
          timers[s] = 0;
          waves.push(spawnWave(s));
        }
      }

      for (let i = waves.length - 1; i >= 0; i--) {
        const wave = waves[i];
        const src = SOURCES[wave.src];
        const cx = src.xFrac * w;
        const cy = src.yFrac * h;

        // Expand and drift
        wave.radius += wave.speed;
        wave.drift += wave.driftSpeed;

        // Fade based on radius progress
        const progress = wave.radius / wave.maxRadius;
        wave.opacity = wave.startOpacity * (1 - progress);

        if (wave.opacity <= 0 || wave.radius >= wave.maxRadius) {
          waves.splice(i, 1);
          continue;
        }

        // Draw arc
        ctx!.save();
        ctx!.translate(cx, cy - wave.drift);
        ctx!.strokeStyle = `rgba(255, 255, 255, ${wave.opacity})`;
        ctx!.lineWidth = wave.lineWidth;
        ctx!.lineCap = "round";
        ctx!.beginPath();
        ctx!.arc(0, 0, wave.radius, wave.arcStart, wave.arcStart + wave.arcSweep);
        ctx!.stroke();
        ctx!.restore();
      }

      rafRef.current = requestAnimationFrame(animate);
    }

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
