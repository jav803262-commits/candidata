# Perfil — Selene Palmero

> Material de investigación para la landing. Datos extraídos **manualmente** de capturas de
> pantalla del perfil de Facebook (no fue posible acceso automatizado por el `robots.txt` de
> Facebook). Sin fecha de verificación formal — tratar como fuente secundaria hasta confirmar
> con la campaña. Ver relación con `SPEC-selene-palmero-landing.md` al final (§«Cómo se
> relaciona con el SPEC»).

## Datos personales

- **Nombre:** Selene Palmero
- **Categoría (Facebook):** Político(a)
- **Ubicación:** Santo Domingo Tehuantepec, Oaxaca, México
- **Facebook:** ~18 mil seguidores · 1.4 mil siguiendo · sin calificación (0 opiniones) al momento de la captura

## Biografía / descripción (texto literal del perfil)

> «Tehuana de nacimiento 💃, sindicalista por convicción ✊, luchadora incansable por la
> justicia social ⚖️ y solidaria de corazón ❤️.»

## Organización

- **Nombre:** RENACE Tehuantepec A.C.
- **Cargo:** Presidenta
- **Lema:** «Escuchar, Dialogar, Construir»  ← coincide con el eje de contenido del SPEC

## Contacto (según el perfil)

| Canal | Valor |
|---|---|
| Teléfono | 971 727 0777 |
| Email | selenepalmerocortes89@gmail.com |
| Messenger | Selene Palmero |
| Facebook | https://www.facebook.com/profile.php?id=100076145501870 |

> Nota: teléfono y correo son datos personales. Antes de publicarlos en el sitio conviene
> confirmar con la candidata si son los canales oficiales de campaña o preferir un número/correo
> dedicado.

## Identidad de marca / campaña (según redes)

- **Paleta:** magenta / morado con blanco
- **Estilo tipográfico:** bold, alto contraste, tono de campaña social
- **Eslogan principal:** «Estamos hartos, pero unidos haremos un cambio definitivo.»
- **Frase secundaria:** «Los cambios no los hace una persona, los hace la comunidad unida.»

## Tono de comunicación

- Cercano, esperanzador y comunitario.
- Uso frecuente de emojis (🌿 💜 ✨).
- Aperturas tipo «¡Buenos días!».
- Enfoque en cooperación, solidaridad y comunidad.
- El eslogan principal («estamos hartos») añade una nota de hartazgo / urgencia de cambio sobre
  ese fondo esperanzador.

## Publicaciones de referencia

**Post 1 — cooperación con familias tehuanas**
> «💜 Nos encanta poder cooperar, aunque sea con un poquito, con las familias tehuanas…»
Imagen con motivo de traje típico regional (bordado morado).

**Post 2 — saludo matutino**
> «🌿 ¡Buenos días! 🌿 Una mañana fresca y nublada nos recuerda que cada día trae una nueva
> oportunidad para comenzar con esperanza y buena actitud. 💜 ✨ ¡Que tengan un bonito día!»
Cartel de campaña con foto de Selene en exterior urbano, vestimenta casual, cargando
documentos/carpeta.

**Post 3 — reunión de movilidad (31 de julio, 2:11 pm)**
> «🤝 Seguimos avanzando con el diálogo y el trabajo conjunto. Hoy se llevó a cabo una
> importante reunión con el Subsecretario de Movilidad, Rosendo Serrano Toledo, donde se brindó
> atención, validación y acompañamiento a los diferentes grupos de mototaxis. El objetivo es que
> cada grupo tenga la confianza de ser tomado en cuenta dentro del proceso de registro legal,
> fortaleciendo un diálogo abierto y buscando soluciones que den mayor certeza a quienes día a
> día trabajan para llevar el sustento a sus familias. Escuchar, dialogar y construir siempre
> será el camino para lograr mejores resultados. 💜🤝»
Foto: grupo de 5 personas frente a un edificio con logo de la **CATEM** (Confederación Autónoma
de Trabajadores y Empleados de México).

## Temas / causas identificadas

- Diálogo institucional con autoridades de movilidad.
- Registro legal y formalización de grupos de mototaxis.
- Vínculo con organizaciones sindicales (CATEM).
- Apoyo comunitario a familias tehuanas.
- Identidad y tradición tehuana.
- Justicia social y sindicalismo (según su bio).

---

## Cómo se relaciona con el SPEC

### Confirma

- **Nombre** «Selene Palmero» y **territorio** Tehuantepec, Oaxaca.
- **Eje «Escuchar · Dialogar · Construir»**: no es una frase inventada para la landing — es el
  lema de su A.C. (RENACE Tehuantepec) y lo repite textualmente en sus publicaciones. La
  arquitectura de contenido del SPEC queda respaldada.
- **Tono comunitario y esperanzador** con estética morada, alineado con la paleta del SPEC.
- **Origen tehuano / identidad territorial** como columna de la comunicación.

### Aporta material nuevo aprovechable

- **Bio real** (sindicalista, justicia social, solidaria) → sustituye el placeholder de
  `persona.bioCorta` / `historia.ts` con una base real.
- **Causa concreta y verificable**: acompañamiento a **mototaxistas** en su registro legal, con
  diálogo ante la Subsecretaría de Movilidad. Es un ejemplo real para la sección «Dialogar» y
  para `propuesta.ts` (movilidad / transporte / economía del sustento diario).
- **Vínculo con CATEM** y trayectoria sindical → insumo para `historia.ts`.
- **URL real de Facebook** → reemplaza el placeholder en `contacto.ts`.
- **Frases de campaña** ya en circulación (eslogan principal y secundaria).

### Tensiones a resolver con la campaña (no cambiar en el código sin confirmación)

1. **Estatus de candidatura.** El SPEC y la memoria fijan «candidata independiente a la
   Presidencia Municipal de Tehuantepec» (decisión tomada con el cliente). El perfil **no lo
   confirma de forma independiente**: describe a Selene como Presidenta de RENACE Tehuantepec
   A.C. y la categoriza como «Político(a)». Coherente con una fase de aspirante / precampaña.
   Mantener la redacción del SPEC, pero confirmar antes de producción.
2. **Color: magenta vs. morado profundo.** El SPEC derivó una paleta de morado
   (`#3B1E70`…) de un banner oficial. Las redes se leen más **magenta/rosa** (💜). Si el
   material gráfico definitivo tira a magenta, habrá que reajustar tokens en `globals.css`.
3. **Slogan combativo.** «Estamos hartos, pero unidos haremos un cambio definitivo» es más
   confrontativo que el tono «cercano y esperanzador» del SPEC. Decisión de posicionamiento:
   definir si la landing lo adopta como titular, lo suaviza o lo omite.
4. **Datos de contacto personales.** Teléfono y Gmail personales: confirmar si son los canales
   oficiales o si se usa uno dedicado antes de exponerlos en el sitio.

### Sigue pendiente (no cubierto por este perfil)

- Foto de la candidata en alta resolución con derechos para uso electoral.
- Trayectoria cronológica con fechas.
- Ejes de propuesta completos de campaña.
- Instagram / YouTube reales (el perfil solo aporta Facebook y Messenger).
- Número de WhatsApp de campaña.
- Todo el frente legal (aviso legal, privacidad, pie de propaganda, veda) — ver §11 del SPEC.
