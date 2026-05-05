import { Link } from 'react-router-dom';
import RevealOnScroll from '../ui/RevealOnScroll';

const PAGES = [
  {
    to: '/camidi',
    label: 'Case Study',
    title: 'How Käserei Camidi runs service',
    body: 'Real workflow. Real friction. How TableOrders fits between waitstaff and POS at a Berlin wine bar and cheese shop.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    to: '/how-it-works',
    label: 'Workflow',
    title: 'How the app works in practice',
    body: "Open tables, take orders, confirm batches, split bills, close daily totals for POS entry. The full flow from a waiter's view.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    to: '/about',
    label: 'About',
    title: 'Built locally in Berlin',
    body: 'You talk directly to the person building it. Hospitality background, UX design, full-stack development — no agency, no handoffs.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function ExploreSection() {
  return (
    <section className="section section--lines" id="explore">
      <div className="container">
        <RevealOnScroll>
          <div className="explore-section">
            <div className="explore-section__header">
              <p className="explore-eyebrow">Learn more</p>
              <h2 className="explore-heading">Before you book</h2>
            </div>
            <div className="explore-grid">
              {PAGES.map((page) => (
                <Link key={page.to} to={page.to} className="explore-card">
                  <div className="explore-card__icon">{page.icon}</div>
                  <span className="explore-card__label">{page.label}</span>
                  <h3 className="explore-card__title">{page.title}</h3>
                  <p className="explore-card__body">{page.body}</p>
                  <span className="explore-card__arrow" aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
