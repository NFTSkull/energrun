import { RevealGroup } from "@/app/_components/RevealGroup";
import { solarMonitoringPoints } from "@/lib/content";

export function SolarMonitoring() {
  return (
    <RevealGroup
      as="section"
      id="monitoreo-solar"
      className="border-b border-slate-200/80 bg-gradient-to-b from-white to-slate-50/40 py-12 md:py-16"
    >
      <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:gap-12">
        <div>
          <p
            className="reveal-t text-xs font-semibold uppercase tracking-[0.22em] text-slate-500"
            data-stagger="0"
          >
            Monitoreo e integración
          </p>
          <h2
            className="reveal-t mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-[2.15rem]"
            data-stagger="1"
          >
            Visibilidad del sistema para decisiones de consumo
          </h2>
          <p
            className="reveal-t mt-4 text-sm leading-7 text-slate-600"
            data-stagger="2"
          >
            La operación solar no termina en la instalación: requiere lectura de
            datos para sostener rendimiento y planear crecimiento de capacidad.
          </p>
        </div>
        <ul
          className="reveal-t rounded-2xl border border-slate-200/80 bg-white p-6 text-sm leading-7 text-slate-700 shadow-sm"
          data-stagger="3"
        >
          {solarMonitoringPoints.map((point) => (
            <li key={point} className="flex items-start gap-2.5">
              <span
                aria-hidden
                className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-[#6CC04A]"
              />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </RevealGroup>
  );
}
