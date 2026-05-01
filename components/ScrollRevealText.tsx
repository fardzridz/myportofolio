"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface SplitTextProps {
  children: string;
  className?: string;
  progress?: MotionValue<number>;
  range?: [number, number];
}

export function SplitText({ children, className }: SplitTextProps) {
  return (
    <span className={cn("inline-block", className)}>
      {children.split("").map((char, i) => {
        return (
          <span key={i} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        );
      })}
    </span>
  );
}

interface RevealTextProps {
  children: string;
  className?: string;
  progress: MotionValue<number>;
  range?: [number, number];
}

export function ScrollRevealText({ children, className, progress, range = [0, 1] }: RevealTextProps) {
  const characters = children.split("");
  const amount = characters.length;
  const step = (range[1] - range[0]) / amount;

  return (
    <span className={cn("inline-block wrap-break-word", className)}>
      {characters.map((char, i) => {
        const start = range[0] + i * step;
        const end = start + step;
        return (
          <Char 
            key={i} 
            char={char} 
            progress={progress} 
            range={[start, end]} 
          />
        );
      })}
    </span>
  );
}

const Char = ({ char, progress, range }: { char: string, progress: MotionValue<number>, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block transition-colors duration-0">
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
}
