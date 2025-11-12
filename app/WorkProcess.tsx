import { ClipboardList, Palette, Code, Rocket } from 'lucide-react'

export function WorkProcess() {
  return (
    <section className="w-full py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Loyiha Qanday Amalga Oshiriladi?
          </h2>
          <p className="text-lg text-gray-600">
            Bizning 4 bosqichli sinovdan o'tgan yondashuvimiz g'oyadan
            haqiqatgacha bo'lgan yo'lni aniq ko'rsatadi.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-y-0 md:gap-x-8">
          <div className="absolute hidden md:block top-6 left-0 w-full h-1 bg-cyan-400 -translate-y-1/2" />

          <div className="relative text-center">
            <div className="relative z-10 w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-white mx-auto ring-8 ring-gray-50">
              <ClipboardList size={24} />
            </div>
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

          <div className="relative text-center">
            <div className="relative z-10 w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-white mx-auto ring-8 ring-gray-50">
              <Palette size={24} />
            </div>
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

          <div className="relative text-center">
            <div className="relative z-10 w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-white mx-auto ring-8 ring-gray-50">
              <Code size={24} />
            </div>
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

          <div className="relative text-center">
            <div className="relative z-10 w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-white mx-auto ring-8 ring-gray-50">
              <Rocket size={24} />
            </div>
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
  )
}