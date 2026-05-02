"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/config";

export default function HeroTextCircle() {
  const boundsRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    if (imgRef.current) {
      imgRef.current.style.transformOrigin = `${x}% ${y}%`;
    }
    setIsHovered(true);
  };

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const bounds = boundsRef.current;
    const circle = circleRef.current;
    if (!bounds || !circle) return;

    const pos = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    let isVisible = true;

    const lerp = (a: number, b: number, f: number) => a + (b - a) * f;
    const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

    const observer = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting; },
      { threshold: 0 }
    );
    observer.observe(bounds);

    const maxOffset = 60;
    const strength = 0.25;

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) return;
      const rect = bounds.getBoundingClientRect();
      const mx = (e.clientX - rect.left - rect.width / 2);
      const my = (e.clientY - rect.top - rect.height / 2);

      target.x = clamp(-mx * strength, -maxOffset, maxOffset);
      target.y = clamp(-my * strength, -maxOffset, maxOffset);
    };

    let animId = 0;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isVisible) return;

      pos.x = lerp(pos.x, target.x, 0.05);
      pos.y = lerp(pos.y, target.y, 0.05);

      circle.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
    };

    document.addEventListener("mousemove", onMouseMove);
    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const heroImage = siteConfig.personal.heroImage ?? "";

  return (
    <div
      ref={boundsRef}
      className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]"
    >
      <div
        ref={circleRef}
        className="relative w-[130px] h-[130px] md:w-[160px] md:h-[160px] pointer-events-auto cursor-pointer"
        style={{ willChange: "transform" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsHovered(false)}
      >
        <svg
          className="absolute inset-0 w-full h-full animate-spin mix-blend-difference"
          viewBox="0 0 200 200"
          style={{ animationDuration: "8s" }}
        >
          <defs>
            <path
              id="heroCirclePath"
              d="M 100,100 m -85,0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"
              fill="none"
            />
          </defs>
          <text
            fill="white"
            fontSize="18"
            fontWeight="600"
            letterSpacing="0.22em"
          >
            <textPath href="#heroCirclePath">
              FARDZ • RIDZ • FARDZ • RIDZ • FARDZ • RIDZ •
            </textPath>
          </text>
        </svg>

        <div className="absolute inset-[10%] rounded-full border border-white/40 mix-blend-difference" />

        <div
          ref={imgRef}
          className="absolute inset-[10%] rounded-full overflow-hidden"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: isHovered ? "scale(1)" : "scale(0)",
            transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
      </div>
    </div>
  );
}
