import RevealOnScroll from '../ui/RevealOnScroll';
import Button from '../ui/Button';

export default function CTABanner() {
  return (
    <RevealOnScroll className="cta-banner">
      <h2 className="cta-banner__title">Ready to save time and bring in more customers?</h2>
      <p className="cta-banner__subtitle">Get a free website review and see where automation can help your business.</p>
      <div className="hero__actions" style={{ justifyContent: 'center' }}>
        <Button to="/contact" variant="primary">
          Get a free review
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M3 8h10M9 4l4 4-4 4"/>
          </svg>
        </Button>
        <Button href="#transformations" variant="secondary">See examples</Button>
      </div>
    </RevealOnScroll>
  );
}
