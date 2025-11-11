'use client' // Mobil menyuni ochib-yopish uchun state kerak bo'ladi

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

// ===== NAVIGATSIYA HAVOLALARI (YANGILANDI) =====
const navLinks = [
  { title: 'Bosh Sahifa', href: '/' },
  { title: 'Xizmatlar', href: '/services' },
  { title: 'Biz haqimizda', href: '/about' },
  { title: 'Portfolio', href: '/portfolio' }, // <-- "PORTFOLIO" QO'SHILDI
  { title: "Bog'lanish", href: '/contact' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname() // Joriy URL manzilini olamiz

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex justify-between items-center h-20">
          {/* 1. Logotip */}
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="text-2xl font-bold text-cyan-600">Kiwitech Solutions</span>
          </Link>

          {/* 2. Desktop Menyu (Aktiv holatni ko'rsatish qo'shildi) */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href

              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className={`text-lg font-medium transition-colors hover:text-cyan-600
                    ${isActive ? 'text-cyan-600' : 'text-gray-600'}
                  `}
                >
                  {link.title}
                </Link>
              )
            })}
            <Link
              href="/contact"
              className="bg-cyan-600 text-white font-bold py-2 px-5 rounded-lg
                         transition-all duration-300 ease-in-out
                         hover:bg-cyan-700 hover:scale-105"
            >
              Bog'lanish
            </Link>
          </div>

          {/* 3. Mobil Menyu Tugmasi */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menyuni ochish"
            >
              {isMenuOpen ? (
                <X size={28} className="text-gray-900" />
              ) : (
                <Menu size={28} className="text-gray-900" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 4. Mobil Menyu (ochilganda) (Aktiv holatni ko'rsatish qo'shildi) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg py-4 z-40">
          <div className="container mx-auto max-w-7xl px-4 flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href

              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className={`text-lg font-medium py-2 rounded-lg px-3
                    ${
                      isActive
                        ? 'bg-cyan-50 text-cyan-700'
                        : 'text-gray-700 hover:bg-gray-100'
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
              className="bg-cyan-600 text-white text-center font-bold py-3 px-5 rounded-lg
                         transition-all duration-300 ease-in-out
                         hover:bg-cyan-700 w-full mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Bog'lanish
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}