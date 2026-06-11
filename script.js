const STORAGE = {
  cart: 'akwadra-cart',
  orders: 'akwadra-orders',
  adminSession: 'akwadra-admin-session',
};

const ADMIN_ROLES = {
  'super-admin': {
    label: 'المشرف العام',
    permissions: ['view-dashboard', 'add-order', 'edit-order', 'duplicate-order', 'delete-order'],
    username: 'admin',
    password: 'admin123',
  },
  manager: {
    label: 'مدير العمليات',
    permissions: ['view-dashboard', 'add-order', 'edit-order', 'duplicate-order'],
    username: 'manager',
    password: 'manager123',
  },
  operator: {
    label: 'موظف العمليات',
    permissions: ['view-dashboard', 'duplicate-order'],
    username: 'operator',
    password: 'operator123',
  },
  accountant: {
    label: 'قسم الحسابات',
    permissions: ['view-dashboard'],
    username: 'finance',
    password: 'finance123',
  },
};

const ADMIN_ROLE_OPTIONS = [
  { value: 'super-admin', label: 'المشرف العام' },
  { value: 'manager', label: 'مدير العمليات' },
  { value: 'operator', label: 'موظف العمليات' },
  { value: 'accountant', label: 'قسم الحسابات' },
];

const PRODUCTS = [
  {
    slug: 'pepsi-classic',
    name: 'بيبسي كلاسيك',
    brand: 'Pepsi',
    category: 'cola',
    pack: 'كرتون 24 عبوة',
    volume: '330 مل',
    price: 82,
    points: 18,
    stock: 128,
    color1: '#0a5ad8',
    color2: '#073186',
    flavor: 'كولا كلاسيكية',
    description: 'خيار الجملة الأكثر دورانًا للمتاجر، المقاهي، والفروع التي تعتمد على الطلب السريع.',
    benefits: ['تدوير عالٍ', 'مناسب للعرض اليومي', 'نقاط مضاعفة للحجم الكبير'],
    specs: ['24 عبوة في الكرتون', '330 مل للعبوة', 'جاهز للشحن اليومي'],
  },
  {
    slug: 'pepsi-max',
    name: 'بيبسي ماكس',
    brand: 'Pepsi',
    category: 'zero',
    pack: 'كرتون 24 عبوة',
    volume: '330 مل',
    price: 84,
    points: 19,
    stock: 96,
    color1: '#1c2d45',
    color2: '#0e1520',
    flavor: 'كولا خفيفة السعرات',
    description: 'خيار مميز لمحبي الطعم القوي مع اهتمام أكبر بالفئات التي تفضل المشروبات قليلة السكر.',
    benefits: ['سوق الزيرو', 'مناسبة للسلاسل', 'طلب متكرر'],
    specs: ['24 عبوة في الكرتون', '330 مل للعبوة', 'تصنيف زيرو'],
  },
  {
    slug: 'coca-cola-classic',
    name: 'كوكاكولا كلاسيك',
    brand: 'Coca-Cola',
    category: 'cola',
    pack: 'كرتون 24 عبوة',
    volume: '330 مل',
    price: 86,
    points: 20,
    stock: 142,
    color1: '#e31d2d',
    color2: '#a80f1e',
    flavor: 'كولا أصلية',
    description: 'علامة رئيسية لتحسين رصيد السلة، وتناسب الطلبات التي تبحث عن حضور علامة قوي.',
    benefits: ['طلب ثابت', 'هوية قوية', 'مكافأة نقاط مرتفعة'],
    specs: ['24 عبوة في الكرتون', '330 مل للعبوة', 'ملائمة للعروض'],
  },
  {
    slug: 'coca-cola-zero',
    name: 'كوكاكولا زيرو',
    brand: 'Coca-Cola',
    category: 'zero',
    pack: 'كرتون 24 عبوة',
    volume: '330 مل',
    price: 88,
    points: 20,
    stock: 88,
    color1: '#171a21',
    color2: '#040507',
    flavor: 'كولا بدون سكر',
    description: 'خيار مناسب للفروع التي تستهدف مزيجًا بين المذاق الكلاسيكي والتوجهات الأقل سكرًا.',
    benefits: ['فئة زيرو', 'جاذبية أعلى لبعض الأسواق', 'مناسب للمناسبات'],
    specs: ['24 عبوة في الكرتون', '330 مل للعبوة', 'نسخة زيرو'],
  },
  {
    slug: 'mirinda-orange',
    name: 'ميرندا برتقال',
    brand: 'Mirinda',
    category: 'fruit',
    pack: 'كرتون 24 عبوة',
    volume: '330 مل',
    price: 78,
    points: 17,
    stock: 102,
    color1: '#ff7d2b',
    color2: '#e13d13',
    flavor: 'برتقال منعش',
    description: 'لون لافت ونكهة فاكهية تمنح واجهة الجملة تنوعًا أكثر داخل السلة اليومية.',
    benefits: ['مبيعات عائلية', 'ألوان جذابة', 'إعادة طلب سريعة'],
    specs: ['24 عبوة في الكرتون', '330 مل للعبوة', 'نكهة برتقال'],
  },
  {
    slug: '7up-lemon',
    name: 'سفن أب ليمون',
    brand: '7UP',
    category: 'sparkling',
    pack: 'كرتون 24 عبوة',
    volume: '330 مل',
    price: 76,
    points: 16,
    stock: 115,
    color1: '#7de06f',
    color2: '#2aa55f',
    flavor: 'ليمون منعش',
    description: 'مشروب منعش يدعم التوازن داخل سلة التوريد ويصلح للحملات الموسمية.',
    benefits: ['هوية منعشة', 'سوق واسع', 'سعر جملة مناسب'],
    specs: ['24 عبوة في الكرتون', '330 مل للعبوة', 'جاهز للحملات'],
  },
  {
    slug: 'fanta-orange',
    name: 'فانتا برتقال',
    brand: 'Fanta',
    category: 'fruit',
    pack: 'كرتون 24 عبوة',
    volume: '330 مل',
    price: 79,
    points: 17,
    stock: 77,
    color1: '#ff9d1c',
    color2: '#ff6118',
    flavor: 'فاكهة وبرتقال',
    description: 'أصناف فاكهية تضيف طابعًا حيويًا لسلة المحلات التي تستهدف تنويع العرض.',
    benefits: ['لون لافت', 'مناسب للعائلات', 'تكامل مع ميرندا'],
    specs: ['24 عبوة في الكرتون', '330 مل للعبوة', 'نكهة فاكهية'],
  },
  {
    slug: 'sparkling-water',
    name: 'مياه غازية منعشة',
    brand: 'Akwadra',
    category: 'sparkling',
    pack: 'كرتون 24 عبوة',
    volume: '330 مل',
    price: 64,
    points: 12,
    stock: 150,
    color1: '#0ba8c8',
    color2: '#0d5f92',
    flavor: 'غازية صافية',
    description: 'خيار اقتصادي لتكملة الطلبات بالجملة ومناسب للطلبات المتكررة ذات الهامش الحذر.',
    benefits: ['سعر منخفض', 'تكملة سلة', 'مرونة في الطلب'],
    specs: ['24 عبوة في الكرتون', '330 مل للعبوة', 'مياه غازية'],
  },
  {
    slug: 'mirinda-strawberry',
    name: 'ميرندا فراولة',
    brand: 'Mirinda',
    category: 'fruit',
    pack: 'كرتون 24 عبوة',
    volume: '330 مل',
    price: 80,
    points: 18,
    stock: 68,
    color1: '#ff4d8f',
    color2: '#d72f72',
    flavor: 'فراولة حيوية',
    description: 'نكهة فاكهية إضافية تمنح تشكيلتك الجملة تنوعًا يساعد على زيادة دوران السلة.',
    benefits: ['موسمية قوية', 'جاذبية شبابية', 'تكملة ممتازة'],
    specs: ['24 عبوة في الكرتون', '330 مل للعبوة', 'نكهة فراولة'],
  },
  {
    slug: '7up-zero',
    name: 'سفن أب زيرو',
    brand: '7UP',
    category: 'zero',
    pack: 'كرتون 24 عبوة',
    volume: '330 مل',
    price: 78,
    points: 17,
    stock: 81,
    color1: '#b2f24a',
    color2: '#5dbd25',
    flavor: 'ليمون زيرو',
    description: 'صيغة زيرو تمنحك خيارًا إضافيًا للعملاء الذين يفضلون التوازن بين الانتعاش والسعرات.',
    benefits: ['زيرو', 'انتعاش قوي', 'جاذبية متجرية'],
    specs: ['24 عبوة في الكرتون', '330 مل للعبوة', 'نسخة زيرو'],
  },
];

