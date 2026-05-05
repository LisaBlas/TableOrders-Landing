import PageLayout from '../components/layout/PageLayout';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import Button from '../components/ui/Button';

const projects = [
  {
    type: 'Dental Clinic',
    title: 'Modern Booking Website',
    problem: 'Outdated website with no online booking. Patients had to call during office hours, leading to missed appointments and lost revenue.',
    solution: 'New responsive website with integrated online booking system, automated reminders, and a clear service overview.',
    result: '30% increase in online appointments. Reduced no-shows with automated email reminders.'
  },
  {
    type: 'Home Services',
    title: 'Lead Generation Website',
    problem: 'No online presence at all. All customers came from word of mouth, limiting growth potential.',
    solution: 'Fast, conversion-focused landing page with automated lead capture form, Google Maps integration, and customer testimonials.',
    result: 'First online leads within the first week. Steady flow of quote requests through the automated contact system.'
  }
];

export default function WorkPage() {
  return (
    <PageLayout>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <p className="section-label">Selected projects</p>
          <h1 className="section-title">Work that speaks for itself</h1>
          <p className="section-subtitle">Real results for real businesses. Each project focused on one thing: getting more customers through the door.</p>
        </div>
      </section>

      {/* Work List */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="work-list">

            {projects.map((project, index) => (
              <RevealOnScroll key={index} className="work-item">
                <div className="work-item__image">
                  <div className="project-card__placeholder">
                    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="6" y="10" width="36" height="28" rx="3"/>
                      <line x1="6" y1="18" x2="42" y2="18"/>
                      <circle cx="11" cy="14" r="1.5"/>
                      <circle cx="16" cy="14" r="1.5"/>
                      <circle cx="21" cy="14" r="1.5"/>
                    </svg>
                    <span>Project screenshot</span>
                  </div>
                </div>
                <div className="work-item__content">
                  <p className="work-item__type">{project.type}</p>
                  <h2 className="work-item__title">{project.title}</h2>
                  <div className="work-item__detail">
                    <p className="work-item__label">Problem</p>
                    <p className="work-item__text">{project.problem}</p>
                  </div>
                  <div className="work-item__detail">
                    <p className="work-item__label">Solution</p>
                    <p className="work-item__text">{project.solution}</p>
                  </div>
                  <div className="work-item__detail">
                    <p className="work-item__label">Result</p>
                    <p className="work-item__text">{project.result}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--alt">
        <div className="container">
          <RevealOnScroll className="cta-banner">
            <h2 className="cta-banner__title">Want results like these?</h2>
            <p className="cta-banner__subtitle">Let's talk about what your business needs.</p>
            <Button to="/contact" variant="primary">
              Start a project
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
