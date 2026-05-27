import RevealOnScroll from '../ui/RevealOnScroll';
import BookACallButton from '../ui/BookACallButton';

const COST_ROWS = [
  {
    label: 'Unbilled items',
    scenario:
      'One item taken verbally and never entered — a dessert mid-service, a second round added at the table. On a 5-shift week that happens more than once.',
    math: '5 shifts × 1 item × avg. €8',
    monthly: '~€160 / month in revenue that leaves without a record',
  },
  {
    label: 'End-of-day reconstruction',
    scenario:
      'After closing, someone spends 30 minutes matching paper notes, memory, and card receipts before entering totals into the POS.',
    math: '5 shifts × 30 min × avg. €15 / hr',
    monthly: '~€185 / month in paid hours spent on manual reconciliation',
  },
];

export default function PricingSection() {
  const total = 160 + 185;

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
                      <span className="pricing-ledger__row-result">{row.monthly}</span>
                    </div>
                  </div>
                ))}

                <div className="pricing-ledger__total">
                  <span>Estimated monthly friction</span>
                  <span className="pricing-ledger__total-amount">≈ €{total} / month</span>
                </div>
                <p className="pricing-ledger__disclaimer">
                  Conservative estimate for a small venue running 5 shifts a week.
                </p>
              </div>
            </div>

            {/* Right: price card */}
            <div className="pricing-card">
              <p className="pricing-card__kicker">TableOrders</p>

              <div className="pricing-card__price-block">
                <div className="pricing-card__price">
                  <span className="pricing-card__amount">€80</span>
                  <span className="pricing-card__period">/ month</span>
                </div>
                <p className="pricing-card__note">Per venue · All devices included</p>
              </div>

              <ul className="pricing-card__includes">
                <li>Shared live table map</li>
                <li>Order taking and batch tracking</li>
                <li>Bill splitting — by guest, item, or round</li>
                <li>Daily POS crossing summary</li>
                <li>Works on phones your team already has</li>
              </ul>

              <div className="pricing-card__verdict">
                At €80 / month, it covers itself before the end of the first week.
              </div>

              <BookACallButton />
            </div>

          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
