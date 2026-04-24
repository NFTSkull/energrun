import { RevealGroup } from "@/app/_components/RevealGroup";
import { generatorSelectionSteps } from "@/lib/content";

export function GeneratorSelection() {
  return (
    <RevealGroup
      as="section"
      id="seleccion-generadores"
      className="border-b border-slate-200/80 py-16 md:py-24"
    >
      <div className="max-w-2xl">
        <p
          className="reveal-t text-xs font-semibold uppercase tracking-[0.22em] text-slate-500"
          data-stagger="0"
        >
          Cómo seleccionar solución
        </p>
        <h2
          className="reveal-t mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-[2.15rem]"
          data-stagger="1"
        >
          Criterio técnico para elegir equipo y transferencia
        </h2>
      </div>

      <ol className="mt-8 grid list-none gap-4 p-0 md:grid-cols-2">
        {generatorSelectionSteps.map((step, index) => (
          <li
            key={step.n}
            className="reveal-t rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm"
            data-stagger={String(index + 2)}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1E4D8C]">
              Paso {step.n}
            </p>
            <h3 className="mt-2 text-base font-semibold text-slate-900">{step.t}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{step.d}</p>
          </li>
        ))}
      </ol>
    </RevealGroup>
  );
}
