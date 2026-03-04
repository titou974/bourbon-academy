import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NavBar } from "@/components/bourbon/NavBar";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bourbon Academy — Étudier en Espagne",
  description:
    "Accompagnement pour étudiants souhaitant intégrer une école en Espagne.",
  openGraph: {
    title: "Bourbon Academy — Étudier en Espagne",
    description:
      "Accompagnement pour étudiants souhaitant intégrer une école en Espagne.",
    url: "https://bourbon-academy.fr",
    siteName: "Bourbon Academy",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bourbon Academy — Étudier en Espagne",
    description:
      "Accompagnement pour étudiants souhaitant intégrer une école en Espagne.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
