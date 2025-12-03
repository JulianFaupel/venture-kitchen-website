import { useEffect, useRef } from 'react'
import './Process.css'

const steps = [
  {
    number: '01',
    title: 'Business verstehen',
    text: 'Wir tauchen tief in Ihr Geschäftsmodell ein: Ziele, Kunden, Prozesse.'
  },
  {
    number: '02',
    title: 'Produkt konzipieren',
    text: 'Die entscheidende Transferleistung: Vom Business-Verständnis zur smarten Lösung.'
  },
  {
    number: '03',
    title: 'Iterativ entwickeln',
    text: 'Agile Entwicklung mit kontinuierlichem Feedback. Fokus auf Business-Outcomes.'
  },
  {
    number: '04',
    title: 'Validieren & optimieren',
    text: 'Der Launch ist der Anfang, nicht das Ende. Lernen, messen, verbessern.'
  }
]

export default function Process() {
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
    <section className="process">
      <div className="page">
        <div className="section-header reveal" ref={el => refs.current[0] = el}>
          <p className="section-header__eyebrow">Unser Prozess</p>
          <h2 className="section-header__title">Von der Idee zum Produkt</h2>
        </div>
        <div className="process-timeline">
          {steps.map((step, i) => (
            <div
              className="process-step reveal"
              key={step.number}
              ref={el => refs.current[i + 1] = el}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="process-step__number">{step.number}</div>
              <div className="process-step__content">
                <h3 className="process-step__title">{step.title}</h3>
                <p className="process-step__text">{step.text}</p>
              </div>
              {i < steps.length - 1 && <div className="process-step__connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
