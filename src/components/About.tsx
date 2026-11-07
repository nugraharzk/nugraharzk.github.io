import { sekarang } from '../data'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        index="01"
        title="tentang"
        note="dari slicing desain sampai API"
      />

      <div className="max-w-3xl space-y-9 text-[17px] leading-relaxed text-muted">
        <p>
          Gw <strong className="font-semibold text-fg">Rizki Nugraha</strong>,
          frontend developer yang udah <mark>5+ tahun</mark> ngurusin antarmuka
          web. Ngubah desain jadi layout responsif, nyusun komponen yang gampang
          dirawat, sampai ngejar bug yang cuma rusak di satu browser.
        </p>
        <p>
          Fokusnya: UI yang cepat, aksesibel, dan nggak bikin user mikir.
          Belakangan mulai masuk sisi server, bikin API pakai NestJS dan ngulik
          Rust.
        </p>
      </div>

      <dl className="mt-10 grid divide-y-[3px] divide-fg border-y-[3px] border-fg sm:grid-cols-3 sm:divide-x-[3px] sm:divide-y-0">
        {sekarang.map((item) => (
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
