import RevealOnScroll from '../ui/RevealOnScroll';
import { HeroCopyTop, HeroCopyBottom } from './HeroCopy';
import HeroPhotoStrip from './HeroPhotoStrip';

const tickerItems = [
  'Live tables',
  'Fast orders',
  'Sent batches',
  'Bill splitting',
  'Daily sales',
  'Works alongside your POS',
];

export default function PainSection() {
  return (
    <section className="section section--full section--diagonal" id="top">
      <div className="container">
        <RevealOnScroll>
          <div className="pain-hero-grid">
            <div className="pain-layout">
              <HeroCopyTop />
              <HeroCopyBottom />
            </div>
            <HeroPhotoStrip />
          </div>
        </RevealOnScroll>
      </div>
      <div className="hero-ticker" aria-label="TableOrders capabilities">
        <div className="hero-ticker__track" aria-hidden="true">
          {Array.from({ length: 6 }, (_, groupIndex) => (
            <div className="hero-ticker__group" key={groupIndex}>
              {tickerItems.map((item) => (
                <div className="hero-ticker__item" key={item}>
                  <span>{item}</span><i aria-hidden="true" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
