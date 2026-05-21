'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, type ContactFormData } from '@/lib/schema'
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react'
import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'
import { Spinner } from '@/components/ui/spinner'

export function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const service = watch('service')
  const budget = watch('budget')

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true)
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log('Form data:', data)

      toast({
        title: 'Success!',
        description: 'Thanks! We&apos;ll be in touch within 24 hours.',
        variant: 'default',
      })

      reset()
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@devflow.io',
      href: 'mailto:hello@devflow.io',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+254 (0) 700 123 456',
      href: 'tel:+254700123456',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nairobi, Kenya',
      href: '#',
    },
    {
      icon: MessageSquare,
      label: 'WhatsApp',
      value: 'Message us',
      href: 'https://wa.me/254700123456',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Get in touch with us to discuss your next project
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column - Contact info & map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact info cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-indigo-600 dark:hover:border-cyan-500 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/30 transition-colors">
                      <Icon className="w-6 h-6 text-indigo-600 dark:text-cyan-500" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {info.label}
                      </p>
                      <p className="font-semibold text-slate-900 dark:text-white">
                        {info.value}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Map placeholder */}
            <div className="rounded-lg overflow-hidden h-80 bg-slate-200 dark:bg-slate-800">
              <img
                src="https://placehold.co/600x400?text=Nairobi+Map"
                alt="Location Map"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right column - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    Full Name *
                  </label>
                  <Input
                    {...register('fullName')}
                    placeholder="Your full name"
                    className="rounded-lg"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    Email *
                  </label>
                  <Input
                    {...register('email')}
                    type="email"
                    placeholder="your@email.com"
                    className="rounded-lg"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    Phone Number
                  </label>
                  <Input
                    {...register('phone')}
                    placeholder="+254 (0) 700 123 456"
                    className="rounded-lg"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    Service Needed *
                  </label>
                  <Select value={service} onValueChange={(value) => setValue('service', value as any)}>
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Web Application">Web Application</SelectItem>
                      <SelectItem value="Mobile App">Mobile App</SelectItem>
                      <SelectItem value="SaaS Product">SaaS Product</SelectItem>
                      <SelectItem value="AI-Integrated App">AI-Integrated App</SelectItem>
                      <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.service && (
                    <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
                  )}
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    Budget Range *
                  </label>
                  <Select value={budget} onValueChange={(value) => setValue('budget', value as any)}>
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Under KES 50,000">Under KES 50,000</SelectItem>
                      <SelectItem value="KES 50,000 – 150,000">KES 50,000 – 150,000</SelectItem>
                      <SelectItem value="KES 150,000 – 500,000">
                        KES 150,000 – 500,000
                      </SelectItem>
                      <SelectItem value="KES 500,000+">KES 500,000+</SelectItem>
                      <SelectItem value="Not Sure Yet">Not Sure Yet</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.budget && (
                    <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>
                  )}
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    Project Description *
                  </label>
                  <textarea
                    {...register('description')}
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600"
                  />
                  {errors.description && (
                    <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                  )}
                </div>

                {/* Referral */}
                <div>
                  <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    How did you hear about us?
                  </label>
                  <Input
                    {...register('referral')}
                    placeholder="Friend recommendation, Google, etc."
                    className="rounded-lg"
                  />
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white rounded-lg flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Spinner className="h-4 w-4" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
