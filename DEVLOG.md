## Decisiones

### 2026-04-29 (Proceso: badges 01–04 en verde)
- Se actualiza la cápsula numérica de cada etapa a una versión verde y más contemporánea (borde/ring + sombra suave + tipografía más fuerte) para mejorar foco y lectura del flujo.

### 2026-04-29 (Proceso: rediseño UX/UI de alto contraste)
- Se remaqueta `Process` como bloque premium: cabecera centrada, microchips de estado (fases/control/resultado), tarjetas por etapa con iconografía y marcador de continuidad entre pasos en escritorio. Se conserva copy técnico y se prioriza claridad de lectura por jerarquía visual.

### 2026-04-29 (SolarInquiryPanel: de kWh a costo bimestral)
- El contexto FV pasa de selector por kWh a control interactivo (slider) por monto de recibo bimestral (MXN), porque el usuario final reconoce mejor su gasto que su consumo. Se actualiza `SolarInquiry`/`buildSolarInquiryMessage`, prueba unitaria y contrato en `docs/API_CONTRATOS.md`.

### 2026-04-29 (SolarHero: rejilla más sutil)
- Se baja la opacidad y se amplía el `backgroundSize` de la rejilla para que los “cuadrados” no dominen la foto del hero de paneles.

### 2026-04-29 (solar: ajustes finales de presentación)
- Se centra el bloque principal de la sección `Solar` (cabecera, garantía, panel de contexto y lista técnica) y se elimina el texto final de monitoreo/bitácora.
- En `/paneles-solares`, el hero actualiza el titular a una versión con exclamación y cambia el fondo a `energia.png`, ajustando el encuadre vertical con `object-position`.

### 2026-04-27 (espaciado: paneles y generadores)
- Se replica el ritmo vertical compacto de la home en las secciones exclusivas de `/paneles-solares` y `/generadores` (incl. `Process` solo solar); los héroes de esas rutas bajan solo el padding inferior para reducir la franja entre hero y primer bloque sin tocar el `pt` respecto al header fijo.

### 2026-04-27 (Header: más tamaño, sin tocar el Hero)
- Se incrementa la escala visual del `Header` únicamente; no se ajustan márgenes del `Hero` para cumplir la petición de no “bajar” el héroe; el padding superior del hero se mantiene y el encabezado fijo no debería invadir el título a los anchos de breakpoint actuales.

### 2026-04-27 (layout: viewports de monitor ancho)
- Se amplía progresivamente `app-container` por encima de `2xl` y Full HD, con tope en ultrawide vía `94vw`, y se afloja el `max-w` fijo de los paneles *Benefits* en páginas de solución para que no queden a 80rem cuando el contenedor global ya es más ancho. El `Hero` en home aumenta un poco el ancho de columna de titular/lead en cortes 2xl+.

### 2026-04-27 (home: menos aire entre secciones)
- Se baja un tramo de escala de `py` (y márgenes negativos/gaps en `InstitutionalValue`) en los bloques de la home y en el CTA final compartido, sin tocar el sistema de bordes ni el ritmo de tipografía, solo la huella vertical.

### 2026-04-27 (HomeProof: “industria” sin “ligera”)
- Ajuste de copy: encabezado de sección e insignia de segmento en la tarjeta industrial alinean a *industria*; el tipo de `HomeFeaturedProject` usa literal `Industria` para ese badge.

### 2026-04-27 (home: sin sección “Cómo trabajamos”)
- Se retira el bloque completo de metodología (cabecera, chips y pasos) de la home; se elimina el componente y `homeHowWeWorkSteps` en `content`. El CTA de la tercera solución (`Sistema energético integrado`) pasa a `/#lineas` para no dejar ancla rota.

### 2026-04-27 (propuesta de valor: costos y planeta)
- En `InstitutionalValue`, el lead institucional enfatiza disminución de costos y cuidado del planeta frente a la fórmula previa (decisiones de negocio y operación), manteniendo el marco *end-to-end*.

### 2026-04-27 (BusinessLines: copy generadores)
- La descripción de la línea de generadores pasa a *Sistemas de generación de energía eléctrica…* para alinear el mensaje con la categoría de equipo sin perder el detalle de transferencia y carga crítica.

### 2026-04-27 (solar: garantía 25 años en módulos)
- Se integra en copy y UI (chip discreto, lista técnica y tarjeta de *líneas principales*) la garantía de producto de **25 años** en módulos, con redacción que remite a fabricante e instalación para alinear expectativas y cumplir buenas prácticas de información comercial.

