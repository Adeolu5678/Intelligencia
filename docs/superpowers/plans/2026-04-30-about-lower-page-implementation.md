# About Lower Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the `/about` lower page into a single integrated four-zone viewport with a stronger top-left statement block and a more operational, structured composition.

**Architecture:** Preserve the current hero and the existing content groups, but remap them into a 2x2 About viewport instead of three stacked sections. Use About-specific markup and CSS selectors so the page aligns with the newer viewport-based pages without copying their layouts directly.

**Tech Stack:** Next.js App Router, React, TypeScript, global CSS in `app/globals.css`

---

## File Structure

- Modify [`app/about/page.tsx`](C:/Projects/ApplicationDevelopment/Sikky/Intelligencia/app/about/page.tsx)
  Responsibility: replace the stacked lower-page section markup with one integrated four-zone viewport.
- Modify [`app/globals.css`](C:/Projects/ApplicationDevelopment/Sikky/Intelligencia/app/globals.css)
  Responsibility: remove the lower-page dependence on stacked About sections and add About viewport-specific layout, surface, and responsive rules.

### Task 1: Replace the Stacked About Lower Markup

**Files:**
- Modify: [`app/about/page.tsx`](C:/Projects/ApplicationDevelopment/Sikky/Intelligencia/app/about/page.tsx)

- [ ] **Step 1: Keep the existing content arrays and hero intact**

```tsx
const principles = [/* existing items */];
const operatingModel = [/* existing items */];
const fitSignals = [/* existing items */];
```

- [ ] **Step 2: Replace the current `about-lower` contents with one viewport wrapper**

```tsx
<section className="about-viewport" aria-label="About Intelligencia">
  <section className="about-zone about-zone--statement">
    {/* top-left statement block */}
  </section>
  <section className="about-zone about-zone--method">
    {/* top-right operating method block */}
  </section>
  <section className="about-zone about-zone--standards">
    {/* bottom-left practical principles block */}
  </section>
  <section className="about-zone about-zone--fit">
    {/* bottom-right fit / CTA block */}
  </section>
</section>
```

- [ ] **Step 3: Build the dominant top-left statement block from the current editorial intro copy**

```tsx
<section className="about-zone about-zone--statement">
  <div className="about-zone__header">
    <p className="about-lower__eyebrow">How We Think</p>
    <h2>Technology should make the business clearer, not louder.</h2>
    <p>
      Intelligencia combines website development, systems improvement,
      and technology advisory so leaders can make better decisions about
      the digital layer of the business.
    </p>
  </div>
</section>
```

- [ ] **Step 4: Build the top-right method zone from the current process content**

```tsx
<section className="about-zone about-zone--method">
  <div className="about-zone__header">
    <p className="about-lower__eyebrow">How We Work</p>
    <h2>The work moves from diagnosis to execution to continuity.</h2>
    <p>
      Every engagement is shaped around the business problem first, then
      translated into practical technology decisions and implementation
      steps.
    </p>
  </div>
  <div className="about-method__list">
    {operatingModel.map((step, index) => (
      <article className="about-method__step" key={step.title}>
        <span>{String(index + 1).padStart(2, "0")}</span>
        <div>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </div>
      </article>
    ))}
  </div>
</section>
```

- [ ] **Step 5: Build the bottom-left standards zone from the current principles content**

```tsx
<section className="about-zone about-zone--standards">
  <div className="about-zone__header">
    <p className="about-lower__eyebrow">Working Standards</p>
    <h2>Four operating principles keep the work disciplined.</h2>
  </div>
  <div className="about-standards__grid">
    {principles.map((principle) => (
      <article className="about-standards__card" key={principle.title}>
        <h3>{principle.title}</h3>
        <p>{principle.text}</p>
      </article>
    ))}
  </div>
</section>
```

- [ ] **Step 6: Build the bottom-right fit zone by reusing the current fit copy and CTA**

