---
name: academic-research-paper-funnel
version: 1.0
methodology: funnel-skill-creator-v2
---

# Academic / Research Paper Funnel Generator Skill

---

## Aesthetic Identity

This aesthetic is built on the visual grammar of peer-reviewed academic publishing: numbered sections, citation superscripts, abstract boxes, figure captions, and wide margins that make the page look like a working document rather than a marketing surface. The page radiates authority not through polish but through rigor — every claim feels sourced, every section feels deliberate, every number feels earned. Where conventional landing pages beg for attention, this one assumes it.

---

## Visual Grammar

**How it separates things:**
Elements are separated by whitespace and typographic hierarchy, not by decorative dividers or colored fills. Section boundaries are marked by section numbers, horizontal rules (`<hr>`), and a clear shift in text scale — not by a change in background color. Rule: *Elements are separated by whitespace and typographic rhythm. Decorative section dividers are prohibited.*

**How it creates hierarchy:**
Hierarchy is communicated through scale and weight differentials between numbered headings and body copy. A section heading (`2. Mechanism`) is visually dominant over its body copy not because it is colored differently, but because it is significantly larger and heavier. Rule: *Hierarchy is created through scale and typographic weight alone. Color is never used to signal importance within body content.*

**How it uses color:**
Color is applied sparingly as functional ink — citation links, figure borders, abstract fills, and primary CTAs use the academic accent color. All other content lives in black, near-black, and white. Rule: *Color appears only at functional moments — citations, links, and calls to action. Decorative color fills on body sections are prohibited.*

**How it uses space:**
The page uses generous margins that mirror the column-with-margin structure of printed papers. Content is not edge-to-edge — it lives within a contained column (650–780px) centered on the page, with visible margin space on both sides. Long-form sections breathe with paragraph spacing, not card-to-card padding. Rule: *Content lives in a contained centered column. Wide margins are structural — they must be visible on desktop. Sections feel like pages in a document, not panels in a slideshow.*

---

## Depth Model

**Border-depth.** Depth is created exclusively through borders and contained fills. The abstract box has a left accent border. Figure captions sit below a top border. Tables use cell borders. Callout boxes use a thin outline. No shadows, no elevation, no blur. Rule: *Depth is created through borders, contained fills, and whitespace containment only. Box-shadow, drop-shadow, and blur-elevation are prohibited in all contexts.*

---

## Color Roles

All non-surface colors are stored as RGB triplets for rgba() compositing.

| Role | RGB | Function |
|---|---|---|
| Surface | `255, 253, 248` | Warm white / cream page background. Default state of every section. |
| Structure | `18, 18, 20` | Near-black for all body text, headings, borders, rules. |
| Action | `13, 71, 161` | Academic blue. Primary CTA buttons, citation links, abstract accent border. Reserved exclusively for conversion moments and citations. |
| Warmth | `140, 10, 10` | Academic red. Citation bracket numbers `[1]`, footnote markers, annotation markers. Secondary emphasis only — never on CTAs. |
| Anchor | `18, 18, 20` | Same as structure but used as a full section fill. The one high-contrast section — deep black background, white text — appears exactly once. |
| Neutral-light | `242, 240, 236` | Abstract box fill, alternating table row fill, callout box fill. |
| Neutral-mid | `180, 175, 168` | Captions, footnotes, secondary labels, figure numbers. Muted — never on interactive elements. |

**Role constraints:**
- Action color appears only on primary CTA buttons, citation links, and the abstract box's left border accent. Maximum 3 non-CTA uses per page.
- Warmth (academic red) appears only on citation bracket numbers, footnote markers, and inline annotation indicators. Never on buttons or section fills.
- Anchor fill (full black section) appears exactly once — on the peak commitment / close section.
- Neutral-light fill may be used on the abstract box, callout boxes, and alternating table rows only.
- No section other than the anchor section may use a dark fill.

---

## Personality Constraints

**Always:**
- Sections are numbered: `1.`, `2.`, `3.` etc. The number appears as a prefix before the section heading in a muted style.
- An abstract box appears near the top of the page — a contained box with a left border accent, labeled "Abstract", summarizing the core promise in 3–4 sentences.
- Body copy uses a readable serif font (Georgia, Lora, or equivalent) at 1.0–1.125rem / 1.75 line-height.
- Headings use a contrasting grotesque or semi-serif (or the same serif at high weight) for visual distinction from body.
- Citations are formatted as superscript bracket numbers `[1]` linking to a references section. At least 5 citations must appear across the page.
- A references section appears at the bottom of the page with at least 4 formatted reference entries.
- Numbers and statistics are always accompanied by a citation or source label.
- The word "Introduction", "Methods", "Results", "Discussion" or equivalent academic section names are used — not marketing language like "Features" or "Benefits."

