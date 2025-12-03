import { useEffect, useRef } from 'react'
import './Manifesto.css'

export default function Manifesto() {
  const sectionRef = useRef(null)

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <section className="manifesto">
      <div className="page">
        <div className="manifesto__container reveal" ref={sectionRef}>
          <div className="manifesto__quote-mark">"</div>
          <blockquote className="manifesto__quote">
            Die besten digitalen Produkte entstehen nicht aus Pflichtenheften – sondern aus echtem Verständnis für das Geschäft dahinter.
          </blockquote>
          <div className="manifesto__author">
            <div className="manifesto__author-info">
              <span className="manifesto__author-name">Julian Faupel</span>
              <span className="manifesto__author-role">Gründer, Venture Kitchen</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
