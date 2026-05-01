import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/context/LanguageContext';

export function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLang();
  const c = t.contact;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 noise-bg relative z-10" style={{ backgroundColor: '#F5E9D7' }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-typewriter text-sm uppercase tracking-widest mb-4 block" style={{ color: '#C49A3A' }}>{c.eyebrow}</span>
            <h2 className="text-4xl md:text-5xl mb-8" style={{ color: '#2F4F3A' }}>{c.heading}</h2>
            <p className="text-lg font-light mb-12" style={{ color: '#2F4F3A', opacity: 0.7, lineHeight: 1.8 }}>{c.sub}</p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full border flex items-center justify-center flex-shrink-0" style={{ borderColor: '#2F4F3A', color: '#2F4F3A' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                </div>
                <div>
                  <span className="font-typewriter text-xs uppercase tracking-widest block mb-1" style={{ color: '#C49A3A' }}>{c.locationLabel}</span>
                  <p className="font-medium" style={{ color: '#2F4F3A' }}>Pitalito, Huila</p>
                  <p className="text-sm font-light" style={{ color: '#2F4F3A', opacity: 0.6 }}>{c.locationSub}</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full border flex items-center justify-center flex-shrink-0" style={{ borderColor: '#2F4F3A', color: '#2F4F3A' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <span className="font-typewriter text-xs uppercase tracking-widest block mb-1" style={{ color: '#C49A3A' }}>{c.emailLabel}</span>
                  <p className="font-medium" style={{ color: '#2F4F3A' }}>hola@cafehuila.co</p>
                  <p className="text-sm font-light" style={{ color: '#2F4F3A', opacity: 0.6 }}>{c.emailSub}</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full border flex items-center justify-center flex-shrink-0" style={{ borderColor: '#2F4F3A', color: '#2F4F3A' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </div>
                <div>
                  <span className="font-typewriter text-xs uppercase tracking-widest block mb-1" style={{ color: '#C49A3A' }}>{c.igLabel}</span>
                  <p className="font-medium" style={{ color: '#2F4F3A' }}>@cafehuila.co</p>
                  <p className="text-sm font-light" style={{ color: '#2F4F3A', opacity: 0.6 }}>{c.igSub}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-10 border-t" style={{ borderColor: 'rgba(47,79,58,0.15)' }}>
              <svg viewBox="0 0 300 60" width="240" height="48" fill="none" className="opacity-30">
                <path d="M10 30 Q30 10 50 30 Q70 50 90 30 Q110 10 130 30 Q150 50 170 30 Q190 10 210 30 Q230 50 250 30 Q270 10 290 30" stroke="#2F4F3A" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="50" cy="30" r="3" fill="#2F4F3A"/>
                <circle cx="130" cy="30" r="3" fill="#2F4F3A"/>
                <circle cx="210" cy="30" r="3" fill="#2F4F3A"/>
                <circle cx="290" cy="30" r="3" fill="#2F4F3A"/>
              </svg>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {submitted ? (
              <div className="rounded-2xl p-10 text-center" style={{ backgroundColor: '#2F4F3A' }}>
                <div className="w-16 h-16 rounded-full border-2 mx-auto mb-6 flex items-center justify-center" style={{ borderColor: '#C49A3A', color: '#C49A3A' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 className="text-2xl text-white mb-3">{c.successHeading}</h3>
                <p className="text-white/60 font-light font-typewriter">{c.successSub}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-contact">
                <div>
                  <label className="font-typewriter text-xs uppercase tracking-widest block mb-2" style={{ color: '#2F4F3A', opacity: 0.6 }}>{c.nameLabel}</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState(s => ({ ...s, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border bg-white/60 focus:outline-none focus:ring-1 transition-all text-sm font-light"
                    style={{ borderColor: 'rgba(47,79,58,0.25)', color: '#2F4F3A' }}
                    placeholder={c.namePlaceholder}
                    data-testid="input-name"
                  />
                </div>

                <div>
                  <label className="font-typewriter text-xs uppercase tracking-widest block mb-2" style={{ color: '#2F4F3A', opacity: 0.6 }}>{c.emailFieldLabel}</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState(s => ({ ...s, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border bg-white/60 focus:outline-none focus:ring-1 transition-all text-sm font-light"
                    style={{ borderColor: 'rgba(47,79,58,0.25)', color: '#2F4F3A' }}
                    placeholder={c.emailPlaceholder}
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <label className="font-typewriter text-xs uppercase tracking-widest block mb-2" style={{ color: '#2F4F3A', opacity: 0.6 }}>{c.messageLabel}</label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState(s => ({ ...s, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border bg-white/60 focus:outline-none focus:ring-1 transition-all text-sm font-light resize-none"
                    style={{ borderColor: 'rgba(47,79,58,0.25)', color: '#2F4F3A' }}
                    placeholder={c.messagePlaceholder}
                    data-testid="textarea-message"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full font-semibold text-sm tracking-wider transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ backgroundColor: '#C49A3A', color: '#FAFAF8' }}
                  data-testid="button-submit-contact"
                >
                  {c.submit}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
