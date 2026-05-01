# Intelligencia Website Handoff

Date: 2026-04-25

## Current Context

This project is a Next.js app for the Intelligencia website. Recent work focused on matching all page hero sections to the homepage hero layout and polishing the Services page second viewport.

The user is working visually and expects narrow, requested-only changes. Earlier broad/unapproved changes caused frustration, so the next agent should avoid speculative refactors and should announce exact scope before editing.

## Important Environment Notes

- Workspace: `C:\Projects\ApplicationDevelopment\Sikky\Intelligencia`
- Shell: PowerShell
- `rg` has been blocked in this desktop environment with access denied. Use PowerShell commands such as `Get-ChildItem`, `Select-String`, and `Get-Content`.
- Use `apply_patch` for manual edits.
- The repo currently appears fully untracked in `git status --short`; do not assume normal diffs are available.
- Local server was reachable at `http://localhost:3000`.
- Verification command used repeatedly:

```powershell
npm run build
```

## What Was Changed

### Services Hero

The Services page hero was converted from the older split-card layout into the homepage-style background-card layout.

Files involved:

- `app/services/page.tsx`
- `components/page-hero.tsx`
- `components/page-shell.tsx`
- `app/globals.css`

Key behavior:

- `PageHero` now supports `variant="backgroundCard"`.
- For `backgroundCard`, the hero image fills the card as the card background.
- Text and CTAs overlay at the bottom of the card.
- The old Services hero pills were removed.
- The old transparent frame/wrapper around the Services hero was bypassed for full-bleed heroes.
- The old “A connected service model” overlay text block was removed.
- The static building background uses the same left-side blue correction treatment as the homepage, leaving the building clear.

### Homepage Background Treatment

The homepage hero background correction was adjusted so the blue treatment only covers the orange/sky area and avoids dulling the building.

The Services hero background was then updated to replicate that same treatment.

Relevant CSS:

- `.sticky-scene--hero`
- `.page-shell--subpage .page-shell__scene--full-bleed`

### Hero Template Replication Across Pages

All remaining `PageHero` usages were converted to the same `backgroundCard` hero template used by Services and the homepage.

Updated pages:

- `app/about/page.tsx`
- `app/case-studies/page.tsx`
- `app/contact/page.tsx`
- `app/services/website-development/page.tsx`
- `app/services/systems-automation/page.tsx`
- `app/services/technology-management/page.tsx`

The old split-hero props were removed from these hero calls:

- `highlights`
- `asideTitle`
- `asideText`

CTA labels were normalized to fit the homepage-sized hero buttons. Most converted pages now use:

- Primary CTA: `Request a Consultation`
- Secondary CTA: page-specific secondary, usually `View Services`, `Explore Services`, or `Back to Services`

Contact page also received hero CTAs and the inquiry form section received `id="inquiry"` in `components/sections.tsx`.

### Mobile Hero Fix

After converting all heroes, mobile checks showed the old split-layout mobile rules made the background-card hero too narrow and clipped the CTA. CSS was added under the `@media (max-width: 820px)` block to keep background-card heroes usable on mobile:

- full-width card within viewport constraints
- reduced heading size
- contained paragraph width
- stacked/tighter hero action buttons
- fixed CTA clipping

### Services Second Viewport Fix

The “A straightforward path from review to implementation.” section had overflow in the small “Manage” process card.

Files involved:

- `app/services/page.tsx`
- `components/ui/testimonials.tsx`
- `app/globals.css`

The fix was CSS-only:

- Tighter padding for non-featured process cards inside `.services-viewport`
- Reduced blockquote gap
- Smaller body text and line-height for compact cards

This keeps the “Manage” paragraph and label contained inside the card.

## Current Important Component Contracts

### `PageHero`

Located at `components/page-hero.tsx`.

It supports:

```ts
variant?: "split" | "backgroundCard";
```

For the current design direction, top-level and service-detail page heroes use:

```tsx
variant="backgroundCard"
```

The regular split variant still exists and should not be deleted unless the user explicitly asks.

### `PageShell`

Located at `components/page-shell.tsx`.

It detects `hero.props.variant === "backgroundCard"` and treats that hero as full bleed:

- Uses `page-shell__scene--full-bleed`
- Uses `page-shell__hero-content--full-bleed`
- Bypasses the old `.container > .page-stack` wrapper for the hero

This is important for matching homepage hero placement.

## Verification Already Done

`npm run build` passed after the latest set of changes.

Desktop screenshots were checked for:

- About
- Case Studies
- Contact
- Website Development
- Systems & Automation
- Technology Management
- Services

Mobile screenshot was checked for Contact after adding mobile background-card rules.

Temporary screenshot files were removed.

## Known Visual State

The converted heroes now share the same broad template:

- fixed full-bleed building background
- left-aligned image card
- card image shown inside the card
- overlay text near the bottom
- same CTA row style as homepage/services

Because page titles vary in length, heading line breaks differ per page. This is expected unless the user asks for exact per-page copy or manual line-break tuning.

## Likely Next Work Areas

The user may next continue polishing sections below the hero. The latest completed non-hero polish was the Services second viewport. If they reference that section, look at:

- `.services-viewport`
- `.services-quadrant--engagements`
- `.engagement-testimonials`
- `.engagement-testimonials__card`

If they ask for visual checks, use browser screenshots or Chrome headless and inspect images. Headless Chrome sometimes prints timing/file errors even when the screenshot is written; check whether the PNG exists.

## Cautions

- Do not make broad layout decisions without user instruction.
- Do not revert user changes.
- Avoid unrelated cleanup/refactors.
- When changing hero layout, check both desktop and mobile because global `.hero-copy`, `.hero-actions`, and `@media (max-width: 820px)` rules can interact unexpectedly.
- CTA labels longer than `Request a Consultation` can clip in the homepage-sized primary hero button unless the CSS is adjusted.

