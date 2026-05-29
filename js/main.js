/**
 * MAISON ÉLISE — Luxury Fashion Store
 * Main JavaScript: Cart, Animations, Navigation
 */

const WHATSAPP_NUMBER = '5215512345678';
const AUTH_STORAGE_KEY = 'maison-user';
const USERS_STORAGE_KEY = 'maison-users';
const DEFAULT_DOMAIN = 'm4rc32004.github.io/ropa-lujo';

const products = [
  {
    id: 1,
    name: 'Abrigo Cachemira Nocturne',
    price: 18900,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80',
    badge: 'Nuevo',
    category: 'Outerwear',
    description:
      'Abrigo en cachemira premium con construcción minimalista, caída perfecta y acabados artesanales. Diseñado para durar décadas.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Negro', 'Camel', 'Gris'],
    images: {
      'Negro': 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80',
      'Camel': 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=600&q=80',
      'Gris': 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&w=600&q=80'
    }
  },
  {
    id: 2,
    name: 'Vestido Seda Éternelle',
    price: 12500,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80',
    badge: null,
    category: 'Vestidos',
    description:
      'Seda italiana con brillo sutil y líneas que estilizan. Ideal para eventos de noche y ocasiones especiales.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Champagne', 'Negro', 'Esmeralda'],
    images: {
      'Champagne': 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80',
      'Negro': 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=600&q=80',
      'Esmeralda': 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=600&q=80'
    }
  },
  {
    id: 3,
    name: 'Blazer Lino Italiano',
    price: 9800,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80&auto=format&fit=crop',
    badge: 'Bestseller',
    category: 'Sastrería',
    description:
      'Lino italiano de alta densidad, estructura ligera y hombros limpios. Un esencial contemporáneo para todo el año.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Arena', 'Azul Marino', 'Blanco'],
    images: {
      'Arena': 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80&auto=format&fit=crop',
      'Azul Marino': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop',
      'Blanco': 'https://images.unsplash.com/photo-1504150558240-0b4fd8946624?w=600&q=80&auto=format&fit=crop'
    }
  },
  {
    id: 4,
    name: 'Bolso Signature Cuero',
    price: 15600,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
    badge: null,
    category: 'Accesorios',
    description:
      'Cuero genuino con textura suave, herrajes discretos y compartimentos funcionales. Elegancia silenciosa.',
    sizes: ['Única'],
    colors: ['Negro', 'Cognac', 'Miel'],
    images: {
      'Negro': 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
      'Cognac': 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80',
      'Miel': 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=600&q=80'
    }
  },
  {
    id: 5,
    name: 'Camisa Algodón Egipcio',
    price: 4200,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80&auto=format&fit=crop',
    badge: null,
    category: 'Camisas',
    description:
      'Algodón egipcio de fibra larga con tacto sedoso. Corte impecable, ideal para looks formales o relajados.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blanco', 'Azul Cielo', 'Rosa'],
    images: {
      'Blanco': 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80&auto=format&fit=crop',
      'Azul Cielo': 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80&auto=format&fit=crop',
      'Rosa': 'https://images.unsplash.com/photo-1620012253295-c05717270349?w=600&q=80&auto=format&fit=crop'
    }
  },
  {
    id: 6,
    name: 'Pantalón Lana Merino',
    price: 6500,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80&auto=format&fit=crop',
    badge: 'Nuevo',
    category: 'Pantalones',
    description:
      'Lana merino con respirabilidad superior y estructura elegante. Se adapta a tu ritmo con comodidad premium.',
    sizes: ['28', '30', '32', '34'],
    colors: ['Gris Oxford', 'Negro', 'Azul'],
    images: {
      'Gris Oxford': 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80&auto=format&fit=crop',
      'Negro': 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80&auto=format&fit=crop',
      'Azul': 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80&auto=format&fit=crop'
    }
  },
  {
    id: 7,
    name: 'Bufanda Cashmere',
    price: 3800,
    image: 'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?w=600&q=80&auto=format&fit=crop',
    badge: null,
    category: 'Accesorios',
    description:
      'Cashmere ultra suave con caída ligera. Un acento sofisticado para elevar cualquier outfit.',
    sizes: ['Única'],
    colors: ['Beige', 'Gris', 'Negro'],
    images: {
      'Beige': 'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?w=600&q=80&auto=format&fit=crop',
      'Gris': 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&q=80&auto=format&fit=crop',
      'Negro': 'https://images.unsplash.com/photo-1456339147171-4682337d4576?w=600&q=80&auto=format&fit=crop'
    }
  },
  {
    id: 8,
    name: 'Traje Tres Piezas Royal',
    price: 24500,
    image: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&w=600&q=80',
    badge: 'Exclusivo',
    category: 'Sastrería',
    description:
      'Traje premium con chaleco, ajuste moderno y telas seleccionadas. Para ocasiones donde la presencia lo es todo.',
    sizes: ['46', '48', '50', '52'],
    colors: ['Azul Royal', 'Negro', 'Gris Marengo'],
    images: {
      'Azul Royal': 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&w=600&q=80',
      'Negro': 'https://images.unsplash.com/photo-1594932224016-9460039600f7?auto=format&fit=crop&w=600&q=80',
      'Gris Marengo': 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80'
    }
  },
  {
    id: 9,
    name: 'Cardigán Lana Merino Crema',
    price: 7200,
    image: 'https://images.unsplash.com/photo-1611312449412-6ce3a60c88bc?w=800&q=80&auto=format&fit=crop',
    badge: 'Nuevo',
    category: 'Sastrería',
    description:
      'Cardigán en lana merino fina con costuras impecables. Versatil y atemporal, perfecto para capas sofisticadas.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Crema', 'Negro', 'Café'],
    images: {
      'Crema': 'https://images.unsplash.com/photo-1611312449412-6ce3a60c88bc?w=800&q=80&auto=format&fit=crop',
      'Negro': 'https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?w=800&q=80&auto=format&fit=crop',
      'Café': 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80&auto=format&fit=crop'
    }
  },
  {
    id: 10,
    name: 'Falda Lino Elegancia',
    price: 6800,
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=80&auto=format&fit=crop',
    badge: null,
    category: 'Faldas',
    description:
      'Falda en lino italiano con corte minimalista. Cómoda y elegante, ideal para climas cálidos.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Lino Natural', 'Negro', 'Blanco'],
    images: {
      'Lino Natural': 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=80&auto=format&fit=crop',
      'Negro': 'https://images.unsplash.com/photo-1503431128935-64522955f69a?w=600&q=80&auto=format&fit=crop',
      'Blanco': 'https://images.unsplash.com/photo-1572804013307-59c8ffb61914?w=600&q=80&auto=format&fit=crop'
    }
  },
  {
    id: 11,
    name: 'Zapatos Oxford Cuero Negro',
    price: 8900,
    image: 'https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=800&q=80&auto=format&fit=crop',
    badge: 'Bestseller',
    category: 'Calzado',
    description:
      'Oxford clásico en cuero italiano negro con suelas de cuero artesanales. Un esencial que nunca pasa de moda.',
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
    colors: ['Negro', 'Marrón Oscuro'],
    images: {
      'Negro': 'https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=800&q=80&auto=format&fit=crop',
      'Marrón Oscuro': 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&q=80&auto=format&fit=crop'
    }
  },
  {
    id: 12,
    name: 'Sneakers Minimalist White',
    price: 5600,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80',
    badge: null,
    category: 'Calzado',
    description:
      'Tenis de piel de becerro italiana en color blanco puro. Un diseño atemporal que combina la comodidad deportiva con la estética de lujo.',
    sizes: ['38', '39', '40', '41', '42', '43'],
    colors: ['Blanco Total'],
    images: {
      'Blanco Total': 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80'
    }
  },
  {
    id: 13,
    name: 'Cinturón Cuero Miel',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=800&q=80',
    badge: null,
    category: 'Accesorios',
    description:
      'Cinturón en cuero natural con tonalidades cálidas. Detalles artesanales y duradero.',
    sizes: ['Única'],
    colors: ['Miel', 'Cognac', 'Negro'],
    images: {
      'Miel': 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=800&q=80',
      'Cognac': 'https://images.unsplash.com/photo-1611946021272-9694d4023793?w=800&q=80&auto=format&fit=crop',
      'Negro': 'https://images.unsplash.com/photo-1606132761895-711e54019294?w=800&q=80&auto=format&fit=crop'
    }
  },
  {
    id: 14,
    name: 'Gafas de Sol Óptica Francesa',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=800&q=80&auto=format&fit=crop',
    badge: 'Nuevo',
    category: 'Accesorios',
    description:
      'Gafas diseñadas en París con cristales polarizados de protección UV100%. Elegancia en cada ángulo.',
    sizes: ['Única'],
    colors: ['Negro', 'Carey', 'Dorado'],
    images: {
      'Negro': 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=800&q=80&auto=format&fit=crop',
      'Carey': 'https://images.unsplash.com/photo-1511499767327-0850231af770?w=800&q=80&auto=format&fit=crop',
      'Dorado': 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80&auto=format&fit=crop'
    }
  },
  {
    id: 15,
    name: 'Abrigo Lana Negra Premium',
    price: 16500,
    image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800&q=80&auto=format&fit=crop',
    badge: null,
    category: 'Outerwear',
    description:
      'Abrigo en lana pura con forro de seda natural. Estructura clásica, terminaciones exquisitas.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Negro', 'Azul Marino'],
    images: {
      'Negro': 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800&q=80&auto=format&fit=crop',
      'Azul Marino': 'https://images.unsplash.com/photo-1544923246-77307dd654ca?w=800&q=80&auto=format&fit=crop'
    }
  },
  {
    id: 16,
    name: 'Tenis Urban Luxury Edition',
    price: 5900,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80&auto=format&fit=crop',
    badge: null,
    category: 'Calzado',
    description:
      'Calzado urbano de alta gama con detalles artesanales y materiales técnicos premium. La definición del estilo "streetwear" de élite.',
    sizes: ['37', '38', '39', '40', '41'],
    colors: ['Blanco/Gris', 'Negro/Blanco'],
    images: {
      'Blanco/Gris': 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80&auto=format&fit=crop',
      'Negro/Blanco': 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80&auto=format&fit=crop'
    }
  },
];

