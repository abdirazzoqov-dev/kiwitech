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
    <section className="w-full bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.03)_0%,_transparent_70%)] dark:bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.05)_0%,_transparent_70%)]" />
      
      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-cyan-600 dark:text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4 px-4 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/30">
            Bizning Ustunliklarimiz
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white bg-clip-text">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-8 rounded-2xl text-left 
                          transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 dark:hover:shadow-cyan-500/20 
                          hover:-translate-y-2 hover:border-cyan-400 dark:hover:border-cyan-500
                          relative overflow-hidden
                          before:absolute before:inset-0 before:bg-gradient-to-br before:from-cyan-500/0 before:to-blue-500/0 
                          hover:before:from-cyan-500/5 hover:before:to-blue-500/5 before:transition-all before:duration-500">
            <div className="relative z-10">
              <div className="rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 p-4 mb-6 inline-block 
                              transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-cyan-500/50">
                <Star size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                {t('quality.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('quality.description')}
              </p>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 
                          border-2 border-cyan-500 dark:border-cyan-600 p-8 rounded-2xl text-left 
                          transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/30 dark:hover:shadow-cyan-500/40 
                          hover:-translate-y-2 hover:scale-105
                          relative overflow-hidden">
            <div className="relative z-10">
              <div className="rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 p-4 mb-6 inline-block 
                              transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-cyan-500/50 animate-glow">
                <Clock size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                {t('process.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('process.description')}
              </p>
            </div>
          </div>

          <div className="group bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-8 rounded-2xl text-left 
                          transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 dark:hover:shadow-cyan-500/20 
                          hover:-translate-y-2 hover:border-cyan-400 dark:hover:border-cyan-500
                          relative overflow-hidden
                          before:absolute before:inset-0 before:bg-gradient-to-br before:from-cyan-500/0 before:to-blue-500/0 
                          hover:before:from-cyan-500/5 hover:before:to-blue-500/5 before:transition-all before:duration-500">
            <div className="relative z-10">
              <div className="rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 p-4 mb-6 inline-block 
                              transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-cyan-500/50">
                <ShieldCheck size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                {t('security.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('security.description')}
              </p>
            </div>
          </div>

          <div className="group bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-8 rounded-2xl text-left 
                          transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 dark:hover:shadow-cyan-500/20 
                          hover:-translate-y-2 hover:border-cyan-400 dark:hover:border-cyan-500
                          relative overflow-hidden
                          before:absolute before:inset-0 before:bg-gradient-to-br before:from-cyan-500/0 before:to-blue-500/0 
                          hover:before:from-cyan-500/5 hover:before:to-blue-500/5 before:transition-all before:duration-500">
            <div className="relative z-10">
              <div className="rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 p-4 mb-6 inline-block 
                              transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-cyan-500/50">
                <LifeBuoy size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                {t('support.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('support.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}