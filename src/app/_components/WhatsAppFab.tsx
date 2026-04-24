"use client";

import { useMemo, useState } from "react";
import {
  buildContactChatbotMessage,
  CHATBOT_FAQS,
  CHATBOT_FUEL_LABEL,
  CHATBOT_GENERATOR_TYPE_LABEL,
  CHATBOT_IMSS_LABEL,
  CHATBOT_BACKUP_PRIORITY_LABEL,
  CHATBOT_SEGMENT_LABEL,
  CHATBOT_TOPIC_LABEL,
  type ContactChatbotLead,
  type ContactChatbotTopic,
  needsGeneratorProfiling,
} from "@/lib/contactChatbot";
import {
  buildWhatsAppMessage,
  buildWhatsAppUrl,
  WHATSAPP_DEFAULT_E164,
} from "@/lib/whatsapp";

const DEFAULT_WHATSAPP =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? WHATSAPP_DEFAULT_E164;

export function WhatsAppFab() {
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState<ContactChatbotTopic | null>(null);
  const [faqId, setFaqId] = useState<ContactChatbotLead["faqId"] | null>(null);
  const [segment, setSegment] = useState<
    ContactChatbotLead["segment"] | null
  >(null);
  const [cotizaEnIMSS, setCotizaEnIMSS] = useState<
    ContactChatbotLead["cotizaEnIMSS"] | null
  >(null);
  const [generatorType, setGeneratorType] = useState<
    ContactChatbotLead["generatorType"] | null
  >(null);
  const [fuelType, setFuelType] = useState<ContactChatbotLead["fuelType"] | null>(
    null,
  );
  const [backupPriority, setBackupPriority] = useState<
    ContactChatbotLead["backupPriority"] | null
  >(null);

  const quickHref = buildWhatsAppUrl({
    phoneNumber: DEFAULT_WHATSAPP,
    message: buildWhatsAppMessage(),
  });

  const selectedFaq = useMemo(() => {
    if (!topic || !faqId) return null;
    return CHATBOT_FAQS[topic].find((faq) => faq.id === faqId) ?? null;
  }, [topic, faqId]);

  const isReadyToFinish =
    topic !== null &&
    faqId !== null &&
    segment !== null &&
    cotizaEnIMSS !== null &&
    (!topic ||
      !needsGeneratorProfiling(topic) ||
      (generatorType !== null &&
        fuelType !== null &&
        backupPriority !== null)) &&
    selectedFaq !== null;

  const chatbotHref = useMemo(() => {
    if (!isReadyToFinish || !topic || !faqId || !segment || !cotizaEnIMSS) {
      return "";
    }
    const payload: ContactChatbotLead = {
      topic,
      faqId,
      segment,
      cotizaEnIMSS,
    };
    if (needsGeneratorProfiling(topic)) {
      payload.generatorType = generatorType ?? undefined;
      payload.fuelType = fuelType ?? undefined;
      payload.backupPriority = backupPriority ?? undefined;
    }
    const message = buildContactChatbotMessage(payload);
    return buildWhatsAppUrl({
      phoneNumber: DEFAULT_WHATSAPP,
      message,
    });
  }, [
    isReadyToFinish,
    topic,
    faqId,
    segment,
    cotizaEnIMSS,
    generatorType,
    fuelType,
    backupPriority,
  ]);

  function restartChat() {
    setTopic(null);
    setFaqId(null);
    setSegment(null);
    setCotizaEnIMSS(null);
    setGeneratorType(null);
    setFuelType(null);
    setBackupPriority(null);
  }

  return (
    <>
      {open ? (
        <div className="fixed right-[max(0.75rem,env(safe-area-inset-right))] bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-50 w-[min(92vw,22rem)] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_22px_60px_rgba(15,23,42,0.28)]">
          <div className="flex items-center justify-between border-b border-slate-200 bg-[#0f2744] px-4 py-3 text-white">
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                Asistente ENERGRUN
              </p>
              <p className="mt-0.5 text-sm font-semibold">
                Te guiamos antes de WhatsApp
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/20 text-white/85 transition hover:bg-white/10"
              aria-label="Cerrar asistente"
            >
              X
            </button>
          </div>

          <div className="max-h-[65vh] space-y-3 overflow-y-auto px-4 py-4 text-sm">
            <div className="rounded-xl bg-slate-50 px-3 py-2.5 text-slate-700">
              Hola, soy tu asistente rapido. Resolvemos dudas de paneles o
              generadores y te mando directo a WhatsApp con un resumen.
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                1) Que te interesa?
              </p>
              <div className="grid gap-2">
                {(Object.keys(CHATBOT_TOPIC_LABEL) as ContactChatbotTopic[]).map(
                  (key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => {
                        setTopic(key);
                        setFaqId(null);
                        setSegment(null);
                        setCotizaEnIMSS(null);
                        setGeneratorType(null);
                        setFuelType(null);
                        setBackupPriority(null);
                      }}
                      className={[
                        "rounded-lg border px-3 py-2 text-left transition",
                        topic === key
                          ? "border-[#1E4D8C]/35 bg-[#1E4D8C]/[0.06] text-[#1E4D8C]"
                          : "border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50",
                      ].join(" ")}
                    >
                      {CHATBOT_TOPIC_LABEL[key]}
                    </button>
                  ),
                )}
              </div>
            </div>

            {topic ? (
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  2) Cual es tu duda principal?
                </p>
                <div className="grid gap-2">
                  {CHATBOT_FAQS[topic].map((faq) => (
                    <button
                      key={faq.id}
                      type="button"
                      onClick={() => setFaqId(faq.id)}
                      className={[
                        "rounded-lg border px-3 py-2 text-left transition",
                        faqId === faq.id
                          ? "border-[#1E4D8C]/35 bg-[#1E4D8C]/[0.06] text-[#1E4D8C]"
                          : "border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50",
                      ].join(" ")}
                    >
                      {faq.question}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {selectedFaq ? (
              <div className="rounded-xl border border-[#1E4D8C]/15 bg-[#1E4D8C]/[0.05] px-3 py-2.5 text-slate-700">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1E4D8C]">
                  Respuesta rapida
                </p>
                <p className="mt-1.5 leading-6">{selectedFaq.answer}</p>
              </div>
            ) : null}

            {selectedFaq && topic && needsGeneratorProfiling(topic) ? (
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  3) Tipo de generador que te interesa
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {(Object.keys(
                    CHATBOT_GENERATOR_TYPE_LABEL,
                  ) as NonNullable<ContactChatbotLead["generatorType"]>[]).map(
                    (key) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setGeneratorType(key)}
                        className={[
                          "rounded-lg border px-3 py-2 text-left transition",
                          generatorType === key
                            ? "border-[#1E4D8C]/35 bg-[#1E4D8C]/[0.06] text-[#1E4D8C]"
                            : "border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50",
                        ].join(" ")}
                      >
                        {CHATBOT_GENERATOR_TYPE_LABEL[key]}
                      </button>
                    ),
                  )}
                </div>
              </div>
            ) : null}

            {generatorType && topic && needsGeneratorProfiling(topic) ? (
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  4) Combustible disponible o preferido
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {(Object.keys(
                    CHATBOT_FUEL_LABEL,
                  ) as NonNullable<ContactChatbotLead["fuelType"]>[]).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setFuelType(key)}
                      className={[
                        "rounded-lg border px-3 py-2 text-center transition",
                        fuelType === key
                          ? "border-[#1E4D8C]/35 bg-[#1E4D8C]/[0.06] text-[#1E4D8C]"
                          : "border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50",
                      ].join(" ")}
                    >
                      {CHATBOT_FUEL_LABEL[key]}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {fuelType && topic && needsGeneratorProfiling(topic) ? (
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  5) Prioridad del respaldo
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {(Object.keys(
                    CHATBOT_BACKUP_PRIORITY_LABEL,
                  ) as NonNullable<ContactChatbotLead["backupPriority"]>[]).map(
                    (key) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setBackupPriority(key)}
                        className={[
                          "rounded-lg border px-3 py-2 text-left transition",
                          backupPriority === key
                            ? "border-[#1E4D8C]/35 bg-[#1E4D8C]/[0.06] text-[#1E4D8C]"
                            : "border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50",
                        ].join(" ")}
                      >
                        {CHATBOT_BACKUP_PRIORITY_LABEL[key]}
                      </button>
                    ),
                  )}
                </div>
              </div>
            ) : null}

            {selectedFaq &&
            (!topic || !needsGeneratorProfiling(topic) || backupPriority) ? (
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {topic && needsGeneratorProfiling(topic)
                    ? "6) Tipo de inmueble"
                    : "3) Tipo de inmueble"}
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {(Object.keys(
                    CHATBOT_SEGMENT_LABEL,
                  ) as ContactChatbotLead["segment"][]).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSegment(key)}
                      className={[
                        "rounded-lg border px-3 py-2 text-left transition",
                        segment === key
                          ? "border-[#1E4D8C]/35 bg-[#1E4D8C]/[0.06] text-[#1E4D8C]"
                          : "border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50",
                      ].join(" ")}
                    >
                      {CHATBOT_SEGMENT_LABEL[key]}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {segment ? (
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {topic && needsGeneratorProfiling(topic)
                    ? "7) Cotizas en IMSS?"
                    : "4) Cotizas en IMSS?"}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {(Object.keys(
                    CHATBOT_IMSS_LABEL,
                  ) as ContactChatbotLead["cotizaEnIMSS"][]).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setCotizaEnIMSS(key)}
                      className={[
                        "rounded-lg border px-3 py-2 text-center transition",
                        cotizaEnIMSS === key
                          ? "border-[#1E4D8C]/35 bg-[#1E4D8C]/[0.06] text-[#1E4D8C]"
                          : "border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50",
                      ].join(" ")}
                    >
                      {CHATBOT_IMSS_LABEL[key]}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className="space-y-2 border-t border-slate-200 px-4 py-3">
            {isReadyToFinish ? (
              <a
                href={chatbotHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-[#6CC04A] px-4 text-sm font-semibold text-white transition hover:bg-[#3BAA3F]"
              >
                Continuar a WhatsApp con mi resumen
              </a>
            ) : (
              <p className="text-xs text-slate-500">
                Completa los pasos para generar el resumen de WhatsApp.
              </p>
            )}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={restartChat}
                className="inline-flex h-10 items-center justify-center rounded-lg border border-slate-300 bg-white px-3 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Reiniciar
              </button>
              <a
                href={quickHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-lg border border-slate-300 bg-white px-3 text-center text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                WhatsApp directo
              </a>
            </div>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Contacto por WhatsApp"
        className="fixed right-[max(0.75rem,env(safe-area-inset-right))] bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-50 flex min-h-12 items-center gap-2.5 rounded-full bg-[#6CC04A] px-4 py-2.5 text-sm font-semibold leading-none text-white shadow-lg shadow-[#6CC04A]/25 ring-1 ring-[#6CC04A]/25 transition hover:bg-[#3BAA3F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3FA9F5]/60 sm:gap-3 sm:px-5"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center self-center rounded-full bg-white/20">
          <svg
            viewBox="0 0 32 32"
            fill="currentColor"
            className="block h-5 w-5 shrink-0"
            aria-hidden="true"
          >
            <path d="M19.11 17.53c-.3-.15-1.77-.87-2.05-.97-.28-.1-.49-.15-.69.15-.2.3-.79.97-.97 1.17-.18.2-.36.23-.66.08-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.36.46-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.69-1.66-.95-2.28-.25-.6-.5-.52-.69-.53l-.59-.01c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5 0 1.47 1.08 2.89 1.23 3.09.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.41.25-.69.25-1.28.17-1.41-.08-.13-.28-.2-.58-.35M16.02 4C9.38 4 4 9.38 4 16.02c0 2.11.55 4.17 1.6 6l-1.7 6.2 6.35-1.66c1.77.97 3.76 1.48 5.77 1.48 6.64 0 12.02-5.38 12.02-12.02C28.04 9.38 22.66 4 16.02 4m0 21.86c-1.82 0-3.6-.49-5.16-1.42l-.37-.22-3.77.99 1.01-3.67-.24-.38a9.8 9.8 0 0 1-1.5-5.14c0-5.43 4.41-9.84 9.84-9.84 5.43 0 9.84 4.41 9.84 9.84 0 5.43-4.41 9.84-9.84 9.84" />
          </svg>
        </span>
        <span className="flex h-9 min-w-0 items-center self-center max-[370px]:hidden">
          <span className="hidden sm:inline">
            {open ? "Cerrar asistente" : "Contacto"}
          </span>
          <span className="sm:hidden">{open ? "Cerrar" : "WhatsApp"}</span>
        </span>
      </button>
    </>
  );
}

