import { ArrowUpRight } from 'lucide-react'
import { projects, profile } from '../data'
import { GithubIcon } from './BrandIcons'
import SectionHeading from './SectionHeading'

function Tags({ items, className = 'mt-4' }: { items: string[]; className?: string }) {
  return (
    <ul className={`${className} flex flex-wrap gap-1.5`}>
      {items.map((item) => (
        <li
          key={item}
          className="border-2 border-fg px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.06em] text-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function Projects() {
  const [featured, ...rest] = projects

  return (
    <section id="works" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading index="03" title="works" note="repo asli, klik buat lihat kodenya" />

      <div className="grid gap-4 sm:grid-cols-2">
        {featured ? (
          <article className="relative flex flex-col gap-6 border-[3px] border-fg bg-card p-5 transition-colors duration-150 hover:bg-acid hover:shadow-brutal sm:col-span-2 sm:p-7 lg:grid lg:grid-cols-[1.4fr_0.6fr] lg:gap-8">
            <div className="min-w-0">
              <div className="flex items-center gap-3">
                <span className="bg-fg px-2 py-0.5 font-mono text-[9.5px] font-bold uppercase tracking-[0.16em] text-bg">
                  featured
                </span>
                <span className="font-mono text-[10px] tracking-[0.16em] text-muted">01</span>
              </div>
              <h3 className="mt-4 font-display text-[clamp(1.7rem,4.5vw,2.6rem)] uppercase leading-[0.95]">
                <a
                  href={featured.href}
                  target="_blank"
                  rel="noreferrer"
                  className="after:absolute after:inset-0 after:content-['']"
                >
                  {featured.title}
                </a>
              </h3>
              <p className="mt-3 max-w-[52ch] leading-relaxed text-muted">
                {featured.description}
              </p>
            </div>

            <div className="flex flex-col gap-4 border-t-[2.5px] border-fg pt-4 lg:border-t-0 lg:border-l-[2.5px] lg:pt-0 lg:pl-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                tahun {featured.year}
              </span>
              <Tags items={featured.stack} className="mt-0" />
              <span className="mt-auto inline-flex w-full items-center justify-between gap-2 border-2 border-fg bg-fg px-3 py-2 font-mono text-[10.5px] font-bold uppercase tracking-[0.12em] text-bg">
                buka repo
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </span>
            </div>
          </article>
        ) : null}

        {rest.map((project, index) => (
          <article
            key={project.title}
            className="relative flex flex-col border-[2.5px] border-fg bg-card p-5 transition-colors duration-150 hover:bg-acid hover:shadow-brutal"
          >
            <span className="font-mono text-[10px] tracking-[0.16em] text-muted">
              {String(index + 2).padStart(2, '0')}
            </span>

            <h3 className="mt-3 font-display text-xl uppercase leading-[1.05]">
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="after:absolute after:inset-0 after:content-['']"
              >
                {project.title}
              </a>
            </h3>

            <p className="mt-2 flex-1 text-[14.5px] leading-relaxed text-muted">
              {project.description}
            </p>

            <Tags items={project.stack} />

            <div className="mt-4 flex items-center justify-between border-t-2 border-fg/15 pt-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                {project.year}
              </span>
              <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-[0.12em]">
                buka repo
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </span>
            </div>
          </article>
        ))}

        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="group flex min-h-[12rem] flex-col items-start justify-between border-[2.5px] border-dashed border-fg p-5 transition hover:border-solid hover:bg-fg hover:text-bg"
        >
          <GithubIcon className="size-5" />
          <span>
            <span className="block font-display text-xl uppercase leading-none">
              semua repo
            </span>
            <span className="mt-2 block font-mono text-[10.5px] uppercase tracking-[0.1em] opacity-70">
              github.com/nugraharzk
            </span>
          </span>
        </a>
      </div>
    </section>
  )
}
