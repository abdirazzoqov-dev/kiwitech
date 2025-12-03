'use client'

import Link from 'next/link'
import { Code, Smartphone, Camera, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function HomeServices() {
  const t = useTranslations('homeServices')

  const homeServices = [
    {
      title: t('web.title'),
      description: t('web.description'),
      icon: <Code size={32} className="text-cyan-600" />,
      href: '/services',
    },
    {
      title: t('mobile.title'),
      description: t('mobile.description'),
      icon: <Smartphone size={32} className="text-cyan-600" />,
      href: '/services',
    },
    {
      title: t('cctv.title'),
      description: t('cctv.description'),
      icon: <Camera size={32} className="text-cyan-600" />,
      href: '/services',
    },
  ]

  return (
    <section className="w-full py-20 md:py-24 bg-gradient-to-b from-white via-cyan-50/20 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 dark:from-cyan-600/5 dark:to-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-400/10 to-cyan-400/10 dark:from-blue-600/5 dark:to-cyan-600/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-cyan-600 dark:text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-3 px-4 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/30">
            {t('title')}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-center text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeServices.map((service, index) => (
            <Link
              href={service.href}
              key={service.title}
              className="group relative block rounded-2xl border border-gray-200 dark:border-gray-700 
                         bg-white dark:bg-gray-800 p-8 
                         transition-all duration-500 ease-out
                         hover:border-cyan-400 dark:hover:border-cyan-500
                         hover:shadow-2xl hover:shadow-cyan-500/20 dark:hover:shadow-cyan-500/10
                         hover:-translate-y-3 hover:scale-[1.02]
                         before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-cyan-500/0 before:to-blue-500/0 
                         hover:before:from-cyan-500/5 hover:before:to-blue-500/5 before:transition-all before:duration-500"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.15}s both`,
              }}
            >
              <div className="relative z-10">
                <div className="mb-6 w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 
                                flex items-center justify-center
                                transition-all duration-500 group-hover:scale-110 group-hover:rotate-6
                                group-hover:shadow-lg group-hover:shadow-cyan-500/30">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <span className="font-semibold text-cyan-600 dark:text-cyan-400 flex items-center group-hover:gap-3 gap-2 transition-all duration-300">
                  {t('detailsBtn')}
                  <ArrowRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block bg-gradient-to-r from-gray-800 to-gray-900 text-white font-bold py-3 px-8 rounded-lg
                           transition-all duration-300 ease-in-out 
                           hover:shadow-lg hover:shadow-gray-800/30 hover:scale-105 hover:-translate-y-1"
          >
            {t('viewAllBtn')}
          </Link>
        </div>
      </div>
    </section>
  )
}