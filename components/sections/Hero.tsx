'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const techBadges = ['React', 'Next.js', 'Flutter', 'Node.js', 'Python', 'AI/ML', 'M-Pesa', 'AWS']

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
          animate={{
            y: [0, 100, 0],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-40 right-1/4 w-96 h-96 bg-cyan-300 dark:bg-cyan-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
          animate={{
            y: [100, 0, 100],
            x: [50, 0, 50],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main heading */}
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance mb-6"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            We Build Software
          </span>
          {' '}
          <span className="text-slate-900 dark:text-white">
            That Moves Africa Forward
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto text-balance"
          variants={itemVariants}
        >
          Custom web apps, mobile apps, SaaS products, and AI-integrated solutions — crafted for
          startups, businesses, and organizations across Kenya and beyond.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-12" variants={itemVariants}>
          <Button
            size="lg"
            className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white rounded-lg"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See Our Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get a Free Quote
          </Button>
        </motion.div>

        {/* Tech Stack Badges */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center"
          variants={itemVariants}
        >
          {techBadges.map((badge) => (
            <motion.div
              key={badge}
              className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              {badge}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-slate-500 dark:text-slate-400">Scroll to explore</span>
          <svg
            className="w-5 h-5 text-slate-500 dark:text-slate-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
