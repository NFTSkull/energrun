import Image from "next/image";
import { PANELES_SOLARES_HERO_IMAGE } from "@/lib/pageHeroBackgrounds";

export function SolarHero() {
  return (
    <section
      id="top"
      className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden border-b border-slate-200/80 bg-[#0a1628] py-24 text-white md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src={PANELES_SOLARES_HERO_IMAGE.src}
          alt={PANELES_SOLARES_HERO_IMAGE.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_42%] opacity-100"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(90deg, rgba(10,20,40,0.92) 0%, rgba(10,20,40,0.7) 48%, rgba(10,20,40,0.4) 100%),
              linear-gradient(180deg, rgba(10,20,40,0.2) 0%, rgba(10,20,40,0.12) 45%, rgba(10,20,40,0.86) 100%)
            `,
          }}
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
          Soluciones solares ENERGRÜN
        </p>
        <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Paneles solares para reducir consumo con ingeniería de sitio
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/80">
          Página dedicada para entender la oferta fotovoltaica de ENERGRÜN:
          segmentación por tipo de inmueble, beneficios, funcionamiento, proceso
          e integración con monitoreo de consumo.
        </p>
      </div>
    </section>
  );
}
