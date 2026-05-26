import RevealOnScroll from '../ui/RevealOnScroll';
import Button from '../ui/Button';
import FitWorkflowSteps from './FitWorkflowSteps';
import { FIT_STEPS } from './homepageData';

export default function FitSection() {
  return (
    <section className="section section--dots" id="demo">
      <div className="container">
        <RevealOnScroll>
          <div className="demo-workflow">
            <div className="demo-workflow__intro">
              <p className="demo-eyebrow">This fits you if</p>
              <h2 className="demo-heading">You lose time and money on manual tasks.</h2>
              <p className="demo-subtext">
                A missed item, a forgotten round — small mistakes that quietly cost money.
                And behind every shift close: recalculating splits, totalling tickets,
                rebuilding what already happened by hand.
              </p>
              <Button to="/how-it-works" variant="link">How it works</Button>
            </div>

            <FitWorkflowSteps steps={FIT_STEPS} />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
