import PageLayout from '../components/layout/PageLayout';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import WorkflowCTA from '../components/homepage/WorkflowCTA';
import camidiLogo from '../assets/camidi_logo.jpg';
import camidiPhotoOne from '../assets/camidi-1.jpg';
import camidiPhotoTwo from '../assets/camidi-2.jpg';
import camidiPhotoThree from '../assets/camidi-3.jpg';

const PAPER_STEPS = [
  {
    num: '01',
    title: 'Take the order at the table',
    body: 'Write it down. Prices from memory if the waiter knows the menu — or pause the conversation to check. Every member of staff has their own handwriting. No standardized format.',
  },
  {
    num: '02',
    title: 'Walk to the cheese counter',
    body: 'Cheese plate orders need their own slip at the counter. A separate trip, a separate piece of paper — only the cheese items, written again for the person working the counter.',
  },
  {
    num: '03',
    title: 'Walk to the kitchen',
    dividerAfter: 'Closing the table',
    body: 'Food orders need a kitchen ticket too. Another trip, another handwritten slip — this time only the dishes. The kitchen does not need the cheese plates, so it is a different note.',
  },
  {
    num: '04',
    title: 'Come back to close the bill',
    dividerAfter: 'End of the shift',
    body: 'Find the original table ticket. Pull out a calculator. Add up each item one by one. If the group is splitting, run the math again — per guest or by item. One missed line and the total is wrong. Most errors go unnoticed until after service, if at all.',
  },
  {
    num: '05',
    title: 'After the last guest: the A4 sheet',
    body: 'Once guests are gone, someone sits down with all the kitchen tickets and transfers the dish quantities into a handwritten A4 table — the owner\'s daily sales record. One ticket at a time, at the end of a long shift.',
  },
  {
    num: '06',
    title: 'Enter everything into the POS',
    body: 'The final step: take those totals and manually enter each item into the official POS cheese-scale. Only then is the shift fully closed.',
  },
];

const SERVICE_CHANGES = [
  'Waiters can see table state from any phone before walking back to the counter.',
  'Orders stay editable until the staff confirms and sends them.',
  'Bills can be reviewed, split, and closed without rebuilding the table history.',
  'The official POS remains the fiscal system for receipts, tax, and payment processing.',
];

const FIT_SIGNALS = [
  {
    title: 'A small team with real table service',
    body: 'The best fit is a restaurant, bar, cafe, or shop-with-service where staff move between tables, counter, and POS during busy periods.',
  },
  {
    title: 'An existing POS that should stay in place',
    body: 'TableOrders works as the coordination layer before the official POS. It is useful when replacing the POS would be expensive, risky, or unnecessary.',
  },
  {
    title: 'Recurring friction around splits and closing',
    body: 'If bills regularly require rounds, shared plates, vouchers, custom items, or manual totals, the time savings become visible quickly.',
  },
];

