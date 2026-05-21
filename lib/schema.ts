import { z } from 'zod'

export const contactSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  service: z.enum(
    [
      'Web Application',
      'Mobile App',
      'SaaS Product',
      'AI-Integrated App',
      'UI/UX Design',
      'Other',
    ],
    { required_error: 'Please select a service' }
  ),
  budget: z.enum(
    [
      'Under KES 50,000',
      'KES 50,000 – 150,000',
      'KES 150,000 – 500,000',
      'KES 500,000+',
      'Not Sure Yet',
    ],
    { required_error: 'Please select a budget range' }
  ),
  description: z.string().min(20, 'Please describe your project in at least 20 characters'),
  referral: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactSchema>
