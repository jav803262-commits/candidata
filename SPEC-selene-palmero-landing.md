# Spec de Proyecto — Landing de Campaña: Selene Palmero

> Documento derivado de `ANALISIS.md` (base reutilizable de landings). Aquí solo lo específico
> de esta campaña y las decisiones ya cerradas.

## 1. Objetivo

Landing page de campaña política para **Selene Palmero**, **candidata independiente a la
Presidencia Municipal de Tehuantepec, Oaxaca**. El sitio debe:

- Dar a conocer su imagen y trayectoria.
- Comunicar su propuesta a través del eje **Escuchar → Dialogar → Construir** (lema oficial de la marca).
- Generar contacto/movilización ciudadana (voluntariado, redes, contacto directo).
- Reflejar identidad territorial fuerte: Tehuantepec / Istmo de Oaxaca.

No es un sitio informativo pasivo: es una landing de campaña, orientada a conversión
(súmate, contacta, sigue en redes).

### 1.1 Decisiones cerradas (fase de propuesta)

Esta primera entrega es una **propuesta/demo** para revisión del cliente. Todo el contenido es
placeholder; las definiciones legales y el CMS se posponen.

| Tema | Decisión |
|---|---|
| Cargo | Presidencia Municipal de Tehuantepec |
| Registro | Candidatura **independiente** — sin partido, sin coalición, sin emblemas ni colores partidistas/nacionales |
| Formulario "Súmate" | **Sin backend**: arma un mensaje prellenado y abre WhatsApp (`wa.me`). Número de demo hasta tener el real |
| Contenido (bio, historia, propuesta, galería, eventos) | Archivos estáticos en `src/data/` con placeholders. **CMS ligero → fase 2** |
| Eventos / agenda | Se incluye la sección con eventos de ejemplo |
| Analítica | Ninguna por ahora → sin banner de cookies |
| Aspecto legal (aviso legal, aviso de privacidad, pie de propaganda, veda electoral) | **Placeholders rotulados como borrador**; el sitio no recolecta ni almacena datos personales. Revisión jurídica en fase posterior |
| Dependencias | Sin React Hook Form / Zod (el formulario abre WhatsApp). Sin shadcn/ui: primitivos propios + Radix solo donde haya interacción real (menú móvil) |

---

## 2. Stack tecnológico

Alineado con los proyectos hermanos `la-cuadra` / `control-gastos`:

- **Next.js 16** (App Router, React Compiler) + **React 19** + **TypeScript** + **Tailwind CSS v4**
  (CSS-first: tokens en `src/app/globals.css` con `@import "tailwindcss"` y `@theme inline`, sin `tailwind.config.js`)
- **pnpm** como gestor de paquetes
- **Lucide React** (iconos)
- **next/font/google** (Playfair Display, Inter, Parisienne) + **next/image**
- Primitivos de UI propios en `src/components/ui` (Button, Card, Container, Section, SectionHeader),
  con strings de clases Tailwind directas — **no shadcn/ui, no `clsx`/`cva`/`tailwind-merge`**
- **Radix UI** solo donde haya interacción real: `@radix-ui/react-dialog` para el menú móvil
- Server Components por defecto; `"use client"` solo en el menú móvil y (si se agrega) la galería con lightbox

No agregar dependencias adicionales sin necesidad concreta.

---

## 3. Identidad de marca (extraída del banner oficial)

**Colores** — tokens en `globals.css`:

| Token | Hex | Uso | Contraste |
|---|---|---|---|
| `--color-purple` | `#3B1E70` | Primario: botones, encabezados sobre claro, franjas de header/footer | blanco encima ≈ 12.6:1 (AAA) |
| `--color-purple-deep` | `#281253` | Fondo del footer, texto de máximo contraste | — |
| `--color-violet` | `#8446C6` | Acento vivo: gradientes, hover, enlaces, filos del penacho | sobre blanco ≈ 5.7:1 (AA) |
| `--color-silver` | `#9C9CA9` | **Solo decorativo** (reglas, viñetas, filos metálicos) | sobre blanco ≈ 2.7:1 → nunca texto |
| `--color-silver-light` | `#DCDCE2` | Brillos, bordes suaves | — |
| `--color-lavender` | `#F3EFF8` | Fondo de secciones de lectura | — |
| `--color-ink` | `#241042` | Texto principal sobre fondos claros | sobre blanco ≈ 15:1 (AAA) |

El morado se usa en header, footer, CTAs y acentos, **nunca como fondo de página completa**.

