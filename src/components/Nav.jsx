import './Nav.css'

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <a href="#" className="nav__brand">
          <div className="logo-mark">
            <div className="logo-mark__back"></div>
            <div className="logo-mark__front"></div>
          </div>
          <span className="nav__name">Venture Kitchen</span>
        </a>
        <div className="nav__links">
          <a href="#difference" className="nav__link">Ansatz</a>
          <a href="#case" className="nav__link">Referenz</a>
          <a href="#services" className="nav__link">Leistungen</a>
        </div>
        <a href="#contact" className="nav__cta">Gespräch starten</a>
      </div>
    </nav>
  )
}
