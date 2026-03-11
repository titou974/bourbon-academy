"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Image from "next/image";
import { LottieRefCurrentProps } from "lottie-react";
// Import Lottie dynamiquement pour éviter SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import maplineAnimation from "../../../public/lottie/map-line.json";
import { useEffect, useState, useRef } from "react";

export function HeroAnimation() {
  const animationRef = useRef<LottieRefCurrentProps>(null);
  const DELAY_MAP_ONE = 1.15;
  const DELAY_MAP_TWO = 1.25;
  const DELAY_LOTTIE = 1.4;
  useEffect(() => {
    // Démarrer l'animation Lottie après un timeout
    const visibilityTimer = setTimeout(
      () => {
        if (animationRef.current) {
          animationRef.current.play();
        }
      },
      (DELAY_LOTTIE + 0.15) * 1000,
    );

    return () => {
      clearTimeout(visibilityTimer);
    };
  }, []);
  return (
    <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-center md:gap-36 gap-10 relative">
      <motion.img
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
          delay: DELAY_MAP_ONE,
        }}
        src="/france-map.png"
        alt="France"
        className="md:w-[200px] md:h-[200px] w-[100px] h-[100px]"
      />

      <Lottie
        lottieRef={animationRef}
        animationData={maplineAnimation}
        loop={false}
        autoplay={false}
        className="md:w-[20em] w-[8em] mx-auto rotate-110 md:rotate-28 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />

      <motion.img
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
          delay: DELAY_MAP_TWO,
        }}
        src="/spain-map.png"
        alt="Espagne"
        className="md:w-[250px] md:h-[250px] w-[130px] h-[130px]"
      />
    </div>
  );
}
