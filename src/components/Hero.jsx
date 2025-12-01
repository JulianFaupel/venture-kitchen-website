import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="page">
        <div className="hero__content">
          <div className="hero__text">
            <span className="hero__eyebrow">Software-Agentur</span>
            <h1 className="hero__title">
              Wir entwickeln Software wie <span>Unternehmer</span>, nicht wie Entwickler.
            </h1>
            <p className="hero__subtitle">
              Die meisten Agenturen setzen um, was man ihnen sagt. Wir verstehen erst Ihr Geschäft – und bauen dann die richtige Lösung.
            </p>
            <div className="hero__btns">
              <a href="#contact" className="btn btn-primary">Projekt besprechen</a>
              <a href="#difference" className="btn btn-secondary">Der Unterschied</a>
            </div>
          </div>
          <div className="hero__visual">
            <div className="circles">
              <div className="circle circle--1"></div>
              <div className="circle circle--2"></div>
              <div className="circle circle--3"></div>
              <div className="circle circle--4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
