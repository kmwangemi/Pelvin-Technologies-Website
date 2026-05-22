'use client'

import { motion } from 'framer-motion'
import { Users, Zap, Target, Globe } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

const stats = [
  { label: 'Years Experience', value: '10+' },
  { label: 'Projects Completed', value: '500+' },
  { label: 'Team Members', value: '50+' },
  { label: 'Happy Clients', value: '200+' },
]

const highlights = [
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Experienced developers, designers, and strategists dedicated to your success',
  },
  {
    icon: Zap,
    title: 'Cutting Edge',
    description: 'Latest technologies and best practices to deliver modern solutions',
  },
  {
    icon: Target,
    title: 'Results Driven',
    description: 'Focused on delivering measurable outcomes that impact your business',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Serving clients worldwide with round-the-clock support and expertise',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-30" />
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
            ABOUT PELVIN
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Transforming Ideas Into Digital Reality
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Since our founding, PELVIN Technologies has been at the forefront of software innovation, helping businesses unlock their potential through transformative technology solutions.
          </p>
        </motion.div>

        {/* Main content with professional image and text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Professional image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl rounded-2xl" />
              <Image
                src="/team-professional.jpg"
                alt="PELVIN Technologies Team"
                width={500}
                height={400}
                className="relative z-10 rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Who We Are</h3>
              <p className="text-muted-foreground leading-relaxed">
                PELVIN Technologies is a leading software development company specializing in creating innovative, scalable solutions that drive business growth. Our team of talented professionals combines technical expertise with creative thinking to deliver exceptional results.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Our Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe in collaborative partnerships where your success is our success. By understanding your unique challenges and goals, we develop customized strategies and solutions that deliver tangible value and competitive advantage.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Why Choose Us</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Proven track record with industry-leading success rates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>State-of-the-art technology and methodologies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Dedicated support throughout your project journey</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-20 py-12 border-y border-border/40">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-6 rounded-lg border border-border/40 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <Icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
