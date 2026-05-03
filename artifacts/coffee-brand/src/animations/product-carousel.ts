/**
 * product-carousel.ts
 * 
 * Lógica de carrusel funcional para navegar entre presentaciones
 * de ½ lb, 340g y 1 lb (imagen f.png).
 * 
 * Funciona sobre un contenedor con data-carousel="products"
 * y botones prev/next con data-carousel-prev / data-carousel-next.
 */

import { gsap } from 'gsap';

export interface CarouselSlide {
  id: string;
  label: string;
  weight: string;
  imageSrc: string;
  description: string;
}

/** Las tres presentaciones de producto de Tinti Coffee Company */
export const PRODUCT_SLIDES: CarouselSlide[] = [
  {
    id: 'half-lb',
    label: '½ Libra',
    weight: '½ LB',
    imageSrc: '/f.png',
    description: 'Presentación ideal para descubrir nuestro café de especialidad. Perfecta para una primera experiencia.',
  },
  {
    id: '340g',
    label: '340 Gramos',
    weight: '340 GR',
    imageSrc: '/f.png',
    description: 'Nuestra presentación estándar. Blend Bourbon Castillo, origen Finca La Esmeralda, Guadalupe Huila.',
  },
  {
    id: 'one-lb',
    label: '1 Libra',
    weight: '1 LB',
    imageSrc: '/f.png',
    description: 'Presentación familiar. Café de especialidad para los verdaderos conocedores del Huila.',
  },
];

export interface CarouselState {
  currentIndex: number;
  totalSlides: number;
  isAnimating: boolean;
}

export interface CarouselInstance {
  getState: () => CarouselState;
  goTo: (index: number) => void;
  next: () => void;
  prev: () => void;
  destroy: () => void;
}

/**
 * Inicializa el carrusel de productos.
 * 
 * @param containerSelector - Selector CSS del contenedor del carrusel
 * @returns Instancia del carrusel con métodos de control
 */
export function initProductCarousel(
  containerSelector: string = '[data-carousel="products"]'
): CarouselInstance | null {
  const container = document.querySelector<HTMLElement>(containerSelector);
  if (!container) return null;

  const state: CarouselState = {
    currentIndex: 0,
    totalSlides: PRODUCT_SLIDES.length,
    isAnimating: false,
  };

  // Elementos del DOM del carrusel
  const slideContainer = container.querySelector<HTMLElement>('[data-carousel-track]');
  const prevBtn = container.querySelector<HTMLButtonElement>('[data-carousel-prev]');
  const nextBtn = container.querySelector<HTMLButtonElement>('[data-carousel-next]');
  const indicators = container.querySelectorAll<HTMLElement>('[data-carousel-indicator]');
  const weightLabel = container.querySelector<HTMLElement>('[data-carousel-weight]');
  const descriptionEl = container.querySelector<HTMLElement>('[data-carousel-description]');
  const imageEl = container.querySelector<HTMLImageElement>('[data-carousel-image]');
  const counterEl = container.querySelector<HTMLElement>('[data-carousel-counter]');

  function updateUI(): void {
    const slide = PRODUCT_SLIDES[state.currentIndex];
    if (!slide) return;

    // Actualizar indicadores activos
    indicators.forEach((ind, i) => {
      ind.classList.toggle('active', i === state.currentIndex);
      ind.style.opacity = i === state.currentIndex ? '1' : '0.4';
      ind.style.transform = i === state.currentIndex ? 'scale(1.2)' : 'scale(1)';
    });

    // Actualizar counter
    if (counterEl) {
      counterEl.textContent = `${state.currentIndex + 1} / ${state.totalSlides}`;
    }

    // Actualizar botones
    if (prevBtn) prevBtn.disabled = state.currentIndex === 0;
    if (nextBtn) nextBtn.disabled = state.currentIndex === state.totalSlides - 1;
  }

  function animateToSlide(index: number): void {
    if (state.isAnimating || index === state.currentIndex) return;
    if (index < 0 || index >= state.totalSlides) return;

    state.isAnimating = true;
    const direction = index > state.currentIndex ? 1 : -1;
    const slide = PRODUCT_SLIDES[index];
    if (!slide) return;

    const tl = gsap.timeline({
      onComplete: () => {
        state.currentIndex = index;
        state.isAnimating = false;
        updateUI();
      },
    });

    // Fase 1: Salida del slide actual
    if (imageEl) {
      tl.to(imageEl, {
        opacity: 0,
        x: direction * -80,
        scale: 0.9,
        duration: 0.35,
        ease: 'power2.in',
      });
    }

    if (weightLabel) {
      tl.to(weightLabel, { opacity: 0, y: -20, duration: 0.2, ease: 'power2.in' }, '<');
    }

    if (descriptionEl) {
      tl.to(descriptionEl, { opacity: 0, y: 10, duration: 0.2, ease: 'power2.in' }, '<0.05');
    }

    // Fase 2: Actualizar contenido y animar entrada
    tl.call(() => {
      if (imageEl) imageEl.src = slide.imageSrc;
      if (weightLabel) weightLabel.textContent = slide.weight;
      if (descriptionEl) descriptionEl.textContent = slide.description;
    });

    if (imageEl) {
      tl.fromTo(
        imageEl,
        { opacity: 0, x: direction * 80, scale: 0.9 },
        { opacity: 1, x: 0, scale: 1, duration: 0.5, ease: 'power3.out' }
      );
    }

    if (weightLabel) {
      tl.fromTo(
        weightLabel,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
        '<0.1'
      );
    }

    if (descriptionEl) {
      tl.fromTo(
        descriptionEl,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
        '<0.1'
      );
    }
  }

  function goTo(index: number): void {
    animateToSlide(index);
  }

  function next(): void {
    if (state.currentIndex < state.totalSlides - 1) {
      animateToSlide(state.currentIndex + 1);
    }
  }

  function prev(): void {
    if (state.currentIndex > 0) {
      animateToSlide(state.currentIndex - 1);
    }
  }

  // Event listeners
  const onPrev = () => prev();
  const onNext = () => next();
  const onKeydown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  };

  prevBtn?.addEventListener('click', onPrev);
  nextBtn?.addEventListener('click', onNext);
  document.addEventListener('keydown', onKeydown);

  indicators.forEach((ind, i) => {
    ind.addEventListener('click', () => goTo(i));
    ind.style.cursor = 'pointer';
  });

  // Soporte para swipe táctil
  let touchStartX = 0;
  const onTouchStart = (e: TouchEvent) => {
    touchStartX = e.touches[0]?.clientX ?? 0;
  };
  const onTouchEnd = (e: TouchEvent) => {
    const touchEndX = e.changedTouches[0]?.clientX ?? 0;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  };

  if (slideContainer) {
    slideContainer.addEventListener('touchstart', onTouchStart, { passive: true });
    slideContainer.addEventListener('touchend', onTouchEnd, { passive: true });
  }

  // Inicializar UI
  updateUI();

  // Cleanup
  function destroy(): void {
    prevBtn?.removeEventListener('click', onPrev);
    nextBtn?.removeEventListener('click', onNext);
    document.removeEventListener('keydown', onKeydown);
    if (slideContainer) {
      slideContainer.removeEventListener('touchstart', onTouchStart);
      slideContainer.removeEventListener('touchend', onTouchEnd);
    }
  }

  return { getState: () => ({ ...state }), goTo, next, prev, destroy };
}

export default initProductCarousel;
