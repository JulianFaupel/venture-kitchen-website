import { useEffect, useRef } from 'react'
import './Manifesto.css'

export default function Manifesto() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="manifesto">
      <div className="page">
        <div className="manifesto__inner reveal" ref={ref}>
          <p className="manifesto__quote">
            „Die entscheidende Lücke bei Agenturen: Sie haben brillante Entwickler, aber <span>keine Produktkompetenz</span>."
          </p>
          <p className="manifesto__text">
            Wir übersetzen Geschäftsziele in durchdachte digitale Produkte. Diese Transferleistung vom Business-Verständnis zur smarten Lösung – das ist unsere Wertschöpfung.
          </p>
        </div>
      </div>
    </section>
  )
}
