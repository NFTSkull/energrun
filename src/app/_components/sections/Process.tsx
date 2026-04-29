import { RevealGroup } from "@/app/_components/RevealGroup";
import { StaggeredFade } from "@/app/_components/StaggeredFade";
import { processSteps } from "@/lib/content";

const PROCESS_ICONS: string[] = [
  "M4 18h16M7 14V8m5 6V6m5 8v-3",
  "M4 7h16M4 12h16M4 17h10",
  "M3 12h4l2 6 4-12 2 6h6",
  "M4 16l4-4 3 3 5-6 4 4M4 20h16",
];

export function Process() {
  return (
    <RevealGroup
      as="section"
      id="proceso"
      className="border-b border-slate-200/80 bg-gradient-to-b from-slate-50/40 to-white py-12 md:py-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="text-center">
          <p
            className="reveal-t text-xs font-semibold uppercase tracking-[0.22em] text-slate-500"
            data-stagger="0"
          >
            Proceso
          </p>
          <h2
            className="reveal-t mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-[2.15rem]"
            data-stagger="1"
          >
            Cuatro pasos con documentación en cada etapa
          </h2>
          <p
            className="reveal-t mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600"
            data-stagger="2"
          >
            Te entregamos reportes, planos y actas en cada etapa, con un mismo
            estándar técnico. Así todo queda claro y consistente de principio a
            fin.
          </p>
        </div>

        <div className="reveal-t mt-6 grid gap-3 sm:grid-cols-3" data-stagger="3">
          {[
            { k: "Fases", v: "04 etapas" },
            { k: "Control", v: "Entregables por etapa" },
            { k: "Resultado", v: "Puesta en marcha documentada" },
          ].map((item) => (
            <div
              key={item.k}
              className="rounded-xl border border-slate-200/80 bg-white/85 px-4 py-3 text-center shadow-sm"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                {item.k}
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-800">{item.v}</p>
            </div>
          ))}
        </div>
      </div>

      <StaggeredFade
        activateAfterMs={360}
        className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4"
      >
        {processSteps.map((p, index) => (
          <article
            key={p.n}
            className="stagger-fade__item relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_1px_0_rgba(15,23,42,0.04),0_10px_28px_rgba(15,23,42,0.06)]"
          >
            {index < processSteps.length - 1 ? (
              <span
                aria-hidden
                className="pointer-events-none absolute left-[calc(100%-0.25rem)] top-10 hidden h-px w-8 bg-gradient-to-r from-[#1E4D8C]/30 to-transparent xl:block"
              />
            ) : null}

            <div className="flex items-start justify-between gap-3">
              <span className="inline-flex h-10 min-w-10 items-center justify-center rounded-xl border border-[#3BAA3F]/35 bg-gradient-to-br from-[#6CC04A]/20 to-[#3BAA3F]/25 px-2 text-[12px] font-extrabold tabular-nums tracking-[0.02em] text-[#2F8C3A] shadow-[0_8px_18px_rgba(59,170,63,0.22)] ring-1 ring-[#6CC04A]/25">
                {p.n}
              </span>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#1E4D8C]/15 bg-[#1E4D8C]/[0.06] text-[#1E4D8C]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4.5 w-4.5"
                  aria-hidden
                >
                  <path d={PROCESS_ICONS[index] ?? PROCESS_ICONS[0]} />
                </svg>
              </span>
            </div>

            <h3 className="mt-4 text-[15px] font-semibold leading-snug text-slate-900">
              {p.t}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{p.d}</p>

            <p className="mt-4 inline-flex rounded-full border border-slate-200/90 bg-slate-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Etapa {p.n}
            </p>
          </article>
        ))}
      </StaggeredFade>

      <p
        className="reveal-t mt-5 text-center text-xs leading-5 text-slate-500"
        data-stagger="6"
      >
        Metodología de proyecto con documentación ajustable a requerimientos
        CFE, obra civil y, en su caso, criterio de apoyo a financiamiento.
      </p>
    </RevealGroup>
  );
}