**Tipografía** (vía `next/font/google`, con `variable` mapeada en `@theme inline`)
- Wordmark "SELENE PALMERO": idealmente el **logo en SVG** del banner. Aproximación web: **Cinzel** (capitales romanas grabadas)
- Encabezados (h1–h3): **Playfair Display** — serif de contraste, formalidad institucional, `letter-spacing` amplio
- Cuerpo: **Inter**
- Floritura "Tehuantepec, mi tierra.": **Parisienne** — solo para esa frase

**Elementos gráficos**
- Logo con motivo "penacho/abanico" de rombos geométricos zapotecos (degradado morado→violeta con filos
  plateados) — usar como favicon y como detalle sutil en separadores de sección; sin saturar
- Puente de fierro y Río Tehuantepec (foto del banner, atardecer malva) — recurso territorial recurrente
  en hero y sección de cierre
- Íconos de marca (`lucide-react`): Escuchar → `Ear`, Dialogar → `MessagesSquare`, Construir → `Waypoints`

**Mensaje central** (columna vertebral de la arquitectura de contenido, no solo frase decorativa)
> Escuchar para entender. Dialogar para construir. Construir para transformar.

**Cierre emocional de marca**
> Tehuantepec, mi tierra.

**Redes sociales**: Facebook, Instagram, YouTube — en el banner aparece "/ SelenePalmero".
URLs reales pendientes de confirmar antes de deploy.

---

## 4. Estructura del proyecto

