Claro. Te dejo un **documento Markdown base**, pensado como especificación técnica para iniciar proyectos de landing pages con **Next.js + TypeScript + Tailwind**, manteniendo una arquitectura reutilizable, escalable y sin complejidad innecesaria.

# Base de Proyecto — Landing Page Profesional

## 1. Objetivo

Crear una plantilla de landing page profesional, rápida, responsive, mobile-first, optimizada para SEO y preparada para reutilizarse en diferentes tipos de negocios.

La arquitectura debe priorizar:

* Código limpio.
* Componentes reutilizables.
* Separación entre contenido y presentación.
* Buen rendimiento.
* SEO.
* Accesibilidad.
* Mantenibilidad.
* Escalabilidad sin sobreingeniería.
* Facilidad para adaptar la plantilla a distintos negocios.

La aplicación estará diseñada principalmente para pequeños y medianos negocios que necesiten una presencia web profesional y orientada a conversión.

---

# 2. Stack tecnológico

## Tecnologías principales

* Next.js
* TypeScript
* Tailwind CSS

## Tecnologías complementarias

* shadcn/ui
* Lucide React
* Next/Image

## Tecnologías opcionales

Utilizarlas únicamente cuando exista una necesidad real:

* Zod
* React Hook Form
* Motion

No incorporar librerías adicionales sin una razón técnica concreta.

---

# 3. Principios de arquitectura

La aplicación debe seguir estos principios:

### 3.1 Server Components por defecto

Todos los componentes deberán ser Server Components salvo que necesiten:

* Estado.
* Eventos del navegador.
* Hooks de React.
* APIs específicas del cliente.
* Interactividad compleja.

Utilizar `"use client"` únicamente cuando sea necesario.

---

### 3.2 Separación de responsabilidades

Separar claramente:

```text
Contenido
↓
Data

Presentación
↓
Components

Lógica reutilizable
↓
Lib

Tipos
↓
Types

Configuración
↓
Config
```

Un componente visual no debería contener grandes cantidades de información específica del negocio.

---

### 3.3 Arquitectura orientada a datos

El contenido de la empresa debe estar separado de la interfaz.

Ejemplo:

```text
src/data/business.ts
src/data/hero.ts
src/data/services.ts
src/data/testimonials.ts
src/data/faq.ts
src/data/gallery.ts
src/data/contact.ts
```

Los componentes deberán consumir esta información.

---

# 4. Estructura del proyecto

Utilizar inicialmente la siguiente estructura:

```text
project/
│
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── services/
│   │   ├── gallery/
│   │   └── logo/
│   │
│   ├── icons/
│   └── favicon.ico
│
├── src/
│   │
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   │
│   │   ├── nosotros/
│   │   │   └── page.tsx
│   │   │
│   │   ├── servicios/
│   │   │   └── page.tsx
│   │   │
│   │   ├── galeria/
│   │   │   └── page.tsx
│   │   │
│   │   └── contacto/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── sections/
│   │   └── common/
│   │
│   ├── data/
│   │   ├── business.ts
│   │   ├── hero.ts
│   │   ├── services.ts
│   │   ├── testimonials.ts
│   │   ├── faq.ts
│   │   ├── gallery.ts
│   │   └── contact.ts
│   │
│   ├── types/
│   │   └── index.ts
│   │
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── seo.ts
│   │   ├── schema.ts
│   │   └── whatsapp.ts
│   │
│   └── config/
│       ├── site.ts
│       └── navigation.ts
│
├── components.json
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

# 5. Estructura de la landing page

La página principal deberá utilizar una estructura orientada a conversión:

```text
Header
↓
Hero
↓
Prueba social / indicadores
↓
Servicios
↓
Nosotros
↓
Beneficios
↓
Galería
↓
Testimonios
↓
FAQ
↓
CTA
↓
Contacto / Mapa
↓
Footer
```

No todas las landing pages deberán tener todas las secciones.

Cada sección debe existir únicamente si aporta valor al usuario o contribuye a la conversión.

---

# 6. Componentes

## 6.1 UI

Componentes visuales reutilizables:

```text
components/ui/
├── Button.tsx
├── Card.tsx
├── Badge.tsx
├── Container.tsx
├── Input.tsx
├── Textarea.tsx
└── ...
```

Estos componentes deberán ser lo más genéricos posible.

---

## 6.2 Layout

Componentes estructurales:

```text
components/layout/
├── Section.tsx
└── Container.tsx
```

Ejemplo conceptual:

```tsx
<Section>
  <Container>
    ...
  </Container>