```tsx
<section className="about-zone about-zone--fit">
  <div className="about-fit__copy">
    <p className="about-lower__eyebrow">Fit</p>
    <h2>
      A good fit is a serious operational or digital problem, not a
      vague technology wish list.
    </h2>
    <p>
      Intelligencia is best suited for growing organizations that need a
      sharper website, a cleaner workflow, better system coordination,
      or more confident technology oversight.
    </p>
    <AnimatedLayerButtonLink
      className="animated-layer-button--page"
      href="/contact"
    >
      Book a Consultation
    </AnimatedLayerButtonLink>
  </div>
  <div className="about-fit__signals" aria-label="Good fit signals">
    {fitSignals.map((signal) => (
      <div className="about-fit__signal" key={signal}>
        <p>{signal}</p>
      </div>
    ))}
  </div>
</section>
```

### Task 2: Add the 2x2 About Viewport Layout

**Files:**
- Modify: [`app/globals.css`](C:/Projects/ApplicationDevelopment/Sikky/Intelligencia/app/globals.css)

- [ ] **Step 1: Replace the stacked lower-page gap wrapper with a viewport-level grid**

```css
.about-viewport {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  grid-template-rows: minmax(0, 0.52fr) minmax(0, 0.48fr);
  grid-template-areas:
    "statement method"
    "standards fit";
  min-height: 100svh;
  gap: 0;
  padding: 52px 0 18px;
  color: #f7f1e8;
}
```

- [ ] **Step 2: Add shared zone treatment so the page reads as one connected system**

```css
.about-zone {
  position: relative;
  min-height: 0;
  overflow: hidden;
  padding: 26px;
}

.about-zone__header {
  display: grid;
  gap: 16px;
}

.about-zone__header h2 {
  margin: 0;
  font-family: var(--font-display), serif;
  font-weight: 600;
  line-height: 0.96;
}
```

- [ ] **Step 3: Add a dominant top-left statement zone**

```css
.about-zone--statement {
  grid-area: statement;
  display: grid;
  align-content: center;
  padding: 36px 36px 36px 10px;
}

.about-zone--statement .about-zone__header {
  max-width: 640px;
}

.about-zone--statement h2 {
  font-size: clamp(3rem, 4.1vw, 5.2rem);
}

.about-zone--statement p:last-child {
  max-width: 560px;
  color: rgba(247, 241, 232, 0.74);
  font-size: 1rem;
  line-height: 1.72;
}
```

- [ ] **Step 4: Add a structured top-right method zone**

```css
.about-zone--method {
  grid-area: method;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  gap: 24px;
  border-left: 1px solid rgba(216, 181, 132, 0.14);
  border-bottom: 1px solid rgba(216, 181, 132, 0.14);
  background: rgba(7, 21, 32, 0.42);
  backdrop-filter: blur(8px);
}

.about-zone--method h2 {
  font-size: clamp(2rem, 2.8vw, 3.4rem);
}

.about-method__list {
  display: grid;
  align-content: start;
  gap: 12px;
}

.about-method__step {
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr);
  gap: 16px;
  padding: 16px 18px;
  border: 1px solid rgba(216, 181, 132, 0.16);
  border-radius: 22px;
  background: rgba(247, 241, 232, 0.06);
}
```

- [ ] **Step 5: Add a more compact bottom-left standards zone**

```css
.about-zone--standards {
  grid-area: standards;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  gap: 22px;
  border-top: 1px solid rgba(216, 181, 132, 0.14);
  padding-right: 22px;
}

.about-zone--standards h2 {
  max-width: 12ch;
  font-size: clamp(2rem, 2.7vw, 3.25rem);
}

.about-standards__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.about-standards__card {
  display: grid;
  align-content: start;
  gap: 12px;
  min-height: 0;
  padding: 22px 20px;
  border: 1px solid rgba(216, 181, 132, 0.14);
  border-radius: 22px;
  background: rgba(8, 25, 38, 0.22);
}
```

- [ ] **Step 6: Add a bottom-right fit zone that keeps conversion controlled**

```css
.about-zone--fit {
  grid-area: fit;
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(260px, 0.72fr);
  gap: 24px;
  align-items: stretch;
  border-left: 1px solid rgba(216, 181, 132, 0.14);
  border-top: 1px solid rgba(216, 181, 132, 0.14);
  padding-left: 30px;
  background:
    linear-gradient(135deg, rgba(12, 29, 43, 0.92) 0%, rgba(7, 21, 32, 0.96) 100%);
}
```

