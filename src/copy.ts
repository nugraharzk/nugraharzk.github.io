import type { Locale } from './locales'

export type Copy = {
  meta: { title: string; description: string }
  ui: {
    skipToContent: string
    navLabel: string
    homeLabel: string
    openPalette: string
    search: string
    language: string
    themeGroup: string
    themeLight: string
    themeDark: string
  }
  nav: { about: string; stack: string; works: string; contact: string }
  hero: {
    badge: string
    location: string
    kicker: string
    lead: string
    works: string
    email: string
  }
  spec: {
    title: string
    aria: string
    role: string
    focus: string
    zone: string
    base: string
    time: string
    values: { role: string; focus: string; zone: string; base: string }
  }
  about: {
    title: string
    note: string
    p1a: string
    years: string
    p1b: string
    p1c: string
    p2: string
    now: { label: string; text: string }[]
  }
  stack: {
    title: string
    note: string
    groups: { frontend: string; backend: string; tooling: string; learning: string }
  }
  works: {
    title: string
    note: string
    featured: string
    year: string
    openRepo: string
    allRepos: string
    allReposHint: string
  }
  contact: {
    eyebrow: string
    line1: string
    line2: string
    lead: string
    meta: { base: string; zone: string; open: string }
    openValue: string
    send: string
    copy: string
    copied: string
    manual: string
  }
  footer: { top: string; stack: string }
  palette: {
    title: string
    goTo: string
    placeholder: string
    empty: (query: string) => string
    move: string
    open: string
    close: string
  }
}

