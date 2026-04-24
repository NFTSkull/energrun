import { RevealGroup } from "@/app/_components/RevealGroup";

export function Financing(props: { evaluationHref?: string }) {
  const evaluationHref = props.evaluationHref ?? "#contacto";
  return (
    <RevealGroup
      as="section"
      id="financiamiento"
      className="border-b border-slate-200/80 py-20 md:py-28"
    >
      <div className="grid gap-10 border-t border-slate-200/80 pt-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <p
            className="reveal-t text-xs font-semibold uppercase tracking-[0.22em] text-slate-500"
            data-stagger="0"
          >
            Financiamiento
          </p>
          <h2
            className="reveal-t mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-[1.85rem]"
            data-stagger="1"
          >
            Opción de financiamiento para proyectos elegibles
          </h2>
          <p
            className="reveal-t mt-4 text-[15px] leading-7 text-slate-600"
            data-stagger="2"
          >
            Si cuentas con crédito Mejoravit, orientamos su aplicación según
            el tipo de instalación. Es una facilidad de pago, no sustituye la
            propuesta técnica.
          </p>
        </div>

        <div
          className="reveal-t"
          data-stagger="3"
        >
            <ul className="divide-y divide-slate-200/80 border-y border-slate-200/80">
              {[
                "Aplicable a proyectos elegibles de FV y/o respaldo",
                "Requiere cotización en el IMSS y revisión de requisitos",
                "Complementa la propuesta técnica, no la redefine",
              ].map((x) => (
                <li
                  key={x}
                  className="flex items-start gap-3 py-3 text-sm leading-6 text-slate-700"
                >
                  <span
                    aria-hidden
                    className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-[#6CC04A]"
                  />
                  {x}
                </li>
              ))}
            </ul>
            <a
              href={evaluationHref}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E4D8C] transition hover:gap-2.5"
            >
              Revisar si aplica a mi proyecto <span aria-hidden>→</span>
            </a>
        </div>
      </div>
    </RevealGroup>
  );
}
