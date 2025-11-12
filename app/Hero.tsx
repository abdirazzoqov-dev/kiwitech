import Link from 'next/link'
import { Code, Smartphone, Server, Camera, Network } from 'lucide-react'

export function Hero() {
  return (
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
            Biznesingizni{' '}
            <span className="text-cyan-600">- Avtomatlashtiring</span>
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
            Kiwitech Solutions'da biz sizning biznes g'oyalaringizni
            veb-saytlardan tortib murakkab tarmoq yechimlarigacha bo'lgan yuqori
            sifatli, ishonchli va kengaytiriladigan tizimlarga aylantiramiz.
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

        {/* O'ng Tomon: "Orbita" Vizuali */}
        <div className="md:w-1/2 w-full h-96 md:h-full relative mt-16 md:mt-0 flex items-center justify-center">
          <div className="w-full h-full max-w-md md:max-w-none relative flex items-center justify-center">
            <div
              className="absolute w-72 h-72 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDuration: '6s' }}
            />
            <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 opacity-90 drop-shadow-xl bg-cyan-500/20 rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-cyan-800">Kiwitech</span>
            </div>
            <div
              className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 
                           border-2 border-dashed border-cyan-400/50 rounded-full
                           animate-spin-slow"
              style={{ animationDuration: '30s' }}
            >
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
  )
}