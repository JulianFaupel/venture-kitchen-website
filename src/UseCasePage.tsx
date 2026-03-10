import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Building2, Users, TrendingUp, Clock, CheckCircle, Linkedin, Mail, ChevronRight, MapPin } from 'lucide-react';

interface CaseStudy {
  company: string;
  location: string;
  industry: string;
  employees: string;
  situation: string;
  problem: string;
  solution: string;
  results: string[];
  quote?: string;
  quoteRole?: string;
}

interface UseCaseData {
  title: string;
  subtitle: string;
  description: string;
  cases: CaseStudy[];
}

const useCaseData: Record<string, UseCaseData> = {
  dokumentenverarbeitung: {
    title: 'Dokumentenverarbeitung',
    subtitle: 'Rechnungen, Verträge und Formulare automatisch erfassen, prüfen und ins richtige System übertragen.',
    description: 'Jedes Unternehmen verarbeitet Dokumente. Die Frage ist nur: Wie viel Zeit verbrennt Ihr Team damit, Daten von Papier in Systeme zu tippen?',
    cases: [
      {
        company: 'Mittelständischer Großhändler',
        location: 'Raum Augsburg',
        industry: 'Handel / Distribution',
        employees: '~45 Mitarbeiter',
        situation: 'Das Buchhaltungsteam (3 Personen) erfasste täglich 60-80 Eingangsrechnungen manuell in DATEV. Jede Rechnung wurde ausgedruckt, mit Kontierungsstempel versehen, abgetippt und abgelegt.',
        problem: 'Pro Rechnung vergingen 4-6 Minuten. Bei 70 Rechnungen am Tag waren das über 5 Stunden reine Tipparbeit. Fehlerquote: ca. 3% — bei einem Einkaufsvolumen von 12 Mio. € pro Jahr nicht trivial.',
        solution: 'Wir haben den kompletten Rechnungseingang übernommen. Rechnungen kommen per Mail oder Scan rein, werden automatisch ausgelesen, gegen Bestellungen abgeglichen und direkt in DATEV gebucht. Unklarheiten gehen als Rückfrage ans Team.',
        results: [
          'Bearbeitungszeit pro Rechnung: von 5 Min. auf 30 Sek.',
          'Fehlerquote unter 0,5%',
          'Eine Vollzeitstelle konnte auf strategische Aufgaben umgeschichtet werden',
          'Monatsabschluss 3 Tage früher fertig'
        ],
        quote: 'Wir haben uns gefragt, warum wir das nicht schon vor Jahren gemacht haben.',
        quoteRole: 'Leiter Finanzbuchhaltung'
      },
      {
        company: 'Regionaler Energieversorger',
        location: 'Schwaben',
        industry: 'Energiewirtschaft',
        employees: '~120 Mitarbeiter',
        situation: 'Vertragsänderungen, Zählerwechsel-Protokolle und Kundenanträge kamen als PDF, Fax und Papierpost rein. Drei Sachbearbeiter verteilten die Dokumente manuell auf die Fachabteilungen.',
        problem: 'Durchschnittliche Bearbeitungszeit eines Kundenantrags: 2,5 Tage. Hauptgrund: Dokumente lagen im falschen Stapel oder wurden übersehen. Kunden beschwerten sich über lange Reaktionszeiten.',
        solution: 'Alle eingehenden Dokumente werden jetzt zentral erfasst, klassifiziert und automatisch dem richtigen Vorgang zugeordnet. Dringende Anträge werden priorisiert, fehlende Unterlagen sofort angefordert.',
        results: [
          'Bearbeitungszeit von 2,5 Tagen auf 4 Stunden',
          'Kundenbeschwerden um 60% reduziert',
          'Kein Dokument geht mehr verloren',
        ],
        quote: 'Unsere Kunden merken den Unterschied. Das ist das beste Kompliment.',
        quoteRole: 'Abteilungsleiter Kundenservice'
      }
    ]
  },
  reporting: {
    title: 'Reporting & Datenabgleich',
    subtitle: 'Daten aus verschiedenen Systemen zusammenführen — automatisch, fehlerfrei, in Echtzeit.',
    description: 'Die Zahlen sind da. Nur leider in 5 verschiedenen Systemen, 3 Excel-Dateien und einem Ordner auf dem Desktop vom Geschäftsführer.',
    cases: [
      {
        company: 'Handwerksbetrieb mit 3 Standorten',
        location: 'Augsburg, Friedberg, Mering',
        industry: 'Elektrohandwerk',
        employees: '~35 Mitarbeiter',
        situation: 'Jede Woche erstellte die Assistenz der GF einen Statusbericht: Umsatz aus dem Faktura-System, offene Posten aus der Buchhaltung, Projektstand aus Excel-Listen der Bauleiter, Materialkosten aus dem Großhandels-Portal.',
        problem: 'Der Bericht dauerte jeden Freitag 4 Stunden. Bis er fertig war, waren die Zahlen teilweise schon veraltet. Entscheidungen im Montags-Meeting basierten auf Daten von vor einer Woche.',
        solution: 'Wir ziehen die Daten aus allen Quellen automatisch zusammen und erstellen ein Live-Dashboard. Der Bericht generiert sich selbst — jeden Morgen aktuell.',
        results: [
          '4 Stunden Berichtsarbeit pro Woche eingespart',
          'Tagesaktuelle Zahlen statt Wochenbericht',
          'Geschäftsführer trifft Entscheidungen auf Basis von Echtzeitdaten',
          'Materialkosten-Abweichungen werden sofort sichtbar'
        ],
        quote: 'Freitagnachmittag ist jetzt wieder Freitagnachmittag — nicht Excel-Nachmittag.',
        quoteRole: 'Assistenz der Geschäftsführung'
      },
      {
        company: 'Immobilienverwaltung',
        location: 'München',
        industry: 'Immobilien',
        employees: '~20 Mitarbeiter',
        situation: 'Mieteinnahmen kamen über 3 Bankkonten, Nebenkostenabrechnungen lagen in der Hausverwaltungssoftware, Leerstandsdaten in einer Excel-Liste. Für die monatliche Eigentümer-Auswertung musste alles manuell zusammengetragen werden.',
        problem: '2 Tage pro Monat für die Auswertung von 180 Einheiten. Fehler fielen erst auf, wenn Eigentümer nachfragten.',
        solution: 'Automatischer Abgleich aller Zahlungseingänge mit Soll-Mieten. Leerstand, Rückstände und Nebenkostenstatus in einem Dashboard. Eigentümer-Reports werden automatisch generiert.',
        results: [
          'Monatliche Auswertung in 2 Stunden statt 2 Tagen',
          'Mietrückstände werden am selben Tag erkannt',
          'Eigentümer erhalten Reports automatisch per Mail'
        ]
      },
      {
        company: 'Steuerkanzlei',
        location: 'Augsburg',
        industry: 'Steuerberatung',
        employees: '~12 Mitarbeiter',
        situation: 'Mandantendaten in DATEV, Kommunikation in Outlook, Fristen in einer Excel-Liste, Belegstatus im DMS. Für den Wochenstatus musste die Kanzleileitung 4 Systeme öffnen.',
        problem: 'Keine Übersicht, welcher Mandant in welchem Status ist. Fristen wurden manchmal knapp, weil der Überblick fehlte.',
        solution: 'Ein zentrales Dashboard zeigt pro Mandant: offene Belege, nächste Frist, letzter Kontakt, aktueller Bearbeitungsstand. Daten kommen automatisch aus allen Systemen.',
        results: [
          'Keine Fristversäumnisse mehr seit Einführung',
          'Kanzleileitung spart 3h pro Woche an Statusabfragen',
          'Mitarbeiter sehen selbst, was als nächstes dran ist'
        ],
        quote: 'Wir haben endlich den Überblick, den wir immer wollten — ohne dass jemand ihn pflegen muss.',
        quoteRole: 'Kanzleiinhaber'
      }
    ]
  },
  angebotserstellung: {
    title: 'Angebotserstellung',
    subtitle: 'Vom Angebot zur Rechnung — ohne Copy-Paste, ohne veraltete Preise, ohne Fehler.',
    description: 'Angebote sind der erste Eindruck beim Kunden. Wenn sie 3 Tage dauern und Fehler enthalten, verlieren Sie Aufträge — nicht weil Sie zu teuer sind, sondern weil Sie zu langsam sind.',
    cases: [
      {
        company: 'SHK-Fachbetrieb',
        location: 'Landsberg am Lech',
        industry: 'Sanitär / Heizung / Klima',
        employees: '~25 Mitarbeiter',
        situation: 'Der Meister erstellte Angebote abends nach der Baustelle. Preise wurden aus Großhandels-Katalogen oder der letzten Bestellung kopiert. Textbausteine lagen in verschiedenen Word-Dokumenten.',
        problem: 'Ein Angebot dauerte 45-90 Minuten. Oft mit veralteten Preisen. Kunden warteten 3-5 Tage. Bei 15 Angeboten pro Woche waren das fast 2 volle Arbeitstage.',
        solution: 'Angebote werden jetzt aus strukturierten Leistungspositionen zusammengestellt. Preise werden automatisch aus der aktuellen Großhandels-Schnittstelle gezogen. Der Meister wählt Positionen aus, der Rest passiert automatisch.',
        results: [
          'Angebotserstellung von 60 Min. auf 10 Min.',
          'Immer aktuelle Preise — keine Nachkalkulationen mehr',
          'Angebotsversand am selben Tag statt nach 3-5 Tagen',
          'Auftragsquote um 15% gestiegen (schnellere Reaktion)'
        ],
        quote: 'Meine Abende gehören wieder mir. Und die Angebote sind besser als vorher.',
        quoteRole: 'Meister und Inhaber'
      },
      {
        company: 'IT-Systemhaus',
        location: 'Nürnberg',
        industry: 'IT-Dienstleistung',
        employees: '~40 Mitarbeiter',
        situation: 'Komplexe IT-Angebote mit Hardware, Lizenzen, Dienstleistung und Wartung. Jedes Angebot war ein individuelles Word-Dokument. Kalkulation in Excel, Texte aus alten Angeboten kopiert.',
        problem: 'Jedes Angebot war ein Unikat — 2-4 Stunden Arbeit. Vertriebsleiter musste jedes prüfen, weil Margen oft falsch kalkuliert waren. Engpass: maximal 20 Angebote pro Woche.',
        solution: 'Modulares Angebotssystem: Standardpositionen mit hinterlegten Margen, automatische Kalkulation, professionelles PDF. Sonderposten werden ergänzt, aber die Basis steht in Minuten.',
        results: [
          'Angebotszeit von 3h auf 30 Min.',
          'Margen-Fehler eliminiert (automatische Kalkulation)',
          'Kapazität: 50+ Angebote pro Woche',
          'Einheitliches, professionelles Erscheinungsbild'
        ]
      }
    ]
  },
  onboarding: {
    title: 'Onboarding & Checklisten',
    subtitle: 'Kunden- oder Mitarbeiter-Onboarding strukturiert automatisieren. Kein Schritt wird vergessen.',
    description: 'Onboarding ist der Moment, in dem der erste Eindruck zementiert wird. Wenn beim neuen Kunden oder Mitarbeiter am ersten Tag die Hälfte fehlt, beginnt die Beziehung mit einer Enttäuschung.',
    cases: [
      {
        company: 'Personaldienstleister',
        location: 'Ingolstadt',
        industry: 'Zeitarbeit / HR',
        employees: '~60 Mitarbeiter',
        situation: '150 neue Mitarbeiter pro Monat. Jeder braucht: Vertrag, Steuer-ID, Sozialversicherungsnachweis, Gesundheitszeugnis (je nach Einsatz), Arbeitskleidung, Einweisung, Einsatzplanung.',
        problem: 'Die Disponenten arbeiteten mit ausgedruckten Checklisten. Trotzdem fehlten regelmäßig Unterlagen. Am Einsatztag stand jeder 5. Mitarbeiter ohne vollständige Papiere da. Kunden beschwerten sich.',
        solution: 'Digitaler Onboarding-Workflow: Jeder neue Mitarbeiter bekommt automatisch seine Checkliste. Fehlende Dokumente werden automatisch angemahnt. Der Disponent sieht auf einen Blick, wer einsatzbereit ist.',
        results: [
          'Unvollständige Unterlagen am Einsatztag: von 20% auf unter 2%',
          'Disponenten sparen 1h pro Tag an Nachfass-Telefonaten',
          'Kundenzufriedenheit messbar gestiegen',
        ],
        quote: 'Endlich steht niemand mehr am ersten Tag ohne Papiere da.',
        quoteRole: 'Niederlassungsleiter'
      },
      {
        company: 'Software-Agentur',
        location: 'München',
        industry: 'IT / Digitalwirtschaft',
        employees: '~15 Mitarbeiter',
        situation: 'Neukunden-Onboarding: Zugänge einrichten, Projekt-Setup, Kickoff planen, Briefing-Dokumente erstellen, Slack-Channel anlegen, Zeiterfassung einrichten. Alles lag beim Projektleiter im Kopf.',
        problem: 'Wenn der Projektleiter krank war, fiel die Hälfte unter den Tisch. Kunden fühlten sich in der ersten Woche oft „vergessen".',
        solution: 'Standardisierter Onboarding-Flow: Vertragsunterschrift triggert automatisch alle Schritte. Jeder Beteiligte bekommt seine Aufgaben, Fristen werden überwacht.',
        results: [
          'Onboarding-Zeit von 5 Tagen auf 1 Tag',
          'Kein Schritt wird vergessen — unabhängig von Personen',
          'Kunden-Feedback: „Das war das professionellste Onboarding, das wir je erlebt haben"'
        ]
      },
      {
        company: 'Arztpraxis-Verbund',
        location: 'Großraum Augsburg',
        industry: 'Gesundheitswesen',
        employees: '~80 Mitarbeiter (4 Standorte)',
        situation: 'Neue MFAs brauchten: Zugänge zur Praxissoftware, Einweisung Hygiene, Schulung Abrechnung, Schlüssel, Dienstkleidung, Einarbeitung am Empfang. Jeder Standort machte es anders.',
        problem: 'Einarbeitung dauerte 3-4 Wochen, weil Schulungen nicht koordiniert waren. Neue Mitarbeiter fühlten sich alleingelassen.',
        solution: 'Einheitlicher Onboarding-Plan über alle Standorte. Automatische Terminierung von Schulungen, Fortschrittstracking, Feedback-Schleifen nach Woche 1, 2 und 4.',
        results: [
          'Einarbeitungszeit von 4 auf 2 Wochen',
          'Einheitlicher Standard über alle Standorte',
          'Frühfluktuation um 40% gesunken'
        ],
        quote: 'Die Neuen fühlen sich vom ersten Tag an willkommen — das hatten wir vorher nie geschafft.',
        quoteRole: 'Praxismanagerin'
      }
    ]
  },
  'email-posteingang': {
    title: 'E-Mail & Posteingang',
    subtitle: 'Eingehende Anfragen automatisch sortieren, kategorisieren und an die richtige Stelle weiterleiten.',
    description: 'Die Inbox ist der Flaschenhals vieler Unternehmen. Alles kommt rein — Rechnungen, Kundenanfragen, Spam, Verträge — und jemand muss entscheiden, wohin es gehört.',
    cases: [
      {
        company: 'Hausverwaltung',
        location: 'Augsburg',
        industry: 'Immobilienverwaltung',
        employees: '~12 Mitarbeiter',
        situation: '200+ Mails pro Tag auf info@. Mieterbeschwerden, Handwerker-Angebote, Eigentümer-Rückfragen, Behördenpost. Eine Mitarbeiterin sortierte den ganzen Vormittag Mails in Ordner und leitete weiter.',
        problem: 'Dringende Schadensmeldungen gingen im Rauschen unter. Mieter beschwerten sich, dass niemand reagiert. Die Mitarbeiterin war frustriert — und der Rest des Teams wusste nie, was noch offen ist.',
        solution: 'Alle eingehenden Mails werden automatisch klassifiziert: Schadensmeldung, Anfrage, Rechnung, Info. Dringendes wird sofort eskaliert, Routineanfragen automatisch beantwortet oder zugeordnet.',
        results: [
          'Reaktionszeit bei Schadensmeldungen: von 2 Tagen auf 2 Stunden',
          'Die Mitarbeiterin arbeitet jetzt in der Eigentümerbetreuung statt im Posteingang',
          '30% der Anfragen werden automatisch beantwortet (FAQ-artige Fragen)'
        ],
        quote: 'Früher war die Inbox mein Feind. Jetzt kümmert sie sich quasi um sich selbst.',
        quoteRole: 'Teamleiterin Mietverwaltung'
      },
      {
        company: 'Ingenieurbüro',
        location: 'Regensburg',
        industry: 'Bauplanung',
        employees: '~8 Mitarbeiter',
        situation: 'Ausschreibungen, Planfreigaben, Behördenkorrespondenz, Bauherren-Rückfragen — alles per Mail. Der Inhaber war der einzige, der wusste, was wohin gehört.',
        problem: 'Wenn der Chef im Urlaub war, blieben Mails tagelang unbearbeitet. Fristen wurden fast verpasst. Das Team traute sich nicht, ohne ihn zu entscheiden.',
        solution: 'Eingehende Mails werden nach Projekt, Absender und Dringlichkeit sortiert. Fristgebundene Post wird automatisch markiert. Das Team sieht eine priorisierte Aufgabenliste statt einer chaotischen Inbox.',
        results: [
          'Chef kann im Urlaub sein — Betrieb läuft weiter',
          'Keine verpassten Fristen mehr',
          'Team arbeitet eigenständiger'
        ]
      }
    ]
  },
  'ki-unternehmen': {
    title: 'KI im Unternehmen',
    subtitle: 'ChatGPT & Co. datenschutzkonform einsetzen — an Ihre eigenen Daten angebunden.',
    description: 'Jeder redet über KI. Aber zwischen „mein Azubi nutzt ChatGPT" und „KI ist in unsere Prozesse integriert" liegt ein Ozean. Wir bauen die Brücke.',
    cases: [
      {
        company: 'Mittelständische Anwaltskanzlei',
        location: 'München',
        industry: 'Rechtsberatung',
        employees: '~25 Mitarbeiter (8 Anwälte)',
        situation: 'Die Anwälte nutzten ChatGPT privat für Recherche — aber mit Bauchschmerzen wegen Datenschutz. Mandanteninformationen durften nicht in externe Tools. Gleichzeitig stiegen die Recherche-Aufwände bei komplexen Fällen.',
        problem: 'Entweder man nutzte KI und riskierte Datenschutzverstöße, oder man recherchierte alles manuell und verbrannte Stunden. Ein Referendar brauchte 3-4 Stunden für eine Rechtsprechungsübersicht.',
        solution: 'On-Premise KI-System, angebunden an die kanzleieigene Urteilsdatenbank und Vertragsmuster. Datenschutzkonform — keine Daten verlassen das Haus. Anwälte können in natürlicher Sprache suchen und sich Zusammenfassungen erstellen lassen.',
        results: [
          'Recherche-Zeit für Rechtsprechungsübersichten: von 3h auf 20 Min.',
          'Vertragsprüfung mit KI-Unterstützung: Auffälligkeiten werden automatisch markiert',
          '100% DSGVO-konform — Daten bleiben in der Kanzlei',
          'Akzeptanz im Team: hoch, weil es den Alltag spürbar erleichtert'
        ],
        quote: 'Endlich können wir KI nutzen, ohne uns Sorgen um unsere Mandanten machen zu müssen.',
        quoteRole: 'Seniorpartner'
      },
      {
        company: 'Technischer Großhandel',
        location: 'Ulm / Neu-Ulm',
        industry: 'Handel',
        employees: '~90 Mitarbeiter',
        situation: '40.000 Artikel im Sortiment. Kunden riefen an und fragten: „Ich brauche ein Ventil für eine DN50-Leitung, Edelstahl, PN16, mit Flanschanschluss." Der Innendienst suchte dann 10 Minuten im Katalog.',
        problem: 'Produktwissen lag bei 3 erfahrenen Mitarbeitern. Neue Kollegen brauchten Monate, bis sie Anfragen schnell beantworten konnten. Erfahrene Mitarbeiter waren überlastet.',
        solution: 'KI-gestütztes Produktsuchsystem: Kunden beschreiben ihren Bedarf in natürlicher Sprache, das System findet die passenden Artikel — inklusive Alternativen und Zubehör.',
        results: [
          'Suchzeit pro Anfrage: von 10 Min. auf unter 1 Min.',
          'Neue Mitarbeiter sind nach 2 Wochen produktiv (statt 3 Monaten)',
          'Cross-Selling um 25% gestiegen (automatische Zubehör-Vorschläge)'
        ],
        quote: 'Das Wissen von 30 Jahren Berufserfahrung — jetzt für jeden im Team verfügbar.',
        quoteRole: 'Vertriebsleiter'
      }
    ]
  }
};

