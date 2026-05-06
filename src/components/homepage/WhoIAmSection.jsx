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
              <Button to="/about" variant="link">About me</Button>
            </div>

            <FounderCredentialPanel credentials={FOUNDER_CREDENTIALS} />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
