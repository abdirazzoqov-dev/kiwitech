import { getRequestConfig } from 'next-intl/server'
import { cookies } from 'next/headers'
import { defaultLocale, locales, type Locale } from './config'

export default getRequestConfig(async () => {
  // Cookie'dan tilni olish
  const cookieStore = await cookies()
  const locale = (cookieStore.get('NEXT_LOCALE')?.value as Locale) || defaultLocale

  // Validatsiya
  if (!locales.includes(locale as any)) {
    return {
      locale: defaultLocale,
      messages: (await import(`./locales/${defaultLocale}.json`)).default,
    }
  }

  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default,
  }
})

