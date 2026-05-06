import { useEffect, useState } from 'react';
import RevealOnScroll from '../ui/RevealOnScroll';
import ServiceChangeSwitcher from './ServiceChangeSwitcher';
import VenueProofCard from './VenueProofCard';
import { CAMIDI_PROOF, SERVICE_CHANGES } from './homepageData';

export default function ProofSection() {
  const [activeChange, setActiveChange] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveChange(current => (current + 1) % SERVICE_CHANGES.length);
    }, 8000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="section section--alt section--blobs proof-section" id="proof">
      <div className="container">
        <RevealOnScroll>
          <div className="proof-grid">
            <div className="proof-text">
              <p className="proof-eyebrow">Before and after</p>
              <h2 className="proof-heading">
                The daily service mess TableOrders removes.
              </h2>
              <ServiceChangeSwitcher
                changes={SERVICE_CHANGES}
                activeIndex={activeChange}
                onSelect={setActiveChange}
              />
            </div>

            <VenueProofCard venue={CAMIDI_PROOF} />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
