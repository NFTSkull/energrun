## Arquitectura

### Stack
- **Next.js (App Router)** + **React** + **TypeScript**
- **Tailwind CSS v4** (utilidades vía `@import "tailwindcss";` en `globals.css`)

### Enfoque
- Sitio estático/SSR simple: **sin base de datos** y **sin API propia**.
- La captación de leads se realiza mediante:
  - **Links a WhatsApp** (con texto prellenado).
  - **Formulario** que valida datos en cliente y redirige a WhatsApp.

### Estructura esperada
- `src/app/page.tsx`: landing principal
- `src/app/layout.tsx`: SEO y metadata
- `src/app/_components/*`: componentes UI del sitio
- `src/lib/*`: utilidades (e.g. builder de links a WhatsApp, validaciones)

