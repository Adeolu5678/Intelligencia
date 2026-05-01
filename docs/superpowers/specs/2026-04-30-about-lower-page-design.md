# About Lower Page Design

Date: 2026-04-30
Page: `/about`
Workspace: `C:\Projects\ApplicationDevelopment\Sikky\Intelligencia`

## Goal

Rework the lower portion of the About page into a single integrated viewport composition that better aligns with the rest of the website.

The lower page should:

- feel more operational and structured
- align with the stronger lower-page treatments already established elsewhere
- avoid reading like stacked independent content bands
- preserve a premium, scene-integrated presentation
- keep the About page centered on credibility, judgment, and method

The hero remains separate unless a later request explicitly changes it.

## Approved Direction

Use one integrated four-zone viewport for the About lower page.

The composition should read as one connected system rather than three separate sections.

The top-left zone should be the strongest visual anchor.

## Layout

Use a true 2x2 viewport composition.

### Zone Roles

- top-left: dominant statement block about how the firm thinks
- top-right: operational method block
- bottom-left: practical principles or working standards
- bottom-right: fit / CTA

The layout should communicate order and coherence before ornament.

## Visual Direction

The lower About page should feel:

- operational
- structured
- premium
- composed
- disciplined

It should feel less editorial-soft than the current lower page and more aligned with the site’s more resolved viewport-based compositions.

Avoid:

- long stacked section flow
- soft editorial wandering
- overly poetic presentation
- generic card-grid repetition
- a CTA-heavy composition that overpowers the About story

## Content Intent

The About lower page is telling one connected story:

1. what the firm believes
2. how the work is structured
3. what standards guide the work
4. who the work is best suited for

The composition should make these feel sequentially legible inside one viewport, not separated into unrelated blocks.

## Implementation Direction

Prefer rebuilding the existing `about-lower` structure rather than layering additional generic sections on top of it.

Likely implementation direction:

- replace the stacked `about-editorial`, `about-process`, and `about-fit` flow with a single viewport wrapper
- preserve the existing content groups where possible, but remap them into new zone-specific markup
- add About-specific selectors for the new viewport rather than forcing the layout through shared generic card patterns

## Responsive Behavior

Desktop should preserve the four-zone composition.

Tablet and mobile can collapse vertically, but the hierarchy should remain clear:

- statement first
- method second
- principles third
- fit / CTA last

No horizontal overflow should be introduced.

## Scope Guardrails

Do not:

- change unrelated pages
- change the About hero as part of this task
- treat the About lower page as multiple separate stacked sections again
- modify `.next`

## Testing

Validate with:

- `npm run build`
- visual check of `/about`
- responsive check for desktop and mobile stacking

## Self-Review

This spec is focused on the About lower page only, defines one clear viewport-based direction, avoids placeholders, and keeps scope limited to layout and visual restructuring under the existing hero.
