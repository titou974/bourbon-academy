import SectionWrapper from "@/components/bourbon/SectionWrapper";
import { COPY } from "@/constants/fr_strings";
import { HeroSection } from "@/components/bourbon/HeroSection";
import { FiliereSection } from "@/components/bourbon/FiliereSection";
import { SpainMap } from "@/components/bourbon/SpainMap";
import { ProcessSection } from "@/components/bourbon/ProcessSection";
import { CandidatureForm } from "@/components/bourbon/CandidatureForm";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileBottomBar } from "@/components/bourbon/MobileBottomBar";

export default function Home() {
  return (
    <main className="bg-[var(--background-center)]">
      <MobileBottomBar />
      <HeroSection />
      <SectionWrapper
        id="filieres"
        title={COPY.sections.filieres.title}
        subtitle={COPY.sections.filieres.subtitle}
      >
        <FiliereSection />
      </SectionWrapper>
      <SectionWrapper
        id="carte"
        title={COPY.sections.carte.title}
        subtitle={COPY.sections.carte.subtitle}
      >
        <SpainMap />
      </SectionWrapper>
      <SectionWrapper
        id="process"
        title={COPY.sections.process.title}
        subtitle={COPY.sections.process.subtitle}
      >
        <ProcessSection />
      </SectionWrapper>
      <SectionWrapper
        id="candidature"
        title={COPY.sections.candidature.title}
        subtitle={COPY.sections.candidature.subtitle}
        centered
      >
        <div className="px-4 py-8 md:px-10 md:py-12">
          <CandidatureForm />
        </div>
      </SectionWrapper>
      <footer className="bg-black mt-6 px-6 py-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <p className="text-white/60 text-sm">{COPY.brand.contact}</p>
            <Button variant="default" size="sm" asChild className="text-sm">
              <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}>
                {COPY.footer.writeToUs}
                <ArrowRight className="size-2" />
              </a>
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/bourbon.academy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@bourbon.academy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.05a8.27 8.27 0 0 0 4.76 1.5V7.1a4.83 4.83 0 0 1-1-.41Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/bourbon-academy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2ZM8.09 18.74h-3v-9h3v9ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12Zm12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3v1.2a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06v5.25Z" />
              </svg>
            </a>
          </div>
          <div className="w-12 h-px bg-white/10" />
          <p className="text-white/40 text-xs flex items-center gap-1.5">
            {COPY.footer.madeBy}{" "}
            <a
              href="https://titouanhirsch.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              @bobodigital_
            </a>
          </p>
          <p className="text-white/30 text-[11px]">
            {COPY.footer.copyright(new Date().getFullYear())}
          </p>
        </div>
      </footer>
    </main>
  );
}
