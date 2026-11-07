import { useEffect, useState } from 'react'
import { nav } from '../data'

type Theme = 'light' | 'dark'

type Props = {
  theme: Theme
  onTheme: (theme: Theme) => void
  onOpenPalette: () => void
}

export default function Nav({ theme, onTheme, onOpenPalette }: Props) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = nav
      .map((item) => ({
        href: item.href,
        el: document.querySelector<HTMLElement>(item.href),
      }))
      .filter((item): item is { href: string; el: HTMLElement } => item.el !== null)

    const update = () => {
      const probe = window.scrollY + 140
      let current = ''
      for (const section of sections) {
        if (section.el.offsetTop <= probe) current = section.href
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
          aria-label="Rizki Nugraha, ke atas"
        >
          <span className="grid size-9 place-items-center border-[2.5px] border-fg bg-acid font-display text-[13px] leading-none text-noir">
            RN
          </span>
          <span className="hidden font-mono text-[11px] font-bold uppercase tracking-[0.16em] sm:inline">
            nugraharzk.dev
          </span>
        </a>

        <nav className="ml-auto hidden items-center md:flex" aria-label="Navigasi utama">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? 'true' : undefined}
              className={`px-3 py-2 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors hover:bg-fg hover:text-bg ${
                active === item.href ? 'bg-fg text-bg' : 'text-muted'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-2">
          <button
            type="button"
            onClick={onOpenPalette}
            className="flex h-11 items-center gap-2 border-[2.5px] border-fg bg-card px-2.5 font-mono text-[10.5px] uppercase tracking-[0.12em] transition hover:bg-acid hover:text-noir md:h-9"
            aria-label="Buka menu dan pencarian"
          >
            <span>cari</span>
            <kbd className="hidden border-2 border-current px-1 text-[9px] leading-relaxed md:inline-flex">
              ⌘K
            </kbd>
          </button>

          <div
            role="group"
            aria-label="Tema tampilan"
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
                {mode === 'light' ? 'terang' : 'gelap'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
