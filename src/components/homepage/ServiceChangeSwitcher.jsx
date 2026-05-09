export default function ServiceChangeSwitcher({ changes }) {
  return (
    <div className="problem-blocks">
      {changes.map((change) => (
        <div className="problem-block" key={change.tab}>
          <h3 className="problem-block__title">{change.tab}</h3>
          <p className="problem-block__text">{change.before}</p>
        </div>
      ))}
    </div>
  );
}