</Section>
```

---

## 6.3 Navegación

```text
components/navigation/
├── Header.tsx
├── Navbar.tsx
└── MobileMenu.tsx
```

El menú móvil deberá utilizar un componente interactivo únicamente donde sea necesario.

---

## 6.4 Secciones

```text
components/sections/
├── Hero.tsx
├── Services.tsx
├── About.tsx
├── Benefits.tsx
├── Testimonials.tsx
├── GalleryPreview.tsx
├── FAQ.tsx
├── CTA.tsx
└── Contact.tsx
```

Cada sección debe representar una responsabilidad específica.

Evitar componentes gigantes que agrupen múltiples secciones.

---

## 6.5 Componentes comunes

```text
components/common/
├── Logo.tsx
├── WhatsAppButton.tsx
├── SectionHeader.tsx
└── SocialLinks.tsx
```

---

# 7. Sistema de datos

## Business

`src/data/business.ts`

Debe contener la información principal del negocio.

Ejemplo:

```ts
export const business = {
  name: "Nombre del negocio",
  phone: "9510000000",
  whatsapp: "9510000000",
  email: "contacto@ejemplo.com",
  address: "Oaxaca, México",
  googleMapsUrl: "",
  mapEmbedUrl: "",
  serviceArea: "Oaxaca y alrededores",
};
```

---

## Hero

`src/data/hero.ts`

Debe contener:

* Título.
* Subtítulo.
* Descripción.
* CTA principal.
* CTA secundario.
* Imagen principal.

Ejemplo:

```ts
export const hero = {
  eyebrow: "Una mejor experiencia",
  title: "Título principal de la landing",
  description: "Descripción breve y orientada al beneficio.",
  primaryCta: {
    label: "Contactar por WhatsApp",
    href: "#contacto",
  },
  secondaryCta: {
    label: "Ver servicios",
    href: "#servicios",
  },
  image: "/images/hero/hero.webp",
};
```

---

# 8. Servicios

`src/data/services.ts`

Utilizar un arreglo de objetos.

```ts
export const services = [
  {
    title: "Servicio 1",
    description: "Descripción del servicio.",
    icon: "icon-name",
  },
  {
    title: "Servicio 2",
    description: "Descripción del servicio.",
    icon: "icon-name",
  },
];
```

Los componentes deben recorrer esta estructura mediante `.map()`.

No duplicar manualmente el mismo marcado HTML para cada servicio.

---

# 9. Testimonios

`src/data/testimonials.ts`

```ts
export const testimonials = [
  {
    name: "Cliente",
    comment: "Excelente servicio.",
    rating: 5,
  },
];
```

El componente visual debe consumir esta información.

---

# 10. FAQ

`src/data/faq.ts`

```ts
export const faq = [
  {
    question: "¿Cuál es el horario?",
    answer: "Nuestro horario es...",
  },
];
```

Para la interfaz utilizar un Accordion.

shadcn/ui puede utilizarse para este componente.

---

# 11. Galería

`src/data/gallery.ts`

```ts
export const gallery = [
  {
    src: "/images/gallery/image-01.webp",
    alt: "Descripción de la imagen",
  },
  {
    src: "/images/gallery/image-02.webp",
    alt: "Descripción de la imagen",
  },
];
```

Las imágenes deberán:

* Tener texto alternativo.
* Utilizar formatos optimizados.
* Tener dimensiones adecuadas.
* Evitar cargas innecesarias.

---

# 12. Tipos TypeScript

Centralizar los tipos principales:

`src/types/index.ts`

Ejemplo:

```ts
export interface Business {
  name: string;
  phone: string;
  whatsapp: string;
  email?: string;
  address: string;
  googleMapsUrl?: string;
  mapEmbedUrl?: string;
  serviceArea?: string;
}

