export default function FounderIntro({ profile }) {
  return (
    <div className="whois-quote">
      <img
        className="whois-quote__photo"
        src={profile.photo}
        alt={profile.photoAlt}
      />
      <blockquote className="whois-intro">
        “I have worked the floor, designed the workflow, and built the product. You speak directly to the person responsible for all three.”
      </blockquote>
    </div>
  );
}
