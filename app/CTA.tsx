import Link from 'next/link'

export function CTA() {
  return (
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
  )
}