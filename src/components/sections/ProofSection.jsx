import { useEffect, useState } from 'react';
import RevealOnScroll from '../ui/RevealOnScroll';
import camidiLogo from '../../assets/camidi_logo.jpg';
import camidiPhotoOne from '../../assets/camidi-1.jpg';
import camidiPhotoTwo from '../../assets/camidi-2.jpg';
import camidiPhotoThree from '../../assets/camidi-3.jpg';

const SERVICE_CHANGES = [
  {
    title: 'Paper tickets',
    before: 'Paper tickets make the order feel improvised.',
    after: 'Guests see clear items, readable names, and totals the team can trust.',
  },
  {
    title: 'Daily sales',
    before: 'Daily sales are counted ticket by ticket after service.',
    after: 'Closed bills are grouped by POS ID, ready for fast manual POS entry.',
  },
  {
    title: 'Bill splitting',
    before: 'Splits, vouchers, and shared bills turn into calculator work.',
    after: 'Equal splits, item splits, rounds, and vouchers are handled in the bill.',
  },
  {
    title: 'Order handoff',
    before: 'Busy waiters can forget to pass on an order after an interruption.',
    after: 'Unsent and sent batches stay visible until they are confirmed and handled.',
  },
  {
    title: 'Table status',
    before: 'Nobody is fully sure which tables are waiting, ordered, or ready to close.',
    after: 'The floor team shares one live table overview from any phone or tablet.',
  },
];

const VENUE_PHOTOS = [
  { src: camidiPhotoOne, alt: 'Käserei Camidi restaurant interior' },
  { src: camidiPhotoTwo, alt: 'Käserei Camidi table service area' },
  { src: camidiPhotoThree, alt: 'Käserei Camidi bar and counter area' },
];

export default function ProofSection() {
  const [activeChange, setActiveChange] = useState(0);
  const currentChange = SERVICE_CHANGES[activeChange];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveChange(current => (current + 1) % SERVICE_CHANGES.length);
    }, 8000);

    return () => window.clearInterval(timer);
  }, []);

  const showPreviousChange = () => {
    setActiveChange(current => (
      current === 0 ? SERVICE_CHANGES.length - 1 : current - 1
    ));
  };

  const showNextChange = () => {
    setActiveChange(current => (current + 1) % SERVICE_CHANGES.length);
  };

  return (
    <section className="section section--alt section--blobs" id="proof">
      <div className="container">
        <RevealOnScroll>
          <div className="proof-grid">
            <div className="proof-text">
              <p className="proof-eyebrow">Before and after</p>
              <h2 className="proof-heading">
                The daily service mess TableOrders removes.
              </h2>
              <div className="proof-comparison-stepper" aria-label="Service improvement controls">
                <button
                  className="proof-comparison-stepper__button"
                  type="button"
                  aria-label="Show previous proof"
                  onClick={showPreviousChange}
                >
                  ‹
                </button>
                <div
                  className="proof-comparison-stepper__status"
                  key={currentChange.title}
                  aria-live="polite"
                >
                  <span>{currentChange.title}</span>
                  <span>{activeChange + 1} / {SERVICE_CHANGES.length}</span>
                </div>
                <button
                  className="proof-comparison-stepper__button"
                  type="button"
                  aria-label="Show next proof"
                  onClick={showNextChange}
                >
                  ›
                </button>
              </div>
              <article className="proof-comparison" key={currentChange.title}>
                <div className="proof-comparison__side">
                  <span className="proof-comparison__label">Before</span>
                  <p>{currentChange.before}</p>
                </div>
                <div className="proof-comparison__side proof-comparison__side--after">
                  <span className="proof-comparison__label">Now</span>
                  <p>{currentChange.after}</p>
                </div>
              </article>
            </div>

            <div className="proof-venue-card">
              <div className="proof-venue-card__header">
                <img
                  className="proof-venue-card__logo"
                  src={camidiLogo}
                  alt="Käserei Camidi logo"
                />
                <div className="proof-venue-card__meta">
                  <span className="proof-venue-card__name">Käserei Camidi</span>
                  <span className="proof-venue-card__type">Wine bar · Cheese shop · Table service</span>
                </div>
                <span className="proof-venue-card__location">Berlin</span>
              </div>

              <div className="proof-venue-card__photos" aria-label="Käserei Camidi venue photos">
                {VENUE_PHOTOS.map((photo, index) => (
                  <img
                    key={photo.src}
                    className={`proof-venue-card__photo proof-venue-card__photo--${index + 1}`}
                    src={photo.src}
                    alt={photo.alt}
                  />
                ))}
              </div>

              <figure className="proof-venue-card__testimonial">
                <div className="proof-venue-card__testimonial-avatar" aria-hidden="true" />
                <figcaption className="proof-venue-card__testimonial-content">
                  <blockquote className="proof-venue-card__testimonial-quote">
                    "TableOrders made service feel calmer almost immediately. Orders are clearer, splitting bills is faster, and the team spends less time reconstructing what happened after the shift."
                    {' '}
                    <span className="proof-venue-card__testimonial-person">
                      Käserei Camidi team
                    </span>
                  </blockquote>
                </figcaption>
              </figure>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
