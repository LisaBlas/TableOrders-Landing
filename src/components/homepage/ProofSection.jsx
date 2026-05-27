import RevealOnScroll from '../ui/RevealOnScroll';
import VenueProofCard from './VenueProofCard';
import { CAMIDI_PROOF } from './homepageData';

export default function ProofSection() {
  return (
    <section className="section section--alt section--blobs proof-section" id="proof">
      <div className="container">
        <RevealOnScroll>
          <div className="proof-grid">
            <div className="proof-text">
              <p className="proof-eyebrow">Live venue</p>
              <h2 className="proof-heading">
                Already running at Käserei Camidi.
              </h2>
              <p className="proof-body">
                A Berlin wine bar and cheese shop with full table service. The team uses TableOrders every shift — tables, orders, splits, and daily POS crossing.
              </p>
            </div>

            <VenueProofCard venue={CAMIDI_PROOF} />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
