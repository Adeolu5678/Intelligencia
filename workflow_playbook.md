# Monolith Advisory Workflow Playbook

## Purpose
This playbook captures the full workflow used to build and redesign the Monolith Advisory website so the same process can be repeated on future projects.

It combines two layers:

1. **The baseline video workflow** used to go from idea to live website.
2. **The expanded redesign system** used afterward to push the site toward a premium, more bespoke result.

---

## 1. Project Intent Definition

Before design or code, define the site in one sentence:

**Monolith Advisory is a premium security advisory and management website for governments and high-risk institutions, with services including security advisory, crisis response, hostage rescue support, drone surveillance, personnel training, and workshops.**

For future projects, begin by writing:
- what the business is
- who it serves
- what the services are
- what tone the site should communicate
- what level of quality the site should feel like

### Required output
- positioning statement
- target audience
- core service list
- tone keywords
- geographic or institutional context

---

## 2. Follow the Video Workflow First

The original build followed a structured sequence.

### Phase A: Foundation
- Define site purpose
- Define pages
- Define content themes
- Define tone and visual direction

### Phase B: Structure
- Create sitemap
- Create page hierarchy
- Create section-level wireframe thinking
- Establish content priorities per page

### Phase C: First Build
- Generate / scaffold the multi-page React or Next.js site
- Connect routes
- Build the first functional version
- Establish reusable components
- Get the site working before refining it

### Phase D: Asset and Image System
- Identify all actual image placeholders used by the site
- Build an asset map so only needed images are generated
- Generate images slot-by-slot, page-by-page
- Use realistic aspect-ratio-aware image generation
- Validate each test image before allowing broad generation

### Phase E: Improvement and Launch
- Refine visuals
- Add selective animation
- Prepare for deployment
- Push to GitHub
- Deploy to Vercel

---

## 3. Image Workflow That Was Used

A major part of the workflow was not “generate many images randomly.” It was a controlled pipeline.

### Core rules
- Generate **only for real placeholders** already present in the website
- Match image orientation and aspect ratio to the exact slot
- Use a prompt library + asset map, not ad hoc prompting
- Test one image first before doing wider batches
- Review images page by page
- Avoid overgeneration

### Image generation system used
1. Build asset map for every placeholder.
2. Store page, section, filename, purpose, aspect ratio, orientation, target resolution, and visual category.
3. Use prompt doctrine + slot-specific prompts.
4. Use global positive and global negative prompt logic.
5. Bias prompts toward the actual market context.
6. Review outputs before moving to broader runs.

### Quality lessons from the image process
- Nigerian / West African context had to be explicit
- Predominantly African personnel should appear where appropriate
- Western corporate defaults had to be pushed back against
- Documentary editorial realism worked better than glossy corporate aesthetics
- Some images were stronger than others; not every generated image should be treated as equally good
- Hero or flagship images needed more scrutiny than supporting thumbnails

### Future rule
For other projects, always create:
- asset map
- prompt library
- negative prompt doctrine
- one-image test protocol
- page-by-page generation order

---

## 4. Core Redesign Philosophy Used After Initial Build

After the base site existed, the redesign phase introduced a more advanced system.

This second system is what turned the site from a functional build into a more premium, structured experience.

### The redesign was based on these principles
- Do not merely polish; recompose
- Think in **viewport-sized experiences**, not long stacked pages
- Preserve one coherent system across pages
- But do **not** make every page look structurally identical
- Use stronger hierarchy, less clutter, better edge alignment
- Remove decorative labels if they do not help
- Solve dead space intentionally
- Make pages feel premium through layout discipline, not flashy ornament

---

## 5. The Shared Sitewide Redesign System

This became the common design language across pages.

### 5.1 Viewport Discipline
Every major page was divided into a small number of large desktop/laptop viewports.

**Rule:** each major viewport should fit roughly within one laptop screen.

This created:
- cleaner pacing
- stronger section identity
- better visual control
- more premium presentation

### 5.2 Snap Scrolling
Desktop-only, light-touch scroll snapping was used.

**Rule:** use gentle proximity snapping, not aggressive JS-driven scroll lock.

