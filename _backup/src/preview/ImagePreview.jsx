import { useEffect, useState } from 'react'
import { previewImages as images } from './previewImages.js'
import { Divider, Lotus } from '../components/Florals.jsx'
import './preview.css'

const KEY = 'nh-selected-image'

export default function ImagePreview() {
  const [index, setIndex] = useState(0)
  const [shown, setShown] = useState(true)
  const [selected, setSelected] = useState(() => localStorage.getItem(KEY))

  const count = images.length
  const img = images[index]

  const go = (dir) => {
    if (count < 2) return
    setShown(false)
    setTimeout(() => {
      setIndex((i) => (i + dir + count) % count)
      setShown(true)
    }, 220)
  }

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'ArrowRight') go(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const choose = () => {
    localStorage.setItem(KEY, img.id)
    setSelected(img.id)
  }

  const isSelected = img && selected === img.id
  const favourite = images.find((i) => i.id === selected)

  return (
    <main className="pv">
      <header className="pv-head">
        <Lotus size={44} />
        <h1 className="script">Choose Your Portrait</h1>
        <p>Nikhil &amp; Harshada · Style preview</p>
        <Divider />
      </header>

      {!count ? (
        <div className="pv-empty">
          <p>No images yet.</p>
          <small>
            Copy a picture into <code>public/previews</code> and add it to <code>src/preview/previewImages.js</code>.
          </small>
        </div>
      ) : (
        <>
          <div className="pv-stage">
            <button className="pv-nav" onClick={() => go(-1)} disabled={count < 2} aria-label="Previous image">‹</button>

            <figure className={`pv-frame ${isSelected ? 'chosen' : ''}`}>
              <div className={`pv-img ${shown ? 'in' : ''}`}>
                <img src={img.src} alt={img.title} style={{ objectPosition: img.focus || 'center 20%' }} decoding="async" />
                <span className="pv-fade" aria-hidden="true" />
              </div>
              {isSelected && <span className="pv-badge">♥ Selected</span>}
            </figure>

            <button className="pv-nav" onClick={() => go(1)} disabled={count < 2} aria-label="Next image">›</button>
          </div>

          <div className={`pv-info ${shown ? 'in' : ''}`}>
            <h2>{img.title}</h2>
            {img.description && <p>{img.description}</p>}
            <small>{index + 1} / {count}</small>
          </div>

          <button className={`pv-use ${isSelected ? 'on' : ''}`} onClick={choose} disabled={isSelected}>
            {isSelected ? '♥ Your Favourite' : 'Use This Image'}
          </button>

          {favourite && !isSelected && <p className="pv-fav">Current favourite: {favourite.title}</p>}
        </>
      )}

      <a className="pv-back" href="#/">← Back to invitation</a>
    </main>
  )
}
