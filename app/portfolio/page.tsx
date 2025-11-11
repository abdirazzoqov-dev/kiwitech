import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Globe } from 'lucide-react'
import Image from 'next/image' // Next.js rasm optimizatsiyasi

// 1. METADATA (SEO UCHUN)
export const metadata: Metadata = {
  title: 'Portfolio | Kiwitech Solutions',
  description:
    "Biz bajargan ishlar: veb-saytlar, mobil ilovalar va maxsus IT loyihalar to'plami. Kiwitech tajribasini ko'ring.",
}

// Portfolio ishlari ro'yxati (o'zingizniki bilan almashtiring)
// Rasmlar uchun https://placehold.co dan foydalandim.
const portfolioItems = [
  {
    title: 'TEZ KUNLARDA LOYIHALARNI YUKLAYMIZ',
    category: 'Kiwitech Solutions',
    description:
      "",
    imageUrl: '/come.png',
    liveUrl: '#', // <-- Bu yerga haqiqiy manzil qo'ying
  },
]

// 2. SAHIFA KOMPONENTI
export default function PortfolioPage() {
  return (
    // <main> tegi <template.tsx> faylida bo'lgani uchun bu yerda <> ishlatamiz
    <>
      {/* 1-BO'LIM: SAHIFA SARLAVHASI */}
      <section className="bg-gray-900 py-20 md:py-28 text-white relative overflow-hidden">
        {/* Orqa fon dekorativ nuqtalari */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20px_20px,_rgba(255,255,255,0.05)_1px,_transparent_0)] bg-[length:30px_30px] opacity-70" />
        <div className="container mx-auto max-w-6xl px-4 text-center relative z-10">
          <span className="text-cyan-400 font-semibold uppercase tracking-wider">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">
            Bizning Bajargan Ishlarimiz
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Biz g'oyalarni muvaffaqiyatli loyihalarga aylantiramiz. Tajribamiz
            va yechimlarimiz bilan tanishing.
          </p>
        </div>
      </section>

      {/* 2-BO'LIM: PORTFOLIO ISHLARI (YANGI "ALTERNATING" DIZAYN) */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          
          {/* Loyihalar ro'yxati uchun vertikal bo'shliq */}
          <div className="space-y-20 md:space-y-24">
            {portfolioItems.map((item, index) => (
              <div
                key={item.title}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.15}s both`,
                }}
              >
                
                {/* Rasm qismi (Juft/Toq indeksga qarab o'rin almashadi) */}
                <div
                  className={`rounded-2xl border border-gray-200 shadow-xl shadow-gray-200/60 overflow-hidden 
                    ${index % 2 !== 0 ? 'md:order-2' : ''} 
                    group`}
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Matn qismi (Juft/Toq indeksga qarab o'rin almashadi) */}
                <div className={`${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                  <span className="text-sm font-semibold text-cyan-600 uppercase">
                    {item.category}
                  </span>
                  <h3 className="text-3xl font-bold text-gray-900 mt-3 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {item.description}
                  </p>

                  {/* Agar "Live" manzil bo'lsa, tugmani ko'rsatish */}
                  {item.liveUrl ? (
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-6 py-3 text-lg 
                                 font-bold text-white shadow-lg shadow-cyan-500/20 transition-all 
                                 hover:bg-cyan-700 hover:scale-[1.02] hover:shadow-cyan-500/40"
                    >
                      <Globe size={20} />
                      Loyihani ko'rish
                    </a>
                  ) : (
                    <span className="font-medium text-gray-400 italic">
                      Loyiha yopiq
                    </span>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-BO'LIM: CALL TO ACTION (HARAKATGA CHAQIRUV) */}
      <section className="py-20 md:py-24 bg-gray-50"> {/* Foni o'zgartirildi */}
        <div className="container mx-auto max-w-5xl px-4">
          <div
            className="bg-gray-900 text-white rounded-2xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            {/* Orqa fon animatsiyasi */}
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-cyan-500/10 rounded-full animate-spin-slow" />
            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-cyan-500/10 rounded-full animate-spin-slow-reverse" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold">
                Sizning g'oyangiz keyingisi bo'lishi mumkin
              </h2>
              <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
                Biz bilan bog'laning va keling, sizning noyob loyihangizni
                birgalikda hayotga tatbiq etamiz.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-block bg-cyan-500 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg 
                           transition-all hover:bg-cyan-400 hover:scale-105"
              >
                Loyiha muhokamasi
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}