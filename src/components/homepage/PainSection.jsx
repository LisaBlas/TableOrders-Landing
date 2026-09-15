import RevealOnScroll from '../ui/RevealOnScroll';
import { HeroCopyTop, HeroCopyBottom } from './HeroCopy';
import HeroPhotoStrip from './HeroPhotoStrip';

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
        <div className="hero-ticker__track">
          <span>Live tables</span><i />
          <span>Fast orders</span><i />
          <span>Sent batches</span><i />
          <span>Bill splitting</span><i />
          <span>Daily sales</span><i />
          <span>Works alongside your POS</span><i />
          <span aria-hidden="true">Live tables</span><i aria-hidden="true" />
          <span aria-hidden="true">Fast orders</span><i aria-hidden="true" />
          <span aria-hidden="true">Sent batches</span><i aria-hidden="true" />
          <span aria-hidden="true">Bill splitting</span><i aria-hidden="true" />
          <span aria-hidden="true">Daily sales</span><i aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
