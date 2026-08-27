import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { EventoItem } from "@/components/common/EventoItem";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { eventos } from "@/data/eventos";

export const metadata: Metadata = buildMetadata({
  title: "Eventos",
  description:
    "Agenda de recorridos, mesas de diálogo y asambleas de la campaña de Selene Palmero en Tehuantepec.",
  path: "/eventos",
});

export default function EventosPage() {
  // Orden cronológico ascendente por fecha ISO.
  const ordenados = [...eventos].sort((a, b) => a.fecha.localeCompare(b.fecha));

  return (
    <>
      <PageHero
        eyebrow="Agenda"
        title="Eventos de campaña"
        description="Dónde estaremos escuchando y dialogando con la gente de Tehuantepec. (Fechas y lugares de ejemplo.)"
      />

      <Section tono="paper">
        <div className="mx-auto grid max-w-3xl gap-4">
          {ordenados.map((evento) => (
            <EventoItem key={evento.id} evento={evento} />
          ))}
        </div>
      </Section>

      <CTAFinal />
    </>
  );
}
