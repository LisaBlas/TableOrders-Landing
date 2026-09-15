import { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import BookACallButton from '../components/ui/BookACallButton';
import Button from '../components/ui/Button';
import blasPhoto from '../assets/blas.avif';

const EMAIL = 'alvizblas@gmail.com';

const WALKTHROUGH_STEPS = [
  '30 minutes, video call',
  'You show how service runs today — paper notes, POS setup, split habits',
  'I show you where TableOrders fits, and where it doesn\'t',
];

export default function ContactPage() {
  const [copyStatus, setCopyStatus] = useState('idle');

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopyStatus('copied');
    } catch {
      const input = document.createElement('textarea');
      input.value = EMAIL;
      input.setAttribute('readonly', '');
      input.style.position = 'fixed';
      input.style.opacity = '0';
      document.body.appendChild(input);
      input.select();
      const copied = document.execCommand('copy');
      input.remove();
      setCopyStatus(copied ? 'copied' : 'failed');
    }

    setTimeout(() => setCopyStatus('idle'), 2000);
  }

  return (
    <PageLayout>
      <section className="about-shift-hero contact-hero">
        <div className="container">
          <RevealOnScroll>
            <div className="about-shift-hero__grid contact-hero__grid">
              <div className="about-shift-hero__copy">
                <p className="about-kicker">Direct line to the builder</p>
                <h1 className="about-shift-hero__title">Talk directly with the person who built it.</h1>
                <p className="about-shift-hero__body">
                  No queue, no sales team — just a 30-minute walkthrough of how your team runs service today.
                </p>

                <ul className="contact-walkthrough" aria-label="What a walkthrough looks like">
                  {WALKTHROUGH_STEPS.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>

                <div className="about-shift-hero__actions">
                  <BookACallButton />
                  <Button variant="secondary" onClick={copyEmail}>
                    {copyStatus === 'copied' ? '✓ Copied' : copyStatus === 'failed' ? 'Copy failed' : 'Copy email'}
                  </Button>
                </div>
                <p className="contact-email-hint">{EMAIL}</p>
                <p className="sr-only" aria-live="polite">
                  {copyStatus === 'copied' ? 'Email address copied to clipboard.' : copyStatus === 'failed' ? 'Could not copy the email address.' : ''}
                </p>
                <p className="contact-reply-time">I usually reply within a day.</p>
              </div>

              <div className="contact-founder-wrap">
                <div className="about-founder-card">
                  <img className="about-founder-card__photo" src={blasPhoto} alt="Blas Alviz" />
                  <div>
                    <p className="about-founder-card__label">Direct builder</p>
                    <h2 className="about-founder-card__name">Blas Alviz</h2>
                    <p className="about-founder-card__meta">Berlin, Germany</p>
                    <p className="about-founder-card__avail">Mon–Fri · CET</p>
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
