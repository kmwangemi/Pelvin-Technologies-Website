'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY / scrollHeight
      setProgress(scrolled * 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent z-50"
      style={{ width: `${progress}%` }}
      initial={{ width: 0 }}
    />
  )
}
