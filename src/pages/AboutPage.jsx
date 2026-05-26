import PageLayout from '../components/layout/PageLayout';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import WorkflowCTA from '../components/homepage/WorkflowCTA';
import BookACallButton from '../components/ui/BookACallButton';
import blasPhoto from '../assets/blas.avif';

const SHIFT_SIGNALS = [
  { label: 'Open tables', value: '6', tone: 'neutral' },
  { label: 'Unsent items', value: '14', tone: 'warn' },
  { label: 'Split bills', value: '3', tone: 'accent' },
  { label: 'POS handoff', value: 'Pending', tone: 'muted' },
];

const SHIFT_STEPS = [
  {
    time: '17:40',
    title: 'Before service',
    pain: 'Tables open fast, but the team is already tracking state in heads, paper, and POS screens that were not designed for floor movement.',
    fix: 'TableOrders keeps a mobile overview of open, seated, ordered, and confirmed tables before the room fills up.',
  },
  {
    time: '19:10',
    title: 'First rush',
    pain: 'Notes, quantities, variants, and custom items start to pile up. One missed modifier can turn into a kitchen correction later.',
    fix: 'Waitstaff can take orders from phones or tablets, keep unsent orders visible, and confirm before sending the next step.',
  },
  {
    time: '21:20',
    title: 'Payment pressure',
    pain: 'Equal splits, item splits, vouchers, and round-by-round payments can slow the table right when seats need to turn.',
    fix: 'Internal bills stay reviewable, splittable, voucher-aware, and ready to close without pretending to replace the official POS.',
  },
  {
    time: '23:05',
    title: 'End-of-day handoff',
    pain: 'The team still needs clean daily totals by POS ID, not another messy reconciliation job after service.',
    fix: 'Closed bills aggregate into practical POS crossing totals for manual entry into the fiscal POS.',
  },
];

const STACK_ITEMS = [
  {
    title: 'Hospitality floor experience',
    body: 'I have worked as a waiter and bartender, so the product starts from real service pressure instead of a clean whiteboard.',
  },
  {
    title: '10+ years UX design',
    body: 'The interface decisions come from years of designing workflows, reducing ambiguity, and making complex actions feel obvious.',
  },
  {
    title: 'Direct builder contact',
    body: 'When you book a walkthrough, you talk to the person who built the app and can change it.',
  },
  {
    title: 'Focused restaurant adaptation',
    body: 'Specific POS ID patterns, table habits, voucher flows, and hybrid retail setups can be handled without a bloated roadmap.',
  },
];

const PROCESS_ITEMS = [
  {
    number: '01',
    title: 'You show the real workflow',
    body: 'Paper notes, POS quirks, split habits, end-of-day routines. The messy version is the useful version.',
  },
  {
    number: '02',
    title: 'We map the operational friction',
    body: 'We identify where staff lose state: ordering, confirming, splitting, closing, or preparing POS totals.',
  },
  {
    number: '03',
    title: 'I show the fit honestly',
    body: 'You see where TableOrders helps, where your existing POS stays responsible, and what should not be automated.',
  },
  {
    number: '04',
    title: 'We adapt only what matters',
    body: 'If the fit is strong, the setup stays practical: focused adjustments, direct feedback, and no ceremony.',
  },
];

const FIT_ITEMS = [
  'Small restaurants with table service',
  'Wine bars, cafes, and hybrid hospitality floors',
  'Teams that already have an official POS',
  'Staff who need mobile ordering and table state clarity',
  'Owner-operated venues that want direct builder access',
];

