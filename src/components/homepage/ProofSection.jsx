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
              <p className="proof-eyebrow">Proof, not promises</p>
              <h2 className="proof-heading">
                Built inside a real Berlin service.
              </h2>
              <p className="proof-body">
                Käserei Camidi is a wine bar, cheese shop, and table-service venue. The team uses TableOrders for tables, orders, splits, and daily sales tracking.
              </p>
              <div className="proof-facts">
                <span>Wine bar</span>
                <span>Cheese shop</span>
                <span>Table service</span>
                <span>Berlin</span>
              </div>
            </div>

            <VenueProofCard venue={CAMIDI_PROOF} />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
