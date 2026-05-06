# TableOrders Landing Page

## What This Is
This project is a focused sales landing page for TableOrders.

The page should convert small restaurant, bar, cafe, wine bar, and hybrid hospitality owners into booked walkthroughs or serious product conversations.

It is not a general portfolio, agency site, product catalog, or multi-product showcase.

## Product Positioning
TableOrders is a mobile-first restaurant order coordination app for small front-of-house teams.

It helps staff run live table service from phones and tablets:
- Track open, seated, ordered, and confirmed tables
- Take food, drink, wine, and shop orders
- Manage unsent and sent batches
- Mark batches as handled
- Split bills by guest, item, or round
- Close tables into internal paid bills
- Review daily sales and prepare official POS entry totals

TableOrders sits between waitstaff and the official POS. It improves the live-service workflow around the POS, but it does not replace the POS.

## Critical Copy Constraint
Never describe TableOrders as:
- A fiscal POS
- A tax calculation system
- A legal receipt system
- A payment processor
- A kitchen display system
- A delivery platform
- A reservation system
- An inventory system
- A staff scheduling system
- A full restaurant ERP

TableOrders creates internal operational records and daily POS-crossing support. The official POS remains responsible for tax, legal receipts, fiscal compliance, and payment handling.

## Main Value Proposition
Run the room from any phone.

TableOrders gives front-of-house staff a shared mobile table map, fast order taking, sent-batch tracking, practical bill splitting, and daily sales preparation while leaving fiscal receipts and tax handling to the existing POS.

## Tone
Use practical, grounded, operational language.

Good:
- "A faster way to run table service from any phone."
- "Order coordination for busy front-of-house teams."
- "Keep tables, orders, splits, and daily sales in sync."
- "The lightweight layer between your waitstaff and your POS."
- "Works alongside your official POS."

Avoid:
- Generic SaaS hype
- "Revolutionize your restaurant"
- Claims about fiscal compliance
- Claims about payment processing
- Enterprise jargon
- Any copy that implies TableOrders replaces the legal POS

## Ideal Audience
Primary users:
- Small restaurants
- Wine bars
- Cafes
- Bars
- Cheese shops with table service
- Hybrid retail and hospitality venues
- Owner-operated hospitality teams

Best fit:
- Teams that already have a legal POS
- Teams that need mobile table ordering
- Teams that manually coordinate between floor, counter, kitchen, and POS
- Teams that value speed over enterprise complexity

## Landing Page Structure
Homepage flow (single-page):
1. Hero: mobile table ordering/order coordination for teams that already have a POS
2. Proof: real use at Kaeserei Camidi, Berlin, with only confirmed facts
3. Demo: interactive workflow showing table/order/bill flow
4. Explore: cards linking to supplementary pages (case study, how it works, about)
5. CTA: book a walkthrough or see the workflow

Supplementary pages (already built — support conversion, do not dilute homepage):
- `/camidi` — Käserei Camidi case study
- `/how-it-works` — practical step-by-step workflow walkthrough
- `/about` — Berlin-based, hospitality background, direct builder contact

Do not re-add:
- Multi-product sections
- Pricing tables unless explicitly requested
- Generic process sections
- Fake testimonials
- Fake credibility stats
- Agency-style service copy
- Claims that TableOrders handles payments, taxes, or legal receipts

## Feature Pillars
Use these when expanding page sections:

### Live Table Overview
A table grid shows the current state of the floor: open, seated, ordered/unconfirmed, and confirmed. It can support inside/outside sections and dynamic extra tables for overflow service.

### Fast Order Taking
Staff open a table and add menu items quickly across categories such as food, drinks, wine, and shop items. The flow can support search, subcategories, variants, custom items, notes, quantities, and mobile swipe navigation.

### Sent Batch Tracking
Unsent orders are confirmed into sent batches. Staff can see what was sent and mark batches as handled. Orders can be grouped by destination such as bar, counter, or kitchen.

### Bill Review And Closing
Each table has an internal bill view with items, totals, vouchers, and closing actions. Closed tables become paid bills for internal tracking and end-of-day review. These are not legal fiscal receipts.

### Bill Splitting
Supports equal split by guest count, item-by-item split, round-by-round item payment, voucher-aware totals, and durable split metadata for later review.

### Daily Sales And POS Crossing
Daily Sales shows closed bills for the selected day and aggregates items by POS ID so staff can manually enter them into the official POS. Staff can mark bills or quantities as added to POS, restore them if needed, and identify missing POS IDs.

### Multi-Device Sync
The app uses Directus-backed polling sync so multiple devices can share live table, order, menu, and bill state. It includes offline-aware local caching, retry behavior, and conflict resolution for reconnect scenarios.

## Tech Stack
- Framework: React 19 + React Router
- Build tool: Vite 8
- Styling: TailwindCSS 4.2 + custom CSS
- Deployment target: static hosting
- Demo: embedded external TableOrders demo URL

## Useful Commands
- `npm.cmd run dev`
- `npm.cmd run build`
- `npm.cmd run lint`
- `npm.cmd run preview`

On Windows, use `npm.cmd` rather than `npm` for reliability in automation.

## Component Structure
- `src/components/homepage`: homepage-specific sections, subcomponents, data, and CTA components.
- `src/components/layout`: page shell components such as navigation, footer, and layout wrapper.
- `src/components/ui`: reusable UI primitives shared across pages.

Do not recreate separate `home`, `sections`, `hero`, or `cards` component folders unless the project grows a real cross-page need for them.

## Current Blockers / Placeholders
- Replace `CALENDLY_URL` in `src/config/site.js` with the real booking URL — it propagates to Navigation, PainSection, CTASection, CamidiPage, HowItWorksPage, and AboutPage.
- Replace `[PHONE_PLACEHOLDER]` or remove the phone fallback.
- Confirm the Kaeserei Camidi launch date before publishing it.
- Add a real deployment photo or screenshot before using visual proof.

## Development Guidelines
- Prefer editing existing sections over adding new ones. New pages need a clear conversion purpose.
- Keep the page mobile-first.
- Keep copy concise and operational.
- Preserve the single-product TableOrders focus.
- Run `npm.cmd run build` after copy or component changes.
- Do not invent social proof, launch dates, metrics, or customer claims.
- Push back on changes that make the page sound like a full POS, agency offer, or generic SaaS platform.
