import { createContext } from 'react'
import type { Copy } from './copy'
import type { Locale } from './locales'

export type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Copy
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)
