import type { Metadata } from 'next'

// "Biz haqimizda" sahifasi uchun metadata
export const metadata: Metadata = {
  title: 'Biz haqimizda | Kiwitech Solutions',
  description:
    'Kiwitech Solutions jamoasi, bizning missiyamiz va qadriyatlarimiz haqida bilib oling.',
}

export default function AboutPage() {
  return (
    <main>
      {/* 1-Bo'lim: Sahifa sarlavhasi */}
      <section className="bg-gray-900 py-20 md:py-28 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20px_20px,_rgba(255,255,255,0.05)_1px,_transparent_0)] bg-[length:30px_30px] opacity-70" />
        <div className="container mx-auto max-w-3xl px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold">Biz haqimizda</h1>
          <p className="mt-4 text-lg text-gray-300">
            Biz texnologiyalar yordamida biznesingiz uchun innovatsion yechimlar
            yaratamiz.
          </p>
        </div>
      </section>

      {/* 2-Bo'lim: Asosiy matn */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="prose lg:prose-xl mx-auto text-gray-700 space-y-6">
            <h2>Bizning Missiyamiz</h2>
            <p>
              Bizning asosiy missiyamiz - mijozlarimizning biznesini
              raqamlashtirish orqali ularning muvaffaqiyatiga hissa qo'shish.
              Biz har bir loyihaga individual yondashamiz va eng samarali
              texnologik yechimlarni taklif qilamiz.
            </p>
            <h2>Bizning Jamoa</h2>
            <p>
              Kiwitech Solutions jamoasi - o'z ishining ustasi bo'lgan
              tajribali dasturchilar, dizaynerlar va IT mutaxassislardan
              iborat. Biz doimiy ravishda o'rganamiz va rivojlanamiz, shuning
              uchun ham eng so'nggi texnologiyalarni loyihalarimizda qo'llaymiz.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}