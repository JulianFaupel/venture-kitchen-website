import { useEffect, useRef } from 'react'
import './Process.css'

const steps = [
  {
    number: 1,
    title: 'Business verstehen',
    text: 'Wir tauchen tief in Ihr Geschäftsmodell ein: Ziele, Kunden, Prozesse.'
  },
  {
    number: 2,
    title: 'Produkt konzipieren',
    text: 'Die entscheidende Transferleistung: Vom Business-Verständnis zur smarten Lösung.'
  },
  {
    number: 3,
    title: 'Iterativ entwickeln',
    text: 'Agile Entwicklung mit kontinuierlichem Feedback. Fokus auf Business-Outcomes.'
  },
  {
    number: 4,
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
          <p className="section-header__subtitle">Was viele Agenturen überspringen, ist für uns die Basis.</p>
        </div>
        <div className="process-steps">
          {steps.map((step, i) => (
            <div className="step reveal" key={step.number} ref={el => refs.current[i + 1] = el}>
              <div className="step__number">{step.number}</div>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__text">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
