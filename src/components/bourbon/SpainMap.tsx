"use client";

import Image from "next/image";
import { useState, useRef, useCallback } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import citiesData from "@/data/schools.json";
import { CityModal } from "./CityModal";
import { getCityGuide } from "@/data/cities-guide";
import type { City, CityGuide } from "@/types";
import { COPY } from "@/constants/fr_strings";
import { tooltipReveal } from "@/constants/animations";
import { ArrowUpRight } from "lucide-react";

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

export function SpainMap() {
  const [activeCity, setActiveCity] = useState<City | null>(null);
  const [selectedCityGuide, setSelectedCityGuide] = useState<CityGuide | null>(
    null,
  );
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(mapRef, { once: true, margin: "-10% 0px" });

  const cancelClose = useCallback(() => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => setActiveCity(null), 400);
  }, []);

  return (
    <div>
      <div className="px-4 pt-6 md:px-10 md:pt-8">
        <div ref={mapRef} className="relative w-full max-w-3xl mx-auto">
          <Image
            src="/spain-map.png"
            alt={COPY.spainMap.alt}
            width={800}
            height={500}
            className="w-full md:w-[60%] h-auto rounded-xl border border-border mx-auto"
            priority={false}
          />

          {cities.map((city, i) => (
            <motion.div
              key={city.ville}
              className="absolute -translate-x-1/2 -translate-y-1/2 left-[var(--pin-x-m)] top-[var(--pin-y-m)] md:left-[var(--pin-x)] md:top-[var(--pin-y)]"
              style={
                {
                  "--pin-x": `${city.coordinates.x}%`,
                  "--pin-y": `${city.coordinates.y}%`,
                  "--pin-x-m": `${city.mobileCoordinates.x}%`,
                  "--pin-y-m": `${city.mobileCoordinates.y}%`,
                } as React.CSSProperties
              }
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
              }
              transition={{ duration: 0.3, delay: i * 0.15 }}
              onPointerEnter={(e) => {
                if (e.pointerType === "mouse") {
                  cancelClose();
                  setActiveCity(city);
                }
              }}
              onPointerLeave={(e) => {
                if (e.pointerType === "mouse") scheduleClose();
              }}
            >
              <button
                className="w-11 h-11 flex items-center justify-center relative group"
                onClick={() => {
                  const guide = getCityGuide(city.ville);
                  if (guide) {
                    setSelectedCityGuide(guide);
                    setActiveCity(null);
                  } else {
                    setActiveCity((prev) =>
                      prev?.ville === city.ville ? null : city,
                    );
                  }
                }}
                aria-label={COPY.spainMap.ariaLabel(city.ville)}
                aria-expanded={activeCity?.ville === city.ville}
              >
                {/* Mobile tooltip — simple, juste le nom */}
                <AnimatePresence>
                  {activeCity?.ville === city.ville && (
                    <motion.div
                      className="absolute bottom-full left-1/2 mb-1 pointer-events-none z-30 md:hidden"
                      style={{ x: "-50%" }}
                      initial={{ opacity: 0, y: 4, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 3, scale: 0.95 }}
                      transition={tooltipReveal}
                    >
                      <div className="bg-card border border-border rounded-md px-2.5 py-1 whitespace-nowrap shadow-md">
                        <p className="text-xs font-semibold leading-tight">
                          {city.ville}
                        </p>
                      </div>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-border" />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div
                  className={`z-20 relative w-8 h-8 rounded-full overflow-hidden ring-2 shadow-md transition-all duration-300 cursor-pointer group-hover:scale-125 group-hover:-translate-y-1 ${activeCity?.ville === city.ville ? "ring-primary scale-125 -translate-y-1" : "ring-border group-hover:ring-primary"}`}
                >
                  <Image
                    src={city.photo}
                    alt={city.ville}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div
                  className={`rounded-full w-2 h-2 absolute bottom-1 left-1/2 -translate-x-1/2 shadow-sm z-10 transition-all duration-300 ${activeCity?.ville === city.ville ? "bg-secondary -translate-y-1" : "bg-border group-hover:bg-secondary group-hover:-translate-y-1"}`}
                />
              </button>
            </motion.div>
          ))}

          {/* Desktop tooltip — riche, au-dessus du pin */}
          <AnimatePresence>
            {activeCity && (
              <motion.div
                key={activeCity.ville}
                className="absolute z-30 pointer-events-auto hidden md:block"
                style={{
                  left: `${activeCity.coordinates.x}%`,
                  top: `${activeCity.coordinates.y}%`,
                  transform: "translate(-50%, calc(-100% - 36px))",
                }}
                initial={{ opacity: 0, y: 6, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 4, scale: 0.96 }}
                transition={tooltipReveal}
                onPointerEnter={(e) =>
                  e.pointerType === "mouse" && cancelClose()
                }
                onPointerLeave={(e) =>
                  e.pointerType === "mouse" && scheduleClose()
                }
              >
                <div
                  className="relative w-52 cursor-pointer"
                  onClick={() => {
                    const guide = getCityGuide(activeCity.ville);
                    if (guide) {
                      setSelectedCityGuide(guide);
                      setActiveCity(null);
                    }
                  }}
                >
                  <div className="bg-card border-3 border-primary rounded-[var(--radius-card)] shadow-lg overflow-hidden transition-colors duration-200">
                    <div className="relative h-24 w-full">
                      <Image
                        src={activeCity.photo}
                        alt={activeCity.ville}
                        fill
                        className="object-cover"
                        sizes="208px"
                      />
                    </div>

                    <div className="p-3 space-y-2">
                      <div>
                        <p className="font-medium text-sm text-foreground tracking-[-0.48px]">
                          {activeCity.ville}
                        </p>
                        <p className="text-[11px] text-text-muted tracking-[-0.32px]">
                          {activeCity.surnom}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {activeCity.filieres.map((f) => (
                          <span
                            key={f}
                            className="text-[10px] px-1.5 py-0.5 rounded-full bg-muted text-text-secondary"
                          >
                            {COPY.filiereLabelsShort[f] ?? f}
                          </span>
                        ))}
                      </div>

                      <p className="text-xs text-text-muted">
                        <span className="font-semibold text-secondary">
                          {activeCity.etudiantsPlaces}+
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-border" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
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
              onSelect={setSelectedCityGuide}
            />
          ))}
        </motion.div>
      </div>
      <CityModal
        city={selectedCityGuide}
        open={!!selectedCityGuide}
        onOpenChange={(isOpen) => {
          if (!isOpen) setSelectedCityGuide(null);
        }}
      />
    </div>
  );
}
