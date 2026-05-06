import Button from '../ui/Button';

export default function ServiceChangeSwitcher({
  changes,
  activeIndex,
  onSelect,
}) {
  const currentChange = changes[activeIndex];

  return (
    <>
      <div className="proof-friction-switcher" aria-label="Service friction examples">
        {changes.map((change, index) => (
          <button
            className={`proof-friction-switcher__tab${index === activeIndex ? ' proof-friction-switcher__tab--active' : ''}`}
            type="button"
            key={change.title}
            aria-pressed={index === activeIndex}
            onClick={() => onSelect(index)}
          >
            {change.tab}
          </button>
        ))}
      </div>
      <article className="proof-comparison" key={currentChange.title}>
        <div className="proof-comparison__side">
          <span className="proof-comparison__label">Before</span>
          <p>{currentChange.before}</p>
        </div>
        <div className="proof-comparison__side proof-comparison__side--after">
          <span className="proof-comparison__label">Now</span>
          <p>{currentChange.after}</p>
        </div>
      </article>
      <Button to="/camidi" variant="link">Case Study</Button>
    </>
  );
}
