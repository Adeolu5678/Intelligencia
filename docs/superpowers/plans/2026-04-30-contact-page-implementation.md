# Contact Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the `/contact` lower page into a single conversion-focused consultation section with a compact intro rail and a dominant form panel.

**Architecture:** Keep the existing hero intact, remove the generic `ContactCards` usage from the page, and introduce a contact-specific integrated lower section. Reuse the current `InquiryForm` field semantics, but wrap them in a bespoke consultation layout and contact-page-specific selectors so the redesign stays narrow.

**Tech Stack:** Next.js App Router, React, TypeScript, global CSS in `app/globals.css`

---

## File Structure

- Modify [`app/contact/page.tsx`](C:/Projects/ApplicationDevelopment/Sikky/Intelligencia/app/contact/page.tsx)
  Responsibility: replace the generic lower-page composition with one bespoke consultation block.
- Modify [`components/sections.tsx`](C:/Projects/ApplicationDevelopment/Sikky/Intelligencia/components/sections.tsx)
  Responsibility: add a contact-specific integrated consultation section and keep the reusable form structure in one place.
- Modify [`app/globals.css`](C:/Projects/ApplicationDevelopment/Sikky/Intelligencia/app/globals.css)
  Responsibility: add contact-page-specific layout and visual treatment for the integrated consultation block and its responsive behavior.

### Task 1: Replace the Generic Contact Composition

**Files:**
- Modify: [`app/contact/page.tsx`](C:/Projects/ApplicationDevelopment/Sikky/Intelligencia/app/contact/page.tsx)
- Modify: [`components/sections.tsx`](C:/Projects/ApplicationDevelopment/Sikky/Intelligencia/components/sections.tsx)

- [ ] **Step 1: Remove `ContactCards` from the contact page imports and prepare a single integrated section import**

```tsx
import { ContactConsultationSection } from "@/components/sections";
```

- [ ] **Step 2: Replace the current `contactDetails` array with a smaller `consultationSignals` array**

```tsx
const consultationSignals = [
  {
    title: "Best fit",
    text: "Organizations with a real business problem to solve across websites, systems, automation, or ongoing technology direction.",
  },
  {
    title: "What to bring",
    text: "A concise description of the friction, the tools involved, and the outcome that matters most right now.",
  },
  {
    title: "Next step",
    text: "After review, the next step is a focused conversation about fit, urgency, and the right starting scope.",
  },
];
```

- [ ] **Step 3: Replace the generic `ContactCards` and standalone `InquiryForm` usage with one integrated section**

```tsx
<ContactConsultationSection
  eyebrow="Consultation"
  title="Start a serious project conversation."
  description="Use the form to outline the problem, the operating context, and the outcome you need. The page is intentionally brief so qualified inquiries can move forward without friction."
  items={consultationSignals}
/>
```

- [ ] **Step 4: Add a dedicated `ContactConsultationSection` export in `components/sections.tsx`**

```tsx
export function ContactConsultationSection({
  eyebrow,
  title,
  description,
  items,
}: IntroProps & { items: GridItem[] }) {
  return (
    <section className="contact-consultation section" id="inquiry">
      <div className="contact-consultation__intro">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="contact-consultation__signals">
          {items.map((item) => (
            <article key={item.title} className="contact-consultation__signal">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="contact-consultation__form-shell">
        <InquiryForm compact />
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Update `InquiryForm` so it can render inside the new integrated layout without duplicating section framing**

```tsx
export function InquiryForm({ compact = false }: { compact?: boolean } = {}) {
  return (
    <section className={compact ? "contact-form contact-form--compact" : "card section page-stack contact-form"}>
      {!compact ? (
        <SectionIntro
          eyebrow="Consultation"
          title="Start a serious project conversation."
          description="This baseline form is structured for qualification and easy replacement with a live CRM or form backend later."
        />
      ) : (
        <div className="contact-form__intro">
          <p className="eyebrow">Inquiry Form</p>
          <h3>Describe the problem clearly.</h3>
          <p>The more concrete the operating context is, the easier it is to assess fit and next steps.</p>
        </div>
      )}
      <form className="form-shell form-grid">
        {/* existing fields remain unchanged */}
      </form>
    </section>
  );
}
```

### Task 2: Add the Contact-Specific Visual System

**Files:**
- Modify: [`app/globals.css`](C:/Projects/ApplicationDevelopment/Sikky/Intelligencia/app/globals.css)

- [ ] **Step 1: Add a single integrated layout wrapper for the lower contact section**

```css
.contact-consultation {
  display: grid;
  grid-template-columns: minmax(280px, 0.86fr) minmax(0, 1.14fr);
  gap: 32px;
  align-items: stretch;
  padding: 18px 0 8px;
}
```

- [ ] **Step 2: Add the intro rail styles so the page reads as deliberate, minimal, and qualification-first**

```css
.contact-consultation__intro {
  display: grid;
  align-content: start;
  gap: 20px;
  padding: 34px 30px 34px 0;
}

