# AGENTS.md

## Project
This repository is the TableOrders landing page.

TableOrders is a mobile-first order coordination app for small restaurant front-of-house teams. The landing page should sell the workflow clearly and get qualified restaurant owners to book a walkthrough.

## Core Positioning
TableOrders is the lightweight operational layer between waitstaff and the official POS.

It helps teams:
- Track table states
- Take orders from phones and tablets
- Manage unsent and sent batches
- Split bills
- Close internal bills
- Prepare daily POS entry totals

It does not replace the official POS. The official POS remains responsible for fiscal receipts, tax, compliance, and payment processing.

## Copy Rules
Use grounded, operational language.

Good headline directions:
- "Mobile table ordering for restaurants that already have a POS."
- "A faster way to run table service from any phone."
- "Keep tables, orders, splits, and daily sales in sync."
- "Order coordination for busy front-of-house teams."
- "The lightweight layer between your waitstaff and your POS."

Never claim or imply that TableOrders is:
- A fiscal POS
- A tax system
- A legal receipt printer
- A payment processor
- A kitchen display system
- A delivery platform
- A reservation system
- An inventory system
- A staff scheduling system
- A full restaurant ERP

Avoid generic SaaS hype, enterprise jargon, invented metrics, fake testimonials, and "replace your POS" language.

## Product Facts
Feature pillars:
- Live table overview: open, seated, ordered/unconfirmed, confirmed
- Fast order taking: categories, search, variants, custom items, notes, quantities
- Sent batch tracking: confirm unsent orders, mark sent batches handled
- Bill review and closing: internal bills, vouchers, close table actions
- Bill splitting: equal split, item split, round-by-round payment, voucher-aware totals
- Daily sales and POS crossing: aggregate closed bills by POS ID for manual POS entry
- Multi-device sync: Directus-backed polling sync, local caching, retry behavior, reconnect conflict handling

Named proof point:
- Kaeserei Camidi, Berlin

Only use launch dates, screenshots, metrics, or deployment claims when they are confirmed in the repo or supplied by the user.

## Site Direction
Keep this a focused single-product landing page.

Preferred homepage flow:
1. Hero: staff-facing mobile table service/order coordination
2. Proof: real use at Kaeserei Camidi
3. Demo: run a test shift / see the workflow
4. Explore: links to supplementary pages (case study, how it works, about)
5. CTA: book a walkthrough

Supplementary pages (support conversion, do not dilute homepage focus):
- `/camidi` — Käserei Camidi case study: old workflow, friction points, how TableOrders fits, results
- `/how-it-works` — step-by-step practical walkthrough from open table to POS entry
- `/about` — trust-building: Berlin-based, hospitality background, direct builder contact

Do not reintroduce portfolio, multi-product, pricing, process, fake stats, or agency sections unless explicitly requested.

## Tech Stack
- React 19
- React Router
- Vite 8
- TailwindCSS 4.2
- Custom CSS in `src/styles/index.css`
- Static deployment target

## Commands
Use Windows-safe npm commands:
- `npm.cmd run dev`
- `npm.cmd run build`
- `npm.cmd run lint`
- `npm.cmd run preview`

Run `npm.cmd run build` after meaningful edits.

## Key Files
- `src/pages/HomePage.jsx`: homepage composition
- `src/pages/CamidiPage.jsx`: Käserei Camidi case study page (`/camidi`)
- `src/pages/HowItWorksPage.jsx`: practical workflow walkthrough page (`/how-it-works`)
- `src/pages/AboutPage.jsx`: trust-building about page (`/about`)
- `src/config/site.js`: shared config — update `CALENDLY_URL` here, it propagates to Navigation, PainSection, CTASection, and all supplementary page CTAs
- `src/components/sections/PainSection.jsx`: hero/pain section
- `src/components/sections/ProofSection.jsx`: proof section
- `src/components/sections/DemoSection.jsx`: embedded demo section
- `src/components/sections/ExploreSection.jsx`: homepage cards linking to supplementary pages
- `src/components/sections/CTASection.jsx`: final CTA
- `src/components/layout/Navigation.jsx`: top nav with Case Study / How It Works / About links
- `src/App.jsx`: route definitions
- `src/styles/index.css`: global styling
- `index.html`: page title and meta description
- `CLAUDE.md`: durable project memory for Claude-side work

## Placeholders To Resolve
- `CALENDLY_URL` in `src/config/site.js` — booking link, propagates to Navigation, PainSection, CTASection, CamidiPage, HowItWorksPage, and AboutPage
- `[PHONE_PLACEHOLDER]` — phone fallback, remove or replace
- Kaeserei Camidi launch date in `ProofSection.jsx` — confirm before publishing
- Real deployment screenshot — confirm before using visual proof

Do not publish placeholders in production-facing copy.

## Working Style
- Act directly when the task is clear.
- Keep edits scoped.
- Read files before editing.
- Prefer simple copy and concrete product language.
- Push back on anything that weakens the product positioning.
- Preserve user changes and do not delete files without asking.
