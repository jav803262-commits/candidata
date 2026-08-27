import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PropuestaCard } from "@/components/common/PropuestaCard";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { propuesta } from "@/data/propuesta";
import type { EjePropuesta } from "@/types";

const ejes: EjePropuesta[] = ["Escuchar", "Dialogar", "Construir"];

export const metadata: Metadata = buildMetadata({
  title: "Propuesta",
  description:
    "Ejes del plan de trabajo para el municipio de Tehuantepec, organizados por Escuchar, Dialogar y Construir.",
  path: "/propuesta",
});

export default function PropuestaPage() {
  return (
    <>
      <PageHero
        eyebrow="Plan de trabajo"
        title="Propuesta para Tehuantepec"
        description="Cada eje parte de lo que hemos escuchado en el territorio y se traduce en acciones concretas con seguimiento público. (Contenido de ejemplo.)"
      />

      {ejes.map((eje, i) => {
        const items = propuesta.filter((p) => p.eje === eje);
        if (items.length === 0) return null;
        return (
          <Section key={eje} tono={i % 2 === 0 ? "paper" : "lavender"}>
            <SectionHeader eyebrow={`Eje ${i + 1}`} title={eje} />
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <li key={item.id}>
                  <PropuestaCard item={item} />
                </li>
              ))}
            </ul>
          </Section>
        );
      })}

      <CTAFinal />
    </>
  );
}
