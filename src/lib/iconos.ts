import { Ear, MessagesSquare, Waypoints, HeartHandshake, Users, Sprout, Building2, ShieldCheck, Lightbulb, CarTaxiFront } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/** Mapa explícito de claves → íconos lucide. Los datos (`propuesta.ts`) guardan
 * una string; nunca importamos íconos por nombre dinámico (rompería el
 * tree-shaking). Añadir aquí cualquier ícono nuevo que se use en `data/`. */
export const iconos: Record<string, LucideIcon> = {
  Ear,
  MessagesSquare,
  Waypoints,
  HeartHandshake,
  Users,
  Sprout,
  Building2,
  ShieldCheck,
  Lightbulb,
  CarTaxiFront,
};

/** Devuelve el ícono para una clave, con `Waypoints` como respaldo. */
export function getIcono(clave: string): LucideIcon {
  return iconos[clave] ?? Waypoints;
}
