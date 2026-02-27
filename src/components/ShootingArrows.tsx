"use client";

import { useEffect, useRef } from "react";

interface Arrow {
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  size: number;
  rotation: number;
  age: number;
  maxAge: number;
}

export default function ShootingArrows() {
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

    function spawnArrow(): Arrow {
      const w = W();
      const h = H();
      // Spawn from bottom-left quadrant
      const startX = -20 + Math.random() * w * 0.3;
      const startY = h * 0.7 + Math.random() * h * 0.4;
      // Aim toward upper-right
      const speed = 1.8 + Math.random() * 2.2;
      const angle = -0.5 - Math.random() * 0.6; // ~-30° to -65° from horizontal
      return {
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        opacity: 0,
        size: 14 + Math.random() * 18,
        rotation: angle,
        age: 0,
        maxAge: 180 + Math.random() * 120, // 3-5 seconds at 60fps
      };
    }

    // Seed initial arrows
    for (let i = 0; i < 10; i++) {
      const a = spawnArrow();
      a.age = Math.random() * a.maxAge * 0.6;
      arrowsRef.current.push(a);
    }

    let spawnTimer = 0;

    function drawArrow(
      c: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      rotation: number,
      opacity: number
    ) {
      c.save();
      c.translate(x, y);
      c.rotate(rotation);
      c.strokeStyle = `rgba(212, 148, 58, ${opacity})`;
      c.lineWidth = 1.5;
      c.lineCap = "round";
      c.lineJoin = "round";

      // Arrow shaft
      c.beginPath();
      c.moveTo(-size * 0.5, 0);
      c.lineTo(size * 0.5, 0);
      c.stroke();

      // Arrowhead (chevron)
      c.beginPath();
      c.moveTo(size * 0.2, -size * 0.25);
      c.lineTo(size * 0.5, 0);
      c.lineTo(size * 0.2, size * 0.25);
      c.stroke();

      c.restore();
    }

    function animate() {
      const w = W();
      const h = H();
      ctx!.clearRect(0, 0, w, h);

      const arrows = arrowsRef.current;

      // Spawn new arrows periodically
      spawnTimer++;
      if (spawnTimer > 12 + Math.random() * 10) {
        spawnTimer = 0;
        if (arrows.length < 14) {
          arrows.push(spawnArrow());
        }
      }

      for (let i = arrows.length - 1; i >= 0; i--) {
        const a = arrows[i];
        a.age++;

        // Gravity (slight arc)
        a.vy += 0.008;

        a.x += a.vx;
        a.y += a.vy;

        // Update rotation to follow velocity
        a.rotation = Math.atan2(a.vy, a.vx);

        // Opacity: fade in first 15%, full middle, fade out last 25%
        const progress = a.age / a.maxAge;
        if (progress < 0.15) {
          a.opacity = (progress / 0.15) * 0.18;
        } else if (progress > 0.75) {
          a.opacity = ((1 - progress) / 0.25) * 0.18;
        } else {
          a.opacity = 0.18;
        }

        drawArrow(ctx!, a.x, a.y, a.size, a.rotation, a.opacity);

        // Remove if expired or way off-screen
        if (a.age > a.maxAge || a.x > w + 100 || a.y < -100) {
          arrows.splice(i, 1);
        }
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
