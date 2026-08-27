import { MessageCircle } from "lucide-react";
import { contacto } from "@/data/contacto";
import { whatsappUrl } from "@/lib/site";
import { IconFacebook, IconInstagram, IconYoutube } from "@/components/common/BrandIcons";

const redes = [
  { nombre: "Facebook", href: contacto.redes.facebook, Icon: IconFacebook },
  { nombre: "Instagram", href: contacto.redes.instagram, Icon: IconInstagram },
  { nombre: "YouTube", href: contacto.redes.youtube, Icon: IconYoutube },
].filter((r) => Boolean(r.href));

/** Barra inferior persistente (solo móvil): redes + "Súmate".
 * Respeta `safe-area-inset-bottom`. Ver §18 de ANALISIS.md. */
export function MobileActionBar() {
  const sumateHref = whatsappUrl(contacto.whatsapp, contacto.mensajeSumate);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 backdrop-blur md:hidden">
      <div className="flex items-center gap-2 px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
        <ul className="flex items-center gap-1">
          {redes.map(({ nombre, href, Icon }) => (
            <li key={nombre}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${nombre} de Selene Palmero`}
                className="inline-flex rounded-lg p-2.5 text-purple/80 hover:bg-lavender"
              >
                <Icon size={20} />
              </a>
            </li>
          ))}
        </ul>
        <a
          href={sumateHref}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-purple px-5 py-3 text-sm font-semibold text-white"
        >
          <MessageCircle size={18} aria-hidden="true" />
          Súmate
        </a>
      </div>
    </div>
  );
}
