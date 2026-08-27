import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Icono } from "@/components/common/Icono";
import { pilares } from "@/data/hero";

/** Los tres ejes de la marca: Escuchar → Dialogar → Construir.
 * Cada uno con su ícono, como en el material oficial. */
export function Pilares() {
  return (
    <Section tono="lavender" id="ejes">
      <SectionHeader
        eyebrow="La forma de gobernar"
        title="Escuchar para entender. Dialogar para construir. Construir para transformar."
        description="No es solo un lema: es el método de trabajo de la campaña y del gobierno municipal que proponemos."
      />

      <ol className="mt-12 grid gap-6 md:grid-cols-3">
        {pilares.map((p, i) => {
          return (
            <li key={p.eje}>
              <Card className="h-full">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple text-white">
                    <Icono nombre={p.icono} size={22} />
                  </span>
                  <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-violet">
                    Paso {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl text-ink">{p.eje}</h3>
                <p className="mt-1 text-sm font-medium text-violet">{p.frase}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {p.texto}
                </p>
              </Card>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
