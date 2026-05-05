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

Preferred flow:
1. Hero: staff-facing mobile table service/order coordination
2. Proof: real use at Kaeserei Camidi
3. Demo: run a test shift / see the workflow
4. CTA: book a walkthrough

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
- `src/pages/HomePage.jsx`: page composition
- `src/components/sections/PainSection.jsx`: hero/pain section
- `src/components/sections/ProofSection.jsx`: proof section
- `src/components/sections/DemoSection.jsx`: embedded demo section
- `src/components/sections/CTASection.jsx`: final CTA
- `src/components/layout/Navigation.jsx`: top CTA
- `src/styles/index.css`: global styling
- `index.html`: page title and meta description
- `CLAUDE.md`: durable project memory for Claude-side work

## Placeholders To Resolve
- `[CALENDLY_PLACEHOLDER]`
- `[PHONE_PLACEHOLDER]`
- `[LAUNCH_DATE_PLACEHOLDER]`
- `[SCREENSHOT_PLACEHOLDER]`

Do not publish placeholders in production-facing copy.

## Working Style
- Act directly when the task is clear.
- Keep edits scoped.
- Read files before editing.
- Prefer simple copy and concrete product language.
- Push back on anything that weakens the product positioning.
- Preserve user changes and do not delete files without asking.
