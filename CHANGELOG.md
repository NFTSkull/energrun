## Unreleased

- **Favicon / icono de pestaña**: se adopta la convención de archivos en `app/` de Next.js (`favicon.ico`, `icon.png`, `apple-icon.png`) a partir de `public/logo1.png`; se regenera `public/favicon.ico` (sustituye el de plantilla) para peticiones directas a `/favicon.ico`. Script `npm run build:favicon` (sharp + png-to-ico) para volver a generar desde el logo.
- **Responsive / monitores**: `viewport` explícito (`device-width`, `viewport-fit: cover`), tipografía base fluida en `html`, contenedor unificado `app-container` (márgenes extra en `2xl` y `≥1920px`, `min-w-0`) en `main`, `Header`, `Footer`, héroes y CTA final; `body` con `min-h-svh` y control de overflow horizontal.
- **Marca (UI y mensajes)**: se unifica el nombre mostrado como **ENERGRUN** (sin diéresis) en `Header`, `Footer`, héroes, metadata, WhatsApp y documentación asociada.
- **Página `/generadores` (`GeneratorBenefits`) — copy**: el lead de “Beneficios del respaldo automático” se acorta: prioridad de cargas y dimensionamiento a la operación, sin cifras de potencia sueltas o genéricas.
- **Header + héroes (espaciado)**: el `Header` gana presencia (más padding, logo y tipografía) y se aumenta el padding superior de los héroes (`Hero`, `SolarHero`, `GeneratorsHero`) para que el contenido no quede bajo la barra fija.
- **Contacto (FAB WhatsApp) — auto-scroll**: en el mini-chat guiado, cada selección hace scroll suave al siguiente paso para mantener el flujo visible sin que el usuario tenga que “bajar” manualmente.
- **Home (`HowWeWorkBrief`) — copy**: se simplifica el texto de metodología para que sea más directo y fácil de entender sin perder tono profesional.
- **Home (`HomeProof`) — testimonios + proyectos**: se integra una nueva sección en inicio con tres proyectos (usando `residencia.png`, `comercial.png`, `industrial.png`) y tres testimonios breves para reforzar confianza.
- **Generadores (copy)**: se elimina “Generac” de selección de plataforma (“se elige la línea del generador…”).
- **Generadores (copy)**: se simplifica el beneficio de continuidad automática (ATS) a lenguaje más amigable y entendible.
- **Hero `/generadores` (copy)**: se acorta el lead eliminando la frase final (“Aquí verás…”).
- **Sección Proceso (copy)**: se reescribe la línea de documentación/bitácoras a un mensaje más claro y amigable, manteniendo rigor técnico.
- **Sección Solar (copy)**: se reescribe la explicación de tarifa DAC a lenguaje sencillo y estructurado.
- **Hero `/paneles-solares` (copy)**: se simplifica el lead eliminando la enumeración final (“Aquí verás…”).
- **Home (`BusinessLines`) — coherencia de copy**: se pule el texto guía (“Reduce consumo con paneles solares o protege tu operación con generadores…”) para un cierre más profesional y claro.
- **Footer (copy)**: se elimina “Generac” del texto descriptivo (queda “generadores de respaldo”).
- **Home (`BusinessLines` + `Hero`) — integración de mensaje de respaldo**: se incorpora copy breve sobre continuidad operativa, selección por aplicación y catálogo de respaldo en la home, manteniendo tono profesional y estructura existente.
- **Hero `/generadores` (copy)**: se reescribe el titular y el lead para sonar más directo y profesional (sin “página dedicada”).
- **Hero `/paneles-solares` (copy)**: se reescribe el titular y el lead para sonar más directo y profesional (sin “página dedicada”).
- **Hero (copy)**: “Vendemos e instalamos sistemas fotovoltaicos…” (se agrega “sistemas” para precisión).
- **Contacto (FAB WhatsApp) — perfilado extendido para generadores**: se añaden preguntas de tipo de generador, combustible y prioridad de respaldo (obligatorias cuando el tema es generadores o híbrido) para enviar a WhatsApp un resumen más filtrado.
- **Contacto (FAB WhatsApp) — mini-chat guiado**: el botón flotante ahora abre un asistente de preguntas (tema, duda, segmento e IMSS), muestra respuesta corta y genera un resumen estructurado para redirigir a WhatsApp.
- **Responsive cross-device**: ajustes mobile-first en `Header`, `Hero`, `SolarHero`, `GeneratorsHero`, `FinalCTA`, `Solar`, `GeneratorsCatalog`, `Footer` y `WhatsAppFab` para mejorar legibilidad, evitar overflow horizontal y consolidar CTAs full-width en pantallas pequeñas.
- **Estáticos / deploy**: se añade `public/favicon.ico` (generado desde `logo1.png`) y `metadata.icons` en el layout; prueba Jest que verifica la existencia en disco de imágenes, vídeos e icono referenciados. Evita 404 de `/favicon.ico` y refuerza coherencia de assets.
- **Home (`BusinessLines`) — copy**: se elimina el párrafo guía bajo el título; se ajusta el stagger de revelado de tarjetas.
- **Página `/paneles-solares` (`SolarBenefits`) — diseño premium**: sección recompuesta con cabecera corporativa, chips de criterio y tarjetas con acento visual, iconografía y microinteracciones; el contenido técnico se conserva.
- **Página `/generadores` (`GeneratorBenefits`) — diseño premium**: sección recompuesta con cabecera corporativa, chips de criterio y tarjetas con acento gráfico, iconografía y microinteracciones; el copy de beneficios se mantiene.
- **Páginas dedicadas (hero)**: `SolarHero` y `GeneratorsHero` usan fotografías de fondo (`public/paneles.png`, `public/generadores.png`) con capas de lectura (overlay + rejilla) para título y lead institucionales.
- **Página `/generadores` (hero)**: se elimina la mención de *Generac* en el titular y en el copy de contacto; el detalle de marca permanece en el catálogo técnico.
- **Hero (píldoras de confianza)**: se elimina “Atención en Monterrey” y se ajusta la grilla a 3 columnas en `sm+` para mantener la composición equilibrada.
- **Home (`HowWeWorkBrief`) — rediseño institucional premium**: se redefine “Cómo trabajamos” con panel superior estratégico (copys ejecutivos + chips de control) y pasos en tarjetas modernas con iconografía, conectores de flujo y jerarquía visual más clara.
- **Home (`InstitutionalValue`) — rediseño ejecutivo**: nueva composición de alto impacto (panel principal corporativo en azul con microbloques estratégicos + tarjetas inferiores con iconografía y jerarquía tipográfica). Mejora percepción institucional y escaneabilidad UX.
- **Copy institucional (`institutionalValuePoints`)**: ajuste en “Continuidad y ahorro” para eliminar redundancia y mantener tono empresarial.
- **Home (`BusinessLines`) — clicable completo**: toda la tarjeta (imagen + copy + CTA) navega a la ruta dedicada de cada solución, con foco accesible.
- **Home (`BusinessLines`) — rediseño visual premium**: tarjetas remaquetadas a estilo institucional (imagen superior full-bleed + badge de línea, bloque de contenido limpio en blanco y CTA sólido corporativo). Se reduce efecto glass para una lectura más ejecutiva y ordenada.
- **Home (`BusinessLines`)**: tarjetas “Línea 01 / Línea 02” con fotografía de fondo (solar: `residencial.png`, respaldo: `hogares.png`) + overlay para legibilidad; el copy de respaldo se mantiene genérico (sin mención de marca).
- **Hero (marca)**: se elimina el nombre *Generac* de la ficha lateral del `Hero` (tono corporativo; el detalle y catálogo de marca vive en `/generadores`).
- **Hero (copy)**: título ajustado a “Especialistas en generación de energía” (ortografía institucional con acentos en “generación” y “energía”).
- **Arquitectura multipágina institucional**: la home queda como página corporativa corta (`/`) y se abren dos rutas dedicadas (`/paneles-solares`, `/generadores`) para separar profundidad técnica por línea de negocio.
- **Navegación corporativa real**: `Header` y `Footer` pasan a mapa de sitio por rutas (Inicio, Paneles solares, Generadores, Contacto) con CTA de contacto persistente.
- **Redistribución por dominio sin perder contenido**:
  - Solar: se conserva `Solar` y se agregan secciones dedicadas (`SolarHero`, beneficios, cómo funciona, monitoreo e integración).
  - Generadores: se conserva `GeneratorsCatalog` completo y se agregan secciones dedicadas (`GeneratorsHero`, beneficios y selección de solución).
  - Home: se introduce propuesta de valor institucional, líneas de negocio con CTA por ruta y bloque breve de metodología.
