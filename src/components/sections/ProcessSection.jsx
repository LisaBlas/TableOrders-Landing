import RevealOnScroll from '../ui/RevealOnScroll';

const steps = [
  {
    number: '01',
    title: 'Free Website Review',
    description: 'I review your current setup and identify what\'s slowing you down or costing you customers.'
  },
  {
    number: '02',
    title: 'Identify Automation Opportunities',
    description: 'We discuss what can be automated—booking, reminders, lead capture—and I propose a tailored solution.'
  },
  {
    number: '03',
    title: 'Build Your System',
    description: 'I build a custom system designed specifically for your business. Simple, focused, and built to last.'
  },
  {
    number: '04',
    title: 'Your Business Runs Smoothly',
    description: 'Bookings happen automatically, reminders go out on time, and you save hours every week.'
  }
];

export default function ProcessSection() {
  return (
    <section className="section section--full section--lines" id="process">
      <div className="container">
        <RevealOnScroll>
          <p className="section-label">How it works</p>
          <h2 className="section-title">Working together</h2>
          <p className="section-subtitle">Simple, transparent process from review to launch.</p>
        </RevealOnScroll>

        <div className="process-grid">
          {steps.map((step, i) => (
            <RevealOnScroll key={i} className="process-step">
              <p className="process-step__number">{step.number}</p>
              <h3 className="process-step__title">{step.title}</h3>
              <p className="process-step__desc">{step.description}</p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
