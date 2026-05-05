import { Link } from 'react-router-dom';
import Button from '../ui/Button';

// Replace with your Calendly link
const CALENDLY_URL = '[CALENDLY_PLACEHOLDER]';

export default function Navigation() {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <Link to="/" className="nav__logo">blas<span>.</span></Link>
        <Button href={CALENDLY_URL} variant="primary" target="_blank" rel="noopener noreferrer">
          See workflow
        </Button>
      </div>
    </nav>
  );
}
