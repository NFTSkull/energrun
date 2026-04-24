import { RevealGroup } from "@/app/_components/RevealGroup";
import { StaggeredFade } from "@/app/_components/StaggeredFade";
import { howItWorks } from "@/lib/content";

export function HowItWorks() {
  return (
    <RevealGroup
      as="section"
      id="como-funciona"
      className="border-b border-slate-200/80 bg-gradient-to-b from-white to-slate-50/40 py-16 md:py-24"
    >
      <div className="max-w-2xl">
        <p
          className="reveal-t text-xs font-semibold uppercase tracking-[0.22em] text-slate-500"
          data-stagger="0"
        >
          Cómo opera el sistema
        </p>
        <h2
          className="reveal-t mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-[2.15rem]"
          data-stagger="1"
        >
          Generación, respaldo y monitoreo bajo un solo criterio
        </h2>
        <div
          className="reveal-t mt-4 h-px w-16 bg-gradient-to-r from-[#1E4D8C]/30 to-transparent"
          data-stagger="2"
          aria-hidden
        />
      </div>

      <StaggeredFade activateAfterMs={300} className="mt-8 md:mt-9">
        <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_1px_0_rgba(15,23,42,0.04),0_8px_24px_rgba(15,23,42,0.04)]">
          <ol className="m-0 grid list-none grid-cols-1 divide-y divide-slate-200/80 p-0 md:grid-cols-3 md:divide-x md:divide-y-0">
            {howItWorks.map((s) => (
              <li
                key={s.n}
                className="stagger-fade__item p-5 sm:p-6"
              >
                  <div className="flex items-start gap-3.5 sm:gap-4">
                    <div
                      aria-hidden
                      className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-gradient-to-br from-[#1E4D8C] to-[#3FA9F5] text-[11px] font-bold tabular-nums tracking-tight text-white shadow-sm"
                    >
                      {s.n}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-[15px] font-semibold leading-snug text-slate-900">
                        {s.t}
                      </h3>
                      <p className="mt-1.5 text-sm leading-6 text-slate-600">
                        {s.d}
                      </p>
                    </div>
                  </div>
                </li>
            ))}
          </ol>
        </div>
      </StaggeredFade>
    </RevealGroup>
  );
}
