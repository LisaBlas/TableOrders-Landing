import RevealOnScroll from '../ui/RevealOnScroll';
import Button from '../ui/Button';
import DemoPhone from '../ui/DemoPhone';
import { CALENDLY_URL } from '../../config/site';

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
                A shared mobile table map, order tracking, sent batches, and bill splitting — for teams that already have a POS.
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
                Works on phones your team already has. No new hardware needed.
              </p>
            </div>

            <DemoPhone className="pain-hero-demo" loading="eager" />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
