import { useRef, useState } from 'react'

// Optional music: drop a file at public/music.mp3 to enable. Never autoplays.
export default function MusicToggle() {
  const audio = useRef(null)
  const [on, setOn] = useState(false)

  const toggle = async () => {
    const a = audio.current
    if (on) {
      a.pause()
      setOn(false)
    } else {
      try {
        await a.play()
        setOn(true)
      } catch {
        setOn(false)
      }
    }
  }

  return (
    <>
      <audio ref={audio} src="/music.mp3" loop preload="none" />
      <button className="music" onClick={toggle} aria-pressed={on} aria-label={on ? 'Pause music' : 'Play music'}>
        {on ? '❚❚' : '♪'}
      </button>
    </>
  )
}
