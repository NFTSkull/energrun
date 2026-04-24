import {
  buildContactChatbotMessage,
  getFaqByTopicAndId,
} from "@/lib/contactChatbot";

describe("contactChatbot", () => {
  it("returns faq only when it belongs to selected topic", () => {
    const ok = getFaqByTopicAndId("solar", "solar-dac");
    const bad = getFaqByTopicAndId("solar", "gen-potencia");

    expect(ok).not.toBeNull();
    expect(ok?.question).toMatch(/DAC/i);
    expect(bad).toBeNull();
  });

  it("builds WhatsApp message with guided chatbot summary", () => {
    const message = buildContactChatbotMessage({
      topic: "generadores",
      faqId: "gen-transferencia",
      segment: "comercial",
      cotizaEnIMSS: "si",
      generatorType: "comercial",
      fuelType: "gasNatural",
      backupPriority: "criticas",
    });

    expect(message).toContain("chatbot web");
    expect(message).toContain("Generadores de respaldo");
    expect(message).toContain("arranque es automatico");
    expect(message).toContain("liquid cooled");
    expect(message).toContain("Gas natural");
    expect(message).toContain("cargas criticas");
    expect(message).toContain("Comercial");
    expect(message).toContain("Cotiza en IMSS: Si");
  });

  it("rejects faq that does not belong to selected topic", () => {
    expect(() =>
      buildContactChatbotMessage({
        topic: "solar",
        faqId: "gen-potencia",
        segment: "residencial",
        cotizaEnIMSS: "si",
      }),
    ).toThrow();
  });

  it("requires generator profiling fields on generators topic", () => {
    expect(() =>
      buildContactChatbotMessage({
        topic: "generadores",
        faqId: "gen-potencia",
        segment: "comercial",
        cotizaEnIMSS: "si",
      }),
    ).toThrow();
  });
});
