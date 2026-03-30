import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { COPY } from "@/constants/fr_strings";

/* ── Hero ──────────────────────────────────────────────────────────────── */

interface ModalHeroProps {
  photo: string;
  alt: string;
  badge: string;
  subtitleLine: string;
  titleBold: string;
  titleItalic: string;
  tagline: string;
  stats?: { value: string; label: string }[];
}

export function ModalHero({
  photo,
  alt,
  badge,
  subtitleLine,
  titleBold,
  titleItalic,
  tagline,
  stats,
}: ModalHeroProps) {
  return (
    <div className="relative w-full h-[20em] md:h-[24em] overflow-hidden">
      <Image
        src={photo}
        alt={alt}
        width={1200}
        height={900}
        className="object-cover h-full w-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

      <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest font-medium text-white bg-secondary/80 backdrop-blur-sm px-3 py-1.5 rounded-md">
        {badge}
      </span>

      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-none mb-3">
          {titleBold}
          <span className="italic text-secondary font-serif">
            {titleItalic}
          </span>
        </h2>
        <p className="text-sm md:text-base text-white/80 max-w-lg leading-relaxed">
          {tagline}
        </p>

        {stats && stats.length > 0 && (
          <div className="flex gap-6 mt-5">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-xl md:text-2xl font-bold text-white tracking-tight">
                  {s.value}
                </p>
                <p className="text-[10px] md:text-xs text-white/60 uppercase tracking-wider">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Section title (uppercase label + bold/italic heading) ─────────────── */

interface ModalSectionTitleProps {
  label: string;
  children: React.ReactNode;
}

export function ModalSectionTitle({ label, children }: ModalSectionTitleProps) {
  return (
    <div className="space-y-2">
      <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-secondary font-medium">
        {label}
      </p>
      {children}
    </div>
  );
}

/* ── Feature card (emoji + catégorie + titre + description + accroche) ── */

interface FeatureCardItem {
  emoji: string;
  categorie: string;
  titre: string;
  description: string;
  accroche: string;
}

interface ModalFeatureGridProps {
  items: FeatureCardItem[];
  variant?: "dark" | "light";
  columns?: 2 | 3;
}

export function ModalFeatureGrid({
  items,
  variant = "dark",
  columns = 3,
}: ModalFeatureGridProps) {
  const isDark = variant === "dark";
  const gridCols =
    columns === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-3";

  return (
    <div className={`grid ${gridCols} gap-3`}>
      {items.map((a) => (
        <div
          key={a.titre}
          className={
            isDark
              ? "bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 space-y-2.5"
              : "border border-border rounded-xl p-4 space-y-2.5 bg-white"
          }
        >
          <span className="text-xl">{a.emoji}</span>
          <p className="text-[10px] uppercase tracking-[0.15em] text-secondary font-medium mt-1">
            {a.categorie}
          </p>
          <h4
            className={`text-sm font-semibold leading-snug ${isDark ? "text-white" : "text-foreground"}`}
          >
            {a.titre}
          </h4>
          <p
            className={`text-xs leading-relaxed ${isDark ? "text-white/70" : "text-text-muted"}`}
          >
            {a.description}
          </p>
          <p className="text-xs text-secondary font-medium pt-1">
            → {a.accroche}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ── Rassurance parents section ─────────────────────────────────────────── */

interface RassuranceItem {
  emoji: string;
  titre: string;
  description: string;
}

interface ModalRassuranceSectionProps {
  description: string;
  items: RassuranceItem[];
}

export function ModalRassuranceSection({
  description,
  items,
}: ModalRassuranceSectionProps) {
  return (
    <div className="bg-primary px-5 md:px-8 py-8 md:py-10">
      <div className="text-center mb-8 max-w-lg mx-auto">
        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-secondary font-medium mb-3">
          {COPY.cityModal.rassuranceLabel}
        </p>
        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight mb-3">
          {COPY.cityModal.rassuranceTitreBold}
          <br />
          {COPY.cityModal.rassuranceTitrePreposition}{" "}
          <span className="italic text-secondary font-serif">
            {COPY.cityModal.rassuranceTitreItalic}
          </span>
        </h3>
        <p className="text-sm text-white/60 leading-relaxed">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {items.map((item) => (
          <div
            key={item.titre}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 space-y-2"
          >
            <h4 className="text-sm font-semibold text-white">
              <span className="mr-1.5">{item.emoji}</span>
              {item.titre}
            </h4>
            <p className="text-xs text-white/70 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── CTA section with watermark ─────────────────────────────────────────── */

interface ModalCTASectionProps {
  watermark: string;
  description: string;
  buttonLabel: string;
  onCTA: () => void;
}

export function ModalCTASection({
  watermark,
  description,
  buttonLabel,
  onCTA,
}: ModalCTASectionProps) {
  return (
    <div className="px-5 md:px-8 py-10 md:py-14 text-center relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[6rem] md:text-[10rem] font-bold text-foreground/[0.03] uppercase leading-none tracking-tighter">
          {watermark}
        </span>
      </div>

      <div className="relative z-10 max-w-md mx-auto space-y-4">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight leading-tight">
          {COPY.modalSections.ctaTitreBold}{" "}
          <span className="italic text-secondary font-serif">{COPY.modalSections.ctaTitreItalic}</span>
        </h3>
        <p className="text-sm text-text-muted leading-relaxed">{description}</p>
        <Button onClick={onCTA} className="min-h-[48px] px-8 text-sm">
          {buttonLabel}
          <ArrowRight className="size-4 ml-1" />
        </Button>
      </div>
    </div>
  );
}

/* ── Pill badges ────────────────────────────────────────────────────────── */

interface ModalPillBadgesProps {
  items: { key: string; label: string }[];
}

export function ModalPillBadges({ items }: ModalPillBadgesProps) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <span
          key={item.key}
          className="text-xs px-3 py-1.5 rounded-full bg-secondary/5 text-secondary font-medium tracking-tight border border-secondary/15"
        >
          {item.label}
        </span>
      ))}
    </div>
  );
}

/* ── Quote card (citation) ──────────────────────────────────────────────── */

interface ModalQuoteProps {
  quote: string;
  auteur: string;
}

export function ModalQuote({ quote, auteur }: ModalQuoteProps) {
  return (
    <div className="md:w-[40%] bg-primary text-white rounded-xl p-5 md:p-6 flex flex-col justify-between relative">
      <span className="text-secondary text-4xl leading-none font-serif absolute top-4 left-5 md:left-6">
        &ldquo;
      </span>
      <p className="text-sm md:text-base italic leading-relaxed mt-6">
        {quote}
      </p>
      <p className="text-xs text-secondary font-medium mt-4">— {auteur}</p>
    </div>
  );
}
