import type { Metadata } from 'next'
import { Inter } from 'next/font/google' 
import './globals.css'
import Navbar from '@/components/Navbar' // Navbar import qilindi
import Footer from '@/components/Footer' // Footer import qilindi

const inter = Inter({ subsets: ['latin'] })

// Global (umumiy) metadata
export const metadata: Metadata = {
  title: {
    template: '%s | Kiwitech Solutions', // Har bir sahifa sarlavhasi shabloni
    default: 'Kiwitech Solutions - Innovatsion IT Yechimlari', // Bosh sahifa uchun
  },
  // Saytning asosiy manzilini ko'rsatish
  metadataBase: new URL('http://kiwitech.uz'),
  description:
    'Kiwitech Solutions veb-dasturlash, mobil ilovalar, videokuzatuv va IT konsalting xizmatlarini taklif etadi.',
  // Favicon qo'shildi
  icons: {
    icon: "/kiwi2.jpg"
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz">
      {/* Shrift klassi va asosiy fon rangi 'body' ga beriladi.
        'bg-white' - Bosh sahifaning oq foni bilan mos keladi.
      */}
      <body className={`${inter.className} bg-white text-gray-900`}>
        
        {/* Navbar barcha sahifalarning tepasida ko'rinadi */}
        <Navbar /> 
        
        {/* 'main' tegi sizning har bir sahifangizni (page.tsx) 
          o'z ichiga oladi (masalan, Bosh sahifa, Xizmatlar sahifasi)
        */}
        <main>
          {children}
        </main>
        
        {/* Footer barcha sahifalarning pastida ko'rinadi */}
        <Footer />
      </body>
    </html>
  )
}