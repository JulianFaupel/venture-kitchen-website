import './Logos.css'

const logos = [
  { name: 'Kunde 1', placeholder: true },
  { name: 'Kunde 2', placeholder: true },
  { name: 'Kunde 3', placeholder: true },
  { name: 'Kunde 4', placeholder: true },
  { name: 'Kunde 5', placeholder: true },
  { name: 'Kunde 6', placeholder: true },
]

export default function Logos() {
  return (
    <section className="logos">
      <div className="page">
        <p className="logos__label">Vertrauen von</p>
        <div className="logos__track">
          <div className="logos__slide">
            {logos.map((logo, i) => (
              <div key={i} className="logos__item">
                <span className="logos__placeholder">{logo.name}</span>
              </div>
            ))}
            {logos.map((logo, i) => (
              <div key={`dup-${i}`} className="logos__item">
                <span className="logos__placeholder">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
