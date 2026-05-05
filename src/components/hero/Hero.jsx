import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroParticles from './HeroParticles';
import Button from '../ui/Button';

const industries = [
  {
    id: 0,
    name: 'Restaurants',
    problems: ['No more double bookings', 'Reduce no-shows', 'Fix ordering mistakes'],
    tools: [
      { icon: '🍽', title: 'Table Reservations', desc: 'Smart booking system' },
      { icon: '📱', title: 'Digital Menu', desc: 'QR code ordering' },
      { icon: '📊', title: 'Analytics', desc: 'Track peak hours' },
      { icon: '💬', title: 'SMS Reminders', desc: 'Auto confirmations' }
    ]
  },
  {
    id: 1,
    name: 'Wellness',
    problems: ['Stop chasing clients', 'No scheduling conflicts', 'Payment on time'],
    tools: [
      { icon: '🧘', title: 'Class Scheduler', desc: 'Seat limits & waitlist' },
      { icon: '💆', title: 'Treatment Booking', desc: 'Staff availability' },
      { icon: '💳', title: 'Payment Links', desc: 'Instant checkout' },
      { icon: '📅', title: 'Calendar Sync', desc: 'Google/Apple sync' }
    ]
  },
  {
    id: 2,
    name: 'Home Services',
    problems: ['Track leads easily', 'Follow up automatically', 'Less spreadsheets'],
    tools: [
      { icon: '🔧', title: 'Quote Automation', desc: 'Request forms' },
      { icon: '📧', title: 'Email Follow-ups', desc: 'Auto reminders' },
      { icon: '📋', title: 'Lead Dashboard', desc: 'Track all projects' },
      { icon: '🗓', title: 'Job Scheduler', desc: 'Plan your week' }
    ]
  }
];

export default function Hero() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <section className="hero">
      <div className="hero__noise"></div>
      <HeroParticles />
      <div className="container">
        <div className="hero__grid">

          {/* Left: Text */}
          <div className="hero__content">
            <div className="hero__badge">Websites & systems for local businesses</div>
            <h1 className="hero__title">Modern websites,<br /><em>smart automations</em></h1>
            <p className="hero__subtitle">Online booking, automated reminders, and simple systems that save time and bring more customers. Built for restaurants, studios, salons, and service providers.</p>

            {/* Credibility */}
            <div className="hero__credibility">
              <div className="hero__credibility-item">
                <span className="hero__credibility-number">10+</span>
                <span className="hero__credibility-label">years UX Designer</span>
              </div>
              <div className="hero__credibility-item">
                <span className="hero__credibility-number">15+</span>
                <span className="hero__credibility-label">tools built</span>
              </div>
              <div className="hero__credibility-item">
                <span className="hero__credibility-number">50+</span>
                <span className="hero__credibility-label">businesses</span>
              </div>
            </div>

            <div className="hero__actions">
              <Button to="/contact" variant="primary">
                Get a free website review
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M3 8h10M9 4l4 4-4 4"/>
                </svg>
              </Button>
              <Button href="#transformations" variant="secondary">See examples</Button>
            </div>
          </div>

          {/* Right: Industry Showcase */}
          <div className="hero__showcase">
            {/* Industry tabs */}
            <div className="hero__tabs">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  className={`hero__tab ${activeIndustry === industry.id ? 'hero__tab--active' : ''}`}
                  onClick={() => setActiveIndustry(industry.id)}
                >
                  {industry.name}
                </button>
              ))}
            </div>

            {/* Tools Grid */}
            <div className="hero__tools-grid">
              {industries[activeIndustry].tools.map((tool, idx) => (
                <div key={idx} className="hero__tool-card">
                  <span className="hero__tool-icon">{tool.icon}</span>
                  <h4 className="hero__tool-title">{tool.title}</h4>
                  <p className="hero__tool-desc">{tool.desc}</p>
                </div>
              ))}
            </div>

            {/* Problems Solved */}
            <div className="hero__problems">
              <p className="hero__problems-label">Problems solved:</p>
              <div className="hero__problems-list">
                {industries[activeIndustry].problems.map((problem, idx) => (
                  <div key={idx} className="hero__problem">
                    <svg viewBox="0 0 16 16" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round">
                      <path d="M3 8.5l3 3 7-7"/>
                    </svg>
                    <span>{problem}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
