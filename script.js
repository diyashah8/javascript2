/* ===== PRODUCT DATA ===== */
const products = [
    {
        id: 1, name: "Fresh Red Apples", category: "fruits", weight: "1 kg",
        price: 180, oldPrice: 220, badge: "sale",
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&q=80"
    },
    {
        id: 2, name: "Organic Bananas", category: "fruits", weight: "1 dozen",
        price: 60, oldPrice: null, badge: "organic",
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=80"
    },
    {
        id: 3, name: "Juicy Mangoes", category: "fruits", weight: "1 kg",
        price: 250, oldPrice: 320, badge: "sale",
        image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&q=80"
    },
    {
        id: 4, name: "Fresh Tomatoes", category: "vegetables", weight: "500 g",
        price: 35, oldPrice: null, badge: null,
        image: "https://images.unsplash.com/photo-1546470427-0d4db154ceb8?w=400&q=80"
    },
    {
        id: 5, name: "Green Spinach", category: "vegetables", weight: "250 g",
        price: 25, oldPrice: 30, badge: "organic",
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&q=80"
    },
    {
        id: 6, name: "Farm Potatoes", category: "vegetables", weight: "1 kg",
        price: 40, oldPrice: null, badge: null,
        image: "https://images.unsplash.com/photo-1518977676601-b53f82ber3?w=400&q=80"
    },
    {
        id: 7, name: "Fresh Milk", category: "dairy", weight: "1 Litre",
        price: 65, oldPrice: null, badge: null,
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80"
    },
    {
        id: 8, name: "Paneer (Cottage Cheese)", category: "dairy", weight: "200 g",
        price: 90, oldPrice: 110, badge: "sale",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80"
    },
    {
        id: 9, name: "Dahi (Curd)", category: "dairy", weight: "400 g",
        price: 45, oldPrice: null, badge: "new",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80"
    },
    {
        id: 10, name: "Masala Chips Pack", category: "snacks", weight: "150 g",
        price: 30, oldPrice: null, badge: null,
        image: "https://images.unsplash.com/photo-1621447504864-d8686e12698c?w=400&q=80"
    },
    {
        id: 11, name: "Namkeen Mix", category: "snacks", weight: "400 g",
        price: 120, oldPrice: 150, badge: "sale",
        image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=400&q=80"
    },
    {
        id: 12, name: "Chocolate Cookies", category: "snacks", weight: "300 g",
        price: 85, oldPrice: null, badge: "new",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&q=80"
    },
    {
        id: 13, name: "Mango Juice", category: "beverages", weight: "1 Litre",
        price: 95, oldPrice: 120, badge: "sale",
        image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=400&q=80"
    },
    {
        id: 14, name: "Green Tea Pack", category: "beverages", weight: "100 Bags",
        price: 220, oldPrice: null, badge: "organic",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80"
    },
    {
        id: 15, name: "Turmeric Powder", category: "spices", weight: "200 g",
        price: 75, oldPrice: 90, badge: "organic",
        image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&q=80"
    },
    {
        id: 16, name: "Garam Masala", category: "spices", weight: "100 g",
        price: 65, oldPrice: null, badge: null,
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80"
    }
];

/* ===== CART STATE ===== */
let cart = JSON.parse(localStorage.getItem('diyaCart')) || [];

/* ===== DOM ELEMENTS ===== */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const navbar = $('#navbar');
const menuToggle = $('#menuToggle');
const navLinks = $('#navLinks');
const searchToggle = $('#searchToggle');
const searchBar = $('#searchBar');
const searchInput = $('#searchInput');
const searchClose = $('#searchClose');
const cartBtn = $('#cartBtn');
const cartOverlay = $('#cartOverlay');
const cartSidebar = $('#cartSidebar');
const cartClose = $('#cartClose');
const cartItems = $('#cartItems');
const cartEmpty = $('#cartEmpty');
const cartFooter = $('#cartFooter');
const cartCount = $('#cartCount');
const cartTotal = $('#cartTotal');
const startShopping = $('#startShopping');
const productGrid = $('#productGrid');
const backToTop = $('#backToTop');
const toastContainer = $('#toastContainer');
const contactForm = $('#contactForm');
const newsletterForm = $('#newsletterForm');
const checkoutBtn = $('#checkoutBtn');

/* ===== NAVBAR SCROLL ===== */
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    navbar.classList.toggle('scrolled', scrollY > 60);
    backToTop.classList.toggle('show', scrollY > 500);

    // Active nav link
    const sections = $$('section[id]');
    sections.forEach(sec => {
        const top = sec.offsetTop - 120;
        const bottom = top + sec.offsetHeight;
        const id = sec.getAttribute('id');
        const link = $(`.nav-links a[href="#${id}"]`);
        if (link) {
            link.classList.toggle('active', scrollY >= top && scrollY < bottom);
        }
    });
});

/* ===== MOBILE MENU ===== */
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close on link click
$$('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

/* ===== SEARCH ===== */
searchToggle.addEventListener('click', () => {
    searchBar.classList.add('active');
    setTimeout(() => searchInput.focus(), 200);
});

searchClose.addEventListener('click', () => {
    searchBar.classList.remove('active');
    searchInput.value = '';
    renderProducts('all');
});

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (query === '') {
        renderProducts('all');
        return;
    }
    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
    );
    renderFilteredProducts(filtered);
});

