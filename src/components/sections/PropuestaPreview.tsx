import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { PropuestaCard } from "@/components/common/PropuestaCard";
import { propuesta } from "@/data/propuesta";

/** "Construir" en concreto: los ejes del plan de trabajo. Muestra los primeros
 * cuatro y enlaza a /propuesta para el detalle. */
export function PropuestaPreview() {
  const destacados = propuesta.slice(0, 4);

  return (
    <Section tono="paper" id="propuesta">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader
          eyebrow="Construir para transformar"
          title="Ejes del plan de trabajo"
          description="Propuestas concretas para el municipio, con metas claras y seguimiento público. (Contenido de ejemplo.)"
        />
        <Button href="/propuesta" variant="ghost" className="shrink-0">
          Ver propuesta completa →
        </Button>
      </div>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {destacados.map((item) => (
          <li key={item.id}>
            <PropuestaCard item={item} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
