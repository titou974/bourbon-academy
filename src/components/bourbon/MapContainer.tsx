"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { Localisation } from "@/types";
import { COPY } from "@/constants/fr_strings";

interface MapContainerProps {
  localisations?: Localisation[];
  filierePhoto?: string;
  onCityClick?: (cityName: string) => void;
}

export default function MapContainer({
  localisations = [],
  filierePhoto,
  onCityClick,
}: MapContainerProps) {
  const [activeCity, setActiveCity] = useState<string | null>(null);

  return (
    <div className="border border-border p-2 rounded-xl h-[21em] flex items-center justify-center relative overflow-hidden group">
      <div className="relative h-full w-full md:h-auto md:w-[60%] flex items-center justify-center">
        <Image
          src="/spain-map.png"
          alt={COPY.mapContainer.alt}
          width={600}
          height={600}
          className="object-cover h-full w-full md:h-auto"
        />

        {localisations.map((loc, i) => (
          <motion.div
            key={loc.city}
            className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer left-[var(--pin-x-m)] top-[var(--pin-y-m)] md:left-[var(--pin-x)] md:top-[var(--pin-y)]"
            style={
              {
                "--pin-x": `${loc["ping-position-x"]}%`,
                "--pin-y": `${loc["ping-position-y"]}%`,
                "--pin-x-m": `${loc["mobile-ping-position-x"]}%`,
                "--pin-y-m": `${loc["mobile-ping-position-y"]}%`,
              } as React.CSSProperties
            }
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.2 }}
            onHoverStart={() => setActiveCity(loc.city)}
            onHoverEnd={() => setActiveCity(null)}
            onClick={() => {
              if (onCityClick) {
                onCityClick(loc.city);
              } else {
                setActiveCity(activeCity === loc.city ? null : loc.city);
              }
            }}
          >
            <AnimatePresence>
              {activeCity === loc.city && (
                <motion.div
                  className="absolute bottom-full left-1/2 md:mb-5 mb-2 pointer-events-none z-10"
                  style={{ x: "-50%" }}
                  initial={{
                    opacity: 0,
                    y: 6,
                    scale: 0.92,
                    filter: "blur(4px)",
                  }}
                  animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: 4, scale: 0.95, filter: "blur(3px)" }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="bg-background-center rounded-md px-2.5 py-1.5 whitespace-nowrap shadow-md">
                    <p className="text-xs font-semibold leading-tight">
                      {loc.city}
                    </p>
                    <p className="text-[10px] text-text-muted leading-tight">
                      {loc.surnom}
                    </p>
                  </div>
                  {/* Flèche */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-background-center" />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="z-20 relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-border hover:ring-secondary group-hover:translate-y-[-4px] shadow-md transitions-colors ease-in-out duration-300 hover:scale-150">
              {loc.photo ? (
                <Image
                  src={loc.photo}
                  alt={loc.city}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="w-full h-full bg-primary" />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