const REWARDS = [
  { title: 'خصم شحن 25 ريال', cost: 450, note: 'مثالي للطلبات المتوسطة داخل نطاق التغطية.' },
  { title: 'كرتون مجاني من المياه الغازية', cost: 700, note: 'مكافأة تناسب مزيج التوريد اليومي.' },
  { title: 'خصم 5% على الشحنة التالية', cost: 1100, note: 'يعزز تكرار الطلبات على المستوى التجاري.' },
  { title: 'أولوية تجهيز الطلب', cost: 1500, note: 'رفع الأولوية في الجدولة وإدخال الشحنة أسرع.' },
  { title: 'قسيمة 100 ريال', cost: 2200, note: 'تعزز هامش الموزع والمشتري بالجملة.' },
  { title: 'حزمة نقاط مضاعفة', cost: 3200, note: 'خيار مناسب للحسابات النشطة جدًا.' },
];

const BRANCHES = [
  { city: 'الرياض', area: 'المنطقة الوسطى', phone: '0555001001', hours: '8:00 ص – 10:00 م' },
  { city: 'جدة', area: 'المنطقة الغربية', phone: '0555001002', hours: '8:00 ص – 10:00 م' },
  { city: 'الدمام', area: 'المنطقة الشرقية', phone: '0555001003', hours: '8:00 ص – 9:00 م' },
  { city: 'الخبر', area: 'حسابات الشركات', phone: '0555001004', hours: '9:00 ص – 8:00 م' },
];

const money = new Intl.NumberFormat('ar-SA', { style: 'currency', currency: 'SAR', maximumFractionDigits: 0 });
const number = new Intl.NumberFormat('ar-SA');
const qs = (selector, parent = document) => parent.querySelector(selector);
const qsa = (selector, parent = document) => [...parent.querySelectorAll(selector)];

function readJSON(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}

function writeJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function seedOrders() {
  return [
    { id: 'A-1001', client: 'بقالة البدر', city: 'الرياض', amount: 3840, points: 860, cartons: 48, status: 'confirmed', date: '2026-06-04T10:30:00Z' },
    { id: 'A-1002', client: 'متجر المرسى', city: 'جدة', amount: 2460, points: 540, cartons: 30, status: 'shipped', date: '2026-06-06T08:20:00Z' },
    { id: 'A-1003', client: 'سلسلة الندى', city: 'الدمام', amount: 5180, points: 1120, cartons: 64, status: 'delivered', date: '2026-06-07T14:40:00Z' },
    { id: 'A-1004', client: 'تموينات السند', city: 'الخبر', amount: 1790, points: 320, cartons: 22, status: 'pending', date: '2026-06-08T11:00:00Z' },
    { id: 'A-1005', client: 'مقصف النخبة', city: 'الرياض', amount: 2970, points: 620, cartons: 36, status: 'confirmed', date: '2026-06-08T18:20:00Z' },
    { id: 'A-1006', client: 'شركة السقيفة', city: 'جدة', amount: 6420, points: 1450, cartons: 78, status: 'shipped', date: '2026-06-09T09:15:00Z' },
  ];
}

function ensureData() {
  if (!localStorage.getItem(STORAGE.cart)) {
    writeJSON(STORAGE.cart, [
      { slug: 'pepsi-classic', quantity: 4 },
      { slug: 'mirinda-orange', quantity: 2 },
      { slug: '7up-lemon', quantity: 1 },
    ]);
  }
  if (!localStorage.getItem(STORAGE.orders)) {
    writeJSON(STORAGE.orders, seedOrders());
  }
}

function getCart() {
  return readJSON(STORAGE.cart, []);
}

function saveCart(cart) {
  writeJSON(STORAGE.cart, cart);
  syncCartBadges();
  document.dispatchEvent(new CustomEvent('akwadra-cart-updated'));
}

function getOrders() {
  return readJSON(STORAGE.orders, seedOrders());
}

function saveOrders(orders) {
  writeJSON(STORAGE.orders, orders);
}

function getAdminSession() {
  return readJSON(STORAGE.adminSession, null);
}

function saveAdminSession(session) {
  writeJSON(STORAGE.adminSession, session);
  document.dispatchEvent(new CustomEvent('akwadra-admin-session-updated'));
}

function clearAdminSession() {
  localStorage.removeItem(STORAGE.adminSession);
  document.dispatchEvent(new CustomEvent('akwadra-admin-session-updated'));
}

