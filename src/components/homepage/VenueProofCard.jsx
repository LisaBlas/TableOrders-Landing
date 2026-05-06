import { Link } from 'react-router-dom';

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

      <figure className="proof-venue-card__testimonial">
        <figcaption className="proof-venue-card__testimonial-content">
          <blockquote className="proof-venue-card__testimonial-quote">
            "{venue.quote}"
            {' '}
            <span className="proof-venue-card__testimonial-person">
              {venue.quoteSource}
            </span>
          </blockquote>
        </figcaption>
      </figure>

      {venue.caseStudyPath && (
        <Link to={venue.caseStudyPath} className="proof-venue-card__case-study-link">
          Case Study →
        </Link>
      )}
    </div>
  );
}
