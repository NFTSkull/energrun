export type ProjectType = "casa" | "negocio" | "industria" | "obra";
export type FuelType = "gas-lp" | "gas-natural" | "diesel" | "no-se";
export type InstallationType = "monofasica" | "trifasica" | "no-se";
export type BackupLevel = "criticas" | "area-completa" | "continua";
export type StartScenario = "bajo" | "medio" | "alto";

export type GeneratorProjectType = ProjectType;
export type GeneratorFuelType = FuelType;
export type GeneratorInstallationType = InstallationType;
export type GeneratorBackupLevel = BackupLevel;
export type GeneratorStartScenario = StartScenario;

export type LoadItem = {
  id: string;
  name: string;
  runningWatts: number;
  startingWatts: number;
  categories: ProjectType[];
};

export type GeneratorLoad = LoadItem;

export type GeneratorProjectCard = {
  id: ProjectType;
  title: string;
  description: string;
  iconPath: string;
};

export type GeneratorProjectLoadItem = {
  loadId: string;
  label: string;
};

export type GeneratorSelectionInput = {
  projectType: ProjectType;
  fuelType: FuelType;
  installationType: InstallationType;
  backupLevel: BackupLevel;
  startScenario: StartScenario;
  selectedLoads: Array<{
    loadId: string;
    quantity: number;
  }>;
};

export type GeneratorRecommendation = {
  estimatedKw: number;
  recommendedTier: string;
  runningWatts: number;
  concurrentStartWatts: number;
  designWatts: number;
  loadsCount: number;
  simultaneousStarts: number;
  suggestedInstallation: "Monofásica" | "Trifásica";
  fuelLabel: string;
};

export type GeneratorLineRecommendation = {
  title: string;
  badge: string;
  description: string;
};

export const generatorLoads: GeneratorLoad[] = [
  {
    id: "lighting",
    name: "Iluminación",
    runningWatts: 300,
    startingWatts: 0,
    categories: ["casa", "negocio", "industria", "obra"],
  },
  {
    id: "internet-cameras",
    name: "Internet / cámaras",
    runningWatts: 150,
    startingWatts: 0,
    categories: ["casa", "negocio"],
  },
  {
    id: "pos",
    name: "Punto de venta",
    runningWatts: 300,
    startingWatts: 0,
    categories: ["negocio"],
  },
  {
    id: "computers",
    name: "Computadoras",
    runningWatts: 800,
    startingWatts: 0,
    categories: ["negocio", "industria"],
  },
  {
    id: "fridge",
    name: "Refrigerador",
    runningWatts: 700,
    startingWatts: 2200,
    categories: ["casa", "negocio"],
  },
  {
    id: "commercial-fridge",
    name: "Refrigeración",
    runningWatts: 1200,
    startingWatts: 3000,
    categories: ["negocio"],
  },
  {
    id: "microwave",
    name: "Microondas / cafetería",
    runningWatts: 1000,
    startingWatts: 0,
    categories: ["casa", "negocio"],
  },
  {
    id: "washer",
    name: "Lavadora",
    runningWatts: 1150,
    startingWatts: 2300,
    categories: ["casa"],
  },
  {
    id: "water-pump",
    name: "Bomba de agua",
    runningWatts: 1000,
    startingWatts: 2100,
    categories: ["casa", "industria", "obra"],
  },
  {
    id: "ac",
    name: "Aire acondicionado",
    runningWatts: 3800,
    startingWatts: 4950,
    categories: ["casa", "negocio"],
  },
  {
    id: "security",
    name: "Sistema de seguridad",
    runningWatts: 94,
    startingWatts: 0,
    categories: ["casa", "negocio", "industria", "obra"],
  },
  {
    id: "tv",
    name: "Televisión",
    runningWatts: 500,
    startingWatts: 0,
    categories: ["casa"],
  },
  {
    id: "oxygen",
    name: "Concentrador de oxígeno",
    runningWatts: 400,
    startingWatts: 450,
    categories: ["casa"],
  },
  {
    id: "tools",
    name: "Herramientas eléctricas",
    runningWatts: 2500,
    startingWatts: 3500,
    categories: ["obra"],
  },
  {
    id: "temporary-lighting",
    name: "Iluminación temporal",
    runningWatts: 1500,
    startingWatts: 0,
    categories: ["obra"],
  },
  {
    id: "mobile-office",
    name: "Oficina móvil",
    runningWatts: 2500,
    startingWatts: 1500,
    categories: ["obra"],
  },
  {
    id: "critical-motor",
    name: "Motor / carga crítica",
    runningWatts: 5000,
    startingWatts: 10000,
    categories: ["industria"],
  },
  {
    id: "compressor",
    name: "Compresor / bomba",
    runningWatts: 7500,
    startingWatts: 15000,
    categories: ["industria"],
  },
  {
    id: "warehouse-lighting",
    name: "Iluminación de nave",
    runningWatts: 3000,
    startingWatts: 0,
    categories: ["industria"],
  },
  {
    id: "main-panel",
    name: "Tablero principal",
    runningWatts: 15000,
    startingWatts: 10000,
    categories: ["industria"],
  },
  {
    id: "partial-production",
    name: "Producción parcial",
    runningWatts: 25000,
    startingWatts: 20000,
    categories: ["industria"],
  },
  {
    id: "full-operation",
    name: "Operación completa",
    runningWatts: 50000,
    startingWatts: 30000,
    categories: ["industria", "obra"],
  },
  {
    id: "critical-equipment",
    name: "Equipos críticos",
    runningWatts: 4000,
    startingWatts: 3000,
    categories: ["negocio"],
  },
  {
    id: "construction-equipment",
    name: "Equipo de construcción",
    runningWatts: 8000,
    startingWatts: 12000,
    categories: ["obra"],
  },
  {
    id: "temporary-loads",
    name: "Cargas temporales",
    runningWatts: 5000,
    startingWatts: 5000,
    categories: ["obra"],
  },
];

