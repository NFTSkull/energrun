import { heroTrust } from "@/lib/content";

type Props = {
  whatsappHref: string;
  solutionsHref?: string;
  evaluationHref?: string;
};

export function Hero(props: Props) {
  const solutionsHref = props.solutionsHref ?? "#soluciones";
  const evaluationHref = props.evaluationHref ?? "#contacto";

  return (
    <section
      id="top"
      aria-label="ENERGRÜN"
      className="relative left-1/2 right-1/2 -mx-[50vw] w-screen min-h-[100svh] overflow-x-clip overflow-y-hidden"
    >
      <div className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover"
          style={{ objectPosition: "60% center" }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          aria-hidden
        >
          <source src="/video_hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: `
            linear-gradient(90deg, rgba(10,20,40,0.85) 0%, rgba(10,20,40,0.55) 42%, rgba(10,20,40,0.22) 72%, rgba(10,20,40,0.45) 100%),
            linear-gradient(180deg, rgba(10,20,40,0.35) 0%, rgba(10,20,40,0.08) 45%, rgba(10,20,40,0.6) 100%)
          `,
        }}
      />

      <div className="relative z-10 mx-auto grid min-h-[100svh] w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-24 pt-28 sm:px-8 sm:pb-24 sm:pt-40 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:px-8">
        <div className="max-w-[40rem]">
          <p className="hero-anim-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/60 sm:text-xs">
            ENERGRÜN · Monterrey, N.L.
          </p>

          <h1 className="hero-anim-1 mt-6 text-balance text-[1.9rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-white sm:text-[2.6rem] md:text-5xl lg:text-[3.25rem] lg:leading-[1.04] [text-shadow:0_2px_40px_rgba(0,0,0,0.45)]">
            Especialistas en generación de energía
          </h1>

          <p className="hero-anim-2 mt-6 max-w-[34rem] text-[15px] leading-7 text-white/85 sm:text-lg sm:leading-8">
            Vendemos e instalamos sistemas fotovoltaicos y generadores de respaldo.
            Diseñamos un proyecto adecuado a tus necesidades: puede ser con
            paneles solares, generadores de respaldo o ambos en el mismo
            proyecto.
          </p>

          <div className="hero-anim-3 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={evaluationHref}
              className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-[#6CC04A] px-7 text-sm font-semibold text-white shadow-md shadow-[#6CC04A]/25 transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#3BAA3F] sm:w-auto"
            >
              Solicitar evaluación
            </a>
            <a
              href={solutionsHref}
              className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-white/30 bg-white/[0.04] px-7 text-sm font-semibold text-white transition duration-300 ease-out hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10 sm:w-auto"
            >
              Ver soluciones
            </a>
          </div>

          <ul className="hero-anim-4 mt-12 grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-3">
            {heroTrust.map((b) => (
              <li
                key={b.t}
                className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.05] px-3 py-2.5 text-[12px] font-medium text-white/85 sm:text-[13px]"
              >
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full bg-[#6CC04A]"
                />
                {b.t}
              </li>
            ))}
          </ul>
        </div>

        {/* Columna derecha: ficha institucional seca (no repite el hero) */}
        <div className="hero-anim-5 hidden lg:flex lg:justify-end">
          <div className="w-full max-w-sm rounded-2xl border border-white/18 bg-gradient-to-b from-slate-950/60 via-slate-950/48 to-slate-950/52 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl backdrop-saturate-125">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70">
              Ofrecemos:
            </p>
            <div className="mt-4 space-y-3.5">
              {[
                { t: "Paneles solares", s: "Interconexión CFE · tarifa regulada" },
                {
                  t: "Generadores de respaldo",
                  s: "Continuidad operativa · selección por aplicación",
                },
              ].map((it) => (
                <div key={it.t} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-2 inline-block h-px w-6 flex-none bg-gradient-to-r from-[#6CC04A] to-[#3FA9F5]"
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white">{it.t}</p>
                    <p className="mt-0.5 text-xs leading-5 text-white/72">
                      {it.s}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t border-white/10 pt-4">
              <p className="text-[11px] leading-5 text-white/65">
                Distribuidor y proveedor de equipos de respaldo · Diseño e
                instalación bajo normativa · Financiamiento disponible para
                proyectos elegibles.
              </p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#soluciones"
        aria-label="Ver soluciones"
        className="hero-anim-6 group absolute inset-x-0 bottom-6 z-10 mx-auto hidden w-max flex-col items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/55 transition hover:text-white/90 sm:bottom-8 sm:flex"
      >
        <span className="border-b border-white/20 pb-0.5 transition group-hover:border-white/60">
          Ver soluciones
        </span>
        <span
          aria-hidden
          className="inline-block transition duration-500 group-hover:translate-y-1"
        >
          ↓
        </span>
      </a>
    </section>
  );
}
