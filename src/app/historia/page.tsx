import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { ImagenPlaceholder } from "@/components/common/ImagenPlaceholder";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { persona } from "@/data/persona";
import { historia } from "@/data/historia";

export const metadata: Metadata = buildMetadata({
  title: "Historia",
  description:
    "Trayectoria y vocación de servicio de Selene Palmero, candidata independiente a la Presidencia Municipal de Tehuantepec.",
  path: "/historia",
});

export default function HistoriaPage() {
  return (
    <>
      <PageHero
        eyebrow="Quién es"
        title="La historia de Selene Palmero"
        description="De dónde viene, cómo nació su vocación de servicio y el camino que la trajo hasta esta candidatura ciudadana. (Contenido de ejemplo.)"
      />

      <Section tono="paper">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <ImagenPlaceholder
            label="Selene Palmero en Tehuantepec"
            aspect="3 / 4"
            className="max-w-xs lg:sticky lg:top-28"
          />
          <div>
            <p className="text-lg leading-relaxed text-ink-soft">
              {persona.bioCorta}
            </p>

            <ol className="mt-12 space-y-8 border-l-2 border-line pl-6">
              {historia.map((hito) => (
                <li key={hito.id} className="relative">
                  <span
                    className="absolute -left-[1.72rem] top-1.5 h-3 w-3 rounded-full bg-violet ring-4 ring-lavender"
                    aria-hidden="true"
                  />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet">
                    {hito.anio}
                  </p>
                  <h2 className="mt-1 font-display text-xl text-ink">
                    {hito.titulo}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {hito.descripcion}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <CTAFinal />
    </>
  );
}
