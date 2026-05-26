/**
 * MAISON ÉLISE — Luxury Fashion Store
 * Main JavaScript: Cart, Animations, Navigation
 */

const WHATSAPP_NUMBER = '5215512345678';
const AUTH_STORAGE_KEY = 'maison-user';
const USERS_STORAGE_KEY = 'maison-users';
const QR_LOCAL_NETWORK_URL = 'http://192.168.0.17:8000';
const QR_FALLBACK_URL = QR_LOCAL_NETWORK_URL;

const products = [
  {
    id: 1,
    name: 'Abrigo Cachemira Nocturne',
    price: 18900,
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
    badge: 'Nuevo',
    category: 'Outerwear',
    description:
      'Abrigo en cachemira premium con construcción minimalista, caída perfecta y acabados artesanales. Diseñado para durar décadas.',
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 2,
    name: 'Vestido Seda Éternelle',
    price: 12500,
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    badge: null,
    category: 'Vestidos',
    description:
      'Seda italiana con brillo sutil y líneas que estilizan. Ideal para eventos de noche y ocasiones especiales.',
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 3,
    name: 'Blazer Lino Italiano',
    price: 9800,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80&auto=format&fit=crop',
    badge: 'Bestseller',
    category: 'Sastrería',
    description:
      'Lino italiano de alta densidad, estructura ligera y hombros limpios. Un esencial contemporáneo para todo el año.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 4,
    name: 'Bolso Signature Cuero',
    price: 15600,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80',
    badge: null,
    category: 'Accesorios',
    description:
      'Cuero genuino con textura suave, herrajes discretos y compartimentos funcionales. Elegancia silenciosa.',
    sizes: ['Única'],
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
  },
  {
    id: 6,
    name: 'Pantalón Lana Merino',
    price: 6500,
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
    badge: 'Nuevo',
    category: 'Pantalones',
    description:
      'Lana merino con respirabilidad superior y estructura elegante. Se adapta a tu ritmo con comodidad premium.',
    sizes: ['28', '30', '32', '34'],
  },
  {
    id: 7,
    name: 'Bufanda Cashmere',
    price: 3800,
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&q=80&auto=format&fit=crop',
    badge: null,
    category: 'Accesorios',
    description:
      'Cashmere ultra suave con caída ligera. Un acento sofisticado para elevar cualquier outfit.',
    sizes: ['Única'],
  },
  {
    id: 8,
    name: 'Traje Tres Piezas Royal',
    price: 24500,
    image: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=600&q=80',
    badge: 'Exclusivo',
    category: 'Sastrería',
    description:
      'Traje premium con chaleco, ajuste moderno y telas seleccionadas. Para ocasiones donde la presencia lo es todo.',
    sizes: ['46', '48', '50', '52'],
  },
  {
    id: 9,
    name: 'Cardigán Lana Merino Crema',
    price: 7200,
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=900&q=80&auto=format&fit=crop',
    badge: 'Nuevo',
    category: 'Sastrería',
    description:
      'Cardigán en lana merino fina con costuras impecables. Versatil y atemporal, perfecto para capas sofisticadas.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 10,
    name: 'Falda Lino Elegancia',
    price: 6800,
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80&auto=format&fit=crop',
    badge: null,
    category: 'Faldas',
    description:
      'Falda en lino italiano con corte minimalista. Cómoda y elegante, ideal para climas cálidos.',
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 11,
    name: 'Zapatos Oxford Cuero Negro',
    price: 8900,
    image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80&auto=format&fit=crop',
    badge: 'Bestseller',
    category: 'Calzado',
    description:
      'Oxford clásico en cuero italiano con suelas de goma resistentes. Un esencial que nunca pasa de moda.',
    sizes: ['35', '36', '37', '38', '39', '40', '41', '42'],
  },
  {
    id: 12,
    name: 'Suéter Angora Blanco',
    price: 5600,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80',
    badge: null,
    category: 'Camisas',
    description:
      'Suéter en angora con suavidad incomparable. Textura delicada, calidez premium.',
    sizes: ['S', 'M', 'L'],
  },
  {
    id: 13,
    name: 'Cinturón Cuero Miel',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
    badge: null,
    category: 'Accesorios',
    description:
      'Cinturón en cuero natural con tonalidades cálidas. Detalles artesanales y duradero.',
    sizes: ['Única'],
  },
  {
    id: 14,
    name: 'Gafas de Sol Óptica Francesa',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80',
    badge: 'Nuevo',
    category: 'Accesorios',
    description:
      'Gafas diseñadas en París con cristales polarizados de protección UV100%. Elegancia en cada ángulo.',
    sizes: ['Única'],
  },
  {
    id: 15,
    name: 'Abrigo Lana Negra Premium',
    price: 16500,
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&q=80&auto=format&fit=crop',
    badge: null,
    category: 'Outerwear',
    description:
      'Abrigo en lana pura con forro de seda natural. Estructura clásica, terminaciones exquisitas.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 16,
    name: 'Blusa Seda Champagne',
    price: 5900,
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80&auto=format&fit=crop',
    badge: null,
    category: 'Camisas',
    description:
      'Blusa en seda pura con brillo sutil. Ideal para looks sofisticados y casuales.',
    sizes: ['S', 'M', 'L'],
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
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => loader.remove(), 700);
    }, 800);
  });
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
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
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
        <img src="${p.image}" alt="${p.name} — Maison Élise" loading="lazy">
        <div class="quick-add">
          <button
            class="btn-primary w-full text-[10px] py-3 add-to-cart"
            data-id="${p.id}"
          >
            Añadir al carrito
          </button>
          <button
            class="btn-outline w-full text-[10px] py-3 mt-3 open-product"
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
            <button class="btn-primary w-full text-[10px] py-3 add-to-cart" data-id="${p.id}" type="button">Añadir al carrito</button>
            <button class="btn-outline w-full text-[10px] py-3 mt-3 open-product" data-id="${p.id}" type="button">Ver detalle</button>
          </div>
        </div>
        <div class="mt-4">
          <button class="text-left w-full open-product" data-id="${p.id}" type="button">
            <h3 class="text-sm font-light leading-snug hover:text-champagne transition-colors">${p.name}</h3>
          </button>
          <p class="font-display text-xl text-champagne mt-1">${formatPrice(p.price)}</p>
          <p class="text-xs text-cream/40 tracking-luxe uppercase mt-2">${p.category}</p>
          <a
            class="block text-xs text-champagne/70 hover:text-champagne transition-colors mt-3"
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
    <div class="grid md:grid-cols-2 gap-8 items-start">
      <div class="overflow-hidden rounded-sm border border-cream/10">
        <img src="${p.image}" alt="${p.name} — Maison Élise" class="w-full h-full object-cover">
      </div>
      <div>
        <p class="text-champagne text-xs tracking-luxe uppercase mb-3">${p.badge ? p.badge : 'Colección 2026'}</p>
        <h3 class="font-display text-3xl md:text-4xl font-light leading-tight">${p.name}</h3>
        <p class="font-display text-3xl text-champagne mt-3">${formatPrice(p.price)}</p>
        <p class="text-cream/70 font-light leading-relaxed mt-6">${p.description || ''}</p>

        <div class="mt-8">
          <p class="text-xs tracking-luxe uppercase text-cream/50 mb-3">Talla</p>
          <div class="flex flex-wrap gap-2">
            ${(p.sizes || ['Única'])
              .map(
                (s, idx) => `
              <button type="button" class="size-pill px-3 py-2 border border-cream/15 hover:border-champagne hover:text-champagne transition-colors text-xs" data-size="${s}" aria-pressed="${idx === 0}">
                ${s}
              </button>`
              )
              .join('')}
          </div>
        </div>

        <div class="mt-10 flex flex-col sm:flex-row gap-3">
          <button type="button" class="btn-primary flex-1 add-to-cart-modal" data-id="${p.id}">Añadir al carrito</button>
          <button type="button" class="btn-outline flex-1 buy-now-modal" data-id="${p.id}">Comprar ahora</button>
        </div>

        <p class="text-xs text-cream/40 mt-5">Garantía de satisfacción • Envío premium • Devoluciones 14 días</p>
      </div>
    </div>
  `;

  // Size toggle
  content.querySelectorAll('.size-pill').forEach((btn) => {
    btn.addEventListener('click', () => {
      content.querySelectorAll('.size-pill').forEach((b) => b.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', 'true');
    });
  });

  content.querySelector('.add-to-cart-modal')?.addEventListener('click', () => {
    addToCart(productId);
  });

  content.querySelector('.buy-now-modal')?.addEventListener('click', () => {
    addToCart(productId);
    openCart();
  });

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

  cartBtn.addEventListener('click', openCart);
  cartClose.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);
  checkoutBtn.addEventListener('click', checkoutWhatsApp);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCart();
  });
}

function openCart() {
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
  const checkoutBtn = $('#checkout-btn');

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  if (totalItems > 0) {
    countEl.textContent = totalItems;
    countEl.classList.remove('opacity-0', 'scale-0');
    countEl.classList.add('opacity-100', 'scale-100');
  } else {
    countEl.classList.add('opacity-0', 'scale-0');
    countEl.classList.remove('opacity-100', 'scale-100');
  }

  totalEl.textContent = formatPrice(getCartTotal());
  checkoutBtn.disabled = cart.length === 0;

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

  let message = 'Hola, me gustaría realizar el siguiente pedido en Maison Élise:%0A%0A';
  cart.forEach((item) => {
    message += `• ${item.name} x${item.qty} — ${formatPrice(item.price * item.qty)}%0A`;
  });
  message += `%0A*Total: ${formatPrice(getCartTotal())}*%0A%0A¿Cuáles son los métodos de pago y tiempo de envío?`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
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
  try {
    if (window.location && window.location.href) {
      const { protocol, hostname, port, href } = window.location;
      if (protocol === 'file:') {
        return QR_LOCAL_NETWORK_URL;
      }
      if (hostname === 'localhost' || hostname === '127.0.0.1') {
        return QR_LOCAL_NETWORK_URL;
      }
      if (hostname === '192.168.56.1') {
        return QR_LOCAL_NETWORK_URL;
      }
      return href;
    }
  } catch (e) {
    // ignore
  }
  return QR_FALLBACK_URL;
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
      window.QRCode.toCanvas(canvas, url, { width: 240, margin: 1 }).catch(() => {
        if (urlText) urlText.textContent = 'No se pudo generar el QR. Usa el enlace de abajo.';
      });
    } else {
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
