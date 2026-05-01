import { motion } from 'framer-motion';
import { useLang } from '@/context/LanguageContext';

export function OriginStory() {
  const { t } = useLang();
  const o = t.origin;

  return (
    <section id="origin" className="py-24 md:py-32 bg-background noise-bg relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[4/5] bg-primary/5 rounded-2xl border border-primary/10 overflow-hidden relative p-8 flex flex-col justify-between">
              <svg className="absolute top-0 left-0 w-full h-full opacity-10 text-primary" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 L 20 60 L 40 80 L 70 30 L 100 70 L 100 100 Z" fill="currentColor" />
              </svg>

              <div className="relative z-10 flex justify-end">
                <div className="w-24 h-24 rounded-full bg-white border border-primary/20 flex flex-col items-center justify-center shadow-sm">
                  <span className="font-typewriter text-[10px] text-primary/60 uppercase tracking-widest mb-1">{o.altLabel}</span>
                  <span className="font-heading text-xl text-primary leading-none">1,700</span>
                  <span className="font-typewriter text-[10px] text-primary/60 uppercase tracking-widest mt-1">{o.altUnit}</span>
                </div>
              </div>

              <div className="relative z-10 pb-8">
                <svg width="120" height="120" viewBox="0 0 100 100" fill="none" className="text-primary mb-6">
                  <path d="M10 80 L 35 40 L 55 60 L 85 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M35 40 L 35 80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                  <path d="M55 60 L 55 80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                  <path d="M85 20 L 85 80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                  <circle cx="35" cy="40" r="3" fill="currentColor" />
                  <circle cx="55" cy="60" r="3" fill="currentColor" />
                  <circle cx="85" cy="20" r="3" fill="currentColor" />
                </svg>
                <div className="font-typewriter text-sm text-primary uppercase tracking-widest border-b border-primary/20 pb-4 inline-block">
                  {o.eyebrow}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-primary mb-8 text-4xl md:text-5xl">{o.heading}</h2>

            <div className="space-y-6 text-foreground/80 font-light text-lg">
              <p>{o.p1}</p>
              <p>{o.p2}</p>
              <p>{o.p3}</p>
            </div>

            <div className="mt-10 flex gap-6">
              <div className="flex flex-col gap-2">
                <span className="font-typewriter text-xs text-primary/60 uppercase tracking-widest">{o.varietiesLabel}</span>
                <span className="font-medium text-foreground">Caturra, Castillo, Pink Bourbon</span>
              </div>
              <div className="w-px bg-primary/20" />
              <div className="flex flex-col gap-2">
                <span className="font-typewriter text-xs text-primary/60 uppercase tracking-widest">{o.harvestLabel}</span>
                <span className="font-medium text-foreground">{o.harvestValue}</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
