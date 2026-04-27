import {
  buildSolarInquiryMessage,
  buildWhatsAppMessage,
  buildWhatsAppUrl,
} from "@/lib/whatsapp";

describe("whatsapp", () => {
  it("builds a wa.me url with encoded text", () => {
    const url = buildWhatsAppUrl({
      phoneNumber: "+52 (81) 1234-5678",
      message: "Hola\nMe interesa",
    });

    expect(url).toBe(
      "https://wa.me/528112345678?text=Hola%0AMe%20interesa",
    );
  });

  it("includes lead fields when provided", () => {
    const msg = buildWhatsAppMessage({
      nombre: "Gaby",
      telefono: "8112345678",
      cotizaEnIMSS: true,
    });

    expect(msg).toContain("Nombre: Gaby");
    expect(msg).toContain("Teléfono: 8112345678");
    expect(msg).toContain("¿Cotiza en IMSS?: Sí");
  });

  it("includes IMSS number when cotiza en IMSS and numeroImss is set", () => {
    const msg = buildWhatsAppMessage({
      nombre: "Gaby",
      telefono: "8112345678",
      cotizaEnIMSS: true,
      numeroImss: "12 34 56 78 90 12",
    });

    expect(msg).toContain("Número IMSS / afiliación: 123456789012");
  });

  it("builds solar inquiry message with bimestral/segmento/tarifa", () => {
    const m = buildSolarInquiryMessage({
      kwhBimestral: "300-800",
      segmento: "comercial",
      contextoTarifa: "gdm",
    });
    expect(m).toContain("300 a 800");
    expect(m).toContain("comercial");
    expect(m).toContain("GDM");
    expect(m).toContain("12m");
  });
});

