window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

const navbar = document.querySelector('.navbar');

const navLinksMenu = document.getElementById('navLinks');
const navLinks = document.querySelectorAll('.nav-link');

if (mobileMenuBtn && navLinksMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinksMenu.classList.toggle('active');
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinksMenu?.classList.remove('active');
    });
});

window.addEventListener('scroll', () => {
    if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 100);
    }
});

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
navLinks.forEach(link => {
    const href = link.getAttribute('href')?.split('/').pop();
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will contact you soon.');
        contactForm.reset();
    });
}

// Pricing Modal Functionality
const pricingData = {
    'Social Media Marketing': [
        {
            name: 'Account Setup',
            price: '999',
            period: 'one-time',
            features: ['Account Creation', 'Profile Optimization', 'Initial Setup'],
            featured: false,
            icon: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'
        },
        {
            name: '12 Posts Creation',
            price: '1,499',
            period: '/month',
            features: ['12 Posts Monthly', 'Content Planning', 'Hashtag Strategy', 'Post Scheduling'],
            featured: true,
            badge: 'POPULAR',
            icon: '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="22" y2="7"/><line x1="2" y1="17" x2="22" y2="17"/>'
        },
        {
            name: 'Social Media Management',
            price: '1,999',
            period: '/month',
            features: ['Full Account Management', '24/7 Monitoring', 'Community Engagement', 'Analytics Report'],
            featured: false,
            icon: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'
        }
    ],
    'Google My Business Management': [
        {
            name: 'GMB Creation',
            price: '999',
            period: 'one-time',
            features: ['Full GMB setup', 'Profile optimization'],
            featured: false
        },
        {
            name: 'GMB Management',
            price: '2,499',
            period: '/month',
            features: ['Post updates','Reply to reviews','Profile optimization'],
            featured: true,
            badge: 'POPULAR'
        },
        {
            name: 'GMB Combo',
            price: '2,999',
            features: ['Compelete GMB setup','1 month management','Combo discount'],
            featured: false
        }
    ],
    'WhatsApp Automation & Marketing': [
        {
            name: 'Starter Plan',
            price: '2,999',
            period: '/setup',
            features: ['Full automation setup', '15 days free maintenance', '999/month after'],
            featured: false
        },
        {
            name: 'Business Plan',
            price: '399',
            period: '/one-time',
            features: ['Professional desgin','Shareable digital format','Contact details'],
            featured: true,
        },
    ],
    'Website Development & Design': [
        {
            name: 'Basic Website',
            price: '4,999',
            period: 'one-time',
            features: ['Responsive Design', 'Mobile Responsive', 'Basic Pages'],
            featured: false
        },
        {
            name: 'Business Website',
            price: '10,999',
            period: 'one-time',
            features: ['Custom design', 'multiple pages', 'Contact & lead forms'],
            featured: true,
            badge: 'POPULAR'
        },
        {
            name: 'E-Commerce Website',
            price: '24,999+',
            period: 'one-time',
            features: ['Advanced Features', 'E-Commerce ready', 'Inventory Management', 'Advanced SEO', 'Support 3 Months'],
            featured: false
        }
    ],
    'Billing & Invoicing Software': [
        {
            name: 'Basic Billing System',
            price: '7,999',
            period: '/one-time',
            features: ['Invoices/Month', 'Basic Reports', 'Email Invoicing'],
            featured: false
        },
        {
            name: 'Advanced Billing System',
            price: '19,999+',
            features: ['Unlimited Invoices', 'Advanced Reports', 'Multi-User Access', 'Payment Tracking', 'Custom Branding'],
            featured: true,
            badge: 'POPULAR'
        },
        {
            name: 'Client Management System',
            price: '2,999',
            period: '/month',
            features: ['All Professional Features', 'API Access', 'Dedicated Support', 'Custom Integration'],
            featured: false
        }
    ],
    'Digital Marketing Training': [
        {
            name: '1 hour Webinar',
            features: ['1-hour live Session', 'Interactive Q&A', 'Certificate of Participation'],
            featured: false
        },
        {
            name: 'basic course',
            features: ['Core concepts', 'Practical exercises', 'Certificate'],
            featured: false
        },
        {
            name: 'Advanced Masterclass',
            features: ['Complete Curriculum', '1-on-1 coaching', 'Job-ready skills', 'Certificate'],
            featured: false
        }
    ]
};

function openPricingModal(serviceName) {
    const modal = document.querySelector('.pricing-modal');
    const pricingGrid = document.getElementById('pricingGrid');
    
    if (!modal || !pricingGrid) return;
    
    const pricing = pricingData[serviceName];
    if (!pricing) return;
    
    // Update modal header
    const modalHeader = modal.querySelector('#modalServiceTitle');
    if (modalHeader) {
        modalHeader.textContent = serviceName;
    }
    
    // Clear previous pricing cards
    pricingGrid.innerHTML = '';
    
    // Create pricing cards
    pricing.forEach((tier) => {
        const card = document.createElement('div');
        card.className = 'pricing-card' + (tier.featured ? ' featured' : '');
        
        card.innerHTML = `
            ${tier.featured ? `<div class="pricing-badge">${tier.badge}</div>` : ''}
            <div class="pricing-card-title">
                <svg class="pricing-card-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    ${tier.icon ? tier.icon : (tier.featured ? `<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>` : `<circle cx="12" cy="12" r="10"/>`)}
                </svg>
                <h4>${tier.name}</h4>
            </div>
            ${tier.price ? `<div class="pricing-amount">
                <span class="currency">₹</span>
                <span class="price">${tier.price}</span>
                <span class="period">${tier.period}</span>
            </div>` : ''}
            <ul class="pricing-features">
                ${tier.features.map(feature => `
                    <li>
                        ${feature}
                    </li>
                `).join('')}
            </ul>
            <button class="pricing-cta">Get Started</button>
        `;
        
        pricingGrid.appendChild(card);
    });
    
    // Show modal
    modal.classList.add('active');
}

function closePricingModal() {
    const modal = document.querySelector('.pricing-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Service card click handlers
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('click', () => {
        const serviceTitle = card.querySelector('h3')?.textContent.trim();
        if (serviceTitle) {
            openPricingModal(serviceTitle);
        }
    });
});

// Modal close handlers
const modal = document.querySelector('.pricing-modal');
const closeBtn = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.pricing-modal-overlay');

if (closeBtn) {
    closeBtn.addEventListener('click', closePricingModal);
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', closePricingModal);
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePricingModal();
    }
});
