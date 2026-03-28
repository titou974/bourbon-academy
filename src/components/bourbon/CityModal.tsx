"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { COPY } from "@/constants/fr_strings";
import type { CityGuide } from "@/types";
import {
  ModalHero,
  ModalSectionTitle,
  ModalQuote,
  ModalFeatureGrid,
  ModalRassuranceSection,
  ModalCTASection,
  ModalPillBadges,
} from "./modal-sections";
import { ScrollFadeIn } from "./ScrollFadeIn";
import { fadeIn, staggerContainer } from "@/constants/animations";

interface CityModalProps {
  city: CityGuide | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CityModal({ city, open, onOpenChange }: CityModalProps) {
  if (!city) return null;

  const handleCTA = () => {
    onOpenChange(false);
    setTimeout(() => {
      document
        .getElementById("candidature")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] flex flex-col overflow-hidden p-0 sm:max-w-3xl">
        <DialogTitle className="sr-only">{city.ville}</DialogTitle>
        <div className="flex-1 overflow-y-auto">
          {/* ── HERO ─────────────────────────────────────────────── */}
          <ScrollFadeIn variants={fadeIn}>
            <ModalHero
              photo={city.photo}
              alt={city.ville}
              badge="Destination étudiante"
              subtitleLine={`Espagne · ${city.region} · ${city.stats[1]?.value} jours de soleil`}
              titleBold={city.villeBold}
              titleItalic={city.villeItalic}
              tagline={city.tagline}
              stats={city.stats}
            />
          </ScrollFadeIn>

          {/* ── INTRO + TEMOIGNAGE ───────────────────────────────── */}
          <ScrollFadeIn className="px-5 md:px-8 py-8 md:py-10 space-y-6">
            <ModalSectionTitle label={city.sousTitre}>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight leading-tight">
                {city.introTitreBold}
                <span className="italic text-secondary font-serif">
                  {city.introTitreItalic}
                </span>
              </h3>
            </ModalSectionTitle>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <p className="flex-1 text-sm text-text-secondary leading-relaxed">
                {city.introDescription}
              </p>
              <ModalQuote
                quote={city.temoignage.quote}
                auteur={city.temoignage.auteur}
              />
            </div>
          </ScrollFadeIn>

          {/* ── ANECDOTES ────────────────────────────────────────── */}
          <ScrollFadeIn className="bg-primary px-5 md:px-8 py-8 md:py-10">
            <div className="text-center mb-8">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-secondary font-medium mb-3">
                Anecdotes & pépites
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                Ce que vous ne
                <br />
                saviez pas sur{" "}
                <span className="italic text-secondary font-serif">
                  {city.ville}
                </span>
              </h3>
            </div>
            <ModalFeatureGrid items={city.anecdotes} variant="dark" />
          </ScrollFadeIn>

          {/* ── BUDGET ───────────────────────────────────────────── */}
          <ScrollFadeIn className="px-5 md:px-8 py-8 md:py-10">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 md:items-start">
              <div className="md:w-[45%] space-y-3">
                <ModalSectionTitle label="Pour les parents">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight leading-tight">
                    Un budget{" "}
                    <span className="italic text-secondary font-serif">
                      maîtrisé
                    </span>
                    , une expérience inestimable
                  </h3>
                </ModalSectionTitle>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {city.budget.description}
                </p>
              </div>

              <ScrollFadeIn variants={staggerContainer} className="flex-1 space-y-0 divide-y divide-border">
                {city.budget.lignes.map((l) => (
                  <div
                    key={l.label}
                    className="flex items-center justify-between py-3.5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{l.emoji}</span>
                      <span className="text-sm text-foreground font-medium">
                        {l.label}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-base font-bold text-secondary">
                        {l.prix}
                      </span>
                      <span className="text-xs text-text-muted ml-1">
                        {l.unite}
                      </span>
                    </div>
                  </div>
                ))}
              </ScrollFadeIn>
            </div>
          </ScrollFadeIn>

          {/* ── RASSURANCE PARENTS ────────────────────────────────── */}
          <ScrollFadeIn>
            <ModalRassuranceSection
              description={city.rassuranceParents.description}
              items={city.rassuranceParents.items}
            />
          </ScrollFadeIn>

          {/* ── CTA ──────────────────────────────────────────────── */}
          <ScrollFadeIn>
            <ModalCTASection
              watermark={city.ville}
              description={city.cta.description}
              buttonLabel={city.cta.bouton}
              onCTA={handleCTA}
            />
          </ScrollFadeIn>

          {/* ── FILIERES ─────────────────────────────────────────── */}
          <ScrollFadeIn className="px-5 md:px-8 pb-6 flex justify-center">
            <ModalPillBadges
              items={city.filieres.map((f) => ({
                key: f,
                label: COPY.filiereLabels[f] ?? f,
              }))}
            />
          </ScrollFadeIn>
        </div>
      </DialogContent>
    </Dialog>
  );
}
