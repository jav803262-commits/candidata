import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { Galeria } from "@/components/common/Galeria";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { galeria } from "@/data/galeria";

export const metadata: Metadata = buildMetadata({
  title: "Galería",
  description:
    "Imágenes del recorrido de campaña por Tehuantepec y sus barrios y agencias.",
  path: "/galeria",
});

export default function GaleriaPage() {
  return (
    <>
      <PageHero
        eyebrow="En el territorio"
        title="Galería de campaña"
        description="Momentos de los recorridos, reuniones y encuentros. (Imágenes de ejemplo; se reemplazan por fotografías reales antes de producción.)"
      />

      <Section tono="paper">
        <Galeria items={galeria} />
      </Section>

      <CTAFinal />
    </>
  );
}
