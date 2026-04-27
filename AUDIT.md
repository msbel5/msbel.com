# Portfolio Audit — 2026-04-28

Read every page on the live site as if I'd never seen it before. Below
is the unfiltered list. Severity tags: **[crit]** = needs fixing,
**[mid]** = noticeable, **[low]** = stylistic preference. Nothing was
changed; this is review-only.

---

## Site-wide

### [crit] Rebrand inconsistency
Homepage body still has a small ribbon reading `muhammet sıddık bel · istanbul, tr` (lowercase, full name). Footer uses `M.S. Bel`. Rest of site uses `M.S. Bel`. The homepage ribbon is the only place the full name still appears.

**Source:** `src/pages/index.astro` (search for `muhammet`).

### [crit] "Halcyon Labs OÜ" still leaks on the homepage
The homepage *currently* status block says
> *"E-Residency to Estonia is in flight; **Halcyon Labs OÜ** follows once the card lands."*

User said earlier: Halcyon Labs naming was cancelled. Should be `an Estonian OÜ` or just `an OÜ`.

**Source:** `src/pages/index.astro`.

### [mid] Project-detail pages all share the same placeholder paragraph
Every `/projects/<slug>/` page ends with:
> *"Technical notes — Detailed write-up coming soon. For now, the source repo (if linked above) is the canonical reference. Catch the latest progress in the writing section."*

This appears on **23 separate URLs**, identical text. It reads as template filler, which is the single most AI-flavoured artefact on the site right now. Two options:
- **Cut it.** Pages already have title, tagline, longDescription, description, tags, action buttons. That's enough.
- **Fill it.** Replace with project-specific notes (1–3 short paragraphs each).

**Source:** `src/pages/projects/[slug].astro` lines 80-85.

### [mid] Project-detail content shown twice
On project pages, the `longDescription` is shown as a stylised pull-quote near the top, then the *same* short `description` is shown under an *"What it is"* heading further down. They are different fields, but visually redundant.

Example: `/projects/dailog/` shows the seven-agent paragraph at the top *and* a partial repeat of it under "What it is".

Two fixes:
- Drop "What it is" header and just show `description` only when there's no `longDescription`.
- Or merge into one section.

**Source:** `src/pages/projects/[slug].astro` lines 72-79.

### [low] Bukowski quote at every page footer
> *"There's a bluebird in my heart that wants to get out." — Charles Bukowski*

Charming on the homepage. Slightly weighty when it appears at the bottom of every project detail and every blog post. Consider scoping to homepage and `/about` only.

**Source:** `src/components/Footer.astro`.

---

## Homepage (`/`)

### [low] "If anything here resonates — let's talk"
The opening of the *connect* section. "If anything here resonates" is the polite-AI register. Could be:
> *"I'm open to: collaborating on AI agent systems, contracting for test automation infrastructure, or trading notes on what's actually working in production."*

(Just drop the warm-up sentence.)

### [mid] Status block reads well
> *"Pi up · 1 projects live · last deploy 2026-04-27"*

This is good — concrete, dated, falsifiable. Keep. Bonus: the "1 projects" should be `1 project` (singular) when count is 1.

### [low] Featured projects are featured well
The three cards (Alcyone, Pegasus, Ember) read clearly. Tags are scannable. CTAs (`open live` / `read notes` / `source`) are clean.

### [low] "selected work — A small fleet, all flying"
Slight cute. Acceptable in context. Don't change unless you're nuking all metaphor.

---

## Projects index (`/projects`)

### [crit] Boat-metaphor pile-up
Header text is:
> *"Every project, ever. The fleet, in order. Some are flying, some are docked, some are still on the slipway. None are lost."*

Three nautical metaphors in two sentences:
1. *fleet*
2. *flying / docked / on the slipway*
3. *None are lost*

Pick one. Suggested rewrite:
> *"Every repo I've shipped, in chronological order. Some live, some idle, some archived. Nothing was deleted."*

### [low] No filter or sort UI
With 23 projects across nine years, a status filter (`live | idle | archived`) or year selector would help a recruiter who wants to see only recent / live work. Probably overkill for a personal site, but worth flagging.

### [low] Year clustering works
Visually grouping by year (2026, 2025, 2024, 2023, 2022, 2020, 2019, 2018, 2017) reads well. Don't change.

---

## Writing index (`/writing`)

### [low] Promise vs delivery gap
The header promises:
> *"Honest reports — including the parts that didn't work."*

Three posts so far, none of which are about something failing. Either:
- Add a "what didn't work" post (the original Ember AI-generated prototype is a perfect candidate)
- Soften the header until you have one

### [low] No tag filtering
Three posts is too few for tag filters to matter. Note for later when you have 10+.

---

## Individual project detail pages

### [crit] Long-description vs description duplication
Already covered above. Most visible on `/projects/dailog/`, `/projects/alcyone/`, `/projects/pegasus/`.

### [mid] "open live" buttons that don't open
Pages like `/projects/health-monitor/` link to `https://health.msbel.com` — verify each `liveUrl` is actually serving something. A dead link in a portfolio is worse than no link.

Quick check needed for:
- `https://trading.msbel.com` (Alcyone)
- `https://qa.msbel.com` (Pegasus)
- `https://dnd.msbel.com` (DnD AI)
- `https://health.msbel.com` (HealthMonitor)
- (Anything else marked `liveUrl` in `projects.ts`.)

### [low] Status colours are subtle but readable
`live` / `idle` / `offline` / `archived` dots — small but distinguishable.

---

## Writing post pages

### [low] Tesseract post reads well, GIF embedded clean
Caption + figure styling lands. The post is roughly the right length. The closing line *"SpongeBob has been retired with honour."* is borderline twee but in context (whole post is conversational) it's fine.

### [low] "Nine years on GitHub" post is dense
Six numbered observations + chronology. Possibly too much for one post. Could split into two: a chronology essay and a "what I learned reading my own old code" essay. Not urgent.

---

## Voice / writing register

### [low] Mostly human, occasional AI tic
The current register is *clearly* better than the previous version. A few residual tells:
- *"What is and is not bullshit"* — fine but starting to be overused on the site
- *"Lesson logged"* / *"open loops in my life"* — were cut from About, but check the homepage and project descriptions for similar
- Em-dash usage is heavy. Some readers (especially recruiters) read em-dashes as AI. Mix in commas and parentheticals.

### [low] Italic emphasis is overused
Display-italic appears in nearly every paragraph (`<em>` rendered in Fraunces). If everything is emphasised, nothing is. Consider tightening.

---

## Technical / build

### [low] No `<noscript>` graceful degradation tested
If JS is disabled the site should still mostly work (Astro static output). Verify briefly.

### [low] No analytics
Probably intentional. Worth confirming.

### [low] No RSS link from homepage to /rss.xml visible
The footer has `rss` but homepage hero doesn't surface it. Optional.

### [low] Open Graph image
`og:image` points to `/og-image.png` — verify it exists and renders well in social previews. (LinkedIn especially is unforgiving.)

---

## Top three things to fix

If you want a one-pass cleanup:

1. **Remove "Halcyon Labs OÜ"** from homepage status block.
2. **Cut the placeholder "Technical notes" paragraph** from `/projects/[slug].astro`.
3. **Trim the boat metaphors** on `/projects` header.

Everything else is preference. Site is in solid shape; this is fine-tuning.
