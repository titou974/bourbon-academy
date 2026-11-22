import type { MetadataRoute } from "next";

const SITE_URL = "https://bourbon-academy.com";

const BOTS = [
  "*",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: BOTS.map((userAgent) => ({ userAgent, allow: "/" })),
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
