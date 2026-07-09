import Button from '../ui/Button';

export function HeroCopyTop() {
  return (
    <div className="pain-section pain-top">
      <p className="pain-eyebrow">Restaurant order management</p>
      <div className="pain-badge">
        <span className="pain-badge__dot" />
        Live at Kaeserei Camidi, Berlin
      </div>
      <h1 className="pain-heading">
        Keep your setup. Lose the notepad.
      </h1>
      <p className="pain-subtext">
        No new hardware, no retraining {'—'} just faster order taking and real sales numbers, on the phones your team already carries.
      </p>
    </div>
  );
}

export function HeroCopyBottom() {
  return (
    <div className="pain-section pain-bottom">
      <div className="pain-actions">
        <Button to="/contact">Contact me</Button>
        <Button to="/how-it-works" variant="secondary">
          See how it works
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
