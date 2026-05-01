/**
 * Contenido centralizado de la home (ENERGRUN).
 * Los datos técnicos de Generac provienen del PDF oficial del proveedor.
 * Cualquier métrica comercial sin fuente queda como placeholder o TODO explícito.
 */

export type Solution = {
  id: "solar" | "respaldo" | "integracion";
  kicker: string;
  title: string;
  description: string;
  bullets: string[];
  href: string;
};

export const solutions: Solution[] = [
  {
    id: "solar",
    kicker: "Generación solar",
    title: "Paneles solares",
    description:
      "Sistemas fotovoltaicos diseñados para reducir el consumo eléctrico de casas, negocios y operaciones con alta demanda energética.",
    bullets: [
      "Diseño según consumo real",
      "Integración profesional",
      "Eficiencia energética diaria",
      "Monitoreo y control",
    ],
    href: "/paneles-solares",
  },
  {
    id: "respaldo",
    kicker: "Continuidad",
    title: "Generadores de respaldo",
    description:
      "Equipos automáticos para asegurar continuidad operativa y proteger procesos, equipos y servicios críticos ante fallas eléctricas.",
    bullets: [
      "Activación automática",
      "Residencial, comercial e industrial",
      "Gas LP, gas natural o diésel",
      "Transferencia automática (ATS)",
    ],
    href: "/generadores",
  },
  {
    id: "integracion",
    kicker: "Sistema unificado",
    title: "Sistema energético integrado",
    description:
      "La combinación de generación solar y respaldo eléctrico permite optimizar costos energéticos sin comprometer continuidad.",
    bullets: [
      "Solar para eficiencia",
      "Generador para respaldo",
      "Integración a medida",
      "Enfoque técnico y operativo",
    ],
    href: "/#lineas",
  },
];

export type BusinessLine = {
  id: "solar" | "generadores";
  kicker: string;
  title: string;
  description: string;
  bullets: string[];
  href: string;
  cta: string;
  image: { src: `/${string}`; alt: string };
};

export const businessLines: BusinessLine[] = [
  {
    id: "solar",
    kicker: "Línea 01",
    title: "Paneles solares",
    description:
      "Sistemas fotovoltaicos para reducir consumo de CFE en residencial, comercio e industria ligera.",
    bullets: [
      "Diseño con consumo real",
      "25 a 30 años en producción (según fabricante/condiciones)",
      "Interconexión CFE y puesta en marcha",
      "Monitoreo de producción y desempeño",
    ],
    href: "/paneles-solares",
    cta: "Ver soluciones solares",
    image: {
      src: "/residencial.png",
      alt: "Instalación fotovoltaica residencial (paneles solares en techo).",
    },
  },
  {
    id: "generadores",
    kicker: "Línea 02",
    title: "Generadores de respaldo",
    description:
      "Sistemas de generación de energía eléctrica con transferencia automática y selección por carga crítica.",
    bullets: [
      "Residencial, comercial e industrial",
      "Gas LP, gas natural y diésel",
      "Integración con ATS, RTS y BESS",
    ],
    href: "/generadores",
    cta: "Ver generadores",
    image: {
      src: "/hogares.png",
      alt: "Generador de respaldo para hogar o comercio ligero (equipo en operación).",
    },
  },
];

export const institutionalValuePoints = [
  {
    title: "Ingeniería aplicada",
    description:
      "Cada solución se define por consumo, cargas críticas y objetivos operativos.",
  },
  {
    title: "Ejecución integral",
    description:
      "Diseño, suministro, instalación, arranque y documentación técnica en un solo flujo.",
  },
  {
    title: "Continuidad y ahorro",
    description:
      "Portafolio dual para eficiencia energética (solar) y continuidad operativa con respaldo automático.",
  },
] as const;

export type HomeTestimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
};

export const homeTestimonials: HomeTestimonial[] = [
  {
    id: "t-01",
    quote:
      "Nos explicaron todo con claridad, instalaron en tiempo y hoy tenemos mejor control del consumo.",
    name: "Cliente residencial",
    role: "Zona sur de Monterrey",
  },
  {
    id: "t-02",
    quote:
      "Definimos cargas críticas y el respaldo quedó bien dimensionado. La operación no se detuvo en el último corte.",
    name: "Administrador de negocio",
    role: "Comercio local",
  },
  {
    id: "t-03",
    quote:
      "El proyecto se entregó ordenado y documentado. Tuvimos visibilidad de avance desde el diagnóstico hasta la puesta en marcha.",
    name: "Responsable de planta",
    role: "Industria ligera",
  },
];

