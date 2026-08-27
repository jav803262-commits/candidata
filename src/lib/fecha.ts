/** Formatea una fecha ISO (`YYYY-MM-DD`) en español. Se fuerza `timeZone: "UTC"`
 * para que una fecha sin hora no se corra un día según la zona del visitante. */
const fmtLargo = new Intl.DateTimeFormat("es-MX", {
  weekday: "long",
  day: "numeric",
  month: "long",
  timeZone: "UTC",
});

const fmtCorto = new Intl.DateTimeFormat("es-MX", {
  day: "2-digit",
  month: "short",
  timeZone: "UTC",
});

export function fechaLarga(iso: string): string {
  return fmtLargo.format(new Date(`${iso}T00:00:00Z`));
}

export function fechaCorta(iso: string): string {
  return fmtCorto.format(new Date(`${iso}T00:00:00Z`)).replace(".", "");
}

/** Día y mes por separado, para la "tarjeta calendario". */
export function diaMes(iso: string): { dia: string; mes: string } {
  const d = new Date(`${iso}T00:00:00Z`);
  return {
    dia: new Intl.DateTimeFormat("es-MX", { day: "2-digit", timeZone: "UTC" }).format(d),
    mes: new Intl.DateTimeFormat("es-MX", { month: "short", timeZone: "UTC" })
      .format(d)
      .replace(".", "")
      .toUpperCase(),
  };
}
