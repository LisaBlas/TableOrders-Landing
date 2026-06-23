import PageLayout from '../components/layout/PageLayout';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import WorkflowCTA from '../components/homepage/WorkflowCTA';
import DemoPhone from '../components/ui/DemoPhone';

const STEPS = [
  {
    num: '01',
    eyebrow: 'Ordering',
    title: 'Build and send orders from any phone at the table',
    staff: 'Waitstaff open a table and add food, drinks, wine, and shop items — with variants, notes, quantities, and custom entries — without committing until the visit is done.',
    problem: 'Orders built mid-conversation do not go out half-finished. Staff adjust freely before sending the batch to bar, kitchen, or counter.',
    result: 'Confirmed batches stay visible to the whole team until marked handled. Late additions go out as a separate order rather than a verbal add-on.',
  },
  {
    num: '02',
    eyebrow: 'Paying',
    title: 'Splits and table closing built into the same record',
    staff: 'Staff review the internal bill, split by guest count, split by item, handle round-by-round payment, apply vouchers, and close the table — all in one flow.',
    problem: 'End-of-meal questions — who owes what, which round is settled, where the voucher applies — are answered inside the operational record, not reconstructed from memory.',
    result: 'Closed tables become internal paid bills with full split history. Fiscal receipts stay where they belong: in your official POS.',
  },
  {
    num: '03',
    eyebrow: 'Table states',
    title: 'The whole floor visible on any device at a glance',
    staff: 'Staff open a table, seat guests, and read every table\'s current state: open, seated, waiting on unconfirmed items, or confirmed.',
    problem: 'No one has to call across the room to check whether table 7 is handled or whether the outside section is still waiting.',
    result: 'The floor becomes a shared live board updated across every phone and tablet already in the team\'s hands.',
  },
  {
    num: '04',
    eyebrow: 'Daily sales & POS',
    title: 'End-of-day POS entry prepared, not reconstructed',
    staff: 'Managers open Daily Sales, review closed bills for the day, and see item quantities already aggregated by POS ID — grouped for direct POS entry.',
    problem: 'The team no longer rebuilds the day from paper notes, split-payment memory, and scattered receipts.',
    result: 'Staff mark each line as added to POS and flag any missing IDs. Your POS stays the fiscal source of truth; TableOrders handles the operational total.',
  },
  {
    num: '05',
    eyebrow: 'Analytics',
    title: 'Revenue trends and top sellers across any time period',
    staff: 'Managers select any date range and see revenue over time, best and worst selling items, and aggregated sales figures — all derived from the closed bills already in the system.',
    problem: 'Performance questions that used to mean exporting spreadsheets or counting paper have a direct answer inside the same tool the floor uses every shift.',
    result: 'Sales trends, slow movers, and revenue patterns are visible without leaving TableOrders — giving owners the data to adjust menus, staffing, and service decisions.',
  },
];

const CHAOS_CASES = [
  'Voucher amounts',
  'Split payment state',
  'Sent order history',
  'Closed bill records',
  'Daily sales by POS ID',
];


export default function HowItWorksPage() {
  return (
    <PageLayout>
      <section className="section section--diagonal hiw-hero">
        <div className="container">
          <RevealOnScroll>
            <div className="hiw-hero__copy hiw-hero__copy--centered">
              <p className="hiw-eyebrow">Service workflow</p>
              <h1 className="hiw-hero__title">
                See how a table moves from seated to closed without paper notes.
              </h1>
              <p className="hiw-hero__subtitle">
                TableOrders gives waitstaff a shared phone-based workflow for tables, orders, splits, and daily POS entry while your official POS stays responsible for receipts, tax, and payment.
              </p>
              <div className="hiw-hero__nav">
                {STEPS.map((step) => (
                  <a
                    key={step.num}
                    href={`#step-${step.num}`}
                    className="hiw-hero__nav-chip"
                  >
                    <span className="hiw-hero__nav-chip__num">{step.num}</span>
                    <span className="hiw-hero__nav-chip__label">{step.eyebrow}</span>
                  </a>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section id="service-flow" className="section section--dots hiw-steps-section">
        <div className="container">
          <RevealOnScroll>
            <div className="hiw-section-header">
              <p className="hiw-eyebrow">During service</p>
              <h2 className="hiw-section-title">The operating flow your staff actually uses</h2>
              <p className="hiw-section-subtitle">
                Follow the main service moments from opening a table to preparing daily POS totals.
              </p>
            </div>
          </RevealOnScroll>

          <div className="hiw-steps">
            {STEPS.map((step) => (
              <RevealOnScroll key={step.num}>
                <article id={`step-${step.num}`} className="hiw-step">
                  <div className="hiw-step__header">
                    <span className="hiw-step__num">{step.num}</span>
                    <div>
                      <p className="hiw-step__eyebrow">{step.eyebrow}</p>
                      <h3 className="hiw-step__title">{step.title}</h3>
                    </div>
                  </div>
                  <div className="hiw-step__grid">
                    <div className="hiw-step__col">
                      <span className="hiw-step__label">Staff action</span>
                      <p>{step.staff}</p>
                    </div>
                    <div className="hiw-step__col">
                      <span className="hiw-step__label">Problem solved</span>
                      <p>{step.problem}</p>
                    </div>
                    <div className="hiw-step__col">
                      <span className="hiw-step__label">Operational result</span>
                      <p>{step.result}</p>
                    </div>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section hiw-try-section">
        <div className="container">
          <RevealOnScroll>
            <div className="hiw-try">
              <div className="hiw-try__copy">
                <p className="hiw-eyebrow">Try it yourself</p>
                <h2 className="hiw-section-title">The real workflow, live in your browser.</h2>
                <p className="hiw-section-subtitle">
                  Tap through a table, add orders, split a bill, and close the shift — no login needed.
                </p>
              </div>
              <DemoPhone loading="lazy" />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section section--glow hiw-chaos-section">
        <div className="container">
          <RevealOnScroll>
            <div className="hiw-chaos-pills-block">
              <p className="hiw-eyebrow">When service gets messy</p>
              <h2 className="hiw-section-title">The details that usually live in someone&apos;s head</h2>
              <div className="hiw-handoff__checks">
                {CHAOS_CASES.map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section section--alt hiw-handoff-section">
        <div className="container">
          <RevealOnScroll>
            <div className="hiw-compare-wrapper">
              <div className="hiw-compare-header">
                <p className="hiw-eyebrow">Where it fits</p>
                <h2 className="hiw-section-title">Don&apos;t replace your system. Add TableOrders to simplify it.</h2>
              </div>
              <div className="hiw-compare">
                <div className="hiw-compare__col">
                  <p className="hiw-compare__col-title">Replacing your POS</p>
                  <ul className="hiw-compare__list">
                    <li>Months of evaluation and migration</li>
                    <li>Full team retraining</li>
                    <li>Hardware to source and install</li>
                    <li>Weeks before you&apos;re operational</li>
                    <li>Hardware costs, subscription fees, and commissions on every sale</li>
                  </ul>
                </div>
                <div className="hiw-compare__col hiw-compare__col--for">
                  <p className="hiw-compare__col-title">Adding TableOrders</p>
                  <ul className="hiw-compare__list">
                    <li>One subscription, cancel anytime</li>
                    <li>Set up in a day</li>
                    <li>No hardware required</li>
                    <li>Sales record analytics included</li>
                  </ul>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <WorkflowCTA />
    </PageLayout>
  );
}
