'use client'

import Link from 'next/link'
import {
  Code,
  Smartphone,
  Layers,
  Server,
  Video,
  Network,
  ScanFace,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function ServicesPage() {
  const t = useTranslations('services')

  const servicesList = [
    {
      title: t('webDev.title'),
      description: t('webDev.description'),
      icon: <Code size={36} className="text-cyan-600" />,
      href: '/services',
    },
    {
      title: t('mobileApps.title'),
      description: t('mobileApps.description'),
      icon: <Smartphone size={36} className="text-cyan-600" />,
      href: '/services',
    },
    {
      title: t('uiux.title'),
      description: t('uiux.description'),
      icon: <Layers size={36} className="text-cyan-600" />,
      href: '/services',
    },
    {
      title: t('devops.title'),
      description: t('devops.description'),
      icon: <Server size={36} className="text-cyan-600" />,
      href: '/services',
    },
    {
      title: t('videoSurveillance.title'),
      description: t('videoSurveillance.description'),
      icon: <Video size={36} className="text-cyan-600" />,
      href: '/services',
    },
    {
      title: t('networking.title'),
      description: t('networking.description'),
      icon: <Network size={36} className="text-cyan-600" />,
      href: '/services',
    },
    {
      title: t('biometrics.title'),
      description: t('biometrics.description'),
      icon: <ScanFace size={36} className="text-cyan-600" />,
      href: '/services',
    },
    {
      title: t('consulting.title'),
      description: t('consulting.description'),
      icon: <ShieldCheck size={36} className="text-cyan-600" />,
      href: '/services',
    },
  ]

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <span className="text-cyan-400 font-semibold uppercase tracking-wider text-sm">
            {t('pageTitle')}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2 text-white">
            {t('pageSubtitle')}
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            {t('pageDescription')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <div
                key={service.title}
                className="group block rounded-2xl border border-gray-200 bg-white p-8 shadow-sm 
                           transition-all duration-300 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-100 hover:-translate-y-2"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="mb-5 transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-5">{service.description}</p>
                <span className="font-semibold text-cyan-600 flex items-center group-hover:underline">
                  {t('learnMore')}
                  <ArrowRight
                    size={18}
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20 md:pb-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white rounded-2xl p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
            {/* Background animations */}
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-cyan-500/10 rounded-full animate-spin-slow" />
            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-blue-500/10 rounded-full animate-spin-slow-reverse" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold">
                {t('ctaTitle')}
              </h2>
              <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
                {t('ctaDescription')}
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-8 rounded-lg text-lg 
                           transition-all hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-105"
              >
                {t('ctaBtn')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
