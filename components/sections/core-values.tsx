'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Heart, Lightbulb, Users, Shield, Rocket, Award } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We operate with honesty, transparency, and ethical practices in all our business dealings. Trust is the foundation of everything we do.',
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace creativity and cutting-edge thinking to solve challenges in new ways. Continuous improvement drives our evolution.',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and partnership. Success comes from working together towards common goals.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: Shield,
    title: 'Excellence',
    description: 'We deliver high-quality solutions with attention to detail. Every project reflects our commitment to exceeding expectations.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    icon: Rocket,
    title: 'Growth',
    description: 'We foster continuous learning and development. Both personal and professional growth are essential to our culture.',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    icon: Award,
    title: 'Impact',
    description: 'We measure success by the positive difference we create. Our solutions drive meaningful change for our clients and community.',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
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
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
}

export function CoreValuesSection() {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      {/* Gradient backgrounds */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mx-auto mb-4" variant="outline">
            WHAT DEFINES US
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Our Core Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            These six principles guide every decision we make and define our culture
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full p-8 rounded-xl border border-border/40 bg-card hover:border-primary/50 transition-all duration-300 overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    {/* Icon */}
                    <div className={`inline-block p-4 rounded-lg ${value.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${value.color}`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground">{value.title}</h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {value.description}
                    </p>

                    {/* Accent line */}
                    <div className="h-1 w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-12 transition-all duration-300 rounded-full" />
                  </div>
                </div>

                {/* Animated number in background */}
                <div className="absolute -top-4 -right-4 text-6xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors duration-300 pointer-events-none">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Supporting statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 sm:p-12 border border-border/40 text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">Living Our Values</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            These values aren&apos;t just words on our website—they&apos;re woven into our daily work, our team culture, and how we serve our clients. Every team member embodies these principles in their role, creating an environment where excellence thrives and innovation flourishes.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
