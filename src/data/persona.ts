import type { Persona } from "@/types";

/** Bio construida a partir del perfil público de Selene Palmero
 * (ver `PERFIL-selene-palmero.md`). El cargo ("candidata independiente") es la
 * definición de campaña acordada con el cliente; el perfil no lo confirma de
 * forma independiente — revisar antes de producción. */
export const persona: Persona = {
  nombre: "Selene Palmero",
  cargo: "Candidata independiente a la Presidencia Municipal de Tehuantepec",
  lema: "Escuchar · Dialogar · Construir",
  bioCorta:
    "Tehuana de nacimiento y sindicalista por convicción. Como presidenta de RENACE Tehuantepec A.C. he acompañado a organizaciones de trabajadores y a las familias del Istmo en la defensa de sus derechos. Mi compromiso es una presidencia municipal cercana, honesta y que construya con la comunidad.",
  fotoPrincipal: "/images/hero/selene-hero.webp",
};