const slugs = Object.keys(useCaseData);

function UseCasePage() {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? useCaseData[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Seite nicht gefunden</h1>
          <Link to="/" className="text-accent hover:underline">← Zurück zur Startseite</Link>
        </div>
      </div>
    );
  }

  const currentIndex = slug ? slugs.indexOf(slug) : -1;
  const prevSlug = currentIndex > 0 ? slugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < slugs.length - 1 ? slugs[currentIndex + 1] : null;

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

      {/* Hero */}
      <section className="hero-background pt-20 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <a href="/#usecases" className="text-white/80 hover:text-white text-lg flex items-center gap-2 mb-6 transition-colors">
              <ArrowLeft className="w-5 h-5" /> Alle Anwendungsbereiche
            </a>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{data.title}</h1>
            <p className="text-xl text-white/80 leading-relaxed">{data.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <p className="text-xl text-text-medium max-w-3xl leading-relaxed">
            {data.description}
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-12">
            So sieht das in der Praxis aus
          </h2>
          <div className="space-y-12">
            {data.cases.map((c, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
                {/* Case Header */}
                <div className="bg-gradient-to-r from-primary to-primary/90 px-8 py-6">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-5xl font-black bg-gradient-to-br from-accent via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">#{index + 1}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{c.company}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-white/70 mt-1">
                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {c.location}</span>
                        <span className="flex items-center gap-1"><Building2 className="w-3.5 h-3.5" /> {c.industry}</span>
                        <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {c.employees}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  {/* Case Content */}
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                      <p className="text-sm font-semibold text-primary/60 uppercase tracking-wider mb-2">Ausgangslage</p>
                      <p className="text-text-medium text-sm leading-relaxed">{c.situation}</p>
                    </div>
                    <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                      <p className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-2">Das Problem</p>
                      <p className="text-text-medium text-sm leading-relaxed">{c.problem}</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                      <p className="text-sm font-semibold text-green-700 uppercase tracking-wider mb-2">Unsere Lösung</p>
                      <p className="text-text-medium text-sm leading-relaxed">{c.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 border border-gray-200 rounded-xl p-6">
                    <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-accent" /> Ergebnisse
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {c.results.map((result, ri) => (
                        <div key={ri} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-text-medium">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  {c.quote && (
                    <blockquote className="mt-6 pl-6 border-l-4 border-fuchsia-400">
                      <p className="text-lg text-primary italic">„{c.quote}"</p>
                      {c.quoteRole && (
                        <p className="text-sm text-text-medium mt-2">— {c.quoteRole}</p>
                      )}
                    </blockquote>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation between use cases */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center max-w-4xl">
            {prevSlug ? (
              <Link to={`/anwendungsbereiche/${prevSlug}`} className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">{useCaseData[prevSlug].title}</span>
              </Link>
            ) : <div />}
            {nextSlug ? (
              <Link to={`/anwendungsbereiche/${nextSlug}`} className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
                <span className="text-sm">{useCaseData[nextSlug].title}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Kommt Ihnen das bekannt vor?
          </h2>
          <p className="text-lg text-text-medium mb-8 max-w-xl mx-auto">
            Lassen Sie uns in 30 Minuten herausfinden, wo Ihre größten Hebel liegen.
          </p>
          <Link
            to="/kontakt"
            className="gradient-button text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center"
          >
            Kostenloses Erstgespräch
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary pt-12 pb-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Link to="/" className="logo-gradient-text">VENTURE KITCHEN.</Link>
            <div className="flex space-x-6">
              <a href="#" className="text-neutral-light hover:text-white transition-colors text-sm">Impressum</a>
              <a href="#" className="text-neutral-light hover:text-white transition-colors text-sm">Datenschutz</a>
            </div>
            <p className="text-neutral-light text-sm">© {new Date().getFullYear()} Venture Kitchen.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default UseCasePage;
