import { useState, useRef, useEffect } from 'react';
import PageLayout from '../components/layout/PageLayout';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import Button from '../components/ui/Button';
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

const SALES_RECORD_STEPS = [
  {
    num: '01',
    title: 'Track daily sales',
    dividerAfter: 'Making sense of sales',
    body: 'By hand and memory, staff had to write down every sale of kitchen dishes on an A4 paper at the end of every shift.',
  },
  {
    num: '02',
    title: 'Read the pile later',
    body: 'The owner tries to make sense of a pile of A4 paper to learn what sells better, and when.',
  },
  {
    num: '03',
    title: 'Rebuild item totals',
    body: 'Kitchen dishes, cheese plates, vouchers, and custom items have to be grouped back into useful totals after the service context is already gone.',
  },
  {
    num: '04',
    title: 'Compare unclear days',
    body: 'Busy evenings, quiet lunches, seasonal changes, and special events are hard to compare when the source is handwritten pages.',
  },
];

const TEAMWORK_STEPS = [
  {
    num: '01',
    title: 'Ask what already happened',
    body: '"Did you serve the drinks for table 2 yet?" "Has table 3 paid already? We need the space for new guests." These small checks happened throughout service.',
  },
  {
    num: '02',
    title: 'Hold table state in memory',
    body: 'Open tables, confirmed orders, payments, and everything else depended on the teams memory.',
  },
  {
    num: '03',
    title: 'Interrupt service to fix a mistake',
    body: 'When the room got busy, small uncertainties and mistakes turned into interruptions: checking notes, asking teammates, or walking back to the counter.',
  },
  {
    num: '04',
    title: 'Recover from missed handoffs',
    body: 'If one handoff was unclear, the team had to reconstruct what happened from memory, paper tickets, and conversations.',
  },
  {
    num: '05',
    title: 'No time, and compounding stress',
    body: 'As the room got busier, the team had less and less time to look after guests and the shift ended way later than expected. Stress kept piling on, creating more mistakes and more pressure on service.',
  },
];

const FIT_SIGNALS = [
  {
    title: 'Good fit',
    points: [
      'Your team moves between tables, counter, kitchen, and POS during service.',
      'Orders or bill changes are still tracked on paper, memory, or chat.',
      'Splits, vouchers, rounds, or custom items make closing slow.',
    ],
  },
  {
    title: 'Probably not yet',
    points: [
      'Your POS already handles table service, splitting, and daily category totals well.',
      'You mostly do counter service with little table state to coordinate.',
      'You need payments, fiscal receipts, inventory, reservations, or staff scheduling.',
    ],
  },
];

const NAV_ITEMS = [
  {
    label: 'Paper Tickets',
    desc: 'The table order starts as handwriting, memory, and separate notes.',
  },
  {
    label: 'Sales records',
    desc: 'Kitchen tickets are rebuilt into daily totals after service.',
  },
  {
    label: 'Teamwork',
    desc: 'Staff coordinate by walking, asking, checking, and recalculating.',
  },
];

const PAPER_TRAIL_SECTIONS = [
  {
    ...NAV_ITEMS[0],
    dividerLabel: 'Taking an order',
    coda: 'This happened every shift, for every table.',
    steps: PAPER_STEPS,
  },
  {
    ...NAV_ITEMS[1],
    dividerLabel: 'End-of-shift records',
    coda: 'The sales record existed, but only after manual reconstruction.',
    steps: SALES_RECORD_STEPS,
  },
  {
    ...NAV_ITEMS[2],
    dividerLabel: 'During service',
    coda: 'The team made it work, but coordination lived in interruptions.',
    steps: TEAMWORK_STEPS,
  },
];

const REQUIREMENTS = [
  {
    title: 'Keep the official POS',
    body: 'Fiscal receipts, tax, payments, and compliance stay in the system Camidi already uses.',
  },
  {
    title: 'Stop rewriting the same order',
    body: 'One table order should carry the work from table service into counter notes, kitchen handoff, bill review, and daily totals.',
  },
  {
    title: 'Make table state visible',
    body: 'Staff should know what is open, unsent, confirmed, split, or ready to close without walking back to ask.',
  },
  {
    title: 'Make closing less manual',
    body: 'Splits, vouchers, custom items, and POS category totals should be reviewable without rebuilding the table from paper.',
  },
];

export default function CamidiPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const blockRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.4;
      let next = 0;
      blockRefs.current.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top <= threshold) next = i;
      });
      setActiveIndex(next);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <div className="cs-paper-trail">
            <div className="cs-paper-trail__sticky-nav">
              <p className="cs-eyebrow">Before TableOrders</p>
              <ol className="cs-paper-trail__nav-list">
                {PAPER_TRAIL_SECTIONS.map((item, i) => (
                  <li
                    key={item.label}
                    className={`cs-paper-trail__nav-item${activeIndex === i ? ' cs-paper-trail__nav-item--active' : ''}`}
                  >
                    <span className="cs-paper-trail__nav-num">{i + 1}</span>
                    <span className="cs-paper-trail__nav-label">
                      {item.label}
                      <span className="cs-paper-trail__nav-desc">{item.desc}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="cs-paper-trail__content">
              {PAPER_TRAIL_SECTIONS.map((item, i) => (
                <div
                  className="cs-paper-trail__block"
                  key={item.label}
                    ref={(el) => { blockRefs.current[i] = el; }}
                >
                  <div className="cs-paper-trail__steps">
                    <div className="cs-paper-trail__divider cs-paper-trail__divider--top">
                      <span>{item.dividerLabel}</span>
                    </div>
                    {item.steps.map((step) => (
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
                    <p className="cs-paper-trail__coda">{item.coda}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cs-requirements-section">
        <div className="container">
          <RevealOnScroll>
            <div className="cs-requirements">
              <div className="cs-requirements__copy">
                <p className="cs-eyebrow">The requirement</p>
                <h2 className="cs-section-title">The fix had to respect the POS, not replace it.</h2>
                <p className="cs-section-body">
                  The problem was not the fiscal system. It was the service work around it: orders, handoffs, splits, table state, and the daily totals that still had to be entered cleanly.
                </p>
              </div>
              <div className="cs-requirements__list">
                {REQUIREMENTS.map((requirement, i) => (
                  <article className="cs-requirement" key={requirement.title}>
                    <span className="cs-requirement__num">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3>{requirement.title}</h3>
                      <p>{requirement.body}</p>
                    </div>
                  </article>
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
                <h2 className="cs-section-title">Decide by workflow shape, not restaurant size.</h2>
                <p className="cs-section-body">
                  TableOrders is strongest when the official POS should stay, but the work around it has become too manual for busy service.
                </p>
              </div>
              <div className="cs-fit-signals__grid">
                {FIT_SIGNALS.map((signal) => (
                  <article className="cs-fit-signal" key={signal.title}>
                    <h3>{signal.title}</h3>
                    <ul>
                      {signal.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
              <div className="cs-fit-signals__decision">
                <p>
                  If two or more good-fit points sound familiar, the fastest next step is a service walkthrough, not a generic demo.
                </p>
                <Button to="/contact">Contact me</Button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <WorkflowCTA
        eyebrow="Run your service flow against it"
        heading="Bring one messy service process."
        body="Paper orders, table splits, POS category totals, voucher habits, or closing routines. I will map where TableOrders would save time and where your current setup should stay as it is."
      />
    </PageLayout>
  );
}
