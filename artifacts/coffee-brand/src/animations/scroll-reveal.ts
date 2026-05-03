/**
 * scroll-reveal.ts
 * 
 * GSAP ScrollTrigger: reveal en tarjetas de producto y
 * animación de entrada para la infografía h.png (Prensa Francesa).
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface RevealOptions {
  yOffset: number;
  duration: number;
  stagger: number;
  triggerStart: string;
  ease: string;
}

const DEFAULT_REVEAL: RevealOptions = {
  yOffset: 60,
  duration: 0.9,
  stagger: 0.15,
  triggerStart: 'top 80%',
  ease: 'power3.out',
};

/**
 * Reveal animado en las tarjetas de producto (data-testid="card-product-*").
 */
export function initProductCardReveal(
  options: Partial<RevealOptions> = {}
): void {
  const opts = { ...DEFAULT_REVEAL, ...options };
  const cards = gsap.utils.toArray<HTMLElement>('[data-testid^="card-product-"]');
  if (cards.length === 0) return;

  gsap.set(cards, { opacity: 0, y: opts.yOffset, scale: 0.95 });

  gsap.to(cards, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: opts.duration,
    stagger: opts.stagger,
    ease: opts.ease,
    clearProps: 'transform',
    scrollTrigger: {
      trigger: '#collection',
      start: opts.triggerStart,
      toggleActions: 'play none none none',
      once: true,
    },
  });
}

export interface InfographicOptions {
  duration: number;
  ease: string;
  triggerStart: string;
}

const DEFAULT_INFOGRAPHIC: InfographicOptions = {
  duration: 1.2,
  ease: 'power2.out',
  triggerStart: 'top 75%',
};

/**
 * Animación elegante de entrada para la infografía de Prensa Francesa (h.png).
 */
export function initInfographicReveal(
  selector: string = '[data-infographic="french-press"]',
  options: Partial<InfographicOptions> = {}
): void {
  const opts = { ...DEFAULT_INFOGRAPHIC, ...options };
  let target = document.querySelector<HTMLElement>(selector);

  if (!target) {
    const img = document.querySelector<HTMLImageElement>('img[src*="h.png"], img[src*="h.jpg"]');
    target = img?.closest<HTMLElement>('section, div, figure') ?? img;
  }
  if (!target) return;

  gsap.set(target, {
    opacity: 0,
    y: 40,
    scale: 0.92,
    clipPath: 'inset(10% 10% 10% 10% round 16px)',
  });

  gsap.to(target, {
    opacity: 1,
    y: 0,
    scale: 1,
    clipPath: 'inset(0% 0% 0% 0% round 16px)',
    duration: opts.duration,
    ease: opts.ease,
    scrollTrigger: {
      trigger: target,
      start: opts.triggerStart,
      toggleActions: 'play none none none',
      once: true,
    },
  });
}

/** Inicializa todas las animaciones de scroll */
export function initAllScrollAnimations(): void {
  initProductCardReveal();
  initInfographicReveal();
}

/** Limpia todos los ScrollTriggers */
export function destroyAllScrollAnimations(): void {
  ScrollTrigger.getAll().forEach((st) => st.kill());
}

export default {
  initProductCardReveal,
  initInfographicReveal,
  initAllScrollAnimations,
  destroyAllScrollAnimations,
};
