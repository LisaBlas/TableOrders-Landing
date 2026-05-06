import RevealOnScroll from '../ui/RevealOnScroll';
import Button from '../ui/Button';

const workflowSteps = [
  {
    title: 'You use pen and paper',
    text: 'Orders still live in notebooks, loose slips, or memory.',
    icon: 'paper',
  },
  {
    title: 'You have busy shifts',
    text: 'Tables move fast and the team needs one shared view.',
    icon: 'shift',
  },
  {
    title: 'Your team gets interrupted',
    text: 'Staff switch tasks and sometimes forget what still needs sending.',
    icon: 'interrupt',
  },
  {
    title: 'Splits slow you down',
    text: 'Item splits, vouchers, and rounds get messy at closing time.',
    icon: 'split',
  },
  {
    title: 'You want to stay lean',
    text: 'No 100+ EUR monthly tool for a job your phones can handle.',
    icon: 'lean',
  },
];

function StepIcon({ name }) {
  const icons = {
    paper: (
      <>
        <path d="M7 4.5h7l3 3v12H7z" />
        <path d="M14 4.5v3h3" />
        <path d="M10 11h4" />
        <path d="M10 14h5" />
        <path d="M10 17h3" />
      </>
    ),
    shift: (
      <>
        <path d="M12 5v7l4 2" />
        <path d="M5 12a7 7 0 1 0 2.05-4.95" />
        <path d="M5 5v4h4" />
      </>
    ),
    interrupt: (
      <>
        <path d="M8 10a4 4 0 0 1 8 0v3.5l1.5 2.5h-11L8 13.5z" />
        <path d="M10 19a2 2 0 0 0 4 0" />
        <path d="M5 7l-2-2" />
        <path d="M19 7l2-2" />
      </>
    ),
    split: (
      <>
        <path d="M6 6h6a4 4 0 0 1 4 4v8" />
        <path d="M6 18h6a4 4 0 0 0 4-4V6" />
        <path d="M18 8l-2-2-2 2" />
        <path d="M18 16l-2 2-2-2" />
      </>
    ),
    lean: (
      <>
        <path d="M7 7.5h10v9H7z" />
        <path d="M9.5 7.5V6a2.5 2.5 0 0 1 5 0v1.5" />
        <path d="M10 11h4" />
        <path d="M12 11v3" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name]}
    </svg>
  );
}

export default function FitSection() {
  return (
    <section className="section section--dots" id="demo">
      <div className="container">
        <RevealOnScroll>
          <div className="demo-workflow">
            <div className="demo-workflow__intro">
              <p className="demo-eyebrow">This fits you if</p>
              <h2 className="demo-heading">You need order coordination, not another POS.</h2>
              <p className="demo-subtext">
                For small front-of-house teams that already have a fiscal POS,
                but still lose time between orders, splits, and daily closing.
              </p>
              <Button to="/how-it-works" variant="link">How it works</Button>
            </div>

            <div className="demo-workflow__steps" aria-label="Who TableOrders fits">
              {workflowSteps.map((step) => (
                <div className="demo-workflow__step" key={step.title}>
                  <span className="demo-workflow__mark" aria-hidden="true">
                    <StepIcon name={step.icon} />
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
