'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ThemeToggle } from '@/components/ThemeToggle'
import { useActiveSection } from '@/hooks/useActiveSection'
import { Menu } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Products', href: '#products' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Process', href: '#process' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Team', href: '#team' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
]

export function Navbar() {
  const activeSection = useActiveSection()
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/70 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            DevFlow
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all relative ${
                  activeSection === link.href.substring(1)
                    ? 'text-indigo-600 dark:text-cyan-400'
                    : 'text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    className="absolute bottom-1 left-0 right-0 h-1 bg-indigo-600 dark:bg-cyan-400 rounded-full"
                    layoutId="underline"
                    transition={{ type: 'spring', stiffness: 380, damping: 40 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Right side - Theme toggle + Mobile menu */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={handleNavClick}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        activeSection === link.href.substring(1)
                          ? 'text-indigo-600 dark:text-cyan-400 bg-slate-100 dark:bg-slate-800'
                          : 'text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
