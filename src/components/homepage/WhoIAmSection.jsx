import RevealOnScroll from '../ui/RevealOnScroll';
import Button from '../ui/Button';
import FounderCredentialPanel from './FounderCredentialPanel';
import FounderIntro from './FounderIntro';
import { FOUNDER_CREDENTIALS, FOUNDER_PROFILE } from './homepageData';

export default function WhoIAmSection() {
  return (
    <section className="section section--lines" id="about">
      <div className="container">
        <RevealOnScroll>
          <div className="whois-section">
            <div className="whois-copy">
              <p className="whois-eyebrow">Why this works</p>
              <h2 className="whois-heading">
                Built by a waiter, designer, and developer
              </h2>
              <FounderIntro profile={FOUNDER_PROFILE} />
              <div className="whois-actions">
                <Button to="/contact" variant="secondary" className="btn--sm">Contact</Button>
                <Button
                  href={FOUNDER_PROFILE.portfolioUrl}
                  variant="secondary"
                  className="btn--sm"
                  target="_blank"
                  rel="noreferrer"
                >
                  Portfolio
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </Button>
              </div>
            </div>

            <FounderCredentialPanel credentials={FOUNDER_CREDENTIALS} />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
