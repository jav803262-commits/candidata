/** URL pública del sitio, usada para sitemap, robots y metadata (OG/canonical).
 * Configúrala en producción con NEXT_PUBLIC_SITE_URL. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

/** Nombre de marca, para texto suelto (wordmark del header, título del sitio). */
export const SITE_NAME = "Selene Palmero";

/** Descripción corta de la propuesta de valor. Compartida entre el meta
 * description global y el párrafo del hero para que no diverjan. */
export const SITE_TAGLINE =
  "Selene Palmero, candidata independiente a la Presidencia Municipal de Tehuantepec. Escuchar, dialogar y construir con la gente de nuestra tierra.";

/** Ámbito territorial de la campaña. */
export const TERRITORIO = "Tehuantepec, Oaxaca";

/** Arma un enlace de WhatsApp con mensaje predefinido. En esta fase el número es
 * de demo (ver `contacto.ts`); se reemplaza por el real antes de producción. */
export function whatsappUrl(numero: string, mensaje: string): string {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
}
