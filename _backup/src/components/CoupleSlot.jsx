import { useState } from 'react'

// Place the illustration at public/couple.png (transparent PNG, ~800x1000).
// Until it exists, a soft monogram holds the space.
export default function CoupleSlot() {
  const [missing, setMissing] = useState(false)
  return (
    <div className="couple-slot">
      {missing ? (
        <span className="monogram script" aria-hidden="true">N<small>&amp;</small>H</span>
      ) : (
        <img src="/couple.png" alt="Nikhil and Harshada" onError={() => setMissing(true)} decoding="async" />
      )}
    </div>
  )
}
