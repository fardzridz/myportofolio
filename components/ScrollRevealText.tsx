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
  const words = children.split(" ");
  const amount = words.length;
  const step = (range[1] - range[0]) / amount;

  return (
    <span className={cn("inline", className)}>
      {words.map((word, i) => {
        const start = range[0] + i * step;
        const end = start + step;
        return (
          <Word
            key={i}
            word={word}
            progress={progress}
            range={[start, end]}
            isLast={i === words.length - 1}
          />
        );
      })}
    </span>
  );
}

interface WordProps {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
  isLast: boolean;
}

const Word = ({ word, progress, range, isLast }: WordProps) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {word}{!isLast && "\u00A0"}
    </motion.span>
  );
};
