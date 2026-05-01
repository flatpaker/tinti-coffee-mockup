import { motion } from 'framer-motion';
import { useLang } from '@/context/LanguageContext';

const svgs = [
  (
    <svg key="pour" width="80" height="100" viewBox="0 0 80 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M25 10 L15 55 L65 55 L55 10 Z" />
      <path d="M35 55 L35 80 L45 80 L45 55" />
      <ellipse cx="40" cy="83" rx="12" ry="5" />
      <path d="M20 25 Q40 35 60 25" strokeDasharray="3 3" />
      <path d="M18 35 Q40 45 62 35" strokeDasharray="3 3" />
      <path d="M40 2 L40 10" />
      <path d="M35 2 Q40 6 45 2" />
    </svg>
  ),
  (
    <svg key="french" width="80" height="100" viewBox="0 0 80 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="20" y="15" width="40" height="65" rx="4" />
      <line x1="40" y1="5" x2="40" y2="15" />
      <rect x="35" y="2" width="10" height="6" rx="2" />
      <line x1="20" y1="65" x2="60" y2="65" />
      <ellipse cx="40" cy="65" rx="17" ry="4" />
      <line x1="15" y1="40" x2="65" y2="40" strokeDasharray="3 3" />
      <line x1="18" y1="50" x2="62" y2="50" strokeDasharray="3 3" />
    </svg>
  ),
  (
    <svg key="espresso" width="80" height="100" viewBox="0 0 80 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="15" y="20" width="50" height="40" rx="6" />
      <rect x="28" y="60" width="24" height="10" rx="2" />
      <path d="M28 70 Q40 80 52 70" />
      <circle cx="40" cy="40" r="10" />
      <circle cx="40" cy="40" r="6" />
      <path d="M55 30 Q65 30 65 40 Q65 50 55 50" />
      <line x1="35" y1="88" x2="35" y2="95" />
      <line x1="45" y1="88" x2="45" y2="95" />
      <path d="M32 95 Q35 92 38 95" />
      <path d="M42 95 Q45 92 48 95" />
    </svg>
  ),
  (
    <svg key="cold" width="80" height="100" viewBox="0 0 80 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M25 15 Q20 50 22 80 Q22 88 40 88 Q58 88 58 80 Q60 50 55 15 Z" />
      <path d="M25 15 L55 15" />
      <path d="M28 35 Q40 40 52 35" strokeDasharray="3 3" />
      <path d="M26 55 Q40 60 54 55" strokeDasharray="3 3" />
      <path d="M24 70 Q40 75 56 70" strokeDasharray="3 3" />
      <line x1="33" y1="5" x2="33" y2="15" />
      <line x1="40" y1="3" x2="40" y2="15" />
      <line x1="47" y1="5" x2="47" y2="15" />
    </svg>
  ),
];

const ratios = ['1:15', '1:12', '1:2', '1:8'];
const temps = ['93°C', '95°C', '90°C', 'Cold'];

export function BrewingGuide() {
  const { t } = useLang();
  const b = t.brewing;

  return (
    <section id="brewing" className="py-24 md:py-32 noise-bg relative z-10" style={{ backgroundColor: '#F5E9D7' }}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-typewriter text-sm uppercase tracking-widest mb-4 block" style={{ color: '#C49A3A' }}>{b.eyebrow}</span>
          <h2 className="text-4xl md:text-5xl" style={{ color: '#2F4F3A' }}>{b.heading}</h2>
          <p className="mt-4 text-lg font-light max-w-xl mx-auto" style={{ color: '#2F4F3A', opacity: 0.7 }}>
            {b.sub}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {b.methods.map((method, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <div
                className="w-40 h-40 rounded-full flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-105 border-2"
                style={{ backgroundColor: 'white', borderColor: '#2F4F3A', color: '#2F4F3A', boxShadow: '0 4px 20px rgba(47,79,58,0.1)' }}
              >
                {svgs[i]}
              </div>

              <span className="font-typewriter text-xs uppercase tracking-widest mb-2" style={{ color: '#C49A3A' }}>
                {method.label}
              </span>
              <h3 className="text-xl mb-3" style={{ color: '#2F4F3A' }}>{method.name}</h3>

              <div className="flex gap-4 mb-4">
                <div className="flex flex-col items-center">
                  <span className="font-typewriter text-xs uppercase tracking-widest mb-1" style={{ color: '#2F4F3A', opacity: 0.5 }}>{b.ratioLabel}</span>
                  <span className="font-medium text-sm" style={{ color: '#2F4F3A' }}>{ratios[i]}</span>
                </div>
                <div className="w-px" style={{ backgroundColor: '#2F4F3A', opacity: 0.2 }} />
                <div className="flex flex-col items-center">
                  <span className="font-typewriter text-xs uppercase tracking-widest mb-1" style={{ color: '#2F4F3A', opacity: 0.5 }}>{b.tempLabel}</span>
                  <span className="font-medium text-sm" style={{ color: '#2F4F3A' }}>{temps[i]}</span>
                </div>
                <div className="w-px" style={{ backgroundColor: '#2F4F3A', opacity: 0.2 }} />
                <div className="flex flex-col items-center">
                  <span className="font-typewriter text-xs uppercase tracking-widest mb-1" style={{ color: '#2F4F3A', opacity: 0.5 }}>{b.timeLabel}</span>
                  <span className="font-medium text-sm" style={{ color: '#2F4F3A' }}>{method.time}</span>
                </div>
              </div>

              <p className="text-sm font-light leading-relaxed max-w-[220px]" style={{ color: '#2F4F3A', opacity: 0.7 }}>
                {method.notes}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
