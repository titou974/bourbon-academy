import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NavBar } from "@/components/bourbon/NavBar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { COPY } from "@/constants/fr_strings";
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
    default: COPY.metadata.title,
    template: COPY.metadata.titleTemplate,
  },
  description: COPY.metadata.description,
  keywords: [...COPY.metadata.keywords],
  authors: [{ name: COPY.brand.name }],
  creator: COPY.brand.name,
  publisher: COPY.brand.name,
  applicationName: COPY.brand.name,
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
    siteName: COPY.brand.name,
    title: COPY.metadata.title,
    description: COPY.metadata.ogDescription,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: COPY.metadata.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: COPY.metadata.title,
    description: COPY.metadata.twitterDescription,
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
