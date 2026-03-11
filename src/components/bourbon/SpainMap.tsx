"use client";

import Image from "next/image";
import { useState, useRef, useCallback } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import citiesData from "@/data/schools.json";
import { StatsCounter } from "./StatsCounter";
import type { City } from "@/types";

const cities = citiesData as City[];

const FILIERE_LABELS: Record<string, string> = {
  kine: "Kiné",
  dentaire: "Dentaire",
  veterinaire: "Vétérinaire",
  architecture: "Architecture",
  infirmier: "Infirmier",
};

const tooltipTransition = { duration: 0.2, ease: [0.16, 1, 0.3, 1] } as const;

export function SpainMap() {
  const [activeCity, setActiveCity] = useState<City | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(mapRef, { once: true, margin: "-10% 0px" });

  const cancelClose = useCallback(() => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => setActiveCity(null), 200);
  }, []);

  return (
    <div>
      <div className="px-4 pt-6 md:px-10 md:pt-8">
        <div ref={mapRef} className="relative w-full max-w-3xl mx-auto">
          <Image
            src="/spain-map.png"
            alt="Carte de l'Espagne avec les villes partenaires"
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
                onClick={() =>
                  setActiveCity((prev) =>
                    prev?.ville === city.ville ? null : city,
                  )
                }
                aria-label={`Voir les écoles à ${city.ville}`}
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
                      transition={tooltipTransition}
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

                <div className="z-20 relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-border group-hover:ring-secondary shadow-md transition-all duration-300 group-hover:scale-125 group-hover:-translate-y-1">
                  <Image
                    src={city.photo}
                    alt={city.ville}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="rounded-full bg-border w-2 h-2 absolute bottom-1 left-1/2 -translate-x-1/2 shadow-sm z-10 group-hover:bg-secondary group-hover:-translate-y-1 transition-all duration-300" />
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
                transition={tooltipTransition}
                onPointerEnter={(e) =>
                  e.pointerType === "mouse" && cancelClose()
                }
                onPointerLeave={(e) =>
                  e.pointerType === "mouse" && scheduleClose()
                }
              >
                <div className="relative w-52">
                  <div className="bg-card border border-border rounded-[var(--radius-card)] shadow-lg overflow-hidden">
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
                            {FILIERE_LABELS[f] ?? f}
                          </span>
                        ))}
                      </div>

                      <p className="text-xs text-text-muted">
                        <span className="font-semibold text-secondary">
                          {activeCity.etudiantsPlaces}+
                        </span>{" "}
                        étudiants accompagnés
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

      <StatsCounter />
    </div>
  );
}
