'use client'

import { Button } from '@/components/ui/button'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('pelvin-cookie-consent')
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('pelvin-cookie-consent', 'accepted')
    localStorage.setItem('pelvin-cookie-consent-date', new Date().toISOString())
    setIsVisible(false)
    
    // Initialize analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
      })
    }
  }

  const handleDecline = () => {
    localStorage.setItem('pelvin-cookie-consent', 'declined')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 border-t border-border/40 bg-card/95 backdrop-blur-xl p-4 sm:p-6"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              {/* Content */}
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-2">We use cookies</h3>
                <p className="text-sm text-muted-foreground">
                  We use cookies to improve your experience, analyze website traffic, and understand where our visitors are coming from. Your data helps us provide better services and optimize our website performance.
                  <Link href="#" className="ml-1 underline hover:text-foreground">
                    Learn more
                  </Link>
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDecline}
                  className="whitespace-nowrap"
                >
                  Decline
                </Button>
                <Button
                  size="sm"
                  onClick={handleAccept}
                  className="whitespace-nowrap bg-primary hover:bg-primary/90"
                >
                  Accept All
                </Button>
                <button type="button"
                  onClick={() => setIsVisible(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
