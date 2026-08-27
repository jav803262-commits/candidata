import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site";
import { contacto } from "@/data/contacto";

/** JSON-LD mínimo de `Organization` (la campaña). El `Person` de Schema.org se
 * pospone hasta tener datos reales — publicar placeholders como hechos es peor
 * que omitirlo. Ver §9 del SPEC. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: `Campaña ${SITE_NAME}`,
    url: SITE_URL,
    description: SITE_TAGLINE,
    areaServed: "Tehuantepec, Oaxaca, México",
    sameAs: [
      contacto.redes.facebook,
      contacto.redes.instagram,
      contacto.redes.youtube,
    ].filter(Boolean),
  };
}
