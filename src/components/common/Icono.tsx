import { createElement } from "react";
import { getIcono } from "@/lib/iconos";

/** Renderiza un ícono lucide a partir de su clave (`data/*` guarda strings).
 * Componente estático de módulo + `createElement`: así no se declara un
 * componente durante el render (regla `react-hooks/static-components`).
 * Los íconos aquí son decorativos (`aria-hidden`). */
export function Icono({
  nombre,
  size = 22,
  strokeWidth = 1.75,
  className,
}: {
  nombre: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  return createElement(getIcono(nombre), {
    size,
    strokeWidth,
    className,
    "aria-hidden": true,
  });
}
