"use client";

import React from "react";
import Image from "next/image";
import { MotionValue, useTransform, motion } from "framer-motion";
import { ScrollRevealText } from "./ScrollRevealText";
import ScrollVelocityText from "./ScrollVelocityText";
import ProjectsSection from "./ProjectsSection";
import { ArrowRight, Github, Twitter, Linkedin } from "lucide-react";
import { siteConfig } from "@/lib/config";
import AnimatedButton from "./AnimatedButton";
import Aurora from "./Aurora";

const Watermark = ({ text }: { text: string }) => {
  const charCount = text.length;
  const fontSize = `${95 / charCount}vw`;

  return (
    <div className="absolute top-4 left-0 w-full px-2 md:px-4 pointer-events-none z-0 select-none overflow-hidden">
      <h1 
        className="flex w-full justify-between font-black tracking-tighter text-foreground leading-none"
        style={{ fontSize, opacity: 0.03 }}
      >
        {text.split("").map((char, i) => (
           <span key={i}>
              {char === " " ? "\u00A0" : char}
           </span>
        ))}
      </h1>
    </div>
  );
};

export default function NarrativeLayer({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {

  const heroY = useTransform(scrollYProgress, [0, 0.3], ["0vh", "-100vh"]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  
  const velocityY = useTransform(scrollYProgress, [0, 0.2, 0.4], ["100vh", "0vh", "-100vh"]);

  const statementY = useTransform(scrollYProgress, [0.2, 0.35, 0.5, 0.65], ["100vh", "0vh", "0vh", "-100vh"]);

  const skillsY = useTransform(scrollYProgress, [0.5, 0.6, 0.8], ["100vh", "0vh", "-100vh"]);

  const projectsY = useTransform(scrollYProgress, [0.6, 0.75, 1.0], ["100vh", "0vh", "-100vh"]);

  const ctaY = useTransform(scrollYProgress, [0.8, 1], ["100vh", "0vh"]);
  const ctaScale = useTransform(scrollYProgress, [0.9, 1], [0.8, 1]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <motion.section 
        style={{ y: heroY, scale: heroScale }}
        className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
      >
        {/* Aurora Background (Hanya di Hero, Ikut Scroll) */}
        <div className="absolute inset-0 -z-10 opacity-50 dark:opacity-40">
           <Aurora 
             colorStops={['#0077FF', '#00E5FF', '#8B5CF6']} 
             amplitude={1.2} 
             blend={0.5} 
           />
        </div>

        {/* Logo & Nama Singkat Kecil di Atas Tagline */}
        <div className="flex items-center justify-center gap-3 mb-8 opacity-80">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={40}
            height={40}
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />
          <span className="text-2xl md:text-3xl font-bold tracking-widest text-foreground">
            {siteConfig.personal.shortName}
          </span>
        </div>

        {/* Tagline Utama (Portonah Sengkok) */}
        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-4 text-foreground">
          {Array.isArray(siteConfig.personal.tagline) 
            ? siteConfig.personal.tagline.map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < siteConfig.personal.tagline.length - 1 && <br />}
                </React.Fragment>
              ))
            : siteConfig.personal.tagline
          }
        </h1>
        <p className="text-xl md:text-2xl text-foreground/70 max-w-lg mb-8">
          {siteConfig.personal.title}
        </p>
        <div className="absolute bottom-10 animate-bounce text-foreground/50">
           Scroll to explore
        </div>
      </motion.section>

      <motion.section
        style={{ y: velocityY }}
        className="absolute inset-0 flex items-center justify-center z-20 mix-blend-difference" 
      >
         <ScrollVelocityText />
      </motion.section>

      <motion.section 
        style={{ y: statementY }}
        className="absolute inset-0 flex items-center justify-center p-6 pointer-events-auto"
      >
        <div className="max-w-4xl space-y-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-foreground">
            <ScrollRevealText progress={scrollYProgress} range={[0.35, 0.42]}>
              {siteConfig.about.greeting}
            </ScrollRevealText>
          </h2>
          <div className="text-lg md:text-5xl font-light leading-tight text-foreground/80">
            <p>
              <ScrollRevealText progress={scrollYProgress} range={[0.42, 0.5]}>
                {siteConfig.about.description}
              </ScrollRevealText>
            </p>
          </div>
          
          {/* Animated Button */}
          <div className="pt-4 pointer-events-auto">
            <AnimatedButton href="/about" text="MORE ABOUT ME" />
          </div>
        </div>
      </motion.section>

      <motion.section 
        style={{ y: skillsY }}
        className="absolute inset-0 flex items-center justify-center p-6"
      >
        <div className="max-w-3xl">
           <h3 className="text-3xl md:text-6xl font-medium text-foreground mb-6">
             {siteConfig.about.statement.line1} <br/>
             <span className="text-accent">{siteConfig.about.statement.line2}</span>
           </h3>
           <div className="flex flex-wrap gap-4 justify-center text-foreground/60">
             {siteConfig.skills.map((skill) => (
               <span key={skill} className="border border-foreground/20 px-4 py-2 rounded-full text-sm uppercase tracking-widest">{skill}</span>
             ))}
           </div>
        </div>
      </motion.section>

      <motion.section 
        style={{ y: projectsY }}
        className="absolute inset-0 flex flex-col items-center justify-center p-6 overflow-visible pointer-events-auto"
      >
         <Watermark text="KARYA AKU" />

        <div className="w-full h-auto flex items-center justify-center relative z-10">
             <ProjectsSection />
        </div>
      </motion.section>

      <motion.section 
        style={{ y: ctaY, scale: ctaScale }}
        className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-auto"
      >
        <h2 className="text-5xl md:text-8xl font-bold text-foreground mb-8 tracking-tighter">
          {siteConfig.cta.title}
        </h2>
        <AnimatedButton
          href={`mailto:${siteConfig.social.email}`}
          text={siteConfig.cta.buttonText}
          icon={<ArrowRight />}
          className="px-10 py-5"
          textClassName="text-xl font-bold"
        />
        
        <div className="mt-16 flex gap-8 text-foreground/50">
           <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
             <Github className="hover:text-foreground transition-colors cursor-pointer" />
           </a>
           {siteConfig.social.twitter && (
             <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
               <Twitter className="hover:text-foreground transition-colors cursor-pointer" />
             </a>
           )}
           <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
             <Linkedin className="hover:text-foreground transition-colors cursor-pointer" />
           </a>
        </div>
      </motion.section>
    </div>
  );
}
