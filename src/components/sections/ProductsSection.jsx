import { useState } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../ui/RevealOnScroll';

const categories = [
  { id: 'any', name: 'Any business' },
  { id: 'restaurants', name: 'Restaurants & Cafés' },
  { id: 'wellness', name: 'Wellness & Beauty' },
  { id: 'services', name: 'Home Services' }
];

const products = [
  {
    id: 'staff-scheduler',
    category: 'any',
    icon: '📅',
    title: 'Staff Scheduler',
    description: 'Universal staff scheduling system for any business type.',
    bullets: [
      'Shift planning & calendar',
      'Staff availability tracking',
      'Auto conflict detection',
      'Mobile-friendly'
    ],
    link: '/staff-scheduler',
    isInternal: true
  },
  {
    id: 'restaurant-orders',
    category: 'restaurants',
    icon: '📱',
    title: 'Restaurant Orders',
    description: 'Full POS system for restaurants. Table management, orders, split bills, daily sales.',
    bullets: [
      'Table & order management',
      'Split bills (equal/by item)',
      'Send orders to kitchen',
      'Daily sales tracking'
    ],
    link: '/restaurant-orders.html',
    isInternal: false
  },
  {
    id: 'reservations',
    category: 'restaurants',
    icon: '🍽',
    title: 'Table Reservations',
    description: 'Table booking system that replaces expensive platforms like OpenTable.',
    bullets: [
      'Visual floor plan',
      'Auto-assign best tables',
      'Guest notes & pre-orders',
      'Conflict detection'
    ],
    link: '/table-reservations.html',
    isInternal: false
  },
  {
    id: 'scheduler',
    category: 'wellness',
    icon: '🧘',
    title: 'Class Scheduler',
    description: 'For yoga studios, gyms, and fitness centers. Simple class booking.',
    bullets: [
      'Class calendar & seat limits',
      'Booking & waitlist',
      'Payment handling',
      'Member management'
    ],
    link: '/contact?product=scheduler',
    isInternal: true
  },
  {
    id: 'booking',
    category: 'wellness',
    icon: '💆',
    title: 'Beauty & Treatment Booking',
    description: 'Appointment booking for salons, spas, and clinics.',
    bullets: [
      'Appointment booking',
      'Staff availability',
      'SMS & email reminders',
      'Treatment pages'
    ],
    link: '/contact?product=booking',
    isInternal: true
  },
  {
    id: 'quotes',
    category: 'services',
    icon: '🔧',
    title: 'Quote Automation',
    description: 'For plumbers, electricians, contractors. Better than spreadsheets.',
    bullets: [
      'Quote request form',
      'Auto follow-up emails',
      'Lead dashboard',
      'Project tracking'
    ],
    link: '/contact?product=quotes',
    isInternal: true
  }
];

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState('any');

  const filteredProducts = products.filter(product =>
    activeCategory === 'any' || product.category === activeCategory
  );

  return (
    <section className="section section--full section--dots" id="products">
      <div className="container">
        <RevealOnScroll>
          <p className="section-label">What I build</p>
          <h2 className="section-title">Example systems for local businesses</h2>
          <p className="section-subtitle">Custom-built tools that fit your business. No bloated features you'll never use.</p>
        </RevealOnScroll>

        {/* Category Tabs */}
        <RevealOnScroll className="transformation-tabs" style={{ marginBottom: '48px' }}>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`transformation-tab ${activeCategory === category.id ? 'transformation-tab--active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </RevealOnScroll>

        {/* Products Grid */}
        <div className="services-grid">
          {filteredProducts.map((product) => {
            const CardComponent = product.isInternal ? Link : 'a';
            const linkProps = product.isInternal
              ? { to: product.link }
              : { href: product.link };

            return (
              <RevealOnScroll key={product.id}>
                <CardComponent
                  {...linkProps}
                  className="service-card"
                  data-category={product.category}
                >
                  <p className="service-card__number">{product.icon}</p>
                  <h3 className="service-card__title">{product.title}</h3>
                  <p className="service-card__desc">{product.description}</p>
                  <div className="service-card__bullets">
                    {product.bullets.map((bullet, i) => (
                      <span key={i} className="service-card__bullet">{bullet}</span>
                    ))}
                  </div>
                  <span className="service-card__arrow">
                    Try it now
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M3 8h10M9 4l4 4-4 4"/>
                    </svg>
                  </span>
                </CardComponent>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
