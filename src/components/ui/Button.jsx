import { Link } from 'react-router-dom';

/**
 * Reusable Button component
 * Supports internal links (Link), external links (a), and buttons (button)
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button content
 * @param {'primary'|'secondary'|'outline'} props.variant - Button style variant
 * @param {string} props.to - Internal route (uses Link)
 * @param {string} props.href - External URL (uses a)
 * @param {Function} props.onClick - Click handler (uses button)
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.type - Button type (submit, button, reset)
 * @param {boolean} props.disabled - Disabled state
 */
export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) {
  const variantClass = variant === 'secondary'
    ? 'btn--secondary'
    : variant === 'outline'
    ? 'btn--outline'
    : 'btn--primary';

  const classes = `btn ${variantClass} ${className}`.trim();

  // Internal link
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  // External link
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  // Button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}
