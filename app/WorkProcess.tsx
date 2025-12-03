'use client'

import { ClipboardList, Palette, Code, Rocket } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function WorkProcess() {
  const t = useTranslations('workProcess')

  return (
    <section className="w-full py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-y-0 md:gap-x-8">
          <div className="absolute hidden md:block top-6 left-0 w-full h-1 bg-cyan-400 -translate-y-1/2" />

          <div className="relative text-center">
            <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center text-white mx-auto ring-8 ring-gray-50 shadow-lg">
              <ClipboardList size={24} />
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('step1.title')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('step1.description')}
              </p>
            </div>
          </div>

          <div className="relative text-center">
            <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center text-white mx-auto ring-8 ring-gray-50 shadow-lg">
              <Palette size={24} />
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('step2.title')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('step2.description')}
              </p>
            </div>
          </div>

          <div className="relative text-center">
            <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center text-white mx-auto ring-8 ring-gray-50 shadow-lg">
              <Code size={24} />
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('step3.title')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('step3.description')}
              </p>
            </div>
          </div>

          <div className="relative text-center">
            <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center text-white mx-auto ring-8 ring-gray-50 shadow-lg">
              <Rocket size={24} />
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('step4.title')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('step4.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}