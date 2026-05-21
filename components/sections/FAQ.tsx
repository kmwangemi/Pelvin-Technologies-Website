'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'How long does it take to build a web or mobile app?',
    answer:
      'Timeline depends on complexity and scope. A simple MVP typically takes 4-8 weeks, while a full-featured application can take 3-6 months. We provide a detailed timeline during the discovery phase.',
  },
  {
    question: 'Do you work with startups and early-stage ideas?',
    answer:
      'Absolutely! We specialize in working with startups and early-stage companies. We offer MVP-focused solutions to help you validate your idea with minimal investment.',
  },
  {
    question: 'Can you integrate M-Pesa into my application?',
    answer:
      'Yes, we have extensive experience integrating M-Pesa Daraja API into web and mobile applications. This is one of our key specialties for building fintech solutions in Kenya.',
  },
  {
    question: 'Do you offer post-launch support and maintenance?',
    answer:
      'Yes, we offer comprehensive post-launch support packages ranging from 3 months to ongoing annual maintenance. This includes bug fixes, updates, monitoring, and feature enhancements.',
  },
  {
    question: 'What is your payment structure for projects?',
    answer:
      'We typically work on a 50/50 model: 50% upfront to start the project, and 50% upon completion. For larger projects, we can discuss milestone-based payments.',
  },
  {
    question: 'Can you build and manage a SaaS product from scratch?',
    answer:
      'Yes, we provide end-to-end SaaS development services including architecture design, development, deployment, and ongoing management. We handle everything from MVP to scaling.',
  },
  {
    question: 'Do you sign NDAs before discussing project details?',
    answer:
      'Absolutely. We take confidentiality seriously and are happy to sign NDAs before any discussion about your project details and business requirements.',
  },
  {
    question: 'Can I see examples of your past work before hiring you?',
    answer:
      'Yes, we have a portfolio section showcasing our recent projects. However, some client work is confidential. We can provide case studies and references relevant to your project type.',
  },
  {
    question: 'Do you work with clients outside Kenya?',
    answer:
      'Yes, we work with clients globally. We primarily serve the East African market but have successfully delivered projects for companies in Europe, North America, and other regions.',
  },
  {
    question: 'What information do I need to provide to get a quote?',
    answer:
      'We need: project goals and requirements, target users, must-have features, preferred timeline, and budget range. More details help us provide a more accurate quote. Our team will help gather this information during a consultation call.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Quick answers to common questions about our services
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-slate-200 dark:border-slate-700 rounded-lg px-6 data-[state=open]:bg-slate-50 dark:data-[state=open]:bg-slate-900/50"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-cyan-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 dark:text-slate-300 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
