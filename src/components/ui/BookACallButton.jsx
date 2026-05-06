import Button from './Button';
import { CALENDLY_URL } from '../../config/site';

export default function BookACallButton({ variant = 'primary', className }) {
  return (
    <Button
      href={CALENDLY_URL}
      variant={variant}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      Book a call
    </Button>
  );
}