### 2026-04-29 (solar: producción 25 a 30 años + garantías)
- Se ajusta el mensaje de garantía solar a *25 a 30 años en producción* y se explicita el alcance de garantía (pieza/instalación/producción) en `Solar`, `SolarHero`, `BusinessLines` y `solarSystemItems`, manteniendo la referencia a fabricante/condiciones.

### 2026-04-27 (footer: sin columna Cobertura)
- Se retira la tercera columna del `Footer` para no repetir geografía y línea de oferta; el layout pasa a dos columnas en `md+`.

### 2026-04-27 (home: píldora `heroTrust`)
- Se renombra el tercer ítem de confianza del hero a *Paneles, Generadores o Híbrido* (antes *Integración a medida*) para alinearlo con la oferta explícita en la home.

### 2026-04-27 (home: copy hero, contacto y lead IMSS)
- Se simplifica el claim lateral del `Hero` a distribución de marcas y se renombra el CTA a *Solicita Cotización*; en contacto se elimina el encabezado/lead que duplicaba explicación del formulario.
- `leadSchema` exige `numeroImss` (mín. 8 dígitos) solo si el usuario indica que cotiza en IMSS; el mensaje a WhatsApp incluye la línea de afiliación cuando aplica, y el pie del formulario comunica que la información se canaliza a expertos con criterio de privacidad.

### 2026-04-27 (performance: animación más ligera)
- Se optimiza la percepción de fluidez reduciendo tiempos y desplazamientos de animación en `globals.css` (hero/reveal/stagger/catálogo), y removiendo `will-change` continuo para evitar presión extra de GPU.
- Se ajusta `Header` para evitar `backdrop-blur` en estado fijo y menú móvil, y en `Hero` se baja `preload` de video a `metadata` junto con blur/sombra más ligeros en la tarjeta institucional.

### 2026-04-27 (favicon: logo del header)
- El favicon y el icono de acceso rápido usan `public/logo1.png`, alineado con el `Image` del `Header`, para que la pestaña y marcadores muestren la misma marca.
- Ajuste: `metadata.icons` en `layout` se retira en favor de archivos bajo `src/app/` (`favicon.ico`, `icon.png`, `apple-icon.png`), porque el archivo estático `public/favicon.ico` (icono de plantilla / Vercel) seguía atendiendo muchas peticiones a `/favicon.ico` aun con metadata; además se regenera ese `favicon.ico` desde el logo (multi-tamaño 16/32/48) y se documenta el script `build:favicon`.

### 2026-04-27 (UI: base responsive multi-monitor)
- Se exporta `viewport` en `layout` para comportamiento consistente en móvil, notch (`viewport-fit: cover`) y escalado inicial.
- Se añade `font-size` fluido en `html` (límites 15–18px) para legibilidad sin saltos bruscos entre resoluciones.
- Se define `@utility app-container` con `min-w-0` y más padding horizontal en `2xl` y pantallas anchas, y se aplica a columnas de página, header, footer y héroes/CTA full-bleed para márgenes homogéneos en 4K/ultrawide.

### 2026-04-27 (marca: ENERGRUN sin diéresis)
- Se reemplaza la grafía con **Ü** por **U** en textos de interfaz, SEO (`layout`), `whatsapp` y comentarios/docs donde aún figuraba, para alinear con un nombre ASCII simple y evitar variaciones (coincide con `ENERGRUN` ya usado en el chatbot de contacto).

### 2026-04-27 (generadores: copy en beneficios de respaldo)
- Se reestructura el lead de `GeneratorBenefits` (cabecera “Continuidad diseñada para cargas críticas”) en dos párrafos breves: primero el qué (cargas, orden, reglas), luego el por qué del dimensionamiento frente a cifras genéricas.
- Iteración: se prioriza un tono aún más directo (“empezar por lo concreto”, “corto o sobrado”) y se cierra con dimensionamiento aterrizado frente a kW o “potencia de sobra” genérica.
- Ajuste final: se reduce a un solo párrafo corto (prioridad + cálculo del equipo) para lectura veloz.

### 2026-04-25 (UI: header más alto)
- Se incrementan padding vertical, tamaño de logo, jerarquía de marca, enlaces y CTA en `Header` para lectura y proporción en pantalla.
- Se sube el padding top de héroes fijos bajo el header (home, paneles, generadores) para mantener el mismo criterio de aire bajo el encabezado fijo.

### 2026-04-25 (contacto: mini-chat con auto-scroll por paso)
- Se agrega auto-scroll suave en `WhatsAppFab` para llevar al usuario al siguiente bloque (FAQ → respuesta → siguiente pregunta) al seleccionar opciones.
- Objetivo: evitar que en pantallas pequeñas el usuario pierda el hilo del flujo y tenga que desplazar manualmente.

