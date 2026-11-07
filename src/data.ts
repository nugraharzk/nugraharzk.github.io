import type { Locale } from './locales'

export type SectionKey = 'about' | 'stack' | 'works' | 'contact'

export type GroupKey = 'frontend' | 'backend' | 'tooling' | 'learning'

export type Project = {
  title: string
  description: Record<Locale, string>
  stack: string[]
  href: string
  year: string
  featured?: boolean
}

export const profile = {
  name: 'Rizki Nugraha',
  role: 'Frontend Developer',
  location: 'Bandung, Indonesia',
  email: 'nugraharizki.works@gmail.com',
  years: '5+',
  links: {
    github: 'https://github.com/nugraharzk',
    linkedin: 'https://www.linkedin.com/in/nugraharzk/',
    gitlab: 'https://gitlab.com/nugraharzk',
  },
}

export const sections: { key: SectionKey; href: string }[] = [
  { key: 'about', href: '#about' },
  { key: 'stack', href: '#stack' },
  { key: 'works', href: '#works' },
  { key: 'contact', href: '#contact' },
]

export const stackGroups: { key: GroupKey; items: string[] }[] = [
  {
    key: 'frontend',
    items: [
      'React',
      'TypeScript',
      'JavaScript (ES6+)',
      'Vue.js',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
    ],
  },
  {
    key: 'backend',
    items: ['Node.js', 'Express', 'NestJS', 'PostgreSQL', 'MongoDB', 'REST API'],
  },
  {
    key: 'tooling',
    items: ['Git', 'Vite', 'Jest', 'ESLint', 'GitHub Actions', 'AWS'],
  },
  {
    key: 'learning',
    items: ['Rust', 'Testing E2E', 'Design system'],
  },
]

export const projects: Project[] = [
  {
    title: 'Maju Bareng AI',
    description: {
      id: 'Asisten belajar berbasis Gemini API. Repo dipisah frontend dan backend, dibangun buat program AI Hacktiv8.',
      en: 'A study assistant built on the Gemini API. Frontend and backend live in separate repos, built for the AI Hacktiv8 program.',
    },
    stack: ['TypeScript', 'Gemini API', 'REST'],
    href: 'https://github.com/nugraharzk/genai-fe',
    year: '2025',
    featured: true,
  },
  {
    title: 'Ticketbot',
    description: {
      id: 'Aplikasi ticketing buat lapor bug, error sistem, dan request fitur, plus chatbot di dalamnya. Final project Hacktiv8.',
      en: 'Ticketing app for bug reports, system errors, and feature requests, with a chatbot wired in. Final project at Hacktiv8.',
    },
    stack: ['TypeScript', 'Chatbot'],
    href: 'https://github.com/nugraharzk/ticketbot',
    year: '2025',
  },
  {
    title: 'Finance App',
    description: {
      id: 'Pencatat pemasukan dan pengeluaran dengan ringkasan. Frontend React, API NestJS dengan PostgreSQL.',
      en: 'Income and expense tracker with summaries. React frontend, NestJS API on PostgreSQL.',
    },
    stack: ['React', 'NestJS', 'PostgreSQL'],
    href: 'https://github.com/nugraharzk/finance-fe',
    year: '2025',
  },
  {
    title: 'Room Booking',
    description: {
      id: 'Booking ruang meeting: frontend TypeScript, API C#. Termasuk alur jadwal dan ketersediaan ruangan.',
      en: 'Meeting room booking: TypeScript frontend, C# API. Covers scheduling flow and room availability.',
    },
    stack: ['TypeScript', 'C#', 'REST'],
    href: 'https://github.com/nugraharzk/room-booking-frontend',
    year: '2024',
  },
  {
    title: 'PDPAAS',
    description: {
      id: 'PDP as a Service, tooling buat kebutuhan pelindungan data pribadi. Full TypeScript.',
      en: 'PDP as a Service: tooling for personal data protection work. Fully TypeScript.',
    },
    stack: ['TypeScript'],
    href: 'https://github.com/nugraharzk/pdpaas',
    year: '2024',
  },
  {
    title: 'Anthropometric Calculator',
    description: {
      id: 'Kalkulator antropometri buat menghitung indikator pertumbuhan dari input pengukuran tubuh.',
      en: 'Anthropometry calculator that turns body measurement inputs into growth indicators.',
    },
    stack: ['TypeScript'],
    href: 'https://github.com/nugraharzk/anthropometric-calculator',
    year: '2024',
  },
]
