import { RevealGroup } from "@/app/_components/RevealGroup";

export function FinalCTA(props: { whatsappHref: string; evaluationHref?: string }) {
  const evaluationHref = props.evaluationHref ?? "#contacto";
  return (
    <RevealGroup
      as="section"
      id="cta-final"
      className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-x-clip overflow-y-hidden border-y border-slate-200/80 bg-[#0f2744] py-14 text-white md:py-20"
    >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage: "url(/paneles.png)",
            backgroundSize: "cover",
            backgroundPosition: "50% 55%",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.55]"
          style={{
            background:
              "linear-gradient(90deg, rgba(10,18,34,0.75) 0%, rgba(10,18,34,0.62) 52%, rgba(10,18,34,0.75) 100%), linear-gradient(180deg, rgba(10,18,34,0.55) 0%, rgba(10,18,34,0.35) 45%, rgba(10,18,34,0.62) 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.38) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.38) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="app-container relative grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-16">
          <div>
            <p
              className="reveal-t text-xs font-semibold uppercase tracking-[0.22em] text-white/55"
              data-stagger="0"
            >
              Siguiente paso
            </p>
            <h2
              className="reveal-t mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-[2.3rem]"
              data-stagger="1"
            >
              Conversemos sobre tu proyecto energético
            </h2>
            <p
              className="reveal-t mt-4 max-w-xl text-[15px] leading-7 text-white/75"
              data-stagger="2"
            >
              Si prefieres resolver dudas antes de enviar datos, escríbenos
              directo por WhatsApp. Atención para casas, negocios e industria
              ligera en Monterrey y área metropolitana.
            </p>
          </div>

          <div
            className="reveal-t flex flex-col items-start gap-4 lg:items-end"
            data-stagger="3"
          >
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href={props.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-[#6CC04A] px-7 text-sm font-semibold text-white shadow-md shadow-[#6CC04A]/25 transition hover:-translate-y-0.5 hover:bg-[#3BAA3F] sm:w-auto"
              >
                Hablar por WhatsApp
              </a>
              <a
                href={evaluationHref}
                className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-white/25 bg-white/[0.04] px-7 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10 sm:w-auto"
              >
                Solicitar evaluación
              </a>
            </div>
          </div>
        </div>
    </RevealGroup>
  );
}