export type HomeFeaturedProject = {
  id: string;
  title: string;
  segment: "Residencial" | "Comercial" | "Industria";
  summary: string;
  image: { src: `/${string}`; alt: string };
};

export const homeFeaturedProjects: HomeFeaturedProject[] = [
  {
    id: "hp-residencial",
    title: "Residencia con sistema fotovoltaico",
    segment: "Residencial",
    summary:
      "Diseño orientado a reducir consumo y mantener confort diario con una implementación limpia y ordenada.",
    image: {
      src: "/residencia.png",
      alt: "Proyecto residencial con sistema fotovoltaico",
    },
  },
  {
    id: "hp-comercial",
    title: "Comercio con continuidad operativa",
    segment: "Comercial",
    summary:
      "Arquitectura de energía para proteger operación y servicio al cliente ante variaciones o cortes de red.",
    image: {
      src: "/comercial.png",
      alt: "Proyecto comercial con solución energética integral",
    },
  },
  {
    id: "hp-industrial",
    title: "Industria ligera con solución a medida",
    segment: "Industria",
    summary:
      "Integración por etapas con criterio técnico para sostener cargas relevantes y mejorar desempeño operativo.",
    image: {
      src: "/industrial.png",
      alt: "Proyecto industrial con solución energética de continuidad",
    },
  },
];

/* ----------------- Catálogo Generac (según PDF del proveedor) ----------------- */

export type GeneratorBlock = {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  specs: { label: string; value: string }[];
  features: string[];
  /**
   * Foto en `public/`. Nombre de archivo alineado al título de bloque.
   * `fit: "contain"` mantiene la composición completa en el `aspect-[4/3]`
   * (banda de color del contenedor en los márgenes si hace falta).
   */
  image: {
    src: `/${string}`;
    alt: string;
    fit?: "cover" | "contain";
    objectPositionClass?: string;
  };
};

