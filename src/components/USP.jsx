import { useEffect, useRef } from 'react'
import './USP.css'

const usps = [
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
    ),
    title: 'Wir wollen Ihr Geschäft verstehen',
    text: 'Bevor wir eine Zeile Code schreiben, verstehen wir Ihr Geschäftsmodell, Ihre Ziele und Ihre Herausforderungen.',
    size: 'normal'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
    ),
    title: 'Von der Business-Logik zur durchdachten Lösung',
    text: 'Hier liegt unsere Kernkompetenz: Wir übersetzen Geschäftsziele in durchdachte Produktlösungen. Diese Brücke zwischen Business und Tech – das ist unsere Wertschöpfung.',
    size: 'large'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
    title: 'Sparringspartner, nicht nur Umsetzer',
    text: 'Andere Agenturen warten auf Spezifikationen – wir entwickeln sie gemeinsam.',
    size: 'normal'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
    ),
    title: 'Full-Stack für Web, Mobile & SaaS',
    text: 'Moderne Technologie-Stacks, professionelle Architektur, sauberer Code.',
    size: 'normal'
  }
]

export default function USP() {
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
    <section className="usp">
      <div className="page">
        <div className="section-header reveal" ref={el => refs.current[0] = el}>
          <p className="section-header__eyebrow">Was uns ausmacht</p>
          <h2 className="section-header__title">Unsere Stärken</h2>
        </div>
        <div className="bento-grid">
          {usps.map((usp, i) => (
            <div
              className={`bento-card bento-card--${usp.size} reveal`}
              key={i}
              ref={el => refs.current[i + 1] = el}
            >
              <div className="bento-card__icon">{usp.icon}</div>
              <h3 className="bento-card__title">{usp.title}</h3>
              <p className="bento-card__text">{usp.text}</p>
            </div>
          ))}
          <a href="#testimonials" className="usp__ref-link reveal" ref={el => refs.current[usps.length + 1] = el}>
            <span className="usp__ref-text">Was unsere<br />Kunden sagen</span>
            <span className="usp__ref-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
