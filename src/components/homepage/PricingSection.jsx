import RevealOnScroll from '../ui/RevealOnScroll';
import BookACallButton from '../ui/BookACallButton';

const COST_ROWS = [
  {
    label: 'Unbilled items',
    amount: '~€60',
    scenario:
      'One missed dessert, bottle, or extra round per week is enough to leak money without anyone noticing during service.',
    math: '1 missed item / week × avg. €15',
  },
  {
    label: 'End-of-day reconstruction',
    amount: '~€75',
    scenario:
      'After closing, someone still has to match paper notes, memory, and card receipts before entering totals into the POS.',
    math: '5 shifts × 15 min × avg. €15 / hr',
  },
  {
    label: 'Manual bill splitting',
    amount: '~€75',
    scenario:
      'Calculating bills manually takes time, especially when guests pay separately.',
    math: '5 shifts × 15 min × avg. €15 / hr',
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
                Before looking at the price, it helps to see what the friction costs on a typical week.
              </p>

              <div className="pricing-ledger">
                {COST_ROWS.map((row) => (
                  <div className="pricing-ledger__row" key={row.label}>
                    <div className="pricing-ledger__row-top">
                      <span className="pricing-ledger__row-label">{row.label}</span>
                    </div>
                    <p className="pricing-ledger__row-scenario">{row.scenario}</p>
                    <div className="pricing-ledger__row-math">
                      <span className="pricing-ledger__row-formula">{row.math}</span>
                      <span className="pricing-ledger__row-amount">{row.amount} / month</span>
                    </div>
                  </div>
                ))}

                <div className="pricing-ledger__total">
                  <div>
                    <span>Estimated monthly friction</span>
                    <p>Conservative estimate for a small venue running 5 shifts a week.</p>
                  </div>
                  <span className="pricing-ledger__total-amount">≈ €{total} / month</span>
                </div>
              </div>
            </div>

            {/* Price card */}
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
        </RevealOnScroll>
      </div>
    </section>
  );
}
