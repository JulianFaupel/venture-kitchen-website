import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="page">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">
              Wir bauen Software,<br />die Ihr <span>Geschäft</span> versteht.
            </h1>
            <p className="hero__subtitle">
              Keine Agentur, die Tickets abarbeitet. Wir sind Sparringspartner – von der Idee bis zum Produkt, das Nutzer lieben und das sich rechnet.
            </p>
            <div className="hero__btns">
              <a href="#contact" className="btn btn-primary">Kostenloses Erstgespräch</a>
              <a href="#case" className="btn btn-secondary">Beispielprojekt ansehen</a>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__stats">
              <div className="hero__stat">
                <span className="hero__stat-number">2 Wochen</span>
                <span className="hero__stat-label">bis zum ersten Prototyp</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-number">5+ Jahre</span>
                <span className="hero__stat-label">Erfahrung in Produkt & Tech</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
