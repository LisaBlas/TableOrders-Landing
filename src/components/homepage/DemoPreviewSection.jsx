import RevealOnScroll from '../ui/RevealOnScroll';
import DemoPhone from '../ui/DemoPhone';
import Button from '../ui/Button';

export default function DemoPreviewSection() {
  return (
    <section className="section demo-preview-section" id="demo-preview">
      <div className="container">
        <RevealOnScroll>
          <div className="demo-preview">
            <div className="demo-preview__copy">
              <p className="demo-preview__eyebrow">Live preview</p>
              <h2 className="demo-preview__heading">See TableOrders in action.</h2>
              <p className="demo-preview__subtext">
                Open a table, take an order, split a bill {'—'} the real app, right here. No login needed.
              </p>
              <Button
                href="https://lisablas.github.io/TableOrders/demo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try the live version now!
              </Button>
            </div>
            <DemoPhone loading="lazy" />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
