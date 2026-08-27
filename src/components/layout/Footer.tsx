import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/common/Logo";
import { SocialLinks } from "@/components/common/SocialLinks";
import { LegalDisclaimer } from "@/components/common/LegalDisclaimer";
import { navigation, navigationLegal } from "@/lib/navigation";
import { persona } from "@/data/persona";
import { contacto } from "@/data/contacto";

export function Footer() {
  return (
    <footer className="bg-marca text-white">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo tono="onDark" conLema />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-silver-light">
              {persona.cargo}. Zona de trabajo: {contacto.zonaTrabajo}.
            </p>
            <p className="mt-6 font-script text-3xl text-white">
              Tehuantepec, mi tierra.
            </p>
          </div>

          <nav aria-label="Navegación del pie">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-silver-light">
              Secciones
            </h2>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/85 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-silver-light">
              Sigue la campaña
            </h2>
            <div className="mt-4">
              <SocialLinks tono="onDark" />
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-sm">
              {navigationLegal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="regla-plata my-8 opacity-40" />

        <div className="flex flex-col gap-4">
          <LegalDisclaimer variant="footer" />
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Campaña {persona.nombre}. Sitio de
            demostración — contenido y datos legales en revisión.
          </p>
        </div>
      </Container>
    </footer>
  );
}
