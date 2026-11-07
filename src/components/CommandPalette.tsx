import { useEffect, useMemo, useRef, useState } from 'react'
import { profile, sections } from '../data'
import { useI18n } from '../hooks/useI18n'

type Item = {
  id: string
  label: string
  hint: string
  action: () => void
}

type Props = {
  onClose: () => void
}

export default function CommandPalette({ onClose }: Props) {
  const { t } = useI18n()
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const items = useMemo<Item[]>(() => {
    const go = (href: string) => () => {
      onClose()
      // Overlay menahan scroll sampai unmount, jadi tunggu dulu.
      window.setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      }, 60)
    }
    const open = (href: string) => () => {
      window.open(href, '_blank', 'noopener,noreferrer')
      onClose()
    }

    return [
      ...sections.map((section) => ({
        id: section.href,
        label: `${t.palette.goTo} ${t.nav[section.key]}`,
        hint: section.href,
        action: go(section.href),
      })),
      {
        id: 'github',
        label: 'GitHub',
        hint: 'github.com/nugraharzk',
        action: open(profile.links.github),
      },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        hint: 'linkedin.com/in/nugraharzk',
        action: open(profile.links.linkedin),
      },
      {
        id: 'gitlab',
        label: 'GitLab',
        hint: 'gitlab.com/nugraharzk',
        action: open(profile.links.gitlab),
      },
    ]
  }, [onClose, t])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return items
    return items.filter((item) =>
      `${item.label} ${item.hint}`.toLowerCase().includes(q),
    )
  }, [items, query])

  const current = Math.min(active, Math.max(filtered.length - 1, 0))

  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [])

  const move = (delta: number) => {
    if (filtered.length === 0) return
    setActive((index) => (index + delta + filtered.length) % filtered.length)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-noir/60 p-4 pt-[12vh]"
      role="dialog"
      aria-modal="true"
      aria-label={t.palette.title}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
      onKeyDown={(event) => {
        if (event.key === 'ArrowDown') {
          event.preventDefault()
          move(1)
        } else if (event.key === 'ArrowUp') {
          event.preventDefault()
          move(-1)
        } else if (event.key === 'Enter') {
          event.preventDefault()
          filtered[current]?.action()
        } else if (event.key === 'Escape') {
          event.preventDefault()
          onClose()
        }
      }}
    >
      <div className="w-full max-w-lg border-[3px] border-fg bg-bg shadow-brutal-lg">
        <div className="flex items-center gap-3 border-b-[3px] border-fg px-4 py-3">
          <input
            ref={inputRef}
            autoFocus
            value={query}
            onChange={(event) => {
              setQuery(event.target.value)
              setActive(0)
            }}
            placeholder={t.palette.placeholder}
            aria-label={t.ui.search}
            className="w-full bg-transparent font-mono text-[13px] outline-none placeholder:text-muted"
          />
          <kbd className="hidden border-2 border-fg px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-muted sm:block">
            esc
          </kbd>
        </div>

        <ul className="max-h-[52vh] overflow-y-auto">
          {filtered.length === 0 ? (
            <li className="px-4 py-8 text-center font-mono text-[11px] uppercase tracking-widest text-muted">
              {t.palette.empty(query)}
            </li>
          ) : (
            filtered.map((item, index) => (
              <li key={item.id}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onClick={item.action}
                  className={`flex w-full items-center gap-3 border-b-2 border-fg/15 px-4 py-3 text-left last:border-b-0 ${
                    index === current ? 'bg-acid text-noir' : 'hover:bg-card'
                  }`}
                >
                  <span className="font-mono text-[9.5px] tracking-[0.14em] opacity-60">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[14px] font-medium">{item.label}</span>
                  <span className="ml-auto truncate font-mono text-[10px] opacity-60">
                    {item.hint}
                  </span>
                </button>
              </li>
            ))
          )}
        </ul>

        <div className="flex items-center gap-4 border-t-[3px] border-fg bg-card px-4 py-2 font-mono text-[9.5px] uppercase tracking-[0.12em] text-muted">
          <span>{t.palette.move}</span>
          <span>{t.palette.open}</span>
          <span className="ml-auto">{t.palette.close}</span>
        </div>
      </div>
    </div>
  )
}
