# nugraharzk.github.io

Portfolio personal Rizki Nugraha, frontend developer di Bandung. Dibangun ulang dari nol: dulu template React + Chat widget dengan placeholder `[Company Name]`, sekarang halaman statis satu file data.

Live: https://nugraharzk.github.io/

## Stack

- Vite 8 + React 19 + TypeScript 6 (strict, `noUnusedLocals`, `verbatimModuleSyntax`)
- Tailwind CSS 4 lewat `@tailwindcss/vite`, token warna di `@theme inline`
- `lucide-react` buat ikon UI, logo brand di-inline sendiri (`BrandIcons.tsx`) karena lucide 1.x sudah nggak ngekspor ikon brand
- ESLint flat config (`typescript-eslint` + react-hooks + react-refresh)
- Font self-hosted (`public/fonts/`): Archivo + Archivo Black, tanpa request ke Google Fonts

## Script

```bash
npm run dev        # vite di :3000
npm run build      # tsc --noEmit && vite build
npm run preview    # cek hasil build
npm run lint       # eslint .
npm run deploy     # build lalu push ke branch gh-pages
```

Repo ini aslinya pakai Bun. `bun.lock` sengaja dihapus supaya cuma ada satu lockfile (`package-lock.json`). Kalau mau balik ke Bun, jalankan `bun install` dan hapus lockfile npm-nya.

## Struktur

```
src/
  main.tsx              entry
  App.tsx               komposisi section + state tema + command palette
  index.css             font-face, token warna, utility, reveal
  data.ts               konten: profil, section, stack, project (deskripsi 2 bahasa)
  copy.ts               SEMUA string UI per bahasa (id / en)
  locales.ts            daftar locale + type guard
  i18n.tsx              provider: simpan pilihan, set <html lang>, judul, meta
  locale-context.ts     context mentah supaya fast refresh tetap jalan
  hooks/
    useI18n.ts          hook akses locale + kamus
    useWibClock.ts      jam WIB live di panel profil
  components/
    Nav.tsx             sticky header, scroll-spy, toggle bahasa + tema, palette
    Hero.tsx            nama raksasa + blok acid + panel profil
    About.tsx           paragraf + tiga sel "lagi ..."
    Stack.tsx           pita gelap, label display, chip
    Projects.tsx        kartu featured + grid project
    Contact.tsx         bidang acid, CTA email
    Footer.tsx
    CommandPalette.tsx  Cmd/Ctrl + K
    SectionHeading.tsx  judul + numeral outline raksasa
    SpecPanel.tsx       panel profil (peran, fokus, jam)
    BrandIcons.tsx
```

Mau ganti isi? `src/data.ts` buat data project dan profil, `src/copy.ts` buat semua teks UI di dua bahasa. Nggak ada teks yang ditulis langsung di komponen.

## Arah desain

Dibaca sebagai: portfolio personal buat orang yang hiring frontend, gaya lembar spesifikasi industri yang dicetak poster. Dial **ENERGY 3 / RHYTHM 3 / MOTION 1**.

- **Tiga warna (paper, ink, acid).** Satu aksen bikin acid selalu berarti "ini yang penting". Aksennya dipakai sebagai bidang besar (mat panel profil di hero, section kontak), bukan cuma titik kecil.
- **Bidang warna, bukan hiasan.** Hero punya mat acid di kolom kanan, stack jadi pita ink, kontak jadi bidang acid penuh. Ritme halaman kebaca dari blok warnanya.
- **Numeral section raksasa (outline).** Nomor 01–04 tampil sebagai angka outline setinggi 88px di ujung kanan tiap heading. Fungsinya index, bukan ornamen, jadi motifnya konsisten dari atas ke bawah.
- **Dua suara tipografi.** Archivo Black buat judul dan label section, Archivo biasa buat teks, mono buat metadata. Nggak ada tiga famili.
- **Border 2–3px plus hard shadow.** Shadow cuma di objek yang bisa dipencet atau panel utama, jadi elevation berarti "ini interaktif".
- **Nol animasi selain hover.** Marquee, blink, dan reveal dihapus karena semuanya jalan terus tanpa dipicu user.
- **Tanpa gambar project.** Belum ada screenshot asli, jadi lebih baik nggak ada daripada mockup palsu.

## Bahasa

Dua bahasa, Indonesia dan Inggris, di `src/copy.ts`. Struktur tiap locale sama persis (`Copy` type), jadi kalau nambah string, TypeScript langsung teriak kalau salah satu bahasa ketinggalan.

- Toggle `id / en` ada di header, di sebelah tombol tema. Pilihan disimpan di `localStorage` dengan key `locale`.
- Kunjungan pertama: kalau `navigator.language` berawalan `en`, situs tampil dalam bahasa Inggris. Selain itu Bahasa Indonesia.
- Ganti bahasa juga memperbarui `<html lang>`, `document.title`, dan `meta description`. Script kecil di `index.html` menyetel `lang` sebelum React jalan supaya nggak ada kedipan.
- Yang diterjemahin: seluruh copy UI, deskripsi project (`description.id` / `description.en`), label section, isi command palette, dan teks aksesibilitas seperti `aria-label`.
- Yang tetap: nama, nama project, nama teknologi, dan angka tahun.

## Catatan teknis

- Token warna ada di `:root` dan `.dark` (`src/index.css`). Section acid pakai `text-noir` dan `bg-cream` (token tetap) supaya tetap kebaca di dua tema.
- Dark mode pakai class di `<html>`, preferensi disimpan di `localStorage`, dan script kecil di `index.html` mencegah flash sebelum paint.
- `Cmd/Ctrl + K` buka command palette (navigasi + link sosial), Escape buat nutup.
- Tombol salin email punya fallback: kalau Clipboard API ditolak (non-HTTPS atau izin browser), alamatnya otomatis terseleksi dan label berubah jadi "tinggal ctrl+c".
- Semua target sentuh minimal 44px.
