import { useState } from 'react'
import Envelope from './components/Envelope.jsx'
import Countdown from './components/Countdown.jsx'
import Reveal from './components/Reveal.jsx'
import MusicToggle from './components/MusicToggle.jsx'
import { Corner, Divider, FallingPetals, Lotus } from './components/Florals.jsx'
import CouplePortrait from './components/CouplePortrait.jsx'
import { events, venue } from './data.js'

export default function App() {
  const [stage, setStage] = useState('closed') // closed | opening | open

  const open = () => {
    if (stage !== 'closed') return
    setStage('opening')
    setTimeout(() => setStage('open'), 1800)
  }

  return (
    <>
      {stage !== 'open' && <Envelope opening={stage === 'opening'} onOpen={open} />}

      <main className={`site ${stage !== 'closed' ? 'show' : ''}`}>
        <section className="hero">
          <Corner className="tl" />
          <Corner className="tr" />
          <Corner className="bl" />
          <Corner className="br" />
          <FallingPetals />
          <p className="eyebrow">Together with their families</p>
          <CouplePortrait />
          <h1>
            <span className="script name">Nikhil</span>
            <span className="amp">&amp;</span>
            <span className="script name">Harshada</span>
          </h1>
          <p className="tagline">Two hearts, one beautiful beginning.</p>
          <Divider />
          <p className="dates">11 &amp; 12 December 2026</p>
          <p className="place">Swarna Sparsh Resort, Dhule</p>
          <Countdown />
          <a className="scroll-cue" href="#events" aria-label="Scroll to events">⌄</a>
        </section>

        <section className="section" id="events">
          <Reveal>
            <h2>The Celebrations</h2>
            <Divider />
          </Reveal>
          <ol className="timeline">
            {events.map((e, i) => (
              <li key={e.name}>
                {(i === 0 || events[i - 1].day !== e.day) && (
                  <Reveal>
                    <h4 className="day-head">{e.day}</h4>
                  </Reveal>
                )}
                <Reveal delay={i * 80}>
                  <article className={`card ${e.theme}`}>
                    <span className="card-icon" aria-hidden="true">{e.icon}</span>
                    <div>
                      <h3>{e.name}</h3>
                      <p className="note">{e.note}</p>
                    </div>
                    <time>{e.time}</time>
                    <i className="card-gem" aria-hidden="true" />
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </section>

        <section className="section venue">
          <Reveal>
            <h2>The Venue</h2>
            <Divider />
            <div className="venue-card">
              <Lotus size={48} />
              <h3>{venue.name}</h3>
              <p>{venue.address}</p>
              <a className="btn" href={venue.maps} target="_blank" rel="noopener noreferrer">
                Open in Google Maps
              </a>
            </div>
          </Reveal>
        </section>

        <footer className="footer">
          <Reveal>
            <div className="closing">
              <Lotus size={56} />
              <p className="script big">We look forward to celebrating with you.</p>
              <Divider />
              <p className="closing-names script">Nikhil &amp; Harshada</p>
              <p className="sign">11 &amp; 12 December 2026</p>
            </div>
          </Reveal>
        </footer>
      </main>

      {stage !== 'closed' && <MusicToggle />}
    </>
  )
}
