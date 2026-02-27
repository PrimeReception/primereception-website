"use client";

import { useEffect, useRef } from "react";

interface Arrow {
  x: number;
  baseX: number;
  y: number;
  vy: number;
  /** Horizontal drift speed */
  vx: number;
  /** Arrow height in px */
  size: number;
  /** Rotation in radians */
  rotation: number;
  /** Peak opacity */
  peakOpacity: number;
  opacity: number;
  /** Stroke width */
  lineWidth: number;
}

export default function DriftingArrows() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const arrowsRef = useRef<Arrow[]>([]);
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

    function spawn(seeding?: boolean): Arrow {
      const w = W();
      const h = H();
      const size = 150 + Math.random() * 150;
      // 15-25 seconds at 60fps
      const totalFrames = 900 + Math.random() * 600;
      const x = Math.random() * w;
      return {
        x,
        baseX: x,
        y: seeding ? Math.random() * (h + size) : h + size * 0.5 + Math.random() * 40,
        vy: h / totalFrames,
        vx: (Math.random() - 0.4) * 0.15,
        size,
        rotation: (20 + Math.random() * 30) * (Math.PI / 180),
        peakOpacity: 0.03 + Math.random() * 0.05,
        opacity: 0,
        lineWidth: 1.5 + Math.random() * 1.5,
      };
    }

    // Seed arrows spread across the hero
    for (let i = 0; i < 5; i++) {
      arrowsRef.current.push(spawn(true));
    }

    let spawnAccum = 0;

    function drawArrow(
      c: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      rotation: number,
      opacity: number,
      lineWidth: number
    ) {
      c.save();
      c.translate(x, y);
      c.rotate(rotation);
      c.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
      c.lineWidth = lineWidth;
      c.lineCap = "round";
      c.lineJoin = "round";

      // Chevron/arrow pointing up — matches logo style
      // Shaft
      const shaftLen = size * 0.65;
      c.beginPath();
      c.moveTo(0, size * 0.3);
      c.lineTo(0, size * 0.3 - shaftLen);
      c.stroke();

      // Arrowhead (open chevron)
      const headSize = size * 0.22;
      const tipY = size * 0.3 - shaftLen;
      c.beginPath();
      c.moveTo(-headSize, tipY + headSize);
      c.lineTo(0, tipY);
      c.lineTo(headSize, tipY + headSize);
      c.stroke();

      c.restore();
    }

    function animate() {
      const w = W();
      const h = H();
      ctx!.clearRect(0, 0, w, h);

      const arrows = arrowsRef.current;

      // Maintain 4-6 arrows
      spawnAccum += 0.012;
      if (spawnAccum >= 1 && arrows.length < 6) {
        spawnAccum = 0;
        arrows.push(spawn());
      }

      for (let i = arrows.length - 1; i >= 0; i--) {
        const a = arrows[i];
        a.y -= a.vy;
        a.x += a.vx;

        // Vertical position: 0 = bottom, 1 = top
        const vPos = 1 - a.y / h;

        // Fade: in over bottom third, full in middle third, out over top third
        if (vPos < 0.33) {
          a.opacity = a.peakOpacity * (vPos / 0.33);
        } else if (vPos > 0.67) {
          a.opacity = a.peakOpacity * ((1 - vPos) / 0.33);
        } else {
          a.opacity = a.peakOpacity;
        }

        // Remove when off top
        if (a.y < -a.size) {
          arrows.splice(i, 1);
          continue;
        }

        drawArrow(ctx!, a.x, a.y, a.size, a.rotation, a.opacity, a.lineWidth);
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
