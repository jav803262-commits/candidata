import { MapPin } from "lucide-react";
import { diaMes, fechaLarga } from "@/lib/fecha";
import type { EventoCampania } from "@/types";

/** Fila de un evento de agenda: tarjeta-calendario + detalle.
 * Compartida entre la sección de la landing y la página /eventos. */
export function EventoItem({ evento }: { evento: EventoCampania }) {
  const { dia, mes } = diaMes(evento.fecha);

  return (
    <article className="flex gap-4 rounded-2xl border border-line bg-paper p-5">
      <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-marca text-white">
        <span className="font-display text-2xl leading-none">{dia}</span>
        <span className="text-[10px] font-semibold tracking-[0.15em]">{mes}</span>
      </div>
      <div className="min-w-0">
        <p className="text-xs font-medium capitalize text-violet">
          {fechaLarga(evento.fecha)}
        </p>
        <h3 className="mt-1 font-display text-lg text-ink">{evento.titulo}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-soft">
          <MapPin size={14} className="shrink-0" aria-hidden="true" />
          {evento.lugar}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          {evento.descripcion}
        </p>
      </div>
    </article>
  );
}
