import Image from "next/image";
import Link from "next/link";
import { RevealGroup } from "@/app/_components/RevealGroup";
import { businessLines } from "@/lib/content";

export function BusinessLines() {
  return (
    <RevealGroup
      as="section"
      id="lineas"
      className="border-b border-slate-200/80 py-16 md:py-24"
    >
      <div className="max-w-2xl">
        <p
          className="reveal-t text-xs font-semibold uppercase tracking-[0.22em] text-slate-500"
          data-stagger="0"
        >
          Nuestras líneas principales
        </p>
        <h2
          className="reveal-t mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-[2.15rem]"
          data-stagger="1"
        >
          Solar o generadores: elige tu camino
        </h2>
        <p
          className="reveal-t mt-4 text-[15px] leading-7 text-slate-600"
          data-stagger="2"
        >
          Reduce consumo con solar o protege tu operación con generadores. Entra
          y recibe una cotización.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {businessLines.map((line, index) => (
          <Link
            key={line.id}
            href={line.href}
            className="reveal-t group block overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[#1E4D8C]/25 hover:shadow-[0_20px_40px_rgba(15,39,68,0.1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3FA9F5]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            aria-label={`${line.kicker} · ${line.title} · abrir detalle de ${line.title}`}
            data-stagger={String(index + 3)}
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
              <Image
                src={line.image.src}
                alt=""
                fill
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-slate-950/68 via-slate-950/38 to-slate-950/12"
              />
              <div className="absolute bottom-4 left-4">
                <span className="inline-flex rounded-full border border-white/20 bg-slate-950/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                  {line.kicker}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-7">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
                {line.title}
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-slate-600">
                {line.description}
              </p>
              <ul className="mt-5 space-y-2.5 text-sm text-slate-700">
                {line.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5">
                    <span
                      aria-hidden
                      className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-[#1E4D8C]"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-7 inline-flex h-11 w-full items-center justify-center rounded-lg bg-[#1E4D8C] px-5 text-sm font-semibold text-white transition group-hover:-translate-y-0.5 group-hover:bg-[#17407a]">
                {line.cta}
                <span aria-hidden className="ml-2">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </RevealGroup>
  );
}
