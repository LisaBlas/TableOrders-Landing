import { Receipt, Calculator, Split, TriangleAlert, LayoutGrid } from 'lucide-react';

const ICONS = { Receipt, Calculator, Split, TriangleAlert, LayoutGrid };

export default function ServiceChangeSwitcher({ changes }) {
  return (
    <div className="problem-blocks">
      {changes.map((change) => {
        const Icon = ICONS[change.icon];
        return (
          <div className="problem-block" key={change.tab}>
            {Icon && <Icon className="problem-block__icon" size={16} aria-hidden="true" />}
            <h3 className="problem-block__title">{change.tab}</h3>
            <p className="problem-block__text">{change.before}</p>
          </div>
        );
      })}
    </div>
  );
}
