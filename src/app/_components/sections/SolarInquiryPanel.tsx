"use client";

import { useState } from "react";
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
  costoBimestralMxn: 2500,
  segmento: "residencial",
  contextoTarifa: "no-se",
};

const COST_MIN = 200;
const COST_MAX = 120000;
const COST_SLIDER_STEP = 50;
const COST_QUICK_VALUES = [1000, 2500, 5000, 10000, 25000, 50000, 100000] as const;

function clampCost(value: number): number {
  if (!Number.isFinite(value)) return COST_MIN;
  return Math.min(COST_MAX, Math.max(COST_MIN, Math.round(value)));
}

function formatMxn(amount: number): string {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function SolarInquiryPanel() {
  const [inquiry, setInquiry] = useState<SolarInquiry>(DEFAULT_INQUIRY);
  const currentCost = clampCost(inquiry.costoBimestralMxn);
  const [costInput, setCostInput] = useState<string>(String(currentCost));
  const [isEditingCost, setIsEditingCost] = useState(false);

  const contextualHref = buildWhatsAppUrl({
    phoneNumber: DEFAULT_WHATSAPP,
    message: buildSolarInquiryMessage(inquiry),
  });

  const quickHref = buildWhatsAppUrl({
    phoneNumber: DEFAULT_WHATSAPP,
    message: WHATSAPP_SFV_QUICK,
  });

  return (
    <div className="mt-8 max-w-2xl rounded-2xl border border-[#1E4D8C]/20 bg-gradient-to-b from-[#1E4D8C]/[0.04] to-slate-50/60 p-5 shadow-sm sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1E4D8C]">
        Contexto para tu consulta
      </p>
      <h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
        Tres datos orientativos (pago, segmento, tarifa)
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        Afinamos el primer contacto. No es una cotización numérica: el
        dimensionamiento se confirma con recibos CFE reales.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="min-w-0 sm:col-span-2">
          <label
            className="block text-xs font-semibold text-slate-600"
            htmlFor="solar-costo"
          >
            ¿Cuánto pagas de luz por bimestre? (aprox.)
          </label>
          <div className="mt-2 rounded-xl border border-slate-200/90 bg-white px-3.5 py-3 shadow-sm">
            <div className="flex items-center justify-between gap-3 text-[11px] text-slate-500">
              <span>Pago menor</span>
              <span className="rounded-md bg-[#1E4D8C]/10 px-2 py-0.5 text-xs font-semibold text-[#1E4D8C]">
                {formatMxn(currentCost)}
              </span>
              <span>Pago mayor</span>
            </div>
            <input
              id="solar-costo"
              type="range"
              min={COST_MIN}
              max={COST_MAX}
              step={COST_SLIDER_STEP}
              value={currentCost}
              className="mt-3 h-2 w-full cursor-pointer accent-[#1E4D8C]"
              onChange={(e) => {
                const nextCost = clampCost(Number(e.target.value));
                setInquiry((s) => ({
                  ...s,
                  costoBimestralMxn: nextCost,
                }));
                if (!isEditingCost) setCostInput(String(nextCost));
              }}
              aria-valuetext={formatMxn(currentCost)}
            />
            <div className="mt-3 grid grid-cols-4 gap-1 sm:grid-cols-7">
              {COST_QUICK_VALUES.map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => {
                    setInquiry((s) => ({ ...s, costoBimestralMxn: value }));
                    if (!isEditingCost) setCostInput(String(value));
                  }}
                  className={[
                    "rounded-md border px-1.5 py-1 text-[10px] font-medium transition",
                    currentCost === value
                      ? "border-[#1E4D8C]/40 bg-[#1E4D8C]/10 text-[#1E4D8C]"
                      : "border-slate-200/90 bg-slate-50 text-slate-600 hover:border-[#1E4D8C]/25 hover:text-[#1E4D8C]",
                  ].join(" ")}
                >
                  {formatMxn(value)}
                </button>
              ))}
            </div>
            <div className="mt-3">
              <label
                className="block text-[11px] font-medium text-slate-600"
                htmlFor="solar-costo-input"
              >
                O escríbelo exacto (MXN por bimestre)
              </label>
              <input
                id="solar-costo-input"
                type="number"
                min={COST_MIN}
                max={COST_MAX}
                step={1}
                inputMode="numeric"
                value={costInput}
                onFocus={() => setIsEditingCost(true)}
                onChange={(e) => {
                  setCostInput(e.target.value);
                }}
                onBlur={() => {
                  setIsEditingCost(false);
                  if (!costInput.trim()) {
                    setCostInput(String(currentCost));
                    return;
                  }
                  const raw = Number(costInput);
                  if (!Number.isFinite(raw)) {
                    setCostInput(String(currentCost));
                    return;
                  }
                  const next = clampCost(raw);
                  setInquiry((s) => ({ ...s, costoBimestralMxn: next }));
                  setCostInput(String(next));
                }}
                onKeyDown={(e) => {
                  if (e.key !== "Enter") return;
                  (e.currentTarget as HTMLInputElement).blur();
                }}
                className="mt-1.5 w-full rounded-lg border border-slate-200/90 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm focus:border-[#1E4D8C] focus:outline-none focus:ring-2 focus:ring-[#1E4D8C]/20"
              />
              <p className="mt-1 text-[11px] text-slate-500">
                Rango sugerido: {formatMxn(COST_MIN)} a {formatMxn(COST_MAX)}.
              </p>
            </div>
            <div className="mt-2 grid grid-cols-5 text-center text-[10px] font-medium text-slate-500">
              {[COST_MIN, 1000, 5000, 25000, COST_MAX].map((value) => (
                <span key={value}>{formatMxn(value)}</span>
              ))}
            </div>
          </div>
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
