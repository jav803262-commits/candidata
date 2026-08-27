import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Galeria } from "@/components/common/Galeria";
import { galeria } from "@/data/galeria";

export function GalleryPreview() {
  const muestra = galeria.slice(0, 8);

  return (
    <Section tono="paper" id="galeria">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader
          eyebrow="En el territorio"
          title="Galería de campaña"
          description="Momentos del recorrido por Tehuantepec. (Imágenes de ejemplo.)"
        />
        <Button href="/galeria" variant="ghost" className="shrink-0">
          Ver galería completa →
        </Button>
      </div>

      <div className="mt-10">
        <Galeria items={muestra} />
      </div>
    </Section>
  );
}
