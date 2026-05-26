import { useState } from 'react';
import { Receipt, Calculator, TriangleAlert, LayoutGrid, Check } from 'lucide-react';

const ICONS = { Receipt, Calculator, TriangleAlert, LayoutGrid };

export default function ServiceChangeSwitcher({ changes }) {
  const [activeTab, setActiveTab] = useState(null);

  function handleClick(tab) {
    setActiveTab(prev => (prev === tab ? null : tab));
  }

  return (
    <div className="problem-blocks">
      {changes.map((change) => {
        const Icon = ICONS[change.icon];
        const isOpen = activeTab === change.tab;
        return (
          <button
            key={change.tab}
            className={`problem-block${isOpen ? ' problem-block--open' : ''}`}
            onClick={() => handleClick(change.tab)}
            aria-expanded={isOpen}
            type="button"
          >
            <div className="problem-block__faces">
              <div className="problem-block__face problem-block__face--before" aria-hidden={isOpen}>
                {Icon && <Icon className="problem-block__icon" size={16} aria-hidden="true" />}
                <h3 className="problem-block__title">{change.tab}</h3>
                <p className="problem-block__text">{change.before}</p>
              </div>
              <div className="problem-block__face problem-block__face--after" aria-hidden={!isOpen}>
                <div className="problem-block__solution-badge" aria-hidden="true">
                  <Check size={11} strokeWidth={2.5} />
                  <span>Fixed</span>
                </div>
                {Icon && <Icon className="problem-block__icon problem-block__icon--solution" size={16} aria-hidden="true" />}
                <h3 className="problem-block__title problem-block__title--solution">{change.fixTitle}</h3>
                <p className="problem-block__text problem-block__text--solution">{change.after}</p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
