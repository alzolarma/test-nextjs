import { z } from 'zod';

export const postSchema = z.object({
  title: z
    .string()
    .nonempty({ message: "El título es obligatorio." })
    .min(10, { message: "El título debe tener al menos 10 caracteres." }),
  body: z
    .string()
    .nonempty({ message: "El contenido (body) es obligatorio." })
    .min(15, { message: "El contenido debe tener al menos 15 caracteres." }),
});

export type PostValidationErrors = Partial<Record<'title' | 'body', string>>;