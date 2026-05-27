import Button from '../ui/Button';

export default function HeroCopy() {
  return (
    <div className="pain-section">
      <div className="pain-badge">
        <span className="pain-badge__dot" />
        Live at Kaeserei Camidi, Berlin
      </div>
      <h1 className="pain-heading">
        Run table service from any phone.
      </h1>
      <p className="pain-subtext">
        A shared mobile table map, order tracking, sent orders, and bill splitting {'\u2014'} for teams that already have a POS.
      </p>
      <div className="pain-actions">
        <Button to="/contact">Book a call</Button>
        <Button href="#demo" variant="secondary">
          See workflow
        </Button>
      </div>
      <p className="pain-trust">
        Works on phones your team already has. No new hardware needed.
      </p>
    </div>
  );
}
