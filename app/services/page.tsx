import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Code,
  Smartphone,
  Layers,
  Server,
  ShieldCheck,
  ArrowRight,
  Video,
  ScanFace,
  Network,
  Clapperboard, // Buni import ro'yxatida qoldirdim, garchi ishlatilmagan bo'lsa ham
} from 'lucide-react'

// 1. METADATA (SEO UCHUN)
export const metadata: Metadata = {
  title: 'IT Xizmatlari | Kiwitech Solutions',
  description:
    'Biz biznesingiz uchun veb-saytlar, mobil ilovalar, tarmoq xizmatlari, videokuzatuv va IT konsalting yechimlarini taklif etamiz.',
}

// Biz taklif qiladigan xizmatlar ro'yxati (BIZNES UCHUN TUSHUNARLI QILIB YANGILANDI)
const servicesList = [
  {
    title: 'Maxsus Veb-saytlar',
    description:
      "Sizning biznesingiz uchun mijozlarni jalb qiladigan, har qanday qurilmada (telefon, kompyuter) chiroyli ko'rinadigan tezkor veb-saytlar yaratamiz.",
    icon: <Code size={36} className="text-cyan-600" />,
    href: '/services/web-development',
  },
  {
    title: 'Mobil Ilovalar',
    description:
      "Mijozlaringiz telefonida yashaydigan, ham iPhone, ham Android uchun ishlaydigan qulay va samarali mobil ilovalar ishlab chiqamiz.",
    icon: <Smartphone size={36} className="text-cyan-600" />,
    href: '/services/mobile-apps',
  },
  {
    title: 'UI/UX Dizayn',
    description:
      "Saytingiz yoki ilovangiz nafaqat chiroyli, balki tushunarli va foydalanishga juda oson bo'lishini ta'minlaymiz. Mijozlar adashib qolmaydi.",
    icon: <Layers size={36} className="text-cyan-600" />,
    href: '/services/ui-ux-design',
  },
  {
    title: 'Server Xizmatlari (DevOps)',
    description:
      'Saytingiz yoki ilovangiz har doim uzluksiz ishlashini ta\'minlaymiz. Yangilanishlar tez va xatosiz chiqadi, tizim esa katta yuklamalarga tayyor turadi.',
    icon: <Server size={36} className="text-cyan-600" />,
    href: '/services/devops',
  },
  {
    title: 'Videokuzatuv Tizimlari',
    description:
      "Ofisingiz, omboringiz yoki uyingiz xavfsizligi uchun hamma joyni ko'rsatib turadigan kameralar o'rnatamiz. Ularni telefoningizdan ham kuzata olasiz.",
    icon: <Video size={36} className="text-cyan-600" />,
    href: '/services/video-surveillance',
  },
  {
    title: 'Kompyuter Tarmoqlari',
    description:
      'Barcha kompyuterlaringiz va qurilmalaringiz bir-biri bilan tez va xavfsiz "gaplashadigan" yagona tizim yaratamiz. Ofisingizda Wi-Fi "o\'lik" nuqtalari bo\'lmaydi.',
    icon: <Network size={36} className="text-cyan-600" />,
    href: '/services/networking',
  },
  {
    title: 'Kirish Nazorati (Biometrika)',
    description:
      "Eshiklarni yuzni tanish yoki barmoq izi bilan ochadigan tizimlar. Xodimlaringiz qachon kelib-ketganini aniq bilib turasiz va begonalarga yo'l yopiladi.",
    icon: <ScanFace size={36} className="text-cyan-600" />,
    href: '/services/biometrics',
  },
  {
    title: 'IT Maslahati (Konsalting)',
    description:
      "Qaysi texnologiyaga pul sarflash kerakligini bilmayapsizmi? Biznesingizga qaysi dastur ko'proq foyda keltirishini aniqlashga yordam beramiz.",
    icon: <ShieldCheck size={36} className="text-cyan-600" />,
    href: '/services/consulting',
  },
]

// 2. SAHIFA KOMPONENTI
export default function ServicesPage() {
  return (
    // <main> tegi <template.tsx> faylida bo'lgani uchun bu yerda <> ishlatamiz
    <>
      {/* ===== 1-BO'LIM: SAHIFA SARLAVHASI ===== */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <span className="text-cyan-600 font-semibold uppercase tracking-wider">
            Xizmatlarimiz
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">
            Biz Nima Taklif Qilamiz?
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Biznesingiz ehtiyojlariga moslashtirilgan, natijaga yo'naltirilgan
            va kengaytirilishi mumkin bo'lgan texnologik yechimlar.
          </p>
        </div>
      </section>

      {/* ===== 2-BO'LIM: XIZMATLAR RO'YXATI (KARTALAR) ===== */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <Link
                href={service.href}
                key={service.title}
                className="group block rounded-2xl border border-gray-200 bg-white p-8 shadow-sm 
                           transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:-translate-y-2"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="mb-5 transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-5">{service.description}</p>
                <span className="font-semibold text-cyan-600 flex items-center group-hover:underline">
                  Batafsil bilish
                  <ArrowRight
                    size={18}
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3-BO'LIM: CALL TO ACTION (HARAKATGA CHAQIRUV) ===== */}
      <section className="pb-20 md:pb-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="bg-gray-900 text-white rounded-2xl p-12 md:p-16 text-center relative overflow-hidden">
            {/* Orqa fon animatsiyasi */}
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-cyan-500/10 rounded-full animate-spin-slow" />
            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-cyan-500/10 rounded-full animate-spin-slow-reverse" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold">
                Loyihangizni boshlashga tayyormisiz?
              </h2>
              <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
                Biz sizning g'oyangizni eshitishni va uni haqiqatga
                aylantirishda qanday yordam berishimizni muhokama qilishni
                xohlaymiz.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-block bg-cyan-500 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg 
                           transition-all hover:bg-cyan-400 hover:scale-105"
              >
                Biz bilan bog'lanish
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}