export const generatorProjectCards: GeneratorProjectCard[] = [
  {
    id: "casa",
    title: "Casa",
    description: "Respaldo para confort, refrigeración y cargas esenciales.",
    iconPath:
      "M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z",
  },
  {
    id: "negocio",
    title: "Negocio",
    description:
      "Continuidad para punto de venta, refrigeración y operación diaria.",
    iconPath:
      "M4 6h16v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm3 4h4m6 0h-2M7 14h3m4 0h3",
  },
  {
    id: "industria",
    title: "Industria ligera",
    description: "Cargas críticas, motores y operación sensible.",
    iconPath:
      "M3 20h18M5 20V8l4 2V8l4 2V6l6 3v11M8 20v-5h3v5m4 0v-3h3v3",
  },
  {
    id: "obra",
    title: "Obra / renta temporal",
    description: "Energía portátil para trabajo en campo.",
    iconPath:
      "M3 17h18M6 17l3-8h6l3 8M10.5 9V6h3v3M12 3v1.5M8.5 5l1 1M15.5 5l-1 1",
  },
];

export const generatorProjectLoadItems: Record<
  ProjectType,
  GeneratorProjectLoadItem[]
> = {
  casa: [
    { loadId: "fridge", label: "Refrigerador" },
    { loadId: "ac", label: "Aire acondicionado" },
    { loadId: "lighting", label: "Iluminación" },
    { loadId: "water-pump", label: "Bomba de agua" },
    { loadId: "internet-cameras", label: "Internet / cámaras" },
    { loadId: "washer", label: "Lavadora" },
    { loadId: "microwave", label: "Microondas" },
    { loadId: "security", label: "Sistema de seguridad" },
    { loadId: "tv", label: "Televisión" },
    { loadId: "oxygen", label: "Concentrador de oxígeno" },
  ],
  negocio: [
    { loadId: "pos", label: "Punto de venta" },
    { loadId: "commercial-fridge", label: "Refrigeración" },
    { loadId: "lighting", label: "Iluminación" },
    { loadId: "computers", label: "Computadoras" },
    { loadId: "security", label: "Cámaras / seguridad" },
    { loadId: "ac", label: "Aire acondicionado" },
    { loadId: "microwave", label: "Microondas / cafetería" },
    { loadId: "critical-equipment", label: "Equipos críticos" },
  ],
  industria: [
    { loadId: "critical-motor", label: "Motor / carga crítica" },
    { loadId: "compressor", label: "Compresor / bomba" },
    { loadId: "warehouse-lighting", label: "Iluminación de nave" },
    { loadId: "main-panel", label: "Tablero principal" },
    { loadId: "partial-production", label: "Producción parcial" },
    { loadId: "full-operation", label: "Operación completa" },
    { loadId: "security", label: "Cámaras / seguridad" },
    { loadId: "computers", label: "Oficina administrativa" },
  ],
  obra: [
    { loadId: "tools", label: "Herramientas eléctricas" },
    { loadId: "temporary-lighting", label: "Iluminación temporal" },
    { loadId: "water-pump", label: "Bomba" },
    { loadId: "mobile-office", label: "Oficina móvil" },
    { loadId: "construction-equipment", label: "Equipo de construcción" },
    { loadId: "full-operation", label: "Operación continua" },
    { loadId: "security", label: "Cámaras / seguridad" },
    { loadId: "temporary-loads", label: "Cargas temporales" },
  ],
};

