import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Check, ChevronRight, ArrowRight, Mail, Linkedin, Rocket, Layout, Globe, FileCode, MessageSquare, Target, Lightbulb, Sparkles, Zap, BarChart3, Shield } from 'lucide-react';

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
        about: document.getElementById('about')?.offsetTop || 0,
        services: document.getElementById('services')?.offsetTop || 0
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
    { id: 'about', label: 'Über uns', href: '#about' },
    { id: 'services', label: 'Services', href: '#services', hasDropdown: true },
    { id: 'contact', label: 'Kontakt', href: '/kontakt', isRoute: true }
  ];

  const serviceItems = [
    { icon: FileCode, label: 'Individuelle Software', description: 'Maßgeschneiderte Entwicklung' },
    { icon: Rocket, label: 'Digitale Produkte', description: 'MVPs, Apps & Plattformen' },
    { icon: Lightbulb, label: 'Beratung & Strategie', description: 'Digitale Transformation' },
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
          ? 'bg-blaugrau-light/95 backdrop-blur-sm shadow-md'
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
                link.hasDropdown ? (
                  <div
                    key={link.id}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <a
                      href={link.href}
                      className={`${getNavLinkClasses(link.id)} flex items-center gap-1`}
                    >
                      {link.label}
                      <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-90' : ''}`} />
                    </a>

                    {/* Dropdown Menu */}
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${
                      servicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}>
                      <div className="bg-white rounded-xl shadow-xl border border-neutral-lighter p-4 min-w-[280px]">
                        <div className="grid gap-1">
                          {serviceItems.map((item, index) => {
                            const Icon = item.icon;
                            return (
                              <a
                                key={index}
                                href="#services"
                                className="flex items-center gap-4 p-3 rounded-lg hover:bg-background transition-colors group"
                              >
                                <div className="w-10 h-10 bg-neutral-lighter rounded-lg flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                                  <Icon className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                  <div className="font-semibold text-primary text-sm">{item.label}</div>
                                  <div className="text-text-medium text-xs">{item.description}</div>
                                </div>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : link.isRoute ? (
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
                Kontakt aufnehmen
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
              Kontakt aufnehmen
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
              <div className="max-w-2xl flex-1">
                <h1 className="text-5xl lg:text-6xl text-white mb-6 leading-tight normal-case font-bold">
                  Digitale Entscheidungen.<br />Unternehmerisch gedacht.
                </h1>
                <p className="text-xl lg:text-2xl text-white/90 mb-6 leading-relaxed">
                  Ihr unternehmerischer Partner für wirksame digitale Produkte und Systeme.
                </p>
                <p className="text-base lg:text-lg text-white/70 mb-10 leading-relaxed">
                  Wir sind Ihre zentrale Anlaufstelle für digitale Transformation. Ob Sie eine neue Software entwickeln, bestehende Systeme modernisieren oder strategische Beratung benötigen – wir haben die Expertise, um Ihre Ziele zu erreichen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/kontakt"
                    className="gradient-button text-white px-8 py-4 rounded-lg font-semibold text-lg"
                  >
                    Kontakt aufnehmen
                  </Link>
                </div>
              </div>

              {/* Right: UI Mockups - Wild Layout */}
              <div className="flex-1 relative h-[420px] w-full max-w-lg hidden lg:block">

                {/* Card 1: Browser Dashboard - Large, back */}
                <div className="absolute top-0 right-0 w-72 bg-white rounded-xl shadow-2xl overflow-hidden">
                  <div className="bg-gray-100 px-3 py-1.5 flex items-center gap-2 border-b">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-1 bg-white rounded px-2 py-0.5 text-[9px] text-neutral-medium">analytics.app</div>
                  </div>
                  <div className="p-4">
                    <div className="flex gap-2 mb-3">
                      {['+24%', '1.2k'].map((val, i) => (
                        <div key={i} className="flex-1 bg-blaugrau-light rounded-lg p-2 text-center">
                          <div className="text-xs font-bold text-primary">{val}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-end gap-1 h-20">
                      {[35, 55, 40, 75, 50, 90, 65, 80, 60].map((h, i) => (
                        <div key={i} className="flex-1 bg-gradient-to-t from-accent to-accent/30 rounded-t" style={{ height: `${h}%` }}></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card 2: Mobile App - Medium, overlapping left */}
                <div className="absolute top-16 -left-4 w-36 bg-[#1a1a2e] rounded-[1.75rem] shadow-2xl p-1.5 z-10">
                  <div className="bg-white rounded-[1.5rem] overflow-hidden">
                    <div className="bg-blaugrau-light px-3 py-1 flex justify-center">
                      <div className="w-10 h-2.5 bg-black rounded-full"></div>
                    </div>
                    <div className="p-2.5 space-y-1.5">
                      <div className="w-5 h-5 bg-gradient-to-br from-accent to-[#00ffd4] rounded-lg"></div>
                      {[1, 2, 3].map((_, i) => (
                        <div key={i} className="bg-blaugrau-light rounded-lg p-1.5 flex items-center gap-1.5">
                          <div className="w-4 h-4 bg-white rounded"></div>
                          <div className="flex-1">
                            <div className="h-1 bg-neutral-lighter rounded w-full"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center pb-1.5">
                      <div className="w-10 h-1 bg-black/20 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Card 3: Terminal - Small, bottom left */}
                <div className="absolute bottom-12 left-8 w-44 bg-[#0d1117] rounded-lg shadow-2xl p-2.5 z-20">
                  <div className="flex gap-1 mb-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                  </div>
                  <div className="font-mono text-[8px] space-y-0.5">
                    <div className="text-green-400">$ npm run deploy</div>
                    <div className="text-gray-500">Building...</div>
                    <div className="text-cyan-400">✓ Deployed</div>
                  </div>
                </div>

                {/* Card 4: Wireframe - Medium, bottom right */}
                <div className="absolute bottom-0 right-8 w-48 bg-white rounded-xl shadow-2xl p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-[8px] text-neutral-medium font-medium">Wireframe</div>
                    <div className="flex gap-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/40"></div>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-5 bg-blaugrau-light rounded flex items-center px-2 gap-1.5">
                      <div className="w-2.5 h-2.5 bg-gradient-to-br from-accent to-[#00ffd4] rounded"></div>
                      <div className="h-1 bg-neutral-lighter rounded flex-1"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="h-8 bg-blaugrau-light rounded"></div>
                      <div className="h-8 bg-blaugrau-light rounded"></div>
                      <div className="h-8 bg-blaugrau-light rounded"></div>
                    </div>
                    <div className="h-3 bg-accent/20 rounded"></div>
                  </div>
                </div>

                {/* Decorative gradient blob */}
                <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-accent/20 to-[#00ffd4]/15 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Carousel */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm tracking-[0.3em] text-neutral-medium uppercase mb-8">
            Vertrauen von
          </p>
          <div className="relative">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

            {/* Scrolling container */}
            <div className="flex animate-scroll">
              {/* First set of logos */}
              {['Kunde 1', 'Kunde 2', 'Kunde 3', 'Kunde 4', 'Kunde 5', 'Kunde 6'].map((kunde, index) => (
                <div key={index} className="flex-shrink-0 mx-12">
                  <span className="text-xl font-semibold text-neutral-medium/50 whitespace-nowrap">{kunde}</span>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {['Kunde 1', 'Kunde 2', 'Kunde 3', 'Kunde 4', 'Kunde 5', 'Kunde 6'].map((kunde, index) => (
                <div key={`dup-${index}`} className="flex-shrink-0 mx-12">
                  <span className="text-xl font-semibold text-neutral-medium/50 whitespace-nowrap">{kunde}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - "Kennen Sie das?" */}
      <section id="about" className="py-24 bg-blaugrau-light">
        <div className="container mx-auto px-6">
          <h2 className="font-rubik text-[2rem] lg:text-4xl font-bold text-primary mb-4 text-center">
            Kennen Sie das?
          </h2>
          <p className="text-text-medium text-lg text-center mb-12 max-w-2xl mx-auto">
            Digitale Projekte scheitern oft nicht an der Technik – sondern an der Zusammenarbeit.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl card-shadow hover-lift">
              <div className="icon-box mb-6 icon-neon-pink">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Komplexität</h3>
              <p className="text-text-medium">Software-Projekte sind unübersichtlich und schwer zu steuern. Budgets explodieren, Timelines verschieben sich.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl card-shadow hover-lift">
              <div className="icon-box mb-6 icon-neon-yellow">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Enttäuschung</h3>
              <p className="text-text-medium">Entwickler verstehen Ihr Business nicht. Das Ergebnis entspricht nicht dem, was Sie sich vorgestellt haben.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl card-shadow hover-lift">
              <div className="icon-box mb-6 icon-neon-cyan">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Risiko</h3>
              <p className="text-text-medium">Hohe Investitionen ohne Erfolgsgarantie. Sie fragen sich: Wird das Projekt wirklich Mehrwert schaffen?</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Section - Venture Kitchen als Partner */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-rubik text-[2rem] lg:text-4xl font-bold text-primary mb-6">
              Ein Partner, der Ihr Business versteht
            </h2>
            <p className="text-text-medium text-lg leading-relaxed">
              Wir entwickeln Software nicht als Auftragnehmer – sondern als unternehmerischer Partner.
              Wir verstehen Geschäftsmodelle, denken in Ergebnissen und liefern mehr, als Sie erwartet haben.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-blaugrau-light p-8 rounded-2xl hover-lift text-center">
              <div className="icon-box mb-6 mx-auto icon-neon-pink">
                <Rocket className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Unternehmerisch</h3>
              <p className="text-text-medium">Wir denken wie Gründer, nicht wie Dienstleister. Jedes Projekt behandeln wir, als wäre es unser eigenes.</p>
            </div>
            <div className="bg-blaugrau-light p-8 rounded-2xl hover-lift text-center">
              <div className="icon-box mb-6 mx-auto icon-neon-yellow">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Ganzheitlich</h3>
              <p className="text-text-medium">Von der Idee bis zum Betrieb. Wir begleiten Sie durch den gesamten Prozess – nicht nur bei der Entwicklung.</p>
            </div>
            <div className="bg-blaugrau-light p-8 rounded-2xl hover-lift text-center">
              <div className="icon-box mb-6 mx-auto icon-neon-cyan">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Partnerschaftlich</h3>
              <p className="text-text-medium">Langfristige Zusammenarbeit statt Projekte. Wir wachsen mit Ihrem Erfolg.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-blaugrau-light">
        <div className="container mx-auto px-6">
          <h2 className="font-rubik text-[2rem] lg:text-4xl font-bold text-primary mb-4 text-center">
            Was wir für Sie tun
          </h2>
          <p className="text-text-medium text-lg text-center mb-16 max-w-2xl mx-auto">
            Von der ersten Idee bis zum laufenden System – wir begleiten Sie in allen Phasen der digitalen Transformation.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Service 1: Individuelle Software */}
            <div className="bg-white p-8 rounded-2xl card-shadow hover-lift">
              <div className="icon-box mb-6 icon-neon-pink">
                <FileCode className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Individuelle Software</h3>
              <p className="text-text-medium mb-6">
                Maßgeschneiderte Softwareentwicklung für Ihre spezifischen Anforderungen. Von der Analyse bis zum Go-Live.
              </p>
              <ul className="space-y-2 text-text-medium text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Web-Applikationen & Plattformen</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Backend-Systeme & APIs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Systemintegration & Migration</span>
                </li>
              </ul>
            </div>

            {/* Service 2: Digitale Produkte */}
            <div className="bg-white p-8 rounded-2xl card-shadow hover-lift">
              <div className="icon-box mb-6 icon-neon-yellow">
                <Rocket className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Digitale Produkte</h3>
              <p className="text-text-medium mb-6">
                MVPs, Web-Apps, Mobile Apps und Plattformen. Wir bringen Ihre Ideen vom Konzept zur Realität.
              </p>
              <ul className="space-y-2 text-text-medium text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>MVP-Entwicklung in Wochen</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Mobile Apps (iOS & Android)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>SaaS & B2B-Plattformen</span>
                </li>
              </ul>
            </div>

            {/* Service 3: Beratung & Strategie */}
            <div className="bg-white p-8 rounded-2xl card-shadow hover-lift">
              <div className="icon-box mb-6 icon-neon-cyan">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Beratung & Strategie</h3>
              <p className="text-text-medium mb-6">
                Strategische Beratung, digitale Roadmaps und Technologie-Auswahl. Damit Sie die richtigen Entscheidungen treffen.
              </p>
              <ul className="space-y-2 text-text-medium text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Digitale Transformation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Technologie-Auswahl & Architektur</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Prozessoptimierung & Automation</span>
                </li>
              </ul>
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
            Wir setzen auf bewährte und zukunftssichere Technologien, die skalieren und performen.
          </p>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Cloud & Infrastructure",
                items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
                icon: <Globe className="w-6 h-6" />
              },
              {
                title: "Web & Mobile",
                items: ["React", "React Native", "Node.js", "TypeScript"],
                icon: <Layout className="w-6 h-6" />
              },
              {
                title: "AI & Automation",
                items: ["LLMs", "OpenAI", "Workflows", "Automatisierung"],
                icon: <Zap className="w-6 h-6" />
              },
              {
                title: "Daten & Analytics",
                items: ["PostgreSQL", "MongoDB", "Analytics", "BI-Tools"],
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

      {/* Testimonials Section - Platzhalter */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-4">
            Was unsere Kunden sagen
          </h2>
          <p className="text-text-medium text-lg text-center mb-16 max-w-2xl mx-auto">
            Erfolgsgeschichten aus der Zusammenarbeit mit Venture Kitchen.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "Die Zusammenarbeit war außergewöhnlich. Venture Kitchen hat nicht nur verstanden, was wir brauchen, sondern uns geholfen zu erkennen, was wir wirklich brauchen.",
                name: "Testimonial folgt",
                role: "Geschäftsführer",
                company: "Unternehmen"
              },
              {
                quote: "Endlich ein Partner, der mitdenkt. Die Kombination aus technischer Expertise und unternehmerischem Verständnis ist selten.",
                name: "Testimonial folgt",
                role: "CTO",
                company: "Unternehmen"
              },
              {
                quote: "Von der ersten Idee bis zum Launch – alles aus einer Hand. Das hat uns viel Zeit und Nerven gespart.",
                name: "Testimonial folgt",
                role: "Gründer",
                company: "Startup"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-blaugrau-light rounded-2xl p-8 hover-lift">
                <div className="text-accent mb-4">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <p className="text-text-medium mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-neutral-lighter pt-4">
                  <p className="text-primary font-semibold">{testimonial.name}</p>
                  <p className="text-text-medium text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-text-medium mt-12">
            Mehr Referenzen auf Anfrage
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blaugrau-light">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Lassen Sie uns über Ihr Projekt sprechen
            </h2>
            <p className="text-xl text-charcoal mb-8 leading-relaxed">
              Venture Kitchen ist Ihr Partner für durchdachte digitale Lösungen.
              Erzählen Sie uns von Ihrem Vorhaben – wir hören zu und zeigen Möglichkeiten auf.
            </p>
            <Link
              to="/kontakt"
              className="gradient-button text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center"
            >
              Kontakt aufnehmen
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <p className="mt-4 text-text-medium text-sm">
              Unverbindliches Erstgespräch • Persönliche Beratung
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <span className="logo-gradient-text">VENTURE KITCHEN.</span>
              </div>
              <p className="text-neutral-light mb-6">
                Ihr unternehmerischer Partner für wirksame digitale Produkte und Systeme.
              </p>
              <div className="flex space-x-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neutral-light hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {['Individuelle Software', 'Digitale Produkte', 'Beratung & Strategie'].map((item) => (
                  <li key={item}>
                    <a href="#services" className="text-neutral-light hover:text-white transition-colors flex items-center">
                      <ChevronRight className="w-4 h-4 mr-2" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Unternehmen */}
            <div>
              <h3 className="text-white font-semibold mb-6">Unternehmen</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-neutral-light hover:text-white transition-colors flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Über uns
                  </a>
                </li>
                <li>
                  <Link to="/kontakt" className="text-neutral-light hover:text-white transition-colors flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Kontakt
                  </Link>
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
