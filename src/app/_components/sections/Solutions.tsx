import { RevealGroup } from "@/app/_components/RevealGroup";
import { StaggeredFade } from "@/app/_components/StaggeredFade";
import { solutions } from "@/lib/content";

const ICONS: Record<string, React.ReactNode> = {
  solar: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      className="h-5 w-5"
      aria-hidden
    >
      <rect x="2" y="3" width="8" height="5" rx="0.5" />
      <rect x="12" y="3" width="8" height="5" rx="0.5" />
      <rect x="2" y="9" width="8" height="5" rx="0.5" />
      <rect x="12" y="9" width="8" height="5" rx="0.5" />
      <path strokeLinecap="round" d="M4 20h2M8 20h1M20 20h-3" />
    </svg>
  ),
  respaldo: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden
    >
      <path d="M7 1v12h3.5L9 22l8-10h-4l2.5-11H7z" />
    </svg>
  ),
  integracion: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-5 w-5"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 7h6v6H4zM14 11h6v6h-6zM10 13l4-2"
      />
    </svg>
  ),
};

export function Solutions() {
  return (
    <RevealGroup
      as="section"
      id="soluciones"
      className="border-b border-slate-200/80 py-20 md:py-28"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p
            className="reveal-t text-xs font-semibold uppercase tracking-[0.22em] text-slate-500"
            data-stagger="0"
          >
            Soluciones
          </p>
          <h2
            className="reveal-t mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-[2.15rem]"
            data-stagger="1"
          >
            Tres líneas con un mismo criterio técnico
          </h2>
        </div>
        <p
          className="reveal-t max-w-md text-sm leading-6 text-slate-600"
          data-stagger="2"
        >
          Cada línea puede operar por separado o en conjunto. El alcance se
          fija en el proyecto, no por catálogo.
        </p>
      </div>

      <StaggeredFade
        activateAfterMs={320}
        className="mt-12 grid gap-5 md:grid-cols-3"
      >
          {solutions.map((s) => (
            <article
              key={s.id}
              className="stagger-fade__item group flex flex-col rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[#1E4D8C]/25 hover:shadow-[0_20px_40px_rgba(15,39,68,0.08)] sm:p-7"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#1E4D8C]/6 text-[#1E4D8C] ring-1 ring-[#1E4D8C]/10">
                  {ICONS[s.id]}
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                  {s.kicker}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {s.description}
              </p>

              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span
                      aria-hidden
                      className="mt-2 inline-block h-1 w-1 flex-none rounded-full bg-[#6CC04A]"
                    />
                    {b}
                  </li>
                ))}
              </ul>

              <a
                href={s.href}
                className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E4D8C] transition group-hover:gap-2.5"
              >
                Conocer más <span aria-hidden>→</span>
              </a>
            </article>
          ))}
      </StaggeredFade>
    </RevealGroup>
  );
}