### 2026-04-27 (home: “Cómo trabajamos” más directo)
- Se reescribe el texto de metodología para priorizar claridad (“paso a paso”, “entregables claros”) sin jerga y manteniendo tono profesional; se usa “seguimiento técnico” en lugar de “trazabilidad”.

### 2026-04-25 (home: prueba social visual)
- Se añade sección `HomeProof` en `Inicio` con dos capas de credibilidad: proyectos destacados (residencial/comercial/industrial) y testimonios breves.
- Se usan explícitamente los activos `residencia.png`, `comercial.png` e `industrial.png` para alinear narrativa con evidencia visual solicitada.
- Los textos de testimonio se mantienen institucionales y neutrales (sin claims numéricos no verificados), priorizando claridad y confianza.

### 2026-04-25 (home: integración de narrativa de respaldo)
- Se integra en `Inicio` una mención breve y amigable de continuidad operativa sin romper estructura: microcopy en `BusinessLines` y ajuste de descriptor en la ficha del hero.
- Se evita repetir el texto largo de la página de generadores; se conserva el enfoque de “portada institucional” y se deriva profundidad técnica a la ruta dedicada.

### 2026-04-25 (home: `BusinessLines` — copy más coherente)
- Se ajusta el copy final a lenguaje directo y neutral: “Solar o generadores”, con una frase breve de alto impacto (“Reduce consumo… / protege tu operación…”).
- Ajuste menor: se cambia “solar” por “paneles solares” en el texto guía para mayor claridad comercial.

### 2026-04-25 (footer: neutralidad de marca)
- Se retira la mención explícita de “Generac” en el texto del `Footer` para mantener lenguaje institucional neutro; el detalle de marca permanece donde corresponde (catálogo / profundidad).

### 2026-04-25 (hero: precisión de copy)
- En el hero de home se ajusta la frase a “Vendemos e instalamos **sistemas** fotovoltaicos…” para mayor precisión y claridad (sin cambiar el alcance de oferta).

### 2026-04-25 (paneles-solares hero: tono más amigable)
- Se reescribe el hero de `/paneles-solares` para eliminar el tono de “anotación” (“página dedicada”) y dejar un mensaje claro, rápido y entendible para cualquier usuario: beneficio + criterio de diseño + qué encontrará en la sección.
- Ajuste final: se acorta el lead para evitar una enumeración larga (“Aquí verás…”), dejando una sola frase clara.
- En la sección `Solar` se reescribe el párrafo sobre DAC a lenguaje simple: qué pasa (sube el costo por kWh) y cómo ayuda un dimensionamiento correcto (mantener un rango más conveniente).
- En la sección `Proceso` se reescribe el texto de documentación (reportes/planos/actas) para sonar más humano, manteniendo el mensaje de consistencia técnica de principio a fin.

### 2026-04-25 (generadores hero: tono más amigable)
- Se reescribe el hero de `/generadores` para eliminar “página dedicada” y comunicar en lenguaje directo: propósito (no detener operación), criterios base (cargas críticas + combustible + continuidad) y qué incluye la sección (criterios + catálogo).
- Ajuste final: se acorta el lead eliminando la frase “Aquí verás…”, dejando una descripción más limpia.

### 2026-04-25 (generadores: copy más amigable)
- Se reescribe el beneficio de “Continuidad automática” para explicar el cambio automático a cargas críticas en lenguaje simple (sin jerga ATS).
- En “Selección de combustible y plataforma” se retira la mención de marca: “se elige la línea del generador…”.

### 2026-04-24 (chatbot FAB: filtro más profundo en generadores)
- Se amplía el flujo de chatbot para casos de `generadores` e `integrado` con tres preguntas nuevas: tipo de generador de interés, combustible disponible y prioridad de respaldo.
- Objetivo: mejorar pre-calificación antes de pasar a WhatsApp y entregar al asesor un contexto inicial más accionable.
- En Zod se aplica validación condicional: esos tres campos son obligatorios cuando el tema requiere perfilado de respaldo.

### 2026-04-24 (contacto: mini-chat previo a WhatsApp)
- El FAB de WhatsApp evoluciona de enlace directo a asistente guiado en cliente para reducir fricción de prediagnóstico: tema (solar/generadores/hibrido), duda principal, segmento e IMSS.
- Se responde una FAQ breve dentro del panel y luego se construye un resumen técnico-comercial para `wa.me`, manteniendo el objetivo de conversión a chat humano.
- Validación estricta con Zod (`contactChatbotLeadSchema`) antes de construir el mensaje final; no se agregan endpoints ni backend.
- Se conserva fallback “WhatsApp directo” para usuarios que prefieren saltar el flujo guiado.

