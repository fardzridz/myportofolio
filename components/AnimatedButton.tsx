"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  href: string;
  text: string;
  icon?: React.ReactNode;
  className?: string;
  textClassName?: string;
}

export default function AnimatedButton({ href, text, icon, className, textClassName }: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex justify-center">
      <Link href={href} className="w-fit">
        <motion.div
          className={cn("relative inline-flex items-center justify-center py-3 px-5 rounded-full border border-foreground/30 cursor-pointer overflow-hidden group", className)}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.p 
            className={cn("relative z-10 tracking-wide whitespace-nowrap font-medium flex items-center gap-2", textClassName)}
            animate={{ color: isHovered ? "var(--background)" : "var(--foreground)" }}
            transition={{ duration: 0.3 }}
          >
            {text}
            {icon && icon}
          </motion.p>
          
          {/* Animated circular background */}
          <motion.div
            className="absolute rounded-full"
            style={{
              backgroundColor: "var(--foreground)",
              width: "125%",
              height: "150%",
            }}
            initial={{ top: "100%" }}
            animate={{
              top: isHovered ? "-25%" : "100%",
            }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1],
            }}
          />
        </motion.div>
      </Link>
    </div>
  );
}
