import { ArrowUp } from 'lucide-react'
import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-fg">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>

        <p className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted">
          react 19, vite 8, typescript, tailwind 4
        </p>

        <a
          href="#top"
          className="inline-flex min-h-11 w-fit items-center gap-2 border-2 border-fg px-3 font-mono text-[10px] uppercase tracking-[0.12em] transition hover:bg-fg hover:text-bg"
        >
          ke atas
          <ArrowUp className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
