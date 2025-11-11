import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-700/50">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12">
          
          {/* 1. Brend Qismi */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-extrabold text-white">
                Kiwitech
              </span>
            </Link>
            <p className="max-w-xs text-base">
              G'oyalaringizni raqamli reallikka aylantiruvchi ishonchli texnologik hamkoringiz.
            </p>
          </div>

          {/* 2. Sahifalar */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">Sahifalar</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-cyan-400 transition-colors">Bosh Sahifa</Link></li>
              <li><Link href="/services" className="hover:text-cyan-400 transition-colors">Xizmatlar</Link></li>
              <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Bog'lanish</Link></li>
            </ul>
          </div>

          {/* 3. Xizmatlar (Asosiylari) */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">Xizmatlar</h3>
            <ul className="space-y-3">
              <li><Link href="/services/web-development" className="hover:text-cyan-400 transition-colors">Veb-dasturlash</Link></li>
              <li><Link href="/services/mobile-apps" className="hover:text-cyan-400 transition-colors">Mobil Ilovalar</Link></li>
              <li><Link href="/services/cctv" className="hover:text-cyan-400 transition-colors">Videokuzatuv</Link></li>
              <li><Link href="/services" className="hover:text-cyan-400 transition-colors">Barchasi...</Link></li>
            </ul>
          </div>

          {/* 4. Bog'lanish */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">Aloqa</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-cyan-400 shrink-0" />
                <a href="mailto:info@kiwitech.uz" className="hover:text-cyan-400 transition-colors">support@kiwitech.uz</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-cyan-400 shrink-0" />
                <a href="tel:+998908685010" className="hover:text-cyan-400 transition-colors">+998 (90) 868-50-10</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-cyan-400 shrink-0" />
                <span>Qashqadaryo viloyati Qarshi shahar</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
      
      {/* Copyright Qismi */}
      <div className="bg-gray-950/50 py-6">
        <div className="container mx-auto max-w-7xl px-4 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Kiwitech Solutions. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  )
}