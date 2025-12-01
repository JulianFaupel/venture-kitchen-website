import { useEffect, useRef } from 'react'
import './CTA.css'

export default function CTA() {
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
    <section className="cta-section" id="contact">
      <div className="page">
        <div className="cta-box reveal" ref={ref}>
          <h2 className="cta-box__title">Bereit für ein Gespräch?</h2>
          <p className="cta-box__text">Lassen Sie uns herausfinden, wie wir gemeinsam Ihr digitales Produkt entwickeln können.</p>
          <a href="mailto:hello@venturekitchen.de" className="btn btn-light">Kontakt aufnehmen</a>
        </div>
      </div>
    </section>
  )
}