// ===== State =====
let cart = JSON.parse(localStorage.getItem('maison-cart')) || [];
let user = JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY)) || null;
let catalogState = {
  query: '',
  category: 'Todos',
  sort: 'featured',
};
let cartPaymentMethod = "Tarjeta de Crédito / Débito";

// ===== DOM Elements =====
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
let revealObserver = null;

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initNavbar();
  initMobileMenu();
  initScrollReveal();
  initHeroParallax();
  initHeroVideoFallback();
  initCatalog();
  renderProducts();
  initCart();
  initProductModal();
  initAuth();
  initNewsletter();
  initQR();
  updateCartUI();
});

// ===== Loader =====
function initLoader() {
  const loader = $('#loader');
  if (!loader) return;

  const hideLoader = () => {
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 700);
  };

  // Si la página ya cargó (por el defer), lo quitamos de inmediato
  if (document.readyState === 'complete') {
    setTimeout(hideLoader, 800);
  } else {
    window.addEventListener('load', () => setTimeout(hideLoader, 800));
  }
}

// ===== Navbar =====
function initNavbar() {
  const navbar = $('#navbar');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ===== Mobile Menu =====
function initMobileMenu() {
  const toggle = $('#menu-toggle');
  const menu = $('#mobile-menu');
  const hamburger = toggle.querySelector('.hamburger');

  toggle.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  });

  $$('.mobile-nav-link, #mobile-menu .btn-primary, #login-btn-mobile').forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      menu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ===== Scroll Reveal =====
function initScrollReveal() {
  const reveals = $$('.reveal');

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => entry.target.classList.add('visible'), parseInt(delay));
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.01, rootMargin: '0px' }
  );

  reveals.forEach((el) => revealObserver.observe(el));
}

function observeRevealsWithin(root) {
  if (!revealObserver) return;
  root.querySelectorAll?.('.reveal')?.forEach((el) => revealObserver.observe(el));
}

