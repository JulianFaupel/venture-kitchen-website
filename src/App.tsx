import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Check, ChevronRight, ArrowRight, Mail, Linkedin, Rocket, Layout, Globe, FileCode, MessageSquare, Target, Lightbulb, Sparkles, Zap, BarChart3, Shield, Cloud, Database, Settings, FileText, Search, Scale, Building2, Brain, TrendingUp, Users, Clock } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Track scroll position for navbar styling
      setIsScrolled(window.scrollY > 50);

      const sections = {
        home: 0,
        process: document.getElementById('process')?.offsetTop || 0,
        usecases: document.getElementById('usecases')?.offsetTop || 0
      };

      const currentPosition = window.scrollY + 100;

      const active = Object.entries(sections).reduce((acc, [key, value]) => {
        return currentPosition >= value ? key : acc;
      }, 'home');

      setActiveSection(active);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home', href: '#' },
    { id: 'process', label: 'So funktioniert\'s', href: '#process' },
    { id: 'usecases', label: 'Anwendungsbereiche', href: '#usecases' },
    { id: 'contact', label: 'Kontakt', href: '/kontakt', isRoute: true }
  ];

  const getNavLinkClasses = (id: string) => {
    return `transition-colors text-lg ${
      activeSection === id
        ? 'text-accent font-semibold'
        : isScrolled
          ? 'text-charcoal hover:text-primary'
          : 'text-white/90 hover:text-white'
    }`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* SVG Gradient Definitions */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="neon-pink-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f700ff" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#0080FF" />
          </linearGradient>
          <linearGradient id="neon-yellow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f700ff" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#0080FF" />
          </linearGradient>
          <linearGradient id="neon-blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f700ff" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#0080FF" />
          </linearGradient>
          <linearGradient id="neon-green-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f700ff" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#0080FF" />
          </linearGradient>
          <linearGradient id="neon-cyan-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f700ff" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#0080FF" />
          </linearGradient>
        </defs>
      </svg>

      {/* Header */}
      <header className={`fixed w-full z-50 overflow-visible transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}>
        <nav className={`container mx-auto px-6 transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-8'
        }`}>
          <div className="flex items-center justify-between">
            <a href="/" className="relative flex items-center justify-center">
              {isScrolled ? (
                <span className="logo-gradient-text transition-all duration-300">VENTURE KITCHEN.</span>
              ) : (
                <div className="flex flex-col justify-center transition-all duration-300">
                  <span className="logo-gradient-text-large">VENTURE</span>
                  <span className="logo-gradient-text-large logo-kitchen relative">KITCHEN<span className="logo-dot absolute">.</span></span>
                </div>
              )}
            </a>

            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map(link => (
                link.isRoute ? (
                  <Link
                    key={link.id}
                    to={link.href}
                    className={getNavLinkClasses(link.id)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.id}
                    href={link.href}
                    className={getNavLinkClasses(link.id)}
                  >
                    {link.label}
                  </a>
                )
              ))}
              <Link
                to="/kontakt"
                className="gradient-button text-white px-6 py-3 rounded-lg font-semibold text-base"
              >
                Kostenloses Erstgespräch
              </Link>
            </div>

            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20 lg:hidden">
          <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
            {navLinks.map(link => (
              link.isRoute ? (
                <Link
                  key={link.id}
                  to={link.href}
                  className={`text-lg ${getNavLinkClasses(link.id)}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-lg ${getNavLinkClasses(link.id)}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            ))}
            <Link
              to="/kontakt"
              onClick={() => setIsMenuOpen(false)}
              className="gradient-button text-white px-6 py-3 rounded-lg font-semibold text-center"
            >
              Kostenloses Erstgespräch
            </Link>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero-background flex items-start pt-48 pb-32 overflow-hidden">
        <div className="hero-content w-full">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left: Text Content */}
              <div className="max-w-3xl flex-1">
                <h1 className="text-5xl lg:text-6xl text-white mb-6 leading-tight font-bold">
                  Prozessautomatisierung<br />als Service.
                </h1>
                <p className="text-xl lg:text-2xl text-white/90 mb-6 leading-relaxed">
                  Wir übernehmen Ihre manuellen Geschäftsprozesse und betreiben sie besser, schneller und günstiger. Sie liefern den Input, wir liefern das Ergebnis.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-10">
                  <Link
                    to="/kontakt"
                    className="gradient-button text-white px-8 py-4 rounded-lg font-semibold text-lg"
                  >
                    Kostenloses Erstgespräch
                  </Link>
                </div>
              </div>

              {/* Right: Workflow Diagram */}
              <div className="flex-1 relative h-[420px] w-full max-w-lg hidden lg:block">
                
                {/* Decorative gradient blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-accent/5 to-[#0080FF]/5 rounded-full blur-3xl -z-10"></div>

                {/* Workflow: Connected nodes like a real process diagram */}
                <div className="absolute inset-0 flex flex-col justify-center">
                  
                  {/* Top row: 3 Input sources feeding into center */}
                  <div className="flex justify-between items-end mb-2 px-4">
                    {[
                      { icon: Mail, label: 'E-Mail', color: 'text-blue-400', delay: '0s' },
                      { icon: FileText, label: 'Dokument', color: 'text-red-400', delay: '0.3s' },
                      { icon: Database, label: 'System', color: 'text-purple-400', delay: '0.6s' },
                    ].map((input, i) => {
                      const Icon = input.icon;
                      return (
                        <div key={i} className="flex flex-col items-center hero-pipeline-row" style={{ animationDelay: input.delay }}>
                          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 flex flex-col items-center gap-1 w-[100px]">
                            <Icon className={`w-5 h-5 ${input.color}`} />
                            <span className="text-xs text-white/70">{input.label}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Connector lines down to processing */}
                  <div className="flex justify-between items-center px-4 h-10 relative">
                    {[0, 1, 2].map(i => (
                      <div key={i} className="flex flex-col items-center w-[100px]">
                        <div className="w-[2px] h-10 relative overflow-hidden">
                          <div className="absolute inset-0 bg-white/10"></div>
                          <div className="hero-data-packet-vertical bg-gradient-to-b from-accent to-[#0080FF] w-full h-3 rounded-full" style={{ animationDelay: `${i * 0.3 + 0.5}s` }}></div>
                        </div>
                      </div>
                    ))}
                    {/* Horizontal connector line */}
                    <div className="absolute top-[40px] left-[50px] right-[50px] h-[2px] bg-white/10"></div>
                  </div>

                  {/* Central merge point */}
                  <div className="flex justify-center mb-2">
                    <div className="w-[2px] h-6 bg-white/10 relative overflow-hidden">
                      <div className="hero-data-packet-vertical bg-gradient-to-b from-[#0080FF] to-accent w-full h-3 rounded-full" style={{ animationDelay: '1.2s' }}></div>
                    </div>
                  </div>

                  {/* Processing node - center */}
                  <div className="flex justify-center mb-2 hero-pipeline-row" style={{ animationDelay: '0.9s' }}>
                    <div className="bg-accent/20 backdrop-blur-sm border border-accent/40 rounded-xl px-6 py-4 flex items-center gap-3 shadow-lg shadow-accent/10">
                      <div className="w-10 h-10 rounded-lg bg-accent/30 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="text-[10px] text-accent/70 uppercase tracking-wider font-semibold">Venture Kitchen</div>
                        <div className="text-sm font-semibold text-white">Erfassen → Prüfen → Verarbeiten</div>
                      </div>
                    </div>
                  </div>

                  {/* Connector lines down to outputs */}
                  <div className="flex justify-center mb-2">
                    <div className="w-[2px] h-6 bg-white/10 relative overflow-hidden">
                      <div className="hero-data-packet-vertical bg-gradient-to-b from-accent to-green-400 w-full h-3 rounded-full" style={{ animationDelay: '1.8s' }}></div>
                    </div>
                  </div>

                  {/* Horizontal split line */}
                  <div className="relative h-[2px] mx-auto" style={{ width: '260px' }}>
                    <div className="absolute inset-0 bg-white/10"></div>
                  </div>

                  {/* Connector lines to outputs */}
                  <div className="flex justify-between items-center h-6 mx-auto" style={{ width: '260px' }}>
                    {[0, 1, 2].map(i => (
                      <div key={i} className="flex flex-col items-center">
                        <div className="w-[2px] h-6 relative overflow-hidden">
                          <div className="absolute inset-0 bg-white/10"></div>
                          <div className="hero-data-packet-vertical bg-gradient-to-b from-green-400 to-cyan-400 w-full h-3 rounded-full" style={{ animationDelay: `${2.0 + i * 0.2}s` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom row: 3 Output results */}
                  <div className="flex justify-between items-start px-4 mt-2">
                    {[
                      { icon: Check, label: 'Gebucht', sublabel: 'ERP/DATEV', color: 'text-green-400', delay: '2.2s' },
                      { icon: BarChart3, label: 'Report', sublabel: 'Dashboard', color: 'text-cyan-400', delay: '2.5s' },
                      { icon: Zap, label: 'Aktion', sublabel: 'Automatisch', color: 'text-yellow-400', delay: '2.8s' },
                    ].map((output, i) => {
                      const Icon = output.icon;
                      return (
                        <div key={i} className="flex flex-col items-center hero-pipeline-row" style={{ animationDelay: output.delay }}>
                          <div className="bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-lg p-3 flex flex-col items-center gap-1 w-[100px]">
                            <Icon className={`w-5 h-5 ${output.color}`} />
                            <span className="text-xs font-semibold text-white">{output.label}</span>
                            <span className="text-[10px] text-white/50">{output.sublabel}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Typische Ausgangssituationen */}
      <section id="process" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4 text-center">
            Typische Ausgangssituationen
          </h2>
          <p className="text-text-medium text-lg text-center mb-16 max-w-2xl mx-auto">
            Kommt Ihnen das bekannt vor? Dann sollten wir sprechen.
          </p>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Users,
                title: 'Fachkräfte für Stumpfsinn',
                description: 'Ihre besten Leute verbringen Stunden mit Abtippen, Kopieren, Sortieren — Arbeit, die kein Mensch machen sollte.',
                color: 'pink'
              },
              {
                icon: Target,
                title: 'Teure unsichtbare Fehler',
                description: 'Vergessene Nachträge, falsche Zahlen, verlorene Mails. Fehler, die erst auffallen, wenn sie Geld kosten.',
                color: 'yellow'
              },
              {
                icon: Clock,
                title: 'Wachstum bremst statt beflügelt',
                description: 'Was bei 5 Leuten funktioniert hat, bricht bei 15 zusammen. Mehr Umsatz, aber auch mehr Chaos.',
                color: 'cyan'
              },
              {
                icon: Settings,
                title: 'Tool-Friedhof',
                description: 'Software gekauft, Schulung gemacht, keiner nutzt es richtig. Das Problem ist geblieben, nur die Kosten sind gestiegen.',
                color: 'blue'
              },
              {
                icon: Brain,
                title: 'Wissen in Köpfen, nicht im System',
                description: 'Wenn Frau Müller krank ist, steht der Prozess still. Weil nur sie weiß, wie es geht.',
                color: 'green'
              },
              {
                icon: Scale,
                title: 'Bauchgefühl statt Zahlen',
                description: 'Entscheidungen ohne Datengrundlage, weil die Zahlen aus 3 Excel-Dateien zusammengesucht werden müssten.',
                color: 'pink'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl card-shadow hover-lift flex items-start gap-5">
                  <div className={`icon-box icon-neon-${item.color} flex-shrink-0`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                    <p className="text-text-medium">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Model Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Service, nicht Software
            </h2>
            <p className="text-text-medium text-lg leading-relaxed">
              Wir verkaufen Ihnen kein IT-Projekt. Wir übernehmen Ihre Prozesse als Service — Sie bezahlen für Ergebnisse.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: '1',
                icon: Search,
                title: 'Erstgespräch',
                description: 'Wir verstehen Ihren Prozess und zeigen Ihnen die größten Hebel. Kostenlos und unverbindlich.',
                color: 'pink'
              },
              {
                step: '2',
                icon: Rocket,
                title: 'Pilot',
                description: 'Wir übernehmen den Prozess sofort. Sie sehen Ergebnisse in Tagen, nicht Monaten.',
                color: 'yellow'
              },
              {
                step: '3',
                icon: TrendingUp,
                title: 'Skalieren',
                description: 'Wir automatisieren immer weiter. Ihre Qualität steigt, Ihr Aufwand sinkt.',
                color: 'cyan'
              }
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl hover-lift text-center">
                  <div className="text-5xl font-bold text-accent/20 mb-2">{step.step}</div>
                  <div className={`icon-box mb-6 mx-auto icon-neon-${step.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{step.title}</h3>
                  <p className="text-text-medium">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="usecases" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4 text-center">
            Anwendungsbereiche
          </h2>
          <p className="text-text-medium text-lg text-center mb-16 max-w-2xl mx-auto">
            Branchenunabhängig. Überall dort, wo manuelle Prozesse Zeit und Geld kosten.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: FileText,
                title: 'Dokumentenverarbeitung',
                description: 'Rechnungen, Verträge und Formulare automatisch erfassen, prüfen und ins richtige System übertragen.',
                color: 'pink'
              },
              {
                icon: BarChart3,
                title: 'Reporting & Datenabgleich',
                description: 'Daten aus verschiedenen Systemen zusammenführen — automatisch, fehlerfrei, in Echtzeit.',
                color: 'yellow'
              },
              {
                icon: FileCode,
                title: 'Angebotserstellung',
                description: 'Vom Angebot zur Rechnung — ohne Copy-Paste, ohne veraltete Preise, ohne Fehler.',
                color: 'cyan'
              },
              {
                icon: Users,
                title: 'Onboarding & Checklisten',
                description: 'Kunden- oder Mitarbeiter-Onboarding strukturiert automatisieren. Kein Schritt wird vergessen.',
                color: 'blue'
              },
              {
                icon: Mail,
                title: 'E-Mail & Posteingang',
                description: 'Eingehende Anfragen automatisch sortieren, kategorisieren und an die richtige Stelle weiterleiten.',
                color: 'green'
              },
              {
                icon: Brain,
                title: 'KI im Unternehmen',
                description: 'ChatGPT & Co. datenschutzkonform einsetzen — an Ihre eigenen Daten angebunden, on-premise oder Cloud.',
                color: 'pink'
              }
            ].map((usecase, index) => {
              const Icon = usecase.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl card-shadow hover-lift">
                  <div className={`icon-box mb-6 icon-neon-${usecase.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{usecase.title}</h3>
                  <p className="text-text-medium">{usecase.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Venture Kitchen Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Warum Venture Kitchen?
            </h2>
            <p className="text-text-medium text-lg leading-relaxed">
              Wir sind kein IT-Dienstleister. Wir sind Ihr ausgelagertes Operations-Team — mit Technologie als Hebel, nicht als Produkt.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="icon-box mb-6 mx-auto icon-neon-pink">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3">Kein IT-Projekt</h3>
              <p className="text-text-medium">Sie liefern den Input, wir liefern das Ergebnis. Kein Projekt, kein Risiko.</p>
            </div>
            <div className="text-center">
              <div className="icon-box mb-6 mx-auto icon-neon-yellow">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3">Ergebnisse ab Tag 1</h3>
              <p className="text-text-medium">Kein 6-Monats-Projekt, sondern sofortiger Wert</p>
            </div>
            <div className="text-center">
              <div className="icon-box mb-6 mx-auto icon-neon-cyan">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3">Kein neues Tool lernen</h3>
              <p className="text-text-medium">Wir passen uns Ihren Systemen an — nicht umgekehrt</p>
            </div>
            <div className="text-center">
              <div className="icon-box mb-6 mx-auto icon-neon-blue">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3">Marge steigt, Kosten sinken</h3>
              <p className="text-text-medium">Über Zeit automatisieren wir immer mehr — Ihr Preis bleibt, unsere Effizienz steigt</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">
            Moderne Technologien für Ihre Anforderungen
          </h2>
          <p className="text-neutral-light text-lg text-center mb-16 max-w-2xl mx-auto">
            Bewährte und zukunftssichere Technologien, die skalieren und performen.
          </p>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Cloud & Infrastructure",
                items: ["AWS", "Azure", "Docker", "Kubernetes"],
                icon: <Globe className="w-6 h-6" />
              },
              {
                title: "Web & Mobile",
                items: ["React", "Node.js", "TypeScript", "Mobile Apps"],
                icon: <Layout className="w-6 h-6" />
              },
              {
                title: "AI & Automation",
                items: ["OpenAI", "LLMs", "Workflows", "Automatisierung"],
                icon: <Brain className="w-6 h-6" />
              },
              {
                title: "Daten & Analytics",
                items: ["PostgreSQL", "Analytics", "APIs", "Integrationen"],
                icon: <BarChart3 className="w-6 h-6" />
              },
            ].map((tech, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-colors">
                <div className="text-accent mb-4">
                  {tech.icon}
                </div>
                <h3 className="text-white text-lg font-semibold mb-3">{tech.title}</h3>
                <ul className="space-y-1">
                  {tech.items.map((item, i) => (
                    <li key={i} className="text-neutral-light text-sm flex items-center gap-2">
                      <div className="w-1 h-1 bg-accent rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Lassen Sie uns über Ihren Prozess sprechen.
            </h2>
            <p className="text-xl text-text-medium mb-8 leading-relaxed">
              Kostenloses Erstgespräch — wir zeigen Ihnen in 30 Minuten, wo Ihre größten Automatisierungshebel liegen.
            </p>
            <Link
              to="/kontakt"
              className="gradient-button text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center"
            >
              Termin vereinbaren
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <p className="mt-6 text-text-medium text-sm">
              30 Minuten • Unverbindlich • Sofort umsetzbare Erkenntnisse
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <span className="logo-gradient-text">VENTURE KITCHEN.</span>
              </div>
              <p className="text-neutral-light mb-6">
                Prozessautomatisierung als Service. Wir übernehmen Ihre manuellen Abläufe und betreiben sie besser, schneller, günstiger.
              </p>
              <div className="flex space-x-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neutral-light hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-white font-semibold mb-6">Lösungen</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#usecases" className="text-neutral-light hover:text-white transition-colors flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Angebotserstellung
                  </a>
                </li>
                <li>
                  <a href="#usecases" className="text-neutral-light hover:text-white transition-colors flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Sales-Prozesse
                  </a>
                </li>
                <li>
                  <a href="#usecases" className="text-neutral-light hover:text-white transition-colors flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    KI-Integration
                  </a>
                </li>
              </ul>
            </div>

            {/* Kontakt */}
            <div>
              <h3 className="text-white font-semibold mb-6">Kontakt</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 text-neutral-light">
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>hello@venturekitchen.io</span>
                </li>
                <li>
                  <Link to="/kontakt" className="text-neutral-light hover:text-white transition-colors flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Kontakt aufnehmen
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-neutral-light text-sm">
                © {new Date().getFullYear()} Venture Kitchen. Alle Rechte vorbehalten.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-neutral-light hover:text-white transition-colors text-sm">
                  Impressum
                </a>
                <a href="#" className="text-neutral-light hover:text-white transition-colors text-sm">
                  Datenschutz
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;