```text
project/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── propuesta/
│   │   ├── galeria/
│   │   ├── eventos/
│   │   └── logo/
│   ├── icons/
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── not-found.tsx
│   │   ├── historia/page.tsx
│   │   ├── propuesta/page.tsx
│   │   ├── galeria/page.tsx
│   │   ├── eventos/page.tsx
│   │   ├── contacto/page.tsx
│   │   ├── aviso-legal/page.tsx     # placeholder rotulado
│   │   └── privacidad/page.tsx      # placeholder rotulado
│   │
│   ├── components/
│   │   ├── ui/            # Button, Card, Container, Section, SectionHeader
│   │   ├── navigation/    # Header, MobileMenu (Radix Dialog), MobileActionBar
│   │   ├── sections/      # Hero, QuienEs, Escuchar, Dialogar, Construir,
│   │   │                  # EventosPreview, GalleryPreview, CTAFinal
│   │   └── common/        # Logo, Penacho (SVG decorativo), SocialLinks, SumateButton, LegalDisclaimer
│   │
│   ├── data/
│   │   ├── persona.ts
│   │   ├── hero.ts
│   │   ├── historia.ts
│   │   ├── propuesta.ts
│   │   ├── galeria.ts
│   │   ├── eventos.ts
│   │   └── contacto.ts
│   │
│   ├── types/
│   │   └── index.ts
│   │
│   └── lib/
│       ├── site.ts          # SITE_URL, SITE_NAME, datos de marca, whatsappUrl()
│       ├── navigation.ts    # ítems de navegación (una sola fuente)
│       ├── seo.ts           # helper de metadata por página
│       └── schema.ts        # JSON-LD (Organization mínimo; Person se pospone)
│
├── next.config.ts           # reactCompiler: true, images
├── postcss.config.mjs       # @tailwindcss/postcss
├── eslint.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

---

## 5. Estructura de la landing (`/`)

```text
Header (logo + nav + redes + CTA "Súmate")
↓
Hero (banner + "Escuchar · Dialogar · Construir" + "Tehuantepec, mi tierra")
↓
Quién es Selene (bio breve + foto)
↓
ESCUCHAR — cercanía con la gente, lo recogido en el territorio
↓
DIALOGAR — forma de construir acuerdos, trayectoria de gestión/diálogo
↓
CONSTRUIR — ejes de propuesta / plan de trabajo (3–5 tarjetas)
↓
Eventos (preview: próximos 3, con link a /eventos)
↓
Galería (preview: 6–8 imágenes, con link a /galeria)
↓
CTA final (Súmate / redes / contacto)
↓
Footer (redes, contacto, aviso legal — placeholder)
```

Barra inferior móvil persistente (`MobileActionBar`): accesos directos a redes + **Súmate**,
respetando `safe-area-inset` (ver §18 de `ANALISIS.md`).

Cada bloque Escuchar/Dialogar/Construir usa su ícono de marca (`Ear`, `MessagesSquare`, `Waypoints`)
para mantener consistencia con el material existente.

---

## 6. Páginas internas

| Ruta | Contenido |
|---|---|
| `/` | Landing completa (resumen de todo) |
| `/historia` | Biografía completa: quién es, cómo surgió su vocación de servicio, trayectoria cronológica |
| `/propuesta` | Ejes de campaña detallados (ampliación de la sección "Construir") |
| `/galeria` | Galería completa de imágenes |
| `/eventos` | Agenda de campaña (eventos de ejemplo): fecha, lugar, descripción |
| `/contacto` | Contacto/voluntariado (abre WhatsApp) + redes + medios directos |
| `/aviso-legal` | Placeholder rotulado — pendiente de revisión jurídica |
| `/privacidad` | Placeholder rotulado — pendiente de revisión jurídica |

No crear rutas adicionales sin necesidad concreta.

---

## 7. Estructura de datos

Todo en `src/data/*.ts` (objetos/arreglos tipados). El CMS ligero que los reemplace llega en fase 2.

### `src/data/persona.ts`
```ts
export const persona = {
  nombre: "Selene Palmero",
  cargo: "Candidata independiente a la Presidencia Municipal de Tehuantepec",
  lema: "Escuchar · Dialogar · Construir",
  bioCorta: "Texto placeholder de presentación breve.",
  fotoPrincipal: "/images/hero/selene-hero.webp",
};
```

### `src/data/hero.ts`
```ts
export const hero = {
  eyebrow: "Tehuantepec, mi tierra",
  title: "Escuchar. Dialogar. Construir.",
  description: "Descripción breve orientada a la propuesta de campaña.",
  primaryCta: { label: "Súmate", href: "/contacto" },
  secondaryCta: { label: "Conoce la propuesta", href: "/propuesta" },
  image: "/images/hero/selene-hero.webp",
};
```

### `src/data/historia.ts`
```ts
export const historia = [
  { id: "hito-1", anio: "20XX", titulo: "Hito de trayectoria", descripcion: "Descripción placeholder." },
  // ...
];
```

### `src/data/propuesta.ts`
```ts
export const propuesta = [
  {
    id: "eje-1",
    eje: "Construir",                 // "Escuchar" | "Dialogar" | "Construir"
    titulo: "Eje de propuesta",
    descripcion: "Descripción placeholder.",
    icono: "Waypoints",               // clave de un mapa explícito de íconos lucide
  },
  // ...
];
```

### `src/data/galeria.ts`
```ts
export const galeria = [
  { src: "/images/galeria/imagen-01.webp", alt: "Descripción placeholder", width: 1200, height: 800 },
  // ...
];
```

### `src/data/eventos.ts`
```ts
export const eventos = [
  {
    id: "evento-1",
    fecha: "2026-01-15",              // ISO; se formatea con Intl en el componente
    titulo: "Recorrido por la colonia (ejemplo)",
    lugar: "Barrio placeholder, Tehuantepec",
    descripcion: "Descripción placeholder del evento.",
  },
  // ...
];
```

### `src/data/contacto.ts`
```ts
export const contacto = {
  whatsappDemo: "5219710000000",     // número de demo, reemplazar por el real
  mensajeSumate: "Hola, quiero sumarme a la campaña de Selene Palmero.",
  redes: {
    facebook: "https://facebook.com/SelenePalmero",   // placeholder
    instagram: "https://instagram.com/SelenePalmero", // placeholder
    youtube: "https://youtube.com/@SelenePalmero",    // placeholder
  },
  zonaTrabajo: "Tehuantepec y sus barrios",
};
```

---

## 8. Tipos TypeScript (`src/types/index.ts`)

```ts
export interface Persona {
  nombre: string;
  cargo: string;
  lema: string;
  bioCorta: string;
  fotoPrincipal: string;
}

export interface RedesSociales {
  facebook?: string;
  instagram?: string;
  youtube?: string;
}

export interface HitoHistoria {
  id: string;
  anio: string;
  titulo: string;
  descripcion: string;
}

export type EjePropuesta = "Escuchar" | "Dialogar" | "Construir";

export interface Propuesta {
  id: string;
  eje: EjePropuesta;
  titulo: string;
  descripcion: string;
  icono: string;                     // clave del mapa de íconos
}

export interface GalleryItem {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface EventoCampania {
  id: string;
  fecha: string;                     // ISO 8601
  titulo: string;
  lugar: string;
  descripcion: string;
}

export interface Contacto {
  whatsappDemo: string;
  mensajeSumate: string;
  redes: RedesSociales;
  zonaTrabajo?: string;
}
```

No usar `any` salvo excepción documentada.

---

## 9. SEO

- `title`, `description`, Open Graph, Twitter/X, canonical, sitemap, robots, favicon (motivo del penacho)
- OG image 1200×630: banner real o versión adaptada del hero
- Datos estructurados: **solo `Organization` mínimo** (nombre de la campaña, logo, redes). El
  `Person` de Schema.org se pospone hasta tener datos reales — publicar placeholders como hechos es peor que omitirlo
- `metadataBase` desde `SITE_URL` (`NEXT_PUBLIC_SITE_URL` en prod)

---

## 10. CTA y conversión

- CTA principal único y consistente: **"Súmate"**. Abre WhatsApp (`wa.me`) con un mensaje prellenado
  desde `contacto.ts` — sin backend, sin formulario que almacene datos
- CTA secundario: **"Conoce la propuesta"** → `/propuesta`
- Evitar saturar con múltiples CTAs distintos por sección
- `MobileActionBar`: barra inferior móvil con redes + Súmate, respetando `safe-area-inset`
- Sin analítica en esta fase (no se puede medir conversión todavía; se instrumenta después)

---

## 11. Aviso legal / transparencia electoral

**Fuera de alcance en esta fase.** Se entregan páginas `/aviso-legal` y `/privacidad` y un pie de
footer con **texto placeholder claramente rotulado como "borrador — pendiente de revisión jurídica"**.

Antes de producción, con asesoría legal, habrá que definir: responsable del sitio y pie de
propaganda (identificación de quién la paga / registro ante la autoridad electoral — para elección
municipal en Oaxaca corresponde al **IEEPCO**, además del INE en lo aplicable), aviso de privacidad
real si el formulario pasa a recolectar datos, y procedimiento para la **veda electoral** (qué se
hace con el sitio durante la veda y el día de la jornada). No inventar ni omitir esta información
en producción.

El sitio en esta fase **no recolecta ni almacena datos personales** (el formulario solo abre WhatsApp),
lo que mantiene la exposición legal al mínimo mientras se define lo anterior.

---

## 12. Accesibilidad y rendimiento

- HTML semántico, `button` para acciones, `a`/`Link` para navegación, `alt` en todas las imágenes
- Contraste: usar los ratios ya verificados en §3. `--color-silver` es **decorativo**, nunca texto
- Mobile-first, `next/image` en todas las fotos con `width`/`height` explícitos (evita CLS);
  `priority` solo en la imagen del hero
- Respetar `prefers-reduced-motion` en cualquier animación
- Fuentes por `next/font` (sin FOUT/CLS). Objetivo: buen LCP/CLS/INP

---

## 13. Contenido — estado actual

**Activo real disponible:** el banner de marca (logo/penacho, paleta ya extraída a §3, lema, foto de
la candidata, fondo del puente y río de Tehuantepec).

**Todo lo demás es placeholder.** Antes de producción se debe reemplazar:

- Bio completa y foto en alta resolución
- Historia/trayectoria real
- Ejes de propuesta reales (contenido de campaña)
- Galería de fotos reales (con derechos para uso electoral)
- Eventos reales de agenda
- Número de WhatsApp y URLs reales de redes
- Aviso legal / aviso de privacidad / pie de propaganda revisados por jurídico
- Logo aislado en SVG (hoy solo existe embebido en el banner)

---

## 14. Checklist inicial

- [ ] Scaffold Next 16 + TS + Tailwind v4 + ESLint (pnpm), React Compiler
- [ ] Instalar `lucide-react` y `@radix-ui/react-dialog`
- [ ] `globals.css`: tokens de color (§3) en `:root` + `@theme inline`
- [ ] Fuentes en `layout.tsx`: Playfair Display, Inter, Parisienne (+ Cinzel opcional)
- [ ] `lib/site.ts` (SITE_URL, SITE_NAME, `whatsappUrl`) y `lib/navigation.ts`
- [ ] Tipos (`types/index.ts`)
- [ ] Archivos `data/` con placeholders (persona, hero, historia, propuesta, galeria, eventos, contacto)
- [ ] Primitivos: Container, Section, Button, Card, SectionHeader
- [ ] Common: Logo, Penacho (SVG), SocialLinks, SumateButton, LegalDisclaimer
- [ ] Header + MobileMenu (Radix Dialog) + MobileActionBar
- [ ] Secciones: Hero, QuienEs, Escuchar, Dialogar, Construir, EventosPreview, GalleryPreview, CTAFinal
- [ ] Footer con placeholder de aviso legal
- [ ] Páginas: /historia /propuesta /galeria /eventos /contacto /aviso-legal /privacidad + not-found
- [ ] Metadata + `seo.ts` + `schema.ts` (Organization mínimo)
- [ ] `sitemap.ts` + `robots.ts`
- [ ] Placeholders de imagen (bloques con gradiente de marca + `blurDataURL`) para que el build pase
- [ ] Revisar accesibilidad y contraste
- [ ] Revisar responsive (mobile-first)
- [ ] `pnpm build`
