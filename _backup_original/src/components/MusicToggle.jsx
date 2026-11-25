import { forwardRef, useImperativeHandle, useRef, useState } from 'react'

const VOLUME = 0.25

// Soft background music. Starts only after the guest taps the envelope (see App),
// never on page load. The button lets guests pause or resume.
const MusicToggle = forwardRef(function MusicToggle({ visible }, ref) {
  const audio = useRef(null)
  const [on, setOn] = useState(false)

  const play = async () => {
    const a = audio.current
    a.volume = VOLUME
    try {
      await a.play()
      setOn(true)
    } catch {
      setOn(false)
    }
  }

  const pause = () => {
    audio.current.pause()
    setOn(false)
  }

  useImperativeHandle(ref, () => ({ play }))

  return (
    <>
      <audio ref={audio} src="/music.mp3" loop preload="auto" />
      {visible && (
        <button className="music" onClick={on ? pause : play} aria-pressed={on} aria-label={on ? 'Pause music' : 'Play music'}>
          {on ? '❚❚' : '♪'}
        </button>
      )}
    </>
  )
})

export default MusicToggle
