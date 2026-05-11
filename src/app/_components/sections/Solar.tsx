import Image from "next/image";
import { RevealGroup } from "@/app/_components/RevealGroup";
import { StaggeredFade } from "@/app/_components/StaggeredFade";
import { SolarInquiryPanel } from "@/app/_components/sections/SolarInquiryPanel";
import { solarApplicationBlocks, solarSystemItems } from "@/lib/content";

export function Solar(props: { evaluationHref?: string; compactTop?: boolean }) {
  const evaluationHref = props.evaluationHref ?? "#contacto";
  const compactTop = props.compactTop ?? false;
  const sectionClassName = compactTop
    ? "relative border-b border-slate-200/80 pt-8 pb-12 md:pt-10 md:pb-14"
    : "border-b border-slate-200/80 py-12 md:py-16";
  const topBlockClassName = compactTop
    ? "rounded-2xl border border-slate-200/85 bg-white p-4 shadow-[0_18px_40px_rgba(15,39,68,0.08)] sm:p-6"
    : "";

  return (
    <RevealGroup
      as="section"
      id="solar"
      className={sectionClassName}
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* 1 · Bloque principal: copy, criterio de sistema, CTAs */}
        <div className={`text-center ${topBlockClassName}`.trim()}>
          <div className="mx-auto w-full min-w-0 max-w-3xl text-center text-[clamp(0.7rem,2.85vw,1.125rem)] tracking-tight text-slate-900 sm:text-[clamp(0.8125rem,2.2vw,1.25rem)] md:text-[clamp(0.875rem,1.65vw,1.375rem)]">
            <h2
              className="reveal-t font-semibold leading-snug whitespace-nowrap"
              data-stagger="0"
            >
              Paneles solares a la medida de lo que realmente consumes
            </h2>
            <p className="reveal-t mx-auto mt-3 max-w-3xl" data-stagger="1">
              <span className="mx-auto inline-flex max-w-full flex-wrap items-baseline justify-center gap-x-1.5 gap-y-0.5 rounded-xl border border-[#1E4D8C]/18 bg-gradient-to-br from-[#1E4D8C]/[0.06] to-[#3FA9F5]/[0.05] px-[0.65em] py-[0.38em] text-[0.72em] font-normal leading-snug text-slate-700 shadow-sm">
                <span className="font-semibold tabular-nums text-[#1E4D8C]">
                  25 a 30 años de garantía
                </span>
                <span className="font-semibold text-[#1E4D8C]">
                  en producción de energía
                </span>
              </span>
            </p>
          </div>

          <div className="reveal-t mx-auto mt-6 max-w-2xl text-left" data-stagger="2">
            <SolarInquiryPanel />
          </div>

          <div
            className="reveal-t mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-3"
            data-stagger="3"
          >
            <a
              href={evaluationHref}
              className="inline-flex h-11 w-full items-center justify-center rounded-lg border border-slate-300/90 bg-white px-5 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-[#1E4D8C]/35 hover:text-[#1E4D8C] sm:w-auto"
            >
              Solicitar evaluación técnica
            </a>
          </div>

          <dl
            className="reveal-t mx-auto mt-8 grid max-w-4xl gap-x-8 gap-y-5 border-t border-slate-200/80 pt-6 text-left sm:grid-cols-2"
            data-stagger="4"
          >
              {solarSystemItems.map((it) => (
                <div key={it.t} className="min-w-0">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {it.t}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-6 text-slate-700">
                    {it.d}
                  </dd>
                </div>
              ))}
          </dl>
        </div>

        {/* 2 · Aplicaciones: tres columnas en desktop, fila horizontal */}
        <div className="mt-12 border-t border-slate-200/80 pt-10 md:mt-14 md:pt-12 lg:mt-16 lg:pt-14">
          <p
            className="reveal-t text-center text-xs font-semibold uppercase tracking-[0.22em] text-slate-500"
            data-stagger="5"
          >
            Aplicaciones
          </p>
          <h3
            className="reveal-t mt-3 text-center text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl"
            data-stagger="6"
          >
            Residencial, comercial e industria ligera
          </h3>
          <p
            className="reveal-t mx-auto mt-2 max-w-2xl text-center text-sm leading-6 text-slate-600"
            data-stagger="7"
          >
            Tres enfoques con criterio de ingeniería. Cada bloque incluye
            referencia visual del tipo de inmueble o sector.
          </p>

          <StaggeredFade
            withMedia
            activateAfterMs={500}
            className="mt-8 grid min-w-0 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-6"
          >
              {solarApplicationBlocks.map((b, i) => (
                <article
                  key={b.id}
                  className="stagger-fade__item group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-[#1E4D8C]/25 hover:shadow-md"
                >
                  <div className="relative aspect-[4/3] w-full min-h-0 shrink-0 overflow-hidden bg-slate-100">
                    <Image
                      src={b.image.src}
                      alt={b.image.alt}
                      fill
                      priority={i === 0}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-700 ease-out group-hover:scale-[1.02]"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/0 to-transparent"
                    />
                    <p className="absolute bottom-3 left-3 right-3 text-sm font-semibold tracking-tight text-white drop-shadow-sm">
                      {b.title}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <p className="text-sm leading-6 text-slate-600">
                      {b.description}
                    </p>
                    <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                      {b.points.map((p) => (
                        <li key={p} className="flex items-start gap-2.5">
                          <span
                            aria-hidden
                            className="mt-2 inline-block h-1 w-1 flex-none rounded-full bg-[#1E4D8C]"
                          />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
          </StaggeredFade>

        </div>
      </div>
    </RevealGroup>
  );
}
