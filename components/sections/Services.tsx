'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Code2, Smartphone, Zap, Brain, Plug, Palette } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Web Applications',
    description: 'Scalable, fast, and beautiful web platforms built with modern frameworks',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Cross-platform iOS & Android apps using Flutter and React Native',
  },
  {
    icon: Zap,
    title: 'SaaS Products',
    description: 'End-to-end SaaS development from MVP to full-scale product',
  },
  {
    icon: Brain,
    title: 'AI-Integrated Apps',
    description: 'Intelligent applications powered by machine learning and LLMs',
  },
  {
    icon: Plug,
    title: 'API Development & Integrations',
    description: 'Robust REST and GraphQL APIs with third-party integrations including M-Pesa Daraja',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Clean, user-centered design systems and interactive prototypes',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

export function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
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
            What We Build
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Comprehensive solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <Card className="h-full p-6 border-l-4 border-l-indigo-600 dark:border-l-cyan-500 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <Icon className="w-6 h-6 text-indigo-600 dark:text-cyan-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
