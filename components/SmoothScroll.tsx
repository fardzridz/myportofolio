"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const lenis = new Lenis({
      duration: isHomePage ? 1.5 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle Anchor Clicks for Scrollytelling
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      e.preventDefault();

      const id = href.substring(1).toLowerCase();
      // Map sections to scroll progress (0.0 to 1.0) based on NarrativeLayer timelines
      const sectionProgress: Record<string, number> = {
        home: 0,       // Hero
        about: 0.4,    // Statement (around 0.35-0.5 in NarrativeLayer)
        projects: 0.75,// Projects (0.75 in NarrativeLayer)
        contact: 0.95, // CTA (0.95 in NarrativeLayer)
      };

      if (sectionProgress[id] !== undefined) {
         const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
         const targetScroll = totalScroll * sectionProgress[id];
         
         lenis.scrollTo(targetScroll, {
             duration: 2.5, // Slower duration for "gliding" feel
             easing: (t) => -(Math.cos(Math.PI * t) - 1) / 2, // EaseInOutSine for smooth start/stop
             force: true,
         });
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      lenis.destroy();
      document.removeEventListener("click", handleClick);
    };
  }, [isHomePage]);

  return <>{children}</>;
}
