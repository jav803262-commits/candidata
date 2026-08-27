import { Container } from "@/components/ui/Container";
import { Penacho } from "@/components/common/Penacho";

/** Encabezado de página interna: franja morada con título serif. */
export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-marca relative overflow-hidden text-white">
      <Penacho
        variant="mono-light"
        className="pointer-events-none absolute -top-8 -right-12 h-52 w-auto opacity-[0.08]"
      />
      <Container className="relative py-14 sm:py-16 lg:py-20">
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-silver-light">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl font-display text-4xl leading-tight tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-silver-light sm:text-lg">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
