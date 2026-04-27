import { LeadForm } from "@/app/_components/LeadForm";
import { RevealGroup } from "@/app/_components/RevealGroup";

type Props = {
  whatsappHref: string;
  title?: string;
  description?: string;
};

export function ContactSection(props: Props) {
  return (
    <RevealGroup
      as="section"
      id="contacto"
      className="border-b border-slate-200/80 py-12 md:py-16"
    >
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <p
            className="reveal-t text-xs font-semibold uppercase tracking-[0.22em] text-slate-500"
            data-stagger="0"
          >
            Contacto
          </p>
          {props.title ? (
            <h2
              className="reveal-t mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-[2.15rem]"
              data-stagger="1"
            >
              {props.title}
            </h2>
          ) : null}
          {props.description ? (
            <p
              className="reveal-t mt-4 max-w-xl text-[15px] leading-7 text-slate-600"
              data-stagger="2"
            >
              {props.description}
            </p>
          ) : null}
          <a
            className={[
              "reveal-t inline-flex text-sm font-semibold text-[#1E4D8C] underline decoration-[#1E4D8C]/20 underline-offset-4 transition hover:decoration-[#1E4D8C]",
              props.title || props.description ? "mt-6" : "mt-3",
            ].join(" ")}
            data-stagger="3"
            href={props.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir solo WhatsApp
          </a>
        </div>
        <div className="reveal-t" data-stagger="4">
          <LeadForm />
        </div>
      </div>
    </RevealGroup>
  );
}
