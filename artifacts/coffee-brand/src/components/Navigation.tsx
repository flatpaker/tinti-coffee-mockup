import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/context/LanguageContext';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, t, toggle } = useLang();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.origin, href: '#origin' },
    { label: t.nav.collection, href: '#collection' },
    { label: t.nav.brewing, href: '#brewing' },
    { label: t.nav.values, href: '#values' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-primary/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 text-white z-10 relative">
          <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            <path d="M25 60L40 40L60 55L75 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M45 75C45 75 48 65 55 65C62 65 65 75 65 75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M40 25C40 25 45 20 45 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M50 25C50 25 55 20 55 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M60 25C60 25 65 20 65 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="font-heading text-xl tracking-wider hidden md:block text-white">Café Huila</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-white/90">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide hover:text-secondary transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 z-10">
          <button
            onClick={toggle}
            data-testid="button-lang-toggle"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-typewriter uppercase tracking-widest transition-all hover:bg-white/10"
            style={{ borderColor: 'rgba(196,154,58,0.5)', color: '#C49A3A' }}
            aria-label="Toggle language"
          >
            <span className={lang === 'es' ? 'opacity-100' : 'opacity-40'}>ES</span>
            <span style={{ color: 'rgba(196,154,58,0.3)' }}>|</span>
            <span className={lang === 'en' ? 'opacity-100' : 'opacity-40'}>EN</span>
          </button>

          <button
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-2.5 rounded-full font-sans text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            data-testid="button-order-nav"
          >
            {t.nav.order}
          </button>
        </div>
      </div>
    </motion.header>
  );
}
