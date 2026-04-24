import { RevealGroup } from "@/app/_components/RevealGroup";
import { StaggeredFade } from "@/app/_components/StaggeredFade";
import { benefits } from "@/lib/content";

const ICON_PATHS: string[] = [
  "M3 13l4-4 4 4 4-6 4 6 2-2",
  "M12 3v10m-6 6a6 6 0 1 1 12 0H6z",
  "M5 6h14v12H5zM5 10h14",
  "M4 12h4l2 6 4-12 2 6h4",
];

export function Benefits() {
  return (
    <RevealGroup
      as="section"
      id="beneficios"
      className="border-b border-slate-200/80 bg-gradient-to-b from-slate-50/50 to-white py-16 md:py-24"
    >
      <div className="max-w-2xl">
        <p
          className="reveal-t text-xs font-semibold uppercase tracking-[0.22em] text-slate-500"
          data-stagger="0"
        >
          Beneficios
        </p>
        <h2
          className="reveal-t mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-[2.15rem]"
          data-stagger="1"
        >
          Resultados concretos para la operación
        </h2>
        <div
          className="reveal-t mt-4 h-px w-16 bg-gradient-to-r from-[#1E4D8C]/30 to-transparent"
          data-stagger="2"
          aria-hidden
        />
      </div>

      <StaggeredFade activateAfterMs={300} className="mt-8 md:mt-9">
        <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_1px_0_rgba(15,23,42,0.04),0_8px_24px_rgba(15,23,42,0.04)] sm:p-5 md:p-6">
          <ul className="m-0 grid list-none grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-3.5">
            {benefits.map((b, i) => (
              <li
                key={b.t}
                className="stagger-fade__item flex min-w-0 flex-col items-start"
              >
                  <div
                    className="flex h-7 w-7 items-center justify-center rounded-md bg-[#1E4D8C]/[0.06] text-[#1E4D8C] ring-1 ring-[#1E4D8C]/10"
                    aria-hidden
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3.5 w-3.5"
                    >
                      <path d={ICON_PATHS[i] ?? ICON_PATHS[0]} />
                    </svg>
                  </div>
                  <h3 className="mt-2 text-[15px] font-semibold leading-snug text-slate-900">
                    {b.t}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {b.d}
                  </p>
                </li>
              ))}
          </ul>
        </div>
      </StaggeredFade>
    </RevealGroup>
  );
}
