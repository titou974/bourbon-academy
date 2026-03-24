"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { COPY } from "@/constants/fr_strings";

export function MobileBottomBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const candidature = document.getElementById("candidature");
    if (!hero || !candidature) return;

    let heroOut = false;
    let candidatureIn = false;

    const update = () => setVisible(heroOut && !candidatureIn);

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        heroOut = !entry.isIntersecting;
        update();
      },
      { threshold: 0 },
    );

    const candidatureObserver = new IntersectionObserver(
      ([entry]) => {
        candidatureIn = entry.isIntersecting;
        update();
      },
      { threshold: 0 },
    );

    heroObserver.observe(hero);
    candidatureObserver.observe(candidature);

    return () => {
      heroObserver.disconnect();
      candidatureObserver.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-background/80 backdrop-blur-lg border-t border-border px-4 py-3 flex gap-3"
        >
          <Button asChild variant="outline" className="flex-1 min-h-[44px]">
            <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}>
              {COPY.mobileBottomBar.contact}
            </a>
          </Button>
          <Button asChild className="flex-1 min-h-[44px]">
            <a href="#candidature">
              {COPY.mobileBottomBar.candidature}
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
