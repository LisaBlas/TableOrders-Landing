import Button from '../ui/Button';

export default function VenueProofCard({ venue }) {
  return (
    <div className="proof-venue-card">
      <div className="proof-venue-card__header">
        <img
          className="proof-venue-card__logo"
          src={venue.logo}
          alt={venue.logoAlt}
        />
        <div className="proof-venue-card__meta">
          <span className="proof-venue-card__name">{venue.name}</span>
          <span className="proof-venue-card__type">{venue.type}</span>
        </div>
        <span className="proof-venue-card__location">{venue.location}</span>
      </div>

      <div className="proof-venue-card__photos" aria-label={`${venue.name} venue photos`}>
        {venue.photos.map((photo, index) => (
          <img
            key={photo.src}
            className={`proof-venue-card__photo proof-venue-card__photo--${index + 1}`}
            src={photo.src}
            alt={photo.alt}
          />
        ))}
      </div>

      <div className="proof-venue-card__actions">
        {venue.mapsUrl && (
          <Button
            href={venue.mapsUrl}
            variant="secondary"
            className="btn--sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 1C4.79 1 3 2.79 3 5c0 3.25 4 8 4 8s4-4.75 4-8c0-2.21-1.79-4-4-4z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
              <circle cx="7" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
            </svg>
            View on Google Maps
          </Button>
        )}
        {venue.workflowPath && (
          <Button to={venue.workflowPath} variant="primary" className="btn--sm">
            Camidi Workflow
          </Button>
        )}
      </div>
    </div>
  );
}
