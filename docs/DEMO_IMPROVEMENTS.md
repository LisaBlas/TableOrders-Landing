# Demo Mode Improvements

## Context

The landing page embeds the TableOrders app as an iframe demo (via `DemoPhone.jsx`):
```
https://lisablas.github.io/TableOrders/demo/
```

The demo mode already exists in the TableOrders app (`src/demo/`). It already handles:
- **No login**: `VITE_DEMO_MODE=true` auto-authenticates in `AuthContext`
- **No Directus**: all services swapped for `demoServices.ts` (localStorage-backed)
- **Build pipeline**: `npm run build:demo` → `dist-demo/` → deployed to `/TableOrders/demo/` on GitHub Pages

The work is in `/home/blas/projects/TableOrders`.

---

## Issues to Fix

### 1. `localStorage` inside an iframe (HIGH PRIORITY)
Safari and Firefox with strict privacy settings block `localStorage` access for cross-origin iframes. The demo silently fails for these users.

**Fix**: Migrate demo state from `localStorage` to in-memory React state. Persistence isn't needed for a sales demo.

Files to change:
- `src/demo/index.ts` — `initDemoState()` currently reads/writes `localStorage`
- `src/demo/demoServices.ts` — all services use `localStorage` keys (`DEMO_SESSIONS_KEY`, `DEMO_BILLS_KEY`)
- Replace with a module-level in-memory store (a plain object or `useRef`-backed context)

### 2. DemoBanner UX inside phone mockup (MEDIUM)
The `DemoBanner` renders inside the iframe. At the small size of the phone mockup on the landing page, it competes with the app UI.

**Fix**: Shrink it to a floating corner pill or hide it entirely when the viewport is very narrow (the phone mockup width).

File: `src/components/DemoBanner.tsx` (or wherever it lives)

### 3. Camidi-specific content — decide intent (LOW / DECISION)
The static menu fallback (`src/data/constants.ts` → `MENU`) uses real Camidi items (cheese plates, specific wines, etc.). The seed data in `src/demo/demoData.ts` also reflects their actual setup.

**Decision needed**: Keep it (authentic, real proof) or replace with generic restaurant items (more relatable to any venue owner watching the demo)?

### 4. Admin / TableSetup views accessible in demo (LOW)
The demo sets the auth role to `admin` locally, so admin views (menu editor, table setup) are accessible. Visitors can "edit" items — writes go to in-memory state and disappear on reset.

**Decision needed**: Leave as-is (shows the full product) or suppress those views in demo mode to keep focus on the staff ordering flow.

### 5. DailySales / POS crossing view may confuse (LOW)
The "cross items to POS" workflow is a strong feature for venue owners who understand it, but may be confusing without context during a cold demo.

**Option**: Add a short in-app tooltip or callout on first visit to that view, or suppress it from the bottom nav in demo mode.

### 6. 10-minute auto-reset timer (LOW)
State resets every 10 minutes. Good for public kiosks, but could surprise a visitor mid-walkthrough.

**Option**: Extend to 30 minutes, or make it reset only on explicit user action via the DemoBanner button.

---

## Recommended Order of Attack

1. Fix `localStorage` → in-memory migration (fixes Safari, unblocks everything else)
2. Fix DemoBanner for small iframe viewport
3. Make content/UX decisions (items 3–6 above)
