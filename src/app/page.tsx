import { Header } from "@/app/_components/Header";
import { WhatsAppFab } from "@/app/_components/WhatsAppFab";
import { FinalCTA } from "@/app/_components/sections/FinalCTA";
import { Footer } from "@/app/_components/sections/Footer";
import { Hero } from "@/app/_components/sections/Hero";
import { BusinessLines } from "@/app/_components/sections/shared/BusinessLines";
import { ContactSection } from "@/app/_components/sections/shared/ContactSection";
import { HomeProof } from "@/app/_components/sections/shared/HomeProof";
import { HowWeWorkBrief } from "@/app/_components/sections/shared/HowWeWorkBrief";
import { InstitutionalValue } from "@/app/_components/sections/shared/InstitutionalValue";
import {
  buildWhatsAppMessage,
  buildWhatsAppUrl,
  WHATSAPP_DEFAULT_E164,
} from "@/lib/whatsapp";

const DEFAULT_WHATSAPP =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? WHATSAPP_DEFAULT_E164;

export default function Home() {
  const whatsappHref = buildWhatsAppUrl({
    phoneNumber: DEFAULT_WHATSAPP,
    message: buildWhatsAppMessage(),
  });

  return (
    <div
      className="relative flex min-h-svh flex-col"
      style={{ background: "var(--background-light)", color: "var(--text-dark)" }}
    >
      <Header contactHref="#contacto" />

      <Hero
        whatsappHref={whatsappHref}
        solutionsHref="#lineas"
        evaluationHref="#contacto"
      />

      <main className="app-container">
        <InstitutionalValue />
        <BusinessLines />
        <HowWeWorkBrief />
        <HomeProof />
        <ContactSection
          whatsappHref={whatsappHref}
          title="Datos mínimos para una evaluación inicial"
          description="Nombre, teléfono y si cotizas en IMSS (criterio Mejoravit). Al enviar, abrimos WhatsApp con mensaje estructurado para iniciar diagnóstico."
        />
      </main>

      <FinalCTA whatsappHref={whatsappHref} evaluationHref="#contacto" />

      <Footer />

      <WhatsAppFab />
    </div>
  );
}
