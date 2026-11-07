export const locales = ['id', 'en'] as const

export type Locale = (typeof locales)[number]

export const isLocale = (value: string | null): value is Locale =>
  value === 'id' || value === 'en'
