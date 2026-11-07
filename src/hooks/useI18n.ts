import { useContext } from 'react'
import { LocaleContext } from '../locale-context'

export function useI18n() {
  const value = useContext(LocaleContext)

  if (!value) {
    throw new Error('useI18n harus dipakai di dalam I18nProvider')
  }

  return value
}
