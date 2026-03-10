import { useState, useEffect } from 'react';

function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setTimeout(() => setVisible(true), 1000);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    localStorage.setItem('cookie_consent_date', new Date().toISOString());
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem('cookie_consent', 'rejected');
    localStorage.setItem('cookie_consent_date', new Date().toISOString());
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] transition-transform duration-400"
      style={{ transform: visible ? 'translateY(0)' : 'translateY(100%)' }}
    >
      <div className="bg-primary/97 backdrop-blur-md text-white px-6 py-5">
        <div className="max-w-5xl mx-auto flex items-center gap-6 flex-wrap">
          <p className="flex-1 min-w-[280px] text-sm leading-relaxed text-white/85">
            Wir verwenden Cookies, um Ihnen die bestmögliche Nutzererfahrung zu bieten und unsere Website zu analysieren.
            Weitere Informationen finden Sie in unserer{' '}
            <a href="/datenschutz" className="text-accent underline hover:text-accent/80">
              Datenschutzerklärung
            </a>.
          </p>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={accept}
              className="px-6 py-2.5 rounded-lg text-sm font-medium bg-accent text-white hover:bg-accent/90 transition-colors"
            >
              Alle akzeptieren
            </button>
            <button
              onClick={reject}
              className="px-6 py-2.5 rounded-lg text-sm font-medium bg-transparent border border-white/30 text-white/80 hover:bg-white/10 transition-colors"
            >
              Nur notwendige
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;
