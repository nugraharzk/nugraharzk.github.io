import { ArrowDown, Mail } from 'lucide-react'
import { profile } from '../data'
import { useI18n } from '../hooks/useI18n'
import SpecPanel from './SpecPanel'

export default function Hero() {
  const { t } = useI18n()

  return (
    <section id="top">
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-14">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="border-2 border-fg bg-acid px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-noir">
            {t.hero.badge}
          </span>
          <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">
            {t.hero.location}
          </span>
        </div>

        <h1 className="mt-5 font-display text-[clamp(2.35rem,10.4vw,8rem)] uppercase leading-[0.84] tracking-[-0.05em]">
          Rizki <span className="text-outline">Nugraha</span>
        </h1>

        <div className="mt-8 grid gap-8 pb-12 sm:pb-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-stretch lg:gap-12 lg:pb-20">
          <div className="max-w-xl border-t-[3px] border-fg pt-5 lg:flex lg:flex-col">
            <p className="font-mono text-[10.5px] font-bold uppercase tracking-[0.16em]">
              {t.hero.kicker}
            </p>

            <p className="mt-4 text-[17px] leading-relaxed text-muted">{t.hero.lead}</p>

            <div className="mt-7 flex flex-wrap items-center gap-3 lg:mt-auto lg:pt-7">
              <a
                href="#works"
                className="inline-flex min-h-11 items-center gap-2 border-[3px] border-fg bg-acid px-4 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-noir shadow-brutal-sm transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal active:translate-x-0 active:translate-y-0 active:shadow-none"
              >
                {t.hero.works}
                <ArrowDown className="size-4" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex min-h-11 items-center gap-2 border-[3px] border-fg bg-card px-4 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.12em] transition hover:bg-fg hover:text-bg"
              >
                {t.hero.email}
                <Mail className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="-mx-4 border-y-[3px] border-fg bg-acid px-4 py-5 shadow-brutal-lg sm:-mx-6 sm:px-6 lg:mx-0 lg:border-[3px] lg:p-4">
            <SpecPanel />
          </div>
        </div>
      </div>
    </section>
  )
}
