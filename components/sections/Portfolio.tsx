'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useState } from 'react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    name: 'ChurchSync Demo',
    description: 'Full-featured church management web platform',
    tags: ['SaaS', 'React', 'Node.js', 'M-Pesa'],
    image: 'https://placehold.co/600x400?text=ChurchSync',
    category: ['SaaS', 'Web App'],
  },
  {
    id: 2,
    name: 'NGO Donor Portal',
    description: 'Grant tracking and donor management for nonprofits',
    tags: ['Web App', 'Next.js', 'PostgreSQL'],
    image: 'https://placehold.co/600x400?text=NGO+Donor',
    category: ['Web App'],
  },
  {
    id: 3,
    name: 'E-Commerce Platform',
    description: 'Multi-vendor marketplace with M-Pesa checkout',
    tags: ['Web App', 'React', 'Node.js'],
    image: 'https://placehold.co/600x400?text=E-Commerce',
    category: ['Web App'],
  },
  {
    id: 4,
    name: 'SACCO Management App',
    description: 'Member savings, loans, and reporting system',
    tags: ['SaaS', 'Flutter', 'Firebase'],
    image: 'https://placehold.co/600x400?text=SACCO',
    category: ['Mobile', 'SaaS'],
  },
  {
    id: 5,
    name: 'AI Customer Support Bot',
    description: 'LLM-powered chatbot with CRM integration',
    tags: ['AI', 'Python', 'OpenAI'],
    image: 'https://placehold.co/600x400?text=AI+Chatbot',
    category: ['AI'],
  },
  {
    id: 6,
    name: 'Real Estate Listing Platform',
    description: 'Property listings with virtual tour support',
    tags: ['Web App', 'Next.js', 'Maps API'],
    image: 'https://placehold.co/600x400?text=Real+Estate',
    category: ['Web App'],
  },
]

const filters = ['All', 'Web App', 'Mobile', 'SaaS', 'AI']

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter))

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
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
            Work We&apos;re Proud Of
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Showcasing our best projects and case studies
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all relative ${
                activeFilter === filter
                  ? 'text-white bg-indigo-600 dark:bg-cyan-600'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {filter}
              {activeFilter === filter && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-700 dark:bg-cyan-700 rounded-full"
                  layoutId="activeTab"
                  transition={{ type: 'spring', stiffness: 380, damping: 40 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-slate-200 dark:bg-slate-800">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      {project.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button variant="outline" className="w-full">
                      View Case Study
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
