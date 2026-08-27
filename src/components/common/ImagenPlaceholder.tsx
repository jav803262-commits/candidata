import { ImageIcon } from "lucide-react";
import { Penacho } from "@/components/common/Penacho";

/** Marcador de posición para fotografía real todavía no disponible.
 * Bloque con gradiente de marca + marca de agua del penacho. Mantiene el aspecto
 * (evita CLS) y describe qué foto irá ahí. Reemplazar por `next/image` cuando
 * lleguen los activos reales. */
export function ImagenPlaceholder({
  label,
  aspect = "4 / 3",
  className = "",
  rounded = "rounded-2xl",
}: {
  label: string;
  aspect?: string;
  className?: string;
  rounded?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Imagen pendiente: ${label}`}
      style={{ aspectRatio: aspect }}
      className={`bg-marca relative w-full overflow-hidden ${rounded} ${className}`}
    >
      <Penacho
        variant="mono-light"
        className="absolute -right-6 -bottom-8 h-40 w-auto opacity-15"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
        <ImageIcon size={22} className="text-white/60" aria-hidden="true" />
        <span className="text-xs font-medium leading-snug text-white/70">
          {label}
        </span>
        <span className="text-[10px] uppercase tracking-[0.18em] text-white/40">
          Foto pendiente
        </span>
      </div>
    </div>
  );
}
