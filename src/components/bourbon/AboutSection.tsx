"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { COPY } from "@/constants/fr_strings";
import { StatsCounter } from "./StatsCounter";
import { Button } from "../ui/button";

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-10% 0px" });

  return (
    <div ref={sectionRef}>
      <div className="px-4 pt-4">
        <motion.div
          className="w-full mx-auto border border-border rounded-4xl pb-4 md:pb-12 px-4 pt-4 bg-card overflow-hidden space-y-4 md:space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="relative w-full h-80 md:h-100 rounded-3xl overflow-hidden">
            <Image
              src="/images/localisations/bourbonhero.jpeg"
              alt="Bourbon Academy - Études en Espagne"
              className="object-cover"
              fill
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

            {/* Bottom title + CTA */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <h2 className="text-2xl md:text-5xl font-medium text-white drop-shadow-lg leading-tight tracking-[-0.64px] md:tracking-[-1.8px]">
                  {COPY.sections.about.title}
                </h2>
                <p className="text-sm md:text-lg text-white/80 mt-1 drop-shadow-md">
                  {COPY.sections.about.subtitle}
                </p>
              </div>
            </div>
            <a
              href="#filieres"
              className="absolute bottom-8 right-6 hidden md:flex flex-col items-center gap-1"
            >
              <div className="w-[24px] h-[44px] rounded-3xl border-[3px] border-white/70 hover:border-white flex justify-center items-start p-1 group transition-colors ease-in-out duration-500">
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-2 h-2 rounded-full bg-white/70 group-hover:bg-white transition-colors ease-in-out duration-500"
                />
              </div>
            </a>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="min-h-[44px] text-foreground rounded-full hover:bg-primary/5"
            >
              <a href="#filieres">
                {COPY.sections.about.cta}
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </div>
          <div className="flex flex-col items-center gap-6 text-center px-4 md:px-16 lg:px-24 mt-6 md:mt-8">
            <p className="text-base md:text-xl lg:text-2xl tracking-[-0.5px] leading-relaxed text-balance text-foreground font-light">
              {COPY.sections.about.description}{" "}
              <span className="text-secondary font-light">
                {COPY.sections.about.descriptionAccent}
              </span>
            </p>

            {/* Decorative separator with logo ovals */}
            <div className="flex items-center gap-4 mt-2">
              {/* Left dots */}
              <div className="flex items-center">
                <span className="w-16 h-px bg-gradient-to-r from-transparent to-secondary" />
                <span className="w-2 h-2 rounded-full bg-secondary" />
              </div>

              {/* Center oval with logo (larger) */}
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-full border-1 border-border bg-card shadow-sm">
                <Image
                  src="/bourbon-academy-logo.png"
                  alt="Bourbon Academy"
                  width={24}
                  height={24}
                  className="rounded-sm"
                />
              </span>
              {/* Right dots */}
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                <span className="w-16 h-px bg-gradient-to-l from-transparent to-secondary rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <StatsCounter />
    </div>
  );
}
