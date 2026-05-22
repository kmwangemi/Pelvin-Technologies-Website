'use client'

import { motion } from 'framer-motion'
import { Code, Smartphone, Cloud, Brain, Zap, Lock } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile solutions for iOS and Android.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment on AWS, GCP, and Azure.',
  },
  {
    icon: Brain,
    title: 'AI Integration',
    description: 'Intelligent automation using machine learning and AI technologies.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Lightning-fast applications optimized for speed and efficiency.',
  },
  {
    icon: Lock,
    title: 'Security',
    description: 'Enterprise-grade security and compliance with industry standards.',
  },
]

export function ServicesSection() {
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

  return (
    <section id="services" className="py-20 sm:py-32 bg-card/30 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl border border-border/40 bg-background p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
