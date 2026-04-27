import Image from "next/image";
import { RevealGroup } from "@/app/_components/RevealGroup";
import { GeneratorArticleReveal } from "@/app/_components/sections/GeneratorArticleReveal";
import { type GeneratorBlock, generatorBlocks } from "@/lib/content";

const COMMERCIAL_MULTI_ID = "liquid-cooled-comercial";

function SpecGrid(props: { block: GeneratorBlock }) {
  if (props.block.id === COMMERCIAL_MULTI_ID) {
    const series = props.block.specs.slice(0, 3);
    const common = props.block.specs.slice(3);
    return (
      <div className="space-y-6">
        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            Líneas de producto
          </h4>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {series.map((sp) => (
              <div
                key={sp.label}
                className="min-w-0 rounded-xl border border-slate-200/90 bg-slate-50/90 p-4 shadow-sm"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  {sp.label}
                </p>
                <p className="mt-1.5 text-sm font-semibold leading-snug text-slate-900">
                  {sp.value}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            Plataforma común
          </h4>
          <dl className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {common.map((sp) => (
              <div key={sp.label} className="min-w-0">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {sp.label}
                </dt>
                <dd className="mt-1 text-sm font-medium text-slate-900">
                  {sp.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    );
  }

  return (
    <dl className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
      {props.block.specs.map((sp) => (
        <div
          key={sp.label}
          className="min-w-0 rounded-lg border border-slate-200/60 bg-white/60 px-3 py-2.5"
        >
          <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
            {sp.label}
          </dt>
          <dd className="mt-1 text-sm font-medium text-slate-900">{sp.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function GeneratorsCatalog(props: { whatsappHref: string; evaluationHref?: string }) {
  const evaluationHref = props.evaluationHref ?? "#contacto";
  const total = generatorBlocks.length;
  return (
    <section
      id="generadores"
      className="border-b border-slate-200/80 bg-gradient-to-b from-slate-50/40 to-white py-12 md:py-16"
    >
      <RevealGroup as="div" className="max-w-3xl">
        <p
          className="reveal-t text-xs font-semibold uppercase tracking-[0.22em] text-slate-500"
          data-stagger="0"
        >
          Catálogo Generac
        </p>
        <h2
          className="reveal-t mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-[2.15rem]"
          data-stagger="1"
        >
          Respaldo para cada escala
        </h2>
        <p
          className="reveal-t mt-4 text-sm leading-7 text-slate-600 sm:mt-3"
          data-stagger="2"
        >
          Equipos seleccionados por lista de cargas, combustible disponible y
          nivel de continuidad requerido.
        </p>
        <div
          className="reveal-t mt-6 h-px w-16 bg-gradient-to-r from-[#1E4D8C]/25 to-transparent"
          data-stagger="3"
          aria-hidden
        />
      </RevealGroup>

      <div className="mt-12 space-y-8 md:mt-16 md:space-y-10">
        {generatorBlocks.map((block, i) => {
          const reverse = i % 2 === 1;
          const n = String(i + 1).padStart(2, "0");

          const textCol = (
            <div
              className={[
                "flex flex-col justify-center p-6 sm:p-8 lg:p-10",
                reverse ? "md:order-2" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div
                className="gen-reveal-stagger flex flex-wrap items-baseline justify-between gap-3"
                data-step="0"
              >
                <span
                  className="text-[10px] font-medium tabular-nums tracking-[0.2em] text-slate-400"
                  aria-hidden
                >
                  {n} / {String(total).padStart(2, "0")}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#1E4D8C]/15 bg-[#1E4D8C]/[0.05] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1E4D8C]">
                  {block.tag}
                </span>
              </div>

              <h3
                className="gen-reveal-stagger mt-5 text-2xl font-semibold tracking-tight text-slate-900 sm:text-[1.65rem]"
                data-step="1"
              >
                {block.title}
              </h3>
              <p
                className="gen-reveal-stagger mt-3 text-[15px] font-medium leading-7 text-slate-800"
                data-step="2"
              >
                {block.subtitle}
              </p>
              <p
                className="gen-reveal-stagger mt-2 text-[15px] leading-7 text-slate-600"
                data-step="3"
              >
                {block.description}
              </p>

              <div
                className="gen-reveal-stagger mt-7 border-t border-slate-200/80 pt-7"
                data-step="4"
              >
                <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Especificaciones
                </h4>
                <div className="mt-4">
                  <SpecGrid block={block} />
                </div>
              </div>

              <div
                className="gen-reveal-stagger mt-7 border-t border-slate-200/80 pt-7"
                data-step="5"
              >
                <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Criterio de entrega
                </h4>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {block.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm leading-6 text-slate-700"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#6CC04A]"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="gen-reveal-stagger mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
                data-step="6"
              >
                <a
                  href={props.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-[#1E4D8C] px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#17407a] sm:w-auto sm:flex-none"
                >
                  Cotizar este equipo
                </a>
                <a
                  href={evaluationHref}
                  className="inline-flex h-11 w-full items-center justify-center rounded-lg border border-slate-300/90 bg-slate-50/80 px-5 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-[#1E4D8C]/35 hover:text-[#1E4D8C] sm:w-auto sm:flex-none"
                >
                  Solicitar dimensionamiento
                </a>
              </div>
            </div>
          );

          const imageCol = (
            <div
              className={[
                "gen-reveal-media flex h-full min-h-0 min-w-0 items-center justify-center self-stretch border-t border-slate-200/60 bg-slate-50/30 p-4 sm:p-5 md:border-t-0 lg:p-6",
                reverse
                  ? "md:order-1 md:border-r md:border-l-0"
                  : "md:border-l",
              ].join(" ")}
              data-step="7"
            >
              <GeneratorVisual
                title={block.title}
                tag={block.tag}
                image={block.image}
                priority={i === 0}
              />
            </div>
          );

          return (
            <GeneratorArticleReveal
              key={block.id}
              id={block.id}
              className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_1px_0_rgba(15,23,42,0.04),0_12px_40px_rgba(15,23,42,0.04)]"
            >
              <div className="grid items-stretch gap-0 md:grid-cols-2">
                {textCol}
                {imageCol}
              </div>
            </GeneratorArticleReveal>
          );
        })}
      </div>
    </section>
  );
}

type GenImg = (typeof generatorBlocks)[number]["image"];

function generatorImageClassName(img: GenImg): string {
  const fit = img.fit === "contain" ? "object-contain" : "object-cover";
  const scale =
    img.fit === "contain"
      ? "group-hover:scale-[1.01]"
      : "group-hover:scale-[1.02]";
  return [fit, "object-center", "transition duration-700 ease-out", scale]
    .filter(Boolean)
    .join(" ");
}

function GeneratorVisual(props: {
  title: string;
  tag: string;
  image: GenImg;
  priority: boolean;
}) {
  return (
    <div className="group relative flex min-h-0 min-w-0 aspect-[4/3] w-full items-stretch">
      <div className="relative h-full w-full overflow-hidden bg-[#0c2140]">
        <Image
          src={props.image.src}
          alt={props.image.alt}
          fill
          priority={props.priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className={generatorImageClassName(props.image)}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0f2744]/20 to-transparent"
        />
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
          <div className="flex items-end gap-3">
            <div
              aria-hidden
              className="mb-1.5 h-8 w-0.5 flex-none rounded-full bg-gradient-to-b from-[#6CC04A] to-[#3FA9F5]"
            />
            <div>
              <p className="text-xs font-semibold tracking-wide text-white/90">
                Generac
              </p>
              <p className="mt-1 line-clamp-2 text-balance text-[11px] font-medium uppercase leading-relaxed tracking-[0.18em] text-white/75">
                {props.tag}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
