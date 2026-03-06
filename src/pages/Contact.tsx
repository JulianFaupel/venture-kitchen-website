import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, Globe, Linkedin, Instagram, Facebook, ArrowLeft, Check } from 'lucide-react';

function Contact() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
          <linearGradient id="neon-cyan-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f700ff" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#0080FF" />
          </linearGradient>
        </defs>
      </svg>

      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-blaugrau-light/95 backdrop-blur-sm shadow-md'
          : 'bg-white shadow-sm'
      }`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <span className="logo-gradient-text">VENTURE KITCHEN.</span>
            </Link>
            <Link
              to="/"
              className="flex items-center text-charcoal hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Zurück zur Startseite
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero-background pt-32 pb-20">
        <div className="hero-content">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Kontakt aufnehmen
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Haben Sie Fragen oder möchten Sie Ihr Projekt besprechen? Wir freuen uns auf Ihre Nachricht.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-blaugrau-light">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-primary mb-6">Schreiben Sie uns</h2>

                {showSuccess ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Vielen Dank!</h3>
                    <p className="text-text-medium">
                      Wir haben Ihre Nachricht erhalten und werden uns in Kürze bei Ihnen melden.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">Name *</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-lighter bg-white focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                          placeholder="Ihr Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">E-Mail *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-lighter bg-white focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                          placeholder="ihre@email.de"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">Telefon (optional)</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-lighter bg-white focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        placeholder="+49 123 456 789"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">Betreff *</label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-lighter bg-white focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        placeholder="Worum geht es?"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">Nachricht *</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-lighter bg-white focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                        placeholder="Ihre Nachricht..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="gradient-button text-white px-8 py-4 rounded-lg font-semibold text-lg w-full flex items-center justify-center"
                    >
                      Nachricht senden
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-primary mb-8">Kontaktinformationen</h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="icon-box icon-neon-pink flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">E-Mail</p>
                      <a href="mailto:hello@venturekitchen.io" className="text-text-medium hover:text-accent transition-colors">
                        hello@venturekitchen.io
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="icon-box icon-neon-yellow flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Telefon</p>
                      <a href="tel:+49123456789" className="text-text-medium hover:text-accent transition-colors">
                        +49 (0) 123 456 789
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="icon-box icon-neon-blue flex-shrink-0">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Webseite</p>
                      <a href="https://venturekitchen.io" className="text-text-medium hover:text-accent transition-colors">
                        venturekitchen.io
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-neutral-lighter">
                  <p className="font-semibold text-primary mb-4">Folgen Sie uns</p>
                  <div className="flex space-x-4">
                    <a href="#" className="icon-box icon-neon-cyan hover:scale-105 transition-transform">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="icon-box icon-neon-pink hover:scale-105 transition-transform">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="icon-box icon-neon-blue hover:scale-105 transition-transform">
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="mt-12 bg-white rounded-2xl p-6">
                  <h3 className="font-semibold text-primary mb-2">Schnelle Antwort garantiert</h3>
                  <p className="text-text-medium text-sm">
                    Wir antworten in der Regel innerhalb von 24 Stunden auf Ihre Anfrage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-8">
        <div className="container mx-auto px-6">
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
      </footer>
    </div>
  );
}

export default Contact;
