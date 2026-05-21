'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

const pricingData = {
  projects: [
    {
      name: 'Starter',
      price: 'KES 50,000 – 150,000',
      description: 'MVPs, landing pages, small business sites',
      features: [
        'Custom design & development',
        'Basic SEO optimization',
        'Mobile responsive',
        '3 months support included',
        'Deployment & hosting setup',
      ],
    },
    {
      name: 'Growth',
      price: 'KES 150,000 – 500,000',
      description: 'Full web or mobile apps with integrations',
      features: [
        'Everything in Starter +',
        'Advanced integrations (M-Pesa, APIs)',
        'Database design & setup',
        'Advanced testing',
        '6 months support included',
        'Performance optimization',
      ],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Large-scale systems, SaaS platforms, AI apps',
      features: [
        'Everything in Growth +',
        'Custom architecture design',
        'Team collaboration setup',
        '12 months support included',
        'Ongoing maintenance contract',
        'Priority support',
      ],
    },
  ],
  saas: [
    {
      name: 'Starter',
      price: 'From KES 2,500/month',
      description: 'Small teams using our SaaS products',
      features: [
        'Up to 10 users',
        'Core features access',
        'Email support',
        'Basic analytics',
        '1 custom integration',
      ],
    },
    {
      name: 'Growth',
      price: 'From KES 7,500/month',
      description: 'Growing organizations with more members/users',
      features: [
        'Up to 100 users',
        'Everything in Starter +',
        'Advanced features',
        'Priority support',
        'Custom integrations',
        'Advanced analytics',
      ],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom/month',
      description: 'Multi-branch orgs, white-label, custom features',
      features: [
        'Unlimited users',
        'Everything in Growth +',
        'White-label options',
        'Dedicated account manager',
        'Custom features & development',
        '24/7 phone support',
      ],
    },
  ],
}

export function Pricing() {
  const [billingMode, setBillingMode] = useState<'projects' | 'saas'>('projects')

  const tiers = pricingData[billingMode]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Simple, predictable pricing for all project sizes
          </p>

          {/* Toggle switch */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span
              className={`font-medium cursor-pointer transition-colors ${
                billingMode === 'projects'
                  ? 'text-slate-900 dark:text-white'
                  : 'text-slate-500'
              }`}
              onClick={() => setBillingMode('projects')}
            >
              One-Time Projects
            </span>

            <div
              className="relative w-16 h-8 bg-slate-300 dark:bg-slate-700 rounded-full cursor-pointer transition-colors"
              onClick={() => setBillingMode(billingMode === 'projects' ? 'saas' : 'projects')}
            >
              <motion.div
                className="absolute top-1 left-1 w-6 h-6 bg-white dark:bg-slate-900 rounded-full shadow-md"
                animate={{ x: billingMode === 'saas' ? 32 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </div>

            <span
              className={`font-medium cursor-pointer transition-colors ${
                billingMode === 'saas'
                  ? 'text-slate-900 dark:text-white'
                  : 'text-slate-500'
              }`}
              onClick={() => setBillingMode('saas')}
            >
              SaaS / Monthly
            </span>
          </motion.div>
        </motion.div>

        {/* Pricing cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={billingMode}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={`h-full p-8 flex flex-col transition-transform ${
                    tier.featured
                      ? 'lg:scale-105 border-2 border-indigo-600 dark:border-cyan-500 relative'
                      : ''
                  }`}
                >
                  {tier.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 bg-indigo-600 dark:bg-cyan-600 text-white rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                    {tier.description}
                  </p>

                  <div className="mb-6">
                    <div className="text-4xl font-bold text-slate-900 dark:text-white">
                      {tier.price}
                    </div>
                  </div>

                  <Button
                    className={`w-full mb-8 ${
                      tier.featured
                        ? 'bg-indigo-600 hover:bg-indigo-700 dark:bg-cyan-600 dark:hover:bg-cyan-700'
                        : ''
                    }`}
                    variant={tier.featured ? 'default' : 'outline'}
                  >
                    Get Started
                  </Button>

                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
                      Features included:
                    </p>
                    <ul className="space-y-3">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-cyan-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700 dark:text-slate-300 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
