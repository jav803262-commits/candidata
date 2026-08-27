import Link from "next/link";
import { Penacho } from "@/components/common/Penacho";

/** Lockup de marca: penacho + wordmark "SELENE PALMERO".
 * El wordmark ideal es el logo real en SVG; aquí se compone con tipografía
 * (Cinzel/Playfair) como aproximación para la fase de propuesta. */
export function Logo({
  tono = "light",
  conLema = false,
}: {
  tono?: "light" | "onDark";
  conLema?: boolean;
}) {
  const colorNombre = tono === "onDark" ? "text-white" : "text-purple";
  const colorApellido = tono === "onDark" ? "text-silver-light" : "text-silver";
  const colorLema = tono === "onDark" ? "text-silver-light" : "text-ink-soft";

  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
      aria-label="Selene Palmero — inicio"
    >
      <Penacho
        className="h-10 w-auto shrink-0 transition-transform group-hover:-translate-y-0.5"
        variant={tono === "onDark" ? "mono-light" : "brand"}
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-wordmark text-lg font-semibold tracking-[0.28em] ${colorNombre}`}
        >
          SELENE
        </span>
        <span
          className={`font-wordmark text-sm font-medium tracking-[0.42em] ${colorApellido}`}
        >
          PALMERO
        </span>
        {conLema && (
          <span
            className={`mt-1 text-[10px] uppercase tracking-[0.2em] ${colorLema}`}
          >
            Escuchar · Dialogar · Construir
          </span>
        )}
      </span>
    </Link>
  );
}
