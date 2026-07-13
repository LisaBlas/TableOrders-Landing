import RevealOnScroll from '../ui/RevealOnScroll';
import { HeroCopyTop, HeroCopyBottom } from './HeroCopy';
import HeroPhotoStrip from './HeroPhotoStrip';

export default function PainSection() {
  return (
    <section className="section section--full section--diagonal" id="top">
      <div className="container">
        <RevealOnScroll>
          <div className="pain-layout">
            <HeroCopyTop />
            <HeroCopyBottom />
          </div>
          <HeroPhotoStrip />
        </RevealOnScroll>
      </div>
    </section>
  );
}
