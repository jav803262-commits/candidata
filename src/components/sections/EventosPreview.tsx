import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { EventoItem } from "@/components/common/EventoItem";
import { eventos } from "@/data/eventos";

export function EventosPreview() {
  const proximos = eventos.slice(0, 3);

  return (
    <Section tono="lavender" id="eventos">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader
          eyebrow="Agenda"
          title="Próximos eventos"
          description="Dónde estaremos escuchando y dialogando. (Fechas de ejemplo.)"
        />
        <Button href="/eventos" variant="ghost" className="shrink-0">
          Ver toda la agenda →
        </Button>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {proximos.map((evento) => (
          <EventoItem key={evento.id} evento={evento} />
        ))}
      </div>
    </Section>
  );
}
