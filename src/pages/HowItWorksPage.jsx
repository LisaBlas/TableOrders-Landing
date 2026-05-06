import PageLayout from '../components/layout/PageLayout';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import Button from '../components/ui/Button';
import WorkflowCTA from '../components/homepage/WorkflowCTA';
import BookACallButton from '../components/ui/BookACallButton';

const SERVICE_FLOW = [
  {
    label: 'Table map',
    title: 'See the room before anyone asks',
    screen: 'Screenshot placeholder: table overview with open, seated, ordered, and confirmed tables.',
  },
  {
    label: 'Order draft',
    title: 'Capture the order at the table',
    screen: 'Screenshot placeholder: menu categories, item search, notes, variants, quantities, and unsent items.',
  },
  {
    label: 'Sent batch',
    title: 'Confirm once, then track the batch',
    screen: 'Screenshot placeholder: confirmed batch grouped by kitchen, bar, or counter with handled state.',
  },
  {
    label: 'Bill split',
    title: 'Close the table without recalculating',
    screen: 'Screenshot placeholder: bill review with equal split, item split, voucher-aware totals, and close action.',
  },
  {
    label: 'POS totals',
    title: 'End the shift with structured totals',
    screen: 'Screenshot placeholder: daily sales grouped by POS ID, closed bills, missing POS ID warning, and mark-added state.',
  },
];

const FEATURE_MOMENTS = [
  {
    eyebrow: '01 / Live floor state',
    title: 'Every table has a visible status',
    staff: 'Staff open a table, seat guests, and see whether a table is empty, seated, waiting on unconfirmed items, or already confirmed.',
    problem: 'No one has to ask whether table 7 has been handled or whether the outside section is still waiting.',
    result: 'The room becomes a shared operational board across the phones and tablets already on the floor.',
    visual: 'Screenshot placeholder: floor grid with inside/outside sections and mixed table states.',
  },
  {
    eyebrow: '02 / Order capture',
    title: 'Orders stay editable until staff confirm them',
    staff: 'Waitstaff add food, drinks, wine, shop items, notes, variants, quantities, and custom items directly from the table.',
    problem: 'A waiter can build the order while talking to guests without committing half-finished changes too early.',
    result: 'Unsent items are explicit, visible, and ready to confirm when the table visit is complete.',
    visual: 'Screenshot placeholder: table order screen showing unsent items, item controls, notes, and confirm button.',
  },
  {
    eyebrow: '03 / Batch tracking',
    title: 'Sent orders remain visible until handled',
    staff: 'A confirmed order becomes a sent batch that can be grouped by destination and marked handled after the team acts on it.',
    problem: 'The app reduces the mental checklist of what was already called, carried, or prepared.',
    result: 'Late drinks, second rounds, and food additions become separate batches instead of messy paper add-ons.',
    visual: 'Screenshot placeholder: sent batches with destination labels and handled/unhandled states.',
  },
  {
    eyebrow: '04 / Bill review',
    title: 'Splits are part of the workflow, not an afterthought',
    staff: 'Staff review the internal bill, split evenly, split by item, handle round-based payment, apply vouchers, and close the table.',
    problem: 'The common end-of-meal chaos is handled inside the same operational record.',
    result: 'Closed tables become internal paid bills for daily review while fiscal receipts stay in the official POS.',
    visual: 'Screenshot placeholder: bill split interface with selected items, guest totals, voucher line, and close table action.',
  },
  {
    eyebrow: '05 / Daily POS crossing',
    title: 'The end-of-day handoff is prepared automatically',
    staff: 'Managers review closed bills, see quantities aggregated by POS ID, flag missing POS IDs, and mark entries as added.',
    problem: 'The team does not reconstruct the day from paper notes, memory, and scattered payment moments.',
    result: 'Your POS remains the fiscal source of truth while TableOrders gives staff the operational totals to enter.',
    visual: 'Screenshot placeholder: daily sales screen with POS IDs, aggregated quantities, restore action, and added-to-POS state.',
  },
];

const CHAOS_CASES = [
  {
    title: 'Guests add drinks after food was sent',
    body: 'New items become a separate unsent order and then a separate sent batch. The earlier food batch stays intact.',
  },
  {
    title: 'One guest pays with a voucher',
    body: 'Voucher-aware totals keep the internal bill readable before the official POS handles payment and receipt.',
  },
  {
    title: 'A table wants to split items',
    body: 'Staff can divide the bill by guest, item, or round without rebuilding the order from scratch.',
  },
  {
    title: 'Wi-Fi drops during a busy moment',
    body: 'Local caching, polling sync, retry behavior, and reconnect conflict handling keep service inspectable.',
  },
  {
    title: 'A menu item is missing a POS ID',
    body: 'Daily Sales flags the gap before the manager relies on the totals for manual POS entry.',
  },
  {
    title: 'The table closes while the shift keeps moving',
    body: 'Closing a table creates an internal paid bill and returns the table to the room workflow.',
  },
];