// ===== Hero Parallax =====
function initHeroParallax() {
  const heroImg = $('.hero-parallax');
  if (!heroImg) return;

  document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    heroImg.style.left = `${moveX}px`;
    heroImg.style.top = `${moveY}px`;
  });

  window.addEventListener(
    'scroll',
    () => {
      const scrolled = window.scrollY;
      if (scrolled < window.innerHeight) {
        heroImg.style.transform = `scale(1.1) translateY(${scrolled * 0.3}px)`;
      }
    },
    { passive: true }
  );
}

// ===== Custom Cursor =====
function initCustomCursor() {
  const cursor = $('#custom-cursor');
  if (!cursor) return;

  window.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest('a, button, .product-card, input, select, [role="button"]');
    cursor.classList.toggle('cursor-hover', !!target);
  });
}

// ===== Products =====
function formatPrice(amount) {
  return '$' + amount.toLocaleString('es-MX');
}

function getProductWhatsAppHref(productId) {
  const p = products.find((x) => x.id === productId);
  if (!p) return `https://wa.me/${WHATSAPP_NUMBER}`;
  const msg = `Hola, me interesa ${p.name} de Maison Élise. ¿Me compartes disponibilidad y tallas?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function renderProducts() {
  const grid = $('#products-grid');
  if (!grid) return;

  // Novedades: preferimos mostrar los “Nuevo” primero y mantener 8 máximo
  const featured = [...products].sort((a, b) => {
    const aNew = a.badge === 'Nuevo' ? 1 : 0;
    const bNew = b.badge === 'Nuevo' ? 1 : 0;
    return bNew - aNew;
  });

  grid.innerHTML = featured
    .map(
      (p, i) => `
    <article class="reveal product-card" data-delay="${(i % 4) * 80}">
      <div class="product-image-wrap rounded-sm cursor-pointer open-product" role="button" tabindex="0" data-id="${p.id}" aria-label="Ver detalle de ${p.name}">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        <img src="${p.image}" alt="${p.name} — Maison Élise" class="img-reveal" loading="lazy">
        <div class="quick-add">
          <button
            class="btn-primary w-full text-[10px] py-3 buy-now"
            data-id="${p.id}"
            type="button"
          >
            Comprar ahora
          </button>
          <button
            class="btn-outline w-full text-[10px] py-3 mt-2 add-to-cart"
            data-id="${p.id}"
          >
            Añadir al carrito
          </button>
          <button
            class="btn-outline w-full text-[10px] py-3 mt-2 open-product"
            data-id="${p.id}"
            type="button"
          >
            Ver detalle
          </button>
        </div>
      </div>
      <div class="mt-4">
        <button class="text-left w-full open-product" data-id="${p.id}" type="button">
          <h3 class="text-sm font-light leading-snug hover:text-champagne transition-colors">${p.name}</h3>
        </button>
        <p class="font-display text-xl text-champagne mt-1">${formatPrice(p.price)}</p>
        <a
          class="block text-xs text-champagne/70 hover:text-champagne transition-colors mt-2"
          href="${getProductWhatsAppHref(p.id)}"
          target="_blank"
          rel="noopener noreferrer"
        >
          Consultar por WhatsApp
        </a>
      </div>
    </article>
  `
    )
    .join('');

  observeRevealsWithin(grid);
}

function initCatalog() {
  const catalogGrid = $('#catalog-grid');
  if (!catalogGrid) return;

  const categories = ['Todos', ...Array.from(new Set(products.map((p) => p.category))).sort()];
  const filtersWrap = $('#category-filters');
  if (filtersWrap) {
    filtersWrap.innerHTML = categories
      .map(
        (c) => `
        <button type="button" class="filter-pill px-3 py-2 border border-cream/15 text-xs hover:border-champagne hover:text-champagne transition-colors" data-category="${c}" aria-pressed="${c === catalogState.category}">
          ${c}
        </button>`
      )
      .join('');

    filtersWrap.addEventListener('click', (e) => {
      const btn = e.target.closest?.('[data-category]');
      if (!btn) return;
      catalogState.category = btn.dataset.category;
      filtersWrap.querySelectorAll('[data-category]').forEach((b) => b.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', 'true');
      renderCatalog();
    });
  }

  $('#search-input')?.addEventListener('input', (e) => {
    catalogState.query = e.target.value || '';
    renderCatalog();
  });

  $('#sort-select')?.addEventListener('change', (e) => {
    catalogState.sort = e.target.value;
    renderCatalog();
  });

  $('#reset-filters')?.addEventListener('click', () => {
    catalogState = { query: '', category: 'Todos', sort: 'featured' };
    const search = $('#search-input');
    const sort = $('#sort-select');
    if (search) search.value = '';
    if (sort) sort.value = 'featured';
    const filtersWrap = $('#category-filters');
    filtersWrap?.querySelectorAll('[data-category]').forEach((b) => {
      b.setAttribute('aria-pressed', String(b.dataset.category === 'Todos'));
    });
    renderCatalog();
  });

  // Delegación de eventos para catálogo
  catalogGrid.addEventListener('click', (e) => {
    const buyBtn = e.target.closest?.('.buy-now');
    if (buyBtn) {
      e.stopPropagation();
      openProductModal(parseInt(buyBtn.dataset.id));
      return;
    }
    const addBtn = e.target.closest?.('.add-to-cart');
    if (addBtn) {
      e.stopPropagation();
      addToCart(parseInt(addBtn.dataset.id));
      return;
    }
    const openBtn = e.target.closest?.('.open-product');
    if (openBtn) {
      e.preventDefault();
      openProductModal(parseInt(openBtn.dataset.id));
    }
  });

  // También optimizamos el grid de novedades con delegación
  $('#products-grid')?.addEventListener('click', (e) => {
    const buyBtn = e.target.closest?.('.buy-now');
    if (buyBtn) {
      e.stopPropagation();
      openProductModal(parseInt(buyBtn.dataset.id));
      return;
    }
    const addBtn = e.target.closest?.('.add-to-cart');
    if (addBtn) {
      e.stopPropagation();
      addToCart(parseInt(addBtn.dataset.id));
      return;
    }
    const openBtn = e.target.closest?.('.open-product');
    if (openBtn) {
      e.preventDefault();
      openProductModal(parseInt(openBtn.dataset.id));
    }
  });

  renderCatalog();
}

function renderCatalog() {
  const grid = $('#catalog-grid');
  const empty = $('#catalog-empty');
  const count = $('#catalog-count');
  if (!grid) return;

  const q = catalogState.query.trim().toLowerCase();
  let list = products.filter((p) => {
    const matchQuery = !q || p.name.toLowerCase().includes(q);
    const matchCat = catalogState.category === 'Todos' || p.category === catalogState.category;
    return matchQuery && matchCat;
  });

  switch (catalogState.sort) {
    case 'price-asc':
      list.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      list.sort((a, b) => b.price - a.price);
      break;
    case 'name':
      list.sort((a, b) => a.name.localeCompare(b.name, 'es'));
      break;
    default:
      // featured: Nuevo primero, luego Bestseller, luego el resto
      list.sort((a, b) => scoreFeatured(b) - scoreFeatured(a));
  }

  if (count) count.textContent = `${list.length} producto${list.length === 1 ? '' : 's'}`;

  if (list.length === 0) {
    grid.innerHTML = '';
    empty?.classList.remove('hidden');
    return;
  }

  empty?.classList.add('hidden');
  grid.innerHTML = list
    .map(
      (p, i) => `
      <article class="reveal product-card" data-delay="${(i % 4) * 80}">
        <div class="product-image-wrap rounded-sm cursor-pointer open-product" role="button" tabindex="0" data-id="${p.id}" aria-label="Ver detalle de ${p.name}">
          ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
          <img src="${p.image}" alt="${p.name} — Maison Élise" loading="lazy" decoding="async">
          <div class="quick-add">
            <button class="btn-primary w-full text-[10px] py-3 buy-now" data-id="${p.id}" type="button">Comprar ahora</button>
            <button class="btn-outline w-full text-[10px] py-3 mt-2 add-to-cart" data-id="${p.id}" type="button">Añadir al carrito</button>
            <button class="btn-outline w-full text-[10px] py-3 mt-2 open-product" data-id="${p.id}" type="button">Ver detalle</button>
          </div>
        </div>
        <div class="mt-4">
          <button class="text-left w-full open-product" data-id="${p.id}" type="button">
            <h3 class="text-sm font-light leading-snug hover:text-champagne transition-colors">${p.name}</h3>
          </button>
          <p class="font-display text-xl text-champagne mt-1">${formatPrice(p.price)}</p>
          <a
            class="block text-xs text-champagne/70 hover:text-champagne transition-colors mt-2"
            href="${getProductWhatsAppHref(p.id)}"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </article>
    `
    )
    .join('');

  observeRevealsWithin(grid);
}

function scoreFeatured(p) {
  if (p.badge === 'Nuevo') return 30;
  if (p.badge === 'Bestseller') return 20;
  if (p.badge === 'Exclusivo') return 10;
  return 0;
}

// ===== Product Modal =====
function initProductModal() {
  const overlay = $('#product-overlay');
  const modal = $('#product-modal');
  const closeBtn = $('#product-close');

  if (!overlay || !modal || !closeBtn) return;

  overlay.addEventListener('click', closeProductModal);
  closeBtn.addEventListener('click', closeProductModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeLogin();
    }
  });
}

function openProductModal(productId) {
  const p = products.find((x) => x.id === productId);
  if (!p) return;

  const content = $('#product-modal-content');
  content.innerHTML = `
    <div id="step-1-details" class="grid md:grid-cols-2 gap-8 items-start animate-fade-in">
        <div class="overflow-hidden rounded-sm border border-cream/10">
          <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover main-modal-img">
        </div>
        <div>
          <p class="text-champagne text-xs tracking-luxe uppercase mb-2">${p.badge || 'Colección 2026'}</p>
          <h3 class="font-display text-3xl md:text-4xl font-light">${p.name}</h3>
          <p class="font-display text-3xl text-champagne mt-2">${formatPrice(p.price)}</p>
          
          <div class="mt-8">
            <p class="text-[10px] tracking-luxe uppercase text-cream/40 mb-3">Descripción y Composición</p>
            <p class="text-sm text-cream/70 font-light leading-relaxed italic">${p.description}</p>
            <div class="mt-4 flex items-center gap-2">
              <span class="text-[10px] tracking-luxe uppercase text-cream/40">Categoría:</span>
              <span class="text-xs text-champagne/80 font-light">${p.category}</span>
            </div>
          </div>
          
          <div class="mt-8 space-y-6">
            <div>
              <p class="text-[10px] tracking-luxe uppercase text-cream/40 mb-3">Seleccionar Talla</p>
              <div class="flex flex-wrap gap-2">
                ${(p.sizes || ['Única']).map((s, i) => `<button class="size-pill px-4 py-2 border border-cream/10 text-xs transition-all" data-size="${s}" aria-pressed="${i===0}">${s}</button>`).join('')}
              </div>
            </div>
            <div>
              <p class="text-[10px] tracking-luxe uppercase text-cream/40 mb-3">Seleccionar Color</p>
              <div class="flex flex-wrap gap-2">
                ${(p.colors || ['Único']).map((c, i) => `<button class="color-pill px-4 py-2 border border-cream/10 text-xs transition-all" data-color="${c}" aria-pressed="${i===0}">${c}</button>`).join('')}
              </div>
            </div>
          </div>

          <div class="mt-10 pt-6 border-t border-cream/5 flex flex-col gap-3">
            <button type="button" class="btn-primary w-full py-4 text-xs tracking-luxe uppercase go-to-payment">Continuar compra</button>
            <button type="button" class="btn-outline w-full py-4 text-xs tracking-luxe uppercase add-to-cart-modal">Añadir al carrito</button>
          </div>
        </div>
    </div>

    <div id="step-2-payment" class="hidden max-w-xl mx-auto py-4 animate-fade-in">
      <button type="button" class="back-to-details text-champagne text-[10px] tracking-luxe uppercase mb-8 flex items-center gap-2">
        ← Volver a detalles
      </button>
      <h3 class="font-display text-3xl mb-2">¿Cómo quieres pagar?</h3>
      <p class="text-cream/50 text-sm mb-8 font-light">Selecciona uno de los métodos disponibles para completar tu pedido.</p>
      
      <div class="space-y-3" id="payment-options-list">
        <button class="payment-option-card w-full flex items-center p-5 border border-cream/10 rounded-sm hover:border-champagne transition-all active" data-payment="Tarjeta de Crédito / Débito">
          <div class="w-10 h-10 bg-cream/5 rounded-full flex items-center justify-center mr-4 text-champagne">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" stroke-width="1.5"/></svg>
          </div>
          <div class="text-left">
            <p class="text-sm font-medium">Tarjeta de Crédito o Débito</p>
            <p class="text-[10px] text-cream/40 uppercase tracking-widest mt-0.5">Visa, Mastercard, Amex</p>
          </div>
          <div class="ml-auto radio-circle w-4 h-4 rounded-full border border-champagne flex items-center justify-center"><div class="dot w-2 h-2 bg-champagne rounded-full"></div></div>
        </button>

        <button class="payment-option-card w-full flex items-center p-5 border border-cream/10 rounded-sm hover:border-champagne transition-all" data-payment="Efectivo (OXXO / PayCash)">
          <div class="w-10 h-10 bg-cream/5 rounded-full flex items-center justify-center mr-4 text-champagne">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" stroke-width="1.5"/></svg>
          </div>
          <div class="text-left">
            <p class="text-sm font-medium">Efectivo en puntos de pago</p>
            <p class="text-[10px] text-cream/40 uppercase tracking-widest mt-0.5">OXXO, 7-Eleven, Farmacias</p>
          </div>
          <div class="ml-auto radio-circle w-4 h-4 rounded-full border border-cream/20"></div>
        </button>

        <button class="payment-option-card w-full flex items-center p-5 border border-cream/10 rounded-sm hover:border-champagne transition-all" data-payment="Transferencia SPEI">
          <div class="w-10 h-10 bg-cream/5 rounded-full flex items-center justify-center mr-4 text-champagne">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" stroke-width="1.5"/></svg>
          </div>
          <div class="text-left">
            <p class="text-sm font-medium">Transferencia Bancaria (SPEI)</p>
            <p class="text-[10px] text-cream/40 uppercase tracking-widest mt-0.5">Acreditación inmediata</p>
          </div>
          <div class="ml-auto radio-circle w-4 h-4 rounded-full border border-cream/20"></div>
        </button>
      </div>

      <div class="mt-12 bg-charcoal/50 p-6 rounded-sm border border-cream/5">
        <div class="flex justify-between items-center mb-6">
          <span class="text-xs uppercase tracking-luxe text-cream/50">Total a pagar</span>
          <span class="font-display text-3xl text-champagne">${formatPrice(p.price)}</span>
        </div>
        <button type="button" class="btn-primary w-full py-4 text-xs tracking-luxe uppercase final-checkout-btn">Pagar ahora</button>
      </div>
    </div>
  `;

  // --- Lógica del Modal ---
  let selectedPayment = "Tarjeta de Crédito / Débito";

  // Tallas y Colores (Paso 1)
  content.querySelectorAll('.size-pill').forEach(btn => btn.onclick = () => {
    content.querySelectorAll('.size-pill').forEach(b => b.setAttribute('aria-pressed', 'false'));
    btn.setAttribute('aria-pressed', 'true');
  });

  content.querySelectorAll('.color-pill').forEach(btn => btn.onclick = () => {
    const color = btn.dataset.color;
    content.querySelectorAll('.color-pill').forEach(b => b.setAttribute('aria-pressed', 'false'));
    btn.setAttribute('aria-pressed', 'true');
    const img = content.querySelector('.main-modal-img');
    if (p.images && p.images[color] && img) img.src = p.images[color];
  });

  // Navegación entre pasos
  content.querySelector('.go-to-payment').onclick = () => {
    $('#step-1-details').classList.add('hidden');
    $('#step-2-payment').classList.remove('hidden');
  };

  content.querySelector('.back-to-details').onclick = () => {
    $('#step-2-payment').classList.add('hidden');
    $('#step-1-details').classList.remove('hidden');
  };

  // Selección de pago (Paso 2)
  content.querySelectorAll('.payment-option-card').forEach(card => {
    card.onclick = () => {
      content.querySelectorAll('.payment-option-card').forEach(c => {
        c.classList.remove('active');
        c.querySelector('.radio-circle').innerHTML = '';
        c.querySelector('.radio-circle').classList.replace('border-champagne', 'border-cream/20');
      });
      card.classList.add('active');
      card.querySelector('.radio-circle').classList.replace('border-cream/20', 'border-champagne');
      card.querySelector('.radio-circle').innerHTML = '<div class="dot w-2 h-2 bg-champagne rounded-full"></div>';
      selectedPayment = card.dataset.payment;
    };
  });

  // Finalizar Compra
  content.querySelector('.final-checkout-btn').onclick = () => {
    if (!requireAuth()) return;

    // Mostrar pantalla de éxito en el modal
    content.innerHTML = `
      <div class="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
        <div class="w-20 h-20 bg-champagne/10 rounded-full flex items-center justify-center mb-6 text-champagne">
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <h3 class="font-display text-4xl mb-4 text-champagne">¡Compra realizada con éxito!</h3>
        <p class="text-cream/60 mb-10 font-light max-w-md mx-auto">Gracias por tu compra. Tu pedido está siendo procesado y recibirás una confirmación en tu correo a la brevedad.</p>
        <button type="button" class="btn-primary px-12 py-4 text-[10px] tracking-luxe uppercase" onclick="closeProductModal()">Volver a la tienda</button>
      </div>
    `;
  };

  content.querySelector('.add-to-cart-modal').onclick = () => addToCart(p.id);

  $('#product-overlay').classList.add('modal-open');
  $('#product-modal').classList.add('modal-open');
  document.querySelector('#product-modal .product-modal-panel')?.classList.add('panel-open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  const overlay = $('#product-overlay');
  const modal = $('#product-modal');
  const panel = document.querySelector('#product-modal .product-modal-panel');
  if (!overlay || !modal) return;

  panel?.classList.remove('panel-open');
  overlay.classList.remove('modal-open');
  modal.classList.remove('modal-open');
  if (!$('#cart-overlay')?.classList.contains('opacity-0')) return; // cart open keeps lock
  if ($('#login-overlay')?.classList.contains('modal-open')) return; // login open keeps lock
  if ($('#qr-overlay')?.classList.contains('modal-open')) return; // qr open keeps lock
  document.body.style.overflow = '';
}

// ===== Cart =====
function initCart() {
  const cartBtn = $('#cart-btn');
  const cartClose = $('#cart-close');
  const cartOverlay = $('#cart-overlay');
  const checkoutBtn = $('#checkout-btn');
  const goToPaymentBtn = $('#cart-go-to-payment');
  const backToItemsBtn = $('#cart-back-to-items');

  cartBtn.addEventListener('click', openCart);
  cartClose.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);
  checkoutBtn.addEventListener('click', checkoutWhatsApp);

  // Navegación de pasos en el carrito
  goToPaymentBtn?.addEventListener('click', () => {
    $('#cart-step-1').classList.add('hidden');
    $('#cart-step-2').classList.remove('hidden');
  });

  backToItemsBtn?.addEventListener('click', () => {
    $('#cart-step-2').classList.add('hidden');
    $('#cart-step-1').classList.remove('hidden');
  });

  // Selección de pago (Estilo Mercado Libre)
  const paymentOptions = $$('.cart-payment-option');
  paymentOptions.forEach(option => {
    option.addEventListener('click', () => {
      paymentOptions.forEach(opt => {
        opt.classList.remove('active');
        opt.querySelector('.radio-circle').innerHTML = '';
        opt.querySelector('.radio-circle').classList.replace('border-champagne', 'border-cream/20');
      });
      
      option.classList.add('active');
      option.querySelector('.radio-circle').classList.replace('border-cream/20', 'border-champagne');
      option.querySelector('.radio-circle').innerHTML = '<div class="dot w-2 h-2 bg-champagne rounded-full"></div>';
      cartPaymentMethod = option.dataset.payment;
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCart();
  });
}

function openCart() {
  // Siempre abrir en el paso 1
  $('#cart-step-2')?.classList.add('hidden');
  $('#cart-step-1')?.classList.remove('hidden');

  $('#cart-sidebar').classList.remove('translate-x-full');
  $('#cart-overlay').classList.remove('opacity-0', 'pointer-events-none');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  $('#cart-sidebar').classList.add('translate-x-full');
  $('#cart-overlay').classList.add('opacity-0', 'pointer-events-none');
  if ($('#product-overlay')?.classList.contains('modal-open')) return;
  if ($('#login-overlay')?.classList.contains('modal-open')) return;
  if ($('#qr-overlay')?.classList.contains('modal-open')) return;
  document.body.style.overflow = '';
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  saveCart();
  updateCartUI();
  showToast();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveCart();
  updateCartUI();
}

function updateQty(productId, delta) {
  const item = cart.find((i) => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
  } else {
    saveCart();
    updateCartUI();
  }
}

function saveCart() {
  localStorage.setItem('maison-cart', JSON.stringify(cart));
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function updateCartUI() {
  const countEl = $('#cart-count');
  const itemsEl = $('#cart-items');
  const emptyEl = $('#cart-empty');
  const totalEl = $('#cart-total');
  const totalPaymentEl = $('#cart-total-payment');
  const checkoutBtn = $('#checkout-btn');
  const goToPaymentBtn = $('#cart-go-to-payment');

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalAmount = formatPrice(getCartTotal());

  if (totalItems > 0) {
    countEl.textContent = totalItems;
    countEl.classList.remove('opacity-0', 'scale-0');
    countEl.classList.add('opacity-100', 'scale-100');
  } else {
    countEl.classList.add('opacity-0', 'scale-0');
    countEl.classList.remove('opacity-100', 'scale-100');
  }

  if (totalEl) totalEl.textContent = totalAmount;
  if (totalPaymentEl) totalPaymentEl.textContent = totalAmount;
  if (checkoutBtn) checkoutBtn.disabled = cart.length === 0;
  if (goToPaymentBtn) goToPaymentBtn.disabled = cart.length === 0;

  if (cart.length === 0) {
    emptyEl.style.display = 'block';
    itemsEl.querySelectorAll('.cart-item').forEach((el) => el.remove());
    return;
  }

  emptyEl.style.display = 'none';

  const existingItems = itemsEl.querySelectorAll('.cart-item');
  existingItems.forEach((el) => el.remove());

  cart.forEach((item) => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="flex-1">
        <h4 class="text-sm font-light pr-4">${item.name}</h4>
        <p class="text-champagne font-display text-lg mt-1">${formatPrice(item.price)}</p>
        <div class="flex items-center gap-3 mt-3">
          <button class="qty-btn" data-action="minus" data-id="${item.id}" aria-label="Reducir cantidad">−</button>
          <span class="text-sm w-6 text-center">${item.qty}</span>
          <button class="qty-btn" data-action="plus" data-id="${item.id}" aria-label="Aumentar cantidad">+</button>
          <button class="ml-auto text-cream/40 hover:text-red-400 text-xs transition-colors remove-item" data-id="${item.id}">
            Eliminar
          </button>
        </div>
      </div>
    `;
    itemsEl.appendChild(div);
  });

  itemsEl.querySelectorAll('[data-action]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      updateQty(id, btn.dataset.action === 'plus' ? 1 : -1);
    });
  });

  itemsEl.querySelectorAll('.remove-item').forEach((btn) => {
    btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.id)));
  });
}

