import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Building2, Users, TrendingUp, Clock, CheckCircle, Mail, ChevronRight, FileText, BarChart3, FileCode, Brain, Zap, Shield, Rocket, Search, Scale, Settings, Target, Lightbulb, Sparkles, Database, MessageSquare, Check } from 'lucide-react';

interface Stat {
  label: string;
  before: string;
  after: string;
}

interface CaseStudy {
  company: string;
  industry: string;
  employees: string;
  oneLiner: string;
  situation: string;
  problem: string;
  solution: string;
  stats: Stat[];
  extras?: string[];
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
        industry: 'Handel / Distribution',
        employees: '~45 Mitarbeiter',
        oneLiner: '70 Rechnungen am Tag — jede einzelne von Hand abgetippt.',
        situation: 'Das Buchhaltungsteam (3 Personen) erfasste täglich 60-80 Eingangsrechnungen manuell in DATEV. Jede Rechnung wurde ausgedruckt, kontiert, abgetippt und abgelegt.',
        problem: 'Über 5 Stunden reine Tipparbeit pro Tag. Fehlerquote 3% — bei 12 Mio. € Einkaufsvolumen nicht trivial.',
        solution: 'Rechnungen kommen per Mail oder Scan rein, werden automatisch ausgelesen, gegen Bestellungen abgeglichen und direkt in DATEV gebucht. Unklarheiten gehen als Rückfrage ans Team.',
        stats: [
          { label: 'Bearbeitungszeit', before: '5 Min.', after: '30 Sek.' },
          { label: 'Fehlerquote', before: '3%', after: '< 0,5%' },
          { label: 'Monatsabschluss', before: '+3 Tage', after: 'Pünktlich' },
        ],
        extras: ['Eine Vollzeitstelle konnte auf strategische Aufgaben umgeschichtet werden'],
        quote: 'Wir haben uns gefragt, warum wir das nicht schon vor Jahren gemacht haben.',
        quoteRole: 'Leiter Finanzbuchhaltung'
      },
      {
        company: 'Regionaler Energieversorger',
        industry: 'Energiewirtschaft',
        employees: '~120 Mitarbeiter',
        oneLiner: 'Kundenanträge verschwanden tagelang im falschen Stapel.',
        situation: 'Vertragsänderungen, Zählerwechsel-Protokolle und Kundenanträge kamen als PDF, Fax und Papierpost rein. Drei Sachbearbeiter verteilten alles manuell.',
        problem: 'Durchschnittlich 2,5 Tage bis ein Kundenantrag bearbeitet wurde. Dokumente lagen im falschen Stapel oder wurden übersehen.',
        solution: 'Alle Dokumente werden zentral erfasst, klassifiziert und automatisch dem richtigen Vorgang zugeordnet. Dringendes wird priorisiert, Fehlendes sofort angefordert.',
        stats: [
          { label: 'Bearbeitungszeit', before: '2,5 Tage', after: '4 Std.' },
          { label: 'Beschwerden', before: '100%', after: '−60%' },
          { label: 'Verlorene Dokumente', before: 'Regelmäßig', after: 'Null' },
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
        industry: 'Elektrohandwerk',
        employees: '~35 Mitarbeiter',
        oneLiner: 'Jeden Freitag 4 Stunden Excel — und die Zahlen waren trotzdem veraltet.',
        situation: 'Wöchentlicher Statusbericht: Umsatz aus Faktura, offene Posten aus Buchhaltung, Projektstand aus Excel-Listen der Bauleiter, Materialkosten aus dem Großhandels-Portal.',
        problem: '4 Stunden Zusammentragen pro Woche. Bis der Bericht fertig war, waren die Zahlen veraltet. Montags-Meeting basierte auf Daten von vor einer Woche.',
        solution: 'Daten aus allen Quellen werden automatisch zusammengezogen. Live-Dashboard generiert sich selbst — jeden Morgen aktuell.',
        stats: [
          { label: 'Berichtszeit', before: '4 Std./Woche', after: '0 Min.' },
          { label: 'Datenaktualität', before: '1 Woche alt', after: 'Echtzeit' },
          { label: 'Materialabweichungen', before: 'Ende Monat', after: 'Sofort' },
        ],
        quote: 'Freitagnachmittag ist jetzt wieder Freitagnachmittag — nicht Excel-Nachmittag.',
        quoteRole: 'Assistenz der Geschäftsführung'
      },
      {
        company: 'Immobilienverwaltung',
        industry: 'Immobilien',
        employees: '~20 Mitarbeiter',
        oneLiner: '180 Einheiten, 3 Bankkonten, 1 Excel — 2 Tage pro Monat für die Auswertung.',
        situation: 'Mieteinnahmen über 3 Bankkonten, Nebenkostenabrechnungen in der Hausverwaltungssoftware, Leerstandsdaten in Excel. Monatliche Eigentümer-Auswertung musste alles manuell zusammentragen.',
        problem: '2 Tage pro Monat für 180 Einheiten. Fehler fielen erst auf, wenn Eigentümer nachfragten.',
        solution: 'Automatischer Abgleich aller Zahlungseingänge mit Soll-Mieten. Leerstand, Rückstände und Nebenkostenstatus in einem Dashboard. Reports werden automatisch generiert.',
        stats: [
          { label: 'Monatl. Auswertung', before: '2 Tage', after: '2 Std.' },
          { label: 'Mietrückstände erkannt', before: 'Ende Monat', after: 'Am selben Tag' },
          { label: 'Reports', before: 'Manuell per Mail', after: 'Automatisch' },
        ],
      },
      {
        company: 'Steuerkanzlei',
        industry: 'Steuerberatung',
        employees: '~12 Mitarbeiter',
        oneLiner: '4 Systeme öffnen, nur um zu wissen, welcher Mandant wo steht.',
        situation: 'Mandantendaten in DATEV, Kommunikation in Outlook, Fristen in Excel, Belegstatus im DMS. Für den Wochenstatus musste die Kanzleileitung 4 Systeme öffnen.',
        problem: 'Keine Übersicht, welcher Mandant in welchem Status ist. Fristen wurden manchmal knapp.',
        solution: 'Ein zentrales Dashboard zeigt pro Mandant: offene Belege, nächste Frist, letzter Kontakt, Bearbeitungsstand. Daten kommen automatisch aus allen Systemen.',
        stats: [
          { label: 'Fristversäumnisse', before: 'Gelegentlich', after: 'Null' },
          { label: 'Statusabfragen', before: '3 Std./Woche', after: 'Entfällt' },
          { label: 'Eigenständigkeit Team', before: 'Gering', after: 'Hoch' },
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
        industry: 'Sanitär / Heizung / Klima',
        employees: '~25 Mitarbeiter',
        oneLiner: 'Der Meister tippte abends nach der Baustelle Angebote — mit Preisen von vor 3 Monaten.',
        situation: 'Angebote abends nach der Baustelle. Preise aus Großhandels-Katalogen oder der letzten Bestellung kopiert. Textbausteine in verschiedenen Word-Dokumenten verteilt.',
        problem: '45-90 Minuten pro Angebot, oft mit veralteten Preisen. Kunden warteten 3-5 Tage. Bei 15 Angeboten pro Woche fast 2 volle Arbeitstage.',
        solution: 'Angebote aus strukturierten Leistungspositionen. Preise automatisch aus der aktuellen Großhandels-Schnittstelle. Der Meister wählt Positionen aus, der Rest passiert automatisch.',
        stats: [
          { label: 'Angebotszeit', before: '60 Min.', after: '10 Min.' },
          { label: 'Versand an Kunden', before: '3–5 Tage', after: 'Am selben Tag' },
          { label: 'Auftragsquote', before: 'Basis', after: '+15%' },
        ],
        extras: ['Immer aktuelle Preise — keine Nachkalkulationen mehr'],
        quote: 'Meine Abende gehören wieder mir. Und die Angebote sind besser als vorher.',
        quoteRole: 'Meister und Inhaber'
      },
      {
        company: 'IT-Systemhaus',
        industry: 'IT-Dienstleistung',
        employees: '~40 Mitarbeiter',
        oneLiner: 'Jedes Angebot ein Unikat — 3 Stunden Arbeit, jedes Mal von vorn.',
        situation: 'Hardware, Lizenzen, Dienstleistung, Wartung — jedes Angebot ein individuelles Word-Dokument. Kalkulation in Excel, Texte aus alten Angeboten kopiert.',
        problem: '2-4 Stunden pro Angebot. Vertriebsleiter musste jedes prüfen, weil Margen oft falsch waren. Engpass: maximal 20 Angebote pro Woche.',
        solution: 'Modulares System: Standardpositionen mit hinterlegten Margen, automatische Kalkulation, professionelles PDF. Sonderposten ergänzen, Basis steht in Minuten.',
        stats: [
          { label: 'Angebotszeit', before: '3 Std.', after: '30 Min.' },
          { label: 'Margen-Fehler', before: 'Häufig', after: 'Null' },
          { label: 'Kapazität', before: '20/Woche', after: '50+/Woche' },
        ],
      }
    ]
  },
  onboarding: {
    title: 'Onboarding & Checklisten',
    subtitle: 'Kunden- oder Mitarbeiter-Onboarding strukturiert automatisieren. Kein Schritt wird vergessen.',
    description: 'Onboarding ist der Moment, in dem der erste Eindruck zementiert wird. Wenn am ersten Tag die Hälfte fehlt, beginnt die Beziehung mit einer Enttäuschung.',
    cases: [
      {
        company: 'Personaldienstleister',
        industry: 'Zeitarbeit / HR',
        employees: '~60 Mitarbeiter',
        oneLiner: '150 neue Mitarbeiter pro Monat — jeder Fünfte stand am Einsatztag ohne Papiere da.',
        situation: '150 Neueinstellungen monatlich. Jeder braucht: Vertrag, Steuer-ID, Sozialversicherung, ggf. Gesundheitszeugnis, Kleidung, Einweisung, Einsatzplan.',
        problem: 'Disponenten arbeiteten mit ausgedruckten Checklisten. Jeder 5. Mitarbeiter stand am Einsatztag ohne vollständige Papiere da.',
        solution: 'Digitaler Onboarding-Workflow: Automatische Checkliste pro Mitarbeiter. Fehlende Dokumente werden automatisch angemahnt. Disponent sieht auf einen Blick, wer einsatzbereit ist.',
        stats: [
          { label: 'Unvollständige Unterlagen', before: '20%', after: '< 2%' },
          { label: 'Nachfass-Telefonate', before: '1 Std./Tag', after: 'Entfällt' },
          { label: 'Kundenzufriedenheit', before: 'Problematisch', after: 'Messbar besser' },
        ],
        quote: 'Endlich steht niemand mehr am ersten Tag ohne Papiere da.',
        quoteRole: 'Niederlassungsleiter'
      },
      {
        company: 'Software-Agentur',
        industry: 'IT / Digitalwirtschaft',
        employees: '~15 Mitarbeiter',
        oneLiner: 'Wenn der Projektleiter krank war, fiel beim Neukunden-Onboarding die Hälfte unter den Tisch.',
        situation: 'Neukunden-Setup: Zugänge, Projekt-Setup, Kickoff, Briefing, Slack-Channel, Zeiterfassung. Alles lag beim Projektleiter im Kopf.',
        problem: 'Bei Krankheit oder Urlaub fehlte die Hälfte. Kunden fühlten sich in der ersten Woche „vergessen".',
        solution: 'Vertragsunterschrift triggert automatisch alle Schritte. Jeder Beteiligte bekommt seine Aufgaben, Fristen werden überwacht.',
        stats: [
          { label: 'Onboarding-Dauer', before: '5 Tage', after: '1 Tag' },
          { label: 'Vergessene Schritte', before: 'Regelmäßig', after: 'Null' },
          { label: 'Kundenfeedback', before: 'Gemischt', after: '"Professionellstes Onboarding ever"' },
        ],
      },
      {
        company: 'Arztpraxis-Verbund',
        industry: 'Gesundheitswesen',
        employees: '~80 Mitarbeiter (4 Standorte)',
        oneLiner: 'Neue MFAs brauchten 4 Wochen Einarbeitung — weil jeder Standort es anders machte.',
        situation: 'Neue MFAs: Zugänge Praxissoftware, Hygiene-Einweisung, Abrechnungsschulung, Schlüssel, Dienstkleidung. Jeder Standort hatte eigene Abläufe.',
        problem: '3-4 Wochen Einarbeitung, weil Schulungen nicht koordiniert waren. Neue Mitarbeiter fühlten sich alleingelassen.',
        solution: 'Einheitlicher Onboarding-Plan über alle Standorte. Automatische Schulungstermine, Fortschrittstracking, Feedback nach Woche 1, 2 und 4.',
        stats: [
          { label: 'Einarbeitung', before: '4 Wochen', after: '2 Wochen' },
          { label: 'Frühfluktuation', before: 'Hoch', after: '−40%' },
          { label: 'Standard', before: 'Pro Standort anders', after: 'Einheitlich' },
        ],
        quote: 'Die Neuen fühlen sich vom ersten Tag an willkommen — das hatten wir vorher nie geschafft.',
        quoteRole: 'Praxismanagerin'
      }
    ]
  },
  'email-posteingang': {
    title: 'E-Mail & Posteingang',
    subtitle: 'Eingehende Anfragen automatisch sortieren, kategorisieren und an die richtige Stelle weiterleiten.',
    description: 'Die Inbox ist der Flaschenhals vieler Unternehmen. Alles kommt rein — und jemand muss entscheiden, wohin es gehört.',
    cases: [
      {
        company: 'Hausverwaltung',
        industry: 'Immobilienverwaltung',
        employees: '~12 Mitarbeiter',
        oneLiner: '200 Mails am Tag auf info@ — dringende Schadensmeldungen gingen im Rauschen unter.',
        situation: '200+ Mails pro Tag: Mieterbeschwerden, Handwerker-Angebote, Eigentümer-Rückfragen, Behördenpost. Eine Mitarbeiterin sortierte den ganzen Vormittag.',
        problem: 'Dringende Schadensmeldungen gingen unter. Mieter beschwerten sich. Die Mitarbeiterin war frustriert — Team wusste nie, was noch offen ist.',
        solution: 'Alle Mails werden automatisch klassifiziert: Schadensmeldung, Anfrage, Rechnung, Info. Dringendes wird sofort eskaliert, 30% der Routineanfragen automatisch beantwortet.',
        stats: [
          { label: 'Reaktion Schadensmeldung', before: '2 Tage', after: '2 Std.' },
          { label: 'Automatisch beantwortet', before: '0%', after: '30%' },
          { label: 'Sortier-Aufwand', before: '4 Std./Tag', after: 'Entfällt' },
        ],
        quote: 'Früher war die Inbox mein Feind. Jetzt kümmert sie sich quasi um sich selbst.',
        quoteRole: 'Teamleiterin Mietverwaltung'
      },
      {
        company: 'Ingenieurbüro',
        industry: 'Bauplanung',
        employees: '~8 Mitarbeiter',
        oneLiner: 'Chef im Urlaub = Mails liegen tagelang unbearbeitet.',
        situation: 'Ausschreibungen, Planfreigaben, Behördenkorrespondenz, Bauherren-Rückfragen — alles per Mail. Nur der Inhaber wusste, was wohin gehört.',
        problem: 'Chef im Urlaub: Mails blieben tagelang unbearbeitet. Fristen wurden fast verpasst. Team traute sich nicht, ohne ihn zu entscheiden.',
        solution: 'Eingehende Mails werden nach Projekt, Absender und Dringlichkeit sortiert. Fristgebundene Post wird automatisch markiert. Team sieht priorisierte Aufgabenliste statt chaotische Inbox.',
        stats: [
          { label: 'Verpasste Fristen', before: 'Gelegentlich', after: 'Null' },
          { label: 'Chef-Abhängigkeit', before: '100%', after: 'Team eigenständig' },
          { label: 'Urlaubsfähigkeit', before: 'Kaum möglich', after: 'Problemlos' },
        ],
      }
    ]
  },
  'ki-unternehmen': {
    title: 'KI im Unternehmen',
    subtitle: 'ChatGPT & Co. datenschutzkonform einsetzen — an Ihre eigenen Daten angebunden.',
    description: 'Jeder redet über KI. Aber zwischen „mein Azubi nutzt ChatGPT" und „KI ist in unsere Prozesse integriert" liegt ein Ozean.',
    cases: [
      {
        company: 'Mittelständische Anwaltskanzlei',
        industry: 'Rechtsberatung',
        employees: '~25 Mitarbeiter (8 Anwälte)',
        oneLiner: 'KI nutzen wollen — aber Mandantendaten in ChatGPT? Ausgeschlossen.',
        situation: 'Anwälte nutzten ChatGPT privat für Recherche — mit Bauchschmerzen wegen Datenschutz. Mandanteninformationen durften nicht in externe Tools.',
        problem: 'Entweder KI nutzen und Datenschutz riskieren, oder alles manuell recherchieren. Ein Referendar brauchte 3-4 Stunden für eine Rechtsprechungsübersicht.',
        solution: 'On-Premise KI-System, angebunden an kanzleieigene Urteilsdatenbank und Vertragsmuster. 100% DSGVO-konform — keine Daten verlassen das Haus.',
        stats: [
          { label: 'Recherche-Zeit', before: '3 Std.', after: '20 Min.' },
          { label: 'Datenschutz', before: 'Risiko', after: '100% DSGVO' },
          { label: 'Team-Akzeptanz', before: 'Skeptisch', after: 'Hoch' },
        ],
        extras: ['Vertragsprüfung mit KI: Auffälligkeiten werden automatisch markiert'],
        quote: 'Endlich können wir KI nutzen, ohne uns Sorgen um unsere Mandanten machen zu müssen.',
        quoteRole: 'Seniorpartner'
      },
      {
        company: 'Technischer Großhandel',
        industry: 'Handel',
        employees: '~90 Mitarbeiter',
        oneLiner: '40.000 Artikel — und das Produktwissen steckte in 3 Köpfen.',
        situation: '40.000 Artikel. Kunden riefen an: „Ich brauche ein Ventil für DN50, Edelstahl, PN16, Flansch." Der Innendienst suchte dann 10 Minuten im Katalog.',
        problem: 'Produktwissen bei 3 erfahrenen Mitarbeitern. Neue Kollegen brauchten Monate. Erfahrene waren überlastet.',
        solution: 'KI-gestützte Produktsuche: Bedarf in natürlicher Sprache beschreiben, System findet passende Artikel — inklusive Alternativen und Zubehör.',
        stats: [
          { label: 'Suchzeit pro Anfrage', before: '10 Min.', after: '< 1 Min.' },
          { label: 'Einarbeitungszeit', before: '3 Monate', after: '2 Wochen' },
          { label: 'Cross-Selling', before: 'Basis', after: '+25%' },
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
            <Link to="/" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" /> Zurück
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero-background pt-20 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <Link to="/#usecases" className="text-white/60 hover:text-white/90 text-sm flex items-center gap-1 mb-6 transition-colors">
              <ArrowLeft className="w-3 h-3" /> Alle Anwendungsbereiche
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{data.title}</h1>
            <p className="text-xl text-white/80 leading-relaxed">{data.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Intro */}
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
          <div className="space-y-24">
            {data.cases.map((c, index) => (
              <div key={index}>
                {/* Case Header: Big one-liner + meta */}
                <div className="max-w-4xl mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-6xl font-black text-accent/10 leading-none">#{index + 1}</span>
                    <div className="flex flex-wrap gap-3">
                      <span className="bg-gray-100 text-text-medium text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                        <Building2 className="w-3 h-3" /> {c.industry}
                      </span>
                      <span className="bg-gray-100 text-text-medium text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                        <Users className="w-3 h-3" /> {c.employees}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-primary leading-snug">
                    {c.oneLiner}
                  </h3>
                </div>

                {/* Stats: Big visual before/after */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-4xl">
                  {c.stats.map((stat, si) => (
                    <div key={si} className="bg-gray-50 rounded-2xl p-6 text-center">
                      <p className="text-xs font-semibold text-text-medium uppercase tracking-wider mb-4">{stat.label}</p>
                      <div className="flex items-center justify-center gap-3">
                        <div>
                          <p className="text-2xl font-bold text-red-400 line-through decoration-red-300/50">{stat.before}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-accent flex-shrink-0" />
                        <div>
                          <p className="text-2xl font-bold text-green-600">{stat.after}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Vorher / Nachher visual split */}
                <div className="grid md:grid-cols-2 gap-0 max-w-4xl mb-8 rounded-2xl overflow-hidden card-shadow">
                  {/* Vorher */}
                  <div className="bg-red-50 p-8 border-r border-red-100">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <p className="text-sm font-bold text-red-600 uppercase tracking-wider">Vorher</p>
                    </div>
                    <p className="text-text-medium leading-relaxed text-sm">{c.situation}</p>
                    <div className="mt-4 pt-4 border-t border-red-200/50">
                      <p className="text-sm text-red-700/80 font-medium">{c.problem}</p>
                    </div>
                  </div>
                  {/* Nachher */}
                  <div className="bg-green-50 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <p className="text-sm font-bold text-green-700 uppercase tracking-wider">Nachher</p>
                    </div>
                    <p className="text-text-medium leading-relaxed text-sm">{c.solution}</p>
                    {c.extras && c.extras.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-green-200/50 space-y-2">
                        {c.extras.map((extra, ei) => (
                          <p key={ei} className="text-sm text-green-700/80 font-medium flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" /> {extra}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Quote */}
                {c.quote && (
                  <div className="max-w-4xl bg-primary rounded-2xl p-8 flex items-start gap-5">
                    <span className="text-6xl leading-none text-accent/30 font-serif">"</span>
                    <div>
                      <p className="text-lg text-white font-medium leading-relaxed">{c.quote}</p>
                      {c.quoteRole && (
                        <p className="text-sm text-white/50 mt-3">— {c.quoteRole}, {c.company}</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
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
