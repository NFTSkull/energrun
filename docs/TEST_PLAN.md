## Test plan (Bloque B0)

### Automatizado
- **Unit tests**:
  - Construcción del link de WhatsApp (encoding + mensaje).
  - Validación de formulario (campos requeridos).
- **Component tests** (React):
  - Render del formulario y comportamiento de submit (genera URL esperada).

### Manual (rápido)
- Verificar responsive (mobile first).
- Click en CTA WhatsApp abre `wa.me` con texto correcto.
- Submit del formulario abre WhatsApp con mensaje precargado.

