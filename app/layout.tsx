import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Providers } from '@/components/Providers'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

// Global (umumiy) metadata
export const metadata: Metadata = {
  title: {
    template: '%s | Kiwitech Solutions',
    default: 'Kiwitech Solutions - Innovatsion IT Yechimlari',
  },
  metadataBase: new URL('https://kiwitech.uz'),
  description:
    'Kiwitech Solutions veb-dasturlash, mobil ilovalar, videokuzatuv va IT konsalting xizmatlarini taklif etadi.',
  icons: {
    icon: '/kiwi2.jpg',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const messages = await getMessages()

  return (
    <html lang="uz" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  )
}