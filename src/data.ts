export type Project = {
  title: string
  description: string
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

export const nav = [
  { label: 'about', href: '#about' },
  { label: 'stack', href: '#stack' },
  { label: 'works', href: '#works' },
  { label: 'contact', href: '#contact' },
]

export const specRows = [
  { label: 'peran', value: 'frontend developer' },
  { label: 'fokus', value: 'react, typescript' },
  { label: 'zona', value: 'wib, utc+7' },
  { label: 'basis', value: 'bandung, id' },
]

export const stackGroups = [
  {
    title: 'frontend',
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
    title: 'backend',
    items: ['Node.js', 'Express', 'NestJS', 'PostgreSQL', 'MongoDB', 'REST API'],
  },
  {
    title: 'tooling',
    items: ['Git', 'Vite', 'Jest', 'ESLint', 'GitHub Actions', 'AWS'],
  },
  {
    title: 'lagi dipelajari',
    items: ['Rust', 'Testing E2E', 'Design system'],
  },
]

export const projects: Project[] = [
  {
    title: 'Maju Bareng AI',
    description:
      'Asisten belajar berbasis Gemini API. Repo dipisah frontend dan backend, dibangun buat program AI Hacktiv8.',
    stack: ['TypeScript', 'Gemini API', 'REST'],
    href: 'https://github.com/nugraharzk/genai-fe',
    year: '2025',
    featured: true,
  },
  {
    title: 'Ticketbot',
    description:
      'Aplikasi ticketing buat lapor bug, error sistem, dan request fitur, plus chatbot di dalamnya. Final project Hacktiv8.',
    stack: ['TypeScript', 'Chatbot'],
    href: 'https://github.com/nugraharzk/ticketbot',
    year: '2025',
  },
  {
    title: 'Finance App',
    description:
      'Pencatat pemasukan dan pengeluaran dengan ringkasan. Frontend React, API NestJS dengan PostgreSQL.',
    stack: ['React', 'NestJS', 'PostgreSQL'],
    href: 'https://github.com/nugraharzk/finance-fe',
    year: '2025',
  },
  {
    title: 'Room Booking',
    description:
      'Booking ruang meeting: frontend TypeScript, API C#. Termasuk alur jadwal dan ketersediaan ruangan.',
    stack: ['TypeScript', 'C#', 'REST'],
    href: 'https://github.com/nugraharzk/room-booking-frontend',
    year: '2024',
  },
  {
    title: 'PDPAAS',
    description:
      'PDP as a Service, tooling buat kebutuhan pelindungan data pribadi. Full TypeScript.',
    stack: ['TypeScript'],
    href: 'https://github.com/nugraharzk/pdpaas',
    year: '2024',
  },
  {
    title: 'Anthropometric Calculator',
    description:
      'Kalkulator antropometri buat menghitung indikator pertumbuhan dari input pengukuran tubuh.',
    stack: ['TypeScript'],
    href: 'https://github.com/nugraharzk/anthropometric-calculator',
    year: '2024',
  },
]

export const sekarang = [
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
]
