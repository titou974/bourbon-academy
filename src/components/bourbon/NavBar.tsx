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
      {/* Pill nav container — matches Figma border-[#e4e4e4] rounded-[51px] h-[71px] */}
      <nav className="w-full max-w-5xl border border-[#e4e4e4] border-[0.5px] rounded-[var(--radius-pill)] h-[51px] md:h-[71px] px-8 flex items-center justify-between backdrop-blur-sm">
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
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <span
            className={`block w-5 h-0.5 bg-primary transition-transform duration-200 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-primary transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-primary transition-transform duration-200 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden w-full max-w-5xl mt-1 border border-[#e4e4e4] rounded-[var(--radius-pill)] bg-[#F5F4F2]/95 backdrop-blur-sm overflow-hidden">
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
        </div>
      )}
    </motion.header>
  );
}
