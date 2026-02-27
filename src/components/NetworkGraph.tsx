"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

interface Pulse {
  /** Index pair key "i-j" */
  fromIdx: number;
  toIdx: number;
  /** 0→1 progress along the line */
  progress: number;
  speed: number;
}

const CONNECTION_DIST = 180;
const NODE_COUNT = 20;

export default function NetworkGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const pulsesRef = useRef<Pulse[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement!.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // Seed nodes
    const nodes = nodesRef.current;
    for (let i = 0; i < NODE_COUNT; i++) {
      const speed = 0.2 + Math.random() * 0.3;
      const angle = Math.random() * Math.PI * 2;
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: 1.5 + Math.random() * 1.5,
        opacity: 0.2 + Math.random() * 0.2,
      });
    }

    let pulseTimer = 0;

    function animate() {
      ctx!.clearRect(0, 0, w, h);

      // Move nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;

        // Bounce off edges with padding
        if (n.x < 0) { n.x = 0; n.vx = Math.abs(n.vx); }
        if (n.x > w) { n.x = w; n.vx = -Math.abs(n.vx); }
        if (n.y < 0) { n.y = 0; n.vy = Math.abs(n.vy); }
        if (n.y > h) { n.y = h; n.vy = -Math.abs(n.vy); }
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DIST) {
            const strength = 1 - dist / CONNECTION_DIST;
            const lineOpacity = 0.08 + strength * 0.07;

            ctx!.beginPath();
            ctx!.moveTo(nodes[i].x, nodes[i].y);
            ctx!.lineTo(nodes[j].x, nodes[j].y);
            ctx!.strokeStyle = `rgba(255, 255, 255, ${lineOpacity})`;
            ctx!.lineWidth = 1;
            ctx!.stroke();
          }
        }
      }

      // Spawn pulses occasionally
      pulseTimer++;
      if (pulseTimer > 120 + Math.random() * 180) {
        pulseTimer = 0;
        // Find a connected pair to pulse
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < CONNECTION_DIST * 0.7) {
              pulsesRef.current.push({
                fromIdx: i,
                toIdx: j,
                progress: 0,
                speed: 0.015 + Math.random() * 0.01,
              });
              break;
            }
          }
          if (pulsesRef.current.length > 0 && pulsesRef.current[pulsesRef.current.length - 1].progress === 0) break;
        }
      }

      // Draw pulses
      const pulses = pulsesRef.current;
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          pulses.splice(p, 1);
          continue;
        }

        const a = nodes[pulse.fromIdx];
        const b = nodes[pulse.toIdx];
        if (!a || !b) { pulses.splice(p, 1); continue; }

        const px = a.x + (b.x - a.x) * pulse.progress;
        const py = a.y + (b.y - a.y) * pulse.progress;
        const pulseOpacity = 0.4 * Math.sin(pulse.progress * Math.PI);

        ctx!.beginPath();
        ctx!.arc(px, py, 3, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255, 255, 255, ${pulseOpacity})`;
        ctx!.fill();
      }

      // Draw nodes on top
      for (const n of nodes) {
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255, 255, 255, ${n.opacity})`;
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
