import { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import BookACallButton from '../components/ui/BookACallButton';
import Button from '../components/ui/Button';
import blasPhoto from '../assets/blas.avif';

const EMAIL = 'alvizblas@gmail.com';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <PageLayout>
      <section className="about-shift-hero contact-hero">
        <div className="container">
          <RevealOnScroll>
            <div className="about-shift-hero__grid contact-hero__grid">
              <div className="about-shift-hero__copy">
                <p className="about-kicker">Get in touch</p>
                <h1 className="about-shift-hero__title">Talk directly with the person who built it.</h1>
                <p className="about-shift-hero__body">
                  I'm Blas, a UX designer and builder based in Berlin. Book a walkthrough or send an email — no queue, no sales team.
                </p>
                <div className="about-shift-hero__actions">
                  <BookACallButton />
                  <Button variant="secondary" onClick={copyEmail}>
                    {copied ? '✓ Copied' : 'Copy email'}
                  </Button>
                </div>
                <p className="contact-email-hint">{EMAIL}</p>
              </div>

              <div className="contact-founder-wrap">
                <div className="about-founder-card">
                  <img className="about-founder-card__photo" src={blasPhoto} alt="Blas Alviz" />
                  <div>
                    <p className="about-founder-card__label">Direct builder</p>
                    <h2 className="about-founder-card__name">Blas Alviz</h2>
                    <p className="about-founder-card__meta">Berlin, Germany</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </PageLayout>
  );
}