export const generatorBlocks: GeneratorBlock[] = [
  {
    id: "residencial-comercial",
    tag: "Residencial · Comercial ligero",
    title: "Generadores para hogares y negocios",
    subtitle:
      "Respaldo automático con tablero incluido y monitoreo por app.",
    description:
      "Línea Guardian Air Cooled (RESICOM) con arranque automático, tablero incluido y monitoreo por aplicación móvil.",
    specs: [
      { label: "Serie", value: "Guardian Air Cooled" },
      { label: "Potencias", value: "10, 14, 18, 22, 24 y 26 kW" },
      { label: "Fase", value: "Monofásico" },
      { label: "Combustible", value: "Gas LP o gas natural" },
      { label: "Control", value: "Evolution" },
      { label: "Monitoreo", value: "App Mobile Link" },
    ],
    features: [
      "Tablero de transferencia incluido",
      "Arranque automático ante falla de red",
      "Operación silenciosa",
      "Garantía y servicio a través del canal Generac",
    ],
    image: {
      src: "/hogares.png",
      alt: "Generac · generadores para hogares y negocios",
      fit: "contain",
      objectPositionClass: "object-center",
    },
  },
  {
    id: "liquid-cooled-comercial",
    tag: "Comercial · Alta demanda",
    title: "Equipos liquid cooled y comerciales",
    subtitle:
      "Mayor capacidad y operación continua para naves y comercios medianos.",
    description:
      "Protector Series, Commercial Series y Protector High Speed: equipos de enfriamiento por líquido para naves, comercios medianos y aplicaciones comerciales exigentes.",
    specs: [
      { label: "Protector Series", value: "32, 38, 48, 60 y 80 kW" },
      { label: "Commercial Series", value: "100, 130 y 150 kW" },
      { label: "Protector High Speed", value: "25, 30, 36, 45 y 60 kW" },
      { label: "Combustible", value: "Gas LP o gas natural" },
      { label: "Voltajes", value: "Configurables según proyecto" },
    ],
    features: [
      "Motor con enfriamiento por líquido",
      "Menor consumo en configuraciones High Speed",
      "Tablero de transferencia dimensionado por aplicación",
      "Preparados para operación comercial continua",
    ],
    image: {
      src: "/liquid.png",
      alt: "Generac · equipos liquid cooled y comerciales",
    },
  },
  {
    id: "industriales",
    tag: "Industrial · Operación crítica",
    title: "Generadores industriales",
    subtitle: "Respaldo de alto desempeño hasta 3.1 MW para procesos críticos.",
    description:
      "Rango industrial Generac: desde 14 kW hasta 3.1 MW, combustibles diésel y gas, uso continuo y diseño robusto para aplicaciones de procesos críticos.",
    specs: [
      { label: "Rango", value: "14 kW – 3.1 MW" },
      { label: "Combustibles", value: "Diésel y gas" },
      { label: "Uso", value: "Continuo / stand-by según aplicación" },
      { label: "Aplicación", value: "Industria, salud, datacenter, operación pesada" },
    ],
    features: [
      "Construcción robusta para condiciones de planta",
      "Configuraciones de paralelismo para alta capacidad",
      "Opciones de gabinete intemperie / insonorizado",
      "Integración con sistemas de transferencia de alta corriente",
    ],
    image: {
      src: "/industriales.png",
      alt: "Generac · generadores industriales",
    },
  },
  {
    id: "moviles",
    tag: "Móvil · Proyectos temporales",
    title: "Generadores móviles",
    subtitle:
      "Energía firme portátil para renta, obra e industria en campo.",
    description:
      "Unidades móviles diésel para renta, construcción e industria con necesidad temporal de energía firme.",
    specs: [
      { label: "Rango", value: "30 kW – 522 kW" },
      { label: "Combustible", value: "Diésel" },
      { label: "Uso", value: "Continuo" },
      { label: "Aplicación", value: "Renta, obra, minería, eventos, contingencia" },
    ],
    features: [
      "Gabinete resistente para transporte y operación en campo",
      "Autonomía para jornadas extendidas",
      "Fácil conexión a tableros de obra",
      "Disponibilidad de flota vía canal Generac",
    ],
    image: {
      src: "/moviles.png",
      alt: "Generac · generadores móviles",
    },
  },
  {
    id: "complementarios",
    tag: "Automatización · Almacenamiento",
    title: "Sistemas complementarios",
    subtitle: "Transferencia, baterías e híbridos que articulan el conjunto.",
    description:
      "Tableros de transferencia, sistemas de almacenamiento y soluciones híbridas para automatizar la entrega de energía y fortalecer la infraestructura.",
    specs: [
      { label: "Smart Switch", value: "100A – 400A" },
      { label: "RTS", value: "600A – 800A" },
      { label: "BESS", value: "30 kW / 60 kW" },
      { label: "Híbrido", value: "GLT Hybrid y soluciones solar + generador" },
    ],
    features: [
      "Transferencia automática para residencial y comercial",
      "Transferencia de alta corriente para comercios e industria",
      "Almacenamiento en baterías para cargas críticas",
      "Arquitecturas híbridas FV + generador",
    ],
    /** Archivo: `complemetarios.png` (nombre actual en public/). */
    image: {
      src: "/complemetarios.png",
      alt: "Generac · sistemas complementarios: Smart Switch, RTS, BESS e híbridos",
    },
  },
];

/* ----------------- Solar — aplicaciones (imágenes en public/) ----------------- */

export type SolarApplicationBlock = {
  id: string;
  title: string;
  description: string;
  points: string[];
  image: { src: `/${string}`; alt: string };
};

export const solarSystemItems: { t: string; d: string }[] = [
  {
    t: "Diseño según consumo",
    d: "Evaluación del consumo de 12 meses, curva, orientación y sombras.",
  },
  {
    t: "Evaluación técnica",
    d: "Techo/terreno, acometida, tablero, obra civil.",
  },
  {
    t: "Instalación profesional",
    d: "Módulos, estructura, inversor, protecciones, tierra.",
  },
  {
    t: "Integración con infraestructura",
    d: "Tablero, transferencia y, si aplica, respaldo.",
  },
  {
    t: "Garantía y producción",
    d: "25 a 30 años en producción, más garantía en pieza e instalación, según fabricante y condiciones del proyecto.",
  },
];

export const solarBenefits = [
  {
    t: "Reducción de consumo facturable",
    d: "El sistema se dimensiona para desplazar kWh de red según perfil real del sitio.",
  },
  {
    t: "Control del riesgo DAC",
    d: "Se diseña con criterio tarifario para sostener consumo bajo umbrales críticos.",
  },
  {
    t: "Monitoreo y trazabilidad",
    d: "Producción, desempeño y alertas visibles para decisiones de operación.",
  },
  {
    t: "Escalabilidad",
    d: "Arquitectura preparada para crecer por etapas e integrar respaldo si se requiere.",
  },
] as const;

