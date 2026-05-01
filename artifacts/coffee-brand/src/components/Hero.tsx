import { motion, useScroll, useTransform } from 'framer-motion';
import { useLang } from '@/context/LanguageContext';

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const { t } = useLang();

  const [line1, line2] = t.hero.headline.split('\n');

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-primary flex items-center justify-center">
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-primary/40 z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent z-10" />
        <img
          src="/hero-bg.png"
          alt="Misty Andean coffee farm at dawn in Huila Colombia"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <div className="w-32 h-32 rounded-full border-2 border-secondary/50 flex items-center justify-center p-2">
            <div className="w-full h-full rounded-full border border-secondary/30 flex items-center justify-center relative bg-primary/20 backdrop-blur-sm">
              <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-secondary">
                <path d="M20 70L40 40L60 60L80 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="70" cy="20" r="5" fill="currentColor" />
                <path d="M30 80C30 80 40 70 50 70C60 70 70 80 70 80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M45 20C45 20 48 10 55 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M55 25C55 25 58 15 65 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]">
                <path id="curve" d="M 10, 50 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
                <text className="font-typewriter text-[10px] tracking-[4px] fill-secondary uppercase">
                  <textPath href="#curve" startOffset="0%">
                    Est. 1984 • Huila Colombia •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[0.9]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          key={t.hero.headline}
        >
          {line1}<br />{line2}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white/80 max-w-2xl font-light mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          key={t.hero.sub}
        >
          {t.hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-10 py-4 rounded-full font-sans text-lg font-semibold tracking-wide transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            data-testid="button-hero-cta"
          >
            {t.hero.cta}
          </button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span className="font-typewriter text-xs uppercase tracking-widest">{t.hero.scroll}</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
