import HomepageIcon from './HomepageIcon';

export default function FitWorkflowSteps({ steps }) {
  return (
    <div className="demo-workflow__steps" aria-label="Who TableOrders fits">
      {steps.map((step) => (
        <div className={`demo-workflow__step${step.summary ? ' demo-workflow__step--summary' : ''}`} key={step.title}>
          <span className="demo-workflow__mark" aria-hidden="true">
            <HomepageIcon name={step.icon} />
          </span>
          <div>
            <span className="demo-workflow__tag">{step.tag}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
