import { Header } from "@/app/_components/Header";
import { WhatsAppFab } from "@/app/_components/WhatsAppFab";
import { FinalCTA } from "@/app/_components/sections/FinalCTA";
import { Footer } from "@/app/_components/sections/Footer";
import { GeneratorsCatalog } from "@/app/_components/sections/GeneratorsCatalog";
import { ContactSection } from "@/app/_components/sections/shared/ContactSection";
import { GeneratorBenefits } from "@/app/_components/sections/generators/GeneratorBenefits";
import { GeneratorsHero } from "@/app/_components/sections/generators/GeneratorsHero";
import { GeneratorSelection } from "@/app/_components/sections/generators/GeneratorSelection";
import {
  buildWhatsAppMessage,
  buildWhatsAppUrl,
  WHATSAPP_DEFAULT_E164,
} from "@/lib/whatsapp";

const DEFAULT_WHATSAPP =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? WHATSAPP_DEFAULT_E164;

export default function GeneradoresPage() {
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
      <GeneratorsHero />
      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <GeneratorsCatalog whatsappHref={whatsappHref} evaluationHref="#contacto" />
        <GeneratorBenefits />
        <GeneratorSelection />
        <ContactSection
          whatsappHref={whatsappHref}
          title="Solicita dimensionamiento de respaldo"
          description="Comparte tipo de operación, cargas críticas y combustible disponible para dimensionar plataforma de respaldo y transferencia."
        />
      </main>
      <FinalCTA whatsappHref={whatsappHref} evaluationHref="#contacto" />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
