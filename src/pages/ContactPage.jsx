import { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import Button from '../components/ui/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    website: '',
    description: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual backend call later)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          business: '',
          website: '',
          description: '',
          budget: '',
          timeline: ''
        });
      }, 3000);
    }, 500);
  };

  return (
    <PageLayout>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <p className="section-label">Contact</p>
          <h1 className="section-title">Let's build something<br />for your business</h1>
          <p className="section-subtitle">Fill out the form and I'll get back to you within 24 hours. Or reach out directly.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="contact-grid">

            {/* Left: Info */}
            <RevealOnScroll className="contact-info">
              <p>Whether you need a new website, a redesign, or help automating parts of your business — I'd love to hear about it. The first call is always free.</p>

              <div>
                <div className="contact-detail">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <a href="mailto:hello@blasalviz.com">hello@blasalviz.com</a>
                </div>
                <div className="contact-detail">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  Berlin, Germany
                </div>
                <div className="contact-detail">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                  </svg>
                  English, Spanish, French
                </div>
              </div>

              <div style={{ paddingTop: '16px' }}>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                  Typical response time: within 24 hours.<br />Free discovery call, no commitment.
                </p>
              </div>
            </RevealOnScroll>

            {/* Right: Form */}
            <RevealOnScroll className="contact-form">
              <form onSubmit={handleSubmit}>

                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@business.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="business">Business Type</label>
                  <select
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select your business type</option>
                    <option value="clinic">Clinic / Medical Practice</option>
                    <option value="local-service">Local Service (plumber, electrician, etc.)</option>
                    <option value="small-company">Small Company</option>
                    <option value="new-business">New Business / Startup</option>
                    <option value="restaurant">Restaurant / Hospitality</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="website">Current Website (if any)</label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://yourbusiness.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description">Tell me about your project</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="What do you need? What's working, what's not?"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="budget">Budget Range</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="" disabled>Select a range</option>
                      <option value="1-2k">$1,000 – $2,000</option>
                      <option value="2-5k">$2,000 – $5,000</option>
                      <option value="5-10k">$5,000 – $10,000</option>
                      <option value="10k+">$10,000+</option>
                      <option value="unsure">Not sure yet</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="timeline">Timeline</label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                    >
                      <option value="" disabled>When do you need it?</option>
                      <option value="asap">As soon as possible</option>
                      <option value="1-month">Within a month</option>
                      <option value="2-3-months">2–3 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting || isSubmitted}
                  style={{ width: '100%', marginTop: '8px', opacity: isSubmitted ? 0.7 : 1 }}
                >
                  {isSubmitted ? "Sent! I'll be in touch soon." : isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitted && !isSubmitting && (
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M3 8h10M9 4l4 4-4 4"/>
                    </svg>
                  )}
                </Button>

              </form>
            </RevealOnScroll>

          </div>
        </div>
      </section>
    </PageLayout>
  );
}