### 2026-04-24 (responsive integral: mobile/tablet/desktop)
- Se ejecuta barrido de responsividad en páginas `/`, `/paneles-solares` y `/generadores` con foco en: evitar overflow horizontal, mantener jerarquía tipográfica y asegurar CTAs usables en pantallas angostas.
- `Header`: ajustes de escalado de logo y espaciados en móvil; navegación desktop activa desde `lg` (antes `xl`) para mejorar UX en laptops/tablets landscape; botón/hamburguesa alineados con el mismo breakpoint.
- Heroes (`Hero`, `SolarHero`, `GeneratorsHero`) y `FinalCTA`: se fuerza `overflow-x-clip` en secciones full-bleed, se recalibra tipografía/espaciado en móvil y CTAs pasan a ancho completo en pequeños breakpoints.
- `Solar` y `GeneratorsCatalog`: botones de acción por bloque pasan a `w-full` en móvil para evitar cortes y mejorar tap targets.
- `WhatsAppFab`: se adapta a safe areas (`env(safe-area-inset-*)`), reduce padding en pantallas chicas y oculta etiqueta en anchos extremos para no invadir contenido.
- `Footer`: centrado y composición móvil refinada para lectura limpia antes del split en desktop.

### 2026-04-24 (estáticos: favicon y consola 404)
- El 404 a `/favicon.ico` ocurría porque no existía el archivo bajo `public/` ni icono vía `app/`. Los navegadores lo solicitan por convención; se genera un ICO a partir de `logo1.png` (redimensionada) y se declara en `metadata.icons` (`icon` + `apple` apuntando a `logo1.png` para *touch icon*). El mensaje adicional en consola como **«(índice):1 Failed to load resource: 404»** suele ser el mismo tipo de fallo (recurso iniciado en el contexto del documento HTML) o deja de repetirse al existir el favicon; no se detectaron otras rutas rotas: todas las `*.png` / `*.mp4` referenciadas en código coinciden con archivos reales (mayúsculas incluidas).
- Se añade prueba de regresión en `publicStaticAssets.test.ts` con la lista de nombres requeridos alineada a `content`, `pageHeroBackgrounds`, `Header` y `Hero`.

### 2026-01-02 (hero — sin mención de marca)
- Se retira *Generac* de la ficha lateral del `Hero` (evita anclar toda la landing a un proveedor; el catálogo y profundidad de marca vive en `/generadores`).
- `heroTrust` deja de incluir “Atención en Monterrey” (la geografía queda en el kicker/SEO sin repetirla como píldora); la grilla pasa a 3 columnas en `sm+` para componer limpio.
- En `/generadores`, el hero y el copy de contacto dejan de mencionar *Generac* explícitamente; el catálogo sigue siendo el espacio natural para la profundidad del fabricante.
- Fondos de hero en rutas dedicadas: `/paneles-solares` y `/generadores` incorporan imágenes full-bleed bajo el titular, con doble capa (overlay + rejilla) para sostener contraste sin perder el look corporativo.
- `GeneratorBenefits` se eleva a layout institucional premium: cabecera oscura con chips de criterio + tarjetas con acento vertical, iconos y hover; mantiene el texto de beneficios para no introducir claims nuevos.
- `SolarBenefits` se eleva a layout institucional premium: cabecera oscura con chips de criterio + tarjetas con acento vertical, iconos y hover; mantiene el texto técnico de beneficios sin alterar el alcance funcional.
- `BusinessLines` pasa a tarjetas con **foto de fondo** (activos en `public/`) y bloque de contenido en cristal claro, para reforzar escaneo visual por línea sin perder legibilidad.
- Segunda iteración visual en `BusinessLines`: se elimina el “cristal” como contenedor principal y se adopta layout editorial corporativo (media top + contenido inferior sobre blanco + CTA sólido), logrando lectura más limpia y percepción más institucional.
- Tercer ajuste UX: la tarjeta entera (imagen + copy + CTA) es un solo `Link` a la ruta de cada solución, evitando anidar `<a>` y preservando un foco accesible (ring `focus-visible`).
- Cuarto ajuste de copy en `BusinessLines`: se elimina el párrafo bajo el título; el H2 sostiene el mensaje sin redundancia. Se recalibran los `data-stagger` de las tarjetas a `index + 2` (antes se compensaba un párrafo intermedio).
- Rediseño de `InstitutionalValue`: de grilla simple a bloque institucional de alto contraste (panel superior + tarjetas inferiores con iconografía), priorizando jerarquía visual, claridad ejecutiva y ritmo vertical premium.
- Ajuste de copy en “Continuidad y ahorro” para retirar repetición (“respaldo automático con generación de respaldo”) y reforzar lenguaje empresarial.
- Rediseño de `HowWeWorkBrief` hacia lenguaje ejecutivo/creativo: cabecera estratégica con chips de control y timeline de 3 pasos en tarjetas con iconos, conectores y microinteracciones. Objetivo: más impacto visual sin perder legibilidad institucional.

