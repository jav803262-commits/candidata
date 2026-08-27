# Landing de campaña — Selene Palmero

Landing page para **Selene Palmero**, candidata independiente a la Presidencia
Municipal de Tehuantepec, Oaxaca.

> **Fase actual: propuesta / demo.** Todo el contenido es placeholder. Ver
> [`SPEC-selene-palmero-landing.md`](./SPEC-selene-palmero-landing.md) para el
> alcance y las decisiones cerradas, y [`ANALISIS.md`](./ANALISIS.md) para la
> arquitectura base reutilizable.

## Stack

Next.js 16 (App Router, React Compiler) · React 19 · TypeScript · Tailwind CSS v4
· lucide-react · Radix Dialog (menú móvil) · pnpm.

## Desarrollo

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # build de producción (Turbopack)
pnpm lint
```

Copia `.env.example` a `.env.local` y ajusta `NEXT_PUBLIC_SITE_URL`.

## Estructura

| Carpeta | Qué contiene |
|---|---|
| `src/data/` | Contenido (placeholder). Editar aquí para cambiar textos, ejes, eventos, galería. Un CMS ligero lo reemplaza en la fase 2. |
| `src/lib/` | `site.ts` (constantes, `whatsappUrl`), `navigation.ts`, `seo.ts`, `schema.ts`, `iconos.ts`, `fecha.ts`. |
| `src/components/ui/` | Primitivos (Button, Card, Container, Section, SectionHeader). |
| `src/components/common/` | Logo, Penacho (SVG), SocialLinks, SumateButton, tarjetas reutilizables. |
| `src/components/navigation/` | Header, MobileMenu, MobileActionBar. |
| `src/components/sections/` | Secciones de la landing. |
| `src/components/layout/` | Footer, PageHero. |

## Pendiente antes de producción

- Contenido real (bio, historia, propuesta, galería con derechos, eventos).
- Número de WhatsApp y URLs de redes reales (`src/data/contacto.ts`).
- Logo aislado en SVG (hoy el wordmark se compone con tipografía).
- Aviso legal, aviso de privacidad y pie de propaganda revisados por jurídico.
- Decidir CMS, analítica y hosting.
