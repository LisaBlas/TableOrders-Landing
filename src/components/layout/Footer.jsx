import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <span className="footer__mark" aria-hidden="true">TO</span>
            <div>
              <strong>TableOrders</strong>
              <p>Run the room from any phone.</p>
            </div>
          </div>
          <div className="footer__links">
            <Link to="/features">Features</Link>
            <Link to="/camidi">Camidi workflow</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <p className="footer__copy">&copy; 2026 Blas Alviz<br />Berlin, Germany</p>
        </div>
      </div>
    </footer>
  );
}
