'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'

const features = [
  'Member records & attendance',
  'Tithe & offering tracking',
  'M-Pesa giving integration',
  'SMS/WhatsApp broadcasts',
  'Event & service scheduling',
  'Multi-branch support',
]

export function Products() {
  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
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
            Our SaaS Products
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Purpose-built solutions for the African market
          </p>
        </motion.div>

        {/* Products grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ChurchSync Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full p-8 border-2 border-indigo-500/30 dark:border-cyan-500/30 relative overflow-hidden group">
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    ChurchSync
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 text-sm font-medium">
                    🟡 Launching Soon
                  </span>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  A complete church management system for modern congregations
                </p>
                
                <div className="space-y-3 mb-8">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-cyan-500 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white">
                  Join the Waitlist
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Coming Soon Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full p-8 border-2 border-slate-200 dark:border-slate-700 relative overflow-hidden">
              {/* Frosted overlay */}
              <div className="absolute inset-0 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm z-0" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Coming Soon
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-8">
                  Our next SaaS product is in the works. Building something bold for the East African
                  market.
                </p>
                
                <div className="space-y-4">
                  <p className="text-slate-500 dark:text-slate-400 italic">
                    Exciting innovations coming your way...
                  </p>
                  
                  <Button
                    variant="ghost"
                    className="w-full border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300"
                    disabled
                  >
                    Get Notified
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
