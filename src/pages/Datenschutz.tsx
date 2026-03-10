import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function Datenschutz() {
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

          <h1 className="text-4xl font-bold text-primary mb-8">Datenschutzerklärung</h1>

          <div className="prose prose-lg max-w-none text-text-medium">

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">1. Datenschutz auf einen Blick</h2>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Allgemeine Hinweise</h3>
            <p className="leading-relaxed">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Datenerfassung auf dieser Website</h3>
            <p className="leading-relaxed">
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber:<br /><br />
              JF Invest GmbH<br />
              Untere Lettenbergstr. 1<br />
              86420 Diedorf<br />
              E-Mail: hello@venturekitchen.io
            </p>

            <p className="leading-relaxed mt-4">
              <strong>Wie erfassen wir Ihre Daten?</strong><br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen, z.B. über unser Kontaktformular oder die Terminbuchung. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>

            <p className="leading-relaxed mt-4">
              <strong>Wofür nutzen wir Ihre Daten?</strong><br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Wenn Sie über das Kontaktformular oder die Terminbuchung Daten übermitteln, nutzen wir diese ausschließlich zur Bearbeitung Ihrer Anfrage.
            </p>

            <p className="leading-relaxed mt-4">
              <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese jederzeit für die Zukunft widerrufen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">2. Hosting</h2>
            <p className="leading-relaxed">
              Diese Website wird bei Cloudflare, Inc. gehostet (Cloudflare Pages). Cloudflare kann beim Aufruf dieser Website personenbezogene Daten erfassen und verarbeiten (z.B. IP-Adressen). Details entnehmen Sie der Datenschutzerklärung von Cloudflare: <a href="https://www.cloudflare.com/privacypolicy/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">https://www.cloudflare.com/privacypolicy/</a>
            </p>
            <p className="leading-relaxed mt-2">
              Die Verwendung von Cloudflare erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen und sicheren Darstellung unserer Website.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Datenschutz</h3>
            <p className="leading-relaxed">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Hinweis zur verantwortlichen Stelle</h3>
            <p className="leading-relaxed">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
              JF Invest GmbH<br />
              Untere Lettenbergstr. 1<br />
              86420 Diedorf<br /><br />
              Geschäftsführer: Julian Faupel<br />
              E-Mail: hello@venturekitchen.io
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Speicherdauer</h3>
            <p className="leading-relaxed">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p className="leading-relaxed">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
            <p className="leading-relaxed">
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes Bayern:<br /><br />
              Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)<br />
              Promenade 18<br />
              91522 Ansbach<br />
              <a href="https://www.lda.bayern.de" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">www.lda.bayern.de</a>
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">4. Datenerfassung auf dieser Website</h2>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Cookies</h3>
            <p className="leading-relaxed">
              Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Einige Cookies sind technisch notwendig (z.B. Session-Cookies). Andere Cookies dienen dazu, das Nutzerverhalten auszuwerten und werden nur mit Ihrer Einwilligung gesetzt. Sie können Ihre Cookie-Einstellungen jederzeit über den Cookie-Banner anpassen oder widerrufen.
            </p>
            <p className="leading-relaxed mt-2">
              Technisch notwendige Cookies werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Alle anderen Cookies werden nur nach Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO gesetzt.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Kontaktformular & Terminbuchung</h3>
            <p className="leading-relaxed">
              Wenn Sie uns per Kontaktformular oder über die Terminbuchung Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="leading-relaxed mt-2">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p className="leading-relaxed mt-2">
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Server-Log-Dateien</h3>
            <p className="leading-relaxed">
              Der Provider der Seiten (Cloudflare) erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind: Browsertyp und -version, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.
            </p>
            <p className="leading-relaxed mt-2">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">5. Analyse-Tools und Werbung</h2>
            <p className="leading-relaxed">
              Diese Website verwendet derzeit keine Analyse-Tools oder Werbe-Tracker. Sollte sich dies ändern, werden wir diese Datenschutzerklärung entsprechend aktualisieren und Ihre Einwilligung über den Cookie-Banner einholen.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">6. Ihre Rechte</h2>
            <p className="leading-relaxed">
              Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
            </ul>

            <p className="leading-relaxed mt-6 text-sm text-text-medium/70">
              Stand: März 2026
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

export default Datenschutz;
