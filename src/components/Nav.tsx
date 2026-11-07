import { useEffect, useState } from 'react'
import { sections } from '../data'
import { useI18n } from '../hooks/useI18n'
import { locales } from '../locales'

type Theme = 'light' | 'dark'

// Hanya petunjuk visual; pintasannya sendiri tetap Cmd atau Ctrl.
const shortcut = /Mac|iPhone|iPad/.test(navigator.userAgent) ? '⌘K' : 'ctrl K'

type Props = {
  theme: Theme
  onTheme: (theme: Theme) => void
  onOpenPalette: () => void
}

export default function Nav({ theme, onTheme, onOpenPalette }: Props) {
  const { t, locale, setLocale } = useI18n()
  const [active, setActive] = useState('')

  useEffect(() => {
    const items = sections
      .map((item) => ({
        href: item.href,
        el: document.querySelector<HTMLElement>(item.href),
      }))
      .filter((item): item is { href: string; el: HTMLElement } => item.el !== null)

    const update = () => {
      const probe = window.scrollY + 140
      let current = ''
      for (const item of items) {
        if (item.el.offsetTop <= probe) current = item.href
      }
      setActive(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-fg bg-bg">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:px-6">
        <a
          href="#top"
          className="flex min-h-11 shrink-0 items-center gap-2.5"
          aria-label={t.ui.homeLabel}
        >
          <span className="grid size-9 place-items-center border-[2.5px] border-fg bg-acid font-display text-[13px] leading-none text-noir">
            RN
          </span>
          <span className="hidden font-mono text-[11px] font-bold uppercase tracking-[0.16em] sm:inline">
            nugraharzk.dev
          </span>
        </a>

        <nav className="ml-auto hidden items-center lg:flex" aria-label={t.ui.navLabel}>
          {sections.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? 'true' : undefined}
              className={`px-3 py-2 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors hover:bg-fg hover:text-bg ${
                active === item.href ? 'bg-fg text-bg' : 'text-muted'
              }`}
            >
              {t.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-2">
          <button
            type="button"
            onClick={onOpenPalette}
            className="flex h-11 items-center gap-2 border-[2.5px] border-fg bg-card px-2.5 font-mono text-[10.5px] uppercase tracking-[0.12em] transition hover:bg-acid hover:text-noir md:h-9"
            aria-label={t.ui.openPalette}
          >
            <span>{t.ui.search}</span>
            <kbd className="hidden border-2 border-current px-1 text-[9px] leading-relaxed md:inline-flex">
              {shortcut}
            </kbd>
          </button>

          <div
            role="group"
            aria-label={t.ui.language}
            className="flex border-[2.5px] border-fg bg-card"
          >
            {locales.map((code) => (
              <button
                key={code}
                type="button"
                lang={code}
                onClick={() => setLocale(code)}
                aria-pressed={locale === code}
                className={`h-11 px-2 font-mono text-[9.5px] uppercase tracking-[0.1em] transition-colors md:h-9 ${
                  code === 'en' ? 'border-l-[2.5px] border-fg' : ''
                } ${
                  locale === code
                    ? 'bg-fg text-bg'
                    : 'text-muted hover:bg-acid hover:text-noir'
                }`}
              >
                {code}
              </button>
            ))}
          </div>

          <div
            role="group"
            aria-label={t.ui.themeGroup}
            className="flex border-[2.5px] border-fg bg-card"
          >
            {(['light', 'dark'] as const).map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => onTheme(mode)}
                aria-pressed={theme === mode}
                className={`h-11 px-2 font-mono text-[9.5px] uppercase tracking-[0.1em] transition-colors md:h-9 ${
                  mode === 'dark' ? 'border-l-[2.5px] border-fg' : ''
                } ${
                  theme === mode
                    ? 'bg-fg text-bg'
                    : 'text-muted hover:bg-acid hover:text-noir'
                }`}
              >
                {mode === 'light' ? t.ui.themeLight : t.ui.themeDark}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
