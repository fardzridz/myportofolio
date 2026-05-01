"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    const vel = velocityFactor.get();

    if (vel < 0) {
      directionFactor.current = -1;
    } else if (vel > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * vel;

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
      <motion.div className="scroller font-bold uppercase text-5xl md:text-9xl flex whitespace-nowrap flex-nowrap" style={{ x }}>
        <span className="block mr-8 md:mr-16">{children} </span>
        <span className="block mr-8 md:mr-16">{children} </span>
        <span className="block mr-8 md:mr-16">{children} </span>
        <span className="block mr-8 md:mr-16">{children} </span>
      </motion.div>
    </div>
  );
}

export default function ScrollVelocityText() {
  return (
    <section className="relative w-full py-8 md:py-16 overflow-hidden bg-transparent pointer-events-none">
      <ParallaxText baseVelocity={-1}>WEB DEVELOPER • CREATIVE • FRONTEND • </ParallaxText>
      <ParallaxText baseVelocity={1}>DESIGN • MOTION • INTERFACE • </ParallaxText>
    </section>
  );
}
