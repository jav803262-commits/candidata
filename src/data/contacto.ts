import type { Contacto } from "@/types";

/** Datos de contacto tomados del perfil público de Selene Palmero (Facebook),
 * ver `PERFIL-selene-palmero.md`. PENDIENTE de confirmar con la campaña:
 * - que `whatsapp` corresponde a una línea con WhatsApp y es el canal oficial;
 * - si se usará el correo personal o uno dedicado de campaña;
 * - handles reales de Instagram / YouTube (el perfil solo aporta Facebook).
 * En esta fase el sitio NO recolecta ni almacena datos: "Súmate" solo abre WhatsApp. */
export const contacto: Contacto = {
  // 971 727 0777 en formato wa.me (52 + 1 + 10 dígitos).
  whatsapp: "5219717270777",
  telefono: "971 727 0777",
  email: "selenepalmerocortes89@gmail.com",
  mensajeSumate:
    "Hola, quiero sumarme a la campaña de Selene Palmero como voluntaria/o. Mi nombre es ",
  redes: {
    facebook: "https://www.facebook.com/profile.php?id=100076145501870",
    // Instagram / YouTube: sin handle confirmado todavía — el perfil solo aporta
    // Facebook. Añadirlos aquí cuando la campaña los proporcione (SocialLinks, la
    // barra móvil y el schema ya ocultan las redes sin URL).
  },
  zonaTrabajo: "Tehuantepec y sus barrios y agencias",
};
