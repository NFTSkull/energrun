import { z } from "zod";

export const CHATBOT_TOPIC_LABEL = {
  solar: "Paneles solares",
  generadores: "Generadores de respaldo",
  integrado: "Solar + respaldo (hibrido)",
} as const;

export const CHATBOT_SEGMENT_LABEL = {
  residencial: "Residencial",
  comercial: "Comercial",
  industrial: "Industria ligera",
} as const;

export const CHATBOT_IMSS_LABEL = {
  si: "Si",
  no: "No",
} as const;

export const CHATBOT_GENERATOR_TYPE_LABEL = {
  residencial: "Residencial / negocio ligero (air cooled)",
  comercial: "Comercial (liquid cooled)",
  industrial: "Industrial (alta capacidad)",
  movil: "Movil para obra / eventos",
  complementario: "ATS / RTS / BESS / complementarios",
  noSe: "Aun no lo se",
} as const;

export const CHATBOT_FUEL_LABEL = {
  gasLp: "Gas LP",
  gasNatural: "Gas natural",
  diesel: "Diesel",
  noSe: "Aun no lo se",
} as const;

export const CHATBOT_BACKUP_PRIORITY_LABEL = {
  total: "Continuidad total de operacion",
  criticas: "Solo cargas criticas",
  contingencia: "Contingencia ocasional",
  noSe: "Quiero que lo definan por mi",
} as const;

export const CHATBOT_FAQS = {
  solar: [
    {
      id: "solar-ahorro",
      question: "Cuanto ahorro puedo esperar?",
      answer:
        "El ahorro depende del recibo CFE, curva de consumo y espacio disponible. Hacemos dimensionamiento con consumo real para proyectar kWh desplazado.",
    },
    {
      id: "solar-dac",
      question: "Sirve para evitar o bajar DAC?",
      answer:
        "Si, se disena para mantener consumo bajo umbral de alto consumo cuando la curva del sitio lo permite.",
    },
    {
      id: "solar-tiempo",
      question: "En cuanto tiempo se instala?",
      answer:
        "El tiempo varia por tamano y obra civil. Normalmente iniciamos con evaluacion tecnica y cronograma de instalacion.",
    },
  ],
  generadores: [
    {
      id: "gen-potencia",
      question: "Como eligen la potencia del generador?",
      answer:
        "Se define por cargas criticas, picos de arranque y continuidad esperada. Se valida transferencia y combustible disponible.",
    },
    {
      id: "gen-combustible",
      question: "Que combustible conviene?",
      answer:
        "Depende de infraestructura del sitio y autonomia objetivo. Trabajamos opciones gas LP, gas natural o diesel segun aplicacion.",
    },
    {
      id: "gen-transferencia",
      question: "El arranque es automatico?",
      answer:
        "Si, con ATS/RTS la conmutacion es automatica cuando falla la red y retorna cuando el suministro se restablece.",
    },
  ],
  integrado: [
    {
      id: "int-cuando",
      question: "Cuando conviene sistema hibrido?",
      answer:
        "Cuando necesitas ahorro energetico y continuidad operativa. Solar reduce consumo y el generador protege cargas criticas.",
    },
    {
      id: "int-prioridad",
      question: "Que se instala primero?",
      answer:
        "Depende del riesgo operativo y presupuesto. Podemos iniciar con respaldo o solar y dejar arquitectura preparada para crecer.",
    },
    {
      id: "int-control",
      question: "Como se monitorea todo junto?",
      answer:
        "Se integra monitoreo de generacion, estado del respaldo y alertas para operar con trazabilidad.",
    },
  ],
} as const;

const topicEnum = z.enum(["solar", "generadores", "integrado"]);
const segmentEnum = z.enum(["residencial", "comercial", "industrial"]);
const imssEnum = z.enum(["si", "no"]);
const generatorTypeEnum = z.enum([
  "residencial",
  "comercial",
  "industrial",
  "movil",
  "complementario",
  "noSe",
]);
const fuelEnum = z.enum(["gasLp", "gasNatural", "diesel", "noSe"]);
const backupPriorityEnum = z.enum(["total", "criticas", "contingencia", "noSe"]);

const ALL_FAQ_IDS = [
  ...CHATBOT_FAQS.solar.map((f) => f.id),
  ...CHATBOT_FAQS.generadores.map((f) => f.id),
  ...CHATBOT_FAQS.integrado.map((f) => f.id),
] as const;

const faqIdEnum = z.enum(ALL_FAQ_IDS);

export const contactChatbotLeadSchema = z
  .object({
    topic: topicEnum,
    faqId: faqIdEnum,
    segment: segmentEnum,
    cotizaEnIMSS: imssEnum,
    generatorType: generatorTypeEnum.optional(),
    fuelType: fuelEnum.optional(),
    backupPriority: backupPriorityEnum.optional(),
  })
  .superRefine((data, ctx) => {
    if (needsGeneratorProfiling(data.topic)) {
      if (!data.generatorType) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["generatorType"],
          message: "Selecciona tipo de generador de interes.",
        });
      }
      if (!data.fuelType) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["fuelType"],
          message: "Selecciona combustible disponible o esperado.",
        });
      }
      if (!data.backupPriority) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["backupPriority"],
          message: "Selecciona prioridad de respaldo.",
        });
      }
    }
  });

export type ContactChatbotLead = z.infer<typeof contactChatbotLeadSchema>;
export type ContactChatbotTopic = z.infer<typeof topicEnum>;

type FAQItem = (typeof CHATBOT_FAQS)[ContactChatbotTopic][number];

export function needsGeneratorProfiling(topic: ContactChatbotTopic): boolean {
  return topic === "generadores" || topic === "integrado";
}

export function getFaqByTopicAndId(
  topic: ContactChatbotTopic,
  faqId: string,
): FAQItem | null {
  const item = CHATBOT_FAQS[topic].find((faq) => faq.id === faqId);
  return item ?? null;
}

export function buildContactChatbotMessage(payload: ContactChatbotLead): string {
  const lead = contactChatbotLeadSchema.parse(payload);
  const faq = getFaqByTopicAndId(lead.topic, lead.faqId);

  if (!faq) {
    throw new Error("FAQ invalida para el tema seleccionado.");
  }

  const lines = [
    "ENERGRUN - Contacto via chatbot web.",
    `Tema principal: ${CHATBOT_TOPIC_LABEL[lead.topic]}.`,
    `Duda principal: ${faq.question}`,
    `Resumen inicial entregado: ${faq.answer}`,
  ];

  if (needsGeneratorProfiling(lead.topic)) {
    lines.push(
      `Tipo de generador de interes: ${CHATBOT_GENERATOR_TYPE_LABEL[lead.generatorType!]}.`,
    );
    lines.push(`Combustible preferente: ${CHATBOT_FUEL_LABEL[lead.fuelType!]}.`);
    lines.push(
      `Prioridad de respaldo: ${CHATBOT_BACKUP_PRIORITY_LABEL[lead.backupPriority!]}.`,
    );
  }

  lines.push(
    `Tipo de inmueble: ${CHATBOT_SEGMENT_LABEL[lead.segment]}.`,
    `Cotiza en IMSS: ${CHATBOT_IMSS_LABEL[lead.cotizaEnIMSS]}.`,
    "Solicito asesoria tecnica y propuesta para mi caso.",
    "Zona: Monterrey y area metropolitana.",
  );

  return lines.join("\n");
}
