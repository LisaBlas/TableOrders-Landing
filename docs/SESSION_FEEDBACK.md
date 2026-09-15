# Session Feedback — TableOrders Landing Page

Friction with the environment, tooling, or docs that cost real time while
working in this project — not project facts (those go to `MEMORY.md`) and
not incidents (those go to `~/logs/FAILURES_LOG.md` via `session-recovery`).

One bullet per item, append-only, newest last. Read weekly by
`session_feedback_sweep` in `~/services/slack`, which looks for patterns
across every project's copy of this file and proposes fixes in Slack.

Format, categories, and the deliberately strict bar for writing an entry
are defined in `~/docs/SESSION_FEEDBACK_CONVENTION.md`. In short:

```
- YYYY-MM-DD — [BLOCKING|ENVIRONMENT|RECURRING|STALE-DOCS] What the friction was. **Fix:** concrete pointer.
```

Write one only if it blocked you, came from the environment, has happened
before, or the docs misled you — **and** it cost >~10 min or ≥2 failed
attempts. Most sessions add nothing here; that's expected. For a repeat,
append `(again YYYY-MM-DD)` to the existing bullet instead of adding a new one.

---

- 2026-09-15 — [ENVIRONMENT] Headless Chrome repeatedly stalled during responsive screenshot capture because this VPS browser process could not connect to DBus; single-process mode plus a hard timeout was required for every usable capture. **Fix:** add a project screenshot script with the known working Chrome flags, or provide a Playwright-based visual QA command in `scripts/README.md`.
