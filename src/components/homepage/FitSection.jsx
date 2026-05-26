import RevealOnScroll from '../ui/RevealOnScroll';
import Button from '../ui/Button';
import { WORKFLOW_STEPS } from './homepageData';

export default function FitSection() {
  return (
    <section className="section section--dots" id="demo">
      <div className="container">
        <RevealOnScroll>
          <div className="demo-workflow">
            <div className="demo-workflow__intro">
              <p className="demo-eyebrow">How it works</p>
              <h2 className="demo-heading">Table to bill in four steps.</h2>
              <p className="demo-subtext">
                TableOrders handles the coordination layer — table state, orders,
                bill splitting, and daily POS totals. Your existing POS stays in place.
              </p>
              <Button to="/how-it-works" variant="link">See the full workflow</Button>
            </div>

            <div className="demo-workflow__steps" aria-label="How TableOrders works">
              {WORKFLOW_STEPS.map((step) => (
                <div className="demo-workflow__step" key={step.step}>
                  <span className="demo-workflow__mark" aria-hidden="true">
                    {step.step}
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
