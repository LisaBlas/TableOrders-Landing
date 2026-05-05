Highest Leverage


Remove dead migration/starter files

src/App.css (line 1) and src/index.css (line 1) are not imported. The active stylesheet is src/styles/index.css (line 1), imported from main.jsx (line 3).



Kill duplicate CSS loading

index.html (line 33) directly links /src/styles/index.css, but Vite already bundles it via main.jsx. Keep the JS import, remove the direct HTML CSS link.



Remove Tailwind CDN from production path

index.html (line 16) loads cdn.tailwindcss.com, while the app already has Tailwind/PostCSS dependencies. This adds runtime network dependency and makes styling less deterministic. Use bundled CSS only.



Decide: single landing page or portfolio app

App.jsx (line 8) only routes /, but the repo still contains old pages/components: AboutPage, WorkPage, ContactPage, ProductsSection, PricingSection, TransformationsSection, old hero code, etc. Either re-route them intentionally or archive/delete them. Right now they inflate maintenance cost and confuse product direction.



Product/Positioning Drift

5. Static public pages contradict current positioning

public/restaurant-orders.html (line 7) says “Full POS system” and pricing language. That conflicts with the project rule that TableOrders is not a POS replacement. This is risky if published.

Placeholder URLs are duplicated

CALENDLY_URL = '[CALENDLY_PLACEHOLDER]' appears in Navigation.jsx (line 5), PainSection.jsx (line 5), and CTASection.jsx (line 5). Move this into one config file, e.g. src/config/site.js.

Code Cleanliness

7. Lint currently fails

useLocalStorage.js (line 1) imports useEffect but never uses it. Small fix, but it means npm.cmd run lint is not green.


Giant global CSS is becoming the main coupling point

src/styles/index.css (line 2) still starts as “Blas Alviz — Portfolio”, then TableOrders styles begin much later at line 2844 (line 2844). I’d split it into:

base.css, layout.css, components.css, tableorders.css, then import them from one index.css.



README is stale template content

README.md (line 1) still says React + Vite. Replace with project purpose, commands, deployment notes, and placeholder policy.