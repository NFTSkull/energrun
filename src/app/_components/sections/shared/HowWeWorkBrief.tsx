import { RevealGroup } from "@/app/_components/RevealGroup";
import { homeHowWeWorkSteps } from "@/lib/content";

const STEP_ICONS: string[] = [
  "M4 18h16M6 15V9m6 6V6m6 9v-4",
  "M4 8h16M4 12h16M4 16h10",
  "M3 12h4l2 6 4-12 2 6h6",
];

export function HowWeWorkBrief() {
  return (
    <RevealGroup
      as="section"
      id="como-trabajamos"
      className="border-b border-slate-200/80 bg-gradient-to-b from-white to-slate-50/30 py-20 md:py-28"
    >
      <div className="reveal-t relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-[0_22px_50px_rgba(15,39,68,0.1)] sm:p-9">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(30,77,140,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(30,77,140,0.35) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="relative grid gap-5 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500"
              data-stagger="0"
            >
              Cómo trabajamos
            </p>
            <h2
              className="mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-[2.35rem]"
              data-stagger="1"
            >
              Metodología clara de principio a fin
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600" data-stagger="2">
              Estructuramos cada proyecto en fases ejecutivas, con trazabilidad
              técnica y entregables definidos en cada etapa.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {[
              { k: "Fases", v: "03 pasos" },
              { k: "Control", v: "Entregables por etapa" },
              { k: "Resultado", v: "Puesta en marcha documentada" },
            ].map((pill) => (
              <div
                key={pill.k}
                className="rounded-lg border border-slate-200/90 bg-slate-50/80 px-3 py-2.5"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {pill.k}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">{pill.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ol className="mt-10 grid list-none gap-4 p-0 md:grid-cols-3">
        {homeHowWeWorkSteps.map((step, index) => (
          <li
            key={step.n}
            className="reveal-t relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[#1E4D8C]/25 hover:shadow-[0_16px_34px_rgba(15,39,68,0.1)]"
            data-stagger={String(index + 3)}
          >
            {index < homeHowWeWorkSteps.length - 1 ? (
              <div
                aria-hidden
                className="absolute right-0 top-9 hidden h-px w-6 translate-x-3 bg-gradient-to-r from-[#1E4D8C]/25 to-transparent md:block"
              />
            ) : null}
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#1E4D8C]/[0.07] text-[#1E4D8C] ring-1 ring-[#1E4D8C]/15">
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
                <path d={STEP_ICONS[index] ?? STEP_ICONS[0]} />
              </svg>
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1E4D8C]">
              Paso {step.n}
            </p>
            <h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-900">
              {step.t}
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">{step.d}</p>
          </li>
        ))}
      </ol>
    </RevealGroup>
  );
}