const fuelLabels: Record<GeneratorFuelType, string> = {
  "gas-lp": "Gas LP",
  "gas-natural": "Gas natural",
  diesel: "Diésel",
  "no-se": "Por definir",
};

const backupFactor: Record<BackupLevel, number> = {
  criticas: 1.15,
  "area-completa": 1.25,
  continua: 1.35,
};

const projectFactor: Record<ProjectType, number> = {
  casa: 1.03,
  negocio: 1.07,
  industria: 1.12,
  obra: 1.1,
};

const installationFactor: Record<InstallationType, number> = {
  monofasica: 1,
  trifasica: 1.02,
  "no-se": 1.05,
};

const startScenarioCount: Record<StartScenario, number> = {
  bajo: 1,
  medio: 2,
  alto: 3,
};

const startScenarioFactor: Record<StartScenario, number> = {
  bajo: 1,
  medio: 1.07,
  alto: 1.14,
};

function roundUpHalf(value: number): number {
  return Math.ceil(value * 2) / 2;
}

export function formatPower(kw: number): string {
  return `${kw.toFixed(1)} kW`;
}

function getTierByKw(kw: number): string {
  if (kw <= 8) return "Residencial esencial";
  if (kw <= 15) return "Residencial alto confort";
  if (kw <= 30) return "Negocio ligero";
  if (kw <= 60) return "Comercial de alta demanda";
  if (kw <= 150) return "Industria ligera / operación crítica";
  return "Ingeniería dedicada de alta capacidad";
}

function getSuggestedInstallation(
  installationType: InstallationType,
  estimatedKw: number,
): "Monofásica" | "Trifásica" {
  if (installationType === "trifasica") return "Trifásica";
  if (installationType === "monofasica" && estimatedKw <= 20) return "Monofásica";
  return "Trifásica";
}

export function getProjectLoadItems(
  projectType: ProjectType,
): GeneratorProjectLoadItem[] {
  return generatorProjectLoadItems[projectType];
}

