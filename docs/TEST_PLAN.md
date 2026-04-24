## Test plan (Bloque B0)

### Automatizado
- **Unit tests**:
  - Construcción del link de WhatsApp (encoding + mensaje).
  - Validación de formulario (campos requeridos).
  - Construcción/validación del mensaje del mini-chat de contacto (`contactChatbotLeadSchema` + resumen para `wa.me`), incluyendo validaciones condicionales de perfilado para `generadores`/`integrado`.
- **Component tests** (React):
  - Render del formulario y comportamiento de submit (genera URL esperada).

### Manual (rápido)
- Verificar responsive (mobile first).
- Click en CTA WhatsApp abre `wa.me` con texto correcto.
- Submit del formulario abre WhatsApp con mensaje precargado.

