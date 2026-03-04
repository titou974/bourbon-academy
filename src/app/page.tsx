import SectionWrapper from "@/components/bourbon/SectionWrapper";
import { COPY } from "@/constants/fr_strings";
import { HeroSection } from "@/components/bourbon/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />

      {/* ── Filières — Figma node 17:58 ─────────────────────────────────── */}
      <SectionWrapper
        id="filieres"
        title={COPY.sections.filieres.title}
        subtitle={COPY.sections.filieres.subtitle}
      >
        <div className="min-h-[400px] px-10 py-[var(--spacing-section)]" />
      </SectionWrapper>

      {/* ── Carte Espagne — Figma node 17:180 ───────────────────────────── */}
      <SectionWrapper
        id="carte"
        title={COPY.sections.carte.title}
        subtitle={COPY.sections.carte.subtitle}
      >
        <div className="min-h-[400px] px-10 py-[var(--spacing-section)]" />
      </SectionWrapper>

      {/* ── Comment ça marche — Figma node 22:63 ────────────────────────── */}
      <SectionWrapper
        id="process"
        title={COPY.sections.process.title}
        subtitle={COPY.sections.process.subtitle}
      >
        <div className="min-h-[300px] px-10 py-[var(--spacing-section)]" />
      </SectionWrapper>

      {/* ── Formulaire — Figma node 27:412 ──────────────────────────────── */}
      <SectionWrapper
        id="candidature"
        title={COPY.sections.candidature.title}
        subtitle={COPY.sections.candidature.subtitle}
      >
        <div className="min-h-[300px] px-10 py-[var(--spacing-section)]" />
      </SectionWrapper>

      {/* ── Footer — Figma node 33:496 ───────────────────────────────────── */}
      <footer className="bg-black mt-6 px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-white text-xs">{COPY.brand.contact}</p>
        </div>
      </footer>
    </main>
  );
}
