"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const mouse = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    let dotScale = 1;
    let ringScale = 1;
    let visible = false;
    let hovering = false;
    let clicking = false;

    const lerp = (a: number, b: number, f: number) => a + (b - a) * f;

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!visible) {
        visible = true;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }
      const target = e.target as HTMLElement;
      hovering = !!target.closest("a, button, [role='button'], [data-cursor='hover']");
    };

    const onMouseLeave = () => {
      visible = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const onMouseDown = () => { clicking = true; };
    const onMouseUp = () => { clicking = false; };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.documentElement.classList.add("custom-cursor-active");

    let animId = 0;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      ring.x = lerp(ring.x, mouse.x, 0.12);
      ring.y = lerp(ring.y, mouse.y, 0.12);

      const tDot = clicking ? 0.6 : hovering ? 0.3 : 1;
      const tRing = clicking ? 0.85 : hovering ? 1.8 : 1;
      dotScale = lerp(dotScale, tDot, 0.2);
      ringScale = lerp(ringScale, tRing, 0.15);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%) scale(${dotScale})`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%) scale(${ringScale})`;
      }
    };
    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-white mix-blend-difference pointer-events-none z-[9999] opacity-0"
        style={{ willChange: "transform" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-[1.5px] border-white/70 mix-blend-difference pointer-events-none z-[9999] opacity-0"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
