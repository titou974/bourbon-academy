"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Image from "next/image";
import { LottieRefCurrentProps } from "lottie-react";
// Import Lottie dynamiquement pour éviter SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import maplineAnimation from "../../../public/lottie/map-line.json";
import { useEffect, useRef } from "react";

export function HeroAnimation() {
  const animationRefFrance = useRef<LottieRefCurrentProps>(null);
  const animationRefReunion = useRef<LottieRefCurrentProps>(null);
  const DELAY_MAP_ONE = 1.15;
  const DELAY_MAP_TWO = 1.25;
  const DELAY_LOTTIE = 1.4;
  useEffect(() => {
    // Démarrer l'animation Lottie après un timeout
    const visibilityTimerFrance = setTimeout(
      () => {
        if (animationRefFrance.current) {
          animationRefFrance.current.play();
        }
      },
      (DELAY_LOTTIE + 0.15) * 1000,
    );
    const visibilityTimerReunion = setTimeout(
      () => {
        if (animationRefReunion.current) {
          animationRefReunion.current.play();
        }
      },
      (DELAY_LOTTIE + 0.3) * 1000,
    );

    return () => {
      clearTimeout(visibilityTimerFrance);
      clearTimeout(visibilityTimerReunion);
    };
  }, []);
  return (
    <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-center md:gap-36 gap-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
          delay: DELAY_MAP_ONE,
        }}
        className="relative flex flex-col-reverse md:flex-col items-center gap-2"
      >
        <Image
          width={200}
          height={200}
          src="/france-map.png"
          alt="France"
          className="md:w-[200px] w-[100px] "
        />
        <Image
          width={200}
          height={200}
          src="/reunion-island-map.png"
          alt="Réunion"
          className="md:w-[50px] w-[50px] absolute md:top-[-1em] top-[3em] right-[-1em]"
        />
        <p className="text-muted-foreground text-center text-sm z-20">
          France et DROM-COM
        </p>
      </motion.div>
      <Lottie
        lottieRef={animationRefFrance}
        animationData={maplineAnimation}
        loop={false}
        autoplay={false}
        className="md:w-[20em] w-[8em] mx-auto rotate-110 md:rotate-28 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      <Lottie
        lottieRef={animationRefReunion}
        animationData={maplineAnimation}
        loop={false}
        autoplay={false}
        className="md:w-[16em] w-[8em] mx-auto rotate-110 md:rotate-35 absolute top-11 right-[-1.1em] transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
          delay: DELAY_MAP_TWO,
        }}
        className="flex flex-col items-center justify-start gap-0 md:mb-5"
      >
        <Image
          width={250}
          height={250}
          src="/spain-map.png"
          alt="Espagne"
          className="md:w-[250px] w-[130px]"
        />
        <p className="text-muted-foreground text-center text-sm">Espagne</p>
      </motion.div>
    </div>
  );
}
