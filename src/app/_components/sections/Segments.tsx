import { RevealGroup } from "@/app/_components/RevealGroup";
import { StaggeredFade } from "@/app/_components/StaggeredFade";
import { segments } from "@/lib/content";

export function Segments(props: { evaluationHref?: string }) {
  const evaluationHref = props.evaluationHref ?? "#contacto";
  return (
    <RevealGroup
      as="section"
      id="segmentos"
      className="border-b border-slate-200/80 py-20 md:py-28"
    >
      <div className="max-w-2xl">
        <p
          className="reveal-t text-xs font-semibold uppercase tracking-[0.22em] text-slate-500"
          data-stagger="0"
        >
          A quién servimos
        </p>
        <h2
          className="reveal-t mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-[2.15rem]"
          data-stagger="1"
        >
          Casas, negocios e industria ligera
        </h2>
      </div>

      <StaggeredFade
        activateAfterMs={260}
        className="mt-12 grid gap-5 md:grid-cols-3"
      >
        {segments.map((s) => (
          <article
            key={s.id}
            className="stagger-fade__item flex flex-col rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#1E4D8C]/25 hover:shadow-md sm:p-7"
          >
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                Segmento
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-900">
                {s.title}
              </h3>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1E4D8C]/80">
                  Problema
                </p>
                <p className="mt-1.5 text-sm leading-6 text-slate-600">
                  {s.problem}
                </p>
              </div>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1E4D8C]/80">
                  Solución
                </p>
                <p className="mt-1.5 text-sm leading-6 text-slate-600">
                  {s.solution}
                </p>
              </div>

              <a
                href={evaluationHref}
                className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E4D8C] transition hover:gap-2.5"
              >
                Agendar evaluación <span aria-hidden>→</span>
              </a>
          </article>
        ))}
      </StaggeredFade>
    </RevealGroup>
  );
}
