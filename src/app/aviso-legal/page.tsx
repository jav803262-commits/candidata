import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { LegalDisclaimer } from "@/components/common/LegalDisclaimer";

export const metadata: Metadata = buildMetadata({
  title: "Aviso legal",
  description: "Aviso legal del sitio de campaña — borrador pendiente de revisión jurídica.",
  path: "/aviso-legal",
});

export default function AvisoLegalPage() {
  return (
    <>
      <PageHero title="Aviso legal" eyebrow="Borrador" />

      <Section tono="paper">
        <div className="mx-auto max-w-2xl">
          <LegalDisclaimer variant="banner" />

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink-soft">
            <p>
              <strong className="text-ink">Contenido pendiente.</strong> Esta
              página es un marcador de posición para la fase de propuesta. El
              texto definitivo será redactado y validado por asesoría legal antes
              de la publicación del sitio como propaganda electoral.
            </p>

            <div>
              <h2 className="font-display text-lg text-ink">Debe incluir</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Identificación de la persona física o moral responsable del sitio.</li>
                <li>Mención de quién financia la difusión de la propaganda.</li>
                <li>Registro o folio ante la autoridad electoral competente (IEEPCO / INE, según aplique a la elección municipal).</li>
                <li>Datos de contacto del responsable y domicilio para efectos legales.</li>
                <li>Términos de uso del sitio y aviso de derechos de autor sobre textos e imágenes.</li>
              </ul>
            </div>

            <p>
              Mientras tanto, este sitio funciona únicamente como demostración y
              no recolecta datos personales de las personas visitantes.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