### 5.3 Divider Logic
Major viewports were separated using subtle divider lines instead of heavy section borders.

### 5.4 Background Discipline
- Dark sections use disciplined blue
- Light sections sit on a consistent light background
- Gold is an accent, not an environmental wash
- Avoid random background shifts

### 5.5 Eyebrow Reduction
Many small labels were removed.

**Rule:** if hierarchy is already clear from composition and typography, remove extra labels.

### 5.6 Navbar Clearance
No viewport content should collide with the fixed nav.

**Rule:** solve clearance inside the viewport, not by making the viewport taller.

---

## 6. Shared Composition Rules Across Pages

These rules were repeatedly reinforced.

### 6.1 Recompose Inside the Same Height First
If something feels too small or empty:
- enlarge the parent card within the viewport
- tighten spacing
- enlarge type
- move content blocks
- redistribute internal zones

Do **not** immediately make the whole viewport taller.

### 6.2 Dead Space Must Be Solved Intentionally
Use one of these:
- stronger copy
- larger type
- meaningful image
- redistributed spacing
- repositioned child block

Do not leave empty pockets without reason.

### 6.3 Positional Fixes Must Stay Positional
If the issue is “move this block,” do not solve it by resizing the parent.

### 6.4 Freeze Approved Parents
Once a user approves a parent card or viewport height, stop reopening it.
Only refine the interior unless explicitly told otherwise.

### 6.5 Images Must Be Intentional
- preserve aspect ratio
- use the established image system
- do not distort
- do not reuse familiar images lazily
- choose assets by semantic role, not convenience

---

## 7. The “Aligned But Not Repetitive” Rule

This became the most important redesign principle.

All pages must share:
- viewport logic
- width discipline
- background discipline
- typography seriousness
- nav clearance
- section pacing

But they must **not** share the same middle layout.

### Meaning
- homepage can be a root reference
- insights can be editorial
- capabilities can be an atlas / system view
- government can be a mandate board
- about can be a leadership dossier
- training can be a runway / programme ledger

For future projects:
- define one global design system
- then define a **distinct composition family for each page**

---

## 8. Page-by-Page Redesign Method Used

For each page, the process became:

1. Keep the hero inside the shared interior-page family
2. Keep the final CTA / inquiry area inside the shared closing family
3. Make the **middle of the page unique**
4. Remove redundant labels
5. Replace weak image reuse with better-matched assets
6. Compress into one-screen viewports
7. Fix dead space
8. Tune internal hierarchy
9. Only then move on

This sequence should be reused for future projects.

---

## 9. The Practical Build Sequence to Repeat on Other Projects

Here is the reusable SOP.

### Step 1 — Define the site clearly
Write:
- business identity
- audience
- services
- tone
- geographic / market context
- desired quality level

### Step 2 — Follow the video baseline
Create:
- sitemap
- page list
- section map
- basic visual direction
- base React / Next build

### Step 3 — Build the functional site first
Before refinement:
- all routes should work
- all pages should exist
- nav should connect pages
- content should be structurally placed
- forms / buttons / CTAs should exist in basic form

### Step 4 — Build the placeholder asset map
Document each image slot:
- page
- section
- filename
- ratio
- purpose
- orientation
- resolution
- content intent

### Step 5 — Create prompt doctrine
Build:
- positive doctrine
- negative doctrine
- market/context bias
- test-image workflow
- slot-specific prompts

### Step 6 — Generate images carefully
- test one image first
- inspect realism, relevance, demographic context, and composition
- refine prompt system if needed
- then batch page by page
- never generate more than the real placeholders need

### Step 7 — Populate the website with the approved images
- attach approved images to the correct placeholders only
- preserve the exact mapping
- do not improvise placement

### Step 8 — Start the premium redesign phase
Do not redesign randomly.
Apply the system:
- viewport-based structure
- divider logic
- background discipline
- reduced eyebrow clutter
- higher hierarchy discipline
- page-specific composition families

### Step 9 — Redesign page by page
For each page:
- preserve hero family
- preserve closing CTA family
- invent a unique middle composition
- fix dead space
- increase intentionality
- avoid cloning previously finished pages

