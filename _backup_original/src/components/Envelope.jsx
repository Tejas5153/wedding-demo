import { Lotus } from './Florals.jsx'

export default function Envelope({ opening, onOpen }) {
  return (
    <div className={`envelope-screen ${opening ? 'opening' : ''}`}>
      <p className="env-hint">You are cordially invited</p>
      <h1 className="env-names script">Aarav &amp; Siya</h1>
      <p className="env-date">20 December 2026</p>
      <button className="envelope" onClick={onOpen} aria-label="Open the wedding invitation">
        <div className="env-card">
          <span className="script">A &amp; S</span>
        </div>
        <div className="env-back" />
        <div className="env-front" />
        <div className="env-flap" />
        <div className="env-seal">
          <Lotus size={44} />
        </div>
      </button>
      <p className="env-tap">Tap to open</p>
    </div>
  )
}
