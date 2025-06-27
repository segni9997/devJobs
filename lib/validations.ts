import { z } from 'zod';

export const jobSchema = z.object({
  title: z.string().min(1, 'Job title is required').max(100, 'Title too long'),
  company: z.string().min(1, 'Company name is required').max(100, 'Company name too long'),
  location: z.string().min(1, 'Location is required').max(100, 'Location too long'),
  type: z.enum(['FULL_TIME', 'PART_TIME', 'CONTRACT', 'FREELANCE', 'INTERNSHIP']),
  salary: z.string().optional(),
  description: z.string().min(50, 'Description must be at least 50 characters').max(5000, 'Description too long'),
  requirements: z.string().min(20, 'Requirements must be at least 20 characters').max(3000, 'Requirements too long'),
  benefits: z.string().optional(),
  contactEmail: z.string().email('Please enter a valid email address'),
  companyWebsite: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  isRemote: z.boolean(),
});

export type JobFormData = z.infer<typeof jobSchema>;