- **Componentes compartidos nuevos**: `sections/shared/ContactSection`, `BusinessLines`, `InstitutionalValue`, `HowWeWorkBrief` para evitar duplicación entre páginas.
- **Contenido estructurado por dominios** en `src/lib/content.ts`: nuevos arrays para institucional, solar y generadores; `solutions` ahora apunta a rutas dedicadas.
- **Pruebas actualizadas**: nuevo `src/lib/content.test.ts` para validar rutas de líneas de negocio, integridad de catálogo Generac y segmentación solar.

- **Scroll reveal (más perceptible, premium)**: `.reveal-t` con más recorrido (`translateY(40px)`), duración **0.9s**; `data-stagger` en pasos de **140ms** (0 / 140 / 280 / 420 para las cuatro líneas del encabezado típico, y 4–10 alineados al mismo ritmo). Fichas Generac: `.gen-reveal-stagger` **28px** + **0.8s**; `.gen-reveal-media` **36px** + **scale(0.96)** + **0.9s**. Sin bounce ni rotación.

- **Catálogo Generac (reveal del título)**: el `IntersectionObserver` de `RevealGroup` ya no envuelve el `<section>` entero (intro + fichas); solo el bloque del encabezado (`RevealGroup` como `div.max-w-3xl`) para que el stagger del eyebrow/título/párrafo se dispare al entrar **ese** bloque en viewport.

