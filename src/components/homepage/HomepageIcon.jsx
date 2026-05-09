import { FileText, Clock, Bell, Split, Smartphone, ClipboardList, Code2, UtensilsCrossed } from 'lucide-react';

const ICONS = {
  paper: FileText,
  shift: Clock,
  interrupt: Bell,
  split: Split,
  lean: Smartphone,
  workflow: ClipboardList,
  code: Code2,
  hospitality: UtensilsCrossed,
};

export default function HomepageIcon({ name, size = 20 }) {
  const Icon = ICONS[name];
  if (!Icon) return null;
  return <Icon size={size} aria-hidden="true" />;
}
