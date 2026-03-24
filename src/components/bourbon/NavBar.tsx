"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { COPY } from "@/constants/fr_strings";
import { IMAGES } from "@/constants/images";
import { motion } from "framer-motion";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
        delay: 0,
      }}
      className="top-0 left-0 right-0 z-50 flex flex-col items-center px-6 pt-5"
    >
      {/* Pill nav container — matches Figma border-border rounded-[51px] h-[71px] */}
      <nav className="w-full max-w-5xl border border-border border-1 rounded-[var(--radius-pill)] h-[51px] md:h-[71px] px-8 flex items-center justify-between backdrop-blur-sm">
        {/* Logo */}
        <div className="flex items-center gap-px">
          <span className="font-semibold text-text-primary text-base tracking-[-0.64px] hidden md:block">
            {COPY.brand.name}
          </span>
          <Image
            src={IMAGES.logo.src}
            alt={IMAGES.logo.alt}
            width={IMAGES.logo.width}
            height={IMAGES.logo.height}
          />
        </div>

        {/* Desktop nav + CTA */}
        <div className="flex items-center space-x-6">
          <ul className="hidden md:flex gap-8">
            {COPY.nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-text-primary text-sm tracking-[-0.64px] hover:opacity-60 transition-opacity"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Button
            variant="default"
            size="sm"
            asChild
            className="hidden md:inline-flex tracking-[-0.64px]"
          >
            <a href="#candidature">
              {COPY.nav.cta}
              <div className="w-2 h-2 bg-primary-foreground rounded-full ring-2 ring-primary-foreground/20" />
            </a>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden relative w-5 h-4 p-0"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? COPY.nav.menuClose : COPY.nav.menuOpen}
        >
          <span
            className={`absolute inset-x-0 h-0.5 bg-primary rounded-full transition-all duration-300 ease-in-out top-0 origin-center ${menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : ""}`}
          />
          <span
            className={`absolute inset-x-0 h-0.5 bg-primary rounded-full transition-all duration-300 ease-in-out top-1/2 -translate-y-1/2 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
          />
          <span
            className={`absolute inset-x-0 h-0.5 bg-primary rounded-full transition-all duration-300 ease-in-out bottom-0 origin-center ${menuOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
          className="md:hidden w-full max-w-[90%] mt-1 border border-border rounded-[var(--radius-pill)] bg-[#F5F4F2]/95 backdrop-blur-sm overflow-hidden absolute top-20 left-1/2 -translate-x-1/2"
        >
          <ul className="flex flex-col px-8 py-5 gap-4">
            {COPY.nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-text-primary tracking-[-0.64px] hover:opacity-60 transition-opacity"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Button
                variant="default"
                size="sm"
                asChild
                className="tracking-[-0.64px]"
              >
                <a href="#candidature" onClick={() => setMenuOpen(false)}>
                  {COPY.nav.ctaMobile}
                </a>
              </Button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
