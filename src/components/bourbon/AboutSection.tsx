"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import citiesData from "@/data/schools.json";
import type { City, CityGuide } from "@/types";
import { COPY } from "@/constants/fr_strings";
import { getCityGuide } from "@/data/cities-guide";
import { CityModal } from "./CityModal";

const cities = citiesData as City[];

const MARQUEE_DURATION = 25;

function CityCard({
  city,
  onSelect,
}: {
  city: City;
  onSelect: (guide: CityGuide) => void;
}) {
  const guide = getCityGuide(city.ville);

  const handleClick = () => {
    if (guide) onSelect(guide);
  };

  return (
    <div
      className="flex-shrink-0 w-[200px] md:w-[220px] cursor-pointer group"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
      aria-label={COPY.spainMap.ariaLabel(city.ville)}
    >
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        {/* Zone image — même style que FiliereCard */}
        <div className="relative h-32 md:h-36 w-full overflow-hidden">
          <Image
            src={city.photo}
            alt={city.ville}
            fill
            className="object-cover group-hover:scale-105 transition-transform ease-in-out duration-600"
            sizes="220px"
          />
          <div className="absolute inset-0 bg-foreground/10" />
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-bl from-foreground/40 group-hover:from-primary/40 via-transparent to-transparent transition-colors duration-300 ease-in-out" />

          {/* Bouton découvrir — mobile uniquement */}
          <span className="md:hidden absolute inset-0 z-20 flex items-center justify-center">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-4 py-1.5 text-xs font-medium text-primary shadow-sm backdrop-blur-sm">
              {COPY.filiereCard.discover} <ArrowUpRight className="size-3.5" />
            </span>
          </span>

          {/* Icône flèche — desktop, coin haut-droite */}
          <div className="hidden md:flex absolute top-2 right-2 size-8 rounded-full items-center justify-center border border-white group-hover:bg-white transition-colors z-20 group-hover:translate-y-1 group-hover:translate-x-[-1px] transition-transform duration-300 ease-in-out">
            <ArrowUpRight className="size-5 text-white group-hover:text-primary transition-colors" />
          </div>
        </div>

        <div className="p-3 text-center">
          <p className="font-medium text-sm text-foreground tracking-[-0.48px]">
            {city.ville}
          </p>
          <p className="text-[11px] text-text-muted tracking-[-0.32px]">
            {city.surnom}
          </p>
        </div>
      </div>
    </div>
  );
}

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-10% 0px" });
  const [selectedCity, setSelectedCity] = useState<CityGuide | null>(null);

  return (
    <div ref={sectionRef}>
      {/* Texte avec logo dans un encadré centré */}
      <div className="px-4 pt-6 md:px-10 md:pt-8">
        <motion.div
          className="max-w-2xl mx-auto border border-border rounded-xl p-6 md:p-8 bg-card"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="flex flex-col items-center gap-4 text-center">
            <Image
              src="/bourbon-academy-logo.png"
              alt="Logo Bourbon Academy"
              className="border-border rounded-lg border"
              width={36}
              height={36}
            />
            <p className="text-sm text-muted-foreground tracking-[-0.48px] leading-relaxed text-balance">
              {COPY.sections.about.description}
            </p>
            <p className="text-sm italic font-serif text-balance">
              <span className="font-semibold">Ilyes Magoutier</span>, <br />
              Fondateur de Bourbon Academy
            </p>
          </div>
        </motion.div>
      </div>

      {/* Carousel infini auto-scroll */}
      <div
        className="relative py-6 md:py-8 overflow-hidden group/carousel"
        aria-label="Carousel des villes"
      >
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-20 bg-gradient-to-r from-[var(--background-center)] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-20 bg-gradient-to-l from-[var(--background-center)] to-transparent z-10" />

        <motion.div
          className="flex gap-4 w-max [animation:marquee_var(--marquee-duration)_linear_infinite] group-hover/carousel:[animation-play-state:paused]"
          style={
            {
              "--marquee-duration": `${MARQUEE_DURATION}s`,
            } as React.CSSProperties
          }
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {[...cities, ...cities].map((city, i) => (
            <CityCard
              key={`${city.ville}-${i}`}
              city={city}
              onSelect={setSelectedCity}
            />
          ))}
        </motion.div>
      </div>

      <CityModal
        city={selectedCity}
        open={!!selectedCity}
        onOpenChange={(isOpen) => {
          if (!isOpen) setSelectedCity(null);
        }}
      />
    </div>
  );
}
