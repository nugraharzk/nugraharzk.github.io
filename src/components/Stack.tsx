import { stackGroups } from '../data'
import { useI18n } from '../hooks/useI18n'
import SectionHeading from './SectionHeading'

export default function Stack() {
  const { t } = useI18n()

  return (
    <section id="stack" className="border-y-[3px] border-fg bg-fg text-bg">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionHeading
          index="02"
          title={t.stack.title}
          note={t.stack.note}
          tone="inverse"
        />

        <div>
          {stackGroups.map((group) => (
            <div
              key={group.key}
              className="grid gap-3 border-b-[3px] border-bg py-5 last:border-b-0 sm:grid-cols-[15rem_1fr] sm:items-baseline sm:gap-6"
            >
              <h3 className="font-display text-[clamp(1.1rem,2vw,1.45rem)] uppercase leading-none">
                {t.stack.groups[group.key]}
              </h3>
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-2 border-bg px-2 py-1 font-mono text-[10px] uppercase tracking-[0.06em]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
