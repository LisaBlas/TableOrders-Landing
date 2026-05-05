import RevealOnScroll from '../ui/RevealOnScroll';

const credentials = [
  {
    label: 'UX Designer',
    years: '10+ years',
    body: 'I start with the workflow, not the feature list. Every screen in TableOrders was designed against real service friction — not a pitch deck.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6M9 12h4M9 15h2" />
      </svg>
    ),
  },
  {
    label: 'Developer',
    years: 'Full-stack',
    body: 'I design and build — no handoff, no translation layer. If something breaks during service, it gets fixed without a sprint or a ticket.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    label: 'Hospitality background',
    years: 'Restaurants · Bars · Cafes',
    body: 'I know what breaks during a Saturday dinner rush. TableOrders was built from real hospitality workflows: tables, sections, bar orders, counter sales, and no patience for complicated software.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17h18M9 17V7m6 10V7M5 7h14" />
      </svg>
    ),
  },
];

export default function WhoIAmSection() {
  return (
    <section className="section section--lines" id="about">
      <div className="container">
        <RevealOnScroll>
          <div className="whois-section">
            <p className="whois-eyebrow">Why this works</p>
            <h2 className="whois-heading">
              Built by someone who's been<br />on both sides of the counter
            </h2>
            <p className="whois-intro">
              Most restaurant tech is built by people who've never run a service.
              I've spent years working with local hospitality teams as a UX designer,
              then built the tools myself — no agency, no VC roadmap.
            </p>

            <div className="whois-grid">
              {credentials.map((cred) => (
                <div key={cred.label} className="whois-card">
                  <div className="whois-card__icon">{cred.icon}</div>
                  <div className="whois-card__years">{cred.years}</div>
                  <h3 className="whois-card__label">{cred.label}</h3>
                  <p className="whois-card__body">{cred.body}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
