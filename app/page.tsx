import type { Metadata } from 'next'
import { Hero } from './Hero'
import { HomeServices } from './HomeServices'
import { WhyUs } from './WhyUs'
import { WorkProcess } from './WorkProcess'
import { CTA } from './CTA'

// Bosh sahifa uchun maxsus, SEOga moslashtirilgan metadata
export const metadata: Metadata = {
  title: 'Biznesingiz uchun Innovatsion IT Yechimlari | Kiwitech Solutions',
  description:
    'Kiwitech Solutions veb-dasturlash, mobil ilovalar, DevOps, videokuzatuv va IT konsalting xizmatlarini taklif etadi. Biznesingizni keyingi bosqichga olib chiqing.',
  keywords: [
    'IT xizmatlari',
    'veb-dasturlash',
    'mobil ilovalar',
    'Toshkent IT',
    'Kiwitech',
    'DevOps',
    'videokuzatuv',
    'IT konsalting',
    'dasturiy taminot',
  ],
}

// 2. BOSH SAHIFA KOMPONENTI
export default function HomePage() {
  return (
    <main className="min-h-screen flex-col items-center bg-white text-gray-900">
      <Hero />
      <HomeServices />
      <WhyUs />
      <WorkProcess />
      <CTA />
    </main>
  )
}