export default function CamidiPage() {
  return (
    <PageLayout>
      <section className="cs-story-hero">
        <div className="container">
          <RevealOnScroll>
            <div className="cs-story-hero__copy">
              <div className="cs-hero__meta">
                <span className="cs-badge">Camidi Workflow</span>
                <span className="cs-badge cs-badge--venue">Berlin, Germany</span>
              </div>
              <div className="cs-hero__venue">
                <img className="cs-hero__logo" src={camidiLogo} alt="Kaeserei Camidi logo" />
                <div>
                  <p className="cs-story-hero__venue-label">Kaeserei Camidi</p>
                  <p className="cs-hero__type">Wine bar / cheese shop / table service</p>
                </div>
              </div>
              <h1 className="cs-story-hero__title">
                A calmer way to run table service when the POS is not the problem.
              </h1>
              <p className="cs-story-hero__intro">
                Camidi needed less paper, fewer interruptions, faster bill handling, and a cleaner end-of-day routine. TableOrders gave the team a live service layer between the floor and the official POS.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="cs-venue-section">
        <div className="container">
          <RevealOnScroll>
            <div className="cs-venue-story">
              <div className="cs-venue-story__copy">
                <p className="cs-eyebrow">The restaurant</p>
                <h2 className="cs-section-title">A neighborhood place with shop traffic, regulars, groups, and table service.</h2>
                <p className="cs-section-body">
                  Kaeserei Camidi is the kind of venue where service shifts shape constantly. A guest may buy cheese at the counter, a group may sit for wine and plates, and staff may need to switch between hospitality, retail, and closing duties in the same hour.
                </p>
                <p className="cs-section-body">
                  The old setup worked because the team knew the room. It became stressful when that knowledge had to live in memory: which order had been sent, which table was ready to split, which handwritten item belonged to which POS category.
                </p>
                <figure className="cs-owner-note">
                  <blockquote>
                    "We did not need a new fiscal POS. We needed the service work around it to stop stealing attention from guests."
                  </blockquote>
                  <figcaption>Owner perspective, summarized from the Camidi workflow</figcaption>
                </figure>
              </div>
              <div className="cs-venue-photos">
                <img className="cs-venue-photos__main" src={camidiPhotoOne} alt="Kaeserei Camidi interior" />
                <div className="cs-venue-photos__pair">
                  <img src={camidiPhotoTwo} alt="Kaeserei Camidi table service" />
                  <img src={camidiPhotoThree} alt="Kaeserei Camidi bar and counter" />
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="cs-paper-trail-section">
        <div className="container">
          <RevealOnScroll>
            <div className="cs-paper-trail">
              <div className="cs-paper-trail__header">
                <p className="cs-eyebrow">Before TableOrders</p>
                <h2 className="cs-section-title">1. Paper Tickets</h2>
                <p className="cs-section-body">
                  One table order, written in three places, calculated by hand, and reconstructed at the end of every shift.
                </p>
              </div>
              <div className="cs-paper-trail__steps">
                <div className="cs-paper-trail__divider cs-paper-trail__divider--top">
                  <span>Taking an order</span>
                </div>
                {PAPER_STEPS.map((step) => (
                  <div className="cs-paper-trail__step-group" key={step.num}>
                    <div className="cs-paper-trail__step">
                      <div className="cs-paper-trail__step-num">{step.num}</div>
                      <div className="cs-paper-trail__step-content">
                        <h3 className="cs-paper-trail__step-title">{step.title}</h3>
                        <p className="cs-paper-trail__step-body">{step.body}</p>
                      </div>
                    </div>
                    {step.dividerAfter ? (
                      <div className="cs-paper-trail__divider">
                        <span>{step.dividerAfter}</span>
                      </div>
                    ) : null}
                  </div>
                ))}
                <p className="cs-paper-trail__coda">This happened every shift, for every table.</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="cs-change-section">
        <div className="container">
          <RevealOnScroll>
            <div className="cs-change">
              <div className="cs-change__copy">
                <p className="cs-eyebrow">What changed</p>
                <h2 className="cs-section-title">The team kept their POS. They changed the layer before it.</h2>
                <p className="cs-section-body">
                  TableOrders does not issue fiscal receipts, calculate tax, or process payments. It organizes the work that happens before the official POS: table state, orders, bill review, splitting, closing, and daily POS entry totals.
                </p>
              </div>
              <div className="cs-change__list">
                {SERVICE_CHANGES.map((change) => (
                  <div className="cs-change-row" key={change}>
                    <span />
                    <p>{change}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="cs-fit-signals-section">
        <div className="container">
          <RevealOnScroll>
            <div className="cs-fit-signals">
              <div className="cs-workflow-header">
                <p className="cs-eyebrow">Could it fit your restaurant?</p>
                <h2 className="cs-section-title">Look for the same operational pattern.</h2>
                <p className="cs-section-body">
                  The strongest candidates are not necessarily large restaurants. They are places where table service is busy enough that paper, memory, and manual closing become expensive.
                </p>
              </div>
              <div className="cs-fit-signals__grid">
                {FIT_SIGNALS.map((signal) => (
                  <article className="cs-fit-signal" key={signal.title}>
                    <h3>{signal.title}</h3>
                    <p>{signal.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <WorkflowCTA
        eyebrow="Run your workflow against it"
        heading="Bring one messy service process."
        body="Paper orders, table splits, POS category totals, voucher habits, or closing routines. I will map where TableOrders would save time and where your current setup should stay as it is."
      />
    </PageLayout>
  );
}
