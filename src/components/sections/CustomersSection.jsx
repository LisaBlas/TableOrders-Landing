import { Link } from 'react-router-dom';
import RevealOnScroll from '../ui/RevealOnScroll';

const clientTypes = [
  { icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z', name: 'Restaurants & Cafes' },
  { icon: 'M8 14s1.5 2 4 2 4-2 4-2', circle: 'M12 12 r10', name: 'Studios & Fitness Centers' },
  { icon: 'M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z', name: 'Salons & Spas' },
  { icon: 'M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16', rect: 'M2 7 h20 v14 rx2 ry2', name: 'Service Providers' }
];

export default function CustomersSection() {
  return (
    <section className="section section--full section--alt section--glow" id="customers">
      <div className="container">
        <RevealOnScroll>
          <p className="section-label">Who this is for</p>
          <h2 className="section-title">Local service businesses</h2>
          <p className="section-subtitle">If you run a local business and spend too much time on manual tasks, I can help.</p>
        </RevealOnScroll>

        <RevealOnScroll className="credibility-card">
          <div className="credibility-card__content">
            <h3 className="credibility-card__title">Why I understand your business</h3>
            <p className="credibility-card__text">
              I've spent years working <em>in</em> local businesses—restaurants, studios, service providers—and as a UX designer and developer <em>for</em> them.
              I know the problems firsthand: phone tag for bookings, manual reminders, outdated websites that drive customers away.
            </p>
            <p className="credibility-card__text">
              The tools I build aren't theoretical. They solve real problems I've seen (and dealt with) repeatedly.
            </p>
            <Link to="/about" className="credibility-card__link">
              More about my background →
            </Link>
          </div>
        </RevealOnScroll>

        <div className="clients-list">
          {clientTypes.map((client, i) => (
            <RevealOnScroll key={i} className="client-tag">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {client.circle && <circle cx="12" cy="12" r="10"/>}
                {client.rect && <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>}
                <path d={client.icon}/>
              </svg>
              {client.name}
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