export const solarHowItWorks = [
  {
    n: "01",
    t: "Captación y conversión",
    d: "Los módulos generan energía DC y el inversor la convierte a AC utilizable.",
  },
  {
    n: "02",
    t: "Consumo prioritario del sitio",
    d: "La energía solar atiende primero la demanda instantánea del inmueble.",
  },
  {
    n: "03",
    t: "Interconexión y compensación",
    d: "El excedente se registra en medidor bidireccional bajo contrato autorizado con CFE.",
  },
] as const;

export const solarMonitoringPoints = [
  "Visibilidad diaria de producción y consumo.",
  "Alertas tempranas de bajo desempeño.",
  "Histórico para auditoría energética y decisiones de expansión.",
] as const;

/**
 * Tres columnas: Residencial / Comercial / Industria ligera.
 * Archivos en `public/`: `residencial.png`, `comercial.png`, `industrial.png`.
 */
export const solarApplicationBlocks: SolarApplicationBlock[] = [
  {
    id: "solar-app-residencial",
    title: "Residencial",
    description:
      "Casas con techo o losa aprovechable, consumo moderado a alto y exposición a tarifa DAC.",
    points: [
      "Diseño según recibo y orientación",
      "Monitoreo por aplicación",
      "Integrable con respaldo Guardian",
    ],
    image: {
      src: "/residencial.png",
      alt: "Instalación fotovoltaica residencial (techo, paneles y consumo bajo CFE / DAC).",
    },
  },
  {
    id: "solar-app-comercial",
    title: "Comercial",
    description:
      "Locales, oficinas y naves con consumo diurno que coincide con la curva de generación solar.",
    points: [
      "Aprovechamiento del consumo en horas hábiles",
      "Compatibilidad con tarifas PDBT / GDMTH",
      "Trámite CIL con CFE como parte del alcance",
    ],
    image: {
      src: "/comercial.png",
      alt: "Sistema solar en instalación comercial o nave industrial.",
    },
  },
  {
    id: "solar-app-industria",
    title: "Industria ligera",
    description:
      "Procesos con cargas estables durante el día y sensibilidad a costo de energía.",
    points: [
      "Dimensionamiento a perfil de carga real",
      "Arquitectura híbrida con respaldo",
      "Integración con tablero y transferencia",
    ],
    image: {
      src: "/industrial.png",
      alt: "Fotovoltaico en entorno de industria ligera o planta con cargas de proceso.",
    },
  },
];

/* ----------------- Segmentos ----------------- */

export const segments = [
  {
    id: "casa",
    title: "Casa habitación",
    problem:
      "Apagones que afectan refrigeración, climas, internet y trabajo remoto; recibos de CFE elevados por consumo alto.",
    solution:
      "Sistema fotovoltaico para reducir el kWh importado y/o generador automático Guardian para mantener el confort ante un corte.",
  },
  {
    id: "negocio",
    title: "Negocios",
    problem:
      "Un corte eléctrico interrumpe la operación, la atención al cliente y puede dañar equipos y mercancía.",
    solution:
      "FV comercial para bajar costo energético y grupo de respaldo con ATS para no detener la operación durante la contingencia.",
  },
  {
    id: "industria",
    title: "Industria ligera",
    problem:
      "Procesos con cargas críticas y picos de arranque, sensibles a interrupciones y a variaciones de la red.",
    solution:
      "Sistema integrado: FV dimensionado al perfil, generador liquid cooled o industrial y tablero de transferencia de alta corriente.",
  },
] as const;

/* ----------------- Cómo funciona ----------------- */

export const howItWorks = [
  {
    n: "01",
    t: "Generación solar durante el día",
    d: "Los paneles alimentan el consumo diario del inmueble y, según esquema, inyectan el excedente a la red bajo contrato de interconexión con CFE.",
  },
  {
    n: "02",
    t: "Respaldo automático ante falla",
    d: "Cuando la red cae o la demanda lo requiere, el sistema de transferencia conmuta al generador sin intervención; retorna al normalizar el servicio.",
  },
  {
    n: "03",
    t: "Monitoreo y control del sistema",
    d: "Tablero, aplicación y bitácora: producción FV, estado del grupo y alertas. Se audita la operación y se ajusta según uso real.",
  },
] as const;

/* ----------------- Beneficios ----------------- */

