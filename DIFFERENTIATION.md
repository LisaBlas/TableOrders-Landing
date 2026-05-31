# TableOrders — Differentiation Map

Working document for website copy and positioning decisions.
Last updated: 2026-05-30

---

## What TableOrders Is

A mobile-first order coordination layer for small front-of-house teams that already have a legal POS.

It sits **between** the waitstaff and the official POS — handling live table state, order tracking, bill splitting, daily reconciliation, and kitchen/bar routing — without replacing fiscal compliance, legal receipts, or payment handling.

---

## Competitor Landscape (Brief)

| Category | Examples | Their fatal flaw for our audience |
|---|---|---|
| Full POS replacements | Square, Toast, Lightspeed, Revel | Require migration, hardware, transaction fees, full commitment |
| Basic order apps | Generic QR/tablet order apps | No POS crossing, no splitting depth, no hybrid venue support |
| Paper + manual POS entry | — | Error-prone, no handoff visibility, splitting is painful |

---

## Our UVPs — Grouped by Buyer Decision Moment

### 1 — Zero-Risk Adoption
*Kills the "not now" objection before it forms.*

| UVP | What it means | Why competitors can't match it |
|---|---|---|
| No POS switching cost or risk | Add TableOrders on top of what you have. No migration, no fiscal disruption, no retraining on a new legal system. | Full POS tools require you to commit fully or not at all. |
| Multi-device, bring your own phone | No hardware budget. Staff use the phones already in their pocket. | Proprietary POS systems sell or require specific terminals. |
| Set-up in an afternoon | No IT department, no consultant, no implementation project. Live same day. | Enterprise tools bill implementation separately. |

**Website moment:** Hero and trust bar immediately below it.

---

### 2 — Built for Hybrid Venues
*Sharp filter: attracts the right venues, repels bad-fit ones.*

| UVP | What it means | Why competitors can't match it |
|---|---|---|
| Hybrid venue support | Bar, kitchen, cheese counter, and table service run in parallel. Orders route to the right destination and track as a single bill. | Generic tools assume one workflow. Most don't model multiple concurrent order destinations. |
| POS crossing feature | At end of day, closed bills are grouped by POS category. Staff mark items as entered into the official POS. Missing IDs are flagged. | Only possible because we're *not* the POS. Full POS tools handle this natively — but they also replace the fiscal system entirely. |
| KitchenView / CounterView | Dedicated receive-only views for kitchen and counter. The relevant orders appear automatically — no shared device, no noise from other sections. | Full POS systems also do kitchen/bar routing — but they require dedicated KDS hardware (screens, printers, networked terminals). TableOrders' KitchenView is a URL on a phone that's already there. The real edge is zero hardware cost and no dependency on a specific POS ecosystem. |

**Note on routing as a differentiator:** Full restaurant POS tools (Toast, Lightspeed, Square for Restaurants) all support kitchen/bar print routing. Do not claim routing itself is novel. The claim is: *same operational result, no new hardware, works alongside the POS you already have.*

**Website moment:** Proof section (Camidi) and a hybrid venue callout near it.

---

### 3 — Operational Depth
*Justifies against paper and basic apps. Signals this is production software, not a prototype.*

| UVP | What it means | Why it matters in real service |
|---|---|---|
| Offline resilient | Orders cache locally. If WiFi drops mid-service, nothing is lost. Retry syncs automatically on reconnect. | A dropped connection during Saturday dinner is a real incident, not a theoretical edge case. |
| Bill splitting depth | Split by guest, by item, or by round. Covers messy real-world cases: one person leaves early, a shared bottle, a table that ordered in two rounds. | Most tools do equal-split only. Real service doesn't work that way. |
| Analytics dashboard | Closed bills feed into a live dashboard. Track revenue by day, section, item, and staff. No export needed — it's already in the system. | Paper and basic apps offer zero post-service insight. |
| Clipboard export / Webhook to WhatsApp or Telegram | End-of-service summaries can be sent to the team channel or copied to clipboard — no new hardware, no extra app. | Bridges the gap between the app and the team's existing communication tools. |

**Website moment:** Features section or an expanded workflow section. Analytics deserves its own callout row.

---

### 4 — Fair Commercial Model
*Secondary close — not the opening argument, but it lands once trust is established.*

| UVP | What it means | In numbers |
|---|---|---|
| No transaction fee | Flat monthly venue fee. No percentage cut of revenue. | At €20k/month turnover and 1.5% per-transaction fee: competitors charge ~€300/month. TableOrders charges €80/month. |
| Data ownership | Orders, bills, and history belong to the venue. No lock-in, no platform dependency, no data held hostage on exit. | Relevant to owners who've been burned by walled-garden POS exports before. |

**Website moment:** Pricing section — make the math visible, not just the claim.

---

## What to Hold Back

| Item | Why |
|---|---|
| ~~Analytics~~ | Now built — communicate it. |
| ~~KitchenView / CounterView~~ | Now built — communicate it. |
| ~~Clipboard export / Webhook~~ | Now built — communicate it. |

Nothing currently flagged as unbuilt. Update this section if features regress or get deprioritized before launch.

---

## Strongest Single Message

> **"The lightweight coordination layer on top of the POS you already have."**

Everything else is proof that this claim is real:
- No switching cost proves the "on top of" part.
- POS crossing, KitchenView, analytics prove the "coordination" part.
- BYOD and afternoon setup prove the "lightweight" part.

---

## Copy Anti-Patterns to Avoid

- "Revolutionize your restaurant" — generic, signals SaaS hype
- "All-in-one platform" — implies POS replacement, which we are not
- Mentioning tax, legal receipts, or fiscal compliance as TableOrders features
- Leading with analytics before the zero-risk hook lands
- Listing features as bullet points without anchoring them to real service friction

---

## Notes on Camidi as Proof Point

Käserei Camidi (Berlin) is a wine bar, cheese shop, and table service venue running simultaneously. It is the perfect proof point for:
- Hybrid venue claim
- POS crossing workflow
- KitchenView / CounterView (bar + counter)
- Splitting depth (retail + service on one bill)

Use Camidi copy carefully: only confirmed facts, no invented metrics or dates.
