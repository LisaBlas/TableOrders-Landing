import RevealOnScroll from '../ui/RevealOnScroll';
import Button from '../ui/Button';

export default function PricingSection() {
  return (
    <section className="section section--full section--alt section--diagonal" id="pricing">
      <div className="container">
        <RevealOnScroll>
          <p className="section-label">Pricing</p>
          <h2 className="section-title">Custom-built for your business</h2>
          <p className="section-subtitle">Flat monthly rates. No contracts. No hidden fees. Just simple, predictable pricing.</p>
        </RevealOnScroll>

        <RevealOnScroll className="pricing-comparison">
          <div className="pricing-column pricing-column--traditional">
            <h3 className="pricing-column__title">Most platforms</h3>
            <p className="pricing-column__price">€50–€200<span>/month</span></p>
            <ul className="pricing-column__features">
              <li className="pricing-feature pricing-feature--muted">Built for big companies</li>
              <li className="pricing-feature pricing-feature--muted">Complex setup</li>
              <li className="pricing-feature pricing-feature--muted">Features you won't use</li>
              <li className="pricing-feature pricing-feature--muted">Annual lock-in</li>
            </ul>
          </div>

          <div className="pricing-column pricing-column--ours">
            <div className="pricing-column__badge">My approach</div>
            <h3 className="pricing-column__title">Custom Systems</h3>
            <p className="pricing-column__price">Starting at €300<span>/project</span></p>
            <ul className="pricing-column__features">
              <li className="pricing-feature">Built specifically for you</li>
              <li className="pricing-feature">Simple, focused features</li>
              <li className="pricing-feature">Fast setup</li>
              <li className="pricing-feature">You own the system</li>
            </ul>
            <Button to="/contact" variant="primary" style={{ marginTop: '24px' }}>
              Request a quote
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
