"use client";

import Image from "next/image";
import { useState, useRef, useCallback } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import citiesData from "@/data/schools.json";
import { CityTooltip } from "./CityTooltip";
import { StatsCounter } from "./StatsCounter";
import type { City } from "@/types";

const cities = citiesData as City[];

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

  const handleToggle = (city: City) => {
    setActiveCity((prev) => (prev?.ville === city.ville ? null : city));
  };

  return (
    <div>
      <div className="px-4 pt-6 md:px-10 md:pt-8">
        {/* relative wrapper = exact image bounds, pins % are accurate */}
        <div ref={mapRef} className="relative w-full max-w-3xl mx-auto">
          <Image
            src="/spain-map.png"
            alt="Carte de l'Espagne avec les villes partenaires"
            width={800}
            height={500}
            className="w-full md:w-[60%] h-auto rounded-xl border border-border mx-auto"
            priority={false}
          />

          {/* City hotspot pins */}
          {cities.map((city, i) => (
            <motion.div
              key={city.ville}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${city.coordinates.x}%`,
                top: `${city.coordinates.y}%`,
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
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
              {/* Touch target: min 44×44px */}
              <button
                className="w-11 h-11 flex items-center justify-center relative group"
                onClick={() => handleToggle(city)}
                aria-label={`Voir les écoles à ${city.ville}`}
                aria-expanded={activeCity?.ville === city.ville}
              >
                <div className="z-20 relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-border group-hover:ring-secondary shadow-md transition-all duration-300 group-hover:scale-125 group-hover:-translate-y-1">
                  <Image
                    src={city.photo}
                    alt={city.ville}
                    width={32}
                    height={32}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="rounded-full bg-border w-2 h-2 absolute bottom-1 left-1/2 -translate-x-1/2 shadow-sm z-10 group-hover:bg-secondary group-hover:-translate-y-1 transition-all duration-300" />
              </button>
            </motion.div>
          ))}

          {/* Tooltip — sibling to pins, positioned at active city coords */}
          <AnimatePresence mode="wait">
            {activeCity && (
              <motion.div
                key={activeCity.ville}
                className="absolute z-30 pointer-events-auto"
                style={{
                  left: `${activeCity.coordinates.x}%`,
                  top: `${activeCity.coordinates.y}%`,
                  transform: "translate(-50%, calc(-100% - 36px))",
                }}
                initial={{ opacity: 0, y: 6, scale: 0.94, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: 4, scale: 0.96, filter: "blur(3px)" }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                onPointerEnter={(e) =>
                  e.pointerType === "mouse" && cancelClose()
                }
                onPointerLeave={(e) =>
                  e.pointerType === "mouse" && scheduleClose()
                }
              >
                <CityTooltip
                  city={activeCity}
                  onClose={() => setActiveCity(null)}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Stats — sous la carte, séparées par une border-t */}
      <StatsCounter />
    </div>
  );
}
