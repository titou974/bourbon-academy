import Image from "next/image";
import type { City } from "@/types";

const FILIERE_LABELS: Record<string, string> = {
  kine: "Kiné",
  dentaire: "Dentaire",
  veterinaire: "Vétérinaire",
  architecture: "Architecture",
  infirmier: "Infirmier",
};

interface CityTooltipProps {
  city: City;
  onClose: () => void;
}

export function CityTooltip({ city, onClose }: CityTooltipProps) {
  return (
    <div className="relative w-52">
      {/* Tap anywhere on tooltip to close (mobile UX) */}
      <div
        className="bg-card border border-border rounded-[var(--radius-card)] shadow-lg overflow-hidden cursor-pointer"
        onClick={onClose}
      >
        {/* City photo */}
        <div className="relative h-24 w-full">
          <Image
            src={city.photo}
            alt={city.ville}
            fill
            className="object-cover"
            sizes="208px"
          />
        </div>

        <div className="p-3 space-y-2">
          <div>
            <p className="font-medium text-sm text-foreground tracking-[-0.48px]">
              {city.ville}
            </p>
            <p className="text-[11px] text-text-muted tracking-[-0.32px]">
              {city.surnom}
            </p>
          </div>

          {/* Filières disponibles */}
          <div className="flex flex-wrap gap-1">
            {city.filieres.map((f) => (
              <span
                key={f}
                className="text-[10px] px-1.5 py-0.5 rounded-full bg-muted text-text-secondary"
              >
                {FILIERE_LABELS[f] ?? f}
              </span>
            ))}
          </div>

          {/* Students placed */}
          <p className="text-xs text-text-muted">
            <span className="font-semibold text-secondary">
              {city.etudiantsPlaces}+
            </span>{" "}
            étudiants accompagnés
          </p>
        </div>
      </div>

      {/* Arrow pointing down */}
      <div
        className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0"
        style={{
          borderLeft: "8px solid transparent",
          borderRight: "8px solid transparent",
          borderTop: "8px solid #e4e4e4",
        }}
      />
    </div>
  );
}
