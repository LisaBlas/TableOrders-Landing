import { useState } from 'react';
import RevealOnScroll from '../ui/RevealOnScroll';

const problems = [
  {
    icon: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z',
    title: 'Clients must call to book',
    detailTitle: 'Manual bookings',
    impacts: [
      { icon: '⏰', text: '4–6 hrs/week on phone tag' },
      { icon: '📉', text: 'Lost bookings (clients won\'t wait)' },
      { icon: '😤', text: 'Constant interruptions break focus' },
      { icon: '💸', text: 'Missed revenue from after-hours calls' }
    ],
    solution: 'Automated online booking → Clients book 24/7. No more phone tag. No more lost bookings.'
  },
  {
    icon: 'M12 12 m0 -10 a10 10 0 1 0 0 20 a10 10 0 1 0 0 -20',
    iconExtra: 'M12 8v4M12 16h.01',
    title: 'Outdated website reduces trust',
    detailTitle: 'Staff scheduling chaos',
    impacts: [
      { icon: '⏱️', text: '2–3 hrs/week coordinating schedules' },
      { icon: '📱', text: 'Staff texts at all hours' },
      { icon: '🔄', text: 'Scheduling conflicts and confusion' },
      { icon: '😓', text: 'Manual updates are error-prone' }
    ],
    solution: 'Automated scheduling system → Staff updates availability online. System syncs calendars. Zero conflicts.'
  },
  {
    icon: 'M7 11V7a5 5 0 0110 0v4',
    iconRect: 'M3 11h18v11a2 2 0 01-2 2H5a2 2 0 01-2-2V11z',
    title: 'Missed leads from contact forms',
    detailTitle: 'Table reservation hassle',
    impacts: [
      { icon: '⏰', text: '6–8 hrs/week managing reservations' },
      { icon: '📝', text: 'Paper booking causes double-bookings' },
      { icon: '📞', text: 'Phone calls interrupt service' },
      { icon: '😰', text: 'Unnecessary stress and mistakes' }
    ],
    solution: 'Digital reservation system → Real-time availability. Instant confirmations. SMS reminders reduce no-shows.'
  },
  {
    icon: 'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z',
    title: 'Expensive subscriptions',
    detailTitle: 'Quote delays',
    impacts: [
      { icon: '🏃', text: 'Competitors respond faster' },
      { icon: '⏱️', text: 'Manual quote creation takes too long' },
      { icon: '📧', text: 'Leads go cold while you\'re busy' },
      { icon: '💰', text: 'Lost revenue from slow follow-ups' }
    ],
    solution: 'Quote automation system → Lead submits form. Quote auto-generated. Email sent instantly. Auto follow-ups.'
  }
];

export default function ProblemsSection() {
  const [activeProblem, setActiveProblem] = useState(0);

  return (
    <section className="section section--full section--problems">
      <div className="container">
        <RevealOnScroll>
          <p className="section-label">Common problems I fix</p>
          <h2 className="section-title">Website issues easily fixed</h2>
          <p className="section-subtitle">Click each problem to see the solution.</p>
        </RevealOnScroll>

        <RevealOnScroll className="problems-interactive">
          {/* Left: Problem List */}
          <div className="problems-list">
            {problems.map((problem, i) => (
              <button
                key={i}
                className={`problem-item ${activeProblem === i ? 'problem-item--active' : ''}`}
                onClick={() => setActiveProblem(i)}
              >
                <div className="problem-item__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {problem.iconRect && <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>}
                    {problem.icon === 'M12 12 m0 -10 a10 10 0 1 0 0 20 a10 10 0 1 0 0 -20' ? (
                      <circle cx="12" cy="12" r="10"/>
                    ) : (
                      <path d={problem.icon}/>
                    )}
                    {problem.iconExtra && <path d={problem.iconExtra}/>}
                  </svg>
                </div>
                <span className="problem-item__title">{problem.title}</span>
              </button>
            ))}
          </div>

          {/* Right: Problem Details */}
          <div className="problems-detail">
            {problems.map((problem, i) => (
              <div
                key={i}
                className={`problem-detail ${activeProblem === i ? 'problem-detail--active' : ''}`}
              >
                <h3 className="problem-detail__title">{problem.detailTitle}</h3>
                <ul className="problem-detail__impacts">
                  {problem.impacts.map((impact, idx) => (
                    <li key={idx} className="problem-impact">
                      <span className="problem-impact__icon">{impact.icon}</span>
                      <span>{impact.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Solutions Section */}
        <RevealOnScroll className="problem-solutions">
          {problems.map((problem, i) => (
            <div
              key={i}
              className={`problem-solution ${activeProblem === i ? 'problem-solution--active' : ''}`}
            >
              <div className="problem-solution__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <div>
                <p className="problem-solution__label">Solution</p>
                <p className="problem-solution__text"><strong>{problem.solution.split(' → ')[0]}</strong> → {problem.solution.split(' → ')[1]}</p>
              </div>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
