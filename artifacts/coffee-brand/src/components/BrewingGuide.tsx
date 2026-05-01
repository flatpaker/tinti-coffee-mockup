import { motion } from 'framer-motion';

const methods = [
  {
    id: 1,
    name: "Pour Over",
    label: "V60 / Chemex",
    time: "3–4 min",
    ratio: "1:15",
    temp: "93°C",
    notes: "Grind medium-fine. Bloom for 30 seconds with double the coffee weight in water. Pour in slow, even circles.",
    svg: (
      <svg width="80" height="100" viewBox="0 0 80 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M25 10 L15 55 L65 55 L55 10 Z" />
        <path d="M35 55 L35 80 L45 80 L45 55" />
        <ellipse cx="40" cy="83" rx="12" ry="5" />
        <path d="M20 25 Q40 35 60 25" strokeDasharray="3 3" />
        <path d="M18 35 Q40 45 62 35" strokeDasharray="3 3" />
        <path d="M40 2 L40 10" />
        <path d="M35 2 Q40 6 45 2" />
      </svg>
    )
  },
  {
    id: 2,
    name: "French Press",
    label: "Immersion",
    time: "4 min",
    ratio: "1:12",
    temp: "95°C",
    notes: "Coarse grind. Add coffee, pour all water at once. Stir gently, place lid, press slowly at 4 minutes.",
    svg: (
      <svg width="80" height="100" viewBox="0 0 80 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="20" y="15" width="40" height="65" rx="4" />
        <line x1="40" y1="5" x2="40" y2="15" />
        <rect x="35" y="2" width="10" height="6" rx="2" />
        <line x1="20" y1="65" x2="60" y2="65" strokeDasharray="none" />
        <ellipse cx="40" cy="65" rx="17" ry="4" />
        <line x1="15" y1="40" x2="65" y2="40" strokeDasharray="3 3" />
        <line x1="18" y1="50" x2="62" y2="50" strokeDasharray="3 3" />
      </svg>
    )
  },
  {
    id: 3,
    name: "Espresso",
    label: "Machine",
    time: "25–30 sec",
    ratio: "1:2",
    temp: "90°C",
    notes: "Fine grind, 9 bars pressure. Distribute and tamp evenly. Extract a 1:2 ratio in 25–30 seconds.",
    svg: (
      <svg width="80" height="100" viewBox="0 0 80 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    )
  },
  {
    id: 4,
    name: "Cold Brew",
    label: "12–24 hrs",
    time: "12–24 hrs",
    ratio: "1:8",
    temp: "Cold",
    notes: "Coarse grind. Steep in cold water for 12–24 hours. Filter through fine mesh. Dilute and serve over ice.",
    svg: (
      <svg width="80" height="100" viewBox="0 0 80 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M25 15 Q20 50 22 80 Q22 88 40 88 Q58 88 58 80 Q60 50 55 15 Z" />
        <path d="M25 15 L55 15" />
        <path d="M28 35 Q40 40 52 35" strokeDasharray="3 3" />
        <path d="M26 55 Q40 60 54 55" strokeDasharray="3 3" />
        <path d="M24 70 Q40 75 56 70" strokeDasharray="3 3" />
        <line x1="33" y1="5" x2="33" y2="15" />
        <line x1="40" y1="3" x2="40" y2="15" />
        <line x1="47" y1="5" x2="47" y2="15" />
      </svg>
    )
  }
];

export function BrewingGuide() {
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
          <span className="font-typewriter text-sm uppercase tracking-widest mb-4 block" style={{ color: '#C49A3A' }}>The Ritual</span>
          <h2 className="text-4xl md:text-5xl" style={{ color: '#2F4F3A' }}>Brewing Methods</h2>
          <p className="mt-4 text-lg font-light max-w-xl mx-auto" style={{ color: '#2F4F3A', opacity: 0.7 }}>
            Each method reveals a different facet of Huila's complex terroir. Choose your ritual.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methods.map((method, i) => (
            <motion.div
              key={method.id}
              className="flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <div
                className="w-40 h-40 rounded-full flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-105 border-2"
                style={{
                  backgroundColor: 'white',
                  borderColor: '#2F4F3A',
                  color: '#2F4F3A',
                  boxShadow: '0 4px 20px rgba(47,79,58,0.1)'
                }}
              >
                {method.svg}
              </div>

              <span className="font-typewriter text-xs uppercase tracking-widest mb-2" style={{ color: '#C49A3A' }}>
                {method.label}
              </span>
              <h3 className="text-xl mb-3" style={{ color: '#2F4F3A' }}>{method.name}</h3>

              <div className="flex gap-4 mb-4">
                <div className="flex flex-col items-center">
                  <span className="font-typewriter text-xs uppercase tracking-widest mb-1" style={{ color: '#2F4F3A', opacity: 0.5 }}>Ratio</span>
                  <span className="font-medium text-sm" style={{ color: '#2F4F3A' }}>{method.ratio}</span>
                </div>
                <div className="w-px" style={{ backgroundColor: '#2F4F3A', opacity: 0.2 }} />
                <div className="flex flex-col items-center">
                  <span className="font-typewriter text-xs uppercase tracking-widest mb-1" style={{ color: '#2F4F3A', opacity: 0.5 }}>Temp</span>
                  <span className="font-medium text-sm" style={{ color: '#2F4F3A' }}>{method.temp}</span>
                </div>
                <div className="w-px" style={{ backgroundColor: '#2F4F3A', opacity: 0.2 }} />
                <div className="flex flex-col items-center">
                  <span className="font-typewriter text-xs uppercase tracking-widest mb-1" style={{ color: '#2F4F3A', opacity: 0.5 }}>Time</span>
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
