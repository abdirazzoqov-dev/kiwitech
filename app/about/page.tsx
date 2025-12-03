'use client'

import { useTranslations } from 'next-intl'

export default function AboutPage() {
  const t = useTranslations('about')

  return (
    <main>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 md:py-28 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20px_20px,_rgba(255,255,255,0.05)_1px,_transparent_0)] bg-[length:30px_30px] opacity-70" />
        <div className="container mx-auto max-w-3xl px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold">{t('pageTitle')}</h1>
          <p className="mt-4 text-lg text-gray-300">
            {t('pageSubtitle')}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="prose lg:prose-xl mx-auto text-gray-700 space-y-8">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('missionTitle')}</h2>
              <p className="text-lg text-gray-700">
                {t('missionText')}
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl border border-cyan-200 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('teamTitle')}</h2>
              <p className="text-lg text-gray-700">
                {t('teamText')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
