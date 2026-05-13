"use client";

import { useMemo, useRef, useState } from "react";
import { RevealGroup } from "@/app/_components/RevealGroup";
import {
  WHATSAPP_DEFAULT_E164,
  buildWhatsAppUrl,
} from "@/lib/whatsapp";
import {
  calculateGeneratorRecommendation,
  formatPower,
  generatorProjectCards,
  getGeneratorRecommendation,
  getProjectLoadItems,
  type GeneratorBackupLevel,
  type GeneratorFuelType,
  type GeneratorInstallationType,
  type GeneratorProjectType,
} from "@/lib/generatorSizing";

const FUEL_OPTIONS: Array<{ id: GeneratorFuelType; label: string }> = [
  { id: "gas-lp", label: "Gas LP" },
  { id: "gas-natural", label: "Gas natural" },
  { id: "diesel", label: "Diésel" },
  { id: "no-se", label: "No sé todavía" },
];

const INSTALLATION_OPTIONS: Array<{
  id: GeneratorInstallationType;
  label: string;
}> = [
  { id: "monofasica", label: "Monofásica" },
  { id: "trifasica", label: "Trifásica" },
  { id: "no-se", label: "No sé todavía" },
];

const BACKUP_OPTIONS: Array<{ id: GeneratorBackupLevel; label: string }> = [
  { id: "criticas", label: "Solo cargas críticas" },
  { id: "area-completa", label: "Área completa" },
  { id: "continua", label: "Operación continua" },
];

const PROJECT_LABELS: Record<GeneratorProjectType, string> = {
  casa: "Casa",
  negocio: "Negocio",
  industria: "Industria ligera",
  obra: "Obra / renta temporal",
};

const DEFAULT_WHATSAPP =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? WHATSAPP_DEFAULT_E164;