### 2026-04-25 (hero — acentuación y tono)
- Ajuste de titular a ortografía completa: “Especialistas en generación de energía”, para sostener credibilidad institucional (acentos y consistencia) sin cambiar intención comercial de la oferta.

### 2026-04-24 (arquitectura institucional multipágina)
- **Problema**: la home concentraba todo (solar + catálogo Generac + contenido institucional), generando scroll largo y mezcla de objetivos narrativos.
- **Decisión**: separar la experiencia en tres rutas:
  - `/` institucional (mensaje de empresa, propuesta de valor, dos líneas de negocio y distribución de tráfico),
  - `/paneles-solares` para profundidad solar,
  - `/generadores` para profundidad de respaldo y catálogo técnico.
- **Reutilización priorizada**: se conserva contenido técnico ya implementado (`Solar`, `GeneratorsCatalog`, data arrays, imágenes en `public/`) y se redistribuye con nuevos wrappers por dominio.
- **Mantenibilidad**: se crean secciones compartidas (`ContactSection`, `BusinessLines`, `InstitutionalValue`, `HowWeWorkBrief`) y nuevos bloques específicos en `sections/solar/*` y `sections/generators/*`.
- **Navegación**: `Header` y `Footer` pasan a rutas limpias con contacto consistente por `#contacto` en cada página.

### 2026-04-22 (scroll reveal — legibilidad del movimiento)
- El encabezado del catálogo ya disparaba bien el IO; el feedback era “casi no se nota”. Se sube **recorrido** (`40px` en `.reveal-t`), **duración** (`0.9s`) y **stagger** a **140ms** entre pasos (eyebrow → raya) para que la cascada se lea sin volverse teatral. Misma grilla de delay para `data-stagger` 4–10 y `.reveal-stagger-stack` para no desincronizar otras secciones. Fichas: un poco más de Y y de tiempo en texto/imagen, escala en foto **0.96** (sigue siendo sutil).

### 2026-04-22 (catálogo Generac — reveal del encabezado “invisible”)
- **Causa**: `RevealGroup` envolvía el `<section>` completo (intro + todas las fichas). El `IntersectionObserver` con `threshold: 0` marcaba `reveal-root--visible` en cuanto **cualquier** subrectángulo del section intersectaba el viewport (p. ej. solo la última ficha). El copy “Catálogo Generac / Respaldo…” podía pasar a visible **fuera de la zona visible** o el usuario llegaba al título ya con la transición terminada → sensación de “no hay animación”.
- **Corrección**: `<section id="generadores">` fijo en el servidor; `RevealGroup` solo alrededor del bloque `max-w-3xl` del encabezado (`as="div"`). Las fichas siguen con `GeneratorArticleReveal` + CSS por `data-step`.

### 2026-04-22 (catálogo Generac — reveal interno por tarjeta)
- Las fichas necesitan **texto e imagen en secuencia** al activarse la tarjeta, no solo opacidad de la tarjeta entera vía `StaggeredFade`. **Un observer por `<article>`** (`GeneratorArticleReveal`) aplica `gen-article-reveal--in` una sola vez; el escalonado es **CSS** (`data-step` 0–7: bloques de copy, specs, criterio, CTAs y al final la columna visual con `.gen-reveal-media`). El orden de pasos es **siempre texto → imagen** en todos los anchos para que coincida con el flujo en móvil (texto arriba, imagen abajo); en desktop con imagen a la izquierda la animación sigue ese orden lógico de lectura del bloque. Borde entre columnas: `md:border-l` o `md:border-r` según la fila alterna.

### 2026-04-22 (reveal en scroll)
- Sistema en dos capas: **RevealGroup** (sección) con cascada de texto por `data-stagger`; **StaggeredFade** hijo con contexto (sin segundo observer) + retardo `activateAfterMs` para que las rejillas sigan a eyebrow/título. Imágenes: variante `withMedia` (scale 0.98 en `.stagger-fade__item`). Hero sigue con animación CSS on-load, sin IO.
- **Corrección IO**: el `section` observado a veces es más alto que el viewport; con `threshold: 0.2` el ratio nunca se cumplía, textos invisibles. Se pasa a `threshold: 0` + `isIntersecting` (cualquier entrada al viewport basta una vez).

### 2026-04-22 (Hero — oferta)
- Dejar de sugerir un único "proyecto integrado" forzado: el h1 y el lead explicitan **dos líneas de negocio** (FV y respaldo con generador) y que la integración en una sola obra es **opcional** según el caso. OG actualizado en la misma línea.

