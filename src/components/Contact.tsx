import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react'
import { profile } from '../data'
import { GithubIcon, GitlabIcon, LinkedinIcon } from './BrandIcons'

const socials = [
  { label: 'GitHub', href: profile.links.github, Icon: GithubIcon },
  { label: 'LinkedIn', href: profile.links.linkedin, Icon: LinkedinIcon },
  { label: 'GitLab', href: profile.links.gitlab, Icon: GitlabIcon },
]

const meta = [
  { label: 'basis', value: 'bandung, id' },
  { label: 'zona', value: 'wib, utc+7' },
  { label: 'terbuka', value: 'project, role frontend' },
]

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'copied' | 'manual'>('idle')
  const emailRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (status === 'idle') return
    const id = window.setTimeout(() => setStatus('idle'), 2500)
    return () => window.clearTimeout(id)
  }, [status])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setStatus('copied')
    } catch {
      // Clipboard API butuh HTTPS atau gesture yang sah. Kalau ditolak,
      // email-nya kita seleksi supaya user tinggal Ctrl+C.
      const target = emailRef.current
      if (target) {
        const range = document.createRange()
        range.selectNodeContents(target)
        const selection = window.getSelection()
        selection?.removeAllRanges()
        selection?.addRange(range)
      }
      setStatus('manual')
    }
  }

  return (
    <section id="contact" className="border-t-[3px] border-fg bg-acid text-noir">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-noir/70">
          kontak
        </p>

        <div className="mt-4 lg:grid lg:grid-cols-[1.4fr_0.6fr] lg:gap-10">
          <div>
            <h2 className="font-display text-[clamp(2.4rem,8.5vw,5.5rem)] uppercase leading-[0.85] tracking-[-0.04em]">
              ada ide?
              <br />
              gas bikin.
            </h2>

            <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-noir/75">
              Mau ngobrol soal project, role frontend, atau tanya kenapa
              layout-nya geser 1px. Email gw kebuka.
            </p>
          </div>

          <dl className="mt-8 flex flex-col gap-2 border-t-[2.5px] border-noir pt-4 font-mono text-[11px] uppercase tracking-[0.12em] sm:flex-row sm:gap-6 lg:mt-1 lg:flex-col lg:gap-2 lg:self-start lg:border-t-0 lg:pt-0">
            {meta.map((row) => (
              <div key={row.label} className="flex gap-2">
                <dt className="text-noir/70">{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-9">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex min-h-11 items-center gap-2 border-[3px] border-noir bg-cream px-4 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-noir shadow-[5px_5px_0_0_#0b0b0c] transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_#0b0b0c] active:translate-x-0 active:translate-y-0 active:shadow-none"
            >
              <Mail className="size-4" aria-hidden="true" />
              kirim email
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex min-h-11 items-center gap-2 px-1 font-mono text-[10.5px] font-bold uppercase tracking-[0.1em] underline decoration-2 underline-offset-4 transition hover:bg-noir hover:text-acid"
            >
              {status === 'copied' ? (
                <>
                  <Check className="size-3.5" aria-hidden="true" />
                  email tersalin
                </>
              ) : status === 'manual' ? (
                <>
                  <Check className="size-3.5" aria-hidden="true" />
                  tinggal ctrl+c
                </>
              ) : (
                <>
                  <Copy className="size-3.5" aria-hidden="true" />
                  salin email
                </>
              )}
            </button>
          </div>

          <p
            ref={emailRef}
            className="mt-4 w-fit font-mono text-[11px] uppercase tracking-[0.1em]"
          >
            {profile.email}
          </p>
        </div>

        <div className="mt-9 flex flex-wrap gap-2 border-t-[2.5px] border-noir pt-6">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 border-2 border-noir px-3 font-mono text-[10.5px] uppercase tracking-[0.12em] transition hover:bg-noir hover:text-acid"
            >
              <Icon className="size-3.5" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
