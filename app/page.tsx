import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Code,
  Smartphone,
  Server,
  ArrowRight,
  TrendingUp,
  Camera,
  Network,
  Layers,
  ShieldCheck,
  Star,
  Clock,
  LifeBuoy,
  TerminalSquare,
  // ===== Yaxshilangan "Ish Jarayoni" bo'limi uchun yangi ikonlar =====
  ClipboardList, // Tahlil uchun
  Palette,       // Dizayn uchun
  Rocket,        // Ishga tushirish uchun
} from 'lucide-react'

// Bosh sahifa uchun xizmatlar ro'yxati (o'zgarishsiz)
const homeServices = [
  {
    title: 'Veb-dasturlash',
    description:
      'Next.js va Tailwind yordamida har qanday qurilmaga moslashuvchan, zamonaviy veb-saytlar.',
    icon: <Code size={32} className="text-cyan-600" />,
    href: '/services/web-development',
  },
  {
    title: 'Mobil Ilovalar',
    description:
      'React Native asosida iOS va Android uchun tez ishlovchi, samarali mobil dasturlar.',
    icon: <Smartphone size={32} className="text-cyan-600" />,
    href: '/services/mobile-apps',
  },
  {
    title: 'Videokuzatuv',
    description:
      "IP kameralar va aqlli tahlil yordamida ob'ektingiz xavfsizligini real vaqtda ta'minlash.",
    icon: <Camera size={32} className="text-cyan-600" />,
    href: '/services/cctv',
  },
]