/* ===== BACK TO TOP ===== */
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ===== PRODUCT RENDERING ===== */
function createProductCard(product) {
    const badgeHTML = product.badge
        ? `<span class="product-badge badge-${product.badge}">${product.badge === 'sale' ? '🔥 Sale' : product.badge === 'new' ? '✨ New' : '🌿 Organic'}</span>`
        : '';

    const oldPriceHTML = product.oldPrice
        ? `<span class="price-old">₹${product.oldPrice}</span>`
        : '';

    return `
        <div class="product-card" data-category="${product.category}" data-id="${product.id}">
            <div class="product-image">
                ${badgeHTML}
                <button class="product-wishlist" aria-label="Add to wishlist" onclick="toggleWishlist(this)">
                    <i class="far fa-heart"></i>
                </button>
                <img src="${product.image}" alt="${product.name}" loading="lazy"
                     onerror="this.src='https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80'">
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <span class="product-weight">${product.weight}</span>
                <div class="product-bottom">
                    <div class="product-price">
                        <span class="price-current">₹${product.price}</span>
                        ${oldPriceHTML}
                    </div>
                    <button class="add-to-cart" onclick="addToCart(${product.id})" aria-label="Add to cart">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function renderProducts(filter) {
    const filtered = filter === 'all'
        ? products
        : products.filter(p => p.category === filter);
    productGrid.innerHTML = filtered.map(createProductCard).join('');
    animateCards();
}

function renderFilteredProducts(list) {
    productGrid.innerHTML = list.length
        ? list.map(createProductCard).join('')
        : '<p style="grid-column:1/-1;text-align:center;color:#999;padding:40px;">No products found.</p>';
    animateCards();
}

function animateCards() {
    $$('.product-card').forEach((card, i) => {
        card.style.animationDelay = `${i * 0.05}s`;
    });
}

/* ===== FILTER BUTTONS ===== */
$$('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        $$('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProducts(btn.dataset.filter);
    });
});

/* ===== CATEGORY CARDS ===== */
$$('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const cat = card.dataset.category;
        // Scroll to products
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        // Activate filter
        setTimeout(() => {
            $$('.filter-btn').forEach(b => b.classList.remove('active'));
            const targetBtn = $(`.filter-btn[data-filter="${cat}"]`);
            if (targetBtn) {
                targetBtn.classList.add('active');
                renderProducts(cat);
            }
        }, 500);
    });
});

/* ===== WISHLIST ===== */
function toggleWishlist(btn) {
    btn.classList.toggle('liked');
    const icon = btn.querySelector('i');
    if (btn.classList.contains('liked')) {
        icon.classList.replace('far', 'fas');
        showToast('Added to wishlist ❤️');
    } else {
        icon.classList.replace('fas', 'far');
        showToast('Removed from wishlist');
    }
}

/* ===== CART FUNCTIONS ===== */
function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    saveCart();
    updateCartUI();
    showToast(`${product.name} added to cart!`);

    // Button animation
    const btn = $(`.product-card[data-id="${id}"] .add-to-cart`);
    if (btn) {
        btn.style.animation = 'pulse 0.3s ease';
        setTimeout(() => btn.style.animation = '', 300);
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartUI();
}

function updateQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(id);
        return;
    }
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('diyaCart', JSON.stringify(cart));
}

function updateCartUI() {
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const count = cart.reduce((sum, item) => sum + item.qty, 0);

    // Count badge
    cartCount.textContent = count;
    cartCount.classList.toggle('show', count > 0);

    // Footer
    cartFooter.style.display = count > 0 ? 'block' : 'none';
    cartTotal.textContent = `₹${total}`;

    // Items
    if (count === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty" id="cartEmpty">
                <i class="fas fa-shopping-basket"></i>
                <p>Your cart is empty</p>
                <a href="#products" class="btn btn-primary btn-sm" onclick="closeCart()">Start Shopping</a>
            </div>`;
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-img">
                <img src="${item.image}" alt="${item.name}"
                     onerror="this.src='https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80'">
            </div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">₹${item.price} × ${item.qty} = ₹${item.price * item.qty}</div>
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="updateQty(${item.id}, -1)">−</button>
                    <span class="cart-item-qty">${item.qty}</span>
                    <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
                    <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Remove">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

/* ===== CART SIDEBAR TOGGLE ===== */
function openCart() {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

cartBtn.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

if (startShopping) {
    startShopping.addEventListener('click', closeCart);
}

/* ===== CHECKOUT ===== */
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return;
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    showToast(`🎉 Order placed! Total: ₹${total}. Thank you!`);
    cart = [];
    saveCart();
    updateCartUI();
    setTimeout(closeCart, 1500);
});

/* ===== TOAST ===== */
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('toast-out');
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

/* ===== CONTACT FORM ===== */
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Message sent successfully! We\'ll get back to you soon.');
    contactForm.reset();
});

/* ===== NEWSLETTER ===== */
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Subscribed! You\'ll receive our best offers.');
    newsletterForm.reset();
});

/* ===== INTERSECTION OBSERVER FOR ANIMATIONS ===== */
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

function setupScrollAnimations() {
    const animElements = $$('.category-card, .feature-card, .testimonial-card, .offer-card, .contact-item');
    animElements.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`;
        observer.observe(el);
    });
}

/* ===== SMOOTH SCROLL FOR ANCHOR LINKS ===== */
$$('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

/* ===== INIT ===== */
function init() {
    renderProducts('all');
    updateCartUI();
    setupScrollAnimations();
}

document.addEventListener('DOMContentLoaded', init);
