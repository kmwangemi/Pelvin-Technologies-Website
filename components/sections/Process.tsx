'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

const steps = [
  {
    emoji: '🔍',
    title: 'Discovery',
    description: 'We deeply understand your business goals, users, and technical requirements',
  },
  {
    emoji: '🎨',
    title: 'Design',
    description: 'UI/UX prototypes and wireframes reviewed and approved before development begins',
  },
  {
    emoji: '🛠️',
    title: 'Development',
    description: 'Agile sprints with regular demos and progress updates',
  },
  {
    emoji: '🧪',
    title: 'QA & Testing',
    description: 'Rigorous testing across devices, browsers, and edge cases',
  },
  {
    emoji: '🚀',
    title: 'Launch',
    description: 'Smooth deployment with zero-downtime delivery and monitoring',
  },
  {
    emoji: '📊',
    title: 'Support',
    description: 'Ongoing maintenance, feature iterations, and growth support',
  },
]

export function Process() {
  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8">
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
            Our Process
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            A proven methodology for successful projects
          </p>
        </motion.div>

        {/* Timeline - Desktop horizontal, Mobile vertical */}
        <div className="space-y-8">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connecting line */}
              <motion.div
                className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-cyan-600 -translate-y-1/2"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                viewport={{ once: true }}
              />

              {/* Steps */}
              <div className="grid grid-cols-6 gap-4 relative z-10">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex flex-col items-center">
                      {/* Circle with step emoji */}
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white dark:bg-slate-800 border-4 border-indigo-600 dark:border-cyan-500 mb-4 text-2xl">
                        {step.emoji}
                      </div>
                      <h3 className="text-center font-semibold text-slate-900 dark:text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xs text-center text-slate-600 dark:text-slate-400">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline - Vertical */}
          <div className="lg:hidden space-y-6 relative">
            {/* Vertical connecting line */}
            <div className="absolute left-7 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-600 to-cyan-600" />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                {/* Circle */}
                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-white dark:bg-slate-800 border-4 border-indigo-600 dark:border-cyan-500 text-2xl">
                  {step.emoji}
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
