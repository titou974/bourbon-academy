"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { sectionReveal } from "@/constants/animations";

export default function SectionWrapper({
  children,
  id,
  title,
  subtitle,
  centered = true,
}: {
  children: React.ReactNode;
  id: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.section
      ref={ref}
      id={id}
      className="px-4 pb-4 md:px-6 md:pb-6 relative mt-8 md:mt-10"
      variants={sectionReveal}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="max-w-5xl mx-auto rounded-[var(--radius-pill)] border-border border-1 relative z-20">
        <Image
          src="/volcano.png"
          alt="Rocks left top"
          width={50}
          height={50}
          className="absolute top-[-50px] left-8"
        />
        <Image
          src="/volcano.png"
          alt="Rocks left top"
          width={50}
          height={50}
          className="absolute top-[-50px] right-8"
        />
        {title && (
          <>
            <div
              className={`px-6 md:px-10 py-2 md:py-4 ${centered ? "text-center" : ""}`}
            >
              <h2 className="font-medium text-xl md:text-[32px] text-text-primary tracking-[-1.5px]">
                {title}
              </h2>
            </div>
            <div className="border-t-1 border-border" />
            <div
              className={`px-6 md:px-10 py-1 ${centered ? "text-center" : ""}`}
            >
              <p className="text-text-muted text-sm md:text-base tracking-[-0.64px]">
                {subtitle}
              </p>
            </div>
            <div className="border-border border-t-1" />
          </>
        )}
        {children}
      </div>
    </motion.section>
  );
}
