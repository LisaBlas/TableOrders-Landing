import RevealOnScroll from '../ui/RevealOnScroll';
import Button from '../ui/Button';

export default function WorkflowCTA({
  id,
  eyebrow = 'Bring the messy version',
  heading = 'Show me your current service workflow.',
  body = 'Bring the paper notes, POS quirks, bill split habits, and end-of-day routine. I will show you honestly where TableOrders fits and where it does not.',
  emailLabel = 'alvizblas@gmail.com',
}) {
  return (
    <section className="workflow-cta-section" id={id}>
      <div className="container">
        <RevealOnScroll>
          <div className="workflow-cta">
            <p className="workflow-cta__kicker">{eyebrow}</p>
            <h2 className="workflow-cta__heading">{heading}</h2>
            <p className="workflow-cta__body">{body}</p>
            <div className="workflow-cta__actions">
              <Button to="/contact">Book a call</Button>
              <a href="mailto:alvizblas@gmail.com" className="workflow-cta__email">
                {emailLabel}
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
