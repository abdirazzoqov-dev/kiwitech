import Link from 'next/link'
import { Code, Smartphone, Camera, ArrowRight } from 'lucide-react'

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

export function HomeServices() {
  return (
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
  )
}