"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import type { Filiere, CityGuide } from "@/types";
import MapContainer from "./MapContainer";
import { CityModal } from "./CityModal";
import { getCityGuide } from "@/constants/cities-guide";
import { COPY } from "@/constants/fr_strings";
import { useState } from "react";
import {
  ModalHero,
  ModalSectionTitle,
  ModalCTASection,
  ModalPillBadges,
  ModalFeatureGrid,
} from "./modal-sections";
import { ScrollFadeIn } from "./ScrollFadeIn";
import { fadeIn } from "@/constants/animations";
import { getFiliereGuide } from "@/constants/filieres";

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
          <ScrollFadeIn variants={fadeIn}>
            <ModalHero
              photo={filiere.photo}
              alt={filiere.nom}
              badge={COPY.filiereModal.badge}
              subtitleLine={COPY.filiereModal.subtitleLine(
                filiere.dureEtudesAnnees,
              )}
              titleBold={filiere.nomBold}
              titleItalic={filiere.nomItalic}
              tagline={filiere.tagline}
              stats={filiere.stats}
            />
          </ScrollFadeIn>

          <ScrollFadeIn className="px-5 md:px-8 py-8 md:py-10 space-y-4">
            <ModalSectionTitle label={filiere.sousTitre}>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight leading-tight">
                {filiere.introTitreBold}
                <span className="italic text-secondary font-serif">
                  {filiere.introTitreItalic}
                </span>
              </h3>
            </ModalSectionTitle>
            <p className="text-sm text-text-secondary leading-relaxed">
              {filiere.introDescription}
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn className="px-5 md:px-8 py-6 md:py-8 border-y border-border">
            <div className="space-y-5">
              <ModalSectionTitle label={COPY.filiereModal.localisation}>
                <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight leading-tight">
                  {COPY.filiereModal.ouEtudierPrefix}{" "}
                  <span className="italic text-secondary font-serif">
                    {filiere.nom.toLowerCase()}
                  </span>{" "}
                  {COPY.filiereModal.ouEtudierSuffix}
                </h3>
                <p className="text-sm text-text-secondary">
                  {COPY.filiereModal.localisationDesc}
                </p>
              </ModalSectionTitle>
              <MapContainer
                localisations={filiere.localisations}
                filierePhoto={filiere.photo}
                onCityClick={handleCityClick}
              />
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn className="px-5 md:px-8 py-6 md:py-8 border-y border-border">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              <div className="md:w-[40%]">
                <ModalSectionTitle label={COPY.filiereModal.prerequis}>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight leading-tight">
                    {COPY.filiereModal.conditionsBold}{" "}
                    <span className="italic text-secondary font-serif">
                      {COPY.filiereModal.conditionsItalic}
                    </span>
                  </h3>
                </ModalSectionTitle>
              </div>
              <div className="flex-1 space-y-4">
                {filiere.conditions.map((c) => (
                  <div key={c.etape} className="flex gap-3">
                    <span className="flex-none w-5 h-5 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold flex items-center justify-center mt-0.5 shrink-0">
                      {c.etape}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground leading-snug">
                        {c.titre}
                      </p>
                      <p className="text-xs text-text-secondary leading-relaxed mt-0.5">
                        {c.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn className="px-5 md:px-8 py-8 md:py-10">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              <div className="md:w-[40%]">
                <ModalSectionTitle label={COPY.filiereModal.apresEtudes}>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight leading-tight">
                    {COPY.filiereModal.vosDebouches}{" "}
                    <span className="italic text-secondary font-serif">
                      {COPY.filiereModal.debouchesItalic}
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

          {guide && (
            <ScrollFadeIn className="px-5 md:px-8 py-8 md:py-10">
              <div className="text-center mb-8">
                <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-secondary font-medium mb-3">
                  {COPY.filiereModal.pourquoiChoisir}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight leading-tight">
                  {COPY.filiereModal.ceFaitDifference}{" "}
                  <span className="italic text-secondary font-serif">
                    {COPY.filiereModal.difference}
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

          <ScrollFadeIn>
            <ModalCTASection
              watermark={filiere.nom}
              description={filiere.cta.description}
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
