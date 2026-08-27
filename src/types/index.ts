export interface Persona {
  nombre: string;
  cargo: string;
  lema: string;
  bioCorta: string;
  fotoPrincipal: string;
}

export interface RedesSociales {
  facebook?: string;
  instagram?: string;
  youtube?: string;
}

export interface HitoHistoria {
  id: string;
  anio: string;
  titulo: string;
  descripcion: string;
}

export type EjePropuesta = "Escuchar" | "Dialogar" | "Construir";

export interface Propuesta {
  id: string;
  eje: EjePropuesta;
  titulo: string;
  descripcion: string;
  /** Clave del mapa `src/lib/iconos.ts`. */
  icono: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface EventoCampania {
  id: string;
  /** ISO 8601 (`YYYY-MM-DD`). Se formatea con `Intl` en el componente. */
  fecha: string;
  titulo: string;
  lugar: string;
  descripcion: string;
}

export interface Contacto {
  /** Número en formato `wa.me` (52 + 1 + 10 dígitos). Tomado del perfil público;
   * confirmar con la campaña que es el canal oficial y que tiene WhatsApp. */
  whatsapp: string;
  /** Teléfono en formato legible para mostrar (no para `wa.me`). */
  telefono?: string;
  email?: string;
  mensajeSumate: string;
  redes: RedesSociales;
  zonaTrabajo?: string;
}
