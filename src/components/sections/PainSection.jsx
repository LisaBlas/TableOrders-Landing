import RevealOnScroll from '../ui/RevealOnScroll';
import Button from '../ui/Button';
import DemoPhone from '../ui/DemoPhone';

const CALENDLY_URL = '[CALENDLY_PLACEHOLDER]';

export default function PainSection() {
  return (
    <section className="section section--full section--diagonal" id="top">
      <div className="container">
        <RevealOnScroll>
          <div className="pain-layout">
            <div className="pain-section">
              <div className="pain-badge">
                <span className="pain-badge__dot" />
                Live at Kaeserei Camidi, Berlin
              </div>
              <h1 className="pain-heading">
                Run table service from any phone.
              </h1>
              <p className="pain-subtext">
                Reduce stress and mistakes. Save time and money. TableOrders makes it simple.
              </p>
              <div className="pain-actions">
                <Button href={CALENDLY_URL} variant="primary" target="_blank" rel="noopener noreferrer">
                  Book a walkthrough
                </Button>
                <Button href="#demo" variant="secondary">
                  See workflow
                </Button>
              </div>
              <p className="pain-trust">
                No setup required - works on phones your team already has
              </p>
            </div>

            <DemoPhone className="pain-hero-demo" loading="eager" />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