function formatWatts(value: number): string {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)} kW`;
  }
  return `${value} W`;
}

export function GeneratorQuickQuote() {
  const [projectType, setProjectType] = useState<GeneratorProjectType>("casa");
  const [fuelType, setFuelType] = useState<GeneratorFuelType>("no-se");
  const [installationType, setInstallationType] =
    useState<GeneratorInstallationType>("no-se");
  const [backupLevel, setBackupLevel] = useState<GeneratorBackupLevel>("criticas");
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [hasCalculated, setHasCalculated] = useState(false);
  const resultRef = useRef<HTMLDivElement | null>(null);

  const loadItems = useMemo(() => getProjectLoadItems(projectType), [projectType]);

  const selectedLoads = useMemo(
    () =>
      loadItems.map((item) => ({
        loadId: item.loadId,
        quantity: quantities[item.loadId] ?? 0,
      })),
    [loadItems, quantities],
  );

  const recommendation = useMemo(
    () =>
      calculateGeneratorRecommendation({
        projectType,
        fuelType,
        installationType,
        backupLevel,
        selectedLoads,
      }),
    [backupLevel, fuelType, installationType, projectType, selectedLoads],
  );

  const hasAnySelected = selectedLoads.some((item) => item.quantity > 0);
  const lineRecommendation = recommendation
    ? getGeneratorRecommendation(projectType, recommendation.estimatedKw)
    : null;

  const whatsappHref = useMemo(() => {
    if (!recommendation || !lineRecommendation) return null;

    const selectedSummary = loadItems
      .map((item) => ({
        label: item.label,
        quantity: quantities[item.loadId] ?? 0,
      }))
      .filter((item) => item.quantity > 0)
      .map((item) => `${item.label} x${item.quantity}`)
      .join(", ");

    const fuelLabel = FUEL_OPTIONS.find((item) => item.id === fuelType)?.label ?? "Por definir";
    const backupLabel =
      BACKUP_OPTIONS.find((item) => item.id === backupLevel)?.label ?? "Por definir";
    const installationLabel =
      INSTALLATION_OPTIONS.find((item) => item.id === installationType)?.label ?? "Por definir";

    const message = [
      "ENERGRUN — Cotización rápida de generador (web).",
      `Tipo de proyecto: ${PROJECT_LABELS[projectType]}.`,
      `Cargas seleccionadas: ${selectedSummary || "Sin detalle"}.`,
      `Capacidad estimada: ${formatPower(recommendation.estimatedKw)}.`,
      `Generador recomendado: ${lineRecommendation.title}.`,
      `Perfil sugerido: ${lineRecommendation.badge}.`,
      `Combustible disponible: ${fuelLabel}.`,
      `Instalación: ${installationLabel}.`,
      `Nivel de respaldo: ${backupLabel}.`,
      "Esta cotización es inicial y requiere validación técnica final.",
      "Solicito asesoría y propuesta formal para mi caso.",
      "Zona: Monterrey y área metropolitana.",
    ].join("\n");

    return buildWhatsAppUrl({
      phoneNumber: DEFAULT_WHATSAPP,
      message,
    });
  }, [
    backupLevel,
    fuelType,
    installationType,
    lineRecommendation,
    loadItems,
    projectType,
    quantities,
    recommendation,
  ]);

  function setLoadQuantity(loadId: string, nextQuantity: number) {
    setQuantities((current) => ({
      ...current,
      [loadId]: Math.max(0, Math.min(12, nextQuantity)),
    }));
  }

  function onProjectChange(nextProject: GeneratorProjectType) {
    setProjectType(nextProject);
    setQuantities({});
    setHasCalculated(false);
  }

  function onCalculate() {
    setHasCalculated(true);
    resultRef.current?.scrollIntoView?.({ behavior: "smooth", block: "start" });
  }

  return (
    <RevealGroup
      as="section"
      id="cotiza-generador"
      className="border-b border-slate-200/80 bg-gradient-to-b from-white to-slate-50/40 py-12 md:py-16"
    >
      <div className="max-w-3xl">
        <p
          className="reveal-t text-xs font-semibold uppercase tracking-[0.22em] text-slate-500"
          data-stagger="0"
        >
          Cotización rápida
        </p>
        <h2
          className="reveal-t mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-[2.15rem]"
          data-stagger="1"
        >
          Cotiza tu generador a la medida
        </h2>
        <p className="reveal-t mt-4 text-sm leading-7 text-slate-600" data-stagger="2">
          Selecciona qué necesitas respaldar y obtén una recomendación inicial en
          segundos.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.9fr)] lg:items-start">
        <div className="reveal-t rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1E4D8C]">
              Paso 1
            </p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">
              Tipo de proyecto
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {generatorProjectCards.map((project) => {
                const isActive = projectType === project.id;
                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => onProjectChange(project.id)}
                    className={[
                      "rounded-xl border p-4 text-left transition",
                      isActive
                        ? "border-[#1E4D8C]/45 bg-[#1E4D8C]/[0.06] shadow-[0_8px_20px_rgba(30,77,140,0.12)]"
                        : "border-slate-200/90 bg-white hover:border-[#1E4D8C]/25",
                    ].join(" ")}
                    aria-pressed={isActive}
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#1E4D8C]/10 text-[#1E4D8C]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                        aria-hidden
                      >
                        <path d={project.iconPath} />
                      </svg>
                    </span>
                    <p className="mt-3 text-sm font-semibold text-slate-900">{project.title}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-600">
                      {project.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1E4D8C]">
              Paso 2
            </p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">
              ¿Qué quieres respaldar?
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Toca el equipo y ajusta la cantidad con + o -.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {loadItems.map((item) => {
                const quantity = quantities[item.loadId] ?? 0;
                return (
                  <article
                    key={item.loadId}
                    className={[
                      "rounded-xl border p-3 transition",
                      quantity > 0
                        ? "border-[#1E4D8C]/35 bg-[#1E4D8C]/[0.05]"
                        : "border-slate-200/90 bg-slate-50/60",
                    ].join(" ")}
                  >
                    <button
                      type="button"
                      className="w-full text-left text-sm font-semibold text-slate-900"
                      onClick={() => setLoadQuantity(item.loadId, quantity > 0 ? 0 : 1)}
                    >
                      {item.label}
                    </button>
                    <div className="mt-3 flex items-center justify-between rounded-lg border border-slate-200/80 bg-white px-2 py-1.5">
                      <button
                        type="button"
                        aria-label={`Reducir ${item.label}`}
                        onClick={() => setLoadQuantity(item.loadId, quantity - 1)}
                        disabled={quantity === 0}
                        className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-slate-200 text-base font-semibold text-slate-700 transition hover:border-[#1E4D8C]/30 hover:text-[#1E4D8C] disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        -
                      </button>
                      <p className="text-sm font-semibold tabular-nums text-slate-700">
                        {quantity}
                      </p>
                      <button
                        type="button"
                        aria-label={`Aumentar ${item.label}`}
                        onClick={() => setLoadQuantity(item.loadId, quantity + 1)}
                        className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-slate-200 text-base font-semibold text-slate-700 transition hover:border-[#1E4D8C]/30 hover:text-[#1E4D8C]"
                      >
                        +
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="mt-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1E4D8C]">
              Paso 3
            </p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">Datos rápidos</h3>

            <div className="mt-4 space-y-4">
              <fieldset>
                <legend className="text-xs font-semibold text-slate-600">
                  Combustible disponible
                </legend>
                <div className="mt-2 flex flex-wrap gap-2">
                  {FUEL_OPTIONS.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setFuelType(option.id)}
                      className={[
                        "rounded-full border px-3 py-1.5 text-xs font-semibold transition",
                        fuelType === option.id
                          ? "border-[#1E4D8C]/45 bg-[#1E4D8C] text-white"
                          : "border-slate-200/90 bg-white text-slate-700 hover:border-[#1E4D8C]/30 hover:text-[#1E4D8C]",
                      ].join(" ")}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-xs font-semibold text-slate-600">
                  Tipo de instalación
                </legend>
                <div className="mt-2 flex flex-wrap gap-2">
                  {INSTALLATION_OPTIONS.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setInstallationType(option.id)}
                      className={[
                        "rounded-full border px-3 py-1.5 text-xs font-semibold transition",
                        installationType === option.id
                          ? "border-[#1E4D8C]/45 bg-[#1E4D8C] text-white"
                          : "border-slate-200/90 bg-white text-slate-700 hover:border-[#1E4D8C]/30 hover:text-[#1E4D8C]",
                      ].join(" ")}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-xs font-semibold text-slate-600">
                  Nivel de respaldo
                </legend>
                <div className="mt-2 flex flex-wrap gap-2">
                  {BACKUP_OPTIONS.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setBackupLevel(option.id)}
                      className={[
                        "rounded-full border px-3 py-1.5 text-xs font-semibold transition",
                        backupLevel === option.id
                          ? "border-[#1E4D8C]/45 bg-[#1E4D8C] text-white"
                          : "border-slate-200/90 bg-white text-slate-700 hover:border-[#1E4D8C]/30 hover:text-[#1E4D8C]",
                      ].join(" ")}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>

          <button
            type="button"
            onClick={onCalculate}
            className="mt-7 inline-flex h-11 w-full items-center justify-center rounded-lg bg-[#1E4D8C] px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#17407a] sm:w-auto"
          >
            Calcular recomendación
          </button>
        </div>

        <aside
          ref={resultRef}
          className="reveal-t lg:sticky lg:top-28"
          data-stagger="3"
          aria-live="polite"
        >
          <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_16px_30px_rgba(15,39,68,0.08)] sm:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1E4D8C]">
              Recomendación inicial
            </p>

            {!hasAnySelected || !recommendation ? (
              <div className="mt-4 rounded-xl border border-dashed border-slate-300/80 bg-slate-50/60 p-4 text-sm text-slate-600">
                {hasCalculated
                  ? "Selecciona al menos una carga para generar la recomendación."
                  : "Selecciona tus cargas para ver aquí la recomendación inicial del generador."}
              </div>
            ) : (
              <>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Capacidad estimada
                </p>
                <p className="mt-1 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  {formatPower(recommendation.estimatedKw)}
                </p>

                <div className="mt-4 rounded-xl border border-[#1E4D8C]/20 bg-[#1E4D8C]/[0.05] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E4D8C]">
                    Generador recomendado
                  </p>
                  <p className="mt-1 text-base font-semibold text-slate-900">
                    {lineRecommendation?.title}
                  </p>
                  <p className="mt-2 inline-flex rounded-full border border-[#1E4D8C]/20 bg-white px-2.5 py-1 text-[11px] font-semibold text-[#1E4D8C]">
                    {lineRecommendation?.badge}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    {lineRecommendation?.description}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-slate-200/90 bg-slate-50/70 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Resumen técnico rápido
                  </p>
                  <div className="mt-3 grid gap-2 text-xs text-slate-600">
                    <p>
                      Cargas seleccionadas:{" "}
                      <span className="font-semibold text-slate-800">
                        {recommendation.loadsCount}
                      </span>
                    </p>
                    <p>
                      Operación estimada:{" "}
                      <span className="font-semibold text-slate-800">
                        {formatWatts(recommendation.runningWatts)}
                      </span>
                    </p>
                    <p>
                      Pico de arranque:{" "}
                      <span className="font-semibold text-slate-800">
                        {formatWatts(recommendation.surgeWatts)}
                      </span>
                    </p>
                    <p>
                      Margen de diseño:{" "}
                      <span className="font-semibold text-slate-800">
                        {formatWatts(recommendation.designWatts)}
                      </span>
                    </p>
                    <p>
                      Combustible:{" "}
                      <span className="font-semibold text-slate-800">
                        {recommendation.fuelLabel}
                      </span>
                    </p>
                    <p>
                      Instalación sugerida:{" "}
                      <span className="font-semibold text-slate-800">
                        {recommendation.suggestedInstallation}
                      </span>
                    </p>
                  </div>
                </div>

                {whatsappHref ? (
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-lg bg-[#1E4D8C] px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#17407a]"
                  >
                    Enviar selección por WhatsApp
                  </a>
                ) : null}
              </>
            )}

            <p className="mt-4 text-xs leading-5 text-slate-500">
              Esta herramienta es una estimación inicial. El dimensionamiento final
              se valida con revisión técnica.
            </p>
          </div>
        </aside>
      </div>
    </RevealGroup>
  );
}
