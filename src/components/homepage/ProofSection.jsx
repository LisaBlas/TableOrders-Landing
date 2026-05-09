import RevealOnScroll from '../ui/RevealOnScroll';
import ServiceChangeSwitcher from './ServiceChangeSwitcher';
import VenueProofCard from './VenueProofCard';
import { CAMIDI_PROOF, SERVICE_CHANGES } from './homepageData';

export default function ProofSection() {
  return (
    <section className="section section--alt section--blobs proof-section" id="proof">
      <div className="container">
        <RevealOnScroll>
          <div className="proof-grid">
            <div className="proof-text">
              <p className="proof-eyebrow">Before</p>
              <h2 className="proof-heading">
                The daily service mess TableOrders removes.
              </h2>
              <ServiceChangeSwitcher changes={SERVICE_CHANGES} />
            </div>

            <VenueProofCard venue={CAMIDI_PROOF} />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
