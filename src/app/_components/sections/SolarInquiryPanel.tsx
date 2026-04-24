"use client";

import { useMemo, useState } from "react";
import {
  buildSolarInquiryMessage,
  buildWhatsAppUrl,
  type SolarInquiry,
  WHATSAPP_DEFAULT_E164,
  WHATSAPP_SFV_QUICK,
} from "@/lib/whatsapp";

const DEFAULT_WHATSAPP =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? WHATSAPP_DEFAULT_E164;

const DEFAULT_INQUIRY: SolarInquiry = {
  kwhBimestral: "300-800",
  segmento: "residencial",
  contextoTarifa: "no-se",
};

export function SolarInquiryPanel() {
  const [inquiry, setInquiry] = useState<SolarInquiry>(DEFAULT_INQUIRY);

  const contextualHref = useMemo(() => {
    const message = buildSolarInquiryMessage(inquiry);
    return buildWhatsAppUrl({
      phoneNumber: DEFAULT_WHATSAPP,
      message,
    });
  }, [inquiry]);

  const quickHref = useMemo(
    () =>
      buildWhatsAppUrl({
        phoneNumber: DEFAULT_WHATSAPP,
        message: WHATSAPP_SFV_QUICK,
      }),
    [],
  );

  return (
    <div className="mt-8 max-w-2xl rounded-2xl border border-[#1E4D8C]/20 bg-gradient-to-b from-[#1E4D8C]/[0.04] to-slate-50/60 p-5 shadow-sm sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1E4D8C]">
        Contexto para tu consulta
      </p>
      <h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
        Tres datos orientativos (consumo, segmento, tarifa)
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        Afinamos el primer contacto. No es una cotización numérica: el
        dimensionamiento se confirma con recibos CFE reales.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        <div className="min-w-0 sm:col-span-1">
          <label
            className="block text-xs font-semibold text-slate-600"
            htmlFor="solar-kwh"
          >
            kWh aprox. por bimestre
          </label>
          <select
            id="solar-kwh"
            className="mt-1.5 w-full rounded-lg border border-slate-200/90 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm focus:border-[#1E4D8C] focus:outline-none focus:ring-2 focus:ring-[#1E4D8C]/20"
            value={inquiry.kwhBimestral}
            onChange={(e) =>
              setInquiry((s) => ({
                ...s,
                kwhBimestral: e.target.value as SolarInquiry["kwhBimestral"],
              }))
            }
          >
            <option value="0-300">Hasta 300 kWh</option>
            <option value="300-800">300 a 800 kWh</option>
            <option value="800-2000">800 a 2 000 kWh</option>
            <option value="2000-5000">2 000 a 5 000 kWh</option>
            <option value="5000+">Más de 5 000 kWh</option>
          </select>
        </div>
        <div className="min-w-0 sm:col-span-1">
          <label
            className="block text-xs font-semibold text-slate-600"
            htmlFor="solar-seg"
          >
            Tipo de inmueble
          </label>
          <select
            id="solar-seg"
            className="mt-1.5 w-full rounded-lg border border-slate-200/90 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm focus:border-[#1E4D8C] focus:outline-none focus:ring-2 focus:ring-[#1E4D8C]/20"
            value={inquiry.segmento}
            onChange={(e) =>
              setInquiry((s) => ({
                ...s,
                segmento: e.target.value as SolarInquiry["segmento"],
              }))
            }
          >
            <option value="residencial">Residencial</option>
            <option value="comercial">Comercial / oficina</option>
            <option value="industrial">Industria / nave</option>
          </select>
        </div>
        <div className="min-w-0 sm:col-span-1">
          <label
            className="block text-xs font-semibold text-slate-600"
            htmlFor="solar-tar"
          >
            Tarifa (referencia CFE)
          </label>
          <select
            id="solar-tar"
            className="mt-1.5 w-full rounded-lg border border-slate-200/90 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm focus:border-[#1E4D8C] focus:outline-none focus:ring-2 focus:ring-[#1E4D8C]/20"
            value={inquiry.contextoTarifa}
            onChange={(e) =>
              setInquiry((s) => ({
                ...s,
                contextoTarifa: e.target
                  .value as SolarInquiry["contextoTarifa"],
              }))
            }
          >
            <option value="con-subsidio">Doméstica con subsidio</option>
            <option value="dac">DAC / alto consumo</option>
            <option value="gdm">PDBT / GDM (negocio)</option>
            <option value="no-se">No estoy seguro aún</option>
          </select>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <a
          href={contextualHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 shrink-0 items-center justify-center rounded-lg bg-[#1E4D8C] px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#17407a]"
        >
          Enviar contexto por WhatsApp
        </a>
        <a
          href={quickHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center text-sm font-medium text-slate-600 underline decoration-slate-300 underline-offset-4 transition hover:text-[#1E4D8C] sm:text-left"
        >
          WhatsApp sin rellenar
        </a>
      </div>
    </div>
  );
}
