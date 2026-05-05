import PageLayout from '../components/layout/PageLayout';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import Button from '../components/ui/Button';
import DemoPhone from '../components/ui/DemoPhone';
import { CALENDLY_URL } from '../config/site';

const STEPS = [
  {
    number: '01',
    title: 'Open a table',
    body: 'Staff tap an empty table on the floor grid to seat guests. The table moves from open to seated immediately, visible to everyone on the floor.',
    detail: 'Tables show their current state: open, seated, ordered (with unconfirmed items), or confirmed (batch sent). Inside and outside sections can be tracked separately.',
  },
  {
    number: '02',
    title: 'Take orders on any phone or tablet',
    body: 'Staff open the table and add items from the menu — food, drinks, wine, shop items. Quantities, notes, variants, and custom items are all supported.',
    detail: "The order lives in the app as an unsent draft until the waiter confirms it. Orders don't get lost between the table visit and the kitchen counter.",
  },
  {
    number: '03',
    title: 'Confirm and track sent batches',
    body: 'When ready, the waiter confirms the unsent order into a sent batch. Sent batches stay visible until staff mark them as handled.',
    detail: "Batches can be grouped by destination: bar, kitchen, or counter. If an order hasn't been handled yet, it's still visible — no mental tracking required.",
  },
  {
    number: '04',
    title: 'Split and close the bill',
    body: 'Bills support equal splits by guest count, item-by-item splits, round-based splits, and vouchers. Staff close the table when done.',
    detail: 'Closed tables become internal paid bills for daily review. These are operational records — not legal fiscal receipts. The official POS handles those.',
  },
  {
    number: '05',
    title: 'Review daily totals for POS entry',
    body: 'At the end of the shift, Daily Sales shows all closed bills with items aggregated by POS ID. Staff enter the totals into the official POS and mark them as added.',
    detail: 'Quantities can be restored if a mistake is made. Items missing a POS ID are flagged. Nothing gets reconstructed from memory or paper.',
  },
];

const NOT_ITEMS = [
  {
    title: 'Not a fiscal POS',
    body: 'TableOrders does not issue legal receipts or handle tax calculations. Your existing POS stays responsible for those.',
  },
  {
    title: 'Not a payment processor',
    body: 'Payments happen at your POS. TableOrders creates internal operational records, not fiscal transactions.',
  },
  {
    title: 'Not a kitchen display system',
    body: 'TableOrders tracks sent batches but is not a dedicated KDS. Your team handles kitchen communication as before.',
  },
  {
    title: 'Not an enterprise platform',
    body: 'Built for small front-of-house teams. Fast to set up, works on phones you already have.',
  },
];

export default function HowItWorksPage() {
  return (
    <PageLayout>
      <section className="section section--diagonal hiw-hero">
        <div className="container">
          <RevealOnScroll>
            <div className="hiw-hero__inner">
              <p className="hiw-eyebrow">Practical walkthrough</p>
              <h1 className="hiw-hero__title">
                How TableOrders works during a real service
              </h1>
              <p className="hiw-hero__subtitle">
                From opening a table to entering daily totals into your POS — the full front-of-house workflow on phones your team already has.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section section--dots hiw-steps-section">
        <div className="container">
          <RevealOnScroll>
            <div className="hiw-steps">
              {STEPS.map((step, i) => (
                <div className="hiw-step" key={step.number}>
                  <div className="hiw-step__left">
                    <div className="hiw-step__num">{step.number}</div>
                    {i < STEPS.length - 1 && <div className="hiw-step__connector" aria-hidden="true" />}
                  </div>
                  <div className="hiw-step__content">
                    <h2 className="hiw-step__title">{step.title}</h2>
                    <p className="hiw-step__body">{step.body}</p>
                    <p className="hiw-step__detail">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section section--glow hiw-demo-section">
        <div className="container">
          <RevealOnScroll>
            <div className="hiw-demo">
              <div className="hiw-demo__text">
                <p className="hiw-eyebrow">Try it now</p>
                <h2 className="hiw-demo__title">See the workflow in the app</h2>
                <p className="hiw-demo__body">
                  The demo below runs a live version of TableOrders. Tap a table, add items, confirm the batch, and see how the bill view works. It runs on the same codebase as the production app.
                </p>
                <Button href={CALENDLY_URL} variant="primary" target="_blank" rel="noopener noreferrer">
                  Book a walkthrough
                </Button>
              </div>
              <DemoPhone showCallouts />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section section--alt hiw-not-section">
        <div className="container">
          <RevealOnScroll>
            <div className="hiw-not">
              <p className="hiw-eyebrow">To be clear</p>
              <h2 className="hiw-not__title">What TableOrders is not</h2>
              <div className="hiw-not__grid">
                {NOT_ITEMS.map((item) => (
                  <div className="hiw-not__item" key={item.title}>
                    <span className="hiw-not__x" aria-hidden="true">✕</span>
                    <div>
                      <strong className="hiw-not__item-title">{item.title}</strong>
                      <p>{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </PageLayout>
  );
}