### 2026-04-22 (Solar — titular)
- Sustitución de "fotovoltaico / dimensionado" por formulación coloquial y directa, sin perder intención técnica (consumo real).

### 2026-04-22 (Proceso — presentación institucional)
- Misma lenguaje visual que Cómo opera / catálogo: **un solo contenedor**, separación fina entre celdas (`gap-px`), sin “columnas flotantes”. Pictos laterales en cajetín **eliminados**; solo queda el badge 01–04 para lectura directa.
- Copy: microtexto bajo el h2 (entregables) + nota al pie (CFE, obra, financiamiento) sin duplicar los cuatro `processSteps` en `content.ts`.

### 2026-04-22 (Cómo opera + Beneficios — densidad)
- Se sustituyen tres/four “cards flotantes” con **un recuadro** y `divide` interno (pasos) o **grid** compacto (beneficios) para quitar el doble margen: menos vacío visual sin bajar el tamaño de fuente.
- Misma regla de acento bajo título que en catálogo Generac.

### 2026-04-22 (catálogo Generac — presentación)
- Ficha larga: tarjeta a dos columnas (texto + imagen) con costura `border` entre columnas; numeración fija a `N / total` para escaneo. Especificaciones en recuadros ligeros; bloque *liquid cooled* con división 3+2 en el modelo de datos existente (sin tocar `content`).

### 2026-04-22 (catálogo Generac — centrado de fotos)
- La columna de imagen ahora estira a la altura de la ficha y centra el `aspect-[4/3]`; `object-center` fijo en la imagen para alinear el encuadre con el recuadro (antes dependía de `objectPositionClass` y el bloque quedaba arriba si la ficha crecía).

### 2026-04-22 (transiciones UI — sin API)
- Entrada de bloques bajo el fold con `StaggeredFade` + `.stagger-fade__item` (cascada corta) para no competir con el hero; `ScrollReveal` afinado a misma sensación. Sin animaciones pesadas: solo opacity/transform y respeto a `prefers-reduced-motion`.

### 2026-04-22 (Solar — asistente B0, sin API)
- Panel «Contexto para tu consulta» con kWh bimestre, segmento y tarifa; mensaje `buildSolarInquiryMessage` + CTA y `WHATSAPP_SFV_QUICK` para ruta mínima. Cumple intención de “simulador” ligero sin cálculo engañoso: disclaimer recibos 12m. `Solar` ya no requiere `whatsappHref` desde `page`.

### 2026-04-22 (Solar — imágenes por aplicación)
- La columna «Aplicaciones» pasa a tarjetas con cabecera fotográfica por segmento. Datos en `solarApplicationBlocks` (imagen obligatoria por bloque); sistema FV en `solarSystemItems`. Mismas PNG que proyectos por coherencia (`residencia`, `comercio`, `industria`); sustituir en `content.ts` si se desean archivos exclusivos FV.
- Reorden: bloque “Paneles solares” (texto + criterio + botones) primero, a ancho completo; debajo, sección Aplicaciones en rejilla horizontal (`lg:grid-cols-3`, `sm:2` cols) y pie de monitoreo.
- Imágenes FV por segmento: `residencial.png` / `comercial.png` / `industrial.png` (sustituyen `residencia` / `comercio` / `industria` en `solarApplicationBlocks`).

### 2026-04-22 (WhatsApp)
- Número operativo: **81 1411 8767** (Monterrey) en E.164 `528114118767`, centralizado en `WHATSAPP_DEFAULT_E164` y misma lógica de override por `NEXT_PUBLIC_WHATSAPP_NUMBER` en `page.tsx`, `LeadForm` y `WhatsAppFab`.

### 2026-04-22 (hogares.png — encuadre)
- `hogares.png` usa `fit: "contain"` para que la composición entera quede visible dentro del `aspect-[4/3]`; el fondo `#0c2140` del contenedor rellena bandas si la proporción del PNG no coincide. Contenedor con `min-w-0` para evitar desbordes raros en grid. Resto de bloques: `cover` por omisión.

### 2026-04-22 (imágenes catálogo y proyectos)
- Se enlazan activos en `public/` vía `next/image` (`fill` + `object-cover`, `sizes` acorde a 50% / 33% de columna). Mapeo Generac: título de bloque → `hogares`, `liquid`, `industriales`, `moviles`, `complemetarios` (así está el nombre del PNG en repo). Proyectos: `residencia`, `comercio`, `industria` para Residencial / Comercial / Industria ligera.
- Overlay inferior en el catálogo (gradiente corporativo) para título y tag legibles sobre fotos dispares. Proyectos: chip de segmento con fondo semitransparente y `backdrop-blur-sm`; se retira el badge «En construcción» y se ajusta el pie a fotos representativas.