function getAdminRole(role) {
  return ADMIN_ROLES[role] || null;
}

function hasAdminPermission(permission) {
  const session = getAdminSession();
  const role = session ? getAdminRole(session.role) : null;
  return Boolean(role && role.permissions.includes(permission));
}

function getSafeReturnPath() {
  const value = new URLSearchParams(location.search).get('return');
  if (!value) return 'dashboard.html';
  return value.endsWith('.html') && !value.includes('://') ? value : 'dashboard.html';
}

function getProduct(slug) {
  return PRODUCTS.find((product) => product.slug === slug) || PRODUCTS[0];
}

function cartQuantity() {
  return getCart().reduce((sum, item) => sum + item.quantity, 0);
}

function cartTotals(cart = getCart()) {
  return cart.reduce(
    (acc, item) => {
      const product = getProduct(item.slug);
      const subtotal = product.price * item.quantity;
      acc.amount += subtotal;
      acc.points += product.points * item.quantity;
      acc.cartons += item.quantity;
      return acc;
    },
    { amount: 0, points: 0, cartons: 0 },
  );
}

function addToCart(slug, quantity = 1) {
  const cart = getCart();
  const item = cart.find((entry) => entry.slug === slug);
  if (item) {
    item.quantity += quantity;
  } else {
    cart.push({ slug, quantity });
  }
  saveCart(cart);
  toast('تمت الإضافة إلى سلة الجملة');
}

function setCartQty(slug, quantity) {
  const cart = getCart().map((item) => (item.slug === slug ? { ...item, quantity } : item)).filter((item) => item.quantity > 0);
  saveCart(cart);
}

function removeFromCart(slug) {
  saveCart(getCart().filter((item) => item.slug !== slug));
  toast('تم حذف الصنف من السلة');
}

function toast(message) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = message;
  document.body.appendChild(el);
  window.setTimeout(() => el.remove(), 2200);
}

function formatDate(value) {
  return new Intl.DateTimeFormat('ar-SA', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(value));
}

function renderCountUps() {
  qsa('[data-count-up]').forEach((node) => {
    const target = Number(node.dataset.countUp || 0);
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 90));
    const update = () => {
      current = Math.min(target, current + step);
      node.textContent = number.format(current);
      if (current < target) requestAnimationFrame(update);
    };
    update();
  });
}

function buildHeader() {
  const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const session = getAdminSession();
  const role = session ? getAdminRole(session.role) : null;
  const links = [
    ['index.html', 'الرئيسية'],
    ['catalog.html', 'الكتالوج'],
    ['wholesale.html', 'الجملة'],
    ['points.html', 'النقاط'],
    ['dashboard.html', 'اللوحة'],
    ['admin-login.html', 'دخول الإدارة'],
    ['contact.html', 'تواصل'],
    ['cart.html', 'السلة'],
    ['checkout.html', 'الدفع'],
  ];

  return `
    <a href="#main" class="skip-link">تخطي إلى المحتوى</a>
    <div class="topbar">
      <div class="container">
        توريد مشروبات غازية بنظام الجملة والنقاط · تجهيز سريع · تغطية تجارية مرنة
      </div>
    </div>
    <div class="container nav-shell">
      <a class="brand" href="index.html" aria-label="أكوادرا للمشروبات">
        <span class="brand-mark"></span>
        <span class="brand-text">أكوادرا للمشروبات<small>Wholesale Soda Experience</small></span>
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-label="فتح القائمة">☰</button>
      <nav class="site-nav" aria-label="التنقل الرئيسي">
        ${links
          .map(
            ([href, label]) =>
              `<a class="nav-link ${current === href ? 'is-active' : ''}" href="${href}">${label}</a>`,
          )
          .join('')}
      </nav>
      <div class="nav-actions">
        <a class="btn btn-ghost" href="wholesale.html">طلب جملة</a>
        ${session ? `<span class="session-chip">${role?.label || session.role}</span><button class="btn btn-ghost" data-admin-logout type="button">تسجيل الخروج</button>` : ''}
        <a class="btn btn-primary" href="cart.html">سلة الجملة <span class="cart-badge" data-cart-count>0</span></a>
      </div>
    </div>
    <div class="scroll-progress"><span></span></div>
  `;
}

function buildFooter() {
  return `
    <div class="footer container">
      <div class="footer-card">
        <div class="footer-top">
          <div>
            <span class="eyebrow">أكوادرا للمشروبات</span>
            <h2>واجهة جملة بصرية تليق بسوق المشروبات الغازية وتمنح الطلبات طابعًا احترافيًا.</h2>
          </div>
          <div class="footer-links">
            <a href="catalog.html">الكتالوج</a>
            <a href="points.html">النقاط</a>
            <a href="wholesale.html">الجملة</a>
            <a href="dashboard.html">لوحة الإدارة</a>
            <a href="admin-login.html">دخول الإدارة</a>
          </div>
        </div>
        <div class="footer-bar">
          <span>© ${new Date().getFullYear()} أكوادرا للمشروبات · جميع الحقوق محفوظة</span>
          <span>جملة المشروبات الغازية · بيبسي · كوكاكولا · ميرندا · سفن أب</span>
        </div>
      </div>
    </div>
  `;
}

function mountShell() {
  const header = qs('#site-header');
  const footer = qs('#site-footer');
  if (header) header.innerHTML = buildHeader();
  if (footer) footer.innerHTML = buildFooter();
  const navToggle = qs('.nav-toggle');
  const nav = qs('.site-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }
}

function updateScrollProgress() {
  const bar = qs('.scroll-progress span');
  if (!bar) return;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? (window.scrollY / max) * 100 : 0;
  bar.style.width = `${progress}%`;
}

function setupParallax() {
  const root = qs('[data-parallax-root]');
  if (!root) return;
  const depthNodes = qsa('[data-depth]', root);
  const update = (x, y) => {
    depthNodes.forEach((node) => {
      const depth = Number(node.dataset.depth || 0) / 18;
      node.style.transform = `translate3d(${x * depth}px, ${y * depth}px, 0)`;
    });
  };
  root.addEventListener('pointermove', (event) => {
    const rect = root.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 18;
    update(x, y);
  });
  root.addEventListener('pointerleave', () => update(0, 0));
  window.addEventListener('scroll', () => {
    const offset = Math.min(window.scrollY / 45, 12);
    depthNodes.forEach((node) => {
      const depth = Number(node.dataset.depth || 0) / 30;
      node.style.transform = `translate3d(0, ${offset * depth}px, 0)`;
    });
  });
}

function setupReveal() {
  const nodes = qsa('.reveal');
  if (!nodes.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    },
    { threshold: 0.18, rootMargin: '0px 0px -10% 0px' },
  );
  nodes.forEach((node) => observer.observe(node));
}

