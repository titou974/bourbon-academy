"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiliereCard } from "./FiliereCard";
import filieres from "@/data/filieres.json";
import type { Filiere } from "@/types";
import { cardRevealWithDelay } from "@/constants/animations";

function AnimatedCard({ filiere, index }: { filiere: Filiere; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      variants={cardRevealWithDelay(index)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <FiliereCard filiere={filiere} />
    </motion.div>
  );
}

export function FiliereSection() {
  const data = filieres as Filiere[];

  return (
    <div className="px-4 md:px-20 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((filiere, i) => (
          <AnimatedCard key={filiere.id} filiere={filiere} index={i} />
        ))}
      </div>
    </div>
  );
}
