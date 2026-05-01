"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import NarrativeLayer from "./NarrativeLayer";

export default function ScrollStage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Semua efek gradient dan overlay sudah dihapus agar warna background solid 100% konsisten.

  return (
    <div ref={containerRef} className="relative h-[800vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Vignette - Theme aware */}
        <div className="absolute inset-0 bg-[radial-gradient(transparent_0%,var(--background)_120%)] pointer-events-none z-10" />

        {/* Narrative Content Overlay */}
        <NarrativeLayer scrollYProgress={scrollYProgress} />
      </div>

      
      {/* Scroll Anchors - Positioned based on NarrativeLayer scroll ranges */}
      <div id="home" className="absolute top-0 w-full h-px pointer-events-none" />
      <div id="about" className="absolute top-[35%] w-full h-px pointer-events-none" /> 
      {/* About section is visible around 0.35 progress */}
      
      <div id="projects" className="absolute top-[75%] w-full h-px pointer-events-none" />
      {/* Projects section is centered around 0.75 progress */}
      
      <div id="contact" className="absolute top-[95%] w-full h-px pointer-events-none" />
    </div>
  );
}
