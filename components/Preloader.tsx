"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import { useTheme } from "next-themes";
import { siteConfig } from "@/lib/config";

export default function Preloader() {
  const [complete, setComplete] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: 3.5,
      ease: [0.76, 0, 0.24, 1],
      onComplete: () => {
        setTimeout(() => setComplete(true), 500);
      },
    });

    return () => controls.stop();
  }, [count]);

  // Theme-aware colors - only apply after mounted to avoid hydration mismatch
  const bgClass = mounted && theme === 'dark' ? 'bg-neutral-100' : 'bg-neutral-900';
  const textClass = mounted && theme === 'dark' ? 'text-neutral-900' : 'text-neutral-100';

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
           initial={{ y: 0 }}
           exit={{ 
             y: "-100%",
             borderBottomLeftRadius: "50% 40%",
             borderBottomRightRadius: "50% 40%" 
           }}
           transition={{ duration: 1.5, ease: [0.83, 0, 0.17, 1] }}
           className={`fixed inset-0 ${bgClass} z-[200] flex flex-col items-center justify-center ${textClass} font-sans`}
        >
           {/* Center Content Group */}
           <div className="flex flex-col items-center gap-2">
             {/* Name */}
             <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`text-sm font-bold tracking-[0.2em] uppercase ${mounted && theme === 'dark' ? 'text-neutral-900/50' : 'text-neutral-100/50'} mb-2`}
             >
               {siteConfig.personal.name}
             </motion.div>

             {/* Percentage */}
             <div className="relative">
                <motion.div className="text-6xl md:text-8xl font-light tracking-tighter tabular-nums leading-none">
                  <motion.span>{rounded}</motion.span>%
                </motion.div>
                
                {/* Thin Line */}
                <motion.div 
                   initial={{ scaleX: 0 }}
                   animate={{ scaleX: 1 }}
                   transition={{ duration: 1.5, ease: "circOut", delay: 0.5 }}
                   className={`w-full h-[1px] ${mounted && theme === 'dark' ? 'bg-neutral-900/20' : 'bg-neutral-100/20'} mt-4 origin-left`}
                />
             </div>

             {/* Minimal Status Text */}
             <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className={`mt-4 text-[10px] tracking-widest ${mounted && theme === 'dark' ? 'text-neutral-900/30' : 'text-neutral-100/30'} uppercase`}
             >
               Preparing Interface...
             </motion.div>
           </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
