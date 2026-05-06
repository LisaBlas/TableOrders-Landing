const ICON_PATHS = {
  paper: (
    <>
      <path d="M7 4.5h7l3 3v12H7z" />
      <path d="M14 4.5v3h3" />
      <path d="M10 11h4" />
      <path d="M10 14h5" />
      <path d="M10 17h3" />
    </>
  ),
  shift: (
    <>
      <path d="M12 5v7l4 2" />
      <path d="M5 12a7 7 0 1 0 2.05-4.95" />
      <path d="M5 5v4h4" />
    </>
  ),
  interrupt: (
    <>
      <path d="M8 10a4 4 0 0 1 8 0v3.5l1.5 2.5h-11L8 13.5z" />
      <path d="M10 19a2 2 0 0 0 4 0" />
      <path d="M5 7l-2-2" />
      <path d="M19 7l2-2" />
    </>
  ),
  split: (
    <>
      <path d="M6 6h6a4 4 0 0 1 4 4v8" />
      <path d="M6 18h6a4 4 0 0 0 4-4V6" />
      <path d="M18 8l-2-2-2 2" />
      <path d="M18 16l-2 2-2-2" />
    </>
  ),
  lean: (
    <>
      <path d="M7 7.5h10v9H7z" />
      <path d="M9.5 7.5V6a2.5 2.5 0 0 1 5 0v1.5" />
      <path d="M10 11h4" />
      <path d="M12 11v3" />
    </>
  ),
  workflow: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 9h6M9 12h4M9 15h2" />
    </>
  ),
  code: (
    <>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </>
  ),
  hospitality: (
    <>
      <path d="M3 17h18M9 17V7m6 10V7M5 7h14" />
    </>
  ),
};

export default function HomepageIcon({ name }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {ICON_PATHS[name]}
    </svg>
  );
}