const NOT_FIT_ITEMS = [
  'Replacing your fiscal POS',
  'Tax, receipt, or compliance handling',
  'Payment processing',
  'Delivery, reservations, inventory, or staff scheduling',
  'A full restaurant ERP',
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <PageLayout>
      <section className="about-shift-hero">
        <div className="container">
          <RevealOnScroll>
            <div className="about-shift-hero__grid">
              <div className="about-shift-hero__copy">
                <p className="about-kicker">Founder / operator / builder</p>
                <h1 className="about-shift-hero__title">Built by someone who knows what a busy table section feels like.</h1>
                <p className="about-shift-hero__body">
                  I'm Blas, a UX designer and builder in Berlin. Before TableOrders, I worked service. This app exists because table coordination should not depend on paper, memory, and shouting across the room.
                </p>
                <p className="about-shift-hero__body">
                  TableOrders is already live at Kaeserei Camidi in Berlin. It stays intentionally focused: a lightweight operational layer between waitstaff and the official POS.
                </p>
                <div className="about-shift-hero__actions">
                  <BookACallButton />
                  <a href="mailto:alvizblas@gmail.com" className="about-email-link">
                    Email Blas
                  </a>
                </div>
              </div>

              <div className="about-shift-console" aria-label="Restaurant shift snapshot">
                <div className="about-founder-card">
                  <img className="about-founder-card__photo" src={blasPhoto} alt="Blas Alviz" />
                  <div>
                    <p className="about-founder-card__label">Direct builder</p>
                    <h2 className="about-founder-card__name">Blas Alviz</h2>
                    <p className="about-founder-card__meta">Berlin, Germany</p>
                  </div>
                </div>
                <div className="about-shift-board">
                  <div className="about-shift-board__top">
                    <span>Saturday service</span>
                    <strong>19:42</strong>
                  </div>
                  <div className="about-shift-board__grid">
                    {SHIFT_SIGNALS.map((signal) => (
                      <div className={`about-signal about-signal--${signal.tone}`} key={signal.label}>
                        <span>{signal.label}</span>
                        <strong>{signal.value}</strong>
                      </div>
                    ))}
                  </div>
                  <div className="about-shift-note">
                    <span>Floor note</span>
                    <p>Table 8 wants to split by items. Table 11 still has unsent drinks. POS entry waits until closed bills are clean.</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="about-shift-section">
        <div className="container">
          <RevealOnScroll>
            <div className="about-section-header">
              <p className="about-kicker">Why I built it</p>
              <h2 className="about-section-title">The product follows the pressure of a real service shift.</h2>
              <p className="about-section-body">
                The About page should not ask you to trust a biography. It should show the operational problems that shaped the product.
              </p>
            </div>
          </RevealOnScroll>

          <div className="about-shift-story">
            <div className="about-shift-story__rail" aria-hidden="true" />
            {SHIFT_STEPS.map((step) => (
              <RevealOnScroll key={step.time}>
                <article className="about-shift-step">
                  <div className="about-shift-step__time">{step.time}</div>
                  <div className="about-shift-step__content">
                    <h3>{step.title}</h3>
                    <div className="about-shift-step__panels">
                      <div className="about-shift-panel about-shift-panel--pain">
                        <span>What breaks</span>
                        <p>{step.pain}</p>
                      </div>
                      <div className="about-shift-panel about-shift-panel--fix">
                        <span>What TableOrders does</span>
                        <p>{step.fix}</p>
                      </div>
                    </div>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="about-stack-section">
        <div className="container">
          <RevealOnScroll>
            <div className="about-stack-grid">
              <div className="about-section-header about-section-header--sticky">
                <p className="about-kicker">Why that combination matters</p>
                <h2 className="about-section-title">Small on purpose, practical by design.</h2>
                <p className="about-section-body">
                  A one-person product is a risk when it hides behind generic software language. It is an advantage when the scope is clear, the builder is reachable, and the product solves a narrow operational job well.
                </p>
              </div>
              <div className="about-stack">
                {STACK_ITEMS.map((item, index) => (
                  <div className="about-stack-item" key={item.title}>
                    <span className="about-stack-item__num">{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="about-process-section">
        <div className="container">
          <RevealOnScroll>
            <div className="about-section-header">
              <p className="about-kicker">What working together looks like</p>
              <h2 className="about-section-title">A walkthrough, not a sales performance.</h2>
            </div>
            <div className="about-process-grid">
              {PROCESS_ITEMS.map((item) => (
                <article className="about-process-card" key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="about-fit-section">
        <div className="container">
          <RevealOnScroll>
            <div className="about-fit-matrix">
              <div className="about-fit-matrix__intro">
                <p className="about-kicker">Fit boundaries</p>
                <h2 className="about-section-title">The right tool only works when the edge is clear.</h2>
                <p className="about-section-body">
                  TableOrders helps coordinate table service around your existing POS. It does not try to become the whole restaurant system.
                </p>
              </div>
              <div className="about-fit-list about-fit-list--yes">
                <h3>Good fit</h3>
                {FIT_ITEMS.map((item) => (
                  <div className="about-fit-row" key={item}>
                    <span><CheckIcon /></span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <div className="about-fit-list about-fit-list--no">
                <h3>Not the tool for</h3>
                {NOT_FIT_ITEMS.map((item) => (
                  <div className="about-fit-row" key={item}>
                    <span><CrossIcon /></span>
                    <p>{item}</p>
                  </div>
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
