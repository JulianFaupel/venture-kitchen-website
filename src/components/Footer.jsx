import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="page">
        <div className="footer__inner">
          <div className="footer__brand">
            <div className="logo-mark">
              <div className="logo-mark__back"></div>
              <div className="logo-mark__front"></div>
            </div>
            <span className="footer__name">Venture Kitchen</span>
          </div>
          <p className="footer__copy">© {new Date().getFullYear()} Venture Kitchen. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
