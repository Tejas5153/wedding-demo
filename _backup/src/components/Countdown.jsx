import { useEffect, useState } from 'react'
import { WEDDING_DATE } from '../data.js'

function diff() {
  const ms = Math.max(0, WEDDING_DATE - new Date())
  return {
    Days: Math.floor(ms / 864e5),
    Hours: Math.floor(ms / 36e5) % 24,
    Minutes: Math.floor(ms / 6e4) % 60,
    Seconds: Math.floor(ms / 1e3) % 60,
    done: ms === 0,
  }
}

export default function Countdown() {
  const [t, setT] = useState(diff)
  useEffect(() => {
    const id = setInterval(() => setT(diff()), 1000)
    return () => clearInterval(id)
  }, [])

  if (t.done) return <p className="script big">The celebrations have begun!</p>

  return (
    <div className="countdown" role="timer" aria-label="Countdown to the wedding">
      {['Days', 'Hours', 'Minutes', 'Seconds'].map((k) => (
        <div className="count-box" key={k}>
          <strong>{String(t[k]).padStart(2, '0')}</strong>
          <span>{k}</span>
        </div>
      ))}
    </div>
  )
}
