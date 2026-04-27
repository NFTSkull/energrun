import { RevealGroup } from "@/app/_components/RevealGroup";
import { generatorBenefits } from "@/lib/content";

const BENEFIT_ICONS: string[] = [
  "M13 2L3 14h6l-1 8 10-12h-6l1-8z", // continuidad / energía
  "M12 22c4.2 0 7-2.2 7-6s-2.2-4.2-3.2-4.8L12 2 8.2 11.2C7.2 11.8 5 12.8 5 16c0 3.8 2.8 6 7 6z", // protección
  "M3 6h8v4H3V6zm10 0h8v4h-8V6zM3 14h8v4H3v-4zm10 0h8v4h-8v-4z", // escala / módulos
  "M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", // supervisión
];

export function GeneratorBenefits() {
  return (
    <RevealGroup
      as="section"
      id="beneficios-generadores"
      className="border-b border-slate-200/80 bg-gradient-to-b from-slate-50/50 to-white py-20 md:py-28"
    >
      <div className="w-full">
        <div className="reveal-t relative overflow-hidden rounded-2xl border border-slate-200/80 bg-[#0f2744] p-7 text-white shadow-[0_22px_50px_rgba(15,39,68,0.2)] sm:p-8">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.55) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#3FA9F5]/20 blur-3xl"
          />
          <div className="relative grid gap-7 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60"
                data-stagger="0"
              >
                Beneficios del respaldo automático
              </p>
              <h2
                className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-[2.2rem]"
                data-stagger="1"
              >
                Continuidad diseñada para cargas críticas
              </h2>
              <p
                className="mt-4 max-w-2xl text-sm leading-7 text-white/75"
                data-stagger="2"
              >
                Primero acordamos qué debe seguir encendido y con qué
                prioridad. Con eso se calcula el equipo: a tu operación, no a
                cifras de potencia sueltas o genéricas.
              </p>
            </div>
            <div className="grid gap-2.5 sm:grid-cols-3 lg:grid-cols-1">
              {[
                { k: "Conmutación", v: "ATS / prioridad" },
                { k: "Escala", v: "Residencial a industrial" },
                { k: "Operación", v: "Pruebas y monitoreo" },
              ].map((chip) => (
                <div
                  key={chip.k}
                  className="rounded-lg border border-white/15 bg-white/[0.06] px-3 py-2.5 backdrop-blur-sm"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                    {chip.k}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">{chip.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {generatorBenefits.map((benefit, index) => (
            <article
              key={benefit.t}
              className="reveal-t group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[#1E4D8C]/25 hover:shadow-[0_18px_40px_rgba(15,39,68,0.1)]"
              data-stagger={String(index + 3)}
            >
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#1E4D8C]/35 via-[#3FA9F5]/25 to-transparent opacity-0 transition duration-300 group-hover:opacity-100"
              />
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    aria-hidden
                    className="h-full w-px flex-1 min-h-[1.5rem] rounded-full bg-gradient-to-b from-[#1E4D8C]/0 via-[#1E4D8C]/35 to-[#3FA9F5]/0"
                  />
                  <div className="my-2 inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-[#1E4D8C]/[0.07] text-[#1E4D8C] ring-1 ring-[#1E4D8C]/12">
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
                      <path d={BENEFIT_ICONS[index] ?? BENEFIT_ICONS[0]} />
                    </svg>
                  </div>
                  <div
                    aria-hidden
                    className="h-full w-px flex-1 min-h-[1.5rem] rounded-full bg-gradient-to-b from-[#3FA9F5]/0 via-[#3FA9F5]/30 to-[#1E4D8C]/0"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                    {benefit.t}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{benefit.d}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </RevealGroup>
  );
}
