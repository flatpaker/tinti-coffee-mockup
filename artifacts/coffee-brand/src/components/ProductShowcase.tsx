import { motion } from 'framer-motion';
import { useLang } from '@/context/LanguageContext';

const prices = ['$24.00', '$28.00', '$22.00', '$34.00'];
const images = ['/bag-1.png', '/bag-2.png', '/bag-3.png', '/bag-4.png'];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export function ProductShowcase() {
  const { t } = useLang();
  const p = t.products;

  return (
    <section id="collection" className="py-24 md:py-32 bg-white relative z-10">
      <div className="container mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <span className="font-typewriter text-sm text-secondary uppercase tracking-widest mb-4 block">{p.eyebrow}</span>
            <h2 className="text-primary text-4xl md:text-5xl">{p.heading}</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button className="text-primary border-b border-primary pb-1 font-medium hover:text-secondary hover:border-secondary transition-colors" data-testid="link-view-all">
              {p.viewAll}
            </button>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {p.items.map((product, idx) => (
            <motion.div
              key={idx}
              className="group flex flex-col bg-background noise-bg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-primary/5"
              variants={itemVariants}
              data-testid={`card-product-${idx + 1}`}
            >
              <div className="aspect-[3/4] relative p-8 flex items-center justify-center bg-white/50">
                <span className="absolute top-4 left-4 font-typewriter text-[10px] uppercase tracking-widest text-primary/70 bg-white/80 px-2 py-1 rounded backdrop-blur-sm">
                  {product.type}
                </span>
                <img
                  src={images[idx]}
                  alt={product.name}
                  className="w-full h-full object-contain mix-blend-multiply drop-shadow-md group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow bg-white">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-heading text-lg text-primary leading-tight">{product.name}</h3>
                  <span className="font-sans font-medium text-foreground">{prices[idx]}</span>
                </div>

                <p className="font-typewriter text-xs text-primary/60 mb-4">{product.roast}</p>
                <p className="text-sm text-foreground/70 mb-6 flex-grow">{product.notes}</p>

                <button
                  className="w-full py-3 rounded-full border border-primary text-primary font-medium text-sm hover:bg-secondary hover:border-secondary hover:text-secondary-foreground transition-colors"
                  data-testid={`button-add-to-bag-${idx + 1}`}
                >
                  {p.addToBag}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
