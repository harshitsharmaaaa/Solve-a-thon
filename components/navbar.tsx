"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/tracks', label: 'Tracks' },
    { href: '/schedule', label: 'Schedule' },
    { href: '/sponsors', label: 'Sponsors' },
  ]

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 pt-6">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`max-w-5xl mx-auto rounded-2xl transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0a1930]/90 md:backdrop-blur-lg shadow-lg shadow-blue-900/20' 
            : 'bg-[#0a1930]/70 md:backdrop-blur-md'
        }`}
      >
        <div className="px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Solveathon
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative px-3 py-2 text-sm font-medium text-blue-100/90 hover:text-blue-100 transition-colors group"
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-active"
                        className="absolute inset-0 bg-blue-400/10 rounded-lg z-[-1]"
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                    <span className="absolute inset-x-0 bottom-0 h-[2px] bg-blue-400/70 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </Link>
                )
              })}
              <div className="pl-6">
                <Button
                  className="relative overflow-hidden group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0"
                >
                  <span className="relative z-10">Register Now</span>
                  <div className="absolute inset-0 bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-blue-400/10 transition-colors text-blue-100"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden border-t border-blue-400/10 bg-[#0a1930] rounded-b-2xl overflow-hidden"
            >
              <div className="px-4 py-3 space-y-3">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors text-blue-100/90 ${
                        isActive ? 'bg-blue-400/10' : 'hover:bg-blue-400/5'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                })}
                <div className="pt-2 pb-3">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0">
                    Register Now
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
          />
        )}
      </AnimatePresence>
    </div>
  )
}