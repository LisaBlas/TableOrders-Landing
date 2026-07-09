import RevealOnScroll from '../ui/RevealOnScroll';
import DemoPhone from '../ui/DemoPhone';
import { HeroCopyTop, HeroCopyBottom } from './HeroCopy';

export default function PainSection() {
  return (
    <section className="section section--full section--diagonal" id="top">
      <div className="container">
        <RevealOnScroll>
          <div className="pain-layout">
            <HeroCopyTop />
            <DemoPhone className="pain-hero-demo" loading="eager" />
            <HeroCopyBottom />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
