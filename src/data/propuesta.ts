import type { Propuesta } from "@/types";

/** Mayormente PLACEHOLDER — ejes de campaña reales pendientes. El eje de
 * "movilidad y mototaxismo" sí parte de una gestión real documentada en el perfil
 * (reunión con la Subsecretaría de Movilidad por el registro legal); el resto son
 * ejemplos para mostrar la estructura de la página. */
export const propuesta: Propuesta[] = [
  {
    id: "agua-servicios",
    eje: "Construir",
    titulo: "Agua y servicios básicos",
    descripcion:
      "Plan de rehabilitación de la red de agua potable y drenaje por etapas, con prioridad en las colonias con mayor rezago y calendario público de obra.",
    icono: "Sprout",
  },
  {
    id: "movilidad-mototaxis",
    eje: "Dialogar",
    titulo: "Movilidad y mototaxismo",
    descripcion:
      "Continuar el diálogo con los grupos de mototaxis y las autoridades de movilidad para avanzar en el registro legal, dar certeza a quienes viven de este trabajo y ordenar el transporte en el municipio.",
    icono: "CarTaxiFront",
  },
  {
    id: "seguridad",
    eje: "Dialogar",
    titulo: "Seguridad con la comunidad",
    descripcion:
      "Mesas de seguridad por zona, coordinación real entre policía municipal y vecinos, alumbrado y recuperación de espacios públicos.",
    icono: "ShieldCheck",
  },
  {
    id: "economia-local",
    eje: "Construir",
    titulo: "Economía local y mercados",
    descripcion:
      "Apoyo al comercio del centro y los mercados, impulso a las artesanas y al campo del Istmo, y trámites municipales simples para abrir un negocio.",
    icono: "Building2",
  },
  {
    id: "transparencia",
    eje: "Escuchar",
    titulo: "Gobierno abierto y honesto",
    descripcion:
      "Presupuesto municipal publicado y explicado, contrataciones abiertas y un portal donde cualquier persona pueda dar seguimiento a cada obra.",
    icono: "Lightbulb",
  },
  {
    id: "mujeres-juventud",
    eje: "Dialogar",
    titulo: "Mujeres y juventud",
    descripcion:
      "Instancia municipal de las mujeres con presupuesto propio, atención a violencia de género y programas de formación y empleo para jóvenes.",
    icono: "HeartHandshake",
  },
];
