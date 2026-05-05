import RevealOnScroll from '../ui/RevealOnScroll';
import Button from '../ui/Button';
import DemoPhone from '../ui/DemoPhone';

export default function DemoSection() {
  return (
    <section className="section section--dots" id="demo">
      <div className="container">
        <RevealOnScroll>
          <div className="demo-layout">
            <div className="demo-text">
              <p className="demo-eyebrow">Interactive demo</p>
              <h2 className="demo-heading">See the workflow in two minutes</h2>
              <p className="demo-subtext">
                Seat a table, take orders, confirm sent batches, split the bill.
                Walk through exactly how TableOrders fits between your floor and
                your existing POS before you commit to anything.
              </p>
              <div className="demo-points">
                <span>One shared screen for the shift</span>
                <span>Works on phones your team already has</span>
                <span>No new hardware or setup session</span>
              </div>
              <Button
                href="https://lisablas.github.io/TableOrders/demo/"
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open full screen
              </Button>
            </div>

            <DemoPhone showCallouts />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
