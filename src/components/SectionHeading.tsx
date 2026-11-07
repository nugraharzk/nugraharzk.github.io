type Props = {
  index: string
  title: string
  note?: string
  tone?: 'default' | 'inverse'
}

export default function SectionHeading({ index, title, note, tone = 'default' }: Props) {
  const inverse = tone === 'inverse'

  return (
    <div
      className={`mb-8 flex items-end justify-between gap-6 border-b-[3px] pb-3 ${
        inverse ? 'border-bg' : 'border-fg'
      }`}
    >
      <div className="min-w-0">
        <h2 className="font-display text-[clamp(1.9rem,5.5vw,3.4rem)] uppercase leading-[0.85] tracking-[-0.02em]">
          {title}
        </h2>
        {note ? (
          <p
            className={`mt-2 max-w-[24rem] font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] ${
              inverse ? 'text-bg/70' : 'text-muted'
            }`}
          >
            {note}
          </p>
        ) : null}
      </div>

      <span
        aria-hidden="true"
        className={`shrink-0 font-display text-[clamp(2.4rem,6.5vw,5.5rem)] leading-[0.7] ${
          inverse ? 'text-outline-invert' : 'text-outline'
        }`}
      >
        {index}
      </span>
    </div>
  )
}