**Never:**
- Never use bright gradients, hero illustrations, or stock-photo hero treatments.
- Never use marketing superlatives without citation ("the #1 solution", "revolutionary" without attribution).
- Never use three-column feature card grids with icons. Academic papers show results in tables, figures, and numbered lists.
- Never use border-radius on content containers, callout boxes, or abstract boxes. Sharp corners only.
- Never use testimonial "quote card" components. Use inline pull-quotes or cited case summaries with author + affiliation.
- Never use emojis or decorative icons. If iconography is needed, use simple SVG line figures or table-based data.
- Never use a full-bleed hero photograph spanning the viewport. Figures are contained, captioned, and numbered.

---

## Section Constraints

**Structural constraints:**
- The page must contain at least 9 sections.
- Every section must serve a distinct role in the conversion arc. No two sections may serve the same role.
- The conversion arc runs in this order: Interrupt → Abstract → Problem → Methodology → Evidence → Peer Validation → Offer → Peak Commitment → Residual.
- Each section must be numbered sequentially (1. through 9+), with the number visible in the heading.

**Fill constraints:**
- No two adjacent sections may share the same fill treatment.
- At least 5 sections use warm surface white as their background.
- The anchor fill (deep black) appears exactly once.
- The neutral-light fill (cream/light gray) is used for the abstract box, no more than 2 callout panels, and alternating table rows.
- Action color (academic blue) appears only on interactive elements and citation markers — never as a section background.

**Layout constraints:**
- The content column is 650–780px wide, centered, with visible left and right margin space on viewports ≥ 1024px.
- No two consecutive sections may use the same internal layout structure (single column, two-column, table, figure+caption, blockquote).
- At least one section must feature a data table with column headers and at least 3 rows.
- At least one section must feature a figure (image or SVG diagram) with a formal "Figure N." caption below it.
- At least one section must feature an academic blockquote styled as a pull quotation from a cited source.

**Mobile constraints:**
- Every multi-column section stacks to single column at < 768px, most important content first.
- No section causes horizontal overflow below 768px.
- The primary CTA must be visible on mobile first load without scrolling.
- The abstract box retains its left border accent on mobile but expands to full width.

---

## Conversion Arc

**1. Interrupt** — The hero stops passive scrolling through the unexpected contrast of an academic paper layout in what is otherwise a marketing context. The visitor's first reaction must be "this looks different — this looks like actual research." Accomplish through stark typography and document structure, not visual spectacle.

**2. Abstract** — A formal abstract box states the core promise in 3–4 sentences — the "problem, method, result, implication" of the offer. This is the funnel's promise moment. It must be specific and cite at least one number. Visitors who read only the abstract should understand the value proposition completely.

**3. Problem (Introduction)** — Establishes the domain problem with data. Uses numbered citations, a statistic panel or table, and a clear statement of what existing solutions fail to do. The emotional tone is diagnostic, not alarmist.

**4. Methodology** — Explains the approach, process, or mechanism. Not "how it works" in a marketing sense — structured as a methods section with numbered steps, a process figure, or a structured list that would not be out of place in a real paper.

**5. Evidence (Results)** — The highest-data section. Tables, metrics, before/after comparisons presented in table or figure format. Numbers count up on scroll. Every number is cited or attributed. This is where the credibility argument is made most strongly.

**6. Peer Validation (Discussion / Case Studies)** — Cited case summaries with author name, affiliation, and outcome. Not testimonial cards — formatted like "Smith et al. (2024) reported a 47% reduction in..." or block-quoted with academic attribution. At least 2 distinct cases or voices.

**7. Offer** — What the reader receives, clearly stated. Pricing or access information presented in a table format when multiple tiers exist. No marketing language — describe deliverables in plain, precise terms.

**8. Peak Commitment** — The anchor section. Deep black background, white text, single large CTA. Minimal copy — the contrast does the work. A tight, clear headline and one button.

