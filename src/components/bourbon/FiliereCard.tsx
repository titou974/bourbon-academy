"use client";

import { useState } from "react";
import { Expand } from "lucide-react";
import { FiliereModal } from "./FiliereModal";
import type { Filiere } from "@/types";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { COPY } from "@/constants/fr_strings";

interface FiliereCardProps {
  filiere: Filiere;
}

export function FiliereCard({ filiere }: FiliereCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="bg-card border border-border rounded-xl cursor-pointer group"
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
        aria-label={COPY.filiereCard.ariaLabel(filiere.nom)}
      >
        <div className="relative mx-[14px] mt-[14px] h-[11em] rounded-2xl overflow-hidden border border-border">
          <Image
            src={filiere.photo}
            alt={filiere.nom}
            width={300}
            height={300}
            className="w-full h-full object-cover object-center-right group-hover:scale-105 transition-transform ease-in-out duration-600"
          />
          <div className="absolute inset-0 bg-foreground/10" />
          <div className="user-select-none pointer-events-none absolute inset-0 z-10 bg-linear-to-bl from-foreground/40 group-hover:from-primary/40 via-transparent to-transparent transition-colors duration-300 ease-in-out opacity-100"></div>
          <span className="md:hidden absolute inset-0 z-20 flex items-center justify-center">
            <span className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground shadow-sm">
              {COPY.filiereCard.discover} <ArrowUpRight className="size-3.5" />
            </span>
          </span>
          <div className="hidden md:flex absolute top-2 right-2 size-8 rounded-full items-center justify-center border border-white group-hover:bg-primary group-hover:border-primary transition-colors z-20 group-hover:translate-y-1 group-hover:translate-x-[-1px] transition-transform duration-300 ease-in-out">
            <ArrowUpRight className="size-5 text-white transition-colors" />
          </div>
        </div>
        <div className="px-4 pt-3 pb-4 space-y-1">
          <p className="font-medium text-base text-foreground tracking-[-0.64px]">
            {filiere.nom}
          </p>
          <p className="text-text-secondary text-xs leading-relaxed line-clamp-4 tracking-[-0.32px]">
            {filiere.description}
          </p>
        </div>
      </div>
      <FiliereModal filiere={filiere} open={open} onOpenChange={setOpen} />
    </>
  );
}
