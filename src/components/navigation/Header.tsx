import Link from "next/link";
import { navigation } from "@/lib/navigation";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/common/Logo";
import { SocialLinks } from "@/components/common/SocialLinks";
import { SumateButton } from "@/components/common/SumateButton";
import { MobileMenu } from "@/components/navigation/MobileMenu";

/** Cabecera fija. Nav de escritorio + redes + CTA "Súmate"; en móvil, el
 * `MobileMenu`. La barra inferior persistente vive en `MobileActionBar`. */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <Logo />

        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-lavender hover:text-purple"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <SocialLinks size={18} />
          <SumateButton />
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}