**9. Residual (FAQ + References)** — Handles remaining objections via a numbered FAQ (not toggleable — academic papers don't have accordions, though a JS accordion is acceptable). Followed by a formatted reference list. Removes friction for skeptical, analytical visitors who read everything.

---

## Typography Rules

**Font stack:**
- Body / copy: `Georgia, 'Times New Roman', serif` (or loaded: Lora, Merriweather, Source Serif)
- Headings: `'Helvetica Neue', Arial, sans-serif` at font-weight 600–700 (or loaded: Inter, IBM Plex Sans)
- Monospace / data / citations: `'Courier New', Courier, monospace` (or loaded: IBM Plex Mono, Fira Code)

**Scale (clamp-based, responsive):**
```css
--text-display:  clamp(2.0rem, 4vw, 3.5rem);    /* Paper title / hero headline */
--text-h1:       clamp(1.5rem, 3vw, 2.25rem);   /* Major section headings */
--text-h2:       clamp(1.125rem, 2vw, 1.5rem);  /* Subsection headings */
--text-body:     clamp(1.0rem, 1.5vw, 1.125rem);/* Body copy */
--text-caption:  0.875rem;                       /* Figure captions, footnotes */
--text-label:    0.75rem;                        /* Section number prefix, metadata */
```

**Rules:**
- Line height: 1.75 on all body copy. 1.25–1.35 on headings.
- Paragraph spacing: 1.5em between paragraphs.
- Section number prefix (`1.`, `2.`) is rendered at `--text-label` size in `--neutral-mid` color, displayed as a block element above the section heading.
- Citation brackets (`[1]`) rendered as `<sup>` in warmth (academic red) color, linked to references.
- Maximum line width: 70ch on body copy. No line of body text should exceed 70 characters.
- Abstract box copy: body size, italic, 1.65 line-height.

---

## Animation System

### Motion Personality
**Architectural.** Stiff, deliberate, grid-anchored. Easing: `cubic-bezier(0.77, 0, 0.18, 1)`. Duration range: 400–700ms. This is the motion of a document rendering — elements appear as if being placed on a surface, not as if floating in. Springy, bouncy, or elastic motion is prohibited. Parallax is subtle (≤ 0.04 rate). Nothing moves faster than 300ms or slower than 800ms.

### CSS Foundation
```css
.anim-ready {
  opacity: 0;
  transform: translateY(24px);
}
.anim-visible {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 500ms cubic-bezier(0.77,0,0.18,1),
              transform 500ms cubic-bezier(0.77,0,0.18,1);
}
```
Stagger delays applied via inline `style="transition-delay: Xms"` on child elements. All entrance variants add and remove the `.anim-visible` class — only the start state changes.

### Scroll Observer Setup
```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('anim-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.anim-ready').forEach(el => observer.observe(el));
```
Single observer instance. Threshold: 0.12 (lower than usual — academic pages are text-dense and items may be tall). Animate once; unobserve after trigger.

### Layer 1 — Scroll-Triggered Section Entrances (mandatory)
Every section animates in on scroll. No section is pre-visible in final state. Use these variants, never the same variant for two consecutive sections:

- **Fade-up** (default): `translateY(24px)` → `translateY(0)` + opacity 0→1. Duration 500ms.
- **Slide-from-left**: `translateX(-32px)` → `translateX(0)` + opacity 0→1. Duration 550ms.
- **Slide-from-right**: `translateX(32px)` → `translateX(0)` + opacity 0→1. Duration 550ms.
- **Scale-reveal**: `scale(0.97)` → `scale(1)` + opacity 0→1. Duration 600ms. Use on the abstract box and data tables.
- **Rule-draw**: For `<hr>` elements and border-reveals — animate `width: 0` → `width: 100%` via CSS transition on a pseudo-element. Duration 700ms. *(Academic papers are punctuated by horizontal rules; animating them draws the eye to section transitions.)*

### Layer 2 — Staggered Children Reveals (mandatory)
When a section containing list items, table rows, reference entries, or multi-card elements enters view, children stagger in sequentially. Stagger interval: 80ms. Formula: `child_delay = section_base_delay + (index * 80)`. Minimum 3 sections must use staggered reveals: the evidence/results table rows, the references list entries, and the methodology steps.

### Layer 3 — Scroll-Linked Parallax / Drift (mandatory, ≥ 2 instances)
Two decorative elements drift at a different rate from their container:
1. **Background section number watermark** — a large faint numeral (e.g., "02") positioned behind each section's content. Parallax rate 0.04 (drifts 4px per 100px scroll). Opacity: 3–5%.
2. **Abstract box left border accent** — the vertical colored bar on the abstract box shifts upward slightly as user scrolls past it. Rate: 0.06.
Implementation:
```js
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  document.querySelectorAll('[data-parallax]').forEach(el => {
    const rate = parseFloat(el.dataset.parallax);
    el.style.transform = `translateY(${scrollY * rate}px)`;
  });
});
```
On mobile (< 768px): parallax reduces to 0 (disabled). Document feel must be stable on mobile.

### Layer 4 — Number / Metric Counter Animations (mandatory)
All statistics, percentages, and quantified results count up from 0 when scrolled into view.
```js
function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  const decimals = el.dataset.decimals || 0;
  const duration = 1600;
  const start = performance.now();
  function step(now) {
    const elapsed = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - elapsed, 3); // cubic ease-out
    const value = target * eased;
    el.textContent = prefix + value.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + suffix;
    if (elapsed < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
```
Counters must format correctly throughout animation: commas, decimal places, currency symbols, and % signs preserved.

### Layer 5 — Hover Micro-Interactions (mandatory on every interactive element)
Applied only with `@media (hover: hover)` to prevent sticky states on touch devices.
- **CTA buttons**: `background-color` shifts to a slightly lighter shade of Action color. `letter-spacing` expands 0.02em. Duration: 180ms.
- **Citation links `[1]`**: Underline appears (text-decoration-color transition). Warmth (red) intensity increases 10%. Duration: 150ms.
- **Table rows**: Background transitions to neutral-light fill. Duration: 120ms.
- **Reference entries**: Left `border-left: 2px solid` action color appears on hover. Duration: 160ms.
- **Figure containers**: Inner image scales 1→1.02. Duration: 400ms. Overflow hidden on parent.

### Layer 6 — Text Reveal Animations (mandatory on hero)
**Hero heading:** Word-by-word fade-up. Split the display heading into `<span>` per word, stagger at 70ms per word. Each word: `opacity 0→1`, `translateY(20px)→0`, duration 400ms architectural easing.
```js
function splitWords(el) {
  const words = el.textContent.trim().split(' ');
  el.innerHTML = words.map((w, i) =>
    `<span class="word anim-ready" style="display:inline-block; transition-delay:${i*70}ms">${w}</span>`
  ).join(' ');
}
```
At least one section subheading (e.g., the abstract heading or results section heading) must also use a fade-up reveal (simpler — just the heading element itself, no word splitting required).

### Layer 7 — Ambient / Continuous Motion (mandatory, ≥ 1 instance)
**Blinking insertion cursor on the abstract box.** A thin `2px` academic-blue cursor blinks at the end of the abstract text block, as if the document is still being written. CSS keyframe:
```css
@keyframes cursor-blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
.abstract-cursor {
  display: inline-block;
  width: 2px;
  height: 1.1em;
  background: rgba(var(--action), 1);
  margin-left: 3px;
  vertical-align: text-bottom;
  animation: cursor-blink 1.1s step-end infinite;
}
```
**Optional second ambient:** Section number watermarks (if used as decorative background text) may drift at a very slow `1%` rate on `requestAnimationFrame`, creating a barely-perceptible depth of field.

### Required Animation Inventory
Every page built with this skill must contain:
- ≥ 9 scroll-triggered section entrances (one per section, using ≥ 3 different variants)
- ≥ 3 staggered-children reveals (table rows, reference list, methodology steps minimum)
- ≥ 2 parallax drift elements
- ≥ 3 counter animations (in the evidence/results section minimum)
- Hover states on every button, citation link, table row, and reference entry
- 1 word-by-word text reveal on the hero heading
- 1 ambient continuous motion element (cursor blink)
- Rule-draw animation on ≥ 2 `<hr>` section dividers

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  .anim-ready { opacity: 1; transform: none; transition: none; }
  .anim-visible { transition: none; }
  [data-parallax] { transform: none !important; }
  .abstract-cursor { animation: none; opacity: 1; }
}
```
Counters show final values immediately. All animation resolves to end state. Ambient motion pauses.

---

## Creative Differentiation Engine

### Visual Device Pool

**Use at least 6 different devices per page. Use no device more than twice. At least 2 SIGNATURE devices must appear on every page.**

**STRUCTURAL DEVICES:**
1. ⭐ SIGNATURE — **Formal abstract box** — A contained box with a `4px` solid left border in action color, `neutral-light` fill, labeled "Abstract" in small caps above the text. The document's first visible claim.
2. ⭐ SIGNATURE — **Numbered section prefixes** — Every `<section>` heading is preceded by a small `1.`, `2.` etc. in muted neutral-mid color. The numbering is structural, visible, and consistent throughout the page.
3. ⭐ SIGNATURE — **Formal references section** — A bibliography-formatted list at the bottom of the page with 4+ entries formatted as author, year, title, journal/publisher, URL. Makes the page feel like a real document.
4. **Data table with column headers** — A `<table>` with clear headers, horizontal rules between rows, alternating `neutral-light` fill on odd rows, and `monospace` font for numeric cells. At least 3 rows of real data.
5. **Figure with caption** — An image or SVG diagram constrained to the content column, followed by "Figure 1. [Description]" in caption style (smaller, muted, bordered top). Can be a chart, diagram, or contextual photograph.
6. **Sidebar annotation** — A narrow right-column annotation (150–180px) in a long two-column layout section, containing a brief note, citation, or supporting fact. Mimics paper margin annotations.
7. **Inline citation cluster** — A paragraph with 3+ consecutive citations `[1][2][3]` drawing attention to the density of sourcing. Creates an aura of rigor.
8. **Step-numbered methodology** — A vertical list where each step is preceded by a bold numeral (Step 1, Step 2) with a short title and description. No icons — numbers only.
9. **Academic blockquote** — A pull quote styled with `border-left: 4px solid` in neutral-mid color, italic text, and author + affiliation attribution below in caption style.
10. **Two-column body section** — A section with body text split into two columns (CSS `column-count: 2`) at desktop. Collapses to one column on mobile. Mimics multi-column paper layout.

**DECORATIVE DEVICES:**
11. **Section watermark numeral** — A large faint numeral (e.g., "02") in the background of a section, `opacity: 0.03–0.05`, positioned behind the content. Provides subtle depth without visual noise.
12. **Underline-emphasis word** — Within a heading, one word rendered with a hand-drawn-style underline (CSS `text-decoration` or a `::after` pseudo-element with `border-bottom`). Highlights the pivotal concept.
13. **Dashed separator line** — An `<hr>` with `border-style: dashed` in neutral-mid color. Used between closely related subsections to show sub-grouping within a numbered section.
14. **Monospace metric block** — A cluster of 2–4 numbers in `monospace` font at `2–3rem` size, each with a small label below in `caption` style. Digits align vertically in a grid. Used in the evidence/results section.
15. **Footnote strip** — A thin strip at the bottom of a section with 2–3 numbered footnotes, separated by a short horizontal rule, in caption-size text. Provides source depth without cluttering the main flow.

**TYPOGRAPHIC DEVICES:**
16. **Small-caps section label** — Subsection labels or callout headers rendered in `font-variant: small-caps` at `letter-spacing: 0.08em`. Used on "Abstract", "Keywords", "Authors", and callout box headings.
17. **Keywords line** — A line directly below the abstract box: "Keywords: [term1], [term2], [term3]" in small caps. Mimics academic paper metadata.
18. **Rotated margin label** — A short label (`Results`, `Methods`, `Evidence`) rotated `-90deg` in the left margin of a section, at `neutral-mid` color. Adds vertical visual interest without breaking the column.
19. **Running header** — A persistent thin header element below the nav showing "Section N / Title" that updates as the user scrolls. Mimics the running header of a printed paper's pages.
20. **Callout box** — A contained box (full content-column width) with `neutral-light` fill, a thin top and bottom `1px` border in neutral-mid, and a bolded callout heading. Used for key findings, warnings, or important methodology notes.

### Creative Brief Gate

Before writing any HTML, draft a 4-line Creative Brief. The brief is binding — the code must deliver every promise.

```
1. HOOK: What is the single most visually striking moment on this page?
   (e.g., "A results section where three 3rem monospace metrics sit above 
   a full-width data table, with a watermark section numeral '05' behind 
   them at 3% opacity" — not just "a statistics section")

2. RHYTHM: Describe the visual rhythm in one sentence using a metaphor.
   (e.g., "Like reading a dense paper — paragraphs compress you, then a 
   figure or table breaks the column and gives you air, then back in" — 
   describe the alternating tension of the specific page)

3. DEVICES: List the 6+ devices from the pool with their section 
   assignments.
   (e.g., "Abstract box → Section 1, Data table → Section 5, Sidebar 
   annotation → Section 4, Academic blockquote → Section 6, Rotated 
   margin label → Sections 3+5, Section watermark numerals → all sections")

4. WILDCARD: One creative choice NOT in the pool — invented for this page.
   (e.g., "A 'submitted to' line above the hero heading — 'Submitted to: 
   Journal of [Industry] Research, 2024' — that adds a fictional provenance 
   to the page's authority before the title is even read")
```

The Creative Brief is a contract. If during implementation a brief item doesn't work, replace it with something equally ambitious — do not delete it.

### Anti-Convergence Rules

These layouts are **PROHIBITED**. They represent the dull defaults this aesthetic must escape:

1. **A hero that is only a centered heading, a subline, and a button.** The hero must contain at least one additional academic element: an author/date line, a "submitted to" label, a keyword strip, an abstract box, or a cited opening statistic.

2. **Three equal-width feature cards with icon + heading + paragraph.** If showing 3 features or methodology points, they must be presented in a table, a numbered methodology list, or an asymmetric two-column layout — not as equal cards.

3. **Testimonial section as quote cards in a grid.** Peer validation must be presented as cited case summaries (Name, Affiliation, outcome with citation) or as academic blockquotes with formal attribution — not as floating cards with headshots.

4. **Pricing section as 2–3 identical card columns.** If tiers exist, present them as a comparison table with row headers — not as identical visual containers with a "recommended" badge as the only differentiator.

5. **A CTA section that is just centered text on a colored background.** The peak commitment / anchor section must contain at least 2 visual layers: a supporting statistic with citation, a brief closing argument, or a one-line case summary — in addition to the heading and button.

6. **FAQ as a flat generic accordion.** The FAQ section must include at least one non-FAQ element (a methodology note, a guarantee statement, a relevant cited fact, or a section callout box) alongside the questions. The accordion itself is acceptable; standing alone it is not.

7. **A logo/social-proof bar that is just logos in a row.** Institution or partner logos must be accompanied by at least one supporting element: a publication name label, a cited metric per logo, a year, or a non-standard layout (horizontal scroll, asymmetric grid).

8. **A footer that is just link columns.** The footer must contain a distinct academic element: a formal citation for the page itself, a "Working Paper" or "Pre-Publication Draft" label, a newsletter input framed as "Subscribe to Updates", or a large text CTA.

9. **Marketing language without citation.** Any claim containing numbers or rankings must include an inline `[N]` citation or a visible source label. "87% of users..." without `[3]` after it is a personality violation.

10. **Rounded corners anywhere.** All containers — abstract box, callout box, figure container, CTA button — use `border-radius: 0`. A rounded button in an academic-paper aesthetic is an immediate aesthetic break.

---

## Mobile Directive

**Breakpoints:** 1200px (wide desktop column), 1024px (standard desktop), 768px (tablet/mobile breakpoint), 480px (small mobile).

**Content column:** At ≥ 1024px: `max-width: 760px`, centered with auto margins, margin space visible on both sides. At 768px–1023px: `max-width: 92vw`, still centered. At < 768px: `max-width: 100%`, `padding: 0 1.25rem`.

**Hero at < 768px:**
- Display heading: `clamp(1.75rem, 6vw, 2.5rem)`.
- Author/metadata line collapses from two-column to stacked single column.
- Abstract box expands to full column width. Left border accent retained.
- Keywords line wraps to 2 lines if needed — no truncation.
- Primary CTA button: minimum `44px` height, full width on mobile.

**Navigation at < 768px:** Hamburger menu, functional. Logo and hamburger on the same line. Links revealed as a vertical drop-down. Touch targets minimum 44×44px.

**Grid collapse rules:**
- Two-column body text (`column-count: 2`): collapses to `column-count: 1` at < 768px.
- Sidebar annotation layout: annotation column collapses below main content at < 768px.
- Monospace metric block: metrics stack vertically at < 480px.
- Data tables: horizontal scroll on mobile (`overflow-x: auto` on wrapper). Do not collapse table columns — academic data tables must retain their structure.

**Typography floor at < 768px:**
- Body copy: minimum `1rem`. Line height: minimum `1.7`.
- Caption text: minimum `0.8125rem`.
- Display heading: `clamp(1.75rem, 6vw, 2.5rem)`.

**Spacing floor at < 768px:**
- Section vertical padding: minimum `3rem 0`.
- Section horizontal padding: minimum `0 1.25rem`.

**Decorative elements on mobile:**
- Section watermark numerals: `display: none` at < 768px (too subtle to read, adds noise on small screens).
- Rotated margin labels: `display: none` at < 768px. Space does not exist.
- Running header: collapses to show only section number (e.g., "§ 3") to save vertical space.
- Parallax: disabled at < 768px. `data-parallax` elements get `transform: none !important`.

---

## Interactivity Requirements

All of the following must be functionally working in the delivered page. None is optional.

- **All 7 animation layers** (scroll entrances, staggered reveals, parallax drift, counter animations, hover states, hero text reveal, ambient cursor blink)
- **Smooth scroll** on all anchor links (`scroll-behavior: smooth` and/or JS scroll handler)
- **FAQ accordion** — clicking a question reveals its answer with a height transition (200ms, architectural easing). Clicking an open question closes it. ARIA attributes required: `aria-expanded`, `aria-controls`.
- **Mobile navigation toggle** — hamburger opens/closes the nav. Close on link click and on outside click.
- **Running header scroll-spy** (if device is used) — updates active section label as user scrolls past each section
- **Counter animations** — all metric numbers count up on IntersectionObserver trigger
- **Citation link behavior** — `[N]` superscripts smoothly scroll to the corresponding reference entry at the bottom of the page

JavaScript is mandatory. A page with no JS is a failed page.

---

## Image Guidance

**Academic pages use images functionally, not decoratively.** Every image must serve as a figure — constrained to the content column, captioned with "Figure N. [description]", and referenced in the body text ("See Figure 1.").

**Unsplash fallback URLs by business context:**
```
photo-1454165804606-c3d57bc86b40  — enterprise / business research
photo-1579621970795-87facc2f976d  — financial / economic research
photo-1571019613454-1cb2f99b2d8b  — health / biotech / clinical research
photo-1507003211169-0a1dd7228f2d  — individual researcher / founder portrait
photo-1499750310107-5fef28a66643  — productivity / knowledge work research
photo-1600596542815-ffad4c1539a9  — architecture / built environment research
photo-1522202176988-66273c2fd55f  — team / organizational research
photo-1551434678-e076c223a692   — technology / AI / software research
photo-1558618666-fcd25c85cd64   — product / material science
photo-1556742049-0cfed4f6a45d  — financial technology / payments
```
Format: `https://images.unsplash.com/[photo-id]?auto=format&fit=crop&w=900&q=80`

**Rules:**
- Never use placeholder boxes, `via.placeholder.com`, or broken `<img>` tags.
- Every figure must have a real URL.
- Figure images should be `width: 100%` within the content column, with `object-fit: cover` and a defined `aspect-ratio` (16/9 for landscape, 4/3 for diagrams).
- Maximum 2 figures per page unless the business context is strongly visual (architecture, product, hardware).

---

## Anti-Patterns

**Color anti-patterns:**
- Do not use gradient fills anywhere — backgrounds, buttons, decorative shapes.
- Do not use the action (academic blue) as a section background fill.
- Do not use the warmth (red) on buttons or primary interaction elements.
- Do not add extra accent colors beyond the defined palette.

**Depth anti-patterns:**
- Do not use `box-shadow` on any element — not cards, not buttons, not the abstract box. This aesthetic uses border-depth only.
- Do not use `drop-shadow` CSS filters.
- Do not use blurred-background / frosted-glass effects (`backdrop-filter: blur`).

**Layout anti-patterns:**
- Do not let content span the full viewport width — the content column must always be contained (≤ 780px) and centered with visible margins on desktop.
- Do not use `border-radius > 0` on any content container, CTA button, or decorative shape.
- Do not use a hero background photograph spanning the full viewport. Images are figures with captions, contained within the column.

**Typography anti-patterns:**
- Do not use marketing-style all-caps display headings — headings follow sentence case or title case as in real papers.
- Do not use web fonts with strong personality (handwritten, display, decorative). Only serif body + grotesque heading stacks.
- Do not reduce body copy below `1rem` or line-height below `1.7`.

**Animation anti-patterns:**
- Do not use spring/elastic/bounce easing — architectural easing only.
- Do not use `animation-iteration-count: infinite` on anything except the cursor blink. No looping entrance animations.
- Do not animate things faster than 300ms (except hover states ≤ 200ms) or slower than 800ms.
- Do not use page-wide parallax that creates large element displacement (max parallax shift: 40px over full page scroll).
- Do not use `filter: blur()` as an entrance animation effect — this aesthetic uses opacity + translate only.
- Do not run more than 3 simultaneous entrance animations at any viewport moment — stagger so sequences feel sequential, not explosive.

**Personality anti-patterns:**
- Do not use marketing section names (`Features`, `Benefits`, `Testimonials`). Use academic equivalents: `2. Methodology`, `4. Results`, `5. Case Studies`, `6. Discussion`.
- Do not present unattributed statistics. Every number gets a citation or source label.
- Do not use emoji, icon fonts (Font Awesome), or decorative illustrations.

---

## QA Checklist

Before delivering a page, verify every item by inspection:

**Aesthetic identity:**
- [ ] Every section has a visible section number prefix (`1.`, `2.` etc.)
- [ ] An abstract box with left border accent appears in the first two sections
- [ ] A formal references section with ≥ 4 formatted entries appears at the bottom
- [ ] At least 5 citation superscripts `[N]` appear across the page
- [ ] No marketing language appears without a citation or source label
- [ ] No `border-radius` appears on any container, button, or card
- [ ] No `box-shadow` appears anywhere on the page
- [ ] Content column is max 780px wide, centered, with visible margins on desktop

**Color:**
- [ ] Action (blue) appears only on CTAs, citation links, and abstract box border — not as section fill
- [ ] Warmth (red) appears only on citation brackets — not on buttons or section fills
- [ ] Anchor fill (deep black section) appears exactly once
- [ ] No gradient fills appear anywhere

**Typography:**
- [ ] Body copy is in serif font at ≥ 1rem / 1.75 line-height
- [ ] Headings are in contrasting grotesque/sans-serif
- [ ] Data/citation elements use monospace
- [ ] Lines of body copy do not exceed 70ch

**Animation — all 7 layers:**
- [ ] Every section has a scroll-triggered entrance animation (IntersectionObserver)
- [ ] No two consecutive sections use the same entrance variant
- [ ] At least 3 sections use staggered-children reveals
- [ ] At least 2 decorative elements have parallax drift
- [ ] All displayed numbers count up from 0 on scroll trigger (requestAnimationFrame)
- [ ] Every button, citation link, table row, and reference entry has a hover state
- [ ] Hero heading uses word-by-word fade-up reveal
- [ ] Abstract box cursor blink is present and animating
- [ ] At least 2 `<hr>` elements use a rule-draw animation
- [ ] `@media (prefers-reduced-motion: reduce)` resolves all animations to end state

**Interactivity:**
- [ ] FAQ accordion opens and closes with height transition and correct ARIA attributes
- [ ] Mobile nav toggle works — hamburger opens and closes nav
- [ ] Smooth scroll works on all anchor links
- [ ] Citation superscripts scroll to their reference entry on click
- [ ] Counter animations fire correctly on scroll (not on page load)

**Creative Differentiation:**
- [ ] A 4-line Creative Brief was drafted before writing any HTML
- [ ] ≥ 6 visual devices from the pool are present and identifiable
- [ ] ≥ 2 SIGNATURE devices are present (abstract box, numbered prefixes, or references section)
- [ ] No two consecutive sections share the same layout structure
- [ ] None of the 10 anti-convergence patterns are present in the page

**Mobile:**
- [ ] No horizontal overflow on viewports < 768px
- [ ] Content column padding ≥ 1.25rem on mobile
- [ ] Primary CTA is visible on mobile without scrolling
- [ ] Data tables have `overflow-x: auto` wrapper — do not collapse columns
- [ ] Parallax disabled on mobile — no layout instability
- [ ] Touch targets on all tappable elements ≥ 44×44px

**Images:**
- [ ] Every image is a captioned figure (`Figure N. [description]`)
- [ ] No placeholder boxes or placeholder services appear
- [ ] All image `src` attributes have real URLs
