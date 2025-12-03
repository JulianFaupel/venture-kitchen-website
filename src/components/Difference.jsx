import { useEffect, useRef } from 'react'
import './Difference.css'

const comparisons = [
  {
    them: 'Wochen oder Monate bis zum ersten Ergebnis',
    us: 'Erste klickbare Prototypen nach wenigen Tagen'
  },
  {
    them: 'Feedback erst nach der Lieferung',
    us: 'Kontinuierliches Feedback in jeder Iteration'
  },
  {
    them: 'Pflichtenheft wird abgearbeitet',
    us: 'Echte Probleme werden gemeinsam verstanden'
  },
  {
    them: 'Backend-first, UI kommt später',
    us: 'UI/UX-Fokus: Was Nutzer sehen, zählt zuerst'
  },
  {
    them: 'Entwickler setzen um, was vorgegeben wird',
    us: 'Produktdenker hinterfragen und verbessern'
  },
  {
    them: 'Projekt endet mit Übergabe',
    us: 'Wir begleiten bis zum messbaren Erfolg'
  }
]

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
        <div className="difference__header reveal" ref={el => refs.current[0] = el}>
          <span className="difference__eyebrow">Der Unterschied</span>
          <h2 className="difference__title">Nicht nur umsetzen,<br /><span>sondern mitdenken.</span></h2>
        </div>

        <div className="difference__grid">
          {comparisons.map((item, i) => (
            <div
              key={i}
              className="difference__card reveal"
              ref={el => refs.current[i + 1] = el}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="difference__card-them">
                <span className="difference__label">Typisch</span>
                <p>{item.them}</p>
              </div>
              <div className="difference__card-arrow">→</div>
              <div className="difference__card-us">
                <span className="difference__label difference__label--us">Wir</span>
                <p>{item.us}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