- **Catálogo Generac (scroll por ficha)**: `GeneratorArticleReveal` con `IntersectionObserver` por tarjeta; hijos `.gen-reveal-stagger` y `.gen-reveal-media` con `data-step` y retrasos en CSS (cascada texto → imagen al entrar la ficha en viewport). Borde entre columnas con `md:border-l` o `md:border-r` en filas alternas. Se retira `StaggeredFade` de la lista de fichas para evitar doble animación. `prefers-reduced-motion` respeta fin visible sin transición.

- **Scroll reveal (fix)**: `threshold: 0` en `RevealGroup` y `ScrollReveal` — con `0.2`, secciones muy altas (p. ej. catálogo Generac) a veces nunca alcanzaban 20% del rectángulo en viewport, el copy con `.reveal-t` quedaba en `opacity: 0` permanentemente.
- **Scroll reveal (landing)**: `RevealGroup` (IntersectionObserver) + clases `reveal-t` / `reveal-m` (translateY, escala sutil) y `data-stagger` 0–10 (~**140ms** entre pasos); `StaggeredFade` sincronizado con el padre + `activateAfterMs` (cards tras el copy) y `withMedia` (escala en tarjetas con foto). `ScrollReveal` retocado (700ms, translate 24px). Aplicado a soluciones, Generac, solar, cómo funciona, beneficios, segmentos, proceso, financiamiento, proyectos, CTA final, evaluación y FAQ. `prefers-reduced-motion` vía CSS y timeouts en 0s.

- **Hero + Open Graph**: titular con posicionamiento dual ("Especialistas en paneles solares y en generadores de respaldo"); copy que deja claro **venta e instalación** de cada línea, con integración en una sola obra solo cuando el caso lo requiere. `layout.tsx` Open Graph alineado (sin "sistema integrado" como eje).

- **Solar (titular)**: "Paneles solares a la medida de lo que realmente consumes" (lenguaje más claro que "Fotovoltaico dimensionado a tu consumo real").

- **Proceso**: tarjeta institucional con franja «Metodología de proyecto», grid 1/2/4 columnas con rejilla `gap-px`, paso con badge 01–04 (sin pictos en cajetín), intro y pie con copy de trazabilidad y CFE/Mejoravit. Fondo y acento bajo título alineados a otras secciones.

