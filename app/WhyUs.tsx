'use client'

import {
  Star,
  Clock,
  ShieldCheck,
  LifeBuoy,
} from 'lucide-react'
import { useTranslations } from 'next-intl'

export function WhyUs() {
  const t = useTranslations('whyUs')

  return (
    <section className="w-full bg-white py-20 md:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 p-6 rounded-xl text-left transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="rounded-full bg-gradient-to-br from-cyan-100 to-cyan-200 p-3 mb-4 inline-block">
              <Star size={28} className="text-cyan-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              {t('quality.title')}
            </h3>
            <p className="text-gray-600">
              {t('quality.description')}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl text-left transition-all hover:shadow-xl hover:-translate-y-1 border-2 border-cyan-500/50 ring-2 ring-cyan-500/20">
            <div className="rounded-full bg-gradient-to-br from-cyan-100 to-cyan-200 p-3 mb-4 inline-block">
              <Clock size={28} className="text-cyan-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              {t('process.title')}
            </h3>
            <p className="text-gray-600">
              {t('process.description')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 p-6 rounded-xl text-left transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="rounded-full bg-gradient-to-br from-cyan-100 to-cyan-200 p-3 mb-4 inline-block">
              <ShieldCheck size={28} className="text-cyan-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              {t('security.title')}
            </h3>
            <p className="text-gray-600">
              {t('security.description')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 p-6 rounded-xl text-left transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="rounded-full bg-gradient-to-br from-cyan-100 to-cyan-200 p-3 mb-4 inline-block">
              <LifeBuoy size={28} className="text-cyan-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              {t('support.title')}
            </h3>
            <p className="text-gray-600">
              {t('support.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}