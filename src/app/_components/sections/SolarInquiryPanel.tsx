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
  periodoPago: "bimestral",
  costoBimestralMxn: 2500,
  costoMensualMxn: 1250,
  segmento: "residencial",
  contextoTarifa: "no-se",
};

const COST_CONFIG = {
  bimestral: {
    label: "Bimestre",
    min: 200,
    max: 120000,
    step: 50,
    quickValues: [1000, 2500, 5000, 10000, 25000, 50000, 100000] as const,
  },
  mensual: {
    label: "Mensual",
    min: 100,
    max: 60000,
    step: 50,
    quickValues: [500, 1250, 2500, 5000, 12500, 25000, 50000] as const,
  },
} as const;

function clampCost(value: number, min: number, max: number): number {
  if (!Number.isFinite(value)) return min;
  return Math.min(max, Math.max(min, Math.round(value)));
}

function formatMxn(amount: number): string {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(amount);
}

function digitsOnlyMx(value: string): string {
  return value.replace(/\D/g, "");
}

export function SolarInquiryPanel() {
  const [inquiry, setInquiry] = useState<SolarInquiry>(DEFAULT_INQUIRY);
  const periodConfig = COST_CONFIG[inquiry.periodoPago];
  const currentCostRaw =
    inquiry.periodoPago === "mensual"
      ? inquiry.costoMensualMxn
      : inquiry.costoBimestralMxn;
  const currentCost = clampCost(currentCostRaw, periodConfig.min, periodConfig.max);
  const [exactCostDraft, setExactCostDraft] = useState("");
  const [isEditingExactCost, setIsEditingExactCost] = useState(false);

  const exactCostDisplay =
    isEditingExactCost ? exactCostDraft : formatMxn(currentCost);

  function setCurrentCost(nextCost: number) {
    setInquiry((s) =>
      s.periodoPago === "mensual"
        ? { ...s, costoMensualMxn: nextCost }
        : { ...s, costoBimestralMxn: nextCost },
    );
  }

  const contextualHref = buildWhatsAppUrl({
    phoneNumber: DEFAULT_WHATSAPP,
    message: buildSolarInquiryMessage(inquiry),
  });

  const quickHref = buildWhatsAppUrl({
    phoneNumber: DEFAULT_WHATSAPP,
    message: WHATSAPP_SFV_QUICK,
  });

  return (
    <div className="rounded-2xl border border-[#1E4D8C]/20 bg-gradient-to-b from-[#1E4D8C]/[0.04] to-slate-50/60 p-5 shadow-sm sm:p-6">
      <h3 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
        Tres datos y tendrás una propuesta lista
      </h3>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="min-w-0 sm:col-span-2">
          <label
            className="block text-xs font-semibold text-slate-600"
            htmlFor="solar-costo"
          >
            ¿Cuánto pagas de luz? (aprox.)
          </label>
          <div className="mt-2 inline-flex rounded-lg border border-slate-200/90 bg-white p-1 text-xs font-semibold">
            <button
              type="button"
              onClick={() => {
                setInquiry((s) => ({ ...s, periodoPago: "bimestral" }));
                setIsEditingExactCost(false);
                setExactCostDraft("");
              }}
              className={[
                "rounded-md px-3 py-1.5 transition",
                inquiry.periodoPago === "bimestral"
                  ? "bg-[#1E4D8C] text-white"
                  : "text-slate-600 hover:text-[#1E4D8C]",
              ].join(" ")}
            >
              Bimestre
            </button>
            <button
              type="button"
              onClick={() => {
                setInquiry((s) => ({ ...s, periodoPago: "mensual" }));
                setIsEditingExactCost(false);
                setExactCostDraft("");
              }}
              className={[
                "rounded-md px-3 py-1.5 transition",
                inquiry.periodoPago === "mensual"
                  ? "bg-[#1E4D8C] text-white"
                  : "text-slate-600 hover:text-[#1E4D8C]",
              ].join(" ")}
            >
              Mensual
            </button>
          </div>
          <div className="mt-2 rounded-xl border border-slate-200/90 bg-white px-3.5 py-3 shadow-sm">
            <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-2 text-[11px] text-slate-500">
              <span className="font-medium">Pago menor</span>
              <div className="flex min-w-[min(100%,16rem)] flex-1 justify-center gap-4 px-2 text-center">
                <div>
                  <span className="block text-[10px] uppercase tracking-wide text-slate-500">
                    Bimestre
                  </span>
                  <span className="mt-0.5 block whitespace-nowrap text-sm font-semibold tabular-nums text-[#1E4D8C]">
                    {formatMxn(
                      clampCost(
                        inquiry.costoBimestralMxn,
                        COST_CONFIG.bimestral.min,
                        COST_CONFIG.bimestral.max,
                      ),
                    )}
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wide text-slate-500">
                    Mensual
                  </span>
                  <span className="mt-0.5 block whitespace-nowrap text-sm font-semibold tabular-nums text-[#1E4D8C]">
                    {formatMxn(
                      clampCost(
                        inquiry.costoMensualMxn,
                        COST_CONFIG.mensual.min,
                        COST_CONFIG.mensual.max,
                      ),
                    )}
                  </span>
                </div>
              </div>
              <span className="font-medium">Pago mayor</span>
            </div>
            <input
              id="solar-costo"
              type="range"
              min={periodConfig.min}
              max={periodConfig.max}
              step={periodConfig.step}
              value={currentCost}
              className="mt-3 h-2 w-full cursor-pointer accent-[#1E4D8C]"
              onChange={(e) => {
                const nextCost = clampCost(
                  Number(e.target.value),
                  periodConfig.min,
                  periodConfig.max,
                );
                setIsEditingExactCost(false);
                setCurrentCost(nextCost);
              }}
              aria-valuetext={`${periodConfig.label} ${formatMxn(currentCost)}`}
            />
            <div className="mt-3 grid grid-cols-4 gap-1 sm:grid-cols-7">
              {periodConfig.quickValues.map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => {
                    setIsEditingExactCost(false);
                    setCurrentCost(value);
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
                O escríbelo exacto (MXN por {inquiry.periodoPago === "mensual" ? "mes" : "bimestre"})
              </label>
              <input
                id="solar-costo-input"
                type="text"
                inputMode="numeric"
                autoComplete="off"
                value={exactCostDisplay}
                spellCheck={false}
                onFocus={() => {
                  setIsEditingExactCost(true);
                  setExactCostDraft(String(currentCost));
                }}
                onChange={(e) => {
                  const nextDigits = digitsOnlyMx(e.target.value);
                  setExactCostDraft(nextDigits);
                }}
                onBlur={() => {
                  const raw =
                    exactCostDraft.trim() === ""
                      ? Number.NaN
                      : Number(digitsOnlyMx(exactCostDraft));
                  setIsEditingExactCost(false);
                  setExactCostDraft("");
                  if (!Number.isFinite(raw)) return;
                  const next = clampCost(raw, periodConfig.min, periodConfig.max);
                  setCurrentCost(next);
                }}
                onKeyDown={(e) => {
                  if (e.key !== "Enter") return;
                  (e.currentTarget as HTMLInputElement).blur();
                }}
                className="mt-1.5 w-full rounded-lg border border-slate-200/90 bg-white px-3 py-2.5 font-medium tabular-nums text-sm text-slate-900 shadow-sm focus:border-[#1E4D8C] focus:outline-none focus:ring-2 focus:ring-[#1E4D8C]/20"
              />
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
            <option value="industrial">Industrial</option>
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