### 2026-04-22 (tarjeta hero «Qué incluye»)
- Se sustituye el `backdrop-blur-[2px]` casi imperceptible por `backdrop-blur-xl` y un velo `slate-950` con opacidad media: el video queda difuminado detrás del panel sin volver al glass pesado del hero antiguo. Ajuste fino de opacidades del texto secundario para mantener jerarquía.

### 2026-04-22 (noche — pulido)
- **Auditoría y pasada de refinamiento**: sin reestructurar. Diagnóstico: redundancia entre `ValueProposition` + `Solutions` + `HowItWorks`, hero con columna estrecha y 3 CTAs (incluyendo FAB redundante), catálogo Generac con `tag`/`subtitle` solapados y tabla de specs rígida, benefits con ítems solapados (6 → 4), inconsistencias de ancho (`max-w-6xl`/`max-w-7xl`) y tamaño de botón (`h-11`/`h-12`).
- **Decisión estructural (mínima)**: se elimina `ValueProposition`; su idea ya vive en el hero lateral y en `Solutions`. El flujo pasa de 12 a 11 secciones, quita una pantalla entera de redundancia sin perder mensaje.
- **Hero**: se rescribe el headline para unificar los dos conceptos ("paneles solares y sistemas de respaldo, diseñados como un solo proyecto"). La tarjeta lateral ya no repite el discurso, ahora lista concretos técnicos (CFE, A.T.S., BESS) + nota de distribuidor/financiamiento, que es la única mención ligera a Mejoravit en el hero.
- **Catálogo Generac**: se unifica el tratamiento de bloques con grid tipográfico de specs (label uppercase + valor semibold) en lugar de tabla con columna fija; más aire y más institucional. Tags reducidos a etiquetas de 2–3 palabras para jerarquía clara. Se elimina el texto "Imagen del equipo disponible bajo solicitud" porque transmitía debilidad comercial.
- **Benefits**: 6 → 4. Se eliminan ítems que se solapaban ("Menor exposición a interrupciones" con "Continuidad operativa", "Mayor control energético" con "Monitoreo del sistema", "Soluciones a medida" por vaguedad).
- **Financing**: la card dentro de card proyectaba "banner financiero". Se convierte en grid tipográfico con divisores; queda como apoyo, no como sección de anuncio.
- **FinalCTA**: el CTA principal antes duplicaba el del formulario (que queda inmediatamente arriba). Se intercambia: WhatsApp como primario para ofrecer una salida diferente al usuario que ya vio/omitió el formulario.
- **Consistencia**: se unifican anchos (`max-w-7xl` en CTA y Footer), tamaños h2 (`2.15rem`), tracking de kickers (`0.22em`) y formato de opacidades arbitrarias (`/[0.06]`).

### 2026-04-22 (tarde)
- **Refactor arquitectónico de la home**: se descompone `page.tsx` en 13 secciones independientes bajo `src/app/_components/sections/*` y se centraliza el contenido (`src/lib/content.ts`). Objetivo: mantenibilidad, escalabilidad y un discurso unificado “empresa técnica premium” (Tesla Energy-like) evitando glassmorphism pesado y copy de agencia.
- **Header** recibe menú institucional nuevo (Soluciones / Cómo funciona / Generadores / Paneles solares / Proyectos / Contacto) con estado de scroll y menú móvil controlado.
- **Catálogo Generac**: la base de datos está anclada al PDF del proveedor. No se inventan cifras comerciales; donde no hay foto se usa un visual geométrico con grid (placeholder explícito) para preservar jerarquía.
- **Sección Proyectos** se entrega en modo “estructura lista” con badge “En construcción”: respeta la regla de no fabricar testimonios/casos.
- **Mejoravit** baja a una sección discreta con checklist de aplicabilidad; no domina narrativa.
- **Hero** se reconstruye a dos columnas (copy izquierda + tarjeta lateral con resumen del sistema), manteniendo el video y las animaciones `hero-anim-*`; se sustituye el overlay radial del hero previo por un overlay de dos gradientes planos para un look más industrial y menos “dramático”.

