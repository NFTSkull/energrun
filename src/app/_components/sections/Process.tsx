import { RevealGroup } from "@/app/_components/RevealGroup";
import { StaggeredFade } from "@/app/_components/StaggeredFade";
import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <RevealGroup
      as="section"
      id="proceso"
      className="border-b border-slate-200/80 bg-gradient-to-b from-slate-50/40 to-white py-16 md:py-24"
    >
      <div className="max-w-2xl">
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
          className="reveal-t mt-4 max-w-xl text-sm leading-7 text-slate-600"
          data-stagger="2"
        >
          Te entregamos reportes, planos y actas en cada etapa, con un mismo
          estándar técnico. Así todo queda claro y consistente de principio a
          fin.
        </p>
        <div
          className="reveal-t mt-4 h-px w-16 bg-gradient-to-r from-[#1E4D8C]/30 to-transparent"
          data-stagger="3"
          aria-hidden
        />
      </div>

      <StaggeredFade activateAfterMs={360} className="mt-8 md:mt-9">
        <div>
          <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_1px_0_rgba(15,23,42,0.04),0_8px_24px_rgba(15,23,42,0.04)]">
            <p className="border-b border-slate-200/80 bg-slate-50/80 px-4 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500 sm:px-5 sm:text-left">
              Metodología de proyecto
            </p>
            <ol className="m-0 grid list-none grid-cols-1 gap-px bg-slate-200/80 p-0 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((p) => (
                <li
                  key={p.n}
                  className="stagger-fade__item min-h-0 bg-white p-4 sm:p-5"
                >
                    <div className="flex h-full min-h-0 flex-col">
                      <div className="inline-flex h-8 w-8 items-center justify-center self-start rounded-lg bg-gradient-to-br from-[#1E4D8C] to-[#3FA9F5] text-[11px] font-bold tabular-nums tracking-tight text-white shadow-sm">
                        {p.n}
                      </div>
                      <h3 className="mt-3.5 text-[15px] font-semibold leading-snug text-slate-900">
                        {p.t}
                      </h3>
                      <p className="mt-1.5 flex-1 text-sm leading-6 text-slate-600">
                        {p.d}
                      </p>
                    </div>
                  </li>
              ))}
            </ol>
          </div>
          <p
            className="reveal-t mt-4 text-center text-xs leading-5 text-slate-500 sm:text-left"
            data-stagger="5"
          >
            Documentación ajustable a requerimientos CFE, obra civil y, en su
            caso, criterio de apoyo a financiamiento.
          </p>
        </div>
      </StaggeredFade>
    </RevealGroup>
  );
}
