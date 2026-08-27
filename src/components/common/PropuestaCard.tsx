import { Card } from "@/components/ui/Card";
import { Icono } from "@/components/common/Icono";
import type { Propuesta } from "@/types";

/** Tarjeta de un eje de propuesta. Compartida entre la sección de la landing y
 * la página /propuesta. */
export function PropuestaCard({ item }: { item: Propuesta }) {
  return (
    <Card className="flex h-full flex-col">
      <div className="flex items-center justify-between">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-lavender text-purple">
          <Icono nombre={item.icono} size={22} />
        </span>
        <span className="rounded-full border border-line px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
          {item.eje}
        </span>
      </div>
      <h3 className="mt-5 font-display text-xl text-ink">{item.titulo}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
        {item.descripcion}
      </p>
    </Card>
  );
}
