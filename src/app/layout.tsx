import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NavBar } from "@/components/bourbon/NavBar";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://bourbon-academy.com";

export const viewport: Viewport = {
  themeColor: "#F5F4F2",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bourbon Academy — Étudier en Espagne",
    template: "%s | Bourbon Academy",
  },
  description:
    "Bourbon Academy accompagne les étudiants français et des DROM-TOM dans leurs études en Espagne : médecine, kinésithérapie, dentaire, vétérinaire et plus. +50 écoles partenaires, +1000 étudiants accompagnés.",
  keywords: [
    "études en Espagne",
    "étudier en Espagne",
    "médecine Espagne",
    "kinésithérapie Espagne",
    "dentaire Espagne",
    "vétérinaire Espagne",
    "université Espagne",
    "école Espagne",
    "Bourbon Academy",
    "accompagnement études",
    "inscription université Espagne",
  ],
  authors: [{ name: "Bourbon Academy" }],
  creator: "Bourbon Academy",
  publisher: "Bourbon Academy",
  applicationName: "Bourbon Academy",
  category: "education",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Bourbon Academy",
    title: "Bourbon Academy — Étudier en Espagne",
    description:
      "La plateforme qui connecte les étudiants avec les meilleures écoles d'Espagne. +50 universités partenaires, accompagnement personnalisé.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bourbon Academy — Étudier en Espagne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bourbon Academy — Étudier en Espagne",
    description:
      "La plateforme qui connecte les étudiants avec les meilleures écoles d'Espagne. +50 universités partenaires.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className="bg-background-side"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background-center`}
      >
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
