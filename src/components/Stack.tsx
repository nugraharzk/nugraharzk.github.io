import { stackGroups } from '../data'
import SectionHeading from './SectionHeading'

export default function Stack() {
  return (
    <section id="stack" className="border-y-[3px] border-fg bg-fg text-bg">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionHeading
          index="02"
          title="stack"
          note="yang dipakai tiap hari, bukan cuma di CV"
          tone="inverse"
        />

        <div>
          {stackGroups.map((group) => (
            <div
              key={group.title}
              className="grid gap-3 border-b-[3px] border-bg py-5 sm:grid-cols-[9rem_1fr] sm:items-baseline sm:gap-6"
            >
              <h3 className="font-mono text-[10px] uppercase tracking-[0.16em] text-bg/70">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-2 border-bg px-2 py-1 font-mono text-[10.5px] uppercase tracking-[0.06em]"
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
