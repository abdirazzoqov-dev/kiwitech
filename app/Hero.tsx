'use client'

import Link from 'next/link'
import { Code, Smartphone, Server, Camera, Network } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function Hero() {
  const t = useTranslations('hero')
  return (
    <section className="w-full h-auto md:h-[90vh] min-h-[700px] flex items-center bg-gradient-to-br from-white via-gray-50 to-cyan-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(6,182,212,0.08)_1px,_transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,_rgba(6,182,212,0.05)_1px,_transparent_0)] bg-[length:24px_24px] opacity-70" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />

      <div className="container mx-auto max-w-7xl px-4 h-full flex flex-col md:flex-row items-center pt-24 md:pt-0">
        {/* Chap Tomon: Matn Mazmuni */}
        <div className="md:w-1/2 w-full text-center md:text-left relative z-10">
          <h1
            className="text-4xl sm:text-5xl lg:text-3xl font-extrabold text-gray-900 dark:text-white leading-tight"
            style={{ animation: 'fadeInUp 0.5s ease-out 0.2s both' }}
          >
            {t('title1')}{' '}
            <span className="text-cyan-600 dark:text-cyan-400">{t('title1Highlight')}</span>
          </h1>
          <br />
          <h1
            className="text-4xl sm:text-5xl lg:text-3xl font-extrabold text-gray-900 dark:text-white leading-tight"
            style={{ animation: 'fadeInUp 0.5s ease-out 0.2s both' }}
          >
            {t('title2')} <span className="text-cyan-600 dark:text-cyan-400">{t('title2Highlight')}</span>
          </h1>
          <br />
          <hr className="text-cyan-600 dark:text-cyan-400 py-4" />
          <h1
            className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight"
            style={{ animation: 'fadeInUp 0.5s ease-out 0.2s both' }}
          >
            {t('title3')}{' '}
            <span className="text-cyan-600 dark:text-cyan-400">
              {' '}
              <br /> {t('title3Highlight')}
            </span>
          </h1>
          <p
            className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl mx-auto md:mx-0"
            style={{ animation: 'fadeInUp 0.5s ease-out 0.4s both' }}
          >
            {t('description')}
          </p>
          <div
            className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4"
            style={{ animation: 'fadeInUp 0.5s ease-out 0.6s both' }}
          >
            <Link
              href="/services"
              className="group relative bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-size-200 bg-pos-0 
                         text-white font-bold py-4 px-10 rounded-xl text-lg 
                         transition-all duration-500 ease-out
                         hover:bg-pos-100 hover:shadow-2xl hover:shadow-cyan-500/50 
                         hover:scale-105 hover:-translate-y-1
                         before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-cyan-400 before:to-blue-400 
                         before:opacity-0 hover:before:opacity-20 before:blur-xl before:transition-opacity before:duration-500"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t('servicesBtn')}
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link
              href="/contact"
              className="group relative bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-bold py-4 px-10 rounded-xl text-lg 
                         border-2 border-gray-200 dark:border-gray-700
                         transition-all duration-300 ease-out 
                         hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 dark:hover:from-gray-700 dark:hover:to-gray-800
                         hover:border-cyan-500 hover:scale-105 hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t('contactBtn')}
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* O'ng Tomon: "Orbita" Vizuali */}
        <div className="md:w-1/2 w-full h-96 md:h-full relative mt-16 md:mt-0 flex items-center justify-center">
          <div className="w-full h-full max-w-md md:max-w-none relative flex items-center justify-center">
            <div
              className="absolute w-72 h-72 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDuration: '6s' }}
            />
            <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 opacity-90 drop-shadow-xl bg-cyan-500/20 rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-cyan-800">Kiwitech</span>
            </div>
            <div
              className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 
                           border-2 border-dashed border-cyan-400/50 rounded-full
                           animate-spin-slow"
              style={{ animationDuration: '30s' }}
            >
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 bg-white/70 backdrop-blur-sm rounded-full shadow-lg 
                               animate-spin-slow-reverse transition-transform hover:scale-110"
                style={{
                  animation:
                    'fadeInUp 0.5s ease-out 1s both, spin-slow-reverse 30s linear infinite',
                }}
              >
                <Code size={24} className="text-cyan-700" />
              </div>
              <div
                className="absolute bottom-10 right-10 translate-x-1/2 translate-y-1/2 p-3 bg-white/70 backdrop-blur-sm rounded-full shadow-lg
                               animate-spin-slow-reverse transition-transform hover:scale-110"
                style={{
                  animation:
                    'fadeInUp 0.5s ease-out 1.2s both, spin-slow-reverse 30s linear infinite',
                }}
              >
                <Smartphone size={24} className="text-cyan-700" />
              </div>
              <div
                className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 p-3 bg-white/70 backdrop-blur-sm rounded-full shadow-lg
                               animate-spin-slow-reverse transition-transform hover:scale-110"
                style={{
                  animation:
                    'fadeInUp 0.5s ease-out 1.4s both, spin-slow-reverse 30s linear infinite',
                }}
              >
                <Server size={24} className="text-cyan-700" />
              </div>
              <div
                className="absolute top-10 left-10 -translate-x-1/2 -translate-y-1/2 p-3 bg-white/70 backdrop-blur-sm rounded-full shadow-lg
                               animate-spin-slow-reverse transition-transform hover:scale-110"
                style={{
                  animation:
                    'fadeInUp 0.5s ease-out 1.6s both, spin-slow-reverse 30s linear infinite',
                }}
              >
                <Camera size={24} className="text-cyan-700" />
              </div>
              <div
                className="absolute bottom-10 left-10 -translate-x-1/2 translate-y-1/2 p-3 bg-white/70 backdrop-blur-sm rounded-full shadow-lg
                               animate-spin-slow-reverse transition-transform hover:scale-110"
                style={{
                  animation:
                    'fadeInUp 0.5s ease-out 1.8s both, spin-slow-reverse 30s linear infinite',
                }}
              >
                <Network size={24} className="text-cyan-700" />
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
  )
}