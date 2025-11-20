import { z } from 'zod';

export const todoSchema = z.object({
  text: z
    .string()
    .min(3, { message: "Task must be at least 3 characters long" })
    .max(100, { message: "Task is too long (max 100 chars)" }),
});

export type TodoFormValues = z.infer<typeof todoSchema>;