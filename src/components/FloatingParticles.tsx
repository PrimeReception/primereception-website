"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  /** Base X for sine wobble */
  baseX: number;
  /** Upward speed in px/frame */
  vy: number;
  /** Sine wobble amplitude (px) */
  wobbleAmp: number;
  /** Sine wobble frequency */
  wobbleFreq: number;
  /** Sine phase offset */
  wobblePhase: number;
  /** Radius in px */
  radius: number;
  /** Peak opacity */
  peakOpacity: number;
  /** Current opacity */
  opacity: number;
  /** Age in frames */
  age: number;
}

export default function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);

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

    function spawn(seeding?: boolean): Particle {
      const w = W();
      const h = H();
      const x = Math.random() * w;
      // 3-8 seconds at 60fps = 180-480 frames to cross full height
      const totalFrames = 180 + Math.random() * 300;
      const vy = h / totalFrames;
      return {
        x,
        baseX: x,
        y: seeding ? Math.random() * h : h + 4 + Math.random() * 20,
        vy,
        wobbleAmp: 8 + Math.random() * 18,
        wobbleFreq: 0.008 + Math.random() * 0.012,
        wobblePhase: Math.random() * Math.PI * 2,
        radius: 1 + Math.random() * 2,
        peakOpacity: 0.1 + Math.random() * 0.2,
        opacity: 0,
        age: 0,
      };
    }

    // Seed particles across the full height
    for (let i = 0; i < 25; i++) {
      particlesRef.current.push(spawn(true));
    }

    let spawnAccum = 0;

    function animate() {
      const w = W();
      const h = H();
      ctx!.clearRect(0, 0, w, h);

      const particles = particlesRef.current;

      // Spawn to maintain ~25 particles
      spawnAccum += 0.45;
      while (spawnAccum >= 1 && particles.length < 30) {
        spawnAccum -= 1;
        particles.push(spawn());
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.age++;
        p.y -= p.vy;

        // Sine wobble
        p.x = p.baseX + Math.sin(p.age * p.wobbleFreq + p.wobblePhase) * p.wobbleAmp;

        // Vertical position as 0 (bottom) to 1 (top)
        const vPos = 1 - p.y / h;

        // Fade zones: fade in bottom 15%, full middle, fade out top 15%
        if (vPos < 0.15) {
          p.opacity = p.peakOpacity * (vPos / 0.15);
        } else if (vPos > 0.85) {
          p.opacity = p.peakOpacity * ((1 - vPos) / 0.15);
        } else {
          p.opacity = p.peakOpacity;
        }

        // Remove if off-screen top
        if (p.y < -10) {
          particles.splice(i, 1);
          continue;
        }

        // Draw
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx!.fill();
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
