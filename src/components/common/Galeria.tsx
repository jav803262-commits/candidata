import { ImagenPlaceholder } from "@/components/common/ImagenPlaceholder";
import type { GalleryItem } from "@/types";

/** Rejilla de galería. En esta fase las fotos aún no existen en /public, así que
 * cada celda es un `ImagenPlaceholder` con el `alt` como descripción.
 * Para producción: sustituir el placeholder por
 *   <Image src={item.src} alt={item.alt} width={item.width} height={item.height} />
 * (el aspecto ya está fijado por width/height). */
export function Galeria({ items }: { items: GalleryItem[] }) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {items.map((item) => (
        <li key={item.src}>
          <ImagenPlaceholder
            label={item.alt}
            aspect={`${item.width} / ${item.height}`}
          />
        </li>
      ))}
    </ul>
  );
}