export interface Service {
  title: string;
  description: string;
  image?: string;
  icon?: string;
}

export interface Testimonial {
  name: string;
  comment: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
}
```

No utilizar `any` salvo que exista una razón excepcional y documentada.

---

# 13. Utilidades

## WhatsApp

Crear:

```text
src/lib/whatsapp.ts
```

Ejemplo:

```ts
export function createWhatsAppLink(
  phone: string,
  message: string
) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
```

El enlace deberá poder reutilizarse desde:

* Hero.
* CTA.
* Servicios.
* Botón flotante.
* Footer.
* Contacto.

---

# 14. SEO

Crear:

```text
src/lib/seo.ts
src/lib/schema.ts
```

La aplicación debe contemplar:

* `title`
* `description`
* Open Graph
* Twitter/X metadata
* Canonical
* Sitemap
* Robots
* Favicon

Para negocios locales, implementar datos estructurados cuando corresponda:

* `LocalBusiness`
* `Organization`
* `Service`
* `FAQPage`

No generar datos estructurados con información falsa o inventada.

---

# 15. Imágenes

Utilizar siempre `next/image` cuando sea apropiado.

Ejemplo:

```tsx
<Image
  src="/images/hero/hero.webp"
  alt="Descripción de la imagen"
  width={1200}
  height={800}
  priority
/>
```

La imagen principal del Hero puede utilizar carga prioritaria cuando sea realmente necesaria para LCP.

No utilizar `priority` indiscriminadamente.

Optimizar las imágenes antes de incorporarlas al proyecto.

Preferir:

```text
AVIF
WebP
```

frente a imágenes pesadas sin optimización.

---

# 16. Diseño Mobile First

La interfaz deberá diseñarse primero para dispositivos móviles.

Orden:

```text
Mobile
↓
Tablet
↓
Desktop
```

Usar las utilidades responsive de Tailwind:

```text
sm:
md:
lg:
xl:
```

Evitar diseñar primero para desktop y después intentar adaptar el resultado.

---

# 17. CTA y conversión

La landing deberá tener llamados a la acción claros.

Ejemplos:

```text
Contactar
Cotizar
Reservar
Ver servicios
Enviar WhatsApp
Llamar
```

No saturar la interfaz con demasiados CTA diferentes.

Debe existir un CTA principal claramente identificado.

---

# 18. CTA móvil persistente

Cuando el negocio dependa de contacto directo, incluir una barra inferior móvil:

```text
┌───────────────────────────────┐
│ WhatsApp            Llamar    │
└───────────────────────────────┘
```

Debe:

* Ser fácilmente accesible.
* No bloquear contenido importante.
* Respetar `safe-area-inset`.
* Tener buena accesibilidad.
* Ser visible únicamente cuando aporte valor.

---

# 19. Accesibilidad

La aplicación debe seguir buenas prácticas básicas de accesibilidad.

Considerar:

* HTML semántico.
* `button` para acciones.
* `a` para navegación.
* `alt` en imágenes relevantes.
* Contraste adecuado.
* Estados `focus`.
* Navegación mediante teclado.
* `aria-label` cuando sea necesario.
* Tamaños táctiles adecuados.
* Formularios correctamente etiquetados.

No utilizar elementos no semánticos como botones.

Incorrecto:

```tsx
<div onClick={...}>
  Contactar
</div>
```

Preferir:

```tsx
<button onClick={...}>
  Contactar
