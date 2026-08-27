import type { Metadata } from "next";
import { MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SocialLinks } from "@/components/common/SocialLinks";
import { SumateForm } from "@/components/sections/SumateForm";
import { contacto } from "@/data/contacto";
import { whatsappUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contacto",
  description:
    "Súmate como voluntaria o voluntario a la campaña de Selene Palmero, o contáctanos por WhatsApp y redes sociales.",
  path: "/contacto",
});

export default function ContactoPage() {
  const waDirecto = whatsappUrl(
    contacto.whatsapp,
    "Hola, quiero información sobre la campaña de Selene Palmero.",
  );

  return (
    <>
      <PageHero
        eyebrow="Súmate"
        title="Contacto y voluntariado"
        description="Déjanos tus datos y te contactamos, o escríbenos directo por WhatsApp. Cada persona que se suma hace la diferencia."
      />

      <Section tono="paper">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeader
              title="Quiero sumarme"
              description="Completa el formulario y se abrirá WhatsApp con tu mensaje listo para enviar."
            />
            <div className="mt-8">
              <SumateForm />
            </div>
          </div>

          <aside className="flex flex-col gap-8">
            <div>
              <h2 className="font-display text-lg text-ink">Contacto directo</h2>
              <a
                href={waDirecto}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-full border-2 border-purple px-5 py-2.5 text-sm font-semibold text-purple transition-colors hover:bg-purple hover:text-white"
              >
                <MessageCircle size={18} aria-hidden="true" />
                WhatsApp de campaña
              </a>
              {contacto.telefono && (
                <p className="mt-3 flex items-center gap-2 text-sm text-ink-soft">
                  <Phone size={16} aria-hidden="true" />
                  <a
                    href={`tel:+52${contacto.telefono.replace(/\s/g, "")}`}
                    className="hover:text-purple"
                  >
                    {contacto.telefono}
                  </a>
                </p>
              )}
              {contacto.email && (
                <p className="mt-2 flex items-center gap-2 text-sm text-ink-soft">
                  <Mail size={16} aria-hidden="true" />
                  <a
                    href={`mailto:${contacto.email}`}
                    className="break-all hover:text-purple"
                  >
                    {contacto.email}
                  </a>
                </p>
              )}
              <p className="mt-3 text-xs text-ink-soft">
                Datos tomados del perfil público de Selene Palmero; pendientes de
                confirmar como canales oficiales de campaña.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg text-ink">Redes sociales</h2>
              <div className="mt-3">
                <SocialLinks size={22} />
              </div>
            </div>

            {contacto.zonaTrabajo && (
              <div>
                <h2 className="font-display text-lg text-ink">Zona de trabajo</h2>
                <p className="mt-3 flex items-center gap-2 text-sm text-ink-soft">
                  <MapPin size={16} aria-hidden="true" />
                  {contacto.zonaTrabajo}
                </p>
              </div>
            )}
          </aside>
        </div>
      </Section>
    </>
  );
}
