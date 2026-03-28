"use client";

import { motion } from "framer-motion";
import { fadeInUp, scrollViewport } from "@/constants/animations";
import type { Variants } from "framer-motion";

interface ScrollFadeInProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  as?: "div" | "section";
}

export function ScrollFadeIn({
  children,
  className,
  variants = fadeInUp,
  as = "div",
}: ScrollFadeInProps) {
  const Component = motion.create(as);

  return (
    <Component
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
      className={className}
    >
      {children}
    </Component>
  );
}
