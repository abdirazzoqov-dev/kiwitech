import {
  Star,
  Clock,
  ShieldCheck,
  LifeBuoy,
  TerminalSquare,
  Layers,
  TrendingUp,
} from 'lucide-react'

export function WhyUs() {
  return (
    <section className="w-full bg-white py-20 md:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Nima uchun aynan Kiwitech Solutions
          </h2>
          <p className="text-lg text-gray-600">
            Bizning xizmatlarimizni boshqalardan nima farq qiladi? Nima uchun
            50+ dan ortiq muvaffaqiyatli kompaniyalar aynan bizga ishonishadi?
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </section>
  )
}