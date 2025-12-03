'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'

export function CTA() {
  const t = useTranslations('cta')

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white rounded-2xl p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
          {/* Orqa fon animatsiyasi */}
          <div className="absolute -top-16 -left-16 w-48 h-48 bg-cyan-500/10 rounded-full animate-spin-slow" />
          <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-blue-500/10 rounded-full animate-spin-slow-reverse" />

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              {t('title')}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-xl mx-auto">
              {t('description')}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-8 rounded-lg text-lg 
                           transition-all duration-300 ease-in-out
                           hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-105 hover:-translate-y-1"
            >
              {t('contactBtn')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}