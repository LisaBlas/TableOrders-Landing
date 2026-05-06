import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BookACallButton from '../ui/BookACallButton';

export default function Navigation() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => { if (e.key === 'Escape') setIsOpen(false); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <nav className="nav">
      <div className="nav__inner">
        <Link to="/" className="nav__logo">TableOrders</Link>

        <button
          className="nav__toggle"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(prev => !prev)}
        >
          {isOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          )}
        </button>

        <div className={`nav__links${isOpen ? ' nav__links--open' : ''}`}>
          <Link to="/how-it-works" className={`nav__link${pathname === '/how-it-works' ? ' nav__link--active' : ''}`}>
            How It Works
          </Link>
          <Link to="/about" className={`nav__link${pathname === '/about' ? ' nav__link--active' : ''}`}>
            About
          </Link>
          <div className="nav__drawer-cta">
            <BookACallButton />
          </div>
        </div>

        <BookACallButton className="btn--sm nav__cta-desktop" />
      </div>
    </nav>
  );
}
