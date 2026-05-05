import PageLayout from '../components/layout/PageLayout';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import Button from '../components/ui/Button';
import { CALENDLY_URL } from '../config/site';
import blasPhoto from '../assets/blas.avif';

const TRUST_POINTS = [
  {
    title: 'You talk to the builder',
    body: 'There is no account manager, no support queue, no reseller. When you book a walkthrough, you talk directly to the person who built the app and can change it.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Built from real hospitality workflows',
    body: "I've worked as a waiter, bartender, and tourist guide. I know what breaks during a Saturday dinner rush — table state confusion, forgotten orders, bill splits that take longer than they should.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17h18M9 17V7m6 10V7M5 7h14" />
      </svg>
    ),
  },
  {
    title: 'Designed, then built',
    body: '10+ years of UX design before picking up a compiler. Every screen in TableOrders was designed against real operational friction, not an imaginary user persona or a feature checklist.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6M9 12h4M9 15h2" />
      </svg>
    ),
  },
  {
    title: 'Fast to adapt',
    body: 'Small team means short feedback loops. If your setup has a quirk — a specific POS ID pattern, an unusual split workflow, a hybrid retail and restaurant floor — it can be addressed without a sprint.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
];

const FIT_ITEMS = [
  'Small restaurants with table service',
  'Wine bars and cheese shops with walk-in guests',
  'Cafes that run full table orders',
  'Bars with mixed table and counter service',
  'Hybrid retail and hospitality venues',
  'Owner-operated teams that need mobile coordination',
  'Teams with an existing POS that want a mobile layer on top',
];

export default function AboutPage() {
  return (
    <PageLayout>
      <section className="section section--diagonal about-hero">
        <div className="container">
          <RevealOnScroll>
            <div className="about-hero__inner">
              <div className="about-hero__portrait">
                <img className="about-hero__photo" src={blasPhoto} alt="Blas Alviz" />
                <span className="about-location-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14" aria-hidden="true">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Berlin, Germany
                </span>
              </div>
              <div className="about-hero__text">
                <p className="about-eyebrow">About</p>
                <h1 className="about-hero__title">Built locally, for real restaurant workflows</h1>
                <p className="about-hero__body">
                  I'm Blas. I built TableOrders because I've worked in hospitality, spent a decade designing interfaces, and got tired of watching restaurant teams manage table service with paper and memory. TableOrders is already live at Käserei Camidi in Berlin.
                </p>
                <p className="about-hero__body">
                  This is not a VC-backed startup. It's a focused tool built and maintained by one person, used by real restaurants, and designed to stay simple.
                </p>
                <div className="about-hero__actions">
                  <Button href={CALENDLY_URL} variant="primary" target="_blank" rel="noopener noreferrer">
                    Book a walkthrough
                  </Button>
                  <a href="mailto:alvizblas@gmail.com" className="about-email-link">
                    alvizblas@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section section--dots about-trust-section">
        <div className="container">
          <RevealOnScroll>
            <div className="about-trust">
              <div className="about-trust__header">
                <p className="about-eyebrow">Why it matters</p>
                <h2 className="about-trust__title">What makes this different from off-the-shelf software</h2>
              </div>
              <div className="about-trust__grid">
                {TRUST_POINTS.map((point) => (
                  <div className="about-trust-card" key={point.title}>
                    <div className="about-trust-card__icon">{point.icon}</div>
                    <h3 className="about-trust-card__title">{point.title}</h3>
                    <p className="about-trust-card__body">{point.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section section--blobs about-fit-section">
        <div className="container">
          <RevealOnScroll>
            <div className="about-fit">
              <p className="about-eyebrow">Good fit</p>
              <h2 className="about-fit__title">The kind of team TableOrders works best for</h2>
              <div className="about-fit__items">
                {FIT_ITEMS.map((item) => (
                  <div className="about-fit__item" key={item}>
                    <span className="about-fit__check" aria-hidden="true">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section section--glow about-cta-section">
        <div className="container">
          <RevealOnScroll>
            <div className="about-cta">
              <h2 className="about-cta__heading">Let's talk about your setup</h2>
              <p className="about-cta__body">
                Book 20 minutes. I'll listen to how your service runs, map where friction happens, and show you where TableOrders fits alongside your existing POS.
              </p>
              <div className="about-cta__actions">
                <Button href={CALENDLY_URL} variant="primary" target="_blank" rel="noopener noreferrer">
                  Book a walkthrough
                </Button>
                <a href="mailto:alvizblas@gmail.com" className="about-email-link">
                  Or email alvizblas@gmail.com
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </PageLayout>
  );
}
