import RevealOnScroll from '../ui/RevealOnScroll';

const workflowSteps = [
  {
    title: 'You use pen and paper',
    text: 'Orders still live in notebooks, loose slips, or memory.',
  },
  {
    title: 'You have busy shifts',
    text: 'Tables move fast and the team needs one shared view.',
  },
  {
    title: 'Your team gets interrupted',
    text: 'Staff switch tasks and sometimes forget what still needs sending.',
  },
  {
    title: 'Splits slow you down',
    text: 'Item splits, vouchers, and rounds get messy at closing time.',
  },
  {
    title: 'You want to stay lean',
    text: 'No 100+ EUR monthly tool for a job your phones can handle.',
  },
];

export default function DemoSection() {
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
            </div>

            <div className="demo-workflow__steps" aria-label="Who TableOrders fits">
              {workflowSteps.map((step) => (
                <div className="demo-workflow__step" key={step.title}>
                  <span className="demo-workflow__mark" aria-hidden="true" />
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