.contact-consultation__intro h2 {
  margin: 0;
  max-width: 12ch;
  color: #172736;
  font-family: var(--font-display), serif;
  font-size: clamp(2.35rem, 3.2vw, 4.2rem);
  line-height: 0.96;
}

.contact-consultation__intro > p:last-of-type {
  max-width: 34rem;
  margin: 0;
  color: #51606d;
  font-size: 0.98rem;
  line-height: 1.72;
}
```

- [ ] **Step 3: Add compact signal styling instead of the current card grid**

```css
.contact-consultation__signals {
  display: grid;
  gap: 14px;
  margin-top: 10px;
}

.contact-consultation__signal {
  display: grid;
  gap: 6px;
  padding: 0 0 14px;
  border-bottom: 1px solid rgba(23, 39, 54, 0.12);
}

.contact-consultation__signal:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.contact-consultation__signal h3 {
  margin: 0;
  color: #172736;
  font-family: var(--font-display), serif;
  font-size: 1.18rem;
  line-height: 1.02;
}

.contact-consultation__signal p {
  margin: 0;
  color: #52606d;
  font-size: 0.92rem;
  line-height: 1.62;
}
```

- [ ] **Step 4: Add a stronger form-side surface so the inquiry area is the primary object**

```css
.contact-consultation__form-shell {
  display: grid;
  align-items: stretch;
}

.contact-form--compact {
  display: grid;
  gap: 22px;
  padding: 34px 32px 30px;
  border: 1px solid rgba(23, 39, 54, 0.1);
  border-radius: 30px;
  background: rgba(255, 253, 250, 0.82);
  box-shadow: 0 24px 60px rgba(23, 39, 54, 0.1);
  backdrop-filter: blur(10px);
}

.contact-form__intro {
  display: grid;
  gap: 10px;
}

.contact-form__intro h3 {
  margin: 0;
  color: #172736;
  font-family: var(--font-display), serif;
  font-size: clamp(1.72rem, 2.2vw, 2.6rem);
  line-height: 0.98;
}

.contact-form__intro p {
  margin: 0;
  color: #51606d;
}
```

- [ ] **Step 5: Add responsive rules so the section becomes one clean vertical stack on smaller screens**

```css
@media (max-width: 980px) {
  .contact-consultation {
    grid-template-columns: 1fr;
    gap: 24px;
    padding-top: 8px;
  }

  .contact-consultation__intro {
    padding: 0;
  }
}

@media (max-width: 640px) {
  .contact-form--compact {
    padding: 26px 20px 22px;
    border-radius: 24px;
  }

  .contact-consultation__intro h2 {
    max-width: none;
    font-size: 2.5rem;
  }
}
```

### Task 3: Keep the Form Semantics Stable While Tightening Copy

**Files:**
- Modify: [`components/sections.tsx`](C:/Projects/ApplicationDevelopment/Sikky/Intelligencia/components/sections.tsx)

- [ ] **Step 1: Preserve the existing field structure and labels**

```tsx
<div className="field-grid">
  <div className="field">
    <label htmlFor="name">Name</label>
    <input id="name" name="name" placeholder="Your full name" type="text" />
  </div>
  <div className="field">
    <label htmlFor="company">Company</label>
    <input id="company" name="company" placeholder="Company or organization" type="text" />
  </div>
</div>
```

- [ ] **Step 2: Tighten the compact-form footer note so it reads as implementation-neutral**

```tsx
<div className="actions">
  <AnimatedLayerButton className="animated-layer-button--page" type="submit">
    Submit Inquiry
  </AnimatedLayerButton>
  <span className="muted">
    This form currently acts as a structural placeholder for future CRM or backend integration.
  </span>
</div>
```

- [ ] **Step 3: Keep `id="inquiry"` addressable from the hero CTA**

```tsx
<section className="contact-consultation section" id="inquiry">
```

### Task 4: Verify the Contact Page Build and Layout

**Files:**
- Modify: none

- [ ] **Step 1: Run the project build**

Run:

```powershell
npm run build
```

Expected: successful production build with no TypeScript or Next.js route errors.

- [ ] **Step 2: Start or use the local app and check the contact route**

Run:

```powershell
Invoke-WebRequest -Uri http://localhost:3000/contact -UseBasicParsing -TimeoutSec 5 | Select-Object -ExpandProperty StatusCode
```

Expected: `200`

- [ ] **Step 3: Visually inspect desktop and mobile stacking**

Check:

- the hero remains unchanged
- there is only one lower section
- the intro rail stays compact
- the form reads as the dominant object
- mobile layout collapses to one column without overflow

## Self-Review

- Spec coverage: the plan replaces the generic multi-section lower area with one integrated consultation section, keeps the page minimal, preserves the hero, and prioritizes the form.
- Placeholder scan: no `TODO`, `TBD`, or abstract “handle later” implementation steps remain.
- Type consistency: `ContactConsultationSection`, `InquiryForm({ compact })`, and `consultationSignals` are named consistently across tasks.
