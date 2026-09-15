import RevealOnScroll from '../ui/RevealOnScroll';
import Button from '../ui/Button';

const FLOW = [
  { number: '01', title: 'Open a table', text: 'See the whole floor and open any table from the shared room view.' },
  { number: '02', title: 'Build the order', text: 'Add food, drinks, wine, notes, quantities, and custom items.' },
  { number: '03', title: 'Send and track', text: 'Keep unsent and sent batches visible until the team handles them.' },
  { number: '04', title: 'Split and close', text: 'Split by guest, item, or round, then prepare totals for the POS.' },
];

export default function DemoPreviewSection() {
  return (
    <section className="section demo-preview-section" id="demo-preview">
      <div className="container">
        <RevealOnScroll>
          <div className="demo-preview">
            <div className="demo-preview__copy">
              <p className="demo-preview__eyebrow">From door to daily totals</p>
              <h2 className="demo-preview__heading">One clear thread through the whole service.</h2>
              <p className="demo-preview__subtext">
                TableOrders keeps the operational record intact while the room moves. Your official POS stays responsible for payment, tax, and legal receipts.
              </p>
              <Button to="/features" variant="secondary">See every feature <span aria-hidden="true">→</span></Button>
            </div>

            <div className="service-flow">
              {FLOW.map((item) => (
                <article className="service-flow__item" key={item.number}>
                  <span className="service-flow__number">{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                  <span className="service-flow__arrow" aria-hidden="true">↘</span>
                </article>
              ))}
            </div>
          </div>

          <div className="demo-launch">
            <div className="demo-launch__signal"><span>●</span> Interactive demo</div>
            <p>Try the real workflow in your browser. No login needed.</p>
            <Button href="https://lisablas.github.io/TableOrders/demo/" target="_blank" rel="noopener noreferrer">
              Launch demo <span aria-hidden="true">↗</span>
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
