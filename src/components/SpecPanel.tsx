import { ArrowUpRight } from 'lucide-react'
import { profile, specRows } from '../data'
import { useWibClock } from '../hooks/useWibClock'

const links = [
  { label: 'github', href: profile.links.github },
  { label: 'linkedin', href: profile.links.linkedin },
  { label: 'gitlab', href: profile.links.gitlab },
]

export default function SpecPanel() {
  const time = useWibClock()

  return (
    <aside
      aria-label="Ringkasan profil"
      className="flex h-full flex-col border-[3px] border-fg bg-card"
    >
      <h2 className="border-b-[3px] border-fg bg-fg px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-bg">
        profil
      </h2>

      <dl className="flex flex-1 flex-col divide-y-2 divide-fg/15">
        {specRows.map((row) => (
          <div
            key={row.label}
            className="flex flex-1 items-baseline justify-between gap-4 px-4 py-3.5"
          >
            <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
              {row.label}
            </dt>
            <dd className="text-right text-[14px] font-medium">{row.value}</dd>
          </div>
        ))}
        <div className="flex flex-1 items-baseline justify-between gap-4 px-4 py-3.5">
          <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
            waktu
          </dt>
          <dd className="text-right text-[14px] font-medium tabular-nums">{time} wib</dd>
        </div>
      </dl>

      <div className="flex flex-wrap gap-2 border-t-[3px] border-fg p-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 flex-1 items-center justify-center gap-1 border-2 border-fg px-2.5 font-mono text-[10px] uppercase tracking-[0.12em] transition hover:bg-fg hover:text-bg"
          >
            {link.label}
            <ArrowUpRight className="size-3" aria-hidden="true" />
          </a>
        ))}
      </div>
    </aside>
  )
}
