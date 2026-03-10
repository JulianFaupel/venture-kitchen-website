import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function Impressum() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-primary">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="logo-gradient-text">VENTURE KITCHEN.</Link>
          </div>
        </nav>
      </header>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link to="/" className="text-primary/60 hover:text-primary text-lg flex items-center gap-2 mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5" /> Zurück zur Startseite
          </Link>

          <h1 className="text-4xl font-bold text-primary mb-8">Impressum</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-text-medium mb-6">
              <strong>Venture Kitchen</strong> ist eine Marke der JF Invest GmbH.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Angaben gemäß § 5 TMG</h2>

            <p className="text-text-medium leading-relaxed">
              JF Invest GmbH<br />
              Untere Lettenbergstr. 1<br />
              86420 Diedorf<br />
              Deutschland
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Vertreten durch</h2>
            <p className="text-text-medium">
              Geschäftsführer: Julian Faupel
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Kontakt</h2>
            <p className="text-text-medium">
              E-Mail: hello@venturekitchen.io
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Registereintrag</h2>
            <p className="text-text-medium">
              Eintragung im Handelsregister<br />
              Registergericht: Amtsgericht Augsburg<br />
              Registernummer: HRB 40210
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Umsatzsteuer-ID</h2>
            <p className="text-text-medium">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE292377693
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p className="text-text-medium">
              Julian Faupel<br />
              Untere Lettenbergstr. 1<br />
              86420 Diedorf
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Haftungsausschluss</h2>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Haftung für Inhalte</h3>
            <p className="text-text-medium text-sm leading-relaxed">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Haftung für Links</h3>
            <p className="text-text-medium text-sm leading-relaxed">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Urheberrecht</h3>
            <p className="text-text-medium text-sm leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Link to="/" className="logo-gradient-text">VENTURE KITCHEN.</Link>
            <p className="text-neutral-light text-sm">© {new Date().getFullYear()} Venture Kitchen. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Impressum;
