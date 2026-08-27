/** Titular y frase de apoyo tomados de los eslóganes de campaña que ya circulan
 * en redes (ver `PERFIL-selene-palmero.md`). El resto sigue siendo texto de
 * apoyo por afinar con la campaña. */
export const hero = {
  eyebrow: "Tehuantepec, mi tierra",
  title: "Estamos hartos, pero unidos haremos un cambio definitivo.",
  description:
    "Los cambios no los hace una persona, los hace la comunidad unida. Una candidatura ciudadana e independiente para la Presidencia Municipal de Tehuantepec, con un método claro: escuchar, dialogar y construir.",
  primaryCta: { label: "Súmate", href: "/contacto" },
  secondaryCta: { label: "Conoce la propuesta", href: "/propuesta" },
  image: "/images/hero/selene-hero.webp",
  cierre: "Tehuantepec, mi tierra.",
};

/** Los tres pilares de la marca, tal como aparecen en el banner oficial. */
export const pilares = [
  {
    eje: "Escuchar",
    frase: "Escuchar para entender.",
    icono: "Ear",
    texto:
      "Recorrer los barrios y agencias, sentarnos con vecinas y vecinos, y partir siempre de lo que la gente vive todos los días.",
  },
  {
    eje: "Dialogar",
    frase: "Dialogar para construir.",
    icono: "MessagesSquare",
    texto:
      "Construir acuerdos entre colonias, comercio, campo y autoridades. Ninguna decisión importante sin diálogo previo.",
  },
  {
    eje: "Construir",
    frase: "Construir para transformar.",
    icono: "Waypoints",
    texto:
      "Convertir los acuerdos en obras, servicios y programas concretos, con seguimiento público y rendición de cuentas.",
  },
] as const;
