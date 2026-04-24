## API / Contratos

### Estado actual (Bloque B0)
- **No se exponen endpoints** (no hay API propia).
- La generación de leads se realiza con **redirección a WhatsApp** desde el cliente.

### Contrato de lead (cliente → WhatsApp)
Campos del formulario:
- `nombre`: string (requerido)
- `telefono`: string (requerido)
- `cotizaEnIMSS`: boolean (requerido)

Mensaje precargado en WhatsApp incluye:
- Nombre
- Teléfono
- Cotiza en IMSS (Sí/No)
- Interés (Generador / Solar / Híbrido; opcional en iteraciones futuras)

### Asistente FV (sección Solar, solo cliente, B0)
- Sin endpoints nuevos: el usuario elige rango aprox. de kWh bimestral, segmento (residencial / comercial / industrial) y contexto de tarifa CFE; se arma texto con `buildSolarInquiryMessage` y se abre `wa.me` con el mismo criterio que el formulario.
- Enlace “WhatsApp sin rellenar” usa el texto corto `WHATSAPP_SFV_QUICK` (no el mensaje largo de la home).
- **No** sustituye evaluación técnica ni recibos reales: el copy lo indica; la cotización formal sigue según levantamiento.

