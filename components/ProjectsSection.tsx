"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import ProjectRow from "./ProjectRow";

import { siteConfig } from "@/lib/config";

const projects = siteConfig.projects.map(p => ({
  title: p.title,
  subtitle: p.subtitle,
  bgImage: p.bgImage,
  previewImage: p.previewImage,
  href: `/projects/${p.slug}`,
}));

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  },
};

export default function ProjectsSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-0">
      <motion.div 
        className="flex flex-col"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={item}>
            <ProjectRow index={index} {...project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
