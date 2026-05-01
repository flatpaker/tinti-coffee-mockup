export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-16 relative z-10" style={{ backgroundColor: '#1a2e22' }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <svg width="52" height="52" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#C49A3A' }}>
                <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M20 65L38 38L58 55L78 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="22" cy="66" r="4" fill="currentColor" />
                <circle cx="55" cy="52" r="4" fill="currentColor" />
                <path d="M42 78C42 78 46 68 55 68C64 68 68 78 68 78" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M45 18C45 18 48 10 52 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M53 22C53 22 56 14 60 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="font-heading text-xl tracking-wider" style={{ color: '#F5E9D7' }}>Café Huila</span>
            </div>
            <p className="font-typewriter text-xs uppercase tracking-widest mb-2" style={{ color: '#C49A3A' }}>
              Pitalito, Huila — Colombia
            </p>
            <p className="text-sm font-light leading-relaxed" style={{ color: '#F5E9D7', opacity: 0.5 }}>
              Single-origin specialty coffee grown at the intersection of tradition, altitude, and care.
            </p>
          </div>

          <div>
            <span className="font-typewriter text-xs uppercase tracking-widest block mb-5" style={{ color: '#C49A3A' }}>Navigation</span>
            <nav className="space-y-3">
              {['Origin', 'Collection', 'Brewing', 'Values', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm font-light transition-colors hover:opacity-100"
                  style={{ color: '#F5E9D7', opacity: 0.5 }}
                  data-testid={`footer-link-${link.toLowerCase()}`}
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <span className="font-typewriter text-xs uppercase tracking-widest block mb-5" style={{ color: '#C49A3A' }}>Connect</span>
            <div className="space-y-3">
              <a href="mailto:hola@cafehuila.co" className="flex items-center gap-3 text-sm font-light transition-opacity hover:opacity-100" style={{ color: '#F5E9D7', opacity: 0.5 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                hola@cafehuila.co
              </a>
              <a href="https://instagram.com/cafehuila.co" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-light transition-opacity hover:opacity-100" style={{ color: '#F5E9D7', opacity: 0.5 }} data-testid="footer-link-instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                @cafehuila.co
              </a>
              <div className="flex items-center gap-3 text-sm font-light" style={{ color: '#F5E9D7', opacity: 0.5 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
                Pitalito, Huila, Colombia
              </div>
            </div>
          </div>
        </div>

        <div className="border-t flex flex-col md:flex-row justify-between items-center pt-8 gap-4" style={{ borderColor: 'rgba(245,233,215,0.1)' }}>
          <p className="font-typewriter text-xs" style={{ color: '#F5E9D7', opacity: 0.3 }}>
            &copy; {year} Café Huila. All rights reserved.
          </p>
          <p className="font-typewriter text-xs" style={{ color: '#F5E9D7', opacity: 0.3 }}>
            Grown with love at 1,700m above sea level.
          </p>
        </div>
      </div>
    </footer>
  );
}