### 2026-04-22
- Se **equilibró el mensaje** frente a la percepción “solo generadores”: paneles (ahorro), Generac (continuidad), Mejoravit (vía de pago), dos secciones nuevas (duo + híbrido) y bloque de tres pilares con FV primero en el orden de oferta.
- Se reescribió el **contenido visible** hacia lenguaje de proveedor: dimensionado por carga, transferencia, comisionado, y límites explícitos en Mejoravit/IMSS, manteniendo el contrato de formulario (Zod) y claves de mensaje a WhatsApp.
- El HERO se modeló como **grid 1→2 columnas** (contenido siempre a la izquierda; en desktop la mitad derecha deja aire a la toma de video), con **un solo** `<video>` full-bleed, overlay direccional fijo y animaciones de entrada vía clases `hero-anim-*` reemplazando el bloque `hero-reveal` único.
- Se reorientó la landing a un **lenguaje y layout corporativos** (Tesla/SunPower–like): mucho aire, tipografía clara, microinteracción en hover, sin cristal glass dominante en el hero.
- Se priorizó **revelado al scroll** (IntersectionObserver) con transiciones de 500 ms y alternativa vía `setTimeout(0)` para `prefers-reduced-motion` para no violar reglas de lint por `setState` síncrono en `useEffect`.
- **Composición del copy del HERO (UX)**: kicker, jerarquía oferta (extrabold, grande) vs beneficio (semibold, secundario), separador, tarjeta para párrafo+Mejoravit, píldoras de confianza y línea de cobertura alineada a la columna.
- **Hero (iteración)**: oferta a tamaño h1 (Adquiere… con nosotros) y beneficio a tamaño secundario; kicker “Monterrey” sin “y AM”.
- **Hero (ancho + industrial)**: se abandona la columna izquierda + hueco derecho: stack centrado en `max-w-6xl`, overlay con foco central (radial) para legibilidad, rótulo uppercase con tracking amplio, banda horizontal en el cuerpo en móvil, CTA de descenso a la primera sección de contenido.
- **Copy (Enfoque / Sistema)**: lenguaje más institucional y lineal: una idea por frase, Mejoravit desligado del diseño técnico, tarjetas con rol claro (FV vs Generac) y bloque de integración con criterio documentado + viñetas de comprobación.
- **Arquitectura de contenido (FV / respaldo)**: se abrieron dos deep dives en `#solar` y `#respaldo` para trasladar la propuesta de producto del tono institucional al tono informativo. El ahorro se explica vía CFE (tarifa doméstica, DAC, interconexión CIL, medidor bidireccional) y el respaldo vía contexto de apagones en el norte del país, A.T.S. y combustibles (GN/GLP). Se añadieron cifras de referencia honestas (rangos, no promesas cerradas) y cada sección cierra con dos CTAs — WhatsApp para cotizar y evaluación técnica para documentar.
- **FAQ institucional**: se ampliaron preguntas a 11 entradas cubriendo CFE, DAC, interconexión, dimensionamiento, arranque del grupo, combustibles, mantenimiento y convivencia FV+respaldo. El objetivo es que el usuario responda objeciones comunes sin abandonar la landing.
- El **header** dejó de ser solo “sobre video”: al hacer scroll pasa a **barra clara** con tipografía oscura para continuidad en secciones de fondo claro, manteniendo CTA a `#evaluacion`.

### 2026-04-21
- Se eligió **Next.js + Tailwind** para velocidad de implementación, SEO básico y performance.
- En Bloque B0 no se implementa backend ni endpoints; los leads se capturan vía **redirección a WhatsApp** con mensaje precargado.
- Se estandarizó la identidad visual con **paleta obligatoria azul/verde** como variables CSS y se removieron fondos oscuros para una estética premium, tecnológica y sustentable.
- Se implementó **HERO con video de fondo** servido desde `public/video_hero.mp4` y un overlay claro + gradiente azul→verde para mantener legibilidad y consistencia con el logo.
- Se ajustó el tratamiento visual del video (overlay más ligero + contraste base + fade) para un look más **profesional** sin perder legibilidad en CTAs.
- Para evitar que el video “no se note”, se eliminó el **velo blanco** y la legibilidad se movió a un **card** (glass) sobre el video. También se removió el bloque visual “Casa protegida” del lado derecho del HERO.
- Se agregó soporte para **logo en header** vía `public/logo.png` (con fallback si aún no existe).
- (Histórico) En una iteración anterior, el **card** del hero también duplicaba el video de fondo.
- Se simplificó el HERO para evitar duplicación: **un único `<video>`** como background **full-viewport** (100vw/100vh) con `object-cover`, overlay oscuro y contenido con z-index superior.
- Se rediseñó el HERO a estética premium: overlay en gradiente (no sólido), texto blanco con contraste, CTAs institucionales y animación `hero-reveal`.
- Se rediseñó el header para integrarse con el video: `position: fixed`, transparente, links en blanco y glass/blur ligero al hacer scroll.
- Se enriquecieron las secciones posteriores al hero con patrones visuales consistentes (hover lift, rings suaves, blobs de gradiente), manteniendo la paleta ENERGRUN.

