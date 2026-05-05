import RevealOnScroll from '../ui/RevealOnScroll';

const ITEMS = [
  'Used in active daily service across inside tables, outside tables, bar, and retail counter',
  "See every table's state at a glance — no more guessing across the room",
  'Track sent batches so nothing gets lost between floor, bar, and counter',
  'Split bills by guest, item, or round — without the end-table math',
  'Daily items grouped by POS ID so end-of-shift entry is fast and accurate',
];

export default function ProofSection() {
  return (
    <section className="section section--alt section--blobs" id="proof">
      <div className="container">
        <RevealOnScroll>
          <div className="proof-grid">
            <div className="proof-text">
              <p className="proof-eyebrow">Real restaurant. Real use.</p>
              <h2 className="proof-heading">
                Running a tighter service at Käserei Camidi —<br />
                without replacing the POS
              </h2>
              <p className="proof-body">
                TableOrders is the lightweight layer between the floor team and
                the official POS at Käserei Camidi. Staff manage tables, orders,
                and sent batches in the app; end-of-shift item totals are crossed
                into the legal POS.
              </p>
              <p className="proof-trust">
                Offline-aware: if connection drops, local state is preserved and synced on reconnect.
              </p>
              <ul className="proof-list">
                {ITEMS.map((item, i) => (
                  <li
                    key={i}
                    className="proof-list__item"
                    style={{ transitionDelay: `${i * 0.12}s` }}
                  >
                    <span className="proof-list__check">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="proof-venue-card">
              <div className="proof-venue-card__header">
                <span className="proof-venue-card__name">Käserei Camidi</span>
                <span className="proof-venue-card__location">Berlin</span>
              </div>
              <div className="proof-venue-card__type">Wine bar · Cheese shop · Table service</div>
              <div className="proof-venue-card__zones">
                <span className="proof-venue-card__zone-label">Active service zones</span>
                <div className="proof-venue-card__zone-list">
                  {['Inside', 'Outside', 'Bar', 'Counter'].map(z => (
                    <span key={z} className="proof-venue-card__zone">{z}</span>
                  ))}
                </div>
              </div>
              <p className="proof-venue-card__statement">
                TableOrders runs the floor during service.<br />
                The POS stays at the counter.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
