'use client'

import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  User,
} from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function ContactPage() {
  const t = useTranslations('contact')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedService, setSelectedService] = useState<string>('')

  const serviceOptions = [
    { key: 'webDev', label: t('serviceOptions.webDev') },
    { key: 'mobile', label: t('serviceOptions.mobile') },
    { key: 'cctv', label: t('serviceOptions.cctv') },
    { key: 'network', label: t('serviceOptions.network') },
    { key: 'other', label: t('serviceOptions.other') },
  ]

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(event.currentTarget)
    if (selectedService) {
      formData.set('service', selectedService)
    }

    const formAction = event.currentTarget.action

    try {
      const response = await fetch(formAction, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        setError(t('error'))
      }
    } catch (e) {
      setError(t('error'))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="min-h-[90vh] bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20px_20px,_rgba(255,255,255,0.05)_1px,_transparent_0)] bg-[length:30px_30px] opacity-70" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {t('pageTitle')}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t('pageSubtitle')}
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-24">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="w-full min-h-[400px] flex flex-col justify-center">
            {!isSubmitted ? (
              <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-2xl border border-gray-200">
                <form
                  action="https://formspree.io/f/xnnglvyj"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-6 w-full"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    {t('formTitle')}
                  </h2>

                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="full-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {t('fullName')}
                    </label>
                    <div className="relative mt-1">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <User size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="full-name"
                        name="full-name"
                        required
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 py-3 pl-10 px-4 transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {t('email')}
                    </label>
                    <div className="relative mt-1">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Mail size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 py-3 pl-10 px-4 transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {t('phone')}
                    </label>
                    <div className="relative mt-1">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Phone size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 py-3 pl-10 px-4 transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('serviceLabel')}
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {serviceOptions.map((service) => (
                        <button
                          type="button"
                          key={service.key}
                          onClick={() => setSelectedService(service.label)}
                          className={`rounded-lg border px-3 py-2 text-center text-sm font-medium transition-all
                          ${
                            selectedService === service.label
                              ? 'border-cyan-500 bg-cyan-50 text-cyan-700 ring-2 ring-cyan-500'
                              : 'border-gray-300 bg-gray-50 text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {service.label}
                        </button>
                      ))}
                    </div>
                    <input
                      type="hidden"
                      name="service-selection"
                      value={selectedService}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {t('message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 py-3 px-4 transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:bg-white"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-3 text-lg 
                               font-bold text-white shadow-lg shadow-cyan-500/20 transition-all 
                               hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-[1.02]
                               disabled:bg-gray-400 disabled:cursor-not-allowed disabled:shadow-none"
                    >
                      {isSubmitting ? t('submitting') : t('submitBtn')}
                      {!isSubmitting && (
                        <Send
                          size={20}
                          className="ml-2 transition-transform group-hover:translate-x-1"
                        />
                      )}
                    </button>
                  </div>

                  {/* Error Message */}
                  {error && (
                    <p className="text-center text-red-600 text-sm">{error}</p>
                  )}
                </form>
              </div>
            ) : (
              // Success Message
              <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-2xl border border-gray-200 text-center">
                <CheckCircle
                  size={72}
                  className="text-green-500 mx-auto mb-6"
                />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {t('successTitle')}
                </h2>
                <p className="text-lg text-gray-600 max-w-md mx-auto mb-8">
                  {t('successMessage')}
                </p>
                <Link
                  href="/"
                  className="inline-block bg-gradient-to-r from-gray-800 to-gray-900 text-white font-bold py-3 px-8 rounded-lg hover:shadow-lg transition-all hover:scale-105"
                >
                  {t('backHome')}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Direct Contact Section */}
      <div className="py-16 md:py-20 bg-white">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {t('directContactTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Email */}
            <a
              href="mailto:support@kiwitech.uz"
              className="group flex flex-col items-center p-6 rounded-2xl transition-all hover:bg-gray-50"
            >
              <div className="flex-shrink-0 rounded-full bg-gradient-to-br from-cyan-100 to-cyan-200 p-4 mb-3 transition-all group-hover:scale-110 shadow-md">
                <Mail size={24} className="text-cyan-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{t('emailLabel')}</h3>
              <span className="text-lg text-gray-600 transition-colors group-hover:text-cyan-600 group-hover:underline">
                support@kiwitech.uz
              </span>
            </a>

            {/* Phone */}
            <a
              href="tel:+998908685010"
              className="group flex flex-col items-center p-6 rounded-2xl transition-all hover:bg-gray-50"
            >
              <div className="flex-shrink-0 rounded-full bg-gradient-to-br from-cyan-100 to-cyan-200 p-4 mb-3 transition-all group-hover:scale-110 shadow-md">
                <Phone size={24} className="text-cyan-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{t('phoneLabel')}</h3>
              <span className="text-lg text-gray-600 transition-colors group-hover:text-cyan-600 group-hover:underline">
                +998 (90) 868-50-10
              </span>
            </a>

            {/* Address */}
            <div className="group flex flex-col items-center p-6 rounded-2xl transition-all hover:bg-gray-50">
              <div className="flex-shrink-0 rounded-full bg-gradient-to-br from-cyan-100 to-cyan-200 p-4 mb-3 transition-all group-hover:scale-110 shadow-md">
                <MapPin size={24} className="text-cyan-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{t('addressLabel')}</h3>
              <p className="text-lg text-gray-600">
                {t('addressText')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
