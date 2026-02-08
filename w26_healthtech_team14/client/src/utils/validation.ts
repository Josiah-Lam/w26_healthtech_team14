import * as z from 'zod';

export const contactSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  companySize: z.string().optional(),
  country: z.string().optional(),
  message: z.string().min(1),
  privacy: z.boolean().refine(v => v === true)
});

export type ContactSchema = z.infer<typeof contactSchema>;
