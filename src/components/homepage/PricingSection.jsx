import { useState } from 'react';
import RevealOnScroll from '../ui/RevealOnScroll';
import BookACallButton from '../ui/BookACallButton';

const COST_ROWS = [
  {
    label: 'Items fall through',
    signal: 'Revenue',
    detail: 'Verbal additions and paper notes can disappear between taking the order and closing the table. TableOrders keeps each item attached to the operational bill until review.',
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <rect x="2.5" y="1.5" width="9" height="11" rx="1" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M4.5 5h5M4.5 7.5h3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Closing takes too long',
    signal: 'Time',
    detail: 'Paper tickets and memory make end-of-day entry a reconstruction task. TableOrders groups closed bills and prepares item quantities by POS ID for manual entry.',
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M7 4.5V7l2 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Splits become calculator work',
    signal: 'Service',
    detail: 'Guest-by-guest, item-by-item, and round-by-round splits can be handled inside the same table record, with durable split details for later review.',
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
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="section section--glow pricing-section" id="pricing">
      <div className="container">
        <RevealOnScroll>
          <div className="pricing-split">

            <div className="pricing-loss">
              <p className="pricing-eyebrow">The cost of manual service</p>
              <h2 className="pricing-heading">
                The expensive part is the friction you repeat every shift.
              </h2>
              <p className="pricing-intro">Open each signal to see where the coordination breaks.</p>

              <ul className="pricing-loss-list">
                {COST_ROWS.map((row, i) => (
                  <li
                    className={`pricing-loss-item${openIdx === i ? ' pricing-loss-item--open' : ''}`}
                    key={row.label}
                  >
                    <button type="button" onClick={() => setOpenIdx(openIdx === i ? null : i)} aria-expanded={openIdx === i}>
                      <span className="pricing-loss-item__icon">{row.icon}</span>
                      <span className="pricing-loss-item__label">{row.label}</span>
                      <span className="pricing-loss-item__signal">{row.signal}</span>
                      <span className="pricing-loss-item__chevron"><Chevron /></span>
                    </button>
                    <div className="pricing-loss-item__detail"><p>{row.detail}</p></div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pricing-solution">
              <div className="pricing-card">
                <div className="pricing-card__summary">
                  <p className="pricing-card__kicker"><span>One venue</span> Everything your floor needs</p>

                  <div className="pricing-card__price-block">
                    <div className="pricing-card__price">
                      <span className="pricing-card__amount">€80</span>
                      <span className="pricing-card__period">/ month</span>
                    </div>
                    <p className="pricing-card__note">Per venue / month</p>
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
                    Start with a workflow walkthrough. We will check fit before discussing setup.
                  </div>
                  <BookACallButton className="pricing-card__button" />
                </div>
              </div>
            </div>

          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
