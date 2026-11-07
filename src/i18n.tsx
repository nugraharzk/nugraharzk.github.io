import { useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { copy } from './copy'
import { isLocale } from './locales'
import type { Locale } from './locales'
import { LocaleContext } from './locale-context'
import type { LocaleContextValue } from './locale-context'

const readInitial = (): Locale => {
  try {
    const stored = localStorage.getItem('locale')
    if (isLocale(stored)) return stored
  } catch {
    /* localStorage diblok: pakai deteksi browser */
  }

  // Pengunjung berbahasa Inggris langsung dapat versi Inggris,
  // selain itu tetap Bahasa Indonesia.
  return navigator.language.toLowerCase().startsWith('en') ? 'en' : 'id'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(readInitial)

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, t: copy[locale] }),
    [locale],
  )

  useEffect(() => {
    const { meta } = copy[locale]
    document.documentElement.lang = locale
    document.title = meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', meta.description)

    try {
      localStorage.setItem('locale', locale)
    } catch {
      /* private mode: pilihan bahasa cuma berlaku di sesi ini */
    }
  }, [locale])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
