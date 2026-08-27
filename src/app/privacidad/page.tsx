import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { LegalDisclaimer } from "@/components/common/LegalDisclaimer";

export const metadata: Metadata = buildMetadata({
  title: "Aviso de privacidad",
  description:
    "Aviso de privacidad del sitio de campaña — borrador pendiente de revisión jurídica.",
  path: "/privacidad",
});

export default function PrivacidadPage() {
  return (
    <>
      <PageHero title="Aviso de privacidad" eyebrow="Borrador" />

      <Section tono="paper">
        <div className="mx-auto max-w-2xl">
          <LegalDisclaimer variant="banner" />

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink-soft">
            <p>
              <strong className="text-ink">Estado actual.</strong> En esta fase el
              sitio <strong>no recolecta ni almacena datos personales</strong>. El
              formulario &ldquo;Súmate&rdquo; no envía información a ningún
              servidor: únicamente abre WhatsApp con un mensaje redactado para que
              la persona decida si lo envía.
            </p>

            <div>
              <h2 className="font-display text-lg text-ink">
                Antes de producción
              </h2>
              <p className="mt-2">
                Si el formulario pasa a recolectar datos (nombre, teléfono,
                domicilio, disponibilidad para voluntariado), será necesario un
                aviso de privacidad conforme a la normativa aplicable en México,
                que contemple al menos:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Identidad y domicilio del responsable del tratamiento.</li>
                <li>Finalidades del tratamiento de los datos.</li>
                <li>
                  Tratamiento reforzado para datos sensibles (la afiliación o
                  simpatía política lo es).
                </li>
                <li>Medios para ejercer los derechos ARCO y para revocar el consentimiento.</li>
                <li>Uso de tecnologías de rastreo (no se usan analítica ni cookies en esta fase).</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
