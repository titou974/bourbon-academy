import type { Variants } from "framer-motion";

/* ── Fade-in au scroll (whileInView) ──────────────────────────────────── */

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

/** Props par defaut pour whileInView sur les sections */
export const scrollViewport = {
  once: true,
  amount: 0.15 as const,
};