</button>
```

---

# 20. Formularios

No implementar una librería de formularios si el formulario es extremadamente sencillo.

Para formularios más completos:

```text
React Hook Form
+
Zod
```

Arquitectura recomendada:

```text
React Hook Form
↓
Zod
↓
Validación
↓
Action / API
```

Validar siempre los datos del lado del servidor cuando exista procesamiento de información.

---

# 21. Client Components

Utilizar `"use client"` únicamente en componentes que realmente requieran:

* `useState`
* `useEffect`
* Event handlers
* Browser APIs
* Interacciones complejas

Ejemplos:

```text
MobileMenu
Accordion interactivo
Galería con lightbox
Formulario interactivo
Slider
```

Evitar convertir toda la aplicación en Client Components.

---

# 22. Animaciones

Las animaciones deben ser sutiles y tener una finalidad.

Opcionalmente utilizar:

```text
Motion
```

No animar todos los elementos de la página.

Priorizar:

* Microinteracciones.
* Transiciones.
* Aparición de elementos.
* Feedback visual.

La animación nunca debe perjudicar:

* Rendimiento.
* Accesibilidad.
* Legibilidad.
* Conversión.

Respetar `prefers-reduced-motion`.

---

# 23. shadcn/ui

Utilizar shadcn/ui como base para componentes que realmente aporten valor.

Componentes recomendados:

```text
Button
Card
Sheet
Accordion
Input
Textarea
```

No incorporar todos los componentes de la biblioteca por defecto.

Agregar componentes únicamente cuando sean necesarios.

---

# 24. Iconos

Utilizar:

```text
Lucide React
```

Evitar mezclar múltiples bibliotecas de iconos.

Mantener una sola familia visual.

---

# 25. Configuración del sitio

Crear:

```text
src/config/site.ts
```

Aquí puede concentrarse la configuración global:

```ts
export const siteConfig = {
  name: "Nombre del sitio",
  description: "Descripción del sitio",
  url: "https://example.com",
  locale: "es_MX",
};
```

---

# 26. Navegación

Crear:

```text
src/config/navigation.ts
```

Ejemplo:

```ts
export const navigation = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Servicios",
    href: "/servicios",
  },
  {
    label: "Nosotros",
    href: "/nosotros",
  },
  {
    label: "Galería",
    href: "/galeria",
  },
  {
    label: "Contacto",
    href: "/contacto",
  },
];
```

Esto evita colocar enlaces directamente en varios componentes.

---

# 27. Reglas de código

## Mantener componentes pequeños

Evitar:

```text
Hero.tsx
1000 líneas
```

Preferir componentes específicos.

---

## Evitar duplicación

Aplicar DRY:

> Don't Repeat Yourself

Si una estructura se repite varias veces, estudiar si debe convertirse en un componente reutilizable.

---

## Nombres descriptivos

Preferir:

```text
GalleryPreview
SectionHeader
WhatsAppButton
MobileMenu
Testimonials
```

Evitar:

```text
Box
Thing
Component1
Section2
```

---

# 28. Rendimiento

Prioridades:

1. Reducir JavaScript innecesario.
2. Utilizar Server Components.
3. Optimizar imágenes.
4. Evitar librerías innecesarias.
5. Reducir componentes Client.
6. Mantener CSS razonablemente simple.
7. Evitar cargas innecesarias de recursos.

La landing deberá estar orientada a buenos resultados en:

```text
LCP
CLS
INP
```

---

# 29. Arquitectura de páginas

La aplicación puede iniciar con:

```text
/
├── Landing principal

/nosotros
├── Información del negocio

/servicios
├── Servicios completos

/galeria
├── Galería completa

