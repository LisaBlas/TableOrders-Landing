import PageLayout from '../components/layout/PageLayout';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import WorkflowCTA from '../components/homepage/WorkflowCTA';
import camidiLogo from '../assets/camidi_logo.jpg';
import camidiPhotoOne from '../assets/camidi-1.jpg';
import camidiPhotoTwo from '../assets/camidi-2.jpg';
import camidiPhotoThree from '../assets/camidi-3.jpg';

const MONTHLY_SAVINGS = [
  {
    process: 'Paper tickets',
    estimate: '18-26 hours',
    money: '450-780 EUR',
    detail:
      'Paper tickets looked unprofessional to guests. Totals were added on a calculator, errors went unnoticed, and a large table could take ten minutes to close because everyone was paying their own orders. TableOrders keeps items, quantities, notes, and table status in one shared view.',
  },
  {
    process: 'Closing large tables',
    estimate: '10-16 hours',
    money: '250-480 EUR',
    detail:
      'Without a shared table view, the waiter handling a large table had to reconstruct the full order at closing time. Who had what, who was ready to pay, which spot was about to free up — all of that lived in one person\'s head. The bill view has the full order ready before the guest asks.',
  },
  {
    process: 'Communicating orders between staff',
    estimate: '12-20 hours',
    money: '300-600 EUR',
    detail:
      'Passing an order to a colleague depended on memory. During busy service, that handoff got skipped — and it was usually the guest who noticed first. Unsent batches now stay visible until confirmed and marked handled.',
  },
  {
    process: 'End-of-day count',
    estimate: '8-14 hours',
    money: '200-420 EUR',
    detail:
      'Counting was done ticket by ticket — slow, detail-heavy work that fell on staff at the end of an already exhausting shift. Closed bills are now grouped by POS ID, ready for direct entry into the official POS.',
  },
];

const SERVICE_CHANGES = [
  'Waiters can see table state from any phone before walking back to the counter.',
  'Orders stay editable until the staff confirms the batch has been sent.',
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
  const totalHours = '48-76';
  const totalMoney = '1,200-2,280 EUR';

  return (
    <PageLayout>
      <section className="cs-story-hero">
        <div className="container">
          <RevealOnScroll>
            <div className="cs-story-hero__grid">
              <div className="cs-story-hero__copy">
                <div className="cs-hero__meta">
                  <span className="cs-badge">Case Study</span>
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

              <aside className="cs-impact-panel" aria-label="Estimated monthly impact">
                <p className="cs-impact-panel__label">Estimated monthly impact</p>
                <div className="cs-impact-panel__numbers">
                  <div>
                    <strong>{totalHours}h</strong>
                    <span>staff time saved</span>
                  </div>
                  <div>
                    <strong>{totalMoney}</strong>
                    <span>operational value</span>
                  </div>
                </div>
                <p className="cs-impact-panel__note">
                  Working estimates based on repeated manual tasks, not audited financial reporting. The point is simple: the savings come from boring service work that happens every week.
                </p>
              </aside>
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

      <section className="cs-savings-section">
        <div className="container">
          <RevealOnScroll>
            <div className="cs-workflow-header">
              <p className="cs-eyebrow">The old processes</p>
              <h2 className="cs-section-title">The money was hiding inside small repeated tasks.</h2>
              <p className="cs-section-body">
                None of these problems looked dramatic on their own. Together, they created a constant tax on service: minutes lost during the rush, mental load carried by senior staff, and extra closing work after guests were gone.
              </p>
            </div>
            <div className="cs-savings-grid">
              {MONTHLY_SAVINGS.map((item, index) => (
                <article className="cs-saving-card" key={item.process}>
                  <div className="cs-saving-card__top">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <h3>{item.process}</h3>
                  </div>
                  <p>{item.detail}</p>
                  <div className="cs-saving-card__metrics">
                    <div>
                      <strong>{item.estimate}</strong>
                      <span>saved / month</span>
                    </div>
                    <div>
                      <strong>{item.money}</strong>
                      <span>value / month</span>
                    </div>
                  </div>
                </article>
              ))}
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
                  TableOrders does not issue fiscal receipts, calculate tax, or process payments. It organizes the work that happens before the official POS: table state, order batches, bill review, splitting, closing, and daily POS entry totals.
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
