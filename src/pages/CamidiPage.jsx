import PageLayout from '../components/layout/PageLayout';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import WorkflowCTA from '../components/homepage/WorkflowCTA';
import BookACallButton from '../components/ui/BookACallButton';
import camidiLogo from '../assets/camidi_logo.jpg';
import camidiPhotoOne from '../assets/camidi-1.jpg';
import camidiPhotoTwo from '../assets/camidi-2.jpg';
import camidiPhotoThree from '../assets/camidi-3.jpg';

const FRICTION_POINTS = [
  {
    label: 'Table state',
    before: 'Nobody knew which tables were waiting, ordered, or ready to close. Waiters had to ask each other constantly.',
    after: 'One shared floor view on every phone. Open, seated, ordered, and confirmed states visible at a glance.',
  },
  {
    label: 'Order handoffs',
    before: 'Busy waiters interrupted mid-table would sometimes forget to send an order to the bar or kitchen.',
    after: 'Unsent batches stay visible as pending. Nothing moves to "sent" until the waiter confirms it.',
  },
  {
    label: 'Bill splitting',
    before: 'Groups splitting by item, round, or with a voucher meant manual calculations at the worst possible moment.',
    after: 'Equal splits, item-by-item splits, round tracking, and voucher-aware totals handled inside the bill.',
  },
  {
    label: 'Daily POS entry',
    before: 'At closing, daily sales had to be reconstructed from paper tickets before entry into the official POS.',
    after: 'Closed bills are grouped by POS ID, already aggregated. Staff mark quantities as added and move on.',
  },
  {
    label: 'Paper tickets',
    before: 'Handwritten tickets were easy to misread, easy to lose, and made end-of-shift reconciliation slow.',
    after: 'Every order is a digital record with item names, quantities, categories, and totals.',
  },
];

export default function CamidiPage() {
  return (
    <PageLayout>
      <section className="section section--diagonal cs-hero">
        <div className="container">
          <RevealOnScroll>
            <div className="cs-hero__inner">
              <div className="cs-hero__meta">
                <span className="cs-badge">Case Study</span>
                <span className="cs-badge cs-badge--venue">Berlin, Germany</span>
              </div>
              <div className="cs-hero__venue">
                <img className="cs-hero__logo" src={camidiLogo} alt="Käserei Camidi logo" />
                <div>
                  <h1 className="cs-hero__title">Käserei Camidi</h1>
                  <p className="cs-hero__type">Wine bar · Cheese shop · Table service</p>
                </div>
              </div>
              <p className="cs-hero__intro">
                A Berlin wine bar and cheese shop with table service for groups, shop visitors, and regulars. The team was running live service with paper tickets, handwritten bills, and manual POS entry at the end of each shift.
              </p>
              <BookACallButton />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section section--alt cs-photos-section">
        <div className="container">
          <RevealOnScroll>
            <div className="cs-gallery">
              <img className="cs-gallery__img cs-gallery__img--main" src={camidiPhotoOne} alt="Käserei Camidi interior" />
              <img className="cs-gallery__img" src={camidiPhotoTwo} alt="Käserei Camidi table service" />
              <img className="cs-gallery__img" src={camidiPhotoThree} alt="Käserei Camidi bar and counter" />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section section--dots cs-workflow-section">
        <div className="container">
          <RevealOnScroll>
            <div className="cs-workflow-header">
              <p className="cs-eyebrow">The old workflow</p>
              <h2 className="cs-section-title">Where service friction built up</h2>
              <p className="cs-section-body">
                The team had a functional POS for payments and fiscal receipts. What they lacked was coordination between the floor, counter, and bar during live service — table state, order tracking, and bill splits all lived in staff memory and on paper.
              </p>
            </div>
            <div className="cs-friction-list">
              {FRICTION_POINTS.map((point, i) => (
                <div className="cs-friction-item" key={point.label}>
                  <div className="cs-friction-item__num">{i + 1}</div>
                  <div className="cs-friction-item__content">
                    <h3 className="cs-friction-item__label">{point.label}</h3>
                    <div className="cs-friction-sides">
                      <div className="cs-friction-side cs-friction-side--before">
                        <span className="cs-friction-side__tag">Before</span>
                        <p>{point.before}</p>
                      </div>
                      <div className="cs-friction-side cs-friction-side--after">
                        <span className="cs-friction-side__tag">Now</span>
                        <p>{point.after}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section section--blobs cs-fit-section">
        <div className="container">
          <RevealOnScroll>
            <div className="cs-fit-inner">
              <div className="cs-fit-text">
                <p className="cs-eyebrow">Where it sits</p>
                <h2 className="cs-section-title">Between the team and the POS</h2>
                <p className="cs-section-body">
                  TableOrders does not replace the POS. Camidi still uses their existing POS for fiscal receipts, tax calculation, and official payments. TableOrders handles the live-service layer: table state, order coordination, batch tracking, and bill preparation.
                </p>
                <p className="cs-section-body">
                  At the end of each shift, daily sales data is already aggregated by POS ID. Staff enter items into the official POS once, mark them as added, and move on. No reconstruction, no cross-referencing paper tickets.
                </p>
              </div>
              <div className="cs-stack">
                <div className="cs-stack__item cs-stack__item--top">
                  <span className="cs-stack__label">TableOrders</span>
                  <span className="cs-stack__desc">Tables · Orders · Batches · Bills · Daily sales</span>
                </div>
                <div className="cs-stack__arrow">↓ hands off aggregated totals</div>
                <div className="cs-stack__item cs-stack__item--bottom">
                  <span className="cs-stack__label">Official POS</span>
                  <span className="cs-stack__desc">Fiscal receipts · Tax · Payments</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section section--lines cs-quote-section">
        <div className="container">
          <RevealOnScroll>
            <figure className="cs-quote">
              <blockquote className="cs-quote__text">
                "TableOrders made service feel calmer almost immediately. Orders are clearer, splitting bills is faster, and the team spends less time reconstructing what happened after the shift."
              </blockquote>
              <figcaption className="cs-quote__source">Käserei Camidi team · Berlin</figcaption>
            </figure>
          </RevealOnScroll>
        </div>
      </section>

      <WorkflowCTA />
    </PageLayout>
  );
}
