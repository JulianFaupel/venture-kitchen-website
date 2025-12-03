import { useEffect, useRef, useState } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    quote: 'Venture Kitchen hat nicht nur unsere Anforderungen umgesetzt, sondern uns geholfen, die richtigen Fragen zu stellen. Das Ergebnis war besser als alles, was wir uns vorgestellt hatten.',
    name: 'Max Mustermann',
    role: 'CEO, Beispiel GmbH',
    initials: 'MM'
  },
  {
    quote: 'Endlich ein Team, das mitdenkt. Die Zusammenarbeit fühlte sich an wie mit einem internen Team – nur mit mehr Expertise.',
    name: 'Anna Schmidt',
    role: 'Head of Product, Tech Startup',
    initials: 'AS'
  },
  {
    quote: 'Von der ersten Woche an hatten wir klickbare Prototypen. Das hat uns ermöglicht, früh Feedback einzuholen und das Produkt wirklich nutzerorientiert zu entwickeln.',
    name: 'Thomas Weber',
    role: 'Geschäftsführer, Mittelstand AG',
    initials: 'TW'
  }
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState('next')
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

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('next')
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const goNext = () => {
    setDirection('next')
    setActive((prev) => (prev + 1) % testimonials.length)
  }

  const goPrev = () => {
    setDirection('prev')
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goTo = (index) => {
    setDirection(index > active ? 'next' : 'prev')
    setActive(index)
  }

  return (
    <section className="testimonials" id="testimonials">
      <div className="page">
        <div className="testimonials__container reveal" ref={ref}>
          <p className="testimonials__eyebrow">Was Kunden sagen</p>

          <div className="testimonials__main">
            <button
              className="testimonials__arrow testimonials__arrow--prev"
              onClick={goPrev}
              aria-label="Vorheriges Testimonial"
            >
              ←
            </button>

            <div className={`testimonials__slider testimonials__slider--${direction}`}>
              {testimonials.map((item, i) => (
                <div
                  key={i}
                  className={`testimonials__slide ${i === active ? 'active' : ''}`}
                >
                  <blockquote className="testimonials__quote">
                    "{item.quote}"
                  </blockquote>
                  <div className="testimonials__author">
                    <div className="testimonials__avatar">
                      {item.initials}
                    </div>
                    <div className="testimonials__author-info">
                      <span className="testimonials__name">{item.name}</span>
                      <span className="testimonials__role">{item.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="testimonials__arrow testimonials__arrow--next"
              onClick={goNext}
              aria-label="Nächstes Testimonial"
            >
              →
            </button>
          </div>

          <div className="testimonials__dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonials__dot ${i === active ? 'active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
