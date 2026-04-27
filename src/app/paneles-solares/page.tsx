import { Header } from "@/app/_components/Header";
import { WhatsAppFab } from "@/app/_components/WhatsAppFab";
import { FinalCTA } from "@/app/_components/sections/FinalCTA";
import { Footer } from "@/app/_components/sections/Footer";
import { Process } from "@/app/_components/sections/Process";
import { Solar } from "@/app/_components/sections/Solar";
import { ContactSection } from "@/app/_components/sections/shared/ContactSection";
import { SolarBenefits } from "@/app/_components/sections/solar/SolarBenefits";
import { SolarHero } from "@/app/_components/sections/solar/SolarHero";
import { SolarHowItWorks } from "@/app/_components/sections/solar/SolarHowItWorks";
import { SolarMonitoring } from "@/app/_components/sections/solar/SolarMonitoring";
import {
  buildWhatsAppMessage,
  buildWhatsAppUrl,
  WHATSAPP_DEFAULT_E164,
} from "@/lib/whatsapp";

const DEFAULT_WHATSAPP =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? WHATSAPP_DEFAULT_E164;

export default function PanelesSolaresPage() {
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
      <SolarHero />
      <main className="app-container">
        <Solar evaluationHref="#contacto" />
        <SolarBenefits />
        <SolarHowItWorks />
        <Process />
        <SolarMonitoring />
        <ContactSection
          whatsappHref={whatsappHref}
          title="Conversemos tu proyecto solar"
          description="Comparte consumo aproximado, tipo de inmueble y contexto tarifario para estructurar una evaluación fotovoltaica real."
        />
      </main>
      <FinalCTA whatsappHref={whatsappHref} evaluationHref="#contacto" />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