function syncCartBadges() {
  qsa('[data-cart-count]').forEach((node) => {
    node.textContent = number.format(cartQuantity());
  });
}

function productCardTemplate(product) {
  return `
    <article class="product-card reveal" style="--accent:${product.color1}; --accent-2:${product.color2};">
      <div class="product-visual">
        <div class="bottle" style="background: linear-gradient(180deg, ${product.color1}, ${product.color2});"></div>
      </div>
      <div class="product-meta">
        <div class="price-row">
          <span class="badge">${product.brand}</span>
          <span class="badge">${product.category}</span>
        </div>
        <strong>${product.name}</strong>
        <p>${product.description}</p>
        <div class="summary-row"><span>${product.pack}</span><span>${product.volume}</span></div>
        <div class="summary-row"><span class="price">${money.format(product.price)}</span><span>+${number.format(product.points)} نقطة</span></div>
        <div class="hero-actions">
          <a class="btn btn-ghost" href="product.html?slug=${product.slug}">التفاصيل</a>
          <button class="btn btn-primary" data-add-to-cart="${product.slug}" type="button">أضف للسلة</button>
        </div>
      </div>
    </article>
  `;
}

function rewardCardTemplate(reward) {
  return `
    <article class="reward-card reveal">
      <div class="reward-visual">
        <div class="reward-bottle" style="background: linear-gradient(180deg, rgba(12,86,214,.88), rgba(234,41,91,.9));"></div>
      </div>
      <strong>${reward.title}</strong>
      <p>${reward.note}</p>
      <div class="reward-foot">
        <span>تكلفة الاستبدال</span>
        <span class="price">${number.format(reward.cost)} نقطة</span>
      </div>
      <button class="btn btn-ghost" type="button" data-claim-reward="${reward.title}">استبدال</button>
    </article>
  `;
}

function initHome() {
  renderCountUps();
}

function initCatalog() {
  const grid = qs('#catalog-grid');
  const pagination = qs('#catalog-pagination');
  const search = qs('#catalog-search');
  const sort = qs('#catalog-sort');
  const filters = qs('#catalog-filters');
  const miniCart = qs('#catalog-mini-cart');
  if (!grid || !pagination || !search || !sort || !filters) return;

  const state = { query: '', category: 'all', sort: 'featured', page: 1, pageSize: 6 };

  function filteredProducts() {
    let items = [...PRODUCTS];
    if (state.query) {
      const q = state.query.toLowerCase();
      items = items.filter((product) => [product.name, product.brand, product.flavor, product.pack, product.volume].join(' ').toLowerCase().includes(q));
    }
    if (state.category !== 'all') {
      items = items.filter((product) => product.category === state.category);
    }
    switch (state.sort) {
      case 'price-asc':
        items.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        items.sort((a, b) => b.price - a.price);
        break;
      case 'points-desc':
        items.sort((a, b) => b.points - a.points);
        break;
      case 'name':
        items.sort((a, b) => a.name.localeCompare(b.name, 'ar'));
        break;
      default:
        items.sort((a, b) => b.stock - a.stock);
    }
    return items;
  }

  function renderPagination(total, pageSize) {
    const pages = Math.max(1, Math.ceil(total / pageSize));
    state.page = Math.min(state.page, pages);
    pagination.innerHTML = Array.from({ length: pages }, (_, index) => {
      const page = index + 1;
      return `<button class="page-btn ${page === state.page ? 'is-active' : ''}" data-page-btn="${page}" type="button">${page}</button>`;
    }).join('');
    qsa('[data-page-btn]', pagination).forEach((btn) => {
      btn.addEventListener('click', () => {
        state.page = Number(btn.dataset.pageBtn);
        render();
      });
    });
  }

  function renderMiniCart() {
    if (!miniCart) return;
    const cart = getCart();
    const totals = cartTotals(cart);
    if (!cart.length) {
      miniCart.innerHTML = `<div class="mini-item">السلة فارغة الآن · أضف أصناف الجملة للبدء.</div>`;
      return;
    }
    const top = cart.slice(0, 3).map((item) => {
      const product = getProduct(item.slug);
      return `<div class="mini-item"><span>${product.name}</span><span>${item.quantity} كرتون</span></div>`;
    }).join('');
    miniCart.innerHTML = `
      ${top}
      <div class="mini-item"><span>الإجمالي</span><strong>${money.format(totals.amount)}</strong></div>
      <div class="mini-item"><span>النقاط</span><strong>${number.format(totals.points)}</strong></div>
    `;
  }

  function render() {
    const items = filteredProducts();
    const start = (state.page - 1) * state.pageSize;
    const pageItems = items.slice(start, start + state.pageSize);
    grid.innerHTML = pageItems.length
      ? pageItems.map(productCardTemplate).join('')
      : `<div class="panel reveal" style="grid-column: 1 / -1;">لا توجد نتائج مطابقة لهذا البحث.</div>`;
    renderPagination(items.length, state.pageSize);
    renderMiniCart();
    qsa('[data-add-to-cart]', grid).forEach((button) => button.addEventListener('click', () => addToCart(button.dataset.addToCart)));
    qsa('.reveal', grid).forEach((node) => node.classList.add('is-visible'));
  }

  document.addEventListener('akwadra-cart-updated', renderMiniCart);

  search.addEventListener('input', (event) => {
    state.query = event.target.value.trim();
    state.page = 1;
    render();
  });

  sort.addEventListener('change', (event) => {
    state.sort = event.target.value;
    state.page = 1;
    render();
  });

  filters.addEventListener('click', (event) => {
    const button = event.target.closest('.filter-chip');
    if (!button) return;
    state.category = button.dataset.category;
    state.page = 1;
    qsa('.filter-chip', filters).forEach((chip) => chip.classList.toggle('is-active', chip === button));
    render();
  });

  render();
}

