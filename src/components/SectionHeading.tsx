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
      className={`mb-8 flex flex-wrap items-end justify-between gap-x-8 gap-y-2 border-b-[3px] pb-3 ${
        inverse ? 'border-bg' : 'border-fg'
      }`}
    >
      <div>
        <span
          className={`font-mono text-[10px] font-bold tracking-[0.2em] ${
            inverse ? 'text-bg/70' : 'text-muted'
          }`}
        >
          {index}
        </span>
        <h2 className="mt-1.5 font-display text-[clamp(1.9rem,5.5vw,3.4rem)] uppercase leading-[0.85] tracking-[-0.02em]">
          {title}
        </h2>
      </div>
      {note ? (
        <p
          className={`max-w-[22rem] pb-1 font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] ${
            inverse ? 'text-bg/70' : 'text-muted'
          }`}
        >
          {note}
        </p>
      ) : null}
    </div>
  )
}
