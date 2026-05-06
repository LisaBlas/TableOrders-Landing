export default function FounderIntro({ profile }) {
  return (
    <div className="whois-quote">
      <img
        className="whois-quote__photo"
        src={profile.photo}
        alt={profile.photoAlt}
      />
      <blockquote className="whois-intro">
        "Most restaurant tech is built by people who've never run a service.
        I've spent years working as a waiter, bartender,
        UX designer and developer."
      </blockquote>
    </div>
  );
}