function checkoutWhatsApp() {
  if (cart.length === 0) return;
  if (!requireAuth()) return;

  // Vaciar carrito
  cart = [];
  saveCart();
  updateCartUI();

  // Mostrar mensaje de éxito en el contenedor del paso 2 del carrito
  const step2 = $('#cart-step-2');
  if (step2) {
    step2.innerHTML = `
      <div class="flex flex-col items-center justify-center h-full text-center animate-fade-in px-4">
        <div class="w-20 h-20 bg-champagne/10 rounded-full flex items-center justify-center mb-6 text-champagne">
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <h3 class="font-display text-4xl mb-4 text-champagne">¡Compra realizada!</h3>
        <p class="text-cream/60 mb-10 font-light">Tu pedido ha sido procesado con éxito. Gracias por confiar en Maison Élise.</p>
        <button type="button" class="btn-primary w-full py-4 text-[10px] tracking-luxe uppercase" onclick="closeCart()">Cerrar</button>
      </div>
    `;
  }
}

// ===== Toast =====
function showToast() {
  const toast = $('#toast');
  toast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
  toast.classList.add('opacity-100', 'translate-y-0');

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
    toast.classList.remove('opacity-100', 'translate-y-0');
  }, 2500);
}

// ===== Newsletter =====
function initNewsletter() {
  const form = $('#newsletter-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;
    const toast = $('#toast');
    toast.textContent = '¡Bienvenido al círculo exclusivo!';
    showToast();
    form.reset();

    const waMsg = `Hola, quiero unirme al círculo exclusivo. Mi email es: ${email}`;
    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`, '_blank');
    }, 1500);
  });
}

// ===== Auth (Login) =====
function initAuth() {
  const loginBtn = $('#login-btn');
  const loginBtnMobile = $('#login-btn-mobile');
  const overlay = $('#login-overlay');
  const closeBtn = $('#login-close');
  const form = $('#login-form');
  const registerForm = $('#register-form');
  const logoutBtn = $('#logout-btn');
  const tabsWrap = $('#auth-tabs');

  loginBtn?.addEventListener('click', openLogin);
  loginBtnMobile?.addEventListener('click', openLogin);
  overlay?.addEventListener('click', closeLogin);
  closeBtn?.addEventListener('click', closeLogin);

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = $('#login-email')?.value?.trim();
    const password = $('#login-password')?.value?.trim();
    if (!email || !password) return;

    const users = JSON.parse(localStorage.getItem(USERS_STORAGE_KEY)) || {};
    const stored = users[email];
    const ok =
      (stored && stored.password === password) ||
      (email === 'cliente@maisonelise.com' && password === 'luxe2026');
    if (!ok) {
      const toast = $('#toast');
      if (toast) toast.textContent = 'Credenciales incorrectas';
      showToast();
      return;
    }

    user = { name: stored?.name || 'Cliente', email, at: Date.now() };
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));

    const toast = $('#toast');
    if (toast) toast.textContent = `Sesión iniciada: ${email}`;
    showToast();
    form.reset();
    updateAuthUI();
    closeLogin();
  });

  registerForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = $('#register-name')?.value?.trim();
    const email = $('#register-email')?.value?.trim();
    const password = $('#register-password')?.value?.trim();
    if (!name || !email || !password) return;

    const users = JSON.parse(localStorage.getItem(USERS_STORAGE_KEY)) || {};
    users[email] = { name, password, at: Date.now() };
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));

    user = { name, email, at: Date.now() };
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));

    const toast = $('#toast');
    if (toast) toast.textContent = `Cuenta creada: ${email}`;
    showToast();
    registerForm.reset();
    updateAuthUI();
    closeLogin();
  });

  logoutBtn?.addEventListener('click', () => {
    user = null;
    localStorage.removeItem(AUTH_STORAGE_KEY);
    updateAuthUI();
    const toast = $('#toast');
    if (toast) toast.textContent = 'Sesión cerrada';
    showToast();
  });

  tabsWrap?.addEventListener('click', (e) => {
    const btn = e.target.closest?.('[data-auth-tab]');
    if (!btn) return;
    setAuthTab(btn.dataset.authTab);
  });

  updateAuthUI();
}

function updateAuthUI() {
  const loginBtn = $('#login-btn');
  const loginBtnMobile = $('#login-btn-mobile');
  const panelLogin = $('#auth-panel-login');
  const panelRegister = $('#auth-panel-register');
  const panelAccount = $('#auth-panel-account');
  const accountName = $('#account-name');
  const accountEmail = $('#account-email');
  const tabsWrap = $('#auth-tabs');

  if (user?.email) {
    loginBtn && (loginBtn.textContent = 'Mi cuenta');
    loginBtnMobile && (loginBtnMobile.textContent = 'Mi cuenta');
    tabsWrap?.classList.add('hidden');
    panelLogin?.classList.add('hidden');
    panelRegister?.classList.add('hidden');
    panelAccount?.classList.remove('hidden');
    if (accountName) accountName.textContent = user.name || 'Cliente';
    if (accountEmail) accountEmail.textContent = user.email;
  } else {
    loginBtn && (loginBtn.textContent = 'Iniciar sesión');
    loginBtnMobile && (loginBtnMobile.textContent = 'Iniciar sesión');
    tabsWrap?.classList.remove('hidden');
    panelAccount?.classList.add('hidden');
    setAuthTab('login');
  }
}

function setAuthTab(tab) {
  const panelLogin = $('#auth-panel-login');
  const panelRegister = $('#auth-panel-register');
  const tabs = $$('#auth-tabs [data-auth-tab]');
  tabs.forEach((t) => t.classList.toggle('active', t.dataset.authTab === tab));
  if (tab === 'register') {
    panelLogin?.classList.add('hidden');
    panelRegister?.classList.remove('hidden');
  } else {
    panelRegister?.classList.add('hidden');
    panelLogin?.classList.remove('hidden');
  }
}

function openLogin() {
  $('#login-overlay')?.classList.add('modal-open');
  $('#login-modal')?.classList.add('modal-open');
  document.querySelector('#login-modal .login-modal-panel')?.classList.add('panel-open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => $('#login-email')?.focus(), 50);
}

function closeLogin() {
  const overlay = $('#login-overlay');
  const modal = $('#login-modal');
  const panel = document.querySelector('#login-modal .login-modal-panel');
  if (!overlay || !modal) return;

  panel?.classList.remove('panel-open');
  overlay.classList.remove('modal-open');
  modal.classList.remove('modal-open');
  if (!$('#cart-overlay')?.classList.contains('opacity-0')) return; // cart open keeps lock
  if ($('#product-overlay')?.classList.contains('modal-open')) return; // product modal keeps lock
  if ($('#qr-overlay')?.classList.contains('modal-open')) return; // qr keeps lock
  document.body.style.overflow = '';
}

function requireAuth() {
  if (user?.email) return true;
  const toast = $('#toast');
  if (toast) toast.textContent = 'Inicia sesión para finalizar tu compra';
  showToast();
  openLogin();
  return false;
}

// ===== QR =====
function getQrUrl() {
  const url = window.location.href;
  // Si estamos abriendo el archivo localmente, el QR apuntará al dominio oficial
  if (url.startsWith('file:')) {
    return `https://${DEFAULT_DOMAIN}`;
  }
  return url;
}

