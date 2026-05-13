import {
  calculateGeneratorRecommendation,
  generatorLoads,
  getProjectLoadItems,
} from "@/lib/generatorSizing";

describe("generatorSizing", () => {
  it("expone el catálogo base completo de cargas", () => {
    expect(generatorLoads).toHaveLength(25);
    expect(generatorLoads.find((item) => item.id === "fridge")?.runningWatts).toBe(700);
    expect(generatorLoads.find((item) => item.id === "full-operation")?.startingWatts).toBe(
      30000,
    );
  });

  it("retorna las cargas visibles para casa con etiquetas amigables", () => {
    const houseLoads = getProjectLoadItems("casa");
    expect(houseLoads.map((item) => item.label)).toEqual([
      "Refrigerador",
      "Aire acondicionado",
      "Iluminación",
      "Bomba de agua",
      "Internet / cámaras",
      "Lavadora",
      "Microondas",
      "Sistema de seguridad",
      "Televisión",
      "Concentrador de oxígeno",
    ]);
  });

  it("calcula recomendación para un caso residencial simple", () => {
    const recommendation = calculateGeneratorRecommendation({
      projectType: "casa",
      fuelType: "gas-lp",
      installationType: "monofasica",
      backupLevel: "criticas",
      selectedLoads: [
        { loadId: "fridge", quantity: 1 },
        { loadId: "led", quantity: 1 },
      ],
    });

    expect(recommendation).not.toBeNull();
    expect(recommendation?.estimatedKw).toBe(3);
    expect(recommendation?.recommendedTier).toMatch(/Residencial esencial/i);
    expect(recommendation?.loadsCount).toBe(2);
    expect(recommendation?.suggestedInstallation).toBe("Monofásica");
  });

  it("escala a recomendación industrial cuando hay operación crítica", () => {
    const recommendation = calculateGeneratorRecommendation({
      projectType: "industria",
      fuelType: "diesel",
      installationType: "trifasica",
      backupLevel: "continua",
      selectedLoads: [
        { loadId: "full-operation", quantity: 1 },
        { loadId: "main-panel", quantity: 1 },
        { loadId: "critical-motor", quantity: 1 },
      ],
    });

    expect(recommendation).not.toBeNull();
    expect(recommendation?.estimatedKw).toBe(116);
    expect(recommendation?.recommendedTier).toMatch(/Industria ligera/i);
    expect(recommendation?.fuelLabel).toBe("Diésel");
    expect(recommendation?.suggestedInstallation).toBe("Trifásica");
  });

  it("regresa null cuando no hay cargas seleccionadas", () => {
    const recommendation = calculateGeneratorRecommendation({
      projectType: "negocio",
      fuelType: "gas-natural",
      installationType: "no-se",
      backupLevel: "area-completa",
      selectedLoads: [],
    });

    expect(recommendation).toBeNull();
  });
});
