import Button from '../ui/Button';

export default function HeroCopy() {
  return (
    <div className="pain-section">
      <div className="pain-badge">
        <span className="pain-badge__dot" />
        Live at Kaeserei Camidi, Berlin
      </div>
      <h1 className="pain-heading">
        Easy order taking, real sales data, low commitment.
      </h1>
      <p className="pain-subtext">
        Keep the system you already use {'\u2014'} simplify your shifts and get sales data from any phone your team already has.
      </p>
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
