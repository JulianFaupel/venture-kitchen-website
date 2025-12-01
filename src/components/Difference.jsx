import { useEffect, useRef } from 'react'
import './Difference.css'

export default function Difference() {
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
    <section className="difference" id="difference">
      <div className="page">
        <div className="section-header reveal" ref={el => refs.current[0] = el}>
          <p className="section-header__eyebrow">Der Unterschied</p>
          <h2 className="section-header__title">Warum wir anders arbeiten</h2>
          <p className="section-header__subtitle">Kaufmännischer Background trifft auf technische Expertise.</p>
        </div>
        <div className="diff-grid">
          <div className="diff-card diff-card--them reveal" ref={el => refs.current[1] = el}>
            <p className="diff-card__label">Traditionelle Agenturen</p>
            <h3 className="diff-card__title">„Wir bauen, was Sie uns sagen"</h3>
            <p className="diff-card__text">Fokus auf Code-Qualität und Features. Kunde spezifiziert, Agentur setzt um. Nur technische Expertise.</p>
          </div>
          <div className="diff-card diff-card--us reveal" ref={el => refs.current[2] = el}>
            <p className="diff-card__label">Venture Kitchen</p>
            <h3 className="diff-card__title">„Wir entwickeln, was Sie brauchen"</h3>
            <p className="diff-card__text">Fokus auf Business-Outcomes. Gemeinsame Produktentwicklung. Business + Produkt + Tech Expertise.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
