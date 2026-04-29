import type { Lead } from "@/lib/lead";

/** E.164 sin +: 52 (MX) + 10 dígitos — 81 1411 8767. Puede anularse con `NEXT_PUBLIC_WHATSAPP_NUMBER`. */
export const WHATSAPP_DEFAULT_E164 = "528114118767";

function normalizeWhatsAppNumber(raw: string) {
  return raw.replace(/[^\d]/g, "");
}

export function buildWhatsAppMessage(lead?: Partial<Lead>) {
  const lines: string[] = [
    "ENERGRUN — Contacto vía web. Tema: fotovoltaico (ahorro) y/o respaldo (Generac), más vía de pago (Mejoravit) si aplica.",
  ];

  if (lead?.nombre) lines.push(`Nombre: ${lead.nombre}`);
  if (lead?.telefono) lines.push(`Teléfono: ${lead.telefono}`);
  if (typeof lead?.cotizaEnIMSS === "boolean") {
    lines.push(`¿Cotiza en IMSS?: ${lead.cotizaEnIMSS ? "Sí" : "No"}`);
  }
  if (lead?.cotizaEnIMSS && lead.numeroImss) {
    const imss = lead.numeroImss.replace(/\D/g, "");
    if (imss) lines.push(`Número IMSS / afiliación: ${imss}`);
  }

  lines.push("Zona: Monterrey y área metropolitana");
  lines.push("Solicito revisión de requisitos Mejoravit (si aplica).");

  return lines.join("\n");
}

export function buildWhatsAppUrl(params: {
  phoneNumber: string;
  message: string;
}) {
  const phone = normalizeWhatsAppNumber(params.phoneNumber);
  const text = encodeURIComponent(params.message);
  return `https://wa.me/${phone}?text=${text}`;
}

/** Datos mínimos para enriquecer el mensaje FV hacia WhatsApp (solo cliente, B0). */
export type SolarInquiry = {
  costoBimestralMxn: number;
  segmento: "residencial" | "comercial" | "industrial";
  contextoTarifa: "con-subsidio" | "dac" | "gdm" | "no-se";
};

function formatMxn(amount: number): string {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(amount);
}

const SOL_SEG: Record<SolarInquiry["segmento"], string> = {
  residencial: "residencial",
  comercial: "comercial / oficina / comercio",
  industrial: "industria ligera o nave",
};

const SOL_TAR: Record<SolarInquiry["contextoTarifa"], string> = {
  "con-subsidio": "doméstica con subsidio (aprox.)",
  dac: "DAC o alto consumo (aprox.)",
  gdm: "PDBT / GDM / negocio (aprox.)",
  "no-se": "aún no lo tengo claro / revisar con recibos",
};

/** Enlace “rápido” FV (sin rellenar asistente). Misma capa B0, solo texto más corto. */
export const WHATSAPP_SFV_QUICK = [
  "ENERGRUN — Me interesa cotizar fotovoltaico (sin llenar el asistente).",
  "Zona: Monterrey y área metropolitana.",
].join("\n");

/**
 * Mensaje estructurado para cotizar FV con contexto CFE, sin reemplazar evaluación técnica.
 */
export function buildSolarInquiryMessage(inquiry: SolarInquiry): string {
  const pagoBimestral = Number.isFinite(inquiry.costoBimestralMxn)
    ? Math.max(0, Math.round(inquiry.costoBimestralMxn))
    : 0;

  return [
    "ENERGRUN — Interés en fotovoltaico (asistente en web).",
    `Pago aprox. de luz por bimestre (estimado): ${formatMxn(pagoBimestral)}.`,
    `Tipo de inmueble: ${SOL_SEG[inquiry.segmento]}.`,
    `Contexto tarifario: ${SOL_TAR[inquiry.contextoTarifa]}.`,
    "Cifras orientativas: la oferta requiere recibos CFE 12m y criterio de interconexión (medidor bidireccional, DAC, etc.).",
    "Zona: Monterrey y área metropolitana.",
  ].join("\n");
}

