import { useEffect, useState } from 'react'

const formatWib = () =>
  new Intl.DateTimeFormat('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Jakarta',
    hour12: false,
  }).format(new Date())

export function useWibClock() {
  const [time, setTime] = useState(formatWib)

  useEffect(() => {
    const id = window.setInterval(() => setTime(formatWib()), 30_000)
    return () => window.clearInterval(id)
  }, [])

  return time
}
