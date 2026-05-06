import HomepageIcon from './HomepageIcon';

export default function FounderCredentialPanel({ credentials }) {
  return (
    <div className="whois-credential-panel">
      {credentials.map((cred) => (
        <div key={cred.label} className="whois-credential">
          <div className="whois-card__icon">
            <HomepageIcon name={cred.icon} />
          </div>
          <div>
            <div className="whois-card__years">{cred.years}</div>
            <h3 className="whois-card__label">{cred.label}</h3>
            <p className="whois-card__body">{cred.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