### Step 10 — Use broader asset selection
Before finalizing a page:
- inspect the wider generated asset library
- choose best-fit images, not just already-used favorites

### Step 11 — Add selective animation only after structure is good
Animation should be:
- limited
- purposeful
- scroll-aware or transition-aware
- reduced-motion friendly
- not flashy

### Step 12 — Deployment
- verify build
- verify routes
- verify assets
- verify responsive behavior
- push to GitHub
- deploy to Vercel

### Step 13 — Post-launch polish
After launch:
- review on laptop first
- then mobile
- note weak images for future regeneration
- note hierarchy issues
- note motion issues
- schedule refinement later if needed

---

## 10. The Roles AI Agents Played In This Workflow

The process worked because agents were used for different jobs, not as one single “magic” prompt.

### Best way to use agents in future projects
Use separate agents or separate phases for:
- structure generation
- asset mapping
- prompt library building
- image batching
- page-by-page redesign
- deployment
- post-launch cleanup

### Important working pattern
At the end of each phase, create a handoff document that captures:
- what changed
- why it changed
- what rules were established
- what should not be reopened casually

That is exactly what made the later redesign phases more consistent.

---

## 11. The Most Important Rules To Carry Forward

If you repeat this workflow for other projects, these are the non-negotiables:

### Structural
- one-screen viewport discipline on desktop/laptop
- no navbar overlap
- no lazy section sprawl
- no automatic increase of viewport height

### Design
- align all pages to one system
- do not make all pages structurally identical
- use stronger hierarchy, less clutter
- remove unnecessary labels
- solve dead space deliberately

### Image
- map placeholders first
- generate only needed assets
- test before batch generation
- preserve aspect ratios
- choose images by semantic fit
- avoid habitual reuse

### Process
- freeze approved parent structures
- solve internal issues inside approved structures
- treat positional fixes as positional
- document every major phase

### Quality
- layout quality matters more than sheer decoration
- premium comes from discipline, proportion, and clarity
- motion should support structure, not distract from it

---

## 12. Reusable Workflow Template For Future Projects

Use this checklist at the start of the next project.

### Discovery
- [ ] define business identity
- [ ] define audience
- [ ] define services
- [ ] define market / cultural context
- [ ] define tone and price-level quality target

### Baseline Build
- [ ] create sitemap
- [ ] create page structure
- [ ] create base React / Next site
- [ ] connect routes
- [ ] add content shells

### Asset System
- [ ] audit all placeholders
- [ ] build asset map
- [ ] build prompt doctrine
- [ ] create test generation plan
- [ ] generate 1 test image
- [ ] review and refine
- [ ] batch page by page

### Premium Redesign
- [ ] establish shared viewport system
- [ ] establish divider/background/nav rules
- [ ] redesign homepage first as system reference
- [ ] redesign each interior page uniquely within the same system
- [ ] use wider asset library
- [ ] fix dead space
- [ ] remove redundant labels
- [ ] tune hierarchy

### Motion
- [ ] add 1–2 strategic animations only where structure is already good
- [ ] ensure reduced-motion safety

### Deployment
- [ ] verify build
- [ ] verify assets
- [ ] push GitHub repo
- [ ] deploy to Vercel
- [ ] QA live site

### Documentation
- [ ] write handoff for each major page or phase
- [ ] capture design rules that emerged
- [ ] capture what is frozen vs still open for refinement

---

## 13. Recommended Output Format For Future Projects

For every future site, produce these 6 documents:

1. **Project Brief**
2. **Sitemap + Section Map**
3. **Asset Map**
4. **Prompt Library**
5. **Redesign Handoff / Constraint System**
6. **Deployment Notes**

This keeps the workflow repeatable and much easier to scale.

---

## 14. Final Summary

The Monolith Advisory workflow was successful because it was not just “build a website.”

It was:
- define clearly
- build structurally
- map assets precisely
- generate images carefully
- redesign through a disciplined system
- make each page unique without breaking the global design language
- deploy only after the experience is coherent

That is the repeatable method.

If reused properly, this can become your house process for premium multi-page websites across completely different sectors.