const BOUNDARIES = [
  {
    title: 'TableOrders',
    body: 'Coordinates table states, order drafts, sent batches, internal bills, splits, and daily POS-entry totals.',
  },
  {
    title: 'Your official POS',
    body: 'Handles fiscal receipts, taxes, legal compliance, payments, and the final source-of-truth transaction record.',
  },
  {
    title: 'Your team',
    body: 'Keeps the existing kitchen, bar, counter, and guest-service routines that already work in the venue.',
  },
];

export default function HowItWorksPage() {
  return (
    <PageLayout>
      <section className="section section--diagonal hiw-hero">
        <div className="container">
          <RevealOnScroll>
            <div className="hiw-hero__grid">
              <div className="hiw-hero__copy">
                <p className="hiw-eyebrow">Service workflow</p>
                <h1 className="hiw-hero__title">
                  See how a table moves from seated to closed without paper notes.
                </h1>
                <p className="hiw-hero__subtitle">
                  TableOrders gives waitstaff a shared phone-based workflow for tables, orders, batches, splits, and daily POS entry while your official POS stays responsible for receipts, tax, and payment.
                </p>
                <div className="hiw-hero__actions">
                  <Button href="#service-flow" variant="primary">Walk the flow</Button>
                  <BookACallButton variant="secondary" />
                </div>
              </div>

              <div className="hiw-flow-preview" aria-label="TableOrders service flow screenshot placeholders">
                {SERVICE_FLOW.map((item, index) => (
                  <div className="hiw-flow-preview__item" key={item.label}>
                    <span className="hiw-flow-preview__num">{String(index + 1).padStart(2, '0')}</span>
                    <div className="hiw-flow-preview__screen">
                      <span>{item.label}</span>
                    </div>
                    <strong>{item.title}</strong>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section id="service-flow" className="section section--dots hiw-cockpit-section">
        <div className="container">
          <RevealOnScroll>
            <div className="hiw-section-header">
              <p className="hiw-eyebrow">During service</p>
              <h2 className="hiw-section-title">The operating flow your staff actually uses</h2>
              <p className="hiw-section-subtitle">
                Each screen should prove one operational moment: what staff do, what mistake it prevents, and what the manager gets back.
              </p>
            </div>
          </RevealOnScroll>

          <div className="hiw-cockpit">
            <div className="hiw-cockpit__screens" aria-label="Feature screenshot placeholders">
              {FEATURE_MOMENTS.map((moment) => (
                <RevealOnScroll key={moment.title}>
                  <article className="hiw-screen-card">
                    <div className="hiw-screen-card__visual">
                      <span className="hiw-screen-card__placeholder">{moment.visual}</span>
                    </div>
                  </article>
                </RevealOnScroll>
              ))}
            </div>

            <div className="hiw-cockpit__copy">
              {FEATURE_MOMENTS.map((moment) => (
                <RevealOnScroll key={moment.eyebrow}>
                  <article className="hiw-feature-card">
                    <p className="hiw-feature-card__eyebrow">{moment.eyebrow}</p>
                    <h3>{moment.title}</h3>
                    <div className="hiw-feature-card__grid">
                      <div>
                        <span>Staff action</span>
                        <p>{moment.staff}</p>
                      </div>
                      <div>
                        <span>Problem solved</span>
                        <p>{moment.problem}</p>
                      </div>
                      <div>
                        <span>Operational result</span>
                        <p>{moment.result}</p>
                      </div>
                    </div>
                  </article>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--glow hiw-chaos-section">
        <div className="container">
          <RevealOnScroll>
            <div className="hiw-section-header">
              <p className="hiw-eyebrow">When service gets messy</p>
              <h2 className="hiw-section-title">Built for the parts of a shift that usually live in someone&apos;s head</h2>
              <p className="hiw-section-subtitle">
                The product should feel real here. Use screenshots that show edge cases, not only the clean happy path.
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
            <div className="hiw-handoff">
              <div className="hiw-handoff__copy">
                <p className="hiw-eyebrow">End of shift</p>
                <h2 className="hiw-section-title">The payoff is a clean handoff into the POS</h2>
                <p className="hiw-section-subtitle">
                  TableOrders does not replace the official POS. It prepares the daily operational summary so staff can enter totals with less reconstruction and fewer blind spots.
                </p>
                <div className="hiw-handoff__checks">
                  <span>Closed internal bills</span>
                  <span>Aggregated POS IDs</span>
                  <span>Missing POS IDs flagged</span>
                  <span>Entries marked as added</span>
                </div>
              </div>
              <div className="hiw-handoff__visual">
                <span>Screenshot placeholder: Daily Sales / POS crossing summary with closed bills and POS ID aggregation.</span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section section--lines hiw-fit-section">
        <div className="container">
          <RevealOnScroll>
            <div className="hiw-fit">
              <div className="hiw-fit__header">
                <p className="hiw-eyebrow">Where it fits</p>
                <h2 className="hiw-section-title">A lightweight layer between waitstaff and the official POS</h2>
              </div>
              <div className="hiw-boundary-stack">
                {BOUNDARIES.map((item) => (
                  <article className="hiw-boundary" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <WorkflowCTA />
    </PageLayout>
  );
}
