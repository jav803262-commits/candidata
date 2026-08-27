import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ImagenPlaceholder } from "@/components/common/ImagenPlaceholder";
import { persona } from "@/data/persona";

export function QuienEs() {
  return (
    <Section tono="paper" id="quien-es">
      <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <ImagenPlaceholder
          label="Retrato de Selene Palmero"
          aspect="1 / 1"
          className="max-w-sm"
        />
        <div>
          <SectionHeader
            eyebrow="Quién es"
            title={persona.nombre}
            description={persona.cargo}
          />
          <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
            {persona.bioCorta}
          </p>
          <div className="mt-8">
            <Button href="/historia" variant="outline">
              Conoce su historia
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
