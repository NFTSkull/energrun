import { RevealGroup } from "@/app/_components/RevealGroup";
import { institutionalValuePoints } from "@/lib/content";

const VALUE_ICONS: string[] = [
  "M4 18h16M6 14V8m6 6V6m6 8V10",
  "M4 7h16M4 12h16M4 17h10",
  "M3 12h4l2 6 4-12 2 6h6",
];

export function InstitutionalValue() {
  return (
    <RevealGroup
      as="section"
      id="propuesta-valor"
      className="border-b border-slate-200/80 bg-gradient-to-b from-white to-slate-50/40 py-20 md:py-28"
    >
      <div className="reveal-t relative overflow-hidden rounded-2xl border border-slate-200/80 bg-[#0f2744] p-7 text-white shadow-[0_24px_60px_rgba(15,39,68,0.24)] sm:p-9">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
        <div className="relative grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60"
              data-stagger="0"
            >
              Propuesta de valor
            </p>
            <h2
              className="mt-3 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-[2.35rem]"
              data-stagger="1"
            >
              Soluciones energéticas con criterio empresarial
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/78" data-stagger="2">
              Integramos ingeniería, ejecución y continuidad en un modelo de
              entrega único, diseñado para decisiones de negocio y operación.
            </p>
          </div>
          <div className="grid gap-3 rounded-xl border border-white/15 bg-white/[0.06] p-4 backdrop-blur-sm sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-lg border border-white/12 bg-white/[0.05] px-3 py-2.5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                Modelo
              </p>
              <p className="mt-1 text-sm font-semibold text-white">End-to-end</p>
            </div>
            <div className="rounded-lg border border-white/12 bg-white/[0.05] px-3 py-2.5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                Cobertura
              </p>
              <p className="mt-1 text-sm font-semibold text-white">Solar + respaldo</p>
            </div>
            <div className="rounded-lg border border-white/12 bg-white/[0.05] px-3 py-2.5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                Enfoque
              </p>
              <p className="mt-1 text-sm font-semibold text-white">Operativo y técnico</p>
            </div>
          </div>
        </div>
      </div>

      <div className="-mt-6 grid gap-4 md:-mt-8 md:grid-cols-3">
        {institutionalValuePoints.map((point, index) => (
          <article
            key={point.title}
            className="reveal-t relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[#1E4D8C]/25 hover:shadow-[0_18px_36px_rgba(15,39,68,0.1)]"
            data-stagger={String(index + 3)}
          >
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
                <path d={VALUE_ICONS[index] ?? VALUE_ICONS[0]} />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">
              {point.title}
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">{point.description}</p>
          </article>
        ))}
      </div>
    </RevealGroup>
  );
}
