"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import type { Filiere, CityGuide } from "@/types";
import MapContainer from "./MapContainer";
import { CityModal } from "./CityModal";
import { getCityGuide } from "@/data/cities-guide";
import { getFiliereGuide } from "@/data/filieres-guide";
import { COPY } from "@/constants/fr_strings";
import { useState } from "react";
import {
  ModalHero,
  ModalSectionTitle,
  ModalFeatureGrid,
  ModalRassuranceSection,
  ModalCTASection,
  ModalPillBadges,
} from "./modal-sections";
import { ScrollFadeIn } from "./ScrollFadeIn";
import { fadeIn, staggerContainer } from "@/constants/animations";

interface FiliereModalProps {
  filiere: Filiere;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function FiliereModal({
  filiere,
  open,
  onOpenChange,
}: FiliereModalProps) {
  const [selectedCity, setSelectedCity] = useState<CityGuide | null>(null);
  const guide = getFiliereGuide(filiere.id);

  const handleCityClick = (cityName: string) => {
    const g = getCityGuide(cityName);
    if (g) setSelectedCity(g);
  };

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
        <DialogTitle className="sr-only">{filiere.nom}</DialogTitle>
        <div className="flex-1 overflow-y-auto">
          {/* ── HERO ─────────────────────────────────────────────── */}
          <ScrollFadeIn variants={fadeIn}>
            <ModalHero
              photo={filiere.photo}
              alt={filiere.nom}
              badge="Formation santé"
              subtitleLine={`Espagne · Diplôme européen · ${filiere.dureEtudesAnnees} ans`}
              titleBold={guide?.nomBold ?? filiere.nom}
              titleItalic={guide?.nomItalic ?? ""}
              tagline={guide?.tagline ?? filiere.description}
              stats={guide?.stats}
            />
          </ScrollFadeIn>

          {/* ── INTRO ────────────────────────────────────────────── */}
          {guide && (
            <ScrollFadeIn className="px-5 md:px-8 py-8 md:py-10 space-y-4">
              <ModalSectionTitle label={guide.sousTitre}>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight leading-tight">
                  {guide.introTitreBold}
                  <span className="italic text-secondary font-serif">
                    {guide.introTitreItalic}
                  </span>
                </h3>
              </ModalSectionTitle>
              <p className="text-sm text-text-secondary leading-relaxed">
                {guide.introDescription}
              </p>
            </ScrollFadeIn>
          )}

          {/* ── CONDITIONS D'ENTRÉE ──────────────────────────────── */}
          <ScrollFadeIn className="px-5 md:px-8 py-6 md:py-8 border-y border-border">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              <div className="md:w-[40%]">
                <ModalSectionTitle label="Prérequis">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight leading-tight">
                    Conditions{" "}
                    <span className="italic text-secondary font-serif">
                      d&apos;entrée
                    </span>
                  </h3>
                </ModalSectionTitle>
              </div>
              <div className="flex-1 space-y-2.5">
                {filiere.conditions.map((c) => (
                  <div
                    key={c}
                    className="flex items-start gap-3 text-sm text-text-secondary"
                  >
                    <span className="text-secondary font-bold text-lg leading-none mt-[-2px]">
                      ·
                    </span>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollFadeIn>

          {/* ── PROGRAMME ────────────────────────────────────────── */}
          <ScrollFadeIn className="bg-primary px-5 md:px-8 py-8 md:py-10">
            <div className="text-center mb-8">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-secondary font-medium mb-3">
                Le parcours en détail
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                {filiere.dureEtudesAnnees} ans pour devenir{" "}
                <span className="italic text-secondary font-serif">
                  {filiere.nom.toLowerCase() === "médecine"
                    ? "professionnel de santé"
                    : filiere.nom.toLowerCase()}
                </span>
              </h3>
            </div>

            <ScrollFadeIn variants={staggerContainer} className="space-y-4">
              {filiere.programme.map((p, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-5"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-semibold text-primary bg-secondary px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {p.phase}
                    </span>
                    <span className="text-sm font-medium text-white">
                      {p.label}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.matieres.map((m) => (
                      <span
                        key={m}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-white/10 text-white/80 tracking-tight"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </ScrollFadeIn>
          </ScrollFadeIn>

          {guide && (
            <ScrollFadeIn className="px-5 md:px-8 py-8 md:py-10">
              <div className="text-center mb-8">
                <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-secondary font-medium mb-3">
                  Pourquoi choisir cette filière
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight leading-tight">
                  Ce qui fait la{" "}
                  <span className="italic text-secondary font-serif">
                    différence
                  </span>
                </h3>
              </div>
              <ModalFeatureGrid
                items={guide.atouts}
                variant="light"
                columns={3}
              />
            </ScrollFadeIn>
          )}

          {/* ── CARTE — OÙ ÉTUDIER ──────────────────────────────── */}
          <ScrollFadeIn className="px-5 md:px-8 py-6 md:py-8 border-y border-border">
            <div className="space-y-5">
              <ModalSectionTitle label="Localisation">
                <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight leading-tight">
                  Où étudier la{" "}
                  <span className="italic text-secondary font-serif">
                    {filiere.nom.toLowerCase()}
                  </span>{" "}
                  ?
                </h3>
                <p className="text-sm text-text-secondary">
                  {COPY.filiereModal.localisationDesc}{" "}
                  <span className="font-medium">
                    {filiere.localisations?.map((l) => l.city).join(", ")}
                  </span>
                </p>
              </ModalSectionTitle>
              <MapContainer
                localisations={filiere.localisations}
                filierePhoto={filiere.photo}
                onCityClick={handleCityClick}
              />
            </div>
          </ScrollFadeIn>

          {/* ── DÉBOUCHÉS ────────────────────────────────────────── */}
          <ScrollFadeIn className="px-5 md:px-8 py-8 md:py-10">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              <div className="md:w-[40%]">
                <ModalSectionTitle label="Après vos études">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight leading-tight">
                    Vos{" "}
                    <span className="italic text-secondary font-serif">
                      débouchés
                    </span>
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {COPY.filiereModal.debouchesDesc}
                  </p>
                </ModalSectionTitle>
              </div>
              <div className="flex-1 content-start">
                <ModalPillBadges
                  items={filiere.debouches.map((d) => ({ key: d, label: d }))}
                />
              </div>
            </div>
          </ScrollFadeIn>

          {/* ── RASSURANCE PARENTS ────────────────────────────────── */}
          {guide && (
            <ScrollFadeIn>
              <ModalRassuranceSection
                description={guide.rassuranceParents.description}
                items={guide.rassuranceParents.items}
              />
            </ScrollFadeIn>
          )}

          {/* ── CTA ──────────────────────────────────────────────── */}
          <ScrollFadeIn>
            <ModalCTASection
              watermark={filiere.nom}
              description={
                guide?.cta.description ??
                `La ${filiere.nom.toLowerCase()} en Espagne vous attend. Lancez votre candidature dès maintenant.`
              }
              buttonLabel={filiere.ctaLabel}
              onCTA={handleCTA}
            />
          </ScrollFadeIn>
        </div>
      </DialogContent>
      <CityModal
        city={selectedCity}
        open={!!selectedCity}
        onOpenChange={(isOpen) => {
          if (!isOpen) setSelectedCity(null);
        }}
      />
    </Dialog>
  );
}
