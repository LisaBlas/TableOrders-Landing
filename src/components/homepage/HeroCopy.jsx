import Button from '../ui/Button';

export function HeroCopyTop() {
  return (
    <div className="pain-section pain-top">
      <p className="pain-eyebrow">Restaurant order management</p>
      <h1 className="pain-heading">
        Keep your workflow. Ditch the notepad.
      </h1>
      <p className="pain-subtext">
        Take orders on your staff&apos;s existing phones. No new hardware, no retraining, no expensive POS replacement.
      </p>
      <div className="pain-proof">
        <span className="pain-proof__dot" />
        Used daily at Kaeserei Camidi, Berlin
      </div>
    </div>
  );
}

export function HeroCopyBottom() {
  return (
    <div className="pain-section pain-bottom">
      <div className="pain-actions">
        <Button to="/contact">Book a demo</Button>
        <Button href="#demo-preview" variant="secondary">
          See it in action
        </Button>
      </div>
      <ul className="pain-trust-row">
        <li className="pain-trust-pill">No hardware to buy</li>
        <li className="pain-trust-pill">Works with your cash register</li>
        <li className="pain-trust-pill">Live in an afternoon</li>
      </ul>
    </div>
  );
}
