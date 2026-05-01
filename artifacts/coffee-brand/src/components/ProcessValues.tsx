import { motion } from 'framer-motion';

const values = [
  {
    id: 1,
    label: "Altitude",
    value: "1,700m+",
    sub: "Above Sea Level",
    svg: (
      <svg width="48" height="48" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 48 L24 20 L40 36 L52 12" />
        <circle cx="24" cy="20" r="3" fill="currentColor" />
        <circle cx="52" cy="12" r="3" fill="currentColor" />
        <path d="M50 12 L56 12 L54 8" />
      </svg>
    )
  },
  {
    id: 2,
    label: "Direct Trade",
    value: "100%",
    sub: "Farmer Partnerships",
    svg: (
      <svg width="48" height="48" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="18" r="8" />
        <circle cx="40" cy="18" r="8" />
        <path d="M12 36 Q20 30 30 34 Q40 38 48 34 L48 54 Q40 58 30 54 Q20 50 12 54 Z" />
        <path d="M24 18 L36 18" />
        <path d="M31 14 L36 18 L31 22" />
      </svg>
    )
  },
  {
    id: 3,
    label: "Hand-Picked",
    value: "Cherry",
    sub: "Selection Only",
    svg: (
      <svg width="48" height="48" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M28 8 Q28 4 32 4 Q36 4 36 8" />
        <circle cx="32" cy="16" r="8" />
        <circle cx="22" cy="22" r="7" />
        <path d="M10 42 L14 32 L18 34 L22 22" />
        <path d="M10 42 L8 52 L18 48 L22 52 L28 44 L34 50 L40 44 L48 52 L50 42" />
        <path d="M50 42 L48 32 L44 36 L40 28 L36 32 L32 24" />
        <path d="M10 42 L50 42" />
      </svg>
    )
  },
  {
    id: 4,
    label: "Sun Dried",
    value: "Natural",
    sub: "Process",
    svg: (
      <svg width="48" height="48" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="30" cy="30" r="10" />
        <line x1="30" y1="8" x2="30" y2="14" />
        <line x1="30" y1="46" x2="30" y2="52" />
        <line x1="8" y1="30" x2="14" y2="30" />
        <line x1="46" y1="30" x2="52" y2="30" />
        <line x1="14.9" y1="14.9" x2="19.1" y2="19.1" />
        <line x1="40.9" y1="40.9" x2="45.1" y2="45.1" />
        <line x1="45.1" y1="14.9" x2="40.9" y2="19.1" />
        <line x1="19.1" y1="40.9" x2="14.9" y2="45.1" />
      </svg>
    )
  }
];

export function ProcessValues() {
  return (
    <section id="values" className="py-24 md:py-32 relative z-10 overflow-hidden noise-bg" style={{ backgroundColor: '#2F4F3A' }}>
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <path d="M0 300 Q200 100 400 300 Q600 500 800 300" stroke="white" strokeWidth="1" fill="none" />
          <path d="M0 400 Q200 200 400 400 Q600 600 800 400" stroke="white" strokeWidth="1" fill="none" />
          <path d="M0 200 Q200 0 400 200 Q600 400 800 200" stroke="white" strokeWidth="1" fill="none" />
          <circle cx="200" cy="150" r="80" stroke="white" strokeWidth="0.5" fill="none" />
          <circle cx="600" cy="450" r="100" stroke="white" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-typewriter text-sm uppercase tracking-widest mb-4 block" style={{ color: '#C49A3A' }}>Our Commitment</span>
          <h2 className="text-4xl md:text-5xl text-white">Grown With Intention</h2>
          <p className="mt-4 text-lg font-light max-w-xl mx-auto text-white/70">
            From the altitude of our farms to the hands that harvest, every detail is a deliberate act of care.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((item, i) => (
            <motion.div
              key={item.id}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <motion.div
                className="w-28 h-28 rounded-full border-2 flex flex-col items-center justify-center mb-4 relative"
                style={{ borderColor: '#C49A3A', color: '#C49A3A' }}
                whileInView={{ scale: [0.8, 1.05, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
              >
                <div className="absolute inset-1 rounded-full border border-white/10" />
                {item.svg}
              </motion.div>
              <span className="font-typewriter text-xs uppercase tracking-widest mb-1" style={{ color: '#C49A3A' }}>{item.label}</span>
              <div className="text-2xl font-heading text-white leading-none mb-1">{item.value}</div>
              <span className="text-xs text-white/50 font-light">{item.sub}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="border-t border-white/10 pt-16 grid grid-cols-1 lg:grid-cols-3 gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <span className="font-typewriter text-xs uppercase tracking-widest block mb-3" style={{ color: '#C49A3A' }}>Our Process</span>
            <h3 className="text-2xl text-white mb-4">From Harvest to Cup</h3>
            <p className="text-white/60 font-light leading-relaxed">
              At Café Huila, every cherry is sorted by hand before processing. We work with small family farms across the municipality of Pitalito, where multi-generational expertise guides every decision.
            </p>
          </div>
          <div>
            <span className="font-typewriter text-xs uppercase tracking-widest block mb-3" style={{ color: '#C49A3A' }}>Quality Standards</span>
            <h3 className="text-2xl text-white mb-4">Cupped at Source</h3>
            <p className="text-white/60 font-light leading-relaxed">
              Each lot is cupped by our team in Pitalito before export. We only select coffees that score 85+ on the SCA scale. No exceptions. Excellence is not a marketing term here — it is the standard.
            </p>
          </div>
          <div>
            <span className="font-typewriter text-xs uppercase tracking-widest block mb-3" style={{ color: '#C49A3A' }}>Sustainability</span>
            <h3 className="text-2xl text-white mb-4">Land & Legacy</h3>
            <p className="text-white/60 font-light leading-relaxed">
              We pay premium prices above Fair Trade minimums to ensure that the families who grow this coffee can continue to grow it for generations. The land is not a resource to be extracted. It is a legacy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
