import { useEffect, useRef } from 'react'
import './Tracks.css'

export default function Tracks() {
  const refs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.1 }
    )

    refs.current.forEach(ref => ref && observer.observe(ref))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="tracks" id="services">
      <div className="page">
        <div className="section-header reveal" ref={el => refs.current[0] = el}>
          <p className="section-header__eyebrow">Zwei Wege</p>
          <h2 className="section-header__title">Wie wir helfen können</h2>
          <p className="section-header__subtitle">Ob Sie Ihr bestehendes Geschäft digitalisieren oder etwas Neues aufbauen wollen.</p>
        </div>
        <div className="tracks-grid">
          <div className="track-card reveal" ref={el => refs.current[1] = el}>
            <span className="track-card__number">01</span>
            <p className="track-card__eyebrow">Digitalisierung</p>
            <h3 className="track-card__title">Für etablierte Unternehmen</h3>
            <p className="track-card__text">Custom Software, die sich an echte Business-Logik anpasst und messbare Wettbewerbsvorteile schafft.</p>
            <ul className="track-card__list">
              <li>KMU und Mittelständler</li>
              <li>Effizientere Arbeitsabläufe</li>
              <li>Messbarer ROI</li>
            </ul>
          </div>
          <div className="track-card reveal" ref={el => refs.current[2] = el}>
            <span className="track-card__number">02</span>
            <p className="track-card__eyebrow">Neue Geschäftsmodelle</p>
            <h3 className="track-card__title">MVP & Validierung</h3>
            <p className="track-card__text">Gemeinsames Schärfen des Geschäftsmodells und MVP-Entwicklung mit Fokus auf echte Validierung.</p>
            <ul className="track-card__list">
              <li>Startups ohne Tech-Team</li>
              <li>Corporate Innovation</li>
              <li>Validierter Product-Market-Fit</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