function initQR() {
  const openBtn = $('#qr-btn');
  const openBtnMobile = $('#qr-btn-mobile');
  const overlay = $('#qr-overlay');
  const modal = $('#qr-modal');
  const closeBtn = $('#qr-close');
  const canvas = $('#qr-canvas');
  const urlText = $('#qr-url-text');
  const openLink = $('#qr-open-link');
  const copyBtn = $('#qr-copy-btn');

  // Si no existe en el DOM, salimos
  if (!overlay || !modal || !closeBtn || !canvas) return;

  const open = () => {
    overlay.classList.add('modal-open');
    modal.classList.add('modal-open');
    document.querySelector('#qr-modal .qr-modal-panel')?.classList.add('panel-open');
    document.body.style.overflow = 'hidden';

    const url = getQrUrl();
    const isLocal = url.startsWith('file:');
    const note = $('#qr-note');
    if (urlText) {
      urlText.textContent = isLocal ? `Enlace local: ${url}` : url;
    }
    if (note) {
      note.textContent = isLocal
        ? 'Nota: esta página se abrió localmente. Para que el QR funcione en otro dispositivo, sirve el proyecto desde una URL accesible en la red.'
        : 'Escanea el código QR o abre el enlace directo para ver el sitio en otro dispositivo.';
    }
    if (openLink) {
      openLink.href = url;
      openLink.textContent = isLocal ? 'Abrir enlace local en este dispositivo' : 'Abrir catálogo en el navegador';
    }

    // Generar QR con librería CDN
    if (window.QRCode && typeof window.QRCode.toCanvas === 'function') {
      window.QRCode.toCanvas(canvas, url, { width: 240, margin: 1, color: { dark: '#c9a962', light: '#0a0a0a' } })
        .then(() => {
          console.log('QR generado exitosamente');
        })
        .catch((err) => {
          console.error('Error generando QR:', err);
          if (urlText) urlText.textContent = 'No se pudo generar el QR. Usa el enlace de abajo.';
        });
    } else {
      console.warn('QRCode library no cargada');
      if (urlText) urlText.textContent = 'QR no disponible. Usa el enlace de abajo.';
    }
  };



  const close = () => {
    document.querySelector('#qr-modal .qr-modal-panel')?.classList.remove('panel-open');
    overlay.classList.remove('modal-open');
    modal.classList.remove('modal-open');

    if ($('#cart-overlay') && !$('#cart-overlay').classList.contains('opacity-0')) return;
    if ($('#product-overlay')?.classList.contains('modal-open')) return;
    if ($('#login-overlay')?.classList.contains('modal-open')) return;
    document.body.style.overflow = '';
  };

  openBtn?.addEventListener('click', open);
  openBtnMobile?.addEventListener('click', open);
  overlay.addEventListener('click', close);
  closeBtn.addEventListener('click', close);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });

  copyBtn?.addEventListener('click', async () => {
    const url = getQrUrl();
    try {
      await navigator.clipboard.writeText(url);
      const toast = $('#toast');
      if (toast) toast.textContent = 'Enlace copiado';
      showToast();
    } catch (err) {
      const toast = $('#toast');
      if (toast) toast.textContent = 'No se pudo copiar el enlace';
      showToast();
    }
  });
}

