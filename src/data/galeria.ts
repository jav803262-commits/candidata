import type { GalleryItem } from "@/types";

/** CONTENIDO PLACEHOLDER — fotos reales (con derechos para uso electoral)
 * pendientes. Mientras tanto, `GalleryItem.src` puede no existir en /public:
 * el componente `Galeria` cae a un bloque con gradiente de marca. Las medidas
 * fijan el aspecto para evitar CLS. */
export const galeria: GalleryItem[] = [
  { src: "/images/galeria/evento-01.webp", alt: "Recorrido por un barrio de Tehuantepec", width: 1200, height: 900 },
  { src: "/images/galeria/evento-02.webp", alt: "Reunión con vecinas y vecinos", width: 1200, height: 900 },
  { src: "/images/galeria/evento-03.webp", alt: "Visita al mercado municipal", width: 1200, height: 900 },
  { src: "/images/galeria/evento-04.webp", alt: "Encuentro con mujeres artesanas", width: 1200, height: 900 },
  { src: "/images/galeria/evento-05.webp", alt: "Caminata por el puente de Tehuantepec", width: 1200, height: 900 },
  { src: "/images/galeria/evento-06.webp", alt: "Diálogo con jóvenes de la comunidad", width: 1200, height: 900 },
  { src: "/images/galeria/evento-07.webp", alt: "Visita a una agencia municipal", width: 1200, height: 900 },
  { src: "/images/galeria/evento-08.webp", alt: "Asamblea ciudadana", width: 1200, height: 900 },
];