export const benefits = [
  {
    t: "Reducción del consumo de CFE",
    d: "El fotovoltaico desplaza los kWh de mayor costo; el sistema se dimensiona al perfil real del inmueble.",
  },
  {
    t: "Continuidad operativa",
    d: "El grupo de respaldo asume las cargas críticas en segundos, sin intervención manual.",
  },
  {
    t: "Protección de equipos",
    d: "Tableros y transferencia evitan transitorios que dañan motores, cómputo o refrigeración.",
  },
  {
    t: "Monitoreo del sistema",
    d: "Aplicación, curvas diarias, alertas y bitácora mensual para auditar la operación.",
  },
] as const;

export const generatorBenefits = [
  {
    t: "Continuidad automática",
    d: "Cuando se va la luz, el sistema cambia automáticamente a las cargas críticas y mantiene el servicio sin que tengas que hacer nada.",
  },
  {
    t: "Protección operativa",
    d: "Se reduce el impacto de interrupciones en procesos, equipos y servicio al cliente.",
  },
  {
    t: "Cobertura por escala",
    d: "Portafolio desde residencial hasta industrial con combustible acorde al sitio.",
  },
  {
    t: "Control y supervisión",
    d: "Monitoreo remoto y pruebas programadas para disponibilidad real del sistema.",
  },
] as const;

export const generatorSelectionSteps = [
  {
    n: "01",
    t: "Levantamiento de cargas",
    d: "Se define qué cargas son críticas y cuáles picos de arranque deben sostenerse.",
  },
  {
    n: "02",
    t: "Selección de combustible y plataforma",
    d: "Se elige la línea del generador y el combustible según autonomía, infraestructura y operación.",
  },
  {
    n: "03",
    t: "Dimensionamiento de transferencia",
    d: "ATS/RTS y protecciones se seleccionan por corriente y prioridad de circuitos.",
  },
  {
    n: "04",
    t: "Pruebas y protocolo de operación",
    d: "Se valida con pruebas de conmutación y se entrega rutina de mantenimiento.",
  },
] as const;

/* ----------------- Proceso ----------------- */

export const processSteps = [
  {
    n: "01",
    t: "Evaluación energética",
    d: "Recibos, lista de cargas, techo o terreno, tarifa CFE y criterio de continuidad.",
  },
  {
    n: "02",
    t: "Propuesta técnica",
    d: "Arquitectura FV, kW de respaldo, transferencia, obra civil y, si aplica, encaje a Mejoravit.",
  },
  {
    n: "03",
    t: "Instalación",
    d: "Módulos, estructura, inversor, grupo Generac, combustible, tierras y tablero bajo criterio único.",
  },
  {
    n: "04",
    t: "Puesta en marcha y seguimiento",
    d: "Pruebas, interconexión con CFE si aplica, entrega documentada y seguimiento del desempeño.",
  },
] as const;

/* ----------------- Pilares / trust ----------------- */

export const heroTrust = [
  { t: "Energía solar" },
  { t: "Respaldo automático" },
  { t: "Paneles, Generadores o Híbrido" },
] as const;

/* ----------------- Proyectos (placeholder) ----------------- */

export type ProjectPlaceholder = {
  id: string;
  title: string;
  segment: "Residencial" | "Comercial" | "Industria ligera";
  location: string;
  solution: string;
  summary: string;
  image: { src: `/${string}`; alt: string };
};

export const projectPlaceholders: ProjectPlaceholder[] = [
  {
    id: "p-residencial-01",
    title: "Residencia con FV + respaldo automático",
    segment: "Residencial",
    location: "Monterrey, N.L.",
    solution: "Sistema fotovoltaico + Guardian Air Cooled",
    summary:
      "Diseño orientado a cubrir consumo diario y mantener confort en climas y refrigeración ante cortes del verano.",
    image: {
      src: "/residencia.png",
      alt: "Proyecto residencial: paneles y respaldo automático",
    },
  },
  {
    id: "p-comercial-01",
    title: "Comercio con continuidad operativa",
    segment: "Comercial",
    location: "Área metropolitana",
    solution: "Protector Series + tablero RTS",
    summary:
      "Respaldo para cargas de operación y punto de venta, con transferencia automática y monitoreo remoto.",
    image: {
      src: "/comercio.png",
      alt: "Proyecto comercial: continuidad operativa",
    },
  },
  {
    id: "p-industria-01",
    title: "Industria ligera con sistema híbrido",
    segment: "Industria ligera",
    location: "Nuevo León",
    solution: "FV + generador industrial + transferencia de alta corriente",
    summary:
      "Arquitectura pensada para procesos con cargas críticas y picos de arranque, coordinada con la red del sitio.",
    image: {
      src: "/industria.png",
      alt: "Proyecto industria ligera: sistema híbrido y transferencia",
    },
  },
];