function initProductPage() {
  const root = qs('#product-root');
  const related = qs('#related-products');
  if (!root || !related) return;
  const slug = new URLSearchParams(location.search).get('slug') || PRODUCTS[0].slug;
  const product = getProduct(slug);
  root.innerHTML = `
    <div class="product-hero">
      <div class="visual glass product-visual-large">
        <div class="bottle" style="background: linear-gradient(180deg, ${product.color1}, ${product.color2});"></div>
      </div>
      <div class="details glass product-copy">
        <span class="eyebrow">${product.brand} · ${product.category}</span>
        <h1>${product.name}</h1>
        <p>${product.description}</p>
        <div class="price-row">
          <strong class="price">${money.format(product.price)}</strong>
          <span>+${number.format(product.points)} نقطة لكل كرتون</span>
        </div>
        <div class="summary-row"><span>${product.pack}</span><span>${product.volume}</span><span>المخزون: ${number.format(product.stock)}</span></div>
        <ul class="detail-list">
          ${product.benefits.map((item) => `<li>${item}</li>`).join('')}
        </ul>
        <ul class="spec-list">
          ${product.specs.map((item) => `<li>${item}</li>`).join('')}
        </ul>
        <div class="product-actions">
          <button class="btn btn-primary" data-add-to-cart="${product.slug}" type="button">أضف إلى سلة الجملة</button>
          <a class="btn btn-ghost" href="checkout.html">الدفع الآن</a>
        </div>
      </div>
    </div>
  `;
  related.innerHTML = PRODUCTS.filter((item) => item.slug !== product.slug)
    .slice(0, 3)
    .map(productCardTemplate)
    .join('');
  qsa('[data-add-to-cart]', root).forEach((button) => button.addEventListener('click', () => addToCart(button.dataset.addToCart)));
  qsa('[data-add-to-cart]', related).forEach((button) => button.addEventListener('click', () => addToCart(button.dataset.addToCart)));
  qsa('.reveal', root).forEach((node) => node.classList.add('is-visible'));
  qsa('.reveal', related).forEach((node) => node.classList.add('is-visible'));
}

function initCartPage() {
  const list = qs('#cart-list');
  const summary = qs('#cart-summary');
  const pagination = qs('#cart-pagination');
  const search = qs('#cart-search');
  const sort = qs('#cart-sort');
  if (!list || !summary || !pagination || !search || !sort) return;

  const state = { query: '', sort: 'latest', page: 1, pageSize: 4 };

  function items() {
    let cart = getCart().map((item, index) => ({ ...item, index }));
    if (state.query) {
      const q = state.query.toLowerCase();
      cart = cart.filter((item) => getProduct(item.slug).name.toLowerCase().includes(q));
    }
    switch (state.sort) {
      case 'name':
        cart.sort((a, b) => getProduct(a.slug).name.localeCompare(getProduct(b.slug).name, 'ar'));
        break;
      case 'qty-desc':
        cart.sort((a, b) => b.quantity - a.quantity);
        break;
      case 'subtotal-desc':
        cart.sort((a, b) => (getProduct(b.slug).price * b.quantity) - (getProduct(a.slug).price * a.quantity));
        break;
      default:
        cart.sort((a, b) => b.index - a.index);
    }
    return cart;
  }

  function renderPagination(total) {
    const pages = Math.max(1, Math.ceil(total / state.pageSize));
    state.page = Math.min(state.page, pages);
    pagination.innerHTML = Array.from({ length: pages }, (_, index) => {
      const page = index + 1;
      return `<button class="page-btn ${page === state.page ? 'is-active' : ''}" type="button" data-page-btn="${page}">${page}</button>`;
    }).join('');
    qsa('[data-page-btn]', pagination).forEach((btn) => btn.addEventListener('click', () => {
      state.page = Number(btn.dataset.pageBtn);
      render();
    }));
  }

  function renderSummary() {
    const totals = cartTotals();
    summary.innerHTML = `
      <div class="summary-card">
        <div class="summary-line"><span>عدد الكراتين</span><strong>${number.format(totals.cartons)}</strong></div>
        <div class="summary-line"><span>إجمالي السلة</span><strong>${money.format(totals.amount)}</strong></div>
        <div class="summary-line"><span>النقاط المكتسبة</span><strong>${number.format(totals.points)}</strong></div>
        <div class="summary-line"><span>أولوية الشحن</span><strong>متوسطة</strong></div>
      </div>
    `;
  }

  function render() {
    const data = items();
    const start = (state.page - 1) * state.pageSize;
    const rows = data.slice(start, start + state.pageSize);
    if (!rows.length) {
      list.innerHTML = `<div class="panel">السلة فارغة أو لا توجد نتائج مطابقة.</div>`;
      pagination.innerHTML = '';
      renderSummary();
      return;
    }
    list.innerHTML = rows.map((item) => {
      const product = getProduct(item.slug);
      const subtotal = product.price * item.quantity;
      return `
        <article class="cart-card">
          <div class="cart-item-head">
            <span class="badge">${product.brand}</span>
            <span class="badge">${product.category}</span>
          </div>
          <strong>${product.name}</strong>
          <div class="summary-row"><span>${product.pack}</span><span>${product.volume}</span></div>
          <div class="summary-row"><span>${money.format(product.price)} × ${item.quantity}</span><strong>${money.format(subtotal)}</strong></div>
          <div class="qty-controls">
            <button class="step-btn" type="button" data-dec="${item.slug}">-</button>
            <span>${item.quantity}</span>
            <button class="step-btn" type="button" data-inc="${item.slug}">+</button>
            <button class="table-action remove-btn" type="button" data-remove="${item.slug}">حذف</button>
          </div>
        </article>
      `;
    }).join('');
    renderPagination(data.length);
    renderSummary();
    qsa('[data-inc]', list).forEach((button) => button.addEventListener('click', () => {
      const item = getCart().find((entry) => entry.slug === button.dataset.inc);
      if (item) setCartQty(item.slug, item.quantity + 1);
      render();
    }));
    qsa('[data-dec]', list).forEach((button) => button.addEventListener('click', () => {
      const item = getCart().find((entry) => entry.slug === button.dataset.dec);
      if (item) setCartQty(item.slug, item.quantity - 1);
      render();
    }));
    qsa('[data-remove]', list).forEach((button) => button.addEventListener('click', () => {
      removeFromCart(button.dataset.remove);
      render();
    }));
  }

  search.addEventListener('input', (event) => {
    state.query = event.target.value.trim();
    state.page = 1;
    render();
  });
  sort.addEventListener('change', (event) => {
    state.sort = event.target.value;
    state.page = 1;
    render();
  });

  render();
}

