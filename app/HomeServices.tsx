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
    <section className="w-full py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          {t('title')}
        </h2>
        <p className="text-center text-base sm:text-lg text-gray-600 mb-12 max-w-xl mx-auto">
          {t('subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeServices.map((service, index) => (
            <Link
              href={service.href}
              key={service.title}
              className="group block rounded-2xl border border-gray-200 bg-white p-8 shadow-sm 
                           transition-all duration-300 ease-in-out
                           hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-100 hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.15}s both`,
              }}
            >
              <div className="mb-5 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-5">{service.description}</p>
              <span className="font-semibold text-cyan-600 flex items-center group-hover:underline">
                {t('detailsBtn')}
                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
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