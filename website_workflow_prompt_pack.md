# Website Workflow Prompt Pack

This prompt pack is designed for repeating the full Monolith-style workflow across future website projects.

It is organized into modular prompts so you can use a new agent for each phase or continue with the same agent in separate conversations.

---

## How to Use This Pack

Use the prompts in this order:

1. Discovery + positioning
2. Sitemap + page strategy
3. Base build
4. Asset map
5. Prompt library
6. Test image generation
7. Batch image generation
8. Image placement
9. Premium redesign system
10. Page-by-page redesign
11. Motion / animation
12. Deployment + QA
13. Handoff / documentation

### Recommended rule
At the start of each new conversation, paste:
- the relevant prompt from this pack
- the current repo context
- any existing handoff doc from the prior phase

---

# 1. Discovery + Positioning Prompt

Use this first, before design or code.

```text
I want you to help me define the strategic foundation for a website project.

Project type:
[INSERT PROJECT TYPE]

Business / brand name:
[INSERT NAME]

What it does:
[INSERT DESCRIPTION]

Target audience:
[INSERT AUDIENCE]

Services / offers:
[INSERT SERVICES]

Primary market or geography:
[INSERT CONTEXT]

Desired quality level:
[example: premium, luxury, institutional, editorial, product-led, enterprise, minimalist, cinematic]

What I need from you:
1. A sharp one-paragraph positioning statement
2. A clear breakdown of audience segments
3. A refined service / offer structure
4. Tone and brand character keywords
5. Recommended website goals
6. Recommended page list
7. A concise creative direction summary I can reuse in later prompts

Be decisive and structured. Do not give vague branding fluff. Make it practical and specific enough to guide design, copy, and image generation.
```

---

# 2. Sitemap + Page Strategy Prompt

Use this once the project identity is clear.

```text
I want you to define the sitemap and page strategy for this website.

Project summary:
[PASTE POSITIONING / DISCOVERY OUTPUT]

Your job:
1. Recommend the core page list
2. Define the purpose of each page
3. Define the main sections that should exist on each page
4. Clarify which pages are primary conversion pages vs support pages
5. Suggest the correct content hierarchy across the site
6. Flag where forms, CTAs, testimonials, case studies, service blocks, FAQs, or inquiry modules should appear

Output format:
- Page list
- Purpose of each page
- Section list per page
- Conversion role per page
- Notes on content priority

Do not design yet. I want clean structure and hierarchy first.
```

---

# 3. Base Build Prompt

Use this to get the first working multi-page website built.

```text
I want you to build the first functional version of this website in the repo.

Context:
[PASTE SITEMAP / PAGE STRATEGY]

Requirements:
- Use the existing stack in the repo
- Build all required pages and wire them through navigation
- Create reusable components where appropriate
- Focus on structure, layout shell, and content hierarchy first
- Do not over-polish yet
- The website should already feel coherent, but this is not the final premium redesign phase
- Make the site fully navigable and logically organized

Important:
- Prioritize clean page structure and reusable section architecture
- Keep code readable and maintainable
- Do not invent unnecessary complexity
- If placeholder imagery is needed, keep it easy to replace later

Deliverables:
1. Summary of files created/updated
2. What pages now exist
3. What remains placeholder vs final
4. Any assumptions made
```

---

# 4. Asset Map Prompt

Use this before generating any images.

```text
I want you to audit the website and build a strict asset map for all image placeholders that actually exist in the UI.

Your task:
1. Inspect the current site structure and identify every real image slot / placeholder
2. Build a production-ready asset map for only those slots
3. For each slot, define:
   - page
   - section
   - asset key
   - intended filename
   - purpose
   - aspect ratio
   - orientation
   - target resolution
   - visual category
   - composition notes
4. Make sure the asset map matches the actual layout, so we do not overgenerate
5. Keep the system easy to use later for automated or semi-automated image generation

Important constraints:
- Do not generate images yet
- Do not add new placeholders unless I explicitly ask
- We only want assets for real slots already in the website
- Aspect ratio accuracy matters

Output:
- summary of total slots
- grouped by page
- final asset map file or structured object
```

---

# 5. Prompt Library Prompt

Use this after the asset map exists.

```text
I want you to create a reusable prompt library for generating all website imagery from the asset map.

Inputs:
- the current asset map
- the business identity
- the target audience
- the geographic / cultural context
- the desired visual tone

Your task:
1. Create a global positive doctrine
2. Create a global negative doctrine
3. Create a reusable prompt template structure
4. Create modular prompt blocks that can be reused across many assets
5. Ensure prompts are realistic, context-aware, and aligned to the business
6. Bias the prompts away from generic stock-photo output
7. Make the prompts aspect-ratio-aware when appropriate
8. Make the system easy to extend later

Important:
- We want premium, believable, context-specific imagery
- Avoid vague prompt writing
- Avoid over-cinematic nonsense if the project needs realism
- If the project has a regional or institutional context, build that into the doctrine explicitly

Output:
- prompt library file / object
- explanation of prompt doctrine
- recommended first test asset
```

