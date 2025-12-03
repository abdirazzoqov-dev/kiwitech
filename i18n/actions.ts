'use server'

import { cookies } from 'next/headers'
import { type Locale, locales, defaultLocale } from './config'

export async function setUserLocale(locale: Locale) {
  // Validate locale
  if (!locales.includes(locale)) {
    locale = defaultLocale
  }

  const cookieStore = await cookies()
  cookieStore.set('NEXT_LOCALE', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  })
}

export async function getUserLocale(): Promise<Locale> {
  const cookieStore = await cookies()
  const locale = cookieStore.get('NEXT_LOCALE')?.value as Locale
  
  if (locale && locales.includes(locale)) {
    return locale
  }
  
  return defaultLocale
}

