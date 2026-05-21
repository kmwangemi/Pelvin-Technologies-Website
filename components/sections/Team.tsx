'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Github, Linkedin, Twitter } from 'lucide-react'

const team = [
  {
    name: 'Alex Kipchoge',
    role: 'CEO & Lead Developer',
    bio: 'Full-stack developer with 8+ years building scalable web & mobile apps. Passionate about open-source.',
    initials: 'AK',
    color: 'from-indigo-500 to-blue-500',
    social: { linkedin: '#', github: '#', twitter: '#' },
  },
  {
    name: 'Sarah Mwangi',
    role: 'Design Lead',
    bio: 'Award-winning UI/UX designer specializing in user-centered design for African markets.',
    initials: 'SM',
    color: 'from-cyan-500 to-teal-500',
    social: { linkedin: '#', github: '#', twitter: '#' },
  },
  {
    name: 'James Kariuki',
    role: 'Backend Engineer',
    bio: 'Infrastructure & DevOps expert. Specializes in cloud architecture, databases, and system design.',
    initials: 'JK',
    color: 'from-purple-500 to-pink-500',
    social: { linkedin: '#', github: '#', twitter: '#' },
  },
  {
    name: 'Grace Odundo',
    role: 'Product Manager',
    bio: 'Experienced PM driving product strategy. Passionate about solving African tech challenges.',
    initials: 'GO',
    color: 'from-orange-500 to-red-500',
    social: { linkedin: '#', github: '#', twitter: '#' },
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function Team() {
  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8">
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
            The People Behind the Code
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Meet the talented team building innovative solutions
          </p>
        </motion.div>

        {/* Team grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {team.map((member) => (
            <motion.div key={member.name} variants={itemVariants}>
              <Card className="h-full p-6 text-center group hover:shadow-lg transition-shadow">
                {/* Avatar */}
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4`}
                >
                  {member.initials}
                </div>

                {/* Name & role */}
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-indigo-600 dark:text-cyan-400 font-medium mb-3">
                  {member.role}
                </p>

                {/* Bio */}
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  {member.bio}
                </p>

                {/* Social links */}
                <motion.div
                  className="flex justify-center gap-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={member.social.linkedin}
                    className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 text-slate-700 dark:text-slate-300 hover:text-indigo-600" />
                  </a>
                  <a
                    href={member.social.github}
                    className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4 text-slate-700 dark:text-slate-300 hover:text-indigo-600" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4 text-slate-700 dark:text-slate-300 hover:text-indigo-600" />
                  </a>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
