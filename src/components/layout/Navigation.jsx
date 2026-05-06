import { Link, useLocation } from 'react-router-dom';
import BookACallButton from '../ui/BookACallButton';

export default function Navigation() {
  const { pathname } = useLocation();

  return (
    <nav className="nav">
      <div className="nav__inner">
        <Link to="/" className="nav__logo">blas<span>.</span></Link>
        <div className="nav__links">
          <Link to="/camidi" className={`nav__link${pathname === '/camidi' ? ' nav__link--active' : ''}`}>
            Case Study
          </Link>
          <Link to="/how-it-works" className={`nav__link${pathname === '/how-it-works' ? ' nav__link--active' : ''}`}>
            How It Works
          </Link>
          <Link to="/about" className={`nav__link${pathname === '/about' ? ' nav__link--active' : ''}`}>
            About
          </Link>
        </div>
        <BookACallButton />
      </div>
    </nav>
  );
}
