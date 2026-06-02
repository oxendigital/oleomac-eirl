import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres." })
    .max(100, { message: "El nombre no puede exceder los 100 caracteres." }),
  email: z
    .string()
    .email({ message: "Por favor introduce una dirección de correo válida." }),
  phone: z
    .string()
    .optional()
    .or(z.literal("")), // Permite vacío
  company: z
    .string()
    .max(100, { message: "El nombre de la empresa no puede exceder los 100 caracteres." })
    .optional()
    .or(z.literal("")), // Campo B2B opcional
  subject: z
    .string()
    .min(3, { message: "El asunto debe tener al menos 3 caracteres." })
    .max(150, { message: "El asunto no puede exceder los 150 caracteres." }),
  message: z
    .string()
    .min(5, { message: "El mensaje debe tener al menos 5 caracteres." })
    .max(1000, { message: "El mensaje no puede exceder los 1000 caracteres." }),
  /**
   * Campo oculto honeypot para capturar bots.
   */
  honeypot: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
