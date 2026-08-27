"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { navigation } from "@/lib/navigation";
import { SocialLinks } from "@/components/common/SocialLinks";
import { SumateButton } from "@/components/common/SumateButton";
import { Logo } from "@/components/common/Logo";

/** Menú de navegación para móvil (panel lateral con Radix Dialog).
 * Único componente cliente de la navegación: necesita estado de apertura y
 * cerrar al cambiar de ruta. */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-purple hover:bg-lavender md:hidden"
          aria-label="Abrir menú"
        >
          <Menu size={24} aria-hidden="true" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-purple-deep/40 backdrop-blur-sm" />
        <Dialog.Content
          className="fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col bg-paper shadow-xl focus:outline-none"
          aria-describedby={undefined}
        >
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <Dialog.Title className="sr-only">Menú</Dialog.Title>
            <Logo />
            <Dialog.Close
              className="rounded-lg p-2 text-purple hover:bg-lavender"
              aria-label="Cerrar menú"
            >
              <X size={22} aria-hidden="true" />
            </Dialog.Close>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 py-6">
            <ul className="flex flex-col gap-1">
              {navigation.map((item) => {
                const activo = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={activo ? "page" : undefined}
                      className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                        activo
                          ? "bg-lavender text-purple"
                          : "text-ink hover:bg-lavender"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex flex-col gap-4 border-t border-line px-5 py-5">
            <SumateButton size="lg" />
            <SocialLinks />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
