import { z } from "zod";

export const leadSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(2, "Escribe tu nombre")
    .max(80, "Nombre demasiado largo"),
  telefono: z
    .string()
    .trim()
    .min(8, "Escribe tu teléfono")
    .max(20, "Teléfono demasiado largo")
    .transform((v) => v.replace(/[^\d+]/g, ""))
    .refine(
      (v) => {
        const digits = v.replace(/[^\d]/g, "");
        return digits.length >= 10;
      },
      { message: "Usa un teléfono válido (10+ dígitos)" },
    ),
  cotizaEnIMSS: z.boolean(),
});

export type LeadInput = z.input<typeof leadSchema>;
export type Lead = z.output<typeof leadSchema>;