---

# 6. Test Image Generation Prompt

Use this before any major batch run.

```text
I do not want to batch-generate images yet.

Use the existing asset map and prompt library to identify the single best test image to generate first.

Your task:
1. Pick one slot that gives the best signal on overall image quality
2. Explain why it is the best first test
3. Run only that single generation
4. Save it to the correct mapped output location
5. Show me:
   - the exact prompt used
   - the negative prompt used
   - the saved file path
   - any generation metadata
6. Do not generate any other images until I review this one

Important:
- No batch processing yet
- No extra images
- Use the exact mapped aspect ratio / placeholder logic
```

---

# 7. Batch Image Generation Prompt

Use this only after the test result is approved.

```text
The test generation is approved.

I want you to proceed with controlled batch generation using the existing asset map and prompt library.

Rules:
1. Generate only for real mapped placeholders
2. Do not create extra images beyond the mapped slots
3. Work page by page
4. Stay faithful to the correct aspect ratio and output destination for each slot
5. Save everything to its correct mapped location
6. Reuse the shared prompt doctrine, but adapt each asset to its specific slot prompt
7. Do not modify the website structure while doing this

Working method:
- Move page by page
- For each page, list the slots you are generating
- After each page batch, summarize what was generated and saved
- If any slot has ambiguity or higher risk, flag it instead of guessing wildly

Output for each batch:
- page name
- slots generated
- saved file paths
- any issues or weaker outputs to note for later refinement
```

---

# 8. Image Placement Prompt

Use this after image generation is done and you want the placeholders populated.

```text
I want you to populate the website placeholders with the generated images using the existing asset map.

Important:
- The mapping already defines where each image belongs
- Do not invent new placements
- Do not add extra image usage beyond the mapped slots
- Use the correct image for each placeholder exactly as defined
- Preserve the existing component/image system already used in the repo

Your task:
1. Wire each generated image into its correct placeholder
2. Verify that all placements follow the mapped aspect ratio logic
3. Ensure the site uses only the images that belong in the real slots
4. Summarize what placeholders were populated and what remains unchanged

Do not redesign the page in this step. Only populate placeholders correctly.
```

---

# 9. Premium Redesign System Prompt

Use this once the site is structurally built and populated.

```text
I want you to redesign this website into a more premium, high-end, bespoke experience.

Important context:
This is not a generic template site. I want a result that feels expensive, intentional, and highly designed.

However, I do NOT want random redesign decisions.

I want you to create and apply a shared page system based on these principles:
- major desktop/laptop sections should behave like viewport-sized experiences
- pages should feel structured and disciplined, not like endless stacked blocks
- hierarchy should be stronger and more premium
- background treatment should feel consistent and controlled
- divider logic between major viewports should be subtle
- eyebrow clutter should be reduced where unnecessary
- layouts should feel outward-balanced, not overly center-compressed
- dead space should be solved intentionally
- premium quality should come from composition and discipline, not flashy decoration

Critical rule:
All pages must belong to the same overall design system, but their middle sections must NOT all use the same layout structure.

Your task:
1. Establish the shared redesign rules
2. Apply them first to the homepage as the reference implementation
3. Document the structural rules that emerge so later pages can align to them
4. Keep the result practical to implement in the current repo

Deliverables:
- summary of the redesign system introduced
- files changed
- what should become the reference logic for later pages
```

---

# 10. Page-by-Page Interior Redesign Prompt

Use this one page at a time after the homepage redesign system exists.

```text
I want you to redesign the [INSERT PAGE NAME] page so it aligns with the shared site system, but does not copy the middle layout structure of already-finished pages.

Context:
- the homepage has already established the shared redesign system
- later finished pages should be treated as system references, not layout templates
- hero and final CTA / inquiry sections may remain in the shared family if appropriate
- the middle of this page must have its own composition identity

Your task:
1. Keep the page inside the same global design system
2. Preserve viewport discipline on desktop/laptop
3. Avoid navbar overlap
4. Avoid making any major viewport taller than one laptop screen unless absolutely unavoidable
5. Recompose internally before increasing height
6. Remove redundant eyebrow / metadata clutter where it does not help
7. Use the broader image library intelligently instead of recycling familiar assets by habit
8. Make the middle of the page structurally distinct from earlier redesigned pages

Important behavioral rules:
- If a parent card or viewport is already approved, do not casually reopen it
- If the issue is positional, fix it positionally
- If a section feels repetitive, redesign the composition family, not just the spacing
- Do not let the page drift back into generic stacked content

Deliverables:
- summary of what changed
- rationale behind the page-specific composition choices
- files updated
- any new page-specific rules that should be documented for future pages
```

---

# 11. Motion / Animation Prompt

Use this only after the structural redesign is already good.