- **Cómo opera el sistema + Beneficios**: un solo contenedor con borde (menos “aire” entre celdas), padding de sección algo menor, raya de acento bajo el h2. Pasos 01–03 en una tarjeta con separadores; número en badge compacto y texto al lado. Beneficios: una tarjeta con grid denso 1/2/4 columnas, icono pequeño y bloque título+texto alineado.

- **Catálogo Generac (imágenes)**: marco de la columna con `flex` + `h-full` + `items-center` + `justify-center` y relleno lateral para centrar el bloque 4/3 en la ficha; `object-center` fijo en `next/image` (encuadre homogéneo en cada recuadro).

- **Catálogo Generac**: sección con fondo suave, encabezado con línea de acento, cada bloque en tarjeta (borde, sombra), índice `01 / 05` + pastilla de segmento, subtítulo (lead) y descripción separados, apartados "Especificaciones" y "Criterio de entrega", CTAs con jerarquía. Bloque *Comercial · Alta demanda*: tres series en mini-tarjetas y "Plataforma común" debajo. Panel de foto recortada al ancho de la columna, pie con marca + segmento (sin repetir título de la ficha) y acento en barra vertical.

- **Transiciones ligeras (scroll)**: `StaggeredFade` (IntersectionObserver) con opacidad + leve `translateY` y retraso en cascada en rejillas y listas: catálogo Generac, Aplicaciones FV, Proyectos, Cómo funciona, Soluciones y Beneficios. `ScrollReveal` con curva y duración alineadas (`~640ms`, menos desplazamiento). Imágenes de tarjeta (FV, Proyectos, Generac) con transición al hover ligeramente más larga (`duration-700`). `prefers-reduced-motion: reduce` respeta anulación vía CSS en `stagger-fade*`.

- **Solar — asistente B0** (`SolarInquiryPanel`): tres selectores (kWh bimestre, segmento, tarifa CFE) y mensaje estructurado vía `buildSolarInquiryMessage` + CTA “Enviar contexto por WhatsApp”; enlace con `WHATSAPP_SFV_QUICK` para chat sin rellenar. Sin API. `page.tsx` ya no pasa `whatsappHref` a `Solar`.

- **Solar (`#solar`)**: flujo en columna: primero copy + `solarSystemItems` + CTAs a ancho legible; debajo, franja “Aplicaciones” con `grid` `sm:grid-cols-2` `lg:grid-cols-3` (fila horizontal en desktop). Imágenes `aspect-[4/3]`, `sizes` 100/50/33vw. Rutas alineadas a nombres en `public/`: `residencial.png`, `comercial.png`, `industrial.png`.

- **WhatsApp (FAB)**: alineación vertical del contenido en la píldora: enlace con `flex` (no `inline-flex`), `leading-none`, `min-h-12`, `py-2.5`, icono y etiqueta en cajas `h-9` con `items-center` y `self-center`; SVG sin `translate-y-px`. Evita que icono y “Contacto” queden desplazados hacia arriba.

- **WhatsApp**: número de destino por defecto `+52 81 1411 8767` (`WHATSAPP_DEFAULT_E164` en `src/lib/whatsapp.ts`); anulable con `NEXT_PUBLIC_WHATSAPP_NUMBER` en el entorno. Afecta enlace de la home, CTA, formulario y FAB.

- **Catálogo Generac · `hogares.png`**: encuadre con `object-contain` + `object-center` y contenedor con `min-w-0` / `min-h-0` para que `next/image` con `fill` respete el `aspect-[4/3]` sin recorte agresivo; el resto de bloques sigue con `object-cover` por defecto. Opciones en `GeneratorBlock.image`: `fit`, `objectPositionClass`.

- **Imágenes (home)**: catálogo Generac usa `next/image` en el panel visual de cada bloque. Rutas en `public/`: `hogares.png`, `liquid.png`, `industriales.png`, `moviles.png`, `complemetarios.png` (coinciden con el nombre de archivos aportados). Proyectos «Casos por segmento» con `residencia.png`, `comercio.png`, `industria.png` (industria ligera). Datos de imagen y `alt` en `src/lib/content.ts`.