export function getGeneratorRecommendation(
  projectType: ProjectType,
  suggestedKw: number,
): GeneratorLineRecommendation {
  if (projectType === "obra") {
    return {
      title: "Generadores móviles 30–522 kW",
      badge: "Proyecto temporal / renta",
      description:
        "Ideal para obra, renta, operación temporal o proyectos en campo que requieren energía portátil.",
    };
  }

  if (suggestedKw <= 10) {
    return {
      title: "Guardian Air Cooled 10 kW",
      badge: "Residencial / cargas esenciales",
      description:
        "Ideal para respaldar cargas esenciales como refrigerador, iluminación, internet, cámaras y equipos básicos.",
    };
  }

  if (suggestedKw <= 14) {
    return {
      title: "Guardian Air Cooled 14 kW",
      badge: "Residencial medio",
      description:
        "Recomendado para casas con mayor número de cargas críticas o pequeños negocios con consumo moderado.",
    };
  }

  if (suggestedKw <= 18) {
    return {
      title: "Guardian Air Cooled 18 kW",
      badge: "Residencial alto / comercio ligero",
      description:
        "Buena opción para casas con aire acondicionado, refrigeración, bombas o comercios ligeros.",
    };
  }

  if (suggestedKw <= 22) {
    return {
      title: "Guardian Air Cooled 22 kW",
      badge: "Alta demanda residencial",
      description:
        "Recomendado para casas grandes o negocios que necesitan respaldar varias cargas importantes al mismo tiempo.",
    };
  }

  if (suggestedKw <= 26) {
    return {
      title: "Guardian Air Cooled 24–26 kW",
      badge: "Residencial premium / comercial ligero",
      description:
        "Para proyectos con mayor demanda, múltiples equipos y necesidad de respaldo más amplio.",
    };
  }

  if (suggestedKw <= 80) {
    return {
      title: "Protector Series / Liquid Cooled",
      badge: "Comercial / alta demanda",
      description:
        "Recomendado para propiedades, comercios o instalaciones con mayor demanda energética y operación más exigente.",
    };
  }

  if (suggestedKw <= 150) {
    return {
      title: "Commercial Series",
      badge: "Comercial alto",
      description:
        "Para negocios con operación crítica, alta demanda y necesidad de continuidad energética robusta.",
    };
  }

  return {
    title: "Proyecto industrial a dimensionar",
    badge: "Requiere levantamiento técnico",
    description:
      "La demanda estimada supera rangos comerciales estándar. Se requiere revisión técnica, lista de cargas y validación en sitio.",
  };
}

export function calculateGeneratorRecommendation(
  input: GeneratorSelectionInput,
): GeneratorRecommendation | null {
  const validLoads = input.selectedLoads.filter((item) => item.quantity > 0);
  if (validLoads.length === 0) return null;

  let runningWatts = 0;
  const startupDeltas: number[] = [];

  for (const selected of validLoads) {
    const load = generatorLoads.find((item) => item.id === selected.loadId);
    if (!load) continue;
    if (!load.categories.includes(input.projectType)) continue;
    runningWatts += load.runningWatts * selected.quantity;
    const startupDelta = Math.max(load.startingWatts - load.runningWatts, 0);
    for (let i = 0; i < selected.quantity; i += 1) {
      startupDeltas.push(startupDelta);
    }
  }

  if (runningWatts <= 0) return null;

  const simultaneousStarts = startScenarioCount[input.startScenario];
  const concurrentStartWatts = startupDeltas
    .sort((a, b) => b - a)
    .slice(0, simultaneousStarts)
    .reduce((acc, value) => acc + value, 0);

  const designWatts =
    (runningWatts + concurrentStartWatts) *
    backupFactor[input.backupLevel] *
    projectFactor[input.projectType] *
    installationFactor[input.installationType] *
    startScenarioFactor[input.startScenario];

  const estimatedKw = roundUpHalf(designWatts / 1000);

  return {
    estimatedKw,
    recommendedTier: getTierByKw(estimatedKw),
    runningWatts: Math.round(runningWatts),
    concurrentStartWatts: Math.round(concurrentStartWatts),
    designWatts: Math.round(designWatts),
    loadsCount: validLoads.reduce((acc, item) => acc + item.quantity, 0),
    simultaneousStarts,
    suggestedInstallation: getSuggestedInstallation(input.installationType, estimatedKw),
    fuelLabel: fuelLabels[input.fuelType],
  };
}