```text
I want you to introduce selective animation into this website, but only in ways that support the premium UX and the existing page structure.

Important:
- Do not add flashy or trendy motion for its own sake
- Animation should reinforce hierarchy, transition, or interaction
- It must remain tasteful, restrained, and premium
- It must respect reduced-motion preferences
- It must not harm performance or readability

Your task:
1. Identify the best places for subtle animation
2. Prioritize scroll-triggered reveals, gentle transitions, or controlled interactive motion
3. Avoid turning every section into an animated sequence
4. Implement only the motions that genuinely improve the experience
5. Explain the rationale for each motion added

Good uses of motion:
- subtle section entry
- coordinated diagram / system reveal
- image or card transition with hierarchy support
- soft hover refinement on interactive components

Bad uses of motion:
- constant floating
- exaggerated parallax
- flashy page-builder style movement
- anything that makes the site feel gimmicky
```

---

# 12. Deployment + QA Prompt

Use this when the site is ready to ship.

```text
I want you to prepare this website for deployment and verify that it is ready to go live.

Your task:
1. Run the appropriate checks for the current stack
2. Verify that routes, assets, and key pages work
3. Confirm image paths are correct
4. Confirm no major desktop viewport issues remain
5. Confirm nav and CTA behavior are sane
6. Flag anything that should be fixed before launch
7. If all is ready, prepare the project for GitHub push / deployment

Output:
- deployment readiness summary
- issues found
- fixes applied
- anything still deferred for later refinement
```

---

# 13. Handoff / Documentation Prompt

Use this after any major phase, especially redesign phases.

```text
I want you to create a handoff document for the work completed in this phase.

The document must capture:
1. What changed
2. Why it changed
3. What design or structural rules were established
4. What should be preserved in later phases
5. What should not be casually reopened
6. Any file-level notes another agent should know

Important:
- Write this as a practical handoff for another agent
- Capture constraint logic, not just a change log
- Explain the reasoning well enough that later phases stay aligned
- Be explicit about approved parent structures vs still-open refinements
```

---

# 14. New-Conversation Continuation Prompt

Use this when moving to a fresh agent / fresh chat.

```text
We are continuing an existing website workflow in a new conversation.

Project:
[INSERT PROJECT NAME]

Current phase:
[INSERT PHASE]

Important context:
- We already have a repo and existing page system
- We are following a structured workflow, not improvising randomly
- The previous phase established constraints that must be respected
- I am pasting the relevant handoff / system document below

Your job:
1. Read the handoff carefully
2. Continue from the current phase only
3. Respect all established constraints
4. Do not reopen approved parent structures unless necessary
5. Summarize your understanding before making changes

Handoff document:
[PASTE HANDOFF]
```

---

# 15. Master Prompt For Running The Whole Workflow With One Agent

Use this only if you want one agent to handle the whole process end-to-end.

```text
I want you to help me execute a full premium website workflow from strategy to deployment.

The project is:
[INSERT PROJECT]

Business identity:
[INSERT BUSINESS IDENTITY]

Audience:
[INSERT AUDIENCE]

Services:
[INSERT SERVICES]

Geographic / market context:
[INSERT CONTEXT]

Desired quality level:
[INSERT QUALITY LEVEL]

I want this process to follow this order:
1. Discovery and positioning
2. Sitemap and page strategy
3. Base site build
4. Asset map for all real image placeholders
5. Prompt library for image generation
6. One-image test generation
7. Controlled batch generation
8. Image placement into the correct placeholders
9. Premium redesign system
10. Page-by-page redesign with unique middle compositions
11. Selective animation
12. Deployment readiness
13. Handoff documentation at major milestones

Rules:
- Be structured, not random
- Do not overgenerate images
- Use only real placeholders
- Keep desktop/laptop sections disciplined
- Avoid navbar overlap
- Use a shared system across pages, but do not make all middle layouts the same
- Freeze approved parent structures once they are accepted
- Use the broader asset library instead of recycling familiar images lazily
- Keep the final result premium, intentional, and suitable for a high-value client

At each phase:
- summarize what you are doing
- produce the correct artifacts
- do not skip ahead without making the current phase coherent
```

---

# 16. What To Customize Before Reusing This Pack

Before reusing these prompts for another project, replace:
- business identity
- audience
- services
- market context
- visual tone
- quality level
- repo / stack specifics
- image-generation provider specifics
- deployment target if different

Do not reuse the Monolith-specific business framing unless the new project is actually similar.

---

# 17. Recommended Folder Of Reusable Inputs For Each Future Project

For each new project, prepare these inputs before using the pack:
- business brief
- service list
- audience summary
- visual references
- market / demographic context
- stack / repo info
- existing handoff doc if the project is already in progress

---

# 18. Best Practice

The best operating model is:
- one conversation for discovery
- one for build
- one for asset system
- one for generation
- one for redesign
- one for motion
- one for deployment

And after each major phase:
- generate a handoff document
- use the New-Conversation Continuation Prompt when moving forward

That gives much more stable results than trying to keep everything inside one overloaded chat.