// ===== Hero Video Fallback =====
function initHeroVideoFallback() {
  const video = document.querySelector('#hero video');
  const fallback = document.getElementById('hero-fallback');
  if (!video || !fallback) return;

  let videoLoaded = false;

  video.addEventListener('loadeddata', () => {
    videoLoaded = true;
    console.log('Hero video loaded successfully');
  });

  video.addEventListener('error', () => {
    console.log('Hero video failed to load, showing fallback image');
    video.style.display = 'none';
    fallback.style.display = 'block';
  });

  // Timeout de 5 segundos para cargar el video
  setTimeout(() => {
    if (!videoLoaded && video.readyState < 3) {
      console.log('Hero video loading timeout, showing fallback image');
      video.style.display = 'none';
      fallback.style.display = 'block';
    }
  }, 5000);
}

// ===== Image Fallback =====
const PLACEHOLDER_IMG = 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80';

// Función para agregar fallback a imágenes
function addImageFallback(img) {
  if (img && img.tagName === 'IMG' && !img.dataset.errorHandled) {
    img.dataset.errorHandled = 'true';
    img.onerror = function() {
      if (!this.dataset.fallbackUsed) {
        this.dataset.fallbackUsed = 'true';
        this.src = PLACEHOLDER_IMG;
      }
    };
  }
}

// Observer para agregar fallback a imágenes dinámicas
const imageObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        if (node.tagName === 'IMG') {
          addImageFallback(node);
        }
        node.querySelectorAll?.('img').forEach(addImageFallback);
      }
    });
  });
});

// Iniciar observer después de DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // Agregar fallback a todas las imágenes existentes
  document.querySelectorAll('img').forEach(addImageFallback);
  
  // Observar nuevas imágenes agregadas dinámicamente
  imageObserver.observe(document.body, { childList: true, subtree: true });
});
