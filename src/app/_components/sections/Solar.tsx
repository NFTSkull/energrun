import Image from "next/image";
import { RevealGroup } from "@/app/_components/RevealGroup";
import { StaggeredFade } from "@/app/_components/StaggeredFade";
import { SolarInquiryPanel } from "@/app/_components/sections/SolarInquiryPanel";
import {
  solarApplicationBlocks,
  solarSystemItems,
} from "@/lib/content";

export function Solar(props: { evaluationHref?: string }) {
  const evaluationHref = props.evaluationHref ?? "#contacto";
  return (
    <RevealGroup
      as="section"
      id="solar"
      className="border-b border-slate-200/80 py-20 md:py-28"
    >
      <div>
        {/* 1 · Bloque principal: copy, criterio de sistema, CTAs */}
        <div>
          <p
            className="reveal-t text-xs font-semibold uppercase tracking-[0.22em] text-slate-500"
            data-stagger="0"
          >
            Paneles solares
          </p>
          <h2
            className="reveal-t mt-3 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-[2.15rem]"
            data-stagger="1"
          >
            Paneles solares a la medida de lo que realmente consumes
          </h2>
          <p
            className="reveal-t mt-4 max-w-3xl text-[15px] leading-7 text-slate-600"
            data-stagger="2"
          >
            Reduce el kWh importado de CFE sin comprometer confort ni
            operación. El sistema se dimensiona al recibo real del inmueble y
            opera bajo contrato de interconexión con medidor bidireccional.
          </p>
          <p
            className="reveal-t mt-3 max-w-3xl text-[15px] leading-7 text-slate-600"
            data-stagger="3"
          >
          Cuando el consumo sube demasiado, CFE puede pasar tu recibo a una
          tarifa de alto consumo (DAC), y el costo por kWh aumenta. Un sistema
          bien dimensionado ayuda a mantener el consumo en un rango más
          conveniente.
          </p>

          <div className="reveal-t mt-6" data-stagger="4">
            <SolarInquiryPanel />
          </div>

          <dl
            className="reveal-t mt-8 grid max-w-4xl gap-x-8 gap-y-5 border-t border-slate-200/80 pt-6 sm:grid-cols-2"
            data-stagger="5"
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

          <div
            className="reveal-t mt-8 flex flex-wrap items-center gap-3"
            data-stagger="6"
          >
            <a
              href={evaluationHref}
              className="inline-flex h-11 w-full items-center justify-center rounded-lg border border-slate-300/90 bg-white px-5 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-[#1E4D8C]/35 hover:text-[#1E4D8C] sm:w-auto"
            >
              Solicitar evaluación técnica
            </a>
          </div>
        </div>

        {/* 2 · Aplicaciones: tres columnas en desktop, fila horizontal */}
        <div className="mt-14 border-t border-slate-200/80 pt-12 md:mt-16 md:pt-14 lg:mt-20 lg:pt-16">
          <p
            className="reveal-t text-xs font-semibold uppercase tracking-[0.22em] text-slate-500"
            data-stagger="7"
          >
            Aplicaciones
          </p>
          <h3
            className="reveal-t mt-3 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl"
            data-stagger="8"
          >
            Residencial, comercial e industria ligera
          </h3>
          <p
            className="reveal-t mt-2 max-w-2xl text-sm leading-6 text-slate-600"
            data-stagger="9"
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

          <p
            className="reveal-t mt-8 text-xs leading-6 text-slate-500"
            data-stagger="10"
          >
            El monitoreo de producción y alertas se entrega con aplicación y
            bitácora mensual para auditar el desempeño del sistema.
          </p>
        </div>
      </div>
    </RevealGroup>
  );
}