function initCheckoutPage() {
  const list = qs('#checkout-summary');
  const form = qs('#checkout-form');
  const result = qs('#checkout-response');
  if (!list || !form || !result) return;
  const cart = getCart();
  const totals = cartTotals(cart);
  list.innerHTML = cart.length
    ? `
      <div class="checkout-summary-list">
        ${cart.map((item) => {
          const product = getProduct(item.slug);
          return `<div class="checkout-line"><span>${product.name}</span><strong>${item.quantity} كرتون</strong></div>`;
        }).join('')}
        <div class="checkout-line"><span>الإجمالي</span><strong>${money.format(totals.amount)}</strong></div>
        <div class="checkout-line"><span>النقاط المتوقعة</span><strong>${number.format(totals.points)}</strong></div>
      </div>
    `
    : `<div class="summary-card">السلة فارغة حاليًا، أضف منتجات من الكتالوج أولًا.</div>`;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!cart.length) {
      result.textContent = 'أضف أصنافًا إلى السلة قبل تأكيد الطلب.';
      return;
    }
    const data = new FormData(form);
    const order = {
      id: `A-${Math.floor(1000 + Math.random() * 9000)}`,
      client: data.get('customer'),
      city: data.get('city'),
      amount: totals.amount,
      points: totals.points,
      cartons: totals.cartons,
      status: 'pending',
      date: new Date().toISOString(),
    };
    const orders = getOrders();
    orders.unshift(order);
    saveOrders(orders);
    saveCart([]);
    result.innerHTML = `تم تأكيد الطلب رقم <strong>${order.id}</strong> بنجاح. سيتم تجهيز شحنة الجملة وتسجيل ${number.format(order.points)} نقطة في الحساب.`;
    form.reset();
  });
}

function initAdminLoginPage() {
  const form = qs('#admin-login-form');
  const message = qs('#admin-login-message');
  const rolePreview = qs('#admin-role-preview');
  const session = getAdminSession();

  if (session) {
    window.location.href = getSafeReturnPath();
    return;
  }

  if (!form || !message || !rolePreview) return;

  rolePreview.innerHTML = ADMIN_ROLE_OPTIONS.map((role) => {
    const config = getAdminRole(role.value);
    return `
      <article class="role-card">
        <div class="role-head">
          <strong>${role.label}</strong>
          <span class="badge">${config?.permissions.length || 0} صلاحيات</span>
        </div>
        <p>${config?.permissions
          .map((permission) => {
            const labels = {
              'view-dashboard': 'عرض اللوحة',
              'add-order': 'إضافة الطلبات',
              'edit-order': 'تعديل الطلبات',
              'duplicate-order': 'تكرار الطلبات',
              'delete-order': 'حذف الطلبات',
            };
            return labels[permission] || permission;
          })
          .join(' · ')}</p>
      </article>
    `;
  }).join('');

  const roleSelect = qs('#admin-role');
  if (roleSelect) {
    roleSelect.innerHTML = ADMIN_ROLE_OPTIONS.map((role) => `<option value="${role.value}">${role.label}</option>`).join('');
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const role = String(data.get('role') || '');
    const username = String(data.get('username') || '').trim();
    const password = String(data.get('password') || '').trim();
    const roleConfig = getAdminRole(role);

    if (!roleConfig || roleConfig.username !== username || roleConfig.password !== password) {
      message.textContent = 'بيانات الدخول غير صحيحة، تحقق من اسم المستخدم وكلمة المرور والصلاحية المختارة.';
      return;
    }

    saveAdminSession({ role, username, loginAt: new Date().toISOString() });
    window.location.href = getSafeReturnPath();
  });
}

function initPointsPage() {
  const overview = qs('#points-overview');
  const calc = qs('#points-calculator');
  const history = qs('#points-history');
  const rewardGrid = qs('#reward-grid');
  if (!overview || !calc || !history || !rewardGrid) return;

  const orders = getOrders();
  const totalPoints = orders.reduce((sum, order) => sum + order.points, 0) + cartTotals().points;
  const totalCartons = orders.reduce((sum, order) => sum + order.cartons, 0) + cartTotals().cartons;
  const tier = totalPoints >= 3000 ? 'بلاتينيوم' : totalPoints >= 1800 ? 'ذهبي' : totalPoints >= 800 ? 'فضي' : 'ابتدائي';

  overview.innerHTML = `
    <article class="kpi reveal"><strong>${number.format(totalPoints)}</strong><span>رصيد النقاط الحالي</span></article>
    <article class="kpi reveal"><strong>${number.format(totalCartons)}</strong><span>إجمالي الكراتين المتداولة</span></article>
    <article class="kpi reveal"><strong>${tier}</strong><span>مستوى الولاء</span></article>
    <article class="kpi reveal"><strong>${number.format(Math.max(0, 4000 - totalPoints))}</strong><span>نقطة للوصول للذروة التالية</span></article>
  `;

  calc.innerHTML = `
    <span class="eyebrow">حاسبة النقاط</span>
    <h2>احسب رصيدك المتوقع حسب حجم الطلب.</h2>
    <label class="field">
      <span>عدد الكراتين</span>
      <input id="points-cartons" type="range" min="12" max="120" step="1" value="24" />
    </label>
    <div class="summary-row"><span>النقاط المتوقعة</span><strong id="points-value">0</strong></div>
    <div class="summary-row"><span>قيمة الشحنة التقديرية</span><strong id="points-amount">0</strong></div>
    <div class="summary-row"><span>مضاعف الولاء</span><strong id="points-tier">×1.0</strong></div>
  `;

  const slider = qs('#points-cartons');
  const pointsValue = qs('#points-value');
  const pointsAmount = qs('#points-amount');
  const pointsTier = qs('#points-tier');
  const updateCalc = () => {
    const cartons = Number(slider.value);
    const multiplier = cartons >= 72 ? 1.35 : cartons >= 48 ? 1.2 : cartons >= 24 ? 1.1 : 1;
    const points = Math.round(cartons * 18 * multiplier);
    pointsValue.textContent = number.format(points);
    pointsAmount.textContent = money.format(cartons * 82);
    pointsTier.textContent = `×${multiplier.toFixed(1)}`;
  };
  slider.addEventListener('input', updateCalc);
  updateCalc();

  history.innerHTML = `
    <span class="eyebrow">سجل الاستبدال</span>
    <h2>أحدث الطلبات ونقاطها</h2>
    <div class="points-history">
      ${orders.slice(0, 5).map((order) => `<div class="history-item"><span>${order.id} · ${order.client}</span><strong>${number.format(order.points)} نقطة</strong></div>`).join('')}
    </div>
  `;

  rewardGrid.innerHTML = REWARDS.map(rewardCardTemplate).join('');
  qsa('[data-claim-reward]', rewardGrid).forEach((button) => button.addEventListener('click', () => toast(`تم طلب استبدال: ${button.dataset.claimReward}`)));
}

