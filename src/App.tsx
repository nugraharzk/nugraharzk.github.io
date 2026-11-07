import { useEffect, useState } from 'react'
import { I18nProvider } from './i18n'
import { useI18n } from './hooks/useI18n'
import About from './components/About'
import CommandPalette from './components/CommandPalette'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Stack from './components/Stack'

type Theme = 'light' | 'dark'

export default function App() {
  return (
    <I18nProvider>
      <Page />
    </I18nProvider>
  )
}

function Page() {
  const { t } = useI18n()
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light',
  )
  const [paletteOpen, setPaletteOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* private mode: pilihan tema cuma berlaku di sesi ini */
    }
  }, [theme])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setPaletteOpen((open) => !open)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <div>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:border-[3px] focus:border-fg focus:bg-acid focus:px-3 focus:py-2 focus:font-mono focus:text-[11px] uppercase focus:text-noir"
      >
        {t.ui.skipToContent}
      </a>

      <Nav theme={theme} onTheme={setTheme} onOpenPalette={() => setPaletteOpen(true)} />

      <main id="main">
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Contact />
      </main>

      <Footer />

      {paletteOpen ? <CommandPalette onClose={() => setPaletteOpen(false)} /> : null}
    </div>
  )
}
