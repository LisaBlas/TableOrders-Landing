import RevealOnScroll from '../ui/RevealOnScroll';
import DemoPhone from '../ui/DemoPhone';
import HeroCopy from './HeroCopy';

export default function PainSection() {
  return (
    <section className="section section--full section--diagonal" id="top">
      <div className="container">
        <RevealOnScroll>
          <div className="pain-layout">
            <HeroCopy />
            <DemoPhone className="pain-hero-demo" loading="eager" />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