/contacto
├── Información de contacto
└── Mapa
```

Si el proyecto no necesita páginas independientes, mantener la aplicación como una única landing.

No crear rutas únicamente por "tener más páginas".

---

# 30. Regla para agregar dependencias

Antes de instalar una dependencia nueva, responder:

1. ¿Next.js ya resuelve esto?
2. ¿Tailwind ya resuelve esto?
3. ¿CSS moderno puede resolverlo?
4. ¿El componente puede implementarse fácilmente sin dependencia?
5. ¿La dependencia realmente mejora mantenibilidad o UX?

Si la respuesta es no, no instalarla.

---

# 31. Arquitectura mínima recomendada

Para una landing sencilla:

```text
Next.js
TypeScript
Tailwind
shadcn/ui
Lucide
```

Eso debería ser suficiente.

---

# 32. Arquitectura ampliada

Si el proyecto crece:

```text
Next.js
TypeScript
Tailwind
shadcn/ui
Lucide
Zod
React Hook Form
Motion
```

Agregar estas herramientas únicamente cuando exista una necesidad concreta.

---

# 33. Flujo de desarrollo

El desarrollo deberá seguir aproximadamente este orden:

```text
1. Definir objetivo del negocio
↓
2. Definir público objetivo
↓
3. Definir propuesta de valor
↓
4. Definir CTA principal
↓
5. Crear estructura de contenido
↓
6. Definir tipos
↓
7. Crear data
↓
8. Crear componentes base
↓
9. Crear secciones
↓
10. Crear página principal
↓
11. Implementar responsive
↓
12. Implementar SEO
↓
13. Optimizar imágenes
↓
14. Revisar accesibilidad
↓
15. Revisar rendimiento
↓
16. Probar móvil
↓
17. Probar desktop
↓
18. Deploy
```

---

# 34. Checklist inicial del proyecto

* [ ] Configurar Next.js.
* [ ] Configurar TypeScript.
* [ ] Configurar Tailwind.
* [ ] Configurar shadcn/ui.
* [ ] Instalar Lucide React.
* [ ] Crear estructura de carpetas.
* [ ] Crear tipos.
* [ ] Crear `business.ts`.
* [ ] Crear configuración global.
* [ ] Crear navegación.
* [ ] Crear `Container`.
* [ ] Crear `Section`.
* [ ] Crear `Button`.
* [ ] Crear `SectionHeader`.
* [ ] Crear Header.
* [ ] Crear Hero.
* [ ] Crear Services.
* [ ] Crear About.
* [ ] Crear Benefits.
* [ ] Crear Gallery.
* [ ] Crear Testimonials.
* [ ] Crear FAQ.
* [ ] Crear CTA.
* [ ] Crear Contact.
* [ ] Crear Footer.
* [ ] Crear botón de WhatsApp.
* [ ] Configurar metadata.
* [ ] Configurar Schema.org.
* [ ] Configurar sitemap.
* [ ] Configurar robots.
* [ ] Optimizar imágenes.
* [ ] Revisar accesibilidad.
* [ ] Revisar responsive.
* [ ] Revisar rendimiento.
* [ ] Ejecutar build.
* [ ] Realizar deploy.

---

# 35. Regla principal del proyecto

La arquitectura debe seguir esta filosofía:

> **Simple por defecto, reutilizable cuando sea necesario y escalable únicamente cuando el proyecto lo requiera.**

No construir una aplicación compleja para resolver un problema sencillo.

La prioridad debe ser:

```text
UX
↓
Conversión
↓
Rendimiento
↓
SEO
↓
Mantenibilidad
↓
Escalabilidad
```

La tecnología debe estar al servicio del proyecto y no convertirse en el proyecto.

---

# 36. Objetivo final

El resultado debe ser una plantilla que permita pasar rápidamente de:

```text
Nueva empresa
```

a:

```text
Nueva landing profesional
```

modificando principalmente:

```text
/src/data
/src/config
/public/images
```

sin necesidad de reconstruir toda la aplicación.

La estructura debe permitir reutilizar la misma base para:

* Restaurantes.
* Taquerías.
* Barberías.
* Salones de belleza.
* Fotógrafos.
* Servicios profesionales.
* Talleres.
* Tiendas locales.
* Negocios de eventos.
* Servicios especializados.
* Empresas pequeñas y medianas.

La plantilla deberá mantener una separación clara entre:

```text
Contenido
Presentación
Lógica
Configuración
Tipos
Recursos
```

para que cada nuevo proyecto pueda personalizarse rápidamente sin sacrificar calidad técnica.
