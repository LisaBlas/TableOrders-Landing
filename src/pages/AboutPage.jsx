import PageLayout from '../components/layout/PageLayout';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import Button from '../components/ui/Button';

export default function AboutPage() {
  return (
    <PageLayout>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <p className="section-label">About</p>
          <h1 className="section-title">Design background,<br />business mindset</h1>
        </div>
      </section>

      {/* About Content */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-grid">
            <RevealOnScroll className="about-photo">
              <div className="project-card__placeholder">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="24" cy="18" r="8"/>
                  <path d="M8 42c0-8.837 7.163-16 16-16s16 7.163 16 16"/>
                </svg>
                <span>Photo</span>
              </div>
            </RevealOnScroll>
            <RevealOnScroll className="about-text">
              <p><strong>I'm Blas Alviz</strong> — a designer turned builder based in Berlin. I spent years working in UX and product design, helping teams build digital products that people actually want to use.</p>
              <p>Now I channel that experience into something more direct: <strong>building modern websites and digital systems for local businesses</strong>. Clinics, service companies, small teams — businesses that need a strong online presence but don't need an agency.</p>
              <p>I design and build everything myself. That means faster turnaround, no miscommunication between designers and developers, and a single point of contact from start to finish.</p>
              <p>I'm based in Berlin and work with businesses across Germany and beyond. I speak <strong>English, Spanish, and French</strong>.</p>
            </RevealOnScroll>
          </div>

          {/* Background */}
          <RevealOnScroll className="about-side">
            <h3 className="about-side__title">Background</h3>
            <div className="about-side__list">
              <div className="about-side__item">
                <strong>UX & Product Design</strong>
                Years of experience designing and shipping digital products across startups and agencies.
              </div>
              <div className="about-side__item">
                <strong>Full-Stack Execution</strong>
                I design, build, and deploy. No handoffs, no waiting on someone else.
              </div>
              <div className="about-side__item">
                <strong>Conversion & Usability</strong>
                Every project is built to perform — not just look good, but actually convert visitors into customers.
              </div>
            </div>
          </RevealOnScroll>

          {/* Side Projects */}
          <RevealOnScroll className="about-side" style={{ marginTop: '24px', borderColor: 'rgba(218,162,119,0.1)' }}>
            <h3 className="about-side__title">Side Projects</h3>
            <div className="about-side__list">
              <div className="about-side__item">
                <strong>React UI Kit</strong>
                Building a stylish, developer-friendly component library for modern web apps.
              </div>
              <div className="about-side__item">
                <strong>AI Automation Experiments</strong>
                Exploring AI agents and automated systems for business workflows.
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--alt">
        <div className="container">
          <RevealOnScroll className="cta-banner">
            <h2 className="cta-banner__title">Let's work together</h2>
            <p className="cta-banner__subtitle">Have a project in mind? I'd love to hear about it.</p>
            <Button to="/contact" variant="primary">
              Get in touch
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </Button>
          </RevealOnScroll>
        </div>
      </section>
    </PageLayout>
  );
}
