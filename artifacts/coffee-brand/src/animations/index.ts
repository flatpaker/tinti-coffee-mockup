/**
 * index.ts — Barrel export para el módulo de animaciones.
 * 
 * Estructura profesional: cada módulo se exporta individualmente
 * y se re-exporta desde este índice central.
 */

export {
  initBrandIdentity,
  TINTI_BRAND,
  type BrandConfig,
} from './brand-identity';

export {
  initProductCardReveal,
  initInfographicReveal,
  initAllScrollAnimations,
  destroyAllScrollAnimations,
  type RevealOptions,
  type InfographicOptions,
} from './scroll-reveal';

export {
  initProductCarousel,
  PRODUCT_SLIDES,
  type CarouselSlide,
  type CarouselState,
  type CarouselInstance,
} from './product-carousel';
