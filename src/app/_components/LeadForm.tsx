"use client";

import { useMemo, useState } from "react";
import { leadSchema, type LeadInput } from "@/lib/lead";
import {
  buildWhatsAppMessage,
  buildWhatsAppUrl,
  WHATSAPP_DEFAULT_E164,
} from "@/lib/whatsapp";

const DEFAULT_WHATSAPP =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? WHATSAPP_DEFAULT_E164;

type FieldErrors = Partial<Record<keyof LeadInput, string>>;

export function LeadForm(props: { variant?: "compact" | "full" }) {
  const variant = props.variant ?? "full";

  const [values, setValues] = useState<LeadInput>({
    nombre: "",
    telefono: "",
    cotizaEnIMSS: true,
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const title = useMemo(() => {
    if (variant === "compact") return "Canal de contacto";
    return "Canal de contacto";
  }, [variant]);

  function update<K extends keyof LeadInput>(key: K, value: LeadInput[K]) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  function validate(next: LeadInput) {
    const parsed = leadSchema.safeParse(next);
    if (parsed.success) return { ok: true as const, data: parsed.data };

    const fieldErrors: FieldErrors = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof LeadInput | undefined;
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { ok: false as const, errors: fieldErrors };
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const result = validate(values);
    if (!result.ok) {
      setErrors(result.errors);
      setIsSubmitting(false);
      return;
    }

    const message = buildWhatsAppMessage(result.data);
    const href = buildWhatsAppUrl({
      phoneNumber: DEFAULT_WHATSAPP,
      message,
    });

    window.open(href, "_blank", "noopener,noreferrer");
    setIsSubmitting(false);
  }

  return (
    <section
      className="rounded-2xl border border-[#1E4D8C]/10 bg-white p-6 shadow-sm"
      aria-label="Formulario de lead"
    >
      <div className="mb-4">
        <h3
          className="text-base font-semibold tracking-tight"
          style={{ color: "var(--text-dark)" }}
        >
          {title}
        </h3>
        <p className="mt-1 text-sm" style={{ color: "var(--text-light)" }}>
          Indique en el hilo: interés en fotovoltaico, en respaldo (Generac) o
          integración, y vía de pago (Mejoravit) si aplica. El envío abre WhatsApp
          con el mensaje estructurado.
        </p>
      </div>

      <form onSubmit={onSubmit} className="grid gap-3">
        <label className="grid gap-1">
          <span
            className="text-sm font-medium"
            style={{ color: "var(--text-dark)" }}
          >
            Nombre
          </span>
          <input
            value={values.nombre}
            onChange={(e) => update("nombre", e.target.value)}
            placeholder="Nombre o razón social"
            className="h-11 rounded-xl border bg-white px-4 text-sm outline-none transition focus:ring-4 focus:ring-[#3FA9F5]/25"
            style={{
              borderColor: "rgba(30,77,140,0.18)",
              color: "var(--text-dark)",
              boxShadow: "0 0 0 0 rgba(63,169,245,0)",
            }}
            autoComplete="name"
          />
          {errors.nombre ? (
            <span className="text-xs text-rose-600">{errors.nombre}</span>
          ) : null}
        </label>

        <label className="grid gap-1">
          <span
            className="text-sm font-medium"
            style={{ color: "var(--text-dark)" }}
          >
            Teléfono
          </span>
          <input
            value={values.telefono}
            onChange={(e) => update("telefono", e.target.value)}
            placeholder="Ej. 81 1234 5678"
            className="h-11 rounded-xl border bg-white px-4 text-sm outline-none transition focus:ring-4 focus:ring-[#3FA9F5]/25"
            style={{
              borderColor: "rgba(30,77,140,0.18)",
              color: "var(--text-dark)",
            }}
            inputMode="tel"
            autoComplete="tel"
          />
          {errors.telefono ? (
            <span className="text-xs text-rose-600">{errors.telefono}</span>
          ) : (
            <span className="text-xs" style={{ color: "var(--text-light)" }}>
              Se unirá a la plantilla: alcance, IMSS, zona (MTY/AM).
            </span>
          )}
        </label>

        <fieldset
          className="grid gap-2 rounded-xl border bg-white/70 px-4 py-3"
          style={{ borderColor: "rgba(30,77,140,0.14)" }}
        >
          <legend
            className="px-1 text-sm font-medium"
            style={{ color: "var(--text-dark)" }}
          >
            Cotiza en el IMSS (criterio Mejoravit)
          </legend>
          <div className="flex items-center gap-4">
            <label
              className="inline-flex items-center gap-2 text-sm"
              style={{ color: "var(--text-light)" }}
            >
              <input
                type="radio"
                name="imss"
                checked={values.cotizaEnIMSS === true}
                onChange={() => update("cotizaEnIMSS", true)}
              />
              Sí
            </label>
            <label
              className="inline-flex items-center gap-2 text-sm"
              style={{ color: "var(--text-light)" }}
            >
              <input
                type="radio"
                name="imss"
                checked={values.cotizaEnIMSS === false}
                onChange={() => update("cotizaEnIMSS", false)}
              />
              No
            </label>
          </div>
        </fieldset>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-1 inline-flex h-11 items-center justify-center rounded-xl bg-[#6CC04A] px-4 text-sm font-semibold text-white shadow-sm shadow-[#6CC04A]/25 transition hover:bg-[#3BAA3F] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Abriendo WhatsApp…" : "Enviar y abrir WhatsApp"}
        </button>

        <p className="text-xs" style={{ color: "var(--text-light)" }}>
          Tras enviar, se abre el cliente con el mensaje; no reemplaza la visita
          técnica.
        </p>
      </form>
    </section>
  );
}

