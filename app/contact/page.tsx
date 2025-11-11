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

// Xizmat turlari ro'yxati
const serviceOptions = [
  'Veb-dasturlash',
  'Mobil Ilovalar',
  'Videokuzatuv',
  'Tarmoq',
  'Boshqa',
]

// 2. SAHIFA KOMPONENTI (YANGI DIZAYN)
export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedService, setSelectedService] = useState<string>('')

  // 4. FORMANI YUBORISH FUNKSIYASI
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(event.currentTarget)

    // Yangi interaktiv tanlovdan qiymatni qo'shish
    if (selectedService) {
      formData.set('service', selectedService)
    }

    const formAction = event.currentTarget.action // Formspree URL'ni olamiz

    try {
      const response = await fetch(formAction, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setIsSubmitted(true) // Muvaffaqiyatli!
      } else {
        setError(
          "Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring yoki biz bilan to'g'ridan-to'g'ri bog'laning."
        )
      }
    } catch (e) {
      setError(
        'Server bilan bogʻlanishda xatolik. Internet aloqangizni tekshiring.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    // <main> tegi <template.tsx> faylida bo'lgani uchun bu yerda <section> ishlatamiz
    // Yangi "Vertikal Qatlamli" dizayn (FORMA YUQORIDA)
    <section className="min-h-[90vh] bg-white">
      
      {/* <head>...</head> bloki bu yerdan olib tashlandi. 
        Bu xatolikka sabab bo'layotgan edi.
        SEO ma'lumotlari app/layout.tsx fayli orqali boshqariladi.
      */}

      {/* 1-QISM: SARLAVHA */}
      <div className="bg-gray-900 py-20 md:py-24 text-center relative overflow-hidden">
        {/* Orqa fon dekorativ nuqtalari */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20px_20px,_rgba(255,255,255,0.05)_1px,_transparent_0)] bg-[length:30px_30px] opacity-70" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Biz bilan bog'laning
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            G'oyangiz bormi yoki shunchaki savolingiz bor-mi? Biz har doim yordam
            berishga tayyormiz.
          </p>
        </div>
      </div>

      {/* 2-QISM: FORMA / MUVAFFAQIYAT XABARI (YUQORIGA KO'CHIRILDI) */}
      <div className="bg-gray-50 py-20 md:py-24">
        <div className="container mx-auto max-w-3xl px-4">
          {/* Bu yerda forma va success logikasi */}
          <div className="w-full min-h-[400px] flex flex-col justify-center">
            {!isSubmitted ? (
              // Agar forma yuborilmagan bo'lsa, formani ko'rsat
              <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl shadow-gray-200/70">
                <form
                  action="https://formspree.io/f/xnnglvyj" // <-- SIZNING FORMSPREE ID'INGIZ
                  method="POST"
                  onSubmit={handleSubmit} // <-- JAVASCRIPT ORQALI YUBORISH
                  className="space-y-6 w-full"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Loyiha so'rovini yuborish
                  </h2>

                  {/* Ism (Ikonka bilan) */}
                  <div>
                    <label
                      htmlFor="full-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      To'liq ism
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
                        className="block w-full rounded-lg border-gray-200 bg-gray-50 py-3 pl-10 px-4 transition-all focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Email (Ikonka bilan) */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
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
                        className="block w-full rounded-lg border-gray-200 bg-gray-50 py-3 pl-10 px-4 transition-all focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Telefon Raqam (Ikonka bilan) */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Telefon Raqam (Ixtiyoriy)
                    </label>
                    <div className="relative mt-1">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Phone size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="block w-full rounded-lg border-gray-200 bg-gray-50 py-3 pl-10 px-4 transition-all focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Xizmat turi (Yangi Interaktiv Kartalar) */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Sizni nima qiziqtiradi?
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {serviceOptions.map((service) => (
                        <button
                          type="button" // Formani yubormaslik uchun
                          key={service}
                          onClick={() => setSelectedService(service)}
                          className={`rounded-lg border px-3 py-2 text-center text-sm font-medium transition-all
                          ${
                            selectedService === service
                              ? 'border-cyan-500 bg-cyan-50 text-cyan-700 ring-1 ring-cyan-500'
                              : 'border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                    {/* Formspree uchun yashirin input */}
                    <input
                      type="hidden"
                      name="service-selection"
                      value={selectedService}
                    />
                  </div>

                  {/* Xabar */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Loyiha haqida qisqacha
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="mt-1 block w-full rounded-lg border-gray-200 bg-gray-50 py-3 px-4 transition-all focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:bg-white"
                    />
                  </div>

                  {/* Yuborish tugmasi */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting} // Yuborilayotganda tugmani o'chirish
                      className="group flex w-full items-center justify-center rounded-lg bg-cyan-600 px-8 py-3 text-lg 
                               font-bold text-white shadow-lg shadow-cyan-500/20 transition-all 
                               hover:bg-cyan-700 hover:scale-[1.02] hover:shadow-cyan-500/40
                               disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Yuborilmoqda...' : "So'rovni Yuborish"}
                      {!isSubmitting && (
                        <Send
                          size={20}
                          className="ml-2 transition-transform group-hover:translate-x-1"
                        />
                      )}
                    </button>
                  </div>

                  {/* Xatolik xabari */}
                  {error && (
                    <p className="text-center text-red-600">{error}</p>
                  )}
                </form>
              </div>
            ) : (
              // AGAR FORMA YUBORILGAN BO'LSA, BUNI KO'RSAT
              <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl shadow-gray-200/70 text-center">
                <CheckCircle
                  size={72}
                  className="text-green-500 mx-auto mb-6"
                />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  So'rovingiz yuborildi!
                </h2>
                <p className="text-lg text-gray-600 max-w-md mx-auto mb-8">
                  Rahmat! Biz sizning xabaringizni qabul qildik. Jamoamiz
                  imkon qadar tezroq siz bilan bog'lanadi.
                </p>
                <Link
                  href="/"
                  className="inline-block bg-gray-800 text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-700 transition-all hover:scale-105"
                >
                  Bosh sahifaga qaytish
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 3-QISM: ALOQA MA'LUMOTLARI (PASTGA KO'CHIRILDI) */}
      <div className="py-16 md:py-20 bg-white">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            To'g'ridan-to'g'ri Aloqa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Email */}
            <a
              href="mailto:info@kiwitech.uz"
              className="group flex flex-col items-center p-6 rounded-2xl transition-all hover:bg-gray-50"
            >
              <div className="flex-shrink-0 rounded-full bg-cyan-100 p-4 mb-3 transition-all group-hover:scale-110">
                <Mail size={24} className="text-cyan-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Email</h3>
              <span className="text-lg text-gray-600 transition-colors group-hover:text-cyan-600 group-hover:underline">
                info@kiwitech.uz
              </span>
            </a>

            {/* Telefon */}
            <a
              href="tel:+998908685010"
              className="group flex flex-col items-center p-6 rounded-2xl transition-all hover:bg-gray-50"
            >
              <div className="flex-shrink-0 rounded-full bg-cyan-100 p-4 mb-3 transition-all group-hover:scale-110">
                <Phone size={24} className="text-cyan-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Telefon</h3>
              <span className="text-lg text-gray-600 transition-colors group-hover:text-cyan-600 group-hover:underline">
                +998 (90) 868-50-10
              </span>
            </a>

            {/* Manzil */}
            <div className="group flex flex-col items-center p-6 rounded-2xl transition-all hover:bg-gray-50">
              <div className="flex-shrink-0 rounded-full bg-cyan-100 p-4 mb-3 transition-all group-hover:scale-110">
                <MapPin size={24} className="text-cyan-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Manzil</h3>
              <p className="text-lg text-gray-600">
                Qashqadaryo viloyati, Qarshi shahar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}