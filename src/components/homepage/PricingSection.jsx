import RevealOnScroll from '../ui/RevealOnScroll';
import BookACallButton from '../ui/BookACallButton';
import ServiceChangeSwitcher from './ServiceChangeSwitcher';
import { SERVICE_CHANGES } from './homepageData';

export default function PricingSection() {
  return (
    <section className="section section--glow pricing-section" id="pricing">
      <div className="container">
        <RevealOnScroll>
          <div className="pricing-layout">

            {/* Left: problems + cost summary */}
            <div className="pricing-copy">
              <p className="pricing-eyebrow">Pricing</p>
              <h2 className="pricing-heading">
                What service friction actually costs.
              </h2>
              <p className="pricing-subtext">
                These are the breakdowns TableOrders removes — and what they add up to on a typical 5-shift week.
              </p>

              <ServiceChangeSwitcher changes={SERVICE_CHANGES} />

              <div className="pricing-cost-summary">
                <span>Estimated monthly friction on a 5-shift week</span>
                <strong>≈ €345 / month</strong>
              </div>
              <p className="pricing-cost-disclaimer">
                One item not billed per shift (≈ €160) and 30 min of end-of-day reconciliation at avg. staff wage (≈ €185). Conservative estimate.
              </p>
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
