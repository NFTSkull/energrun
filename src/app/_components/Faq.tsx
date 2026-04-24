"use client";

import { useMemo, useState } from "react";

type Item = { q: string; a: string };

export function Faq(props: { items?: Item[] }) {
  const items = useMemo<Item[]>(
    () =>
      props.items ?? [
        {
          q: "¿Cuánto se ahorra realmente con paneles solares frente a CFE?",
          a: "Depende del consumo, la tarifa, la orientación del techo y la hora en la que se usa la energía. En casos bien diseñados el ahorro puede estar entre 70% y 95% del costo de energía facturado, sobre todo cuando se evita la tarifa DAC. El porcentaje se documenta en la propuesta sobre su recibo real, no por fórmula genérica.",
        },
        {
          q: "¿Qué es la tarifa DAC y cómo ayuda el FV a no caer en ella?",
          a: "DAC (Doméstica de Alto Consumo) aplica cuando se supera el umbral anual de consumo de la tarifa doméstica. Al caer en DAC se pierde el subsidio y el kWh se cobra varias veces más caro. Un sistema fotovoltaico se puede dimensionar para mantener el consumo por debajo del umbral y conservar la clasificación original.",
        },
        {
          q: "¿Cómo es la interconexión con CFE y el medidor bidireccional?",
          a: "Bajo el contrato de interconexión (CIL) con CFE, el medidor bidireccional registra tanto lo que toma como lo que inyecta a la red. Los excedentes se compensan según el esquema autorizado (pequeña o mediana escala). Nosotros dejamos listo el trámite, la documentación y la puesta en servicio.",
        },
        {
          q: "¿Qué determina el tamaño del sistema fotovoltaico?",
          a: "Consumo anual (recibos de 12 meses), perfil de carga, sombras, orientación y criterio de inyección. El kWp del sistema sale del diseño, no de multiplicar paneles por un número mágico.",
        },
        {
          q: "¿Por qué se necesita un generador si ya hay paneles solares?",
          a: "Un sistema FV interconectado no genera si la red cae (por seguridad). Para mantener iluminación, refrigeración, cómputo o climas durante un corte se requiere un grupo de respaldo. FV y respaldo son funciones distintas: ahorro vs continuidad.",
        },
        {
          q: "¿Qué tan rápido arranca un Generac cuando se va la luz?",
          a: "Con un sistema con transferencia automática (A.T.S.), el grupo suele tomar cargas entre 10 y 30 segundos después del corte. Al regresar la red, retorna con una secuencia controlada para no estresar equipos sensibles.",
        },
        {
          q: "¿Qué combustible conviene: gas natural o GLP?",
          a: "Si hay línea de gas natural, ofrece suministro continuo sin tanques. Si no hay línea, el GLP en tanque estacionario aporta autonomía y suele ser la opción estándar en la zona. La decisión depende de disponibilidad, obra civil y autonomía requerida.",
        },
        {
          q: "¿Cómo se dimensiona el kW de un Generac?",
          a: "Por lista de cargas y picos de arranque simultáneos (sobre todo motores: A/A, bombas, compresores). No se elige por m². El kW definitivo se propone tras el levantamiento del tablero y la revisión de fichas de equipo.",
        },
        {
          q: "¿Qué mantenimiento requiere un generador de respaldo?",
          a: "Ejercicio semanal automático, cambio de aceite y filtros por horas de operación (≈ 200 h o anual), revisión de bujías y batería de arranque. Se recomienda contrato anual para bitácora y refacciones originales.",
        },
        {
          q: "¿Cómo conviven FV y respaldo en el mismo inmueble?",
          a: "Se define un solo esquema: qué baja el inversor, qué conmuta el A.T.S. y qué alimenta el generador. Sin cruces de retorno a red ni criterio improvisado. El detalle queda en el esquema unifilar de la propuesta.",
        },
        {
          q: "¿Mejoravit: qué aporta y qué no?",
          a: "Puede habilitar la compra si cotiza en el IMSS. No reemplaza el producto ni el diseño. El desembolso y el contrato de crédito no son nuestro ámbito; nosotros ajustamos la propuesta al requisito del programa.",
        },
      ],
    [props.items],
  );

  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="grid gap-3">
      {items.map((it, idx) => {
        const isOpen = open === idx;
        return (
          <div
            key={it.q}
            className="group rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[#1E4D8C]/20 hover:shadow-md"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen((cur) => (cur === idx ? null : idx))}
            >
              <span
                className="text-sm font-semibold"
                style={{ color: "var(--text-dark)" }}
              >
                {it.q}
              </span>
              <span
                className="grid h-8 w-8 place-items-center rounded-full"
                style={{
                  background: "rgba(63,169,245,0.10)",
                  color: "var(--primary-blue)",
                }}
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={`h-4 w-4 transition duration-300 ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 0 1 1.08 1.04l-4.24 4.5a.75.75 0 0 1-1.08 0l-4.24-4.5a.75.75 0 0 1 .02-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
            {isOpen ? (
              <p
                className="mt-3 text-sm leading-7"
                style={{ color: "var(--text-light)" }}
              >
                {it.a}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
