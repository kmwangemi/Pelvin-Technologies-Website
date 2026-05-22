'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What technologies do you specialize in?',
    answer:
      'We specialize in modern web and mobile technologies including React, Next.js, Node.js, TypeScript, and cloud platforms like AWS, Google Cloud, and Azure. We choose the best tools for each project.',
  },
  {
    question: 'What is your typical project timeline?',
    answer:
      'Project timelines vary based on complexity. Small projects typically take 4-8 weeks, while larger applications may take 3-6 months. We provide detailed timelines after the discovery phase.',
  },
  {
    question: 'Do you provide ongoing support and maintenance?',
    answer:
      'Yes, we offer comprehensive support packages including bug fixes, updates, performance optimization, and new feature development. We can discuss support options based on your needs.',
  },
  {
    question: 'How do you handle project communication?',
    answer:
      'We maintain regular communication through weekly meetings, daily standup summaries, and a dedicated project manager. You&apos;ll have clear visibility into progress at all times.',
  },
  {
    question: 'What is your development process?',
    answer:
      'We follow an agile methodology with iterative development, regular testing, and client feedback loops. Our process includes discovery, design, development, testing, and deployment phases.',
  },
  {
    question: 'Do you work with fixed or hourly rates?',
    answer:
      'We offer both fixed-price projects and time-and-material arrangements. Fixed pricing is ideal for well-defined scope, while hourly works better for exploratory or ongoing projects.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="faq" className="py-20 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about our services
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-xl border border-border/40 bg-background overflow-hidden hover:border-primary/50 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/30 transition-colors"
              >
                <span className="text-left font-semibold text-lg">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown size={24} className="text-primary" />
                </motion.div>
              </button>

              {/* Answer */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 border-t border-border/40 bg-muted/20">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">Didn&apos;t find your answer?</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  )
}