### Task 3: Rework About-Specific Typography and Surface Details

**Files:**
- Modify: [`app/globals.css`](C:/Projects/ApplicationDevelopment/Sikky/Intelligencia/app/globals.css)

- [ ] **Step 1: Retune the existing About-specific eyebrow and body copy styles for the new viewport**

```css
.about-lower__eyebrow {
  margin: 0;
  color: rgba(214, 172, 110, 0.9);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  line-height: 1;
  text-transform: uppercase;
}

.about-zone--method .about-zone__header p,
.about-standards__card p,
.about-fit__signal p,
.about-fit__copy p {
  margin: 0;
  color: rgba(247, 241, 232, 0.72);
  line-height: 1.62;
}
```

- [ ] **Step 2: Replace the old process-track and principles block look with new card-scale typography**

```css
.about-method__step span {
  color: rgba(214, 172, 110, 0.84);
  font-family: var(--font-display), serif;
  font-size: 1rem;
  line-height: 1;
}

.about-method__step h3,
.about-standards__card h3 {
  margin: 0 0 6px;
  color: #f7f1e8;
  font-family: var(--font-display), serif;
  font-size: 1.32rem;
  line-height: 1.04;
}
```

- [ ] **Step 3: Keep the fit signals visually subordinate to the main fit copy**

```css
.about-fit__signals {
  display: grid;
  align-content: center;
  gap: 12px;
}

.about-fit__signal {
  display: grid;
  min-height: 0;
  padding: 18px 18px 20px;
  border: 1px solid rgba(216, 181, 132, 0.18);
  border-radius: 22px;
  background: rgba(247, 241, 232, 0.07);
}
```

### Task 4: Add Responsive Collapse Rules

**Files:**
- Modify: [`app/globals.css`](C:/Projects/ApplicationDevelopment/Sikky/Intelligencia/app/globals.css)

- [ ] **Step 1: Add a tablet breakpoint that preserves the four zones but softens the density**

```css
@media (max-width: 1180px) {
  .about-viewport {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "statement"
      "method"
      "standards"
      "fit";
    min-height: auto;
    padding-top: 22px;
  }

  .about-zone--method,
  .about-zone--fit {
    border-left: 0;
  }

  .about-zone--standards,
  .about-zone--fit {
    border-top: 1px solid rgba(216, 181, 132, 0.14);
  }
}
```

- [ ] **Step 2: Add a mobile breakpoint that turns supporting grids into one-column stacks**

```css
@media (max-width: 720px) {
  .about-zone {
    padding: 24px 22px;
  }

  .about-standards__grid,
  .about-zone--fit {
    grid-template-columns: 1fr;
  }

  .about-zone--statement h2,
  .about-zone--method h2,
  .about-zone--standards h2,
  .about-fit__copy h2 {
    max-width: none;
    font-size: 2.55rem;
    line-height: 0.98;
  }
}
```

### Task 5: Verify the About Lower-Page Rebuild

**Files:**
- Modify: none

- [ ] **Step 1: Run the project build**

Run:

```powershell
npm run build
```

Expected: successful production build with no TypeScript or Next.js route errors.

- [ ] **Step 2: Check the About route**

Run:

```powershell
Invoke-WebRequest -Uri http://localhost:3000/about -UseBasicParsing -TimeoutSec 5 | Select-Object -ExpandProperty StatusCode
```

Expected: `200`

- [ ] **Step 3: Visually inspect the lower page**

Check:

- hero remains unchanged
- the lower page reads as one integrated viewport on desktop
- top-left statement is the strongest visual anchor
- the page no longer reads as three stacked bands
- tablet and mobile collapse vertically without overflow

## Self-Review

- Spec coverage: the plan replaces the stacked About lower page with one 4-zone viewport, centers the top-left statement, preserves the hero, and keeps the fit zone supportive rather than dominant.
- Placeholder scan: no `TBD`, `TODO`, or undefined implementation steps remain.
- Type consistency: `about-viewport`, `about-zone--statement`, `about-zone--method`, `about-zone--standards`, `about-zone--fit`, `about-method__list`, and `about-standards__grid` are used consistently across tasks.