// 2. BOSH SAHIFA KOMPONENTI
export default function HomePage() {
  return (
    <main className="min-h-screen flex-col items-center bg-white text-gray-900">
      
      {/* ===== 1-BO'LIM: "HERO" (O'ZGARISHSIZ) ===== */}
      <section className="w-full h-auto md:h-[90vh] min-h-[700px] flex items-center bg-white relative overflow-hidden">
        {/* Orqa fon grid chiziqlari */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.03)_1px,_transparent_0)] bg-[length:20px_20px] opacity-70" />

        <div className="container mx-auto max-w-7xl px-4 h-full flex flex-col md:flex-row items-center pt-24 md:pt-0">
          
          {/* Chap Tomon: Matn Mazmuni */}
          <div className="md:w-1/2 w-full text-center md:text-left relative z-10">
            <h1
              className="text-4xl sm:text-5xl lg:text-3xl font-extrabold text-gray-900 leading-tight"
              style={{ animation: 'fadeInUp 0.5s ease-out 0.2s both' }}
            >
              Biznesingizni <span className="text-cyan-600">- Avtomatlashtiring</span>
            </h1>
            <br />
            <h1
              className="text-4xl sm:text-5xl lg:text-3xl font-extrabold text-gray-900 leading-tight"
              style={{ animation: 'fadeInUp 0.5s ease-out 0.2s both' }}
            >
              Xarajatlarni <span className="text-cyan-600"> - Kamaytiring</span>
            </h1>
            <br />
            <hr className="text-cyan-600 py-4" />
            <h1
              className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-gray-900 leading-tight"
              style={{ animation: 'fadeInUp 0.5s ease-out 0.2s both' }}
            >
              IT muammolarni{' '}
              <span className="text-cyan-600">
                {' '}
                <br /> Bizga qo'yib bering
              </span>
            </h1>
            <p
              className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-xl mx-auto md:mx-0"
              style={{ animation: 'fadeInUp 0.5s ease-out 0.4s both' }}
            >
              Kiwitech Solutions'da biz sizning biznes g'oyalaringizni veb-saytlardan
              tortib murakkab tarmoq yechimlarigacha bo'lgan yuqori sifatli,
              ishonchli va kengaytiriladigan tizimlarga aylantiramiz.
            </p>
            <div
              className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4"
              style={{ animation: 'fadeInUp 0.5s ease-out 0.6s both' }}
            >
              <Link
                href="/services"
                className="bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg text-lg 
                             transition-all duration-300 ease-in-out
                             hover:bg-cyan-700 hover:scale-105 hover:-translate-y-1
                             shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/50"
              >
                Xizmatlarimiz
              </Link>
              <Link
                href="/contact"
                className="bg-white text-gray-800 font-bold py-3 px-8 rounded-lg text-lg border border-gray-300
                             transition-all duration-300 ease-in-out 
                             hover:bg-gray-100 hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
              >
                Bog'lanish
              </Link>
            </div>
          </div>

          {/* O'ng Tomon: "Orbita" Vizuali (O'ZGARISHSIZ) */}
          <div className="md:w-1/2 w-full h-96 md:h-full relative mt-16 md:mt-0 flex items-center justify-center">
            <div className="w-full h-full max-w-md md:max-w-none relative flex items-center justify-center">
              {/* Markaziy "Glow" effekti */}
              <div
                className="absolute w-72 h-72 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
                style={{ animationDuration: '6s' }}
              />

              {/* Markaziy Kiwi Ikonkasi */}
              <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 opacity-90 drop-shadow-xl bg-cyan-500/20 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-cyan-800">
                  Kiwitech
                </span>
              </div>

              {/* Aylanuvchi Orbita */}
              <div
                className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 
                             border-2 border-dashed border-cyan-400/50 rounded-full
                             animate-spin-slow"
                style={{ animationDuration: '30s' }}
              >
                {/* Ikonka 1: Code */}
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

                {/* Ikonka 2: Smartphone */}
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

                {/* Ikonka 3: Server */}
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

                {/* Ikonka 4: Camera */}
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

                {/* Ikonka 5: Network */}
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

      {/* ===== 2-BO'LIM: XIZMATLAR (O'ZGARISHSIZ) ===== */}
      <section className="w-full py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Asosiy Xizmatlarimiz
          </h2>
          <p className="text-center text-base sm:text-lg text-gray-600 mb-12 max-w-xl mx-auto">
            Biznesingizning har bir talabiga javob beradigan keng qamrovli
            xizmatlar to'plami.
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
                  Batafsil
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
              className="bg-gray-800 text-white font-bold py-3 px-8 rounded-lg
                             transition-all duration-300 ease-in-out 
                             hover:bg-gray-700 hover:scale-105 hover:-translate-y-1"
            >
              Barcha Xizmatlarni Ko'rish
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 3-BO'LIM: NIMA UCHUN BIZ? (O'ZGARISHSIZ) ===== */}
      <section className="w-full bg-white py-20 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Sarlavha qismi */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Nima uchun aynan Kiwitech Solutions 
            </h2>
            <p className="text-lg text-gray-600">
              Bizning xizmatlarimizni boshqalardan nima farq qiladi? Nima uchun
              50+ dan ortiq muvaffaqiyatli kompaniyalar aynan bizga ishonishadi?
            </p>
          </div>

          {/* Asosiy xususiyatlar (4 ta ustun) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Kafolatlangan Sifat */}
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg text-left transition-all hover:bg-gray-100 hover:shadow-lg hover:-translate-y-1">
              <div className="rounded-full bg-cyan-100 p-3 mb-4 inline-block">
                <Star size={28} className="text-cyan-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Kafolatlangan Sifat
              </h3>
              <p className="text-gray-600">
                Biz shunchaki kod yozmaymiz, biz xalqaro standartlarga javob
                beradigan barqaror va ishonchli yechimlar yaratamiz.
              </p>
            </div>

            {/* 2. Optimallashtirilgan Jarayon (AJRATILGAN) */}
            <div className="bg-white p-6 rounded-lg text-left transition-all hover:shadow-lg hover:-translate-y-1 border-2 border-cyan-500/50 ring-2 ring-cyan-500/20">
              <div className="rounded-full bg-cyan-100 p-3 mb-4 inline-block">
                <Clock size={28} className="text-cyan-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Optimallashtirilgan Jarayon
              </h3>
              <p className="text-gray-600">
                Aniqlashtirilgan ish bosqichlari tufayli loyihalarni
                belgilangan muddatda va byudjet doirasida topshiramiz.
              </p>
            </div>

            {/* 3. Birinchi darajali Xavfsizlik */}
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg text-left transition-all hover:bg-gray-100 hover:shadow-lg hover:-translate-y-1">
              <div className="rounded-full bg-cyan-100 p-3 mb-4 inline-block">
                <ShieldCheck size={28} className="text-cyan-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Birinchi darajali Xavfsizlik
              </h3>
              <p className="text-gray-600">
                Ma'lumotlaringiz va foydalanuvchilaringiz himoyasi — bizning
                ustuvor vazifamiz. Har bir yechimda kiberxavfsizlikni
                ta'minlaymiz.
              </p>
            </div>

            {/* 4. Ishonchli Hamkorlik */}
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg text-left transition-all hover:bg-gray-100 hover:shadow-lg hover:-translate-y-1">
              <div className="rounded-full bg-cyan-100 p-3 mb-4 inline-block">
                <LifeBuoy size={28} className="text-cyan-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Ishonchli Hamkorlik
              </h3>
              <p className="text-gray-600">
                Loyiha topshirilishi — bu shunchaki boshlanishi. Biz biznesingiz
                rivojlanishi bilan birga doimiy texnik yordam va maslahat
                beramiz.
              </p>
            </div>
          </div>

          {/* Qo'shimcha afzalliklar (3 ta ustun) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            
            {/* 5. Ilg'or Texnologiyalar */}
            <div className="bg-gray-50 border border-gray-200 p-5 rounded-lg flex items-center gap-4 transition-all hover:bg-gray-100 hover:shadow-md">
              <div className="rounded-full bg-cyan-100 p-3 flex-shrink-0">
                <TerminalSquare size={24} className="text-cyan-700" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Ilg'or Texnologiyalar
                </h3>
                <p className="text-gray-600 text-sm">
                  Raqobatchilardan oldinda bo'lishingiz uchun eng so'nggi
                  texnologiyalardan foydalanamiz.
                </p>
              </div>
            </div>

            {/* 6. Masshtablanuvchi Arxitektura */}
            <div className="bg-gray-50 border border-gray-200 p-5 rounded-lg flex items-center gap-4 transition-all hover:bg-gray-100 hover:shadow-md">
              <div className="rounded-full bg-cyan-100 p-3 flex-shrink-0">
                <Layers size={24} className="text-cyan-700" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Masshtablanuvchi Arxitektura
                </h3>
                <p className="text-gray-600 text-sm">
                  Yechimlarimiz biznesingiz o'sishi bilan birga kengayishga
                  tayyor.
                </p>
              </div>
            </div>

            {/* 7. Biznes-maqsadlarga E'tibor */}
            <div className="bg-gray-50 border border-gray-200 p-5 rounded-lg flex items-center gap-4 transition-all hover:bg-gray-100 hover:shadow-md">
              <div className="rounded-full bg-cyan-100 p-3 flex-shrink-0">
                <TrendingUp size={24} className="text-cyan-700" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Biznes-maqsadlarga E'tibor
                </h3>
                <p className="text-gray-600 text-sm">
                  Bizning maqsadimiz — biznesingiz muammolarini hal qilish va
                  sotuvlarni oshirish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4-BO'LIM: ISH JARAYONIMIZ (YANGI IKONKALI VARIANT) ===== */}
      <section className="w-full py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto max-w-5xl px-4">
          {/* Sarlavha qismi */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Loyiha Qanday Amalga Oshiriladi?
            </h2>
            <p className="text-lg text-gray-600">
              Bizning 4 bosqichli sinovdan o'tgan yondashuvimiz g'oyadan
              haqiqatgacha bo'lgan yo'lni aniq ko'rsatadi.
            </p>
          </div>

          {/* Gorizontal Timeline (IKONKALAR BILAN) */}
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-y-0 md:gap-x-8">
            
            {/* Ulovchi chiziq */}
            <div className="absolute hidden md:block top-6 left-0 w-full h-1 bg-cyan-400 -translate-y-1/2" />

            {/* 1-Bosqich: Tahlil */}
            <div className="relative text-center">
              {/* IKONKA doirasi (raqam o'rniga) */}
              <div className="relative z-10 w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-white mx-auto ring-8 ring-gray-50">
                <ClipboardList size={24} />
              </div>
              {/* Matn */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Tahlil va Strategiya
                </h3>
                <p className="text-gray-600 text-sm">
                  Biznesingizni o'rganamiz, maqsadlaringizni tahlil qilamiz va
                  muvaffaqiyat uchun aniq strategiya ishlab chiqamiz.
                </p>
              </div>
            </div>

            {/* 2-Bosqich: Dizayn */}
            <div className="relative text-center">
              {/* IKONKA doirasi (raqam o'rniga) */}
              <div className="relative z-10 w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-white mx-auto ring-8 ring-gray-50">
                <Palette size={24} />
              </div>
              {/* Matn */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  UI/UX Dizayn va Prototip
                </h3>
                <p className="text-gray-600 text-sm">
                  Foydalanuvchilar uchun qulay va zamonaviy dizayn yaratamiz
                  va interaktiv prototipni siz bilan kelishamiz.
                </p>
              </div>
            </div>

            {/* 3-Bosqich: Dasturlash */}
            <div className="relative text-center">
              {/* IKONKA doirasi (raqam o'rniga) */}
              <div className="relative z-10 w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-white mx-auto ring-8 ring-gray-50">
                <Code size={24} />
              </div>
              {/* Matn */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Dasturlash va Sinov
                </h3>
                <p className="text-gray-600 text-sm">
                  Dizaynni toza va samarali kodga aylantiramiz va tizimning
                  mukammal ishlashini sinovdan o'tkazamiz.
                </p>
              </div>
            </div>

            {/* 4-Bosqich: Ishga Tushirish */}
            <div className="relative text-center">
              {/* IKONKA doirasi (raqam o'rniga) */}
              <div className="relative z-10 w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-white mx-auto ring-8 ring-gray-50">
                <Rocket size={24} />
              </div>
              {/* Matn */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Ishga Tushirish va Qo'llab-quvvatlash
                </h3>
                <p className="text-gray-600 text-sm">
                  Loyihangizni serverga joylashtiramiz va barqaror ishlashni
                  ta'minlash uchun texnik yordam ko'rsatamiz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 5-BO'LIM: CALL TO ACTION (O'ZGARISHSIZ) ===== */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="bg-gray-900 text-white rounded-2xl p-12 md:p-16 text-center relative overflow-hidden">
            {/* Orqa fon animatsiyasi */}
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-cyan-500/10 rounded-full animate-spin-slow" />
            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-cyan-500/10 rounded-full animate-spin-slow-reverse" />

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Loyihangizni boshlashga tayyormisiz?
              </h2>
              <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-xl mx-auto">
                Biz sizning g'oyangizni eshitishni va uni haqiqatga
                aylantirishda qanday yordam berishimizni muhokama qilishni
                xohlaymiz.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-block bg-cyan-500 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg 
                             transition-all duration-300 ease-in-out
                             hover:bg-cyan-400 hover:scale-105 hover:-translate-y-1"
              >
                Biz bilan bog'lanish
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}