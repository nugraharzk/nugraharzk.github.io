import { profile } from '../data'
import { useI18n } from '../hooks/useI18n'
import SectionHeading from './SectionHeading'

export default function About() {
  const { t } = useI18n()

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading index="01" title={t.about.title} note={t.about.note} />

      <div className="max-w-3xl space-y-9 text-[17px] leading-relaxed text-muted">
        <p>
          {t.about.p1a}
          <strong className="font-semibold text-fg">{profile.name}</strong>
          {t.about.p1b}
          <mark>{t.about.years}</mark>
          {t.about.p1c}
        </p>
        <p>{t.about.p2}</p>
      </div>

      <dl className="mt-10 grid divide-y-[3px] divide-fg border-y-[3px] border-fg sm:grid-cols-3 sm:divide-x-[3px] sm:divide-y-0">
        {t.about.now.map((item) => (
          <div key={item.label} className="px-0 py-4 sm:px-5 sm:first:pl-0 sm:last:pr-0">
            <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
              {item.label}
            </dt>
            <dd className="mt-2 text-[14px] leading-relaxed">{item.text}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
