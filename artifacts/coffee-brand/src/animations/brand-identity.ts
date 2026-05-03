/**
 * brand-identity.ts
 * 
 * Inyecta dinámicamente la identidad de Tinti Coffee Company
 * en los selectores existentes del Header (Navigation) y Footer.
 * 
 * Utiliza MutationObserver para garantizar que la inyección ocurra
 * incluso si el DOM se renderiza de forma asíncrona (React).
 */

export interface BrandConfig {
  companyName: string;
  logoSrc: string;
  slogan: string;
  logoAlt: string;
}

/** Configuración de marca por defecto para Tinti Coffee Company */
export const TINTI_BRAND: BrandConfig = {
  companyName: 'Tinti Coffee Company',
  logoSrc: '/imagen.png',
  slogan: "Café de especialidad colombiano del Huila pa'l mundo",
  logoAlt: 'Logo de Tinti Coffee Company — Café de especialidad del Huila',
};

/**
 * Reemplaza el SVG placeholder del header por el logo real de la marca
 * y actualiza el texto del nombre de la empresa.
 */
function injectHeaderBrand(config: BrandConfig): void {
  // Selector: el <a> raíz del header que contiene el SVG y el span
  const headerLink = document.querySelector<HTMLAnchorElement>(
    'header a[href="#"]'
  );

  if (!headerLink) return;

  // Reemplazar el SVG inline por una imagen real
  const existingSvg = headerLink.querySelector('svg');
  if (existingSvg) {
    const logoImg = document.createElement('img');
    logoImg.src = config.logoSrc;
    logoImg.alt = config.logoAlt;
    logoImg.width = 48;
    logoImg.height = 48;
    logoImg.style.borderRadius = '50%';
    logoImg.style.objectFit = 'cover';
    logoImg.className = 'tinti-logo-header';
    existingSvg.replaceWith(logoImg);
  }

  // Actualizar el nombre de la empresa en el span
  const nameSpan = headerLink.querySelector('span');
  if (nameSpan) {
    nameSpan.textContent = config.companyName;
  }
}

/**
 * Reemplaza el SVG placeholder del footer por el logo real de la marca
 * y actualiza el nombre de empresa y copyright.
 */
function injectFooterBrand(config: BrandConfig): void {
  const footer = document.querySelector('footer');
  if (!footer) return;

  // Reemplazar el SVG del footer por la imagen del logo
  const footerLogoContainer = footer.querySelector('.flex.items-center.gap-3');
  if (footerLogoContainer) {
    const footerSvg = footerLogoContainer.querySelector('svg');
    if (footerSvg) {
      const logoImg = document.createElement('img');
      logoImg.src = config.logoSrc;
      logoImg.alt = config.logoAlt;
      logoImg.width = 52;
      logoImg.height = 52;
      logoImg.style.borderRadius = '50%';
      logoImg.style.objectFit = 'cover';
      logoImg.className = 'tinti-logo-footer';
      footerSvg.replaceWith(logoImg);
    }

    // Actualizar el nombre en el footer
    const footerName = footerLogoContainer.querySelector('span');
    if (footerName) {
      footerName.textContent = config.companyName;
    }
  }

  // Actualizar el copyright text
  const copyrightEl = footer.querySelector('.font-typewriter.text-xs');
  if (copyrightEl && copyrightEl.textContent?.includes('Café Huila')) {
    copyrightEl.textContent = copyrightEl.textContent.replace(
      'Café Huila',
      config.companyName
    );
  }

  // Inyectar slogan en el tagline del footer
  const tagline = footer.querySelector('p.text-sm.font-light');
  if (tagline) {
    tagline.textContent = config.slogan;
  }
}

/**
 * Actualiza el title de la página y las meta tags con la identidad de marca.
 */
function injectMetaBrand(config: BrandConfig): void {
  document.title = `${config.companyName} — ${config.slogan}`;

  let metaDescription = document.querySelector<HTMLMetaElement>(
    'meta[name="description"]'
  );
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    document.head.appendChild(metaDescription);
  }
  metaDescription.content = `${config.companyName}: ${config.slogan}. Café de especialidad cultivado en el Huila, Colombia.`;
}

/**
 * Inicializa la inyección de identidad de marca.
 * Usa MutationObserver para esperar a que React monte el DOM.
 */
export function initBrandIdentity(config: BrandConfig = TINTI_BRAND): void {
  const tryInject = (): boolean => {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    if (header && footer) {
      injectHeaderBrand(config);
      injectFooterBrand(config);
      injectMetaBrand(config);
      return true;
    }
    return false;
  };

  // Si el DOM ya está listo, inyectar de inmediato
  if (tryInject()) return;

  // Si no, observar mutaciones en el root hasta que aparezcan los elementos
  const root = document.getElementById('root');
  if (!root) return;

  const observer = new MutationObserver((_mutations, obs) => {
    if (tryInject()) {
      obs.disconnect();
    }
  });

  observer.observe(root, { childList: true, subtree: true });

  // Timeout de seguridad: dejar de observar tras 10 segundos
  setTimeout(() => observer.disconnect(), 10_000);
}

export default initBrandIdentity;
