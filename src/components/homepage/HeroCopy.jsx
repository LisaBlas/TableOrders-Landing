import Button from '../ui/Button';

export function HeroCopyTop() {
  return (
    <div className="pain-section pain-top">
      <p className="pain-eyebrow"><span>Live service</span> Mobile order coordination</p>
      <h1 className="pain-heading">
        Run the room<br />
        <em>from any phone.</em>
      </h1>
      <p className="pain-subtext">
        A shared table map, fast order taking, bill splitting, and clean daily sales preparation — built for small teams that already have a POS.
      </p>
      <div className="pain-proof">
        <span className="pain-proof__dot" />
        In daily use at Käserei Camidi, Berlin
      </div>
    </div>
  );
}

export function HeroCopyBottom() {
  return (
    <div className="pain-section pain-bottom">
      <div className="pain-actions">
        <Button to="/contact">Book a walkthrough <span aria-hidden="true">↗</span></Button>
        <Button href="#demo-preview" variant="secondary">
          Explore the workflow <span aria-hidden="true">↓</span>
        </Button>
      </div>
      <ul className="pain-trust-row">
        <li className="pain-trust-pill"><span>01</span> Your phones</li>
        <li className="pain-trust-pill"><span>02</span> Your POS</li>
        <li className="pain-trust-pill"><span>03</span> One live room</li>
      </ul>
    </div>
  );
}
