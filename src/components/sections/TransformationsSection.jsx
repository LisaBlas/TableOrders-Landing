import { useState } from 'react';
import RevealOnScroll from '../ui/RevealOnScroll';

const transformations = [
  {
    name: 'Yoga Studio',
    title: 'Yoga Studio Website Redesign',
    description: 'Converted a slow, call-only site into a modern booking platform',
    before: {
      label: 'Outdated Design',
      issues: [
        'Slow website (5s load time)',
        'No online booking',
        'Clients must call'
      ]
    },
    after: {
      label: 'Modern Layout',
      benefits: [
        'Modern website (1s load)',
        'Online class booking',
        'Automated confirmations'
      ]
    }
  },
  {
    name: 'Restaurant',
    title: 'Restaurant Reservation System',
    description: 'Replaced expensive platform with affordable custom booking',
    before: {
      label: 'No System',
      issues: [
        '€150/mo for OpenTable',
        'Confusing admin panel',
        'High no-show rates'
      ]
    },
    after: {
      label: 'Table Booking',
      benefits: [
        '€20/mo flat pricing',
        'Simple dashboard',
        'SMS reminders reduce no-shows'
      ]
    }
  },
  {
    name: 'Beauty Salon',
    title: 'Beauty Salon Booking Portal',
    description: 'From paper calendar to digital appointment system',
    before: {
      label: 'Paper Calendar',
      issues: [
        'Manual scheduling errors',
        'Double-bookings happen',
        'No online presence'
      ]
    },
    after: {
      label: 'Treatment Booking',
      benefits: [
        'Conflict-free scheduling',
        'Zero double-bookings',
        '24/7 online booking'
      ]
    }
  }
];

export default function TransformationsSection() {
  const [activeTransformation, setActiveTransformation] = useState(0);

  return (
    <section className="section section--full section--transformations" id="transformations">
      <div className="container">
        <RevealOnScroll>
          <p className="section-label">Real examples</p>
          <h2 className="section-title">Before & after</h2>
          <p className="section-subtitle">Simple changes that make a real difference for local businesses.</p>
        </RevealOnScroll>

        <RevealOnScroll className="transformation-tabs">
          {transformations.map((transformation, i) => (
            <button
              key={i}
              className={`transformation-tab ${activeTransformation === i ? 'transformation-tab--active' : ''}`}
              onClick={() => setActiveTransformation(i)}
            >
              {transformation.name}
            </button>
          ))}
        </RevealOnScroll>

        <RevealOnScroll className="transformation-viewer">
          {transformations.map((transformation, i) => (
            <div
              key={i}
              className={`transformation ${activeTransformation === i ? 'transformation--active' : ''}`}
            >
              <div className="transformation__header">
                <h3 className="transformation__title">{transformation.title}</h3>
                <p className="transformation__desc">{transformation.description}</p>
              </div>

              <div className="transformation__comparison">
                <div className="comparison-container">
                  {/* Before Side */}
                  <div className="comparison-side comparison-side--before">
                    <div className="comparison-label">Before</div>
                    <div className="comparison-mockup">
                      <div className="comparison-mockup__placeholder">
                        <svg viewBox="0 0 200 150" fill="none">
                          <rect width="200" height="150" fill="#1a1a1a"/>
                          <text x="100" y="75" textAnchor="middle" fill="#666" fontSize="12" fontFamily="Arial">
                            {transformation.before.label}
                          </text>
                        </svg>
                      </div>
                      <div className="comparison-issues">
                        {transformation.before.issues.map((issue, idx) => (
                          <div key={idx} className="comparison-issue">
                            <svg viewBox="0 0 16 16" fill="none" stroke="#dc2626" strokeWidth="2">
                              <line x1="4" y1="4" x2="12" y2="12"/>
                              <line x1="12" y1="4" x2="4" y2="12"/>
                            </svg>
                            <span>{issue}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Divider with Toggle */}
                  <div className="comparison-divider">
                    <button className="comparison-toggle" aria-label="Toggle before/after">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"/>
                      </svg>
                    </button>
                  </div>

                  {/* After Side */}
                  <div className="comparison-side comparison-side--after">
                    <div className="comparison-label">After</div>
                    <div className="comparison-mockup">
                      <div className="comparison-mockup__placeholder">
                        <svg viewBox="0 0 200 150" fill="none">
                          <rect width="200" height="150" fill="#0a1929"/>
                          {i === 0 && (
                            <>
                              <rect x="10" y="10" width="180" height="20" rx="4" fill="#1e3a5f"/>
                              <rect x="10" y="40" width="85" height="100" rx="8" fill="#daa277" opacity="0.2"/>
                              <rect x="105" y="40" width="85" height="100" rx="8" fill="#daa277" opacity="0.2"/>
                            </>
                          )}
                          {i === 1 && (
                            <>
                              <rect x="10" y="10" width="180" height="25" rx="4" fill="#1e3a5f"/>
                              <rect x="10" y="45" width="55" height="95" rx="8" fill="#daa277" opacity="0.15"/>
                              <rect x="72" y="45" width="55" height="95" rx="8" fill="#daa277" opacity="0.15"/>
                              <rect x="135" y="45" width="55" height="95" rx="8" fill="#daa277" opacity="0.15"/>
                            </>
                          )}
                          {i === 2 && (
                            <>
                              <rect x="10" y="10" width="180" height="20" rx="4" fill="#1e3a5f"/>
                              <rect x="10" y="40" width="85" height="45" rx="6" fill="#daa277" opacity="0.2"/>
                              <rect x="105" y="40" width="85" height="45" rx="6" fill="#daa277" opacity="0.2"/>
                              <rect x="10" y="95" width="180" height="45" rx="6" fill="#daa277" opacity="0.15"/>
                            </>
                          )}
                          <text x="100" y={i === 2 ? "120" : "95"} textAnchor="middle" fill="#daa277" fontSize={i === 1 ? "9" : "10"} fontFamily="Arial">
                            {transformation.after.label}
                          </text>
                        </svg>
                      </div>
                      <div className="comparison-benefits">
                        {transformation.after.benefits.map((benefit, idx) => (
                          <div key={idx} className="comparison-benefit">
                            <svg viewBox="0 0 16 16" fill="none" stroke="var(--accent)" strokeWidth="2">
                              <path d="M3 8.5l3 3 7-7"/>
                            </svg>
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
