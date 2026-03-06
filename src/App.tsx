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
    { id: 'usecases', label: 'Anwendungsfälle', href: '#usecases' },
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
                Kostenlose Prozessanalyse
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
              Kostenlose Prozessanalyse
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
                  Wir automatisieren Ihre Prozesse.<br />Sie konzentrieren sich aufs Geschäft.
                </h1>
                <p className="text-xl lg:text-2xl text-white/90 mb-6 leading-relaxed">
                  Kein IT-Projekt. Kein Risiko. Wir übernehmen Ihre manuellen Workflows als Service — powered by Software und KI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-10">
                  <Link
                    to="/kontakt"
                    className="gradient-button text-white px-8 py-4 rounded-lg font-semibold text-lg"
                  >
                    Kostenlose Prozessanalyse
                  </Link>
                </div>
              </div>

              {/* Right: Process Flow Visual - Simple */}
              <div className="flex-1 relative h-[420px] w-full max-w-lg hidden lg:block">
                
                {/* Central Cloud */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-20 bg-white rounded-2xl shadow-2xl flex items-center justify-center z-20">
                  <div className="text-center">
                    <Cloud className="w-8 h-8 text-accent mx-auto mb-1" />
                    <div className="text-xs font-semibold text-primary">VK Cloud</div>
                  </div>
                </div>

                {/* Input Cards - Left Side */}
                <div className="absolute left-0 top-16 space-y-3">
                  {[
                    { icon: FileText, label: 'PDFs' },
                    { icon: Mail, label: 'E-Mails' },
                    { icon: Database, label: 'ERP/CRM' }
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="bg-white/90 rounded-lg p-3 shadow-lg flex items-center gap-2 text-xs w-24">
                        <Icon className="w-4 h-4 text-accent" />
                        <span className="font-medium text-primary">{item.label}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Output Cards - Right Side */}
                <div className="absolute right-0 top-16 space-y-3">
                  {[
                    { icon: Settings, label: 'Reports' },
                    { icon: Globe, label: 'Web App' },
                    { icon: BarChart3, label: 'Analytics' }
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="bg-white/90 rounded-lg p-3 shadow-lg flex items-center gap-2 text-xs w-24">
                        <Icon className="w-4 h-4 text-accent" />
                        <span className="font-medium text-primary">{item.label}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Connecting Lines */}
                <div className="absolute top-1/2 left-28 w-12 h-0.5 bg-gradient-to-r from-accent to-transparent -translate-y-1/2"></div>
                <div className="absolute top-1/2 right-28 w-12 h-0.5 bg-gradient-to-l from-accent to-transparent -translate-y-1/2"></div>

                {/* Decorative gradient blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-accent/10 to-[#0080FF]/10 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section id="process" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 text-center">
            So funktioniert's
          </h2>
          <p className="text-text-medium text-lg text-center mb-16 max-w-3xl mx-auto">
            Von der manuellen Arbeit zur vollautomatischen Lösung — Schritt für Schritt, ohne Risiko.
          </p>

          <div className="max-w-6xl mx-auto">
            {/* Visual Data Flow */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 mb-16 relative overflow-hidden">
              
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="grid grid-cols-12 grid-rows-8 h-full gap-2">
                  {Array.from({ length: 96 }).map((_, i) => (
                    <div key={i} className="bg-accent rounded-sm"></div>
                  ))}
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-primary mb-8 text-center">Datenfluss: Von Input zu Output</h3>
                
                <div className="grid lg:grid-cols-5 gap-8 items-center">
                  {/* Inputs */}
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold text-primary mb-4 text-center">Eingaben</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { icon: FileText, label: 'PDFs', color: 'pink' },
                        { icon: Mail, label: 'E-Mails', color: 'yellow' },
                        { icon: Database, label: 'ERP/CRM', color: 'cyan' },
                        { icon: MessageSquare, label: 'Sprache', color: 'blue' },
                        { icon: Globe, label: 'Webseiten', color: 'green' },
                        { icon: FileCode, label: 'Portale', color: 'pink' }
                      ].map((item, i) => {
                        const Icon = item.icon;
                        return (
                          <div key={i} className={`icon-box mb-2 icon-neon-${item.color} mx-auto`}>
                            <Icon className="w-6 h-6" />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Arrow Right */}
                  <div className="text-center hidden lg:block">
                    <ChevronRight className="w-8 h-8 text-accent mx-auto" />
                  </div>

                  {/* Processing */}
                  <div className="text-center">
                    <div className="icon-box mb-4 mx-auto bg-gradient-to-br from-accent to-blue-500 text-white border-0">
                      <Cloud className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-semibold text-primary mb-2">VK Cloud</h4>
                    <p className="text-sm text-gray-600">Automatisierte Prüfung, Datenabgleich, Transformation</p>
                  </div>

                  {/* Arrow Right */}
                  <div className="text-center hidden lg:block">
                    <ChevronRight className="w-8 h-8 text-accent mx-auto" />
                  </div>

                  {/* Outputs */}
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold text-primary mb-4 text-center">Ausgaben</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { icon: Database, label: 'ERP/CRM', color: 'cyan' },
                        { icon: Layout, label: 'Web App', color: 'yellow' },
                        { icon: BarChart3, label: 'Reports', color: 'green' },
                        { icon: FileText, label: 'Excel', color: 'blue' },
                        { icon: Mail, label: 'E-Mail', color: 'pink' },
                        { icon: Settings, label: 'APIs', color: 'cyan' }
                      ].map((item, i) => {
                        const Icon = item.icon;
                        return (
                          <div key={i} className={`icon-box mb-2 icon-neon-${item.color} mx-auto`}>
                            <Icon className="w-6 h-6" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Three Steps */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  icon: Search,
                  title: 'Prozess verstehen',
                  description: 'Wir analysieren Ihren Workflow und finden die größten Hebel. Kostenlos.',
                  color: 'pink'
                },
                {
                  step: '2', 
                  icon: Rocket,
                  title: 'Pilot starten',
                  description: 'Wir übernehmen den Prozess sofort — erstmal semi-automatisch. Sie sehen Ergebnisse in Tagen, nicht Monaten.',
                  color: 'yellow'
                },
                {
                  step: '3',
                  icon: TrendingUp,
                  title: 'Automatisierung skalieren',
                  description: 'Über Zeit automatisieren wir immer mehr. Ihre Kosten sinken, die Qualität steigt.',
                  color: 'cyan'
                }
              ].map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="bg-white p-8 rounded-2xl card-shadow hover-lift text-center">
                    <div className="relative mb-6">
                      <div className="text-6xl font-bold text-gray-100 absolute -top-4 left-1/2 -translate-x-1/2">
                        {step.step}
                      </div>
                      <div className={`icon-box mx-auto icon-neon-${step.color} relative z-10`}>
                        <Icon className="w-8 h-8" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-4">{step.title}</h3>
                    <p className="text-text-medium">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4 text-center">
            Kennen Sie das?
          </h2>
          <p className="text-text-medium text-lg text-center mb-12 max-w-2xl mx-auto">
            Diese Probleme lösen wir täglich für unsere Kunden.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl card-shadow hover-lift">
              <div className="icon-box mb-6 icon-neon-pink">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Ihr Team tippt Daten manuell von A nach B?</h3>
              <p className="text-text-medium">Kostbare Arbeitszeit geht für Routine-Aufgaben verloren, statt für wertschöpfende Tätigkeiten.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl card-shadow hover-lift">
              <div className="icon-box mb-6 icon-neon-yellow">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Fehler in der Datenverarbeitung kosten Sie Geld?</h3>
              <p className="text-text-medium">Menschliche Fehler führen zu Nacharbeit, Reklamationen und verlorenen Kunden.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl card-shadow hover-lift">
              <div className="icon-box mb-6 icon-neon-cyan">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Sie wissen, dass es besser geht — aber IT-Projekte sind zu teuer und riskant?</h3>
              <p className="text-text-medium">Klassische Software-Projekte dauern Monate, kosten viel und das Ergebnis ist ungewiss.</p>
            </div>
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
              Wir verkaufen Ihnen keine Software. Wir übernehmen Ihre Prozesse als Service — Sie bezahlen nur für Ergebnisse.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl hover-lift text-center">
              <div className="icon-box mb-6 mx-auto icon-neon-pink">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Prozess verstehen</h3>
              <p className="text-text-medium">Wir analysieren Ihren Workflow und finden die größten Hebel. Kostenlos.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl hover-lift text-center">
              <div className="icon-box mb-6 mx-auto icon-neon-yellow">
                <Rocket className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Pilot starten</h3>
              <p className="text-text-medium">Wir übernehmen den Prozess sofort — erstmal semi-automatisch. Sie sehen Ergebnisse in Tagen, nicht Monaten.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl hover-lift text-center">
              <div className="icon-box mb-6 mx-auto icon-neon-cyan">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Automatisierung skalieren</h3>
              <p className="text-text-medium">Über Zeit automatisieren wir immer mehr. Ihre Kosten sinken, die Qualität steigt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="usecases" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4 text-center">
            Anwendungsfälle
          </h2>
          <p className="text-text-medium text-lg text-center mb-16 max-w-2xl mx-auto">
            Konkrete Lösungen für konkrete Probleme — so helfen wir Unternehmen jeden Tag.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: FileText,
                emoji: '📧',
                title: 'Angebotserstellung',
                description: 'LV kommt rein, Angebot geht raus. Automatisch kalkuliert.',
                color: 'pink'
              },
              {
                icon: Search,
                emoji: '🔍',
                title: 'Lokales SEO',
                description: 'Ihre Kunden suchen lokal. Wir sorgen dafür, dass Sie gefunden werden.',
                color: 'yellow'
              },
              {
                icon: Scale,
                emoji: '⚖️',
                title: 'Schadenregulierung',
                description: 'Versicherungsfälle schneller abwickeln. Weniger Papier, mehr Durchsatz.',
                color: 'cyan'
              },
              {
                icon: Building2,
                emoji: '🏗️',
                title: 'Ausschreibungen & KI',
                description: 'GAEB-Dateien automatisch parsen und vorkalkulieren.',
                color: 'blue'
              },
              {
                icon: BarChart3,
                emoji: '📊',
                title: 'Sales-Prozesse',
                description: 'Innen- und Außendienst digitalisieren. Vom Lead bis zum Abschluss.',
                color: 'green'
              },
              {
                icon: Brain,
                emoji: '🤖',
                title: 'KI-Integration',
                description: 'ChatGPT & Co. sinnvoll einsetzen. Datenschutzkonform, on-premise möglich.',
                color: 'pink'
              }
            ].map((usecase, index) => {
              const Icon = usecase.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl card-shadow hover-lift">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{usecase.emoji}</div>
                    <div className={`icon-box icon-neon-${usecase.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{usecase.title}</h3>
                  <p className="text-text-medium mb-4">{usecase.description}</p>
                  <a href="#" className="text-accent font-medium hover:text-accent/80 transition-colors inline-flex items-center">
                    Mehr erfahren
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
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
              Wir sind anders als klassische IT-Dienstleister. Wir denken unternehmerisch und liefern Ergebnisse, nicht nur Code.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="icon-box mb-6 mx-auto icon-neon-pink">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3">Wir denken wie Gründer</h3>
              <p className="text-text-medium">Unternehmerisch, nicht Dienstleister</p>
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
              <h3 className="text-lg font-semibold text-primary mb-3">Service statt Software</h3>
              <p className="text-text-medium">Sie brauchen kein neues Tool zu lernen</p>
            </div>
            <div className="text-center">
              <div className="icon-box mb-6 mx-auto icon-neon-blue">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3">KI-First</h3>
              <p className="text-text-medium">Wir nutzen KI wo es Sinn macht, nicht als Buzzword</p>
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
              Kostenlose Prozessanalyse — wir zeigen Ihnen in 30 Minuten, wo Ihre größten Automatisierungshebel liegen.
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
                Wir automatisieren Ihre Prozesse. Sie konzentrieren sich aufs Geschäft.
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