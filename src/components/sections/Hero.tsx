import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SumateButton } from "@/components/common/SumateButton";
import { Penacho } from "@/components/common/Penacho";
import { ImagenPlaceholder } from "@/components/common/ImagenPlaceholder";
import { Icono } from "@/components/common/Icono";
import { hero, pilares } from "@/data/hero";

export function Hero() {
  return (
    <section className="bg-marca relative overflow-hidden text-white">
      <Penacho
        variant="mono-light"
        className="pointer-events-none absolute -top-10 -left-16 h-64 w-auto opacity-[0.08]"
      />

      <Container className="relative py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="font-script text-2xl text-silver-light sm:text-3xl">
              {hero.eyebrow}
            </p>
            <h1 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-silver-light sm:text-lg">
              {hero.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <SumateButton size="lg" variant="onDark" />
              <Button href={hero.secondaryCta.href} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>

          <div className="relative">
            <ImagenPlaceholder
              label="Selene Palmero — foto principal de campaña"
              aspect="4 / 5"
              className="mx-auto max-w-sm shadow-2xl ring-1 ring-white/15"
            />
          </div>
        </div>

        <div className="regla-plata mt-14 opacity-30" />

        <ul className="mt-10 grid gap-6 sm:grid-cols-3">
          {pilares.map((p) => {
            return (
              <li key={p.eje} className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10">
                  <Icono nombre={p.icono} size={20} />
                </span>
                <span>
                  <span className="block font-display text-lg leading-none">
                    {p.eje}
                  </span>
                  <span className="text-sm text-silver-light">
                    {p.frase.replace(`${p.eje} `, "")}
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