export const copy: Record<Locale, Copy> = {
  id: {
    meta: {
      title: 'Rizki Nugraha, Frontend Developer',
      description:
        'Portfolio Rizki Nugraha, frontend developer di Bandung. 5+ tahun bikin antarmuka web dengan React, TypeScript, dan Tailwind CSS.',
    },
    ui: {
      skipToContent: 'lompat ke konten',
      navLabel: 'Navigasi utama',
      homeLabel: 'Rizki Nugraha, ke atas',
      openPalette: 'Buka menu dan pencarian',
      search: 'cari',
      language: 'Bahasa',
      themeGroup: 'Tema tampilan',
      themeLight: 'terang',
      themeDark: 'gelap',
    },
    nav: { about: 'tentang', stack: 'stack', works: 'works', contact: 'kontak' },
    hero: {
      badge: 'buka buat kerja',
      location: 'bandung, id',
      kicker: '5+ tahun ngoding antarmuka web',
      lead: 'Gw ngubah desain jadi antarmuka yang jalan: komponen gampang dirawat, layout nggak geser, dan UI kebaca. Sekarang mulai masuk sisi server.',
      works: 'lihat works',
      email: 'email gw',
    },
    spec: {
      title: 'profil',
      aria: 'Ringkasan profil',
      role: 'peran',
      focus: 'fokus',
      zone: 'zona',
      base: 'basis',
      time: 'waktu',
      values: {
        role: 'frontend developer',
        focus: 'react, typescript',
        zone: 'wib, utc+7',
        base: 'bandung, id',
      },
    },
    about: {
      title: 'tentang',
      note: 'dari slicing desain sampai API',
      p1a: 'Gw ',
      years: '5+ tahun',
      p1b: ' frontend developer yang udah ',
      p1c:
        ' ngurusin antarmuka web. Ngubah desain jadi layout responsif, nyusun komponen yang gampang dirawat, sampai ngejar bug yang cuma rusak di satu browser.',
      p2: 'Fokusnya: UI yang cepat, aksesibel, dan nggak bikin user mikir. Belakangan mulai masuk sisi server, bikin API pakai NestJS dan ngulik Rust.',
      now: [
        {
          label: 'lagi digarap',
          text: 'Rapihin portfolio ini dan eksperimen Rust buat tooling kecil.',
        },
        {
          label: 'lagi dipelajari',
          text: 'NestJS buat API, Rust buat sisi backend, dan testing E2E yang benar-benar jalan.',
        },
        {
          label: 'lagi nyari',
          text: 'Role frontend atau fullstack, remote atau Bandung. Buka juga buat project kecil.',
        },
      ],
    },
    stack: {
      title: 'stack',
      note: 'yang dipakai tiap hari, bukan cuma di CV',
      groups: {
        frontend: 'frontend',
        backend: 'backend',
        tooling: 'tooling',
        learning: 'lagi dipelajari',
      },
    },
    works: {
      title: 'works',
      note: 'repo asli, klik buat lihat kodenya',
      featured: 'unggulan',
      year: 'tahun',
      openRepo: 'buka repo',
      allRepos: 'semua repo',
      allReposHint: 'github.com/nugraharzk',
    },
    contact: {
      eyebrow: 'kontak',
      line1: 'ada ide?',
      line2: 'gas bikin.',
      lead: 'Mau ngobrol soal project, role frontend, atau tanya kenapa layout-nya geser 1px. Email gw kebuka.',
      meta: { base: 'basis', zone: 'zona', open: 'terbuka' },
      openValue: 'project, role frontend',
      send: 'kirim email',
      copy: 'salin email',
      copied: 'email tersalin',
      manual: 'tinggal ctrl+c',
    },
    footer: {
      top: 'ke atas',
      stack: 'react 19, vite 8, typescript, tailwind 4',
    },
    palette: {
      title: 'Pencarian cepat',
      goTo: 'ke',
      placeholder: 'cari section atau link',
      empty: (query) => `nggak ada hasil buat "${query}"`,
      move: '↑↓ pilih',
      open: 'enter buka',
      close: 'esc tutup',
    },
  },

  en: {
    meta: {
      title: 'Rizki Nugraha, Frontend Developer',
      description:
        'Portfolio of Rizki Nugraha, frontend developer in Bandung. 5+ years building web interfaces with React, TypeScript, and Tailwind CSS.',
    },
    ui: {
      skipToContent: 'skip to content',
      navLabel: 'Main navigation',
      homeLabel: 'Rizki Nugraha, back to top',
      openPalette: 'Open menu and search',
      search: 'search',
      language: 'Language',
      themeGroup: 'Color theme',
      themeLight: 'light',
      themeDark: 'dark',
    },
    nav: { about: 'about', stack: 'stack', works: 'works', contact: 'contact' },
    hero: {
      badge: 'open to work',
      location: 'bandung, id',
      kicker: '5+ years building web interfaces',
      lead: "I turn designs into interfaces that hold up: components that stay easy to maintain, layouts that don't shift, and UI people can actually read. Lately I've been moving into the server side.",
      works: 'see works',
      email: 'email me',
    },
    spec: {
      title: 'profile',
      aria: 'Profile summary',
      role: 'role',
      focus: 'focus',
      zone: 'zone',
      base: 'based in',
      time: 'time',
      values: {
        role: 'frontend developer',
        focus: 'react, typescript',
        zone: 'wib, utc+7',
        base: 'bandung, id',
      },
    },
    about: {
      title: 'about',
      note: 'from slicing designs to building APIs',
      p1a: "I'm ",
      years: '5+ years',
      p1b: ", a frontend developer who's spent ",
      p1c:
        ' on web interfaces: turning designs into responsive layouts, building components that stay easy to maintain, and chasing bugs that only break in one browser.',
      p2: "The focus: fast, accessible UI that doesn't make people think. Lately I've been moving into the server side, building APIs with NestJS and digging into Rust.",
      now: [
        {
          label: 'currently building',
          text: 'Polishing this portfolio and running small Rust experiments for tooling.',
        },
        {
          label: 'currently learning',
          text: 'NestJS for APIs, Rust on the backend, and end-to-end tests that actually run.',
        },
        {
          label: 'currently looking for',
          text: 'Frontend or fullstack roles, remote or in Bandung. Small projects welcome too.',
        },
      ],
    },
    stack: {
      title: 'stack',
      note: 'what I actually use, not just what is on the CV',
      groups: {
        frontend: 'frontend',
        backend: 'backend',
        tooling: 'tooling',
        learning: 'learning',
      },
    },
    works: {
      title: 'works',
      note: 'real repos, click to read the code',
      featured: 'featured',
      year: 'year',
      openRepo: 'open repo',
      allRepos: 'all repos',
      allReposHint: 'github.com/nugraharzk',
    },
    contact: {
      eyebrow: 'contact',
      line1: 'got an idea?',
      line2: "let's build it.",
      lead: 'Want to talk about a project, a frontend role, or why your layout shifted by one pixel. My inbox is open.',
      meta: { base: 'based in', zone: 'zone', open: 'open to' },
      openValue: 'projects, frontend roles',
      send: 'send email',
      copy: 'copy email',
      copied: 'email copied',
      manual: 'just hit ctrl+c',
    },
    footer: {
      top: 'back to top',
      stack: 'react 19, vite 8, typescript, tailwind 4',
    },
    palette: {
      title: 'Quick search',
      goTo: 'go to',
      placeholder: 'search sections or links',
      empty: (query) => `no results for "${query}"`,
      move: '↑↓ move',
      open: 'enter open',
      close: 'esc close',
    },
  },
}
