"use client";

import { motion, type Variants } from "framer-motion";
import { HeroAnimation } from "./HeroAnimation";
import { NavBar } from "./NavBar";
import { Button } from "@/components/ui/button";
import { COPY } from "@/constants/fr_strings";
import { ArrowRight, PlusIcon } from "lucide-react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
  },
};

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-start gap-10 2xl:gap-20"
    >
      <NavBar />

      {/* Contenu hero centré */}
      <div className="flex flex-col items-center gap-8 md:gap-16 px-4 max-w-xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-4 text-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 border border-[#d9d9d9] rounded-[var(--radius-pill)] px-3 h-7 text-[12px] font-medium tracking-[-0.48px]"
          >
            <span className="relative flex size-2 shrink-0">
              <span className="animate-ping absolute size-full rounded-full bg-primary opacity-60" />
              <span className="relative size-2 rounded-full bg-primary" />
            </span>
            <div className="flex items-center gap-1">
              <span>France et Drom-Com</span>
              <ArrowRight className="w-3" />
              <span>Espagne</span>
            </div>
          </motion.div>
          <div className="space-y-2">
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-[64px] font-medium md:tracking-[-2.56px] tracking-[-1.8px] bg-gradient-to-r from-[#111] to-[#1e1e1e] bg-clip-text text-transparent leading-tight"
            >
              {COPY.hero.title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base text-[#3b3b3b] tracking-[-0.64px] text-balance"
            >
              {COPY.hero.subtitle}
            </motion.p>
          </div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 justify-center mt-2 md:mt-6"
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="min-h-[44px] text-foreground rounded-[var(--radius-button)] hover:bg-primary/5"
            >
              <a href="#filieres">
                {COPY.hero.ctaSecondary}
                <PlusIcon className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="min-h-[44px] bg-primary text-primary-foreground rounded-[var(--radius-button)] hover:bg-primary/90"
            >
              <a href="#candidature">
                {COPY.hero.ctaPrimary}
                <ArrowRight className="w-3" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <HeroAnimation />
      </div>
    </section>
  );
}
