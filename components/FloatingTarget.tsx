"use client";

import { useEffect, useRef } from "react";

export default function FloatingTarget() {
  const boundsRef = useRef<HTMLDivElement>(null);
  const reticleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const bounds = boundsRef.current;
    const reticle = reticleRef.current;
    if (!bounds || !reticle) return;

    const pos = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    let rotation = 0;
    let prevX = 0;
    let isVisible = true;

    const lerp = (a: number, b: number, f: number) => a + (b - a) * f;

    const observer = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting; },
      { threshold: 0 }
    );
    observer.observe(bounds);

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) return;
      const rect = bounds.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      target.x = nx * rect.width * 0.35;
      target.y = ny * rect.height * 0.35;
    };

    let animId = 0;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isVisible) return;

      pos.x = lerp(pos.x, target.x, 0.04);
      pos.y = lerp(pos.y, target.y, 0.04);

      const dx = pos.x - prevX;
      rotation = lerp(rotation, Math.max(-15, Math.min(15, dx * 0.5)), 0.06);
      prevX = pos.x;
      
      reticle.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) rotate(${rotation}deg)`;
    };

    document.addEventListener("mousemove", onMouseMove);
    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      ref={boundsRef}
      className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden"
    >
      <div ref={reticleRef} style={{ willChange: "transform" }}>
        <svg
          viewBox="-100 -100 200 200"
          fill="none"
          className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 text-foreground/[0.07]"
        >
          <circle cx="0" cy="0" r="90" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
          <circle cx="0" cy="0" r="55" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="0" cy="0" r="25" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 4" />

          <line x1="-92" y1="0" x2="-30" y2="0" stroke="currentColor" strokeWidth="0.5" />
          <line x1="30" y1="0" x2="92" y2="0" stroke="currentColor" strokeWidth="0.5" />
          <line x1="0" y1="-92" x2="0" y2="-30" stroke="currentColor" strokeWidth="0.5" />
          <line x1="0" y1="30" x2="0" y2="92" stroke="currentColor" strokeWidth="0.5" />

          <circle cx="0" cy="0" r="3" fill="currentColor" />

          <path d="M-70 -70 L-80 -70 L-80 -80" stroke="currentColor" strokeWidth="0.8" />
          <path d="M70 -70 L80 -70 L80 -80" stroke="currentColor" strokeWidth="0.8" />
          <path d="M-70 70 L-80 70 L-80 80" stroke="currentColor" strokeWidth="0.8" />
          <path d="M70 70 L80 70 L80 80" stroke="currentColor" strokeWidth="0.8" />

          <line x1="55" y1="-55" x2="62" y2="-62" stroke="currentColor" strokeWidth="0.5" />
          <line x1="-55" y1="-55" x2="-62" y2="-62" stroke="currentColor" strokeWidth="0.5" />
          <line x1="55" y1="55" x2="62" y2="62" stroke="currentColor" strokeWidth="0.5" />
          <line x1="-55" y1="55" x2="-62" y2="62" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
    </div>
  );
}
