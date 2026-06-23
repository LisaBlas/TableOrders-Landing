import { useState } from 'react';
import RevealOnScroll from '../ui/RevealOnScroll';
import BookACallButton from '../ui/BookACallButton';

const COST_ROWS = [
  {
    label: 'Unbilled items',
    amount: '~€60',
    math: '1 missed item / week × avg. €15',
    detail: 'One forgotten order per shift is easy to miss in the rush. At an average of €15 per item, that\'s roughly €60 gone each month that never shows up anywhere — not on the POS, not on your daily summary.',
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <rect x="2.5" y="1.5" width="9" height="11" rx="1" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M4.5 5h5M4.5 7.5h3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Counting Sales',
    amount: '~€75',
    math: '5 shifts × 15 min × avg. €15 / hr',
    detail: 'At the end of each service, someone has to go back through paper notes or memory to re-enter totals into the POS. Fifteen minutes per shift adds up to over an hour a week — staff time spent on a task that should take two minutes.',
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
    math: '5 shifts × 15 min × avg. €15 / hr',
    detail: 'Splitting a table by hand with paper, a calculator, or memory is slow and prone to errors. Guests wait, staff get flustered, and the numbers rarely add up cleanly on the first try.',
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

const Chevron = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 3.5L5 6.5L8 3.5"/>
  </svg>
);

export default function PricingSection() {
  const total = 60 + 75 + 75;
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="section section--glow pricing-section" id="pricing">
      <div className="container">
        <RevealOnScroll>
          <div className="pricing-split">

            {/* Left: friction summary */}
            <div className="pricing-loss">
              <p className="pricing-eyebrow">Where your money goes</p>
              <h2 className="pricing-heading">
                Three ways you lose time and money every week.
              </h2>

              <ul className="pricing-loss-list">
                {COST_ROWS.map((row, i) => (
                  <li
                    className={`pricing-loss-item${openIdx === i ? ' pricing-loss-item--open' : ''}`}
                    key={row.label}
                    onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  >
                    <span className="pricing-loss-item__chevron">
                      <Chevron />
                    </span>
                    <span className="pricing-loss-item__icon">{row.icon}</span>
                    <span className="pricing-loss-item__label">{row.label}</span>
                    <span className="pricing-loss-item__math">{row.math}</span>
                    <span className="pricing-loss-item__amount">
                      {row.amount}<span className="pricing-loss-item__period"> / mo</span>
                    </span>
                    {openIdx === i && (
                      <div className="pricing-loss-item__detail">
                        {row.detail}
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              <div className="pricing-loss-total">
                <span className="pricing-loss-total__label">Estimated monthly friction</span>
                <div className="pricing-loss-total__row">
                  <span className="pricing-loss-total__amount">≈ €{total}</span>
                  <span className="pricing-loss-total__period">/ month</span>
                </div>
                <span className="pricing-loss-total__sub">per venue · 5 shifts / week</span>
              </div>
            </div>

            {/* Right: solution */}
            <div className="pricing-solution">
              <h3 className="pricing-solution__heading">
                Fix it for less than you're losing.
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
                  <li>Daily sales analytics included</li>
                  <li>No hardware to buy — works on phones your team already has</li>
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
