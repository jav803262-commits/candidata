import { Section } from "@/components/ui/Section";
import { SumateButton } from "@/components/common/SumateButton";
import { SocialLinks } from "@/components/common/SocialLinks";
import { Button } from "@/components/ui/Button";
import { Penacho } from "@/components/common/Penacho";

export function CTAFinal() {
  return (
    <Section tono="marca" className="relative overflow-hidden" id="sumate">
      <Penacho
        variant="mono-light"
        className="pointer-events-none absolute -right-16 -bottom-20 h-72 w-auto opacity-[0.08]"
      />
      <div className="relative mx-auto max-w-2xl text-center">
        <p className="font-script text-3xl text-silver-light">Tehuantepec, mi tierra.</p>
        <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-white sm:text-4xl">
          Unidos haremos un cambio definitivo
        </h2>
        <p className="mt-4 text-base leading-relaxed text-silver-light sm:text-lg">
          Los cambios no los hace una persona, los hace la comunidad unida. Súmate
          como voluntaria o voluntario, comparte la propuesta y acompáñanos en los
          recorridos.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <SumateButton size="lg" variant="onDark" />
          <Button
            href="/contacto"
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-purple"
          >
            Ver formas de contacto
          </Button>
        </div>

        <div className="mt-10 flex justify-center">
          <SocialLinks tono="onDark" size={22} />
        </div>
      </div>
    </Section>
  );
}
