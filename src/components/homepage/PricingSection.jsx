import RevealOnScroll from '../ui/RevealOnScroll';
import BookACallButton from '../ui/BookACallButton';

const COST_ROWS = [
  {
    label: 'Unbilled items',
    amount: '~€60',
    scenario: 'One missed dessert or round per week leaks money without anyone noticing.',
    math: '1 missed item / week × avg. €15',
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <rect x="2.5" y="1.5" width="9" height="11" rx="1" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M4.5 5h5M4.5 7.5h3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'End-of-day reconstruction',
    amount: '~€75',
    scenario: 'After closing, staff still reconcile notes and receipts before entering POS totals.',
    math: '5 shifts × 15 min × avg. €15 / hr',
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M7 4.5V7l2 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Manual bill splitting',
    amount: '~€75',
    scenario: 'Working out who owes what by hand slows every table turn.',
    math: '5 shifts × 15 min × avg. €15 / hr',
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="3.5" cy="3.5" r="1" fill="currentColor"/>
        <circle cx="10.5" cy="10.5" r="1" fill="currentColor"/>
        <circle cx="10.5" cy="3.5" r="1" fill="currentColor"/>
        <circle cx="3.5" cy="10.5" r="1" fill="currentColor"/>
      </svg>
    ),
  },
];

export default function PricingSection() {
  const total = 60 + 75 + 75;

  return (
    <section className="section section--glow pricing-section" id="pricing">
      <div className="container">
        <RevealOnScroll>
          <div className="pricing-layout">

            {/* Left: cost breakdown */}
            <div className="pricing-copy">
              <p className="pricing-eyebrow">Pricing</p>
              <h2 className="pricing-heading">
                What running without it actually costs.
              </h2>
              <p className="pricing-subtext">
                Before looking at the price, see what friction costs on a typical week.
              </p>

              <div className="pricing-ledger">
                {COST_ROWS.map((row) => (
                  <div className="pricing-ledger__row" key={row.label}>
                    <div className="pricing-ledger__row-top">
                      <span className="pricing-ledger__row-icon">{row.icon}</span>
                      <span className="pricing-ledger__row-label">{row.label}</span>
                    </div>
                    <div className="pricing-ledger__row-amount-group">
                      <span className="pricing-ledger__row-amount">
                        {row.amount}<span className="pricing-ledger__row-period"> / mo</span>
                      </span>
                      <span className="pricing-ledger__row-formula">{row.math}</span>
                    </div>
                    <p className="pricing-ledger__row-scenario">{row.scenario}</p>
                  </div>
                ))}

                <div className="pricing-ledger__total">
                  <span className="pricing-ledger__total-label">Estimated monthly friction</span>
                  <span className="pricing-ledger__total-amount">≈ €{total}</span>
                  <p>per month · 5 shifts/week</p>
                </div>
              </div>
            </div>

            {/* Price card */}
            <div className="pricing-card-wrapper">
              <h3 className="pricing-card__header">
                Save money and time, get clarity and control over your shifts.
              </h3>
            <div className="pricing-card">
              <div className="pricing-card__summary">
                <p className="pricing-card__kicker">TableOrders</p>

                <div className="pricing-card__price-block">
                  <div className="pricing-card__price">
                    <span className="pricing-card__amount">€80</span>
                    <span className="pricing-card__period">/ month</span>
                  </div>
                  <p className="pricing-card__note">Per venue · All devices included</p>
                </div>
              </div>

              <ul className="pricing-card__includes">
                <li>Shared live table map</li>
                <li>Order taking and batch tracking</li>
                <li>Bill splitting — by guest, item, or round</li>
                <li>Daily POS crossing summary</li>
                <li>Works on phones your team already has</li>
              </ul>

              <div className="pricing-card__action">
                <div className="pricing-card__verdict">
                  For many small venues, one or two avoided mistakes can cover most of the monthly cost.
                </div>

                <BookACallButton />
              </div>
            </div>
            </div>

          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
