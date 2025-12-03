'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')
  const tContact = useTranslations('contact')

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 dark:from-black dark:via-gray-950 dark:to-black text-gray-400 dark:text-gray-500 border-t border-gray-700/50 dark:border-gray-800">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Kiwitech
              </span>
            </Link>
            <p className="max-w-xs text-base text-gray-400">
              {t('description')}
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">
              {t('pages')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors">
                  {tNav('home')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors">
                  {tNav('services')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors">
                  {tNav('about')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                  {tNav('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">
              {t('servicesTitle')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="hover:text-cyan-400 transition-colors"
                >
                  {tContact('serviceOptions.webDev')}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-cyan-400 transition-colors"
                >
                  {tContact('serviceOptions.mobile')}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-cyan-400 transition-colors"
                >
                  {tContact('serviceOptions.cctv')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors">
                  {tNav('services')}...
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">
              {t('contact')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-cyan-400 shrink-0" />
                <a
                  href="mailto:support@kiwitech.uz"
                  className="hover:text-cyan-400 transition-colors"
                >
                  support@kiwitech.uz
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-cyan-400 shrink-0" />
                <a
                  href="tel:+998908685010"
                  className="hover:text-cyan-400 transition-colors"
                >
                  +998 (90) 868-50-10
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-cyan-400 shrink-0" />
                <span>{tContact('addressText')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-950/50 py-6">
        <div className="container mx-auto max-w-7xl px-4 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Kiwitech Solutions. {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}