function initWholesalePage() {
  const calc = qs('#wholesale-calculator');
  const tiers = qs('#wholesale-tiers');
  const form = qs('#wholesale-form');
  const response = qs('#wholesale-response');
  if (!calc || !tiers) return;

  calc.innerHTML = `
    <span class="eyebrow">تقدير الجملة</span>
    <h2>استخدم العتبات الحجمية لتخطيط الطلب بدقة.</h2>
    <label class="field">
      <span>عدد الكراتين المطلوب</span>
      <input id="wholesale-cartons" type="range" min="12" max="120" step="1" value="24" />
    </label>
    <div class="summary-row"><span>سعر تقديري</span><strong id="wholesale-price">0</strong></div>
    <div class="summary-row"><span>نقاط متوقعة</span><strong id="wholesale-points">0</strong></div>
    <div class="summary-row"><span>مستوى الخصم</span><strong id="wholesale-tier">أساسي</strong></div>
  `;

  tiers.innerHTML = `
    <span class="eyebrow">سلم الجملة</span>
    <h2>ثلاث عتبات رئيسية للطلبات التجارية.</h2>
    <div class="summary-list">
      <div class="summary-line"><span>12 - 23 كرتون</span><strong>أساسي</strong></div>
      <div class="summary-line"><span>24 - 47 كرتون</span><strong>متقدم</strong></div>
      <div class="summary-line"><span>48 - 71 كرتون</span><strong>موزع</strong></div>
      <div class="summary-line"><span>72+ كرتون</span><strong>حساب رئيسي</strong></div>
    </div>
  `;

  const slider = qs('#wholesale-cartons');
  const price = qs('#wholesale-price');
  const points = qs('#wholesale-points');
  const tier = qs('#wholesale-tier');
  const update = () => {
    const cartons = Number(slider.value);
    const discount = cartons >= 72 ? 0.16 : cartons >= 48 ? 0.12 : cartons >= 24 ? 0.08 : 0;
    const base = cartons * 82;
    const total = Math.round(base * (1 - discount));
    const pts = Math.round(cartons * 18 * (cartons >= 72 ? 1.4 : cartons >= 48 ? 1.2 : cartons >= 24 ? 1.1 : 1));
    price.textContent = money.format(total);
    points.textContent = number.format(pts);
    tier.textContent = cartons >= 72 ? 'حساب رئيسي' : cartons >= 48 ? 'موزع' : cartons >= 24 ? 'متقدم' : 'أساسي';
  };
  slider.addEventListener('input', update);
  update();

  if (form && response) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(form);
      response.innerHTML = `تم استقبال طلب الجملة الخاص بـ <strong>${data.get('company')}</strong> في <strong>${data.get('city')}</strong>، وسيتم التواصل على الرقم <strong>${data.get('phone')}</strong>.`;
      form.reset();
    });
  }
}

function orderStatusTag(status) {
  const labels = { confirmed: 'مؤكد', pending: 'قيد المراجعة', shipped: 'تم الشحن', delivered: 'تم التسليم' };
  return `<span class="status-tag ${status}">${labels[status] || status}</span>`;
}

function initDashboardPage() {
  const session = getAdminSession();
  if (!session || !hasAdminPermission('view-dashboard')) {
    window.location.href = 'admin-login.html?return=dashboard.html';
    return;
  }

  const kpis = qs('#dashboard-kpis');
  const table = qs('#orders-table');
  const pagination = qs('#orders-pagination');
  const search = qs('#order-search');
  const status = qs('#order-status');
  const sort = qs('#order-sort');
  const addBtn = qs('#add-order-btn');
  const modal = qs('#order-modal');
  const form = qs('#order-form');
  const modalTitle = qs('#modal-title');
  if (!kpis || !table || !pagination || !search || !status || !sort || !addBtn || !modal || !form || !modalTitle) return;

  const state = { query: '', status: 'all', sort: 'latest', page: 1, pageSize: 5, editId: null };

  function orders() {
    let items = [...getOrders()];
    if (state.query) {
      const q = state.query.toLowerCase();
      items = items.filter((order) => [order.id, order.client, order.city].join(' ').toLowerCase().includes(q));
    }
    if (state.status !== 'all') items = items.filter((order) => order.status === state.status);
    switch (state.sort) {
      case 'amount-desc':
        items.sort((a, b) => b.amount - a.amount);
        break;
      case 'amount-asc':
        items.sort((a, b) => a.amount - b.amount);
        break;
      case 'points-desc':
        items.sort((a, b) => b.points - a.points);
        break;
      default:
        items.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    return items;
  }

  function renderKpis() {
    const data = getOrders();
    const totals = data.reduce((acc, order) => {
      acc.amount += order.amount;
      acc.points += order.points;
      acc.cartons += order.cartons;
      return acc;
    }, { amount: 0, points: 0, cartons: 0 });
    const active = data.filter((order) => order.status === 'pending').length;
    kpis.innerHTML = `
      <article class="kpi reveal admin-kpi"><strong>${getAdminRole(session.role)?.label || session.role}</strong><span>الدور النشط</span></article>
      <article class="kpi reveal"><strong>${number.format(data.length)}</strong><span>إجمالي الطلبات</span></article>
      <article class="kpi reveal"><strong>${money.format(totals.amount)}</strong><span>إجمالي المبيعات</span></article>
      <article class="kpi reveal"><strong>${number.format(totals.points)}</strong><span>رصيد النقاط</span></article>
      <article class="kpi reveal"><strong>${number.format(active)}</strong><span>طلبات قيد المراجعة</span></article>
    `;
    qsa('.reveal', kpis).forEach((node) => node.classList.add('is-visible'));
  }

  function renderPagination(total) {
    const pages = Math.max(1, Math.ceil(total / state.pageSize));
    state.page = Math.min(state.page, pages);
    pagination.innerHTML = Array.from({ length: pages }, (_, index) => {
      const page = index + 1;
      return `<button class="page-btn ${page === state.page ? 'is-active' : ''}" type="button" data-page-btn="${page}">${page}</button>`;
    }).join('');
    qsa('[data-page-btn]', pagination).forEach((button) => button.addEventListener('click', () => {
      state.page = Number(button.dataset.pageBtn);
      renderTable();
    }));
  }

  function openModal(order = null) {
    state.editId = order?.id || null;
    modalTitle.textContent = order ? `تعديل الطلب ${order.id}` : 'إضافة طلب جديد';
    form.reset();
    form.elements.id.value = order?.id || '';
    form.elements.client.value = order?.client || '';
    form.elements.city.value = order?.city || '';
    form.elements.amount.value = order?.amount || '';
    form.elements.points.value = order?.points || '';
    form.elements.status.value = order?.status || 'confirmed';
    form.elements.cartons.value = order?.cartons || '';
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
  }

  function renderTable() {
    const data = orders();
    const start = (state.page - 1) * state.pageSize;
    const rows = data.slice(start, start + state.pageSize);
    table.innerHTML = `
      <table>
        <thead>
          <tr>
            <th>الطلب</th>
            <th>العميل</th>
            <th>المدينة</th>
            <th>الكراتين</th>
            <th>الإجمالي</th>
            <th>النقاط</th>
            <th>الحالة</th>
            <th>إجراءات</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map((order) => `
            <tr>
              <td>${order.id}<br /><small>${formatDate(order.date)}</small></td>
              <td>${order.client}</td>
              <td>${order.city}</td>
              <td>${number.format(order.cartons)}</td>
              <td>${money.format(order.amount)}</td>
              <td>${number.format(order.points)}</td>
              <td>${orderStatusTag(order.status)}</td>
              <td>
                <div class="table-actions-cell">
                  ${hasAdminPermission('edit-order') ? `<button class="table-action" data-edit-order="${order.id}" type="button">تعديل</button>` : ''}
                  ${hasAdminPermission('duplicate-order') ? `<button class="table-action" data-duplicate-order="${order.id}" type="button">تكرار</button>` : ''}
                  ${hasAdminPermission('delete-order') ? `<button class="table-action remove-btn" data-delete-order="${order.id}" type="button">حذف</button>` : ''}
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
    renderPagination(data.length);
    qsa('[data-edit-order]', table).forEach((button) => button.addEventListener('click', () => {
      const order = getOrders().find((item) => item.id === button.dataset.editOrder);
      if (order) openModal(order);
    }));
    qsa('[data-duplicate-order]', table).forEach((button) => button.addEventListener('click', () => {
      const ordersData = getOrders();
      const order = ordersData.find((item) => item.id === button.dataset.duplicateOrder);
      if (!order) return;
      ordersData.unshift({ ...order, id: `A-${Math.floor(1000 + Math.random() * 9000)}`, date: new Date().toISOString() });
      saveOrders(ordersData);
      toast('تم تكرار الطلب بنجاح');
      renderAll();
    }));
    qsa('[data-delete-order]', table).forEach((button) => button.addEventListener('click', () => {
      saveOrders(getOrders().filter((item) => item.id !== button.dataset.deleteOrder));
      toast('تم حذف الطلب');
      renderAll();
    }));
  }

  function renderAll() {
    renderKpis();
    renderTable();
  }

  addBtn.addEventListener('click', () => {
    if (!hasAdminPermission('add-order')) {
      toast('صلاحية الإضافة غير متاحة لهذا الدور');
      return;
    }
    openModal();
  });
  modal.addEventListener('click', (event) => {
    if (event.target === modal || event.target.closest('[data-close-modal]')) closeModal();
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const ordersData = getOrders();
    const order = {
      id: data.get('id') || `A-${Math.floor(1000 + Math.random() * 9000)}`,
      client: data.get('client'),
      city: data.get('city'),
      amount: Number(data.get('amount')),
      points: Number(data.get('points')),
      cartons: Number(data.get('cartons')),
      status: data.get('status'),
      date: state.editId ? (ordersData.find((item) => item.id === state.editId)?.date || new Date().toISOString()) : new Date().toISOString(),
    };
    const filtered = ordersData.filter((item) => item.id !== order.id);
    filtered.unshift(order);
    saveOrders(filtered);
    closeModal();
    toast(state.editId ? 'تم تحديث الطلب' : 'تمت إضافة الطلب');
    state.editId = null;
    renderAll();
  });

  search.addEventListener('input', (event) => {
    state.query = event.target.value.trim();
    state.page = 1;
    renderTable();
  });
  status.addEventListener('change', (event) => {
    state.status = event.target.value;
    state.page = 1;
    renderTable();
  });
  sort.addEventListener('change', (event) => {
    state.sort = event.target.value;
    state.page = 1;
    renderTable();
  });

  renderAll();
}

function initContactPage() {
  const branches = qs('#branch-cards');
  const form = qs('#contact-form');
  const response = qs('#contact-response');
  if (branches) {
    branches.innerHTML = BRANCHES.map((branch) => `
      <article class="branch-card">
        <div class="branch-head">
          <strong>${branch.city}</strong>
          <span class="badge">${branch.area}</span>
        </div>
        <p>هاتف الجملة: ${branch.phone}</p>
        <div class="branch-line"><span>ساعات العمل</span><strong>${branch.hours}</strong></div>
      </article>
    `).join('');
  }
  if (form && response) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(form);
      response.innerHTML = `تم استلام رسالتك من <strong>${data.get('name')}</strong> في <strong>${data.get('city')}</strong>، وسيتواصل الفريق قريبًا على رقم <strong>${data.get('phone')}</strong>.`;
      form.reset();
    });
  }
}

function initPage() {
  ensureData();

  if (document.body.dataset.page === 'admin-login' && getAdminSession()) {
    window.location.href = getSafeReturnPath();
    return;
  }

  if (document.body.dataset.page === 'dashboard' && (!getAdminSession() || !hasAdminPermission('view-dashboard'))) {
    window.location.href = 'admin-login.html?return=dashboard.html';
    return;
  }

  mountShell();
  syncCartBadges();
  setupReveal();
  setupParallax();
  updateScrollProgress();
  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  renderCountUps();

  qsa('[data-add-to-cart]').forEach((button) => button.addEventListener('click', () => addToCart(button.dataset.addToCart)));
  qsa('[data-claim-reward]').forEach((button) => button.addEventListener('click', () => toast(`تم طلب الاستبدال: ${button.dataset.claimReward}`)));

  const logoutButton = qs('[data-admin-logout]');
  if (logoutButton) {
    logoutButton.addEventListener('click', () => {
      clearAdminSession();
      toast('تم تسجيل الخروج من الإدارة');
      window.location.href = 'admin-login.html';
    });
  }

  const page = document.body.dataset.page;
  if (page === 'home') initHome();
  if (page === 'catalog') initCatalog();
  if (page === 'product') initProductPage();
  if (page === 'wholesale') initWholesalePage();
  if (page === 'points') initPointsPage();
  if (page === 'dashboard') initDashboardPage();
  if (page === 'admin-login') initAdminLoginPage();
  if (page === 'contact') initContactPage();
  if (page === 'cart') initCartPage();
  if (page === 'checkout') initCheckoutPage();
}

document.addEventListener('DOMContentLoaded', initPage);
