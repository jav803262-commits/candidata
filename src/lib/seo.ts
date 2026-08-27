import type { Metadata } from "next";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site";

/** Helper de metadata por página. Centraliza title/description/canonical/OG para
 * que las páginas internas solo declaren lo que cambia. */
export function buildMetadata({
  title,
  description = SITE_TAGLINE,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title ? `${title} · ${SITE_NAME}` : `${SITE_NAME} — Presidencia Municipal de Tehuantepec`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "es_MX",
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
