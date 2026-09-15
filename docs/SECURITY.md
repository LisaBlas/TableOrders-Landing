# Security

- 2026-09-15 — `npm audit --omit=dev` reports two high-severity production findings through `react-router-dom@7.13.1` / `react-router`. The current site uses static client-side routing and does not use React Server Components, server actions, or user-controlled redirects, which limits exposure, but the dependency should be upgraded to a patched release after the required release-age review and a separate compatibility check.
