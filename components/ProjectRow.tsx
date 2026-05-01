"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

interface ProjectRowProps {
  title: string;
  subtitle: string;
  bgImage: string;
  previewImage: string;
  href: string;
  index: number;
}

export default function ProjectRow({
  title,
  subtitle,
  bgImage,
  previewImage,
  href,
  index,
}: ProjectRowProps) {
  const containerRef = useRef<HTMLAnchorElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const previewCardRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const labelGroupRef = useRef<HTMLDivElement>(null);

  // Store timeline in a ref to reuse it
  const tl = useRef<gsap.core.Timeline | null>(null);

  // Initial setup for GSAP
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create the timeline once, paused
      tl.current = gsap.timeline({ 
        paused: true,
        defaults: { ease: "power2.out", duration: 0.4 } 
      });

      // 0. Z-Index Management (Start of timeline)
      // Ensure z-index bumps up immediately when valid interaction starts
      tl.current.set(containerRef.current, { zIndex: 20 }, 0);


      // 1. Expand Panel
      tl.current.to(panelRef.current, {
          height: 160, 
          opacity: 1,
          duration: 0.5,
          ease: "power3.inOut"
      }, 0);

      // 2. Show Background Image
      tl.current.to(bgImageRef.current, {
          opacity: 0.2, 
          scale: 1,
          duration: 0.6,
      }, 0.1);

      // 3. Float in Preview Card
      tl.current.to(previewCardRef.current, {
          opacity: 1,
          y: -40, 
          x: -20,
          rotate: 0,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.7)", 
      }, 0.2);

      // 4. Shift Title/Label
      tl.current.to(labelGroupRef.current, {
          x: 10,
          duration: 0.3
      }, 0);

       // 5. Arrow Animation
      tl.current.to(arrowRef.current, {
          x: 5,
          opacity: 1,
          filter: "brightness(1.2)",
          duration: 0.3
      }, 0);

      // Set initial states (match the "start" of the timeline or default CSS)
      gsap.set(panelRef.current, { height: 0, opacity: 0 });
      gsap.set(previewCardRef.current, {
        opacity: 0,
        y: 20,
        rotate: -8,
        scale: 0.95,
        transformOrigin: "bottom right",
      });
      gsap.set(bgImageRef.current, { opacity: 0, scale: 1.1 });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => {
    tl.current?.play();
  };

  const handleMouseLeave = () => {
    tl.current?.reverse();
  };

  return (
    <Link 
        ref={containerRef}
        href={href} 
        className="relative block w-full group border-b border-foreground/10 py-6 cursor-pointer outline-none" 
        onFocus={handleMouseEnter} 
        onBlur={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >
      <div className="w-full">
        {/* Main Row Content */}
        <div className="flex items-center justify-between relative z-20">
            <div ref={labelGroupRef} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 transition-colors text-foreground/60">
                <h3 className="text-3xl md:text-5xl font-bold tracking-tighter">
                    {title}
                </h3>
                <span className="text-sm md:text-lg font-light uppercase tracking-widest">
                    {subtitle}
                </span>
            </div>
            
            <div ref={arrowRef} className="opacity-50 transition-colors">
                <ArrowRight size={32} />
            </div>
        </div>

        {/* Expansion Panel */}
        <div 
            ref={panelRef}
            className="relative w-full overflow-hidden mt-0 rounded-2xl"
        >
            {/* Inner Container for Background */}
            <div className="absolute inset-0 bg-neutral-100/80 dark:bg-neutral-800/80 rounded-2xl overflow-hidden shadow-inner pointer-events-auto">
                 {/* Background Image */}
                <div ref={bgImageRef} className="absolute inset-0 w-full h-full">
                    <Image 
                        src={bgImage} 
                        alt={`${title} background`}
                        fill
                        unoptimized
                        className="object-cover object-center filter blur-[2px]"
                    />
                </div>
            </div>
        </div>

        {/* Preview Card */}
        <div 
            ref={previewCardRef}
            className="absolute right-4 md:right-12 bottom-4 w-48 md:w-80 aspect-video z-30 drop-shadow-2xl pointer-events-auto"
        >
            <div className="relative w-full h-full rounded-xl overflow-hidden border-4 border-white shadow-lg bg-white">
                <Image 
                    src={previewImage}
                    alt={`${title} preview`}
                    fill
                    unoptimized
                    className="object-cover"
                />
            </div>
        </div>

      </div>
    </Link>
  );
}
