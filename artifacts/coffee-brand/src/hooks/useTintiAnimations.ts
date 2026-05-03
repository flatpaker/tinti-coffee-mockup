/**
 * useTintiAnimations.ts
 * 
 * Hook de React que orquesta la inicialización y limpieza
 * de todas las animaciones de Tinti Coffee Company.
 */

import { useEffect, useRef } from 'react';
import {
  initBrandIdentity,
  initAllScrollAnimations,
  destroyAllScrollAnimations,
  initProductCarousel,
  TINTI_BRAND,
  type CarouselInstance,
} from '@/animations';

export function useTintiAnimations(): void {
  const carouselRef = useRef<CarouselInstance | null>(null);

  useEffect(() => {
    // Pequeño delay para asegurar que React haya completado el render
    const timer = setTimeout(() => {
      initBrandIdentity(TINTI_BRAND);
      initAllScrollAnimations();
      carouselRef.current = initProductCarousel();
    }, 100);

    return () => {
      clearTimeout(timer);
      destroyAllScrollAnimations();
      carouselRef.current?.destroy();
    };
  }, []);
}

export default useTintiAnimations;
