import React, { useState, useEffect } from 'react';
import { Menu, X, Check, ChevronRight, ArrowRight, Phone, Mail, Linkedin, Facebook, Instagram, PenTool, CheckCircle, Rocket, Layout, FileText, ShoppingBag, Calendar, Globe, FileCode, MessageSquare, Target, Lightbulb, Sparkles, Zap, BarChart3, Shield } from 'lucide-react';

function RequestModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [website, setWebsite] = useState('');
  const [improvements, setImprovements] = useState<string[]>([]);
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    let timeout: number;
    if (showSuccess) {
      timeout = window.setTimeout(() => {
        handleClose();
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [showSuccess]);

  const handleClose = () => {
    setShowSuccess(false);
    setStep(1);
    setWebsite('');
    setImprovements([]);
    setContactInfo({ name: '', email: '', phone: '' });
    onClose();
  };

  const improvementOptions = [
    { id: 'design', icon: Layout, label: 'Design optimieren' },
    { id: 'content', icon: FileText, label: 'Inhalte verbessern' },
    { id: 'ecommerce', icon: ShoppingBag, label: 'Online-Shop' },
    { id: 'booking', icon: Calendar, label: 'Buchungssystem' },
    { id: 'seo', icon: Globe, label: 'SEO optimieren' },
    { id: 'custom', icon: FileCode, label: 'Individuelle Funktionen' },
    { id: 'support', icon: MessageSquare, label: 'Support & Wartung' },
  ];

  const toggleImprovement = (id: string) => {
    setImprovements(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step === 1 && website && improvements.length > 0) {
      setStep(2);
    }
  };

  const handleSubmit = () => {
    if (contactInfo.name && contactInfo.email) {
      console.log({ website, improvements, contactInfo });
      setShowSuccess(true);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-xl overflow-hidden">
        {showSuccess ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">Vielen Dank!</h3>
            <p className="text-text-medium mb-6">
              Wir werden uns in Kürze mit Ihrem kostenlosen Entwurf bei Ihnen melden.
            </p>
            <button
              onClick={handleClose}
              className="text-sm text-neutral-medium hover:text-primary"
            >
              Schließen
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center p-4 border-b border-neutral-lighter">
              <h2 className="text-xl font-bold text-primary">Kostenlosen Entwurf anfordern</h2>
              <button onClick={handleClose} className="text-neutral-medium hover:text-primary">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {step === 1 ? (
                <>
                  <div className="mb-6">
                    <label htmlFor="website" className="block text-sm font-medium text-primary mb-1">
                      Ihre aktuelle Webseite
                    </label>
                    <input
                      id="website"
                      type="url"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      placeholder="https://www.ihre-webseite.de"
                      className="w-full px-3 py-2 rounded-lg border border-neutral-lighter focus:ring-2 focus:ring-accent focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-primary mb-3">Was möchten Sie verbessern?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {improvementOptions.map((option) => {
                        const Icon = option.icon;
                        const isSelected = improvements.includes(option.id);
                        return (
                          <button
                            key={option.id}
                            onClick={() => toggleImprovement(option.id)}
                            className={`flex items-center space-x-2 p-2 rounded-lg border transition-all text-left ${
                              isSelected
                                ? 'border-accent bg-accent/5 text-primary'
                                : 'border-neutral-lighter hover:border-accent/50'
                            }`}
                          >
                            <Icon className={`w-4 h-4 ${isSelected ? 'text-accent' : 'text-neutral-medium'}`} />
                            <span className="text-xs font-medium leading-tight">{option.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-1">
                      Name*
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={contactInfo.name}
                      onChange={handleContactChange}
                      className="w-full px-3 py-2 rounded-lg border border-neutral-lighter focus:ring-2 focus:ring-accent focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">
                      E-Mail*
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={contactInfo.email}
                      onChange={handleContactChange}
                      className="w-full px-3 py-2 rounded-lg border border-neutral-lighter focus:ring-2 focus:ring-accent focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1">
                      Telefon (optional)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={contactInfo.phone}
                      onChange={handleContactChange}
                      className="w-full px-3 py-2 rounded-lg border border-neutral-lighter focus:ring-2 focus:ring-accent focus:border-transparent text-sm"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-neutral-lighter bg-background rounded-b-2xl">
              <button
                onClick={step === 1 ? handleNext : handleSubmit}
                disabled={step === 1 ? !website || improvements.length === 0 : !contactInfo.name || !contactInfo.email}
                className="w-full gradient-button text-white px-4 py-2 rounded-lg font-medium text-sm flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{step === 1 ? 'Weiter' : 'Kostenlosen Entwurf anfordern'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              {step === 2 && (
                <button
                  onClick={() => setStep(1)}
                  className="w-full mt-2 text-sm text-neutral-medium hover:text-primary"
                >
                  Zurück
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  const openRequestModal = () => setIsModalOpen(true);

  useEffect(() => {
    const handleScroll = () => {
      // Track scroll position for navbar styling
      setIsScrolled(window.scrollY > 50);

      const sections = {
        home: 0,
        about: document.getElementById('about')?.offsetTop || 0,
        services: document.getElementById('services')?.offsetTop || 0,
        contact: document.getElementById('contact')?.offsetTop || 0
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

  // Intersection Observer for step animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const stepIndex = parseInt(entry.target.getAttribute('data-step') || '0');
          if (entry.isIntersecting) {
            setVisibleSteps((prev) => [...new Set([...prev, stepIndex])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('[data-step]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home', href: '#' },
    { id: 'about', label: 'Über uns', href: '#about' },
    { id: 'services', label: 'Services', href: '#services', hasDropdown: true },
    { id: 'contact', label: 'Kontakt', href: '#contact' }
  ];

  const serviceItems = [
    { icon: Layout, label: 'Webdesign', description: 'Individuelle Webseiten' },
    { icon: FileText, label: 'Geschäftsunterlagen', description: 'Einheitliches Design' },
    { icon: Instagram, label: 'Social Media', description: 'Betreuung & Content' },
    { icon: ShoppingBag, label: 'E-Commerce', description: 'Online-Shops' },
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
              <button
                onClick={openRequestModal}
                className="gradient-button text-white px-6 py-3 rounded-lg font-semibold text-base"
              >
                Entwurf anfordern
              </button>
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
              <a
                key={link.id}
                href={link.href}
                className={`text-lg ${getNavLinkClasses(link.id)}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { openRequestModal(); setIsMenuOpen(false); }}
              className="gradient-button text-white px-6 py-3 rounded-lg font-semibold"
            >
              Entwurf anfordern
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero-background flex items-center pt-72 pb-32 overflow-hidden">
        <div className="hero-content w-full">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text */}
              <div>
                <h2 className="text-4xl lg:text-5xl text-accent mb-6 leading-tight normal-case font-bold">
                  Ihre maßgeschneiderte Webseite – direkt, kreativ, erfolgreich.
                </h2>
                <p className="text-xl text-white/90 mb-10 leading-relaxed">
                  Wir entwerfen Ihre neue Webseite, bevor Sie zahlen – individuell für Ihr Unternehmen und bereit, Kunden anzuziehen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={openRequestModal}
                    className="gradient-button text-white px-8 py-4 rounded-lg font-semibold text-lg"
                  >
                    Kostenlosen Entwurf anfordern
                  </button>
                  <a
                    href="#about"
                    className="btn-outline text-center flex items-center justify-center"
                  >
                    Mehr erfahren
                  </a>
                </div>
              </div>

              {/* Right: Transforming Mockup */}
              <div className="hidden lg:block relative">
                <div className="floating-mockup">
                  {/* Browser Window */}
                  <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    {/* Browser Header */}
                    <div className="bg-neutral-lighter px-4 py-3 flex items-center space-x-2">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <div className="flex-1 mx-4">
                        <div className="bg-white rounded-md px-3 py-1 text-xs text-neutral-medium">ihre-webseite.de</div>
                      </div>
                    </div>
                    {/* Browser Content - Animated Transformation */}
                    <div className="relative min-h-[300px] overflow-hidden">
                      {/* Before Version */}
                      <div className="mockup-ugly absolute inset-0">
                        <img src="/mockup-before.png" alt="Vorher" className="w-full h-full object-cover object-top" />
                      </div>

                      {/* Transformation Overlay */}
                      <div className="mockup-transform absolute inset-0 bg-blaugrau flex flex-col items-center justify-center">
                        <div className="logo-spin w-20 h-20 bg-blaugrau-dark rounded-lg shadow-2xl flex items-center justify-center p-3">
                          <img src="/vk-logo.png" alt="Venture Kitchen" className="w-full h-full object-contain" />
                        </div>
                        <div className="mt-4 text-white text-center">
                          <div className="text-sm font-semibold tracking-wide">Unser Team gestaltet um...</div>
                        </div>
                      </div>

                      {/* After Version */}
                      <div className="mockup-nice absolute inset-0">
                        <img src="/mockup-after.png" alt="Nachher" className="w-full h-full object-cover object-top" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="font-rubik text-[2rem] lg:text-4xl font-bold text-primary mb-12 text-center">
            Ihre Webseite hält Sie zurück – wir ändern das.
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl card-shadow hover-lift text-center">
              <div className="icon-box mb-4 mx-auto icon-neon-pink">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Das Problem</h3>
              <p className="text-text-medium">Eine veraltete oder langweilige Webseite kostet Sie Kunden und Vertrauen.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl card-shadow hover-lift text-center">
              <div className="icon-box mb-4 mx-auto icon-neon-yellow">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Die Herausforderung</h3>
              <p className="text-text-medium">Sie wissen, dass Sie online besser aussehen müssen, aber der Prozess wirkt kompliziert.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl card-shadow hover-lift text-center">
              <div className="icon-box mb-4 mx-auto icon-neon-cyan">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Unsere Lösung</h3>
              <p className="text-text-medium">Wir machen es einfach: Individueller Entwurf, sofortiges Ergebnis, stressfreier Start.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="services" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="font-rubik text-[2rem] lg:text-4xl font-bold text-primary mb-6 text-center">
            Ihr Weg zur perfekten Webseite in 3 einfachen Schritten
          </h2>
          <p className="text-text-medium text-lg text-center mb-16 max-w-2xl mx-auto">
            In nur drei Schritten von der Idee zur fertigen Webseite – transparent, schnell und risikofrei.
          </p>

          <div className="max-w-4xl mx-auto relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute left-10 top-24 bottom-24 w-1 bg-gradient-to-b from-accent/20 via-accent to-accent/20"></div>

            {[
              {
                icon: <PenTool className="w-8 h-8" />,
                number: "01",
                title: "Kostenloser Entwurf",
                description: "Wir analysieren Ihr Unternehmen und schicken Ihnen Screenshots Ihrer neuen Webseite – völlig unverbindlich und ohne Risiko.",
                highlight: "Kein Risiko"
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                number: "02",
                title: "Angebot & Gespräch",
                description: "Sie sagen Ja oder passen Details mit uns an – ganz ohne Druck, transparent und fair. Erst wenn Sie überzeugt sind, geht's weiter.",
                highlight: "Transparent"
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                number: "03",
                title: "Live & erfolgreich",
                description: "Ihre Webseite geht online und fängt an, Kunden zu gewinnen. Schnell, unkompliziert und professionell.",
                highlight: "Schnell online"
              }
            ].map((step, index) => (
              <div
                key={index}
                data-step={index}
                className={`relative flex flex-col lg:flex-row items-center gap-32 mb-16 last:mb-0 transition-all duration-700 ${
                  visibleSteps.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Left Icon with Timeline */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-accent transition-all duration-500 ${
                    visibleSteps.includes(index) ? 'scale-100 rotate-0' : 'scale-75 rotate-45'
                  }`}>
                    <div className="text-accent">
                      {step.icon}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md">
                    {step.number}
                  </div>
                </div>

                {/* Content Card - Right */}
                <div className="flex-1">
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-lighter hover:-translate-y-1 max-w-2xl">
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
                      {step.highlight}
                    </span>
                    <h3 className="text-2xl font-bold text-primary mb-3">{step.title}</h3>
                    <p className="text-text-medium text-base leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`text-center mt-20 transition-all duration-700 delay-500 ${
            visibleSteps.length >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button
              onClick={openRequestModal}
              className="gradient-button text-white px-10 py-5 rounded-xl font-semibold text-lg inline-flex items-center group shadow-lg hover:shadow-xl"
            >
              Jetzt kostenlosen Entwurf anfordern
              <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <p className="text-text-medium text-sm mt-4">Unverbindlich & kostenlos</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
            Warum Venture Kitchen?
          </h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              { title: "Direkt zum Ziel", desc: "Ohne Umwege zur perfekten Webseite – wir gehen mitten ins Geschehen." },
              { title: "Individuell statt Standard", desc: "Jede Webseite wird auf Ihr Unternehmen zugeschnitten." },
              { title: "Schnell & einfach", desc: "Vom Entwurf bis zum Launch in kürzester Zeit." },
              { title: "Ergebnisse, die zählen", desc: "Designs, die Kunden anziehen und Umsatz steigern." },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-colors">
                <div className="text-accent mt-1 flex-shrink-0">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white text-lg font-semibold">{item.title}</p>
                  <p className="text-neutral-light mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Unsere Werte
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "Direkt", description: "Ohne Umwege zum Ziel – mitten ins Geschehen.", color: "icon-neon-pink" },
              { icon: Sparkles, title: "Kreativ", description: "Unkonventionelle Lösungen für einzigartige Ergebnisse.", color: "icon-neon-yellow" },
              { icon: Shield, title: "Authentisch", description: "Ehrlich und nahbar in allem was wir tun.", color: "icon-neon-blue" },
              { icon: Zap, title: "Stark", description: "Selbstbewusst und kompetent an Ihrer Seite.", color: "icon-neon-green" },
            ].map((Value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 card-shadow hover-lift">
                <div className="flex flex-col items-center text-center">
                  <div className={`icon-box mb-6 ${Value.color}`}>
                    <Value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{Value.title}</h3>
                  <p className="text-text-medium">{Value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blaugrau">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Bereit für Ihre neue Webseite?
            </h2>
            <p className="text-xl text-charcoal mb-8">
              Lassen Sie uns gemeinsam Ihre Vision umsetzen. Fordern Sie jetzt Ihren kostenlosen Entwurf an.
            </p>
            <button
              onClick={openRequestModal}
              className="gradient-button text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center"
            >
              Kostenlosen Entwurf anfordern
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <p className="mt-4 text-text-medium text-sm">
              Keine Verpflichtung, keine versteckten Kosten
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-primary pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <img src="/vk-logo-white.png" alt="Venture Kitchen" className="h-20 mb-6" />
              <p className="text-neutral-light mb-6">
                Wir gestalten die digitale Zukunft Ihres Unternehmens – direkt, kreativ, erfolgreich.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-neutral-light hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-neutral-light hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-neutral-light hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-6">Navigation</h3>
              <ul className="space-y-3">
                {['Über uns', 'Services', 'Portfolio', 'Blog'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-neutral-light hover:text-white transition-colors flex items-center">
                      <ChevronRight className="w-4 h-4 mr-2" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {['Webdesign', 'E-Commerce', 'SEO Optimierung', 'Content Marketing'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-neutral-light hover:text-white transition-colors flex items-center">
                      <ChevronRight className="w-4 h-4 mr-2" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold mb-6">Kontakt</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 text-neutral-light">
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>hello@venturekitchen.io</span>
                </li>
                <li className="flex items-start space-x-3 text-neutral-light">
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>+49 (0) 123 456 789</span>
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
                <a href="#" className="text-neutral-light hover:text-white transition-colors text-sm">
                  AGB
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Request Modal */}
      <RequestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
