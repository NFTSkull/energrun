## API / Contratos

### Estado actual (Bloque B0)
- **No se exponen endpoints** (no hay API propia).
- La generación de leads se realiza con **redirección a WhatsApp** desde el cliente.

### Contrato de lead (cliente → WhatsApp)
Campos del formulario:
- `nombre`: string (requerido)
- `telefono`: string (requerido, normalizado a dígitos/+, mín. 10 dígitos)
- `cotizaEnIMSS`: boolean (requerido)
- `numeroImss`: string (opcional en el esquema; **obligatorio** si `cotizaEnIMSS` es `true`, mínimo 8 dígitos numéricos en la validación `leadSchema`)

Mensaje precargado en WhatsApp incluye:
- Nombre
- Teléfono
- Cotiza en IMSS (Sí/No)
- Número IMSS / afiliación (solo si cotiza en IMSS y se capturó)
- Interés (Generador / Solar / Híbrido; opcional en iteraciones futuras)

### Asistente FV (sección Solar, solo cliente, B0)
- Sin endpoints nuevos: el usuario elige rango aprox. de kWh bimestral, segmento (residencial / comercial / industrial) y contexto de tarifa CFE; se arma texto con `buildSolarInquiryMessage` y se abre `wa.me` con el mismo criterio que el formulario.
- Enlace “WhatsApp sin rellenar” usa el texto corto `WHATSAPP_SFV_QUICK` (no el mensaje largo de la home).
- **No** sustituye evaluación técnica ni recibos reales: el copy lo indica; la cotización formal sigue según levantamiento.

### Asistente de contacto (FAB WhatsApp, solo cliente, B0)
- Sin endpoints nuevos: el botón flotante abre un mini-chat guiado y al finalizar redirige a `wa.me` con resumen estructurado.
- Flujo guiado:
  - `topic`: `"solar" | "generadores" | "integrado"`
  - `faqId`: identificador de duda dentro del tema seleccionado
  - Si `topic` es `"generadores"` o `"integrado"`:
    - `generatorType`: `"residencial" | "comercial" | "industrial" | "movil" | "complementario" | "noSe"`
    - `fuelType`: `"gasLp" | "gasNatural" | "diesel" | "noSe"`
    - `backupPriority`: `"total" | "criticas" | "contingencia" | "noSe"`
  - `segment`: `"residencial" | "comercial" | "industrial"`
  - `cotizaEnIMSS`: `"si" | "no"`
- Validación: `contactChatbotLeadSchema` (Zod) antes de construir mensaje final, incluyendo regla condicional para requerir perfilado de generador cuando aplique.
- Fallback: opción “WhatsApp directo” conserva el mensaje general de contacto.

