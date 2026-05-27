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
3. Pricing/friction: show what paper/service friction costs and position the €80/month venue plan
4. Founder/trust: direct builder context and operational credibility
5. CTA: contact / book a walkthrough

Supplementary pages (support conversion, do not dilute homepage focus):
- `/camidi` — Camidi Workflow: old workflow, friction points, how TableOrders fits, results
- `/how-it-works` — step-by-step practical walkthrough from open table to POS entry
- `/contact` — direct builder contact page with founder photo, email copy action, and booking link

Do not reintroduce portfolio, multi-product, generic process, fake stats, or agency sections unless explicitly requested. Do not add extra pricing tiers or pricing-table complexity unless explicitly requested; the current homepage uses a simple €80/month venue plan as conversion framing.

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
- `src/pages/CamidiPage.jsx`: Camidi Workflow page (`/camidi`)
- `src/pages/HowItWorksPage.jsx`: practical workflow walkthrough page (`/how-it-works`)
- `src/pages/ContactPage.jsx`: direct builder contact page (`/contact`)
- `src/config/site.js`: shared config for the Calendly booking URL used by `BookACallButton`
- `src/components/homepage`: homepage-specific sections, subcomponents, data, and CTA components
- `src/components/layout`: page shell components such as navigation, footer, and layout wrapper
- `src/components/ui`: reusable UI primitives shared across pages
- `src/components/layout/Navigation.jsx`: top nav with Camidi Workflow / How It Works / Contact links
- `src/App.jsx`: route definitions
- `src/styles/index.css`: global styling
- `index.html`: page title and meta description
- `CLAUDE.md`: durable project memory for Claude-side work

Do not recreate separate `home`, `sections`, `hero`, or `cards` component folders unless the project grows a real cross-page need for them.

## Placeholders To Resolve
- Real deployment/product screenshot — confirm before using product visual proof
- Any launch dates, metrics, or quantified savings — confirm before publishing

Do not publish placeholders in production-facing copy.

## Working Style
- Act directly when the task is clear.
- Keep edits scoped.
- Read files before editing.
- Prefer simple copy and concrete product language.
- Push back on anything that weakens the product positioning.
- Preserve user changes and do not delete files without asking.
