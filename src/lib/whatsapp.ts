import type { Lead } from "@/lib/lead";

/** E.164 sin +: 52 (MX) + 10 dígitos — 81 1411 8767. Puede anularse con `NEXT_PUBLIC_WHATSAPP_NUMBER`. */
export const WHATSAPP_DEFAULT_E164 = "528114118767";

function normalizeWhatsAppNumber(raw: string) {
  return raw.replace(/[^\d]/g, "");
}

export function buildWhatsAppMessage(lead?: Partial<Lead>) {
  const lines: string[] = [
    "ENERGRÜN — Contacto vía web. Tema: fotovoltaico (ahorro) y/o respaldo (Generac), más vía de pago (Mejoravit) si aplica.",
  ];

  if (lead?.nombre) lines.push(`Nombre: ${lead.nombre}`);
  if (lead?.telefono) lines.push(`Teléfono: ${lead.telefono}`);
  if (typeof lead?.cotizaEnIMSS === "boolean") {
    lines.push(`¿Cotiza en IMSS?: ${lead.cotizaEnIMSS ? "Sí" : "No"}`);
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
  kwhBimestral: "0-300" | "300-800" | "800-2000" | "2000-5000" | "5000+";
  segmento: "residencial" | "comercial" | "industrial";
  contextoTarifa: "con-subsidio" | "dac" | "gdm" | "no-se";
};

const KWH_BIM: Record<SolarInquiry["kwhBimestral"], string> = {
  "0-300": "hasta 300 kWh (bimestre)",
  "300-800": "300 a 800 kWh (bimestre)",
  "800-2000": "800 a 2 000 kWh (bimestre)",
  "2000-5000": "2 000 a 5 000 kWh (bimestre)",
  "5000+": "más de 5 000 kWh (bimestre)",
};

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
  "ENERGRÜN — Me interesa cotizar fotovoltaico (sin llenar el asistente).",
  "Zona: Monterrey y área metropolitana.",
].join("\n");

/**
 * Mensaje estructurado para cotizar FV con contexto CFE, sin reemplazar evaluación técnica.
 */
export function buildSolarInquiryMessage(inquiry: SolarInquiry): string {
  return [
    "ENERGRÜN — Interés en fotovoltaico (asistente en web).",
    `Consumo aprox. bimestral (kWh, estimado): ${KWH_BIM[inquiry.kwhBimestral]}.`,
    `Tipo de inmueble: ${SOL_SEG[inquiry.segmento]}.`,
    `Contexto tarifario: ${SOL_TAR[inquiry.contextoTarifa]}.`,
    "Cifras orientativas: la oferta requiere recibos CFE 12m y criterio de interconexión (medidor bidireccional, DAC, etc.).",
    "Zona: Monterrey y área metropolitana.",
  ].join("\n");
}

