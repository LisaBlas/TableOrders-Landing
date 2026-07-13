import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/features', label: 'Features' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const { pathname } = useLocation();

  return (
    <nav className="nav">
      <div className="nav__inner">
        <Link to="/" className="nav__logo">TableOrders</Link>

        <div className="nav__links">
          {NAV_LINKS.map((link, index) => (
            <span className="nav__link-group" key={link.to}>
              {index > 0 && <span className="nav__dot" aria-hidden="true">&middot;</span>}
              <Link
                to={link.to}
                className={`nav__link${pathname === link.to ? ' nav__link--active' : ''}`}
              >
                {link.label}
              </Link>
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
}
