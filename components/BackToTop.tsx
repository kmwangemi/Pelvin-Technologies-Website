'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export function BackToTop() {
  const { scrollY } = useScroll()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsVisible(latest > 400)
    })
  }, [scrollY])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.2 }}
      pointerEvents={isVisible ? 'auto' : 'none'}
    >
      <Button
        onClick={handleClick}
        size="icon"
        className="rounded-full shadow-lg hover:shadow-xl"
      >
        <ChevronUp className="h-5 w-5" />
        <span className="sr-only">Back to top</span>
      </Button>
    </motion.div>
  )
}
