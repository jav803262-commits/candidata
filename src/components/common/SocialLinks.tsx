import { contacto } from "@/data/contacto";
import { IconFacebook, IconInstagram, IconYoutube } from "@/components/common/BrandIcons";

const redes = [
  { nombre: "Facebook", href: contacto.redes.facebook, Icon: IconFacebook },
  { nombre: "Instagram", href: contacto.redes.instagram, Icon: IconInstagram },
  { nombre: "YouTube", href: contacto.redes.youtube, Icon: IconYoutube },
].filter((r) => Boolean(r.href));

/** Iconos de redes sociales. `tono` adapta el color al fondo. */
export function SocialLinks({
  tono = "light",
  size = 20,
}: {
  tono?: "light" | "onDark";
  size?: number;
}) {
  const cls =
    tono === "onDark"
      ? "text-white/80 hover:text-white"
      : "text-purple/70 hover:text-purple";

  return (
    <ul className="flex items-center gap-4">
      {redes.map(({ nombre, href, Icon }) => (
        <li key={nombre}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${nombre} de Selene Palmero`}
            className={`inline-flex rounded-full p-1 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet ${cls}`}
          >
            <Icon size={size} />
          </a>
        </li>
      ))}
    </ul>
  );
}
