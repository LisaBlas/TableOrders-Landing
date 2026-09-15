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
        <Link to="/" className="nav__logo" aria-label="TableOrders home">
          <span className="nav__logo-mark" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
          <span>TableOrders</span>
        </Link>

        <div className="nav__links">
          {NAV_LINKS.map((link, index) => (
            <span className="nav__link-group" key={link.to}>
              {index > 0 && <span className="nav__dot" aria-hidden="true" />}
              <Link
                to={link.to}
                className={`nav__link${pathname === link.to ? ' nav__link--active' : ''}`}
                aria-current={pathname === link.to ? 'page' : undefined}
              >
                {link.label}
              </Link>
            </span>
          ))}
        </div>

        <Link to="/contact" className="nav__cta">
          <span className="nav__cta-label">Book a walkthrough</span>
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </nav>
  );
}
