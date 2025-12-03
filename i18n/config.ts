export const locales = ['uz', 'uz-cyrl', 'ru', 'en'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'uz'

export const localeNames: Record<Locale, string> = {
  uz: "O'zbekcha",
  'uz-cyrl': 'Ўзбекча',
  ru: 'Русский',
  en: 'English',
}

export const localeFlags: Record<Locale, string> = {
  uz: '🇺🇿',
  'uz-cyrl': '🇺🇿',
  ru: '🇷🇺',
  en: '🇬🇧',
}

