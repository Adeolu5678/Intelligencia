# Contact Page Design

Date: 2026-04-30
Page: `/contact`
Workspace: `C:\Projects\ApplicationDevelopment\Sikky\Intelligencia`

## Goal

Rework the Contact page lower area into a single conversion-focused section beneath the hero.

The page should:

- optimize for serious lead qualification
- remain minimal and visually restrained
- stay aligned with the lower-page language used across the rest of the site
- avoid boring visitors with extra informational bands
- keep the form as the primary object on the page

The hero remains separate unless a later request explicitly changes it.

## Approved Direction

Use one integrated lower section below the hero instead of multiple stacked sections.

This section should contain:

- a compact introductory rail that frames the inquiry
- the inquiry form as the dominant visual object
- concise expectation-setting language about fit and next steps

The composition should feel premium and deliberate, not content-heavy and not generic.

## Layout

### Desktop

Use a two-column consultation block:

- left column: compact qualification rail
- right column: primary form panel

The right column should carry more visual weight so the eye lands on the form first.

### Mobile and Tablet

Collapse to a single-column stack:

- intro rail first
- form second

Spacing should remain generous and no horizontal overflow should be introduced.

## Content Structure

### Intro Rail

The left rail should contain only a small set of high-value signals:

- a short heading that frames the page as a serious project conversation
- 2 or 3 concise qualification points
- a brief note about what happens after submission

Do not turn this rail into a card grid or a long explanation block.

### Form

The form remains the main action surface.

It should feel more solid and prominent than the intro rail, while staying visually consistent with the site.

The form header should be concise. Supporting text should be short and practical.

## Visual Direction

Use a quiet executive consultation aesthetic:

- single integrated lower section
- restrained panel treatment
- minimal decorative elements
- generous negative space
- stronger typography hierarchy than decorative styling

Avoid:

- multiple content bands
- dense card stacks
- dashboard-like packing
- FAQ-style expansion below the form
- loud or salesy conversion patterns

## Component Plan

Prefer adapting the current Contact page structure rather than introducing unrelated page-wide abstractions.

Likely implementation direction:

- replace the current `ContactCards` section with a bespoke integrated consultation section
- retain and adapt `InquiryForm` if its structure is already suitable
- add contact-page-specific wrappers and selectors rather than overloading shared generic card styles

## Data and Content Handling

The page remains static for now.

No backend integration is required as part of this design pass unless a later task explicitly adds it.

Existing form behavior should remain intact unless there is a specific issue discovered during implementation.

## Error Handling

Maintain current form semantics and input behavior.

If any form visual adjustments are made, preserve:

- readable labels
- clear focus states
- visible field boundaries
- accessible spacing and mobile usability

## Testing

Validate with:

- `npm run build`
- visual check of `/contact`
- responsive check for desktop and mobile stacking

## Scope Guardrails

Do not:

- change unrelated pages
- introduce additional lower-page sections
- turn the contact page into a long editorial layout
- modify `.next`

## Self-Review

This spec is focused on a single page redesign, contains no placeholder requirements, and keeps scope limited to a one-section lower-page rebuild under the existing hero.
