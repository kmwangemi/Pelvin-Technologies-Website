'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'David Omondi',
    role: 'CEO',
    company: 'TechStart Kenya',
    quote: 'DevFlow transformed our vision into reality. Their attention to detail and commitment to excellence is unmatched. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Martha Kiplagat',
    role: 'Operations Director',
    company: 'Nairobi NGO Foundation',
    quote: 'The donor portal they built for us has increased our operational efficiency by 40%. Professional team, great communication.',
    rating: 5,
  },
  {
    name: 'Samuel Nyambura',
    role: 'Founder',
    company: 'AfroMarket',
    quote: 'Building our e-commerce platform with DevFlow was seamless. Their understanding of M-Pesa integration saved us months of development time.',
    rating: 5,
  },
  {
    name: 'Elizabeth Mwanza',
    role: 'CTO',
    company: 'Digital Solutions Ltd',
    quote: 'Working with DevFlow for our AI chatbot project was exceptional. They delivered on time, within budget, and exceeded expectations.',
    rating: 5,
  },
  {
    name: 'Paul Kariuki',
    role: 'Product Lead',
    company: 'FinTech Innovators',
    quote: 'The team&apos;s expertise in scalable backend architecture was crucial for our rapid growth. Best investment we&apos;ve made in development.',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
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
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Real stories from companies we&apos;ve worked with
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <Card className="p-8 h-full flex flex-col relative overflow-hidden">
                    {/* Decorative quotation mark */}
                    <div className="absolute -top-8 -right-8 text-8xl text-slate-200 dark:text-slate-800 opacity-50">
                      "
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-4 relative z-10">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-slate-700 dark:text-slate-300 mb-6 flex-1 italic relative z-10">
                      {testimonial.quote}
                    </p>

                    {/* Author */}
                    <div className="relative z-10">
                      <p className="font-semibold text-slate-900 dark:text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious className="relative static" />
              <CarouselNext className="relative static" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
