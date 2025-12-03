'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const t = useTranslations('nav')

  const navLinks = [
    { title: t('home'), href: '/' },
    { title: t('services'), href: '/services' },
    { title: t('about'), href: '/about' },
    { title: t('portfolio'), href: '/portfolio' },
    { title: t('contact'), href: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Kiwitech Solutions
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium transition-colors hover:text-cyan-600 dark:hover:text-cyan-400
                    ${isActive ? 'text-cyan-600 dark:text-cyan-400' : 'text-gray-700 dark:text-gray-300'}
                  `}
                >
                  {link.title}
                </Link>
              )
            })}
            <ThemeToggle />
            <LanguageSwitcher />
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-2.5 px-6 rounded-lg
                         transition-all duration-300 ease-in-out
                         hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105"
            >
              {t('contactBtn')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="p-2"
            >
              {isMenuOpen ? (
                <X size={28} className="text-gray-900 dark:text-gray-100" />
              ) : (
                <Menu size={28} className="text-gray-900 dark:text-gray-100" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white dark:bg-gray-900 shadow-lg py-4 z-40 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto max-w-7xl px-4 flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium py-3 rounded-lg px-4
                    ${
                      isActive
                        ? 'bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </Link>
              )
            })}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-center font-bold py-3 px-5 rounded-lg
                         transition-all duration-300 ease-in-out
                         hover:shadow-lg w-full mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('contactBtn')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}