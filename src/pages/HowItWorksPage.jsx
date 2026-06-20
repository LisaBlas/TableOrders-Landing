import PageLayout from '../components/layout/PageLayout';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import Button from '../components/ui/Button';
import WorkflowCTA from '../components/homepage/WorkflowCTA';
import BookACallButton from '../components/ui/BookACallButton';
import DemoPhone from '../components/ui/DemoPhone';

const STEPS = [
  {
    num: '01',
    eyebrow: 'Live floor state',
    title: 'Every table has a visible status',
    staff: 'Staff open a table, seat guests, and see whether a table is empty, seated, waiting on unconfirmed items, or already confirmed.',
    problem: 'No one has to ask whether table 7 has been handled or whether the outside section is still waiting.',
    result: 'The room becomes a shared operational board across the phones and tablets already on the floor.',
  },
  {
    num: '02',
    eyebrow: 'Order capture',
    title: 'Orders stay editable until staff confirm them',
    staff: 'Waitstaff add food, drinks, wine, shop items, notes, variants, quantities, and custom items directly from the table.',
    problem: 'A waiter can build the order while talking to guests without committing half-finished changes too early.',
    result: 'Unsent items are explicit, visible, and ready to confirm when the table visit is complete.',
  },
  {
    num: '03',
    eyebrow: 'Order tracking',
    title: 'Sent orders remain visible until handled',
    staff: 'A confirmed order is sent and can be grouped by destination and marked handled after the team acts on it.',
    problem: 'The app reduces the mental checklist of what was already called, carried, or prepared.',
    result: 'Late drinks, second rounds, and food additions become separate orders instead of messy paper add-ons.',
  },
  {
    num: '04',
    eyebrow: 'Bill review',
    title: 'Splits are part of the workflow, not an afterthought',
    staff: 'Staff review the internal bill, split evenly, split by item, handle round-based payment, apply vouchers, and close the table.',
    problem: 'The common end-of-meal chaos is handled inside the same operational record.',
    result: 'Closed tables become internal paid bills for daily review while fiscal receipts stay in the official POS.',
  },
  {
    num: '05',
    eyebrow: 'Daily sales tracking',
    title: 'The end-of-day handoff is prepared automatically',
    staff: 'Managers review closed bills, see quantities aggregated by POS ID, flag missing POS IDs, and mark entries as added.',
    problem: 'The team does not reconstruct the day from paper notes, memory, and scattered payment moments.',
    result: 'Your POS remains the fiscal source of truth while TableOrders gives staff the operational totals to enter.',
  },
];

const CHAOS_CASES = [
  {
    title: 'Voucher amounts',
    body: 'Applied to the internal bill before the table closes, so the remaining split already accounts for them.',
  },
  {
    title: 'Split payment state',
    body: 'Who paid what — by item, round, or equal share — stays on the bill until the table is fully closed.',
  },
  {
    title: 'Sent order history',
    body: 'Every confirmed batch stays visible and trackable until staff mark it handled.',
  },
  {
    title: 'Closed bill records',
    body: 'Each closed table becomes an internal paid bill used for daily review and POS entry.',
  },
  {
    title: 'Daily sales by POS ID',
    body: 'Totals are aggregated automatically, with missing POS IDs flagged before the team enters them.',
  },
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
              <div className="hiw-hero__actions">
                <Button href="#service-flow" variant="primary">Walk the flow</Button>
                <BookACallButton variant="secondary" />
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
                <article className="hiw-step">
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
            <div className="hiw-section-header">
              <p className="hiw-eyebrow">When service gets messy</p>
              <h2 className="hiw-section-title">The app tracks what staff would otherwise have to remember</h2>
              <p className="hiw-section-subtitle">
                These are the details that usually live in someone&apos;s head or get reconstructed at the end of the night.
              </p>
            </div>
          </RevealOnScroll>

          <div className="hiw-chaos-grid">
            {CHAOS_CASES.map((item) => (
              <RevealOnScroll key={item.title}>
                <article className="hiw-chaos-card">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              </RevealOnScroll>
            ))}
          </div>
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
