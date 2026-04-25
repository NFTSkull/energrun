import Image from "next/image";
import { RevealGroup } from "@/app/_components/RevealGroup";
import { StaggeredFade } from "@/app/_components/StaggeredFade";
import { homeFeaturedProjects, homeTestimonials } from "@/lib/content";

export function HomeProof() {
  return (
    <RevealGroup
      as="section"
      id="proyectos-testimonios"
      className="border-b border-slate-200/80 py-16 md:py-24"
    >
      <div className="max-w-2xl">
        <p
          className="reveal-t text-xs font-semibold uppercase tracking-[0.22em] text-slate-500"
          data-stagger="0"
        >
          Proyectos y testimonios
        </p>
        <h2
          className="reveal-t mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-[2.15rem]"
          data-stagger="1"
        >
          Experiencia real en residencial, comercial e industria ligera
        </h2>
        <p
          className="reveal-t mt-4 text-[15px] leading-7 text-slate-600"
          data-stagger="2"
        >
          Resultados claros, ejecución ordenada y acompañamiento técnico durante
          todo el proyecto.
        </p>
      </div>

      <StaggeredFade
        withMedia
        activateAfterMs={420}
        className="mt-10 grid gap-5 md:grid-cols-3"
      >
        {homeFeaturedProjects.map((project) => (
          <article
            key={project.id}
            className="stagger-fade__item group overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-[#1E4D8C]/25 hover:shadow-md"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-transparent to-transparent"
              />
              <span className="absolute left-3 top-3 inline-flex rounded-full border border-white/20 bg-slate-950/55 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                {project.segment}
              </span>
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="text-base font-semibold tracking-tight text-slate-900">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {project.summary}
              </p>
            </div>
          </article>
        ))}
      </StaggeredFade>

      <StaggeredFade activateAfterMs={520} className="mt-8 grid gap-4 md:grid-cols-3">
        {homeTestimonials.map((testimonial) => (
          <blockquote
            key={testimonial.id}
            className="stagger-fade__item rounded-2xl border border-slate-200/90 bg-slate-50/70 p-5 shadow-sm sm:p-6"
          >
            <p className="text-sm leading-7 text-slate-700">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <footer className="mt-4 border-t border-slate-200/80 pt-3">
              <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
              <p className="text-xs text-slate-500">{testimonial.role}</p>
            </footer>
          </blockquote>
        ))}
      </StaggeredFade>
    </RevealGroup>
  );
}
