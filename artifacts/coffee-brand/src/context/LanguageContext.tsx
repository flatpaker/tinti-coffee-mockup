import { createContext, useContext, useState } from 'react';

export type Lang = 'en' | 'es';

export const translations = {
  en: {
    nav: {
      origin: 'Origin',
      collection: 'Collection',
      brewing: 'Brewing',
      values: 'Values',
      order: 'Order Now',
    },
    hero: {
      headline: 'BORN IN THE\nCLOUDS OF HUILA',
      sub: 'Hand-picked in the misty Andean highlands. A premium specialty coffee carrying the weight of tradition, elevation, and terroir.',
      cta: 'Discover the Origin',
      scroll: 'Scroll',
    },
    origin: {
      eyebrow: 'Huila Department, Colombia',
      altLabel: 'Altitude',
      altUnit: 'Meters',
      heading: 'Where Altitude Meets Perfection',
      p1: 'In the shadow of the Andes, where the cool mountain air meets the warm currents of the Magdalena River valley, lies Huila. This unique microclimate creates an extended maturation process for our coffee cherries, allowing complex sugars to develop slowly.',
      p2: "Every bean in a bag of Café Huila is hand-picked by multi-generational farming families who know the exact shade of crimson that signifies readiness. We don't strip-pick; we return to the same tree multiple times throughout the harvest, selecting only perfection.",
      p3: 'The result is a cup defined by its bright acidity, rich caramel sweetness, and the unmistakable floral notes that have made Huila the most celebrated coffee terroir in Colombia.',
      varietiesLabel: 'Varieties',
      harvestLabel: 'Harvest',
      harvestValue: 'Sept – Dec & April – June',
    },
    products: {
      eyebrow: 'The Collection',
      heading: 'Sourced From The Source',
      viewAll: 'View All Coffees',
      addToBag: 'Add to Bag',
      items: [
        { name: 'Huila Washed Natural', notes: 'Floral, Tropical Fruit, Panela', roast: 'Light-Medium', type: 'Single Origin' },
        { name: 'Honey Process Reserve', notes: 'Caramel, Stone Fruit, Honey', roast: 'Medium', type: 'Reserve Lot' },
        { name: 'Dark Roast Blend', notes: 'Dark Chocolate, Cedar, Molasses', roast: 'Dark', type: 'House Blend' },
        { name: 'Microlot Anaerobic', notes: 'Strawberry Jam, Fermented, Cacao', roast: 'Light', type: 'Microlot' },
      ],
    },
    brewing: {
      eyebrow: 'The Ritual',
      heading: 'Brewing Methods',
      sub: "Each method reveals a different facet of Huila's complex terroir. Choose your ritual.",
      ratioLabel: 'Ratio',
      tempLabel: 'Temp',
      timeLabel: 'Time',
      methods: [
        { name: 'Pour Over', label: 'V60 / Chemex', time: '3–4 min', notes: 'Grind medium-fine. Bloom for 30 seconds with double the coffee weight in water. Pour in slow, even circles.' },
        { name: 'French Press', label: 'Immersion', time: '4 min', notes: 'Coarse grind. Add coffee, pour all water at once. Stir gently, place lid, press slowly at 4 minutes.' },
        { name: 'Espresso', label: 'Machine', time: '25–30 sec', notes: 'Fine grind, 9 bars pressure. Distribute and tamp evenly. Extract a 1:2 ratio in 25–30 seconds.' },
        { name: 'Cold Brew', label: '12–24 hrs', time: '12–24 hrs', notes: 'Coarse grind. Steep in cold water for 12–24 hours. Filter through fine mesh. Dilute and serve over ice.' },
      ],
    },
    values: {
      eyebrow: 'Our Commitment',
      heading: 'Grown With Intention',
      sub: 'From the altitude of our farms to the hands that harvest, every detail is a deliberate act of care.',
      stamps: [
        { label: 'Altitude', value: '1,700m+', sub: 'Above Sea Level' },
        { label: 'Direct Trade', value: '100%', sub: 'Farmer Partnerships' },
        { label: 'Hand-Picked', value: 'Cherry', sub: 'Selection Only' },
        { label: 'Sun Dried', value: 'Natural', sub: 'Process' },
      ],
      cols: [
        { eyebrow: 'Our Process', heading: 'From Harvest to Cup', body: 'At Café Huila, every cherry is sorted by hand before processing. We work with small family farms across the municipality of Pitalito, where multi-generational expertise guides every decision.' },
        { eyebrow: 'Quality Standards', heading: 'Cupped at Source', body: 'Each lot is cupped by our team in Pitalito before export. We only select coffees that score 85+ on the SCA scale. No exceptions. Excellence is not a marketing term here — it is the standard.' },
        { eyebrow: 'Sustainability', heading: 'Land & Legacy', body: 'We pay premium prices above Fair Trade minimums to ensure that the families who grow this coffee can continue to grow it for generations. The land is not a resource to be extracted. It is a legacy.' },
      ],
    },
    contact: {
      eyebrow: 'Get In Touch',
      heading: "Let's Talk Coffee",
      sub: "Whether you're a cafe owner, a curious home brewer, or just someone who knows good coffee — we'd love to hear from you.",
      locationLabel: 'Location',
      locationSub: 'Colombia, South America',
      emailLabel: 'Email',
      emailSub: 'We reply within 24 hours',
      igLabel: 'Instagram',
      igSub: 'Behind the scenes from the farm',
      successHeading: 'Message Received',
      successSub: "We'll be in touch within 24 hours.",
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailFieldLabel: 'Email',
      emailPlaceholder: 'you@example.com',
      messageLabel: 'Message',
      messagePlaceholder: "Tell us what you're looking for...",
      submit: 'Send Message',
    },
    footer: {
      tagline: 'Single-origin specialty coffee grown at the intersection of tradition, altitude, and care.',
      navLabel: 'Navigation',
      navLinks: ['Origin', 'Collection', 'Brewing', 'Values', 'Contact'],
      connectLabel: 'Connect',
      copyright: 'All rights reserved.',
      grown: 'Grown with love at 1,700m above sea level.',
    },
  },
  es: {
    nav: {
      origin: 'Origen',
      collection: 'Colección',
      brewing: 'Preparación',
      values: 'Valores',
      order: 'Pedir Ahora',
    },
    hero: {
      headline: 'NACIDO EN LAS\nNUBES DE HUILA',
      sub: 'Recolectado a mano en las brumosas montañas andinas. Un café especial premium que lleva el peso de la tradición, la altura y el terruño.',
      cta: 'Descubre el Origen',
      scroll: 'Bajar',
    },
    origin: {
      eyebrow: 'Departamento del Huila, Colombia',
      altLabel: 'Altura',
      altUnit: 'Metros',
      heading: 'Donde la Altitud Encuentra la Perfección',
      p1: 'A la sombra de los Andes, donde el fresco aire de montaña se encuentra con las cálidas corrientes del valle del río Magdalena, se encuentra el Huila. Este microclima único crea un proceso de maduración extendido en nuestros frutos de café, permitiendo que los azúcares complejos se desarrollen lentamente.',
      p2: 'Cada grano en una bolsa de Café Huila es recolectado a mano por familias campesinas de múltiples generaciones que conocen el tono exacto de carmesí que indica el punto de madurez. No realizamos recolección por vareo; regresamos al mismo árbol varias veces durante la cosecha, seleccionando solo la perfección.',
      p3: 'El resultado es una taza definida por su acidez brillante, su dulzura de caramelo y las notas florales inconfundibles que han hecho del Huila el terruño cafetero más celebrado de Colombia.',
      varietiesLabel: 'Variedades',
      harvestLabel: 'Cosecha',
      harvestValue: 'Sept – Dic & Abril – Junio',
    },
    products: {
      eyebrow: 'La Colección',
      heading: 'De la Fuente al Origen',
      viewAll: 'Ver Todos los Cafés',
      addToBag: 'Agregar al Carrito',
      items: [
        { name: 'Huila Lavado Natural', notes: 'Floral, Fruta Tropical, Panela', roast: 'Ligero-Medio', type: 'Origen Único' },
        { name: 'Reserva Proceso Miel', notes: 'Caramelo, Fruta de Hueso, Miel', roast: 'Medio', type: 'Lote Reserva' },
        { name: 'Mezcla Tostado Oscuro', notes: 'Chocolate Negro, Cedro, Melaza', roast: 'Oscuro', type: 'Mezcla Casa' },
        { name: 'Microlote Anaeróbico', notes: 'Mermelada de Fresa, Fermentado, Cacao', roast: 'Ligero', type: 'Microlote' },
      ],
    },
    brewing: {
      eyebrow: 'El Ritual',
      heading: 'Métodos de Preparación',
      sub: 'Cada método revela una faceta diferente del complejo terruño del Huila. Elige tu ritual.',
      ratioLabel: 'Ratio',
      tempLabel: 'Temp',
      timeLabel: 'Tiempo',
      methods: [
        { name: 'Pour Over', label: 'V60 / Chemex', time: '3–4 min', notes: 'Molienda media-fina. Bloom de 30 segundos con el doble del peso en agua. Vierte en círculos lentos y uniformes.' },
        { name: 'Prensa Francesa', label: 'Inmersión', time: '4 min', notes: 'Molienda gruesa. Agrega café, vierte toda el agua. Agita suave, coloca la tapa y presiona despacio a los 4 minutos.' },
        { name: 'Espresso', label: 'Máquina', time: '25–30 seg', notes: 'Molienda fina, 9 bares de presión. Distribuye y apisona de forma pareja. Extrae en ratio 1:2 en 25–30 segundos.' },
        { name: 'Cold Brew', label: '12–24 hrs', time: '12–24 hrs', notes: 'Molienda gruesa. Reposa en agua fría 12–24 horas. Filtra, diluye y sirve con hielo.' },
      ],
    },
    values: {
      eyebrow: 'Nuestro Compromiso',
      heading: 'Cultivado con Intención',
      sub: 'Desde la altura de nuestras fincas hasta las manos que cosechan, cada detalle es un acto deliberado de cuidado.',
      stamps: [
        { label: 'Altitud', value: '1.700m+', sub: 'Sobre el Nivel del Mar' },
        { label: 'Comercio Directo', value: '100%', sub: 'Alianzas con Caficultores' },
        { label: 'Recolección Manual', value: 'Cereza', sub: 'Solo Selección' },
        { label: 'Secado al Sol', value: 'Natural', sub: 'Proceso' },
      ],
      cols: [
        { eyebrow: 'Nuestro Proceso', heading: 'De la Cosecha a la Taza', body: 'En Café Huila, cada cereza se clasifica a mano antes del procesamiento. Trabajamos con pequeñas fincas familiares en el municipio de Pitalito, donde la experiencia de múltiples generaciones guía cada decisión.' },
        { eyebrow: 'Estándares de Calidad', heading: 'Catado en Origen', body: 'Cada lote es catado por nuestro equipo en Pitalito antes de la exportación. Solo seleccionamos cafés que puntúan 85+ en la escala SCA. Sin excepciones. La excelencia no es un término de marketing aquí — es el estándar.' },
        { eyebrow: 'Sostenibilidad', heading: 'Tierra y Legado', body: 'Pagamos precios premium por encima del mínimo de Comercio Justo para garantizar que las familias que cultivan este café puedan continuar haciéndolo por generaciones. La tierra no es un recurso a explotar. Es un legado.' },
      ],
    },
    contact: {
      eyebrow: 'Contáctanos',
      heading: 'Hablemos de Café',
      sub: 'Ya seas dueño de una cafetería, un amante del café en casa, o simplemente alguien que aprecia el buen café — nos encantaría escucharte.',
      locationLabel: 'Ubicación',
      locationSub: 'Colombia, Sudamérica',
      emailLabel: 'Correo',
      emailSub: 'Respondemos en 24 horas',
      igLabel: 'Instagram',
      igSub: 'Detrás de escenas desde la finca',
      successHeading: 'Mensaje Recibido',
      successSub: 'Te contactaremos en las próximas 24 horas.',
      nameLabel: 'Nombre',
      namePlaceholder: 'Tu nombre',
      emailFieldLabel: 'Correo',
      emailPlaceholder: 'tu@correo.com',
      messageLabel: 'Mensaje',
      messagePlaceholder: '¿Qué estás buscando?...',
      submit: 'Enviar Mensaje',
    },
    footer: {
      tagline: 'Café de origen único cultivado en la intersección de tradición, altitud y cuidado.',
      navLabel: 'Navegación',
      navLinks: ['Origen', 'Colección', 'Preparación', 'Valores', 'Contacto'],
      connectLabel: 'Conectar',
      copyright: 'Todos los derechos reservados.',
      grown: 'Cultivado con amor a 1.700m sobre el nivel del mar.',
    },
  },
} as const;

interface LanguageContextType {
  lang: Lang;
  t: typeof translations['en'];
  toggle: () => void;
}

import { createContext as _createContext } from 'react';

const LanguageContext = createContext<LanguageContextType>({
  lang: 'es',
  t: translations['es'],
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('es');
  const toggle = () => setLang(l => l === 'en' ? 'es' : 'en');
  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
