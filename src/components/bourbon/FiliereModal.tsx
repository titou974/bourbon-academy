"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { Filiere, FiliereDetail } from "@/types";
import Image from "next/image";
import MapContainer from "./MapContainer";
import { ArrowRight } from "lucide-react";
import CardTextImage from "./CardTextImage";
import DureeEtudesVisual from "./DureeEtudesVisual";
import DebounchesVisual from "./DebounchesVisual";
import ProgrammeVisual from "./ProgrammeVisual";
import CardIconTitle from "./CardIconTitle";

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
      <DialogContent className="max-h-[90vh] flex flex-col overflow-hidden p-0">
        <div className="flex-1 overflow-y-auto">
          <div className="space-y-4">
            {/* Bandeau couleur filière */}
            <div className="relative w-full h-[8em] md:h-[10em] rounded-t-xl overflow-hidden border-b border-border">
              <Image
                src={filiere.photo}
                alt={filiere.nom}
                width={400}
                height={400}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="space-y-4 px-4 md:px-6 pt-2">
              <div className="space-y-1 px-2">
                <DialogHeader>
                  <DialogTitle className="text-lg font-semibold tracking-[-0.64px] text-left text-[#181818]">
                    {filiere.nom}
                  </DialogTitle>
                </DialogHeader>
                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed tracking-[-0.48px]">
                  {filiere.description}
                </p>
              </div>
              <CardTextImage
                title="Localisation"
                description={
                  <>
                    Nous avons des écoles présente sur{" "}
                    <span className="font-medium">
                      {filiere.localisations
                        ?.map((localisation) => localisation.city)
                        .join(", ")}
                    </span>
                  </>
                }
              >
                <MapContainer
                  localisations={filiere.localisations}
                  filierePhoto={filiere.photo}
                />
              </CardTextImage>
              {/* Programme de formation */}
              <CardTextImage
                title="Contenu de la formation"
                description="Les grandes matières enseignées tout au long du cursus."
              >
                <ProgrammeVisual phases={filiere.programme} />
                {filiere.details?.map((detail: FiliereDetail, i) =>
                  detail.type === "diplome" ? (
                    <CardIconTitle
                      key={i}
                      src="/images/icons/europe-flag.png"
                      alt="Drapeau européen"
                      width={50}
                      height={50}
                    >
                      {detail.label}
                    </CardIconTitle>
                  ) : (
                    <CardIconTitle
                      key={i}
                      src="/images/icons/student.webp"
                      alt="crédits ects"
                      width={50}
                      height={50}
                    >
                      {detail.value} crédits ECTS
                    </CardIconTitle>
                  )
                )}
              </CardTextImage>
              {/* Durée des études */}
              <CardTextImage
                title="Durée des études"
                description={
                  <DureeEtudesVisual
                    annees={filiere.dureEtudesAnnees}
                    detail={filiere.dureEtudesDetail}
                  />
                }
              >
                <CardIconTitle
                  src="/images/icons/time.png"
                  alt="Temps"
                  width={50}
                  height={50}
                >
                  {filiere.dureEtudesAnnees} ans de formation
                </CardIconTitle>
              </CardTextImage>
              {/* Débouchés */}
              <CardTextImage
                title="Débouchés professionnels"
                description="Les métiers accessibles après l'obtention de votre diplôme."
              >
                <DebounchesVisual debouches={filiere.debouches} />
              </CardTextImage>
              {/* Conditions d'entrée */}
              <CardTextImage
                title="Conditions d'entrée"
                description={
                  <span className="flex flex-col gap-1">
                    {filiere.conditions.map((c) => (
                      <span key={c} className="flex items-start gap-1.5">
                        <span className="text-text-secondary">—</span>
                        <span>{c}</span>
                      </span>
                    ))}
                  </span>
                }
              />
            </div>
          </div>
        </div>

        {/* CTA fixe en bas */}
        <div className="border-t border-border p-4">
          <Button
            onClick={handleCTA}
            className="w-full min-h-[44px] flex items-center"
          >
            {filiere.ctaLabel}
            <ArrowRight className="size-3" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
