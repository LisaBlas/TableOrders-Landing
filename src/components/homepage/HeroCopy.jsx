import Button from '../ui/Button';

export default function HeroCopy() {
  return (
    <div className="pain-section">
      <div className="pain-badge">
        <span className="pain-badge__dot" />
        Live at Kaeserei Camidi, Berlin
      </div>
      <h1 className="pain-heading">
        Ditch the notepad. Keep your cash register.
      </h1>
      <p className="pain-subtext">
        No new hardware, no register swap, no retraining {'\u2014'} just a phone your team already has, and sales numbers you've never had before.
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