- **Hero** (tarjeta «Qué incluye»): `backdrop-blur-xl` + `backdrop-saturate-125`, gradiente `slate-950` semitransparente y borde más visible para que el texto no se pierda sobre el video; microcopy con contraste ligeramente mayor.

- **Auditoría de pulido (home)**: pasada quirúrgica de refinamiento sin reestructurar.
  - Eliminada sección `ValueProposition` (redundante con `Solutions` y `HowItWorks`); la home gana ritmo sin perder mensaje.
  - `Hero`: columna principal ampliada (`max-w-[40rem]`), headline reescrito ("Paneles solares y sistemas de respaldo, diseñados como un solo proyecto"), eliminado CTA terciario "o escribir por WhatsApp" (redundante con FAB), microcopy técnico en tarjeta lateral (Interconexión CFE, A.T.S., BESS) reemplaza al eco del propuesto, kicker "ENERGRUN · Monterrey, N.L.", scroll inferior "Ver soluciones".
  - `Solutions`: título más directo ("Tres líneas con un mismo criterio técnico").
  - `GeneratorsCatalog`: tags acortados a categorías limpias (Residencial · Comercial ligero, Comercial · Alta demanda, Industrial · Operación crítica, Móvil · Proyectos temporales, Automatización · Almacenamiento); tabla de specs rediseñada a grid flexible 2-col con label/valor tipográfico (sin columna rígida de 11rem); visual institucional del generador reescrito con layout inferior + tag, sin la frase "Imagen disponible bajo solicitud".
  - `Solar`: párrafo DAC condensado; cards internas sustituidas por grid tipográfico 2-col con border-top, más institucional.
  - `HowItWorks`: título diferenciado ("Cómo opera el sistema"); línea de conexión recalibrada al centro del badge (`top-[2.25rem]`).
  - `Benefits`: reducido de 6 a 4 ítems (eliminados "Menor exposición a interrupciones", "Soluciones a medida", "Mayor control energético" fusionado con "Monitoreo"), grid a 4 columnas.
  - `Segments`: copy introductorio recortado.
  - `Process`: badges de paso simplificadas (monocromo institucional), separador lateral más fino.
  - `Financing`: quitada la card dentro de card; ahora bloque de 2 columnas tipográfico con divisores, más discreto y consistente con el resto.
  - `FinalCTA`: ancho a `max-w-7xl`; CTA principal cambia a "Hablar por WhatsApp" para no duplicar el llamado del formulario que queda justo encima.
  - `Footer`: ancho a `max-w-7xl` para alinear con el resto de la home.
  - Consistencia: h2 a `text-[2.15rem]` en todas las secciones, kickers con `tracking-[0.22em]`, botones internos a `h-11`, opacidades arbitrarias con formato `/[0.06]` donde aplicaba.

- **Refactor institucional (home)**: rediseño completo de la landing como sitio corporativo premium. Nueva estructura modular en `src/app/_components/sections/*` (Hero, ValueProposition, Solutions, GeneratorsCatalog, Solar, HowItWorks, Benefits, Segments, Process, Financing, Projects, FinalCTA, Footer) con datos centralizados en `src/lib/content.ts`.
- **Hero** a dos columnas: titular directo (paneles solares + respaldo), CTAs “Solicitar evaluación” / “Ver soluciones”, microcopy de cobertura y franja de confianza (energía solar, respaldo automático, integración, Monterrey); tarjeta lateral sobria con resumen del sistema.
- **Header** con menú nuevo (Soluciones, Cómo funciona, Generadores, Paneles solares, Proyectos, Contacto), CTA institucional “Solicitar evaluación” y menú móvil accesible.
- **Catálogo Generac** (según PDF): bloques alternados para residencial/comercial (Guardian Air Cooled 10–26 kW), liquid cooled/comercial (Protector 32–80, Commercial 100–150, High Speed 25–60), industrial (14 kW–3.1 MW), móviles (30–522 kW) y complementarios (Smart Switch 100–400A, RTS 600–800A, BESS 30/60 kW, GLT Hybrid). Cada bloque con fichas técnicas, features y CTAs.
- **Paneles solares**: sección dedicada con contexto CFE/DAC, sub-bloques Residencial / Comercial / Industria ligera y componentes de sistema.
- **Cómo funciona, Beneficios, Segmentos, Proceso, Mejoravit (discreto) y Proyectos (placeholder estructurado)** como secciones independientes y ordenadas.
- **CTA final** en bloque oscuro institucional y **Footer** con mapa del sitio y cobertura.


