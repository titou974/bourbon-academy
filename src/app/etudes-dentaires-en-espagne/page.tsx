import type { Metadata } from "next";
import Link from "next/link";
import { COPY } from "@/constants/fr_strings";

const SITE_URL = "https://bourbon-academy.com";
const D = COPY.dentaire;
const PAGE_URL = `${SITE_URL}${D.path}`;

export const metadata: Metadata = {
  title: { absolute: D.title },
  description: D.description,
  alternates: { canonical: D.path },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#page`,
      url: PAGE_URL,
      name: D.title,
      description: D.description,
      inLanguage: "fr",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: D.breadcrumbHome,
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: D.breadcrumbLabel,
          item: PAGE_URL,
        },
      ],
    },
  ],
};

const h2 =
  "text-2xl md:text-3xl font-medium tracking-[-1px] text-text-primary";

export default function EtudesDentairesEnEspagne() {
  return (
    <main className="bg-[var(--background-center)] px-4 py-10 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-5xl mx-auto space-y-14">
        <header className="space-y-4">
          <p className="text-sm text-text-muted">
            <Link href="/" className="hover:opacity-60 transition-opacity">
              {D.breadcrumbHome}
            </Link>{" "}
            › {D.breadcrumbLabel}
          </p>
          <h1 className="text-3xl md:text-5xl font-medium tracking-[-1.8px] text-text-primary">
            {D.h1}
          </h1>
        </header>

        <section className="space-y-4">
          <h2 className={h2}>{D.hero.title}</h2>
          <p className="text-base md:text-xl leading-relaxed text-foreground">
            {D.hero.before}
            <Link href="/" className="underline underline-offset-4 font-medium">
              {D.hero.linkLabel}
            </Link>
            {D.hero.after}
          </p>
          <aside
            className="gtr-offer"
            style={{
              margin: "24px 0",
              padding: "20px 24px",
              border: "1px solid rgba(0,0,0,.12)",
              borderRadius: "16px",
            }}
          >
            <p style={{ margin: "0 0 8px", fontWeight: 600, fontSize: "1.15em" }}>
              {D.offerTitle}
            </p>
          </aside>
        </section>

        <section className="space-y-4">
          <h2 className={h2}>{D.steps.title}</h2>
          <p className="text-base md:text-lg leading-relaxed text-foreground">
            {D.steps.text}
          </p>
        </section>

        <section className="space-y-4">
          <h2 className={h2}>{D.cards.title}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {D.cards.items.map((item) => (
              <div
                key={item.title}
                className="border border-border rounded-3xl bg-card p-5 space-y-2"
              >
                <h3 className="text-lg font-medium text-text-primary">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className={h2}>{D.filiere.title}</h2>
          <p className="text-base md:text-lg leading-relaxed text-foreground">
            {D.filiere.text}
          </p>
        </section>

        <section className="space-y-4">
          <h2 className={h2}>{D.faq.title}</h2>
          <div className="border-t border-border">
            {D.faq.items.map((item) => (
              <details key={item.q} className="border-b border-border py-4">
                <summary className="cursor-pointer font-medium text-text-primary">
                  {item.q}
                </summary>
                <p className="mt-2 text-foreground">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-black text-white px-6 py-10 md:px-10 space-y-4">
          <h2 className="text-2xl md:text-3xl font-medium tracking-[-1px]">
            {D.cta.title}
          </h2>
          <p className="max-w-2xl text-base md:text-lg">{D.cta.text}</p>
        </section>
      </div>
    </main>
  );
}
