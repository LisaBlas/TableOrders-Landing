import useIntersectionObserver from '../../hooks/useIntersectionObserver';

/**
 * Wrapper component that reveals children on scroll
 * Applies 'reveal--visible' class when element enters viewport
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to reveal
 * @param {number} props.threshold - Visibility threshold (0-1)
 * @param {string} props.rootMargin - Margin for triggering
 * @param {string} props.className - Additional CSS classes
 */
export default function RevealOnScroll({
  children,
  threshold = 0.1,
  rootMargin = '0px 0px -40px 0px',
  className = ''
}) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true
  });

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'reveal--visible' : ''} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
