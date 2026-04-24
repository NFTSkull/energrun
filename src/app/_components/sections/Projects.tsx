import Image from "next/image";
import { RevealGroup } from "@/app/_components/RevealGroup";
import { StaggeredFade } from "@/app/_components/StaggeredFade";
import { projectPlaceholders } from "@/lib/content";

/**
 * Sección Proyectos: casos por segmento con imagen, texto y solución.
 */
export function Projects() {
  return (
    <RevealGroup
      as="section"
      id="proyectos"
      className="border-b border-slate-200/80 py-20 md:py-28"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p
            className="reveal-t text-xs font-semibold uppercase tracking-[0.22em] text-slate-500"
            data-stagger="0"
          >
            Proyectos
          </p>
          <h2
            className="reveal-t mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-[2rem]"
            data-stagger="1"
          >
            Casos por segmento
          </h2>
          <p
            className="reveal-t mt-3 text-[15px] leading-7 text-slate-600"
            data-stagger="2"
          >
            Cada ficha combina imagen, tipo de proyecto, ubicación y solución
            instalada. Los textos resumen enfoques típicos; el alcance final
            se define en evaluación.
          </p>
        </div>
      </div>

      <StaggeredFade
        withMedia
        activateAfterMs={320}
        className="mt-12 grid gap-5 md:grid-cols-3"
      >
          {projectPlaceholders.map((p) => (
            <article
              key={p.id}
              className="stagger-fade__item group flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-[#1E4D8C]/25 hover:shadow-md"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src={p.image.src}
                  alt={p.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.02]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100"
                />
                <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
                  <span className="inline-flex rounded-full border border-white/20 bg-slate-950/55 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                    {p.segment}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-base font-semibold text-slate-900">
                  {p.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  {p.location}
                </p>
                <dl className="mt-4 grid gap-1 text-sm">
                  <div className="flex gap-2">
                    <dt className="w-20 flex-none font-semibold text-slate-900">
                      Solución
                    </dt>
                    <dd className="text-slate-600">{p.solution}</dd>
                  </div>
                </dl>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  {p.summary}
                </p>
              </div>
            </article>
          ))}
      </StaggeredFade>

      <p
        className="reveal-t mt-8 text-xs leading-6 text-slate-500"
        data-stagger="5"
      >
        Imágenes representativas por segmento. Casos puntuales y cifras se
        comparten bajo criterio comercial y autorización del cliente.
      </p>
    </RevealGroup>
  );
}
