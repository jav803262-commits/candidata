/** Ítems de navegación principal. Una sola fuente para Header, MobileMenu y Footer
 * — así los enlaces no se duplican por componente. */
export const navigation = [
  { label: "Historia", href: "/historia" },
  { label: "Propuesta", href: "/propuesta" },
  { label: "Eventos", href: "/eventos" },
  { label: "Galería", href: "/galeria" },
  { label: "Contacto", href: "/contacto" },
] as const;

/** Enlaces secundarios (footer). */
export const navigationLegal = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Aviso de privacidad", href: "/privacidad" },
] as const;
