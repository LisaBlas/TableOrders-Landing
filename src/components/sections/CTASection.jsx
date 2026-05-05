import { Fragment } from 'react';
import RevealOnScroll from '../ui/RevealOnScroll';
import Button from '../ui/Button';
import { CALENDLY_URL } from '../../config/site';

const STEPS = ['Book 20 min', 'I map your setup', 'You decide'];

const FIT_POINTS = [
  'You already have a POS',
  'Your floor team uses phones',
  'You run more than one table at a time',
];

export default function CTASection() {
  return (
    <section className="section section--glow" id="book">
      <div className="container">
        <RevealOnScroll>
          <div className="cta-section">
            <p className="cta-eyebrow">For small front-of-house teams</p>
            <h2 className="cta-heading">See if it fits your setup</h2>
            <p className="cta-subtext">
              Book a short walkthrough. I'll map your current service flow and
              show you exactly where TableOrders fits alongside your POS —
              no obligation.
            </p>
            <div className="cta-fit">
              <p className="cta-fit__label">Works well if</p>
              <div className="cta-fit__items">
                {FIT_POINTS.map((point) => (
                  <span key={point} className="cta-fit__item">{point}</span>
                ))}
              </div>
            </div>
            <div className="cta-steps">
              {STEPS.map((step, i) => (
                <Fragment key={step}>
                  <div className="cta-steps__item">
                    <span className="cta-steps__num">{i + 1}</span>
                    <span className="cta-steps__text">{step}</span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <span className="cta-steps__arrow" aria-hidden="true">→</span>
                  )}
                </Fragment>
              ))}
            </div>
            <Button
              href={CALENDLY_URL}
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn"
            >
              Book a walkthrough
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