- Hero: **centrado a ancho** (`max-w-6xl`), overlay radial+gradiente para leer en el centro; oferta en grande / beneficio secundario; cuerpo tipo banda industrial; CTAs y píldoras centrados; CTA de scroll a `#dos-soluciones` + `hero-anim-6`.
- Secciones **Enfoque** e **Integración solar + respaldo**: copy reescrito (tono institucional, frases directas, Mejoravit como facilitador de pago, viñetas de criterio FV / respaldo / obra).
- **Deep dives de producto**: nueva sección `#solar` (contexto CFE / tarifa DAC / contrato CIL / medición bidireccional, componentes, cifras de referencia y CTAs) y nueva sección `#respaldo` (apagones MX, A.T.S., combustibles GN/GLP, rangos de referencia 7–150+ kW, mantenimiento, métricas y CTAs). `#dos-soluciones` queda como intro con CTAs a cada deep dive.
- **FAQ ampliado**: 11 preguntas institucionales (CFE/DAC, interconexión, dimensionamiento FV, arranque A.T.S., combustibles, mantenimiento, convivencia FV+respaldo, Mejoravit).
- **Enfoque energía integral**: hero y beneficio bajo 3 vías (ahorro FV, respaldo Generac, pago Mejoravit), nuevas secciones «Dos soluciones, un solo sistema energético» (dos columnas) e «Integración solar + respaldo»; tercera malla «Tres vías, un criterio»; Mejoravit posicionado como facilitador de compra; metadatos, FAQ, formulario, header y copy de cierre ajustados.
- **Copy institucional**: reescritura de secciones (hero, soluciones, criterios, proceso, Mejoravit, formulario, CTA, FAQ, footer, metadata y mensaje base de WhatsApp) con tono técnico, Generac, automatización, continuidad y criterio IMSS, evitando frases de marketing genérico.
- **HERO (premium, 2 columnas)**: copy alineado a la izquierda, headline con acentos en verde de marca, párrafo y CTAs (WhatsApp sólido + evaluación outline `rounded-full`), fila de 4 beneficios con iconos stroke, video full-bleed con `object-position` hacia el área visual derecha, overlay `linear-gradient(to right, 0.7 → 0.1)` y entradas escalonadas (`.hero-anim-1`…`5`).
- **Rediseño institucional (2026)**: estructura en claro (hero sin bloques con blur pesado, soluciones, “Por qué ENERGRUN”, proceso con separadores, Mejoravit destacado, evaluación con formulario, CTA final, FAQ mínima). Reveal al scroll (fade + translate) con respeto a `prefers-reduced-motion`, utilidades de botón/tarjeta en CSS y header que pasa a barra clara bajo scroll.
- Inicialización del sitio ENERGRUN (landing enfocada a leads y Mejoravit).
- Adaptación completa de UI a identidad ENERGRUN (paleta azul/verde, fondo claro, CTAs).
- HERO con video de fondo (`/video_hero.mp4`) con overlay azul→verde sutil para conversión.
- Ajuste del HERO para que el video sea protagonista (overlay más ligero, fade inferior, glassmorphism).
- Ajuste del HERO para máxima visibilidad del video (sin velo blanco) y eliminación del bloque “Casa protegida”.
- Header: logo real desde `public/logo.png` (con fallback).
- Hero: el card principal también reproduce el video de fondo del hero.
- Hero: refactor a **un solo video** como background full-viewport (100vw/100vh) con overlay y contenido encima.
- Hero: rediseño premium (video visible, overlay gradiente sutil, glassmorphism, tipografía en blanco, animación suave).
- Header: rediseño transparente tipo premium (fixed sobre video, blur al hacer scroll, links en blanco).
- Secciones post-hero: rediseño premium con microinteracciones, iconografía, fondos suaves y transiciones.

