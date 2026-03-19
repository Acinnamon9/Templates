---
name: ritual-ceremonial-minimalism
version: 1.0
description: Generates high-converting landing pages in the Ritual / Ceremonial Minimalism aesthetic — vast intentional space, heavy tone, sacred restraint. Converts through perceived depth and exclusivity. For high-ticket coaching, wealth/legacy positioning, and philosophy-driven products.
---

# Ritual / Ceremonial Minimalism — Funnel Skill

---

## Aesthetic Identity

This aesthetic treats whitespace as substance, not absence. Every element placed on the page carries extreme intentional weight — a single sentence, a ruled line, a number, a name. Nothing decorates; everything means. The visitor slows down because the page asks them to. Authority is communicated not through density but through restraint: the confidence to say one thing per section, perfectly. It creates the sensation of entering a private space — a gallery, a chamber, a rare document — before any product specifics are understood.

---

## Visual Grammar

**How it separates things:** Elements are separated exclusively by vast whitespace and, occasionally, a single thin ruled line (1px). There are no borders around content blocks, no cards with backgrounds, no colored fills separating zones. Separation is felt through vertical distance — sections breathe for 120–200px before the next element appears.

**How it creates hierarchy:** Hierarchy is communicated through the weight and solitude of lone elements on empty fields. A single word at 14vw carries more hierarchy than a paragraph. An element that is the only thing in its section outranks everything. Higher-importance elements always stand alone — no surrounding context competes for attention.

**Its relationship with color:** Color is near-monochromatic — the page operates in off-white, charcoal, and a single muted gold or deep amber accent. Color appears rarely and precisely: one accent line, one button, one highlighted word. Gradients are prohibited. Color washes are prohibited. No more than 2 color values appear on any section.

**Its relationship with space:** Spacing follows ceremonial rhythm: sections have minimum 160px vertical padding, often more. The page feels like turning pages in a thick, expensive publication — deliberate, unhurried. Elements never crowd each other. "Too empty" is the correct feeling for the first 2 seconds — then the visitor reads and the weight lands.

---

## Depth Model

Depth is created through **scale-depth**: elements that are larger feel closer to the viewer, more important, more present. A headline at 180px looms over a 14px caption. There are no shadows, no elevation, no borders to create depth. The page is flat — only scale communicates proximity. Box-shadows, drop-shadows, and border-depth are prohibited.

---

## Color Roles

```css
--surface:   252, 251, 248;   /* Warm parchment: the resting page — off-white, never pure white */
--ink:        18,  18,  18;   /* Near-black: primary text, the single ruled line */
--gold:      168, 130,  78;   /* Muted gold: the single accent — CTAs, ruled accent, key word */
--stone:     148, 144, 138;   /* Warm stone: secondary text, captions, metadata */
--anchor:     16,  16,  16;   /* Deep near-black: the one full-dark section */
--parchment-mid: 238, 236, 230; /* Slightly deeper off-white: minimal fill differentiation */
```

**Role constraints:**
- `--gold` appears on the primary CTA button, one ruled accent line, and at most one emphasized word in a headline. Maximum 3 occurrences total. Never as a section background fill.
- `--anchor` (deep near-black) is used exactly once — on the peak commitment section. It is the page's only filled dark section.
- `--stone` is text-only — captions, metadata, dates, secondary labels. Never as a fill.
- `--parchment-mid` may appear on 1–2 sections as a barely-perceptible fill shift, creating quiet rhythm without disrupting the monochromatic calm.
- The page operates in 2 colors per section maximum. Never more.

---

## Personality Constraints

**Always:**
1. Always: vast whitespace — minimum 160px vertical padding per section. Often much more. If a section feels "too empty," it is correct.
2. Always: display type is a high-weight serif. Sentences carry mass through letterform, not decoration.
3. Always: the page moves slowly. One thought per section. One claim per screen.
4. Always: the primary CTA is understated — no background color except on the anchor section. Elsewhere it appears as a text link with gold underline, or a minimal outlined button.
5. Always: ruled lines (1px, in `--gold` or `--ink`) are used sparingly — maximum 3 on the entire page — as structural dividers, not decoration.
6. Always: section labels (if any) are in small-caps or lowercase stone-colored text, no larger than 11px.

**Never:**
7. Never: border-radius on any element except a maximum of 2px on a single CTA button. No rounded cards.
8. Never: box-shadow or any elevation effect.
9. Never: gradients of any kind.
10. Never: more than one image per section, and no more than 3 images total on the page.
11. Never: icons from icon libraries. If a symbol is needed, use a single typographic character (→, *, —, /).
12. Never: a navigation with more than 4 items. The nav is minimal — logo left, 2–3 links right, one CTA.
13. Never: a section that contains more than 3 visual elements. One headline + one caption + one CTA is maximum occupancy for most sections.

---

## Section Constraints

**Structural constraints:**
- The page must contain at least 8 sections.
- Every section delivers a single emotional beat. No section competes with another for the same feeling.
- The conversion arc runs: Silence (Interrupt) → Declaration (Promise) → Weight (Credibility) → Understanding (Mechanism) → Witness (Peer Validation) → Invitation (Offer) → Commitment (Peak) → Stillness (Residual).

**Fill/color constraints:**
- No two adjacent sections share the exact same fill.
- The anchor (deep near-black) fill appears exactly once — on the peak commitment section.
- Gold never appears as a section background fill.
- At least 5 sections use the warm parchment surface as their background.
- At most 2 sections use parchment-mid as a fill shift.

**Layout constraints:**
- No two consecutive sections use the same content alignment or composition.
- The hero section is minimum 95vh — it is nearly full-screen by design.
- At least 2 sections are near-empty by conventional standards: one large statement, nothing else.
- At least one section uses a horizontal rule as its only structural element between two text blocks.
- No section may use a multi-column layout with more than 2 columns.

**Mobile constraints:**
- All sections remain single column on mobile.
- Whitespace reduces proportionally — minimum 80px section padding on mobile.
- No horizontal overflow below 768px.
- CTA visible on first load mobile.

---

## Conversion Arc

1. **Silence (Interrupt)** — A hero of near-total emptiness: a single large serif statement centered or left-set, no subline, no button visible until scrolled. The visitor stops because nothing is competing for attention. The silence is louder than any animated hero.

2. **Declaration (Promise)** — One declarative sentence stating the exact transformation this product delivers. Not a headline + paragraph. Just the sentence, at display scale, with a stone-colored caption below it if needed. Maximum 30 words total on this section.

3. **Weight (Credibility)** — A single proof element presented with extreme restraint: a number ("$4.2B managed"), a set of 4–6 client names in small-caps stone, or a short testimonial in italic serif at large scale. The credibility is felt, not argued.

4. **Understanding (Mechanism)** — How it works, presented as 3 numbered statements — each one sentence, in serif at comfortable reading size. Numbered with gold small-caps or roman numerals. No diagrams, no explainer graphics, no sub-bullets.

5. **Witness (Peer Validation)** — One testimonial presented as a full-page-width experience: a short quote at large italic serif, attributed below in stone-colored small-caps. The name of one person, their title, their company. Nothing else on the section.

6. **Invitation (Offer)** — Pricing stated directly: one tier, one number, what it includes — written in prose, not a card. If multiple tiers exist, they are separated by a thin ruled line, not by cards or columns.

7. **Commitment (Peak)** — The anchor section: deep near-black background, one white serif headline at maximum scale, one gold-accented CTA. The most minimal section on the page — and because of that, the most powerful.

8. **Stillness (Residual)** — 3–5 questions answered in an understated accordion or in a simple Q&A list. One guarantee statement in italics below. A small footnote in stone-colored caption. The page ends as it began: quietly.

---

## Typography Rules

```css
/* Display — high-weight serif, slow and massive */
--type-display: clamp(3.5rem, 9vw, 14rem);
font-family: 'Cormorant Garamond', 'Playfair Display', Georgia, serif;
font-weight: 700;
line-height: 0.92;
letter-spacing: -0.03em;

/* Section statement — still large, still serif */
--type-statement: clamp(2rem, 4.5vw, 6rem);
font-weight: 600;
line-height: 1.1;
letter-spacing: -0.02em;

/* Body / prose */
--type-body: clamp(1rem, 1.3vw, 1.15rem);
font-family: 'Cormorant Garamond', Georgia, serif;
font-weight: 400;
line-height: 1.75;
color: rgba(var(--ink), 0.8);

/* Testimonial / pull quote */
--type-quote: clamp(1.4rem, 2.5vw, 3rem);
font-style: italic;
font-weight: 400;
line-height: 1.3;

/* Labels / captions — always small, always stone */
--type-label: clamp(0.65rem, 0.8vw, 0.75rem);
font-family: 'Cormorant Garamond', Georgia, serif;
font-variant: small-caps;
letter-spacing: 0.2em;
color: rgba(var(--stone), 1);

/* Metric / single number */
--type-metric: clamp(4rem, 10vw, 16rem);
font-family: 'Cormorant Garamond', serif;
font-weight: 300;
letter-spacing: -0.05em;
```

---

## Animation System

### Motion Personality
**Luxurious.** Easing: `cubic-bezier(0.16, 1, 0.3, 1)`. Duration range: 700–1200ms. The page reveals itself as if pages of an expensive book are turning — deliberate, unhurried, irreversible. No snapping, no bouncing, no mechanical precision. Every animation should feel like something unveiling rather than something switching.

### CSS Foundation
```css
.anim-ready {
  opacity: 0;
  transform: translateY(40px);
}
.anim-visible {
  opacity: 1;
  transform: none;
  transition: opacity 900ms cubic-bezier(0.16, 1, 0.3, 1),
              transform 900ms cubic-bezier(0.16, 1, 0.3, 1);
}
.anim-rise   { transform: translateY(60px); }     /* slower, deeper rise — for statements */
.anim-reveal { transform: translateY(20px); opacity: 0; } /* subtle for small elements */
.anim-line-in {
  transform: scaleX(0);
  transform-origin: left;
  opacity: 1 !important;
}
.anim-line-in.anim-visible {
  transform: scaleX(1);
  transition: transform 800ms cubic-bezier(0.16, 1, 0.3, 1);
}
.anim-word { display: inline-block; opacity: 0; transform: translateY(30px); }
.anim-word.visible {
  opacity: 1; transform: none;
  transition: opacity 700ms cubic-bezier(0.16, 1, 0.3, 1),
              transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
}

@media (prefers-reduced-motion: reduce) {
  .anim-ready, .anim-line-in { opacity: 1; transform: none; }
  .anim-word { opacity: 1; transform: none; }
  .anim-visible, .anim-word.visible { transition: none; }
}
```

### Scroll Observer Setup
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('anim-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.anim-ready').forEach(el => observer.observe(el));
```

### Required Animation Inventory (7 Layers — All Mandatory)

**Layer 1 — Scroll-Triggered Section Entrances:**
Every section reveals on scroll. Alternate across (not two consecutive the same):
- Rise (translateY 60px → 0, opacity) — for declaration sections, large statements
- Subtle-rise (translateY 20px → 0, opacity) — for credential and testimonial sections
- Ruled-line-scale (scaleX 0 → 1) — for horizontal rule dividers (these animate into existence)
- Fade-only (opacity 0 → 1, no transform) — for the anchor/dark section
Duration: 900ms for most, 1100ms for the hero.

**Layer 2 — Staggered Children Reveals:**
Used sparingly — the ceremony requires pauses. Stagger delay: 160ms per element (slower than other aesthetics — each item gets a breath).
```javascript
section.querySelectorAll('.stagger-child').forEach((child, i) => {
  child.style.transitionDelay = `${i * 160}ms`;
});
```
Minimum 2 sections use staggered reveals: the mechanism (numbered steps) and the residual (Q&A items).

**Layer 3 — Parallax / Drift:**
At most 2 elements, with very subtle rates (restraint is the aesthetic):
- Large background watermark text (if used): parallax rate 0.93
- A single decorative rule line: parallax rate 1.04
```javascript
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  document.querySelectorAll('[data-parallax]').forEach(el => {
    const rate = parseFloat(el.dataset.parallax);
    el.style.transform = `translateY(${scrollY * (rate - 1)}px)`;
  });
});
```
Mobile (< 768px): parallax disabled entirely.

**Layer 4 — Counter Animations:**
If a single metric is shown (as in the credibility section), it counts slowly — duration 2400ms, cubic ease-out. The slow count is intentional — it feels like value accumulating.
```javascript
// Same requestAnimationFrame pattern, duration: 2400ms
```
No other numbers animate — only the one featured metric.

**Layer 5 — Hover Micro-Interactions:**
Declared with `@media (hover: hover)`. Extremely restrained:
- CTA button: gold underline slides in (width 0→100%), or background shifts from transparent to gold at 12% opacity, 300ms luxurious ease.
- Text links: gold underline fades in, 250ms.
- Named clients or testimonial author names: stone → ink color shift, 200ms.
- No card lifts, no scale effects — movement must feel like breath, not action.

**Layer 6 — Text Reveal (Hero + 1 other):**
Hero display text: **word-by-word fade-up** at 120ms per word — slower and more deliberate than other aesthetics. Each word ascends from 30px below into place, as if being inscribed.
```javascript
words.forEach((word, i) => {
  word.style.transitionDelay = `${i * 120}ms`;
});
```
The testimonial quote in the witness section also uses a word-by-word reveal at 60ms per word.

**Layer 7 — Ambient / Continuous Motion:**
At most one continuously moving element (excess motion would violate the aesthetic):
- A very slow-moving ruled line in the hero: a 1px horizontal gold line that moves from 0 to 100% width over 4 seconds on page load (not looping — it draws once and stays).
- OR: a page-wide subtle parchment texture that drifts at 0.004px/ms on scroll, imperceptible but present.
- CSS: `@keyframes line-draw { from { width: 0; } to { width: 100%; } }` — single play, `animation-fill-mode: forwards`.

---

## Creative Differentiation Engine

### Visual Device Pool

**STRUCTURAL DEVICES:**
1. ★ **Isolation section** — a single element (one sentence, one number, one name) is the only content on the section, surrounded by 200px+ whitespace on all sides. SIGNATURE.
2. **Asymmetric weight split** — 20/80 column: left column holds a small-caps label rotated -90°, right column holds the primary content.
3. ★ **Single horizontal rule drama** — a 1px ruled line (gold or ink) spans the full page width and is the only element separating two sections. It draws itself into existence on scroll. SIGNATURE.
4. **Large number anchor** — a single number (metric, year, count) at 10–16vw scale, as the primary visual element of its section, with a brief caption below.
5. **Prose mechanism** — the "how it works" section uses long-form prose, not a step list. 3–4 sentences, spaced far apart, each its own paragraph.
6. **Client name constellation** — 6–10 client names in small-caps stone text, arranged at varied spacing and horizontal positions on the page (not a grid, not a list — a sparse field).
7. **Folded corner inset** — a text block with a decorative corner mark (CSS pseudo-element) suggesting a folded document, containing the guarantee or risk-reversal.
8. **Full-bleed text only** — a section where text runs edge-to-edge (no horizontal padding), at a slightly smaller size than body, creating a dense-but-minimal texture.

**DECORATIVE DEVICES:**
9. ★ **Parchment grain texture** — a subtle CSS noise or SVG filter grain on the surface background, making the page feel like paper. SIGNATURE.
10. **Stone watermark** — a single word at 18vw, 3% opacity, in stone color, behind the hero content.
11. **Running date / edition** — a tiny stone-colored date or edition marker in the upper-left corner, persistent across scroll.
12. **Gold rule accent** — a single 1px gold horizontal rule that appears under one section headline only (not used elsewhere).
13. **Section counter** — sections are numbered in stone small-caps in the left margin (I, II, III, IV) — visible but not decorative.
14. **Faint section divider marks** — small centered symbols (· or —) replacing heavy dividers between sections.
15. **Margin annotation** — a small italic caption in the left or right margin, describing the section in 3–5 words.

**TYPOGRAPHIC DEVICES:**
16. **Mixed-weight statement** — a single headline where one word is in a contrasting weight (300 italic next to 700 upright) or in gold.
17. **Oversized first character** — a drop-cap at 4× body size opening a key prose passage.
18. **Prose CTA** — instead of a button, the CTA is a sentence ending in a gold-underlined phrase that functions as the link (e.g., "Begin your practice →").

**Required per page:** At least **6 different devices**. No device used more than twice. Signature devices (★): at least **2 must appear** on every page.

---

### Creative Brief Gate

```
CREATIVE BRIEF (mandatory before any code):

1. HOOK: What is the single most visually arresting moment of stillness on this page?
   (e.g., "A section that is only a 14vw serif word — the product's core promise —
   on 240px of whitespace above and below, nothing else" — be specific)

2. RHYTHM: Describe the page's pacing using a ceremonial metaphor.
   (e.g., "Like entering a chapel: threshold → settling → witnessing → 
   invitation → commitment → exit in silence" or 
   "A letter being written and sealed, one sentence per paragraph")

3. DEVICES: List the 6+ devices from the pool with their sections.
   (e.g., "Isolation section → promise | Single rule drama → after credibility | 
   Parchment grain → hero | Large number anchor → credibility | ...")

4. WILDCARD: One compositional choice NOT in the device pool.
   (e.g., "The pricing section appears as a single handwritten-style italic line 
   at body size — no card, no list — as if personally quoted")

The final HTML must deliver every item in this brief.
```

---

### Anti-Convergence Rules

**PROHIBITED:**

1. A hero with a headline, subline, and CTA button above the fold as the dominant composition. The hero must be an isolation moment — one element, vast space. The CTA does not need to be visible until the visitor has read the hero statement.
2. Three or more visual elements in any single section. If you find 4 elements in one section, remove one.
3. A feature list with icons, headings, and paragraph descriptions. Features are expressed as numbered prose sentences, a single large claim, or a two-line mechanism statement — not as a formatted list with icons.
4. A testimonial section with multiple quote cards. Only one testimonial may exist on the page, and it gets a full section, alone.
5. A pricing section with comparison cards. Pricing is stated in prose or separated by a thin ruled line — no card borders, no tier columns.
6. A CTA section that is simply a headline and button on a dark background. The anchor section must communicate something: a final truth, a number, a one-line promise — before the CTA appears.
7. A footer with 3 columns of links. The footer is minimal: wordmark or logo, one copyright line, one or two text links. It ends the page the way the page began: quietly.
8. Rounded corners on any element. The aesthetic is planar and exact.
9. Any animation faster than 600ms. Speed signals urgency; this aesthetic signals timelessness.
10. A page with more than 3 images. Visual restraint is the conversion mechanism.

---

## Mobile Directive

**Breakpoints:** 768px (tablet), 480px (small mobile).

**Hero at < 768px:**
- Display type: `clamp(2.8rem, 9vw, 6rem)`. Still massive relative to viewport.
- Section vertical padding reduces to minimum 80px (still generous).
- Single column throughout. No horizontal splits.
- Watermark text: `display: none` — too wide for mobile viewport.

**Navigation at < 768px:**
- Logo left. Maximum 2 visible nav links (hamburger for the rest, or completely hide all links and show only the CTA).
- Touch targets: 44×44px.
- Nav background: transparent over hero, shifts to `--surface` on scroll.

**Grid collapse rules:**
- Asymmetric 20/80: rotated label hides on mobile, content takes full width.
- Client name constellation: flows as a left-aligned single column of names.
- All layout is single-column at < 768px.

**Typography floor:**
- Display minimum: `clamp(2.5rem, 9vw, 5rem)`.
- Body minimum: `1rem`, line-height `1.75` (preserved — this aesthetic lives in its line-height).
- Labels minimum: `0.65rem`, small-caps preserved.

**Spacing floor:**
- Section vertical padding: `clamp(80px, 15vw, 160px)` — still ceremonial on mobile.
- Section horizontal padding: `clamp(20px, 6vw, 40px)`.

**Decorative elements on mobile:**
- Parchment grain texture: retained (CSS-only, no performance cost).
- Section number margin annotations: `display: none` below 768px.
- Running date/edition marker: retained.
- Parallax: disabled entirely below 768px.
- Ruled line drama: retained (draws full viewport width, impressive on mobile too).

---

## Interactivity Requirements (All Mandatory)

- [ ] Navigation CTA visible/functional on all viewports.
- [ ] FAQ / Q&A accordion: items expand/collapse, 700ms luxurious transition.
- [ ] Smooth scroll: anchor links.
- [ ] All 7 animation layers: entrances, stagger (where used), subtle parallax, counter (if metric), hover states, word-by-word reveal, ambient rule draw.
- [ ] Hero text reveal: word-by-word, 120ms per word, fires on page load.
- [ ] Ruled line draw: fires on page load or scroll entry, single play.
- [ ] Reduced-motion: all animations resolve to end state instantly.
- [ ] JavaScript mandatory.

---

## Image Guidance

Images in this aesthetic function as contemplative elements, not explanatory ones.

**Usage rules:**
- Maximum 3 images on the entire page.
- Images must be full-bleed or deliberately constrained — never floating with whitespace around them in the middle of a section.
- Black and white or heavily desaturated preferred. Apply: `filter: grayscale(80%) brightness(1.05) contrast(0.95)`.
- Images function as texture — portraiture, architectural detail, natural material close-up. Never product screenshots or infographics.

**Unsplash fallbacks:**
```
Architecture / premium:    photo-1600596542815-ffad4c1539a9
Founder / portrait:        photo-1507003211169-0a1dd7228f2d
Workspace / quiet:         photo-1499750310107-5fef28a66643
Finance / wealth:          photo-1579621970795-87facc2f976d
Natural material texture:  photo-1542621334-a254cf47733d (if available, else skip image)
```
Format: `https://images.unsplash.com/[photo-id]?w=1400&q=85&auto=format`
Apply desaturation on all: `filter: grayscale(75%) contrast(1.05);`

**Rule:** No placeholder boxes. If an image slot has no real URL, remove the image slot.

---

## Anti-Patterns

**Visual anti-patterns:**
- Any border-radius beyond 2px — prohibited.
- Box-shadow of any kind — prohibited.
- Gradients — prohibited.
- More than 3 images — prohibited.
- More than 3 visual elements in any single section — prohibited.
- Icon libraries — prohibited.
- Color fills on sections beyond the single anchor section — prohibited.

**Motion anti-patterns:**
- Any animation under 600ms duration — too fast, breaks the ceremony.
- Continuous looping animations beyond the hero rule draw — prohibited. The page is still.
- Hover animations that scale elements up — prohibited (scale is used for hierarchy only).
- Stagger delays under 120ms — too mechanical, not ceremonial.

**Structural anti-patterns:**
- A page with more than 2 columns in any section — prohibited.
- A page where no section is an isolation section (single element, vast space) — failed aesthetic.
- A footer with navigation columns — prohibited.
- A page where the CTA is visible above the fold on desktop — the commitment must be earned by scrolling.

---

## QA Checklist

- [ ] No border-radius beyond 2px anywhere
- [ ] No box-shadow anywhere
- [ ] No gradients anywhere
- [ ] No icon library icons anywhere
- [ ] Maximum 3 images total
- [ ] Maximum 3 visual elements per section (enforced)
- [ ] Gold accent appears on ≤3 elements total
- [ ] Exactly one anchor (deep dark) section
- [ ] No two adjacent sections share the same fill
- [ ] At least 2 signature devices from pool present
- [ ] At least 6 total devices from pool present
- [ ] At least one isolation section exists (one element, vast space)
- [ ] Creative brief written before code and fulfilled
- [ ] Hero is not headline + subline + button composition
- [ ] No feature list with icons
- [ ] Testimonials: only one, given full section width
- [ ] Layer 1: Every section has scroll-triggered entrance, ≥700ms duration
- [ ] Layer 2: Mechanism and residual sections use staggered reveals at 160ms
- [ ] Layer 3: Max 2 parallax elements, subtle rates only
- [ ] Layer 4: Single metric counter animates at 2400ms duration
- [ ] Layer 5: All interactive elements have hover states, ≥250ms duration
- [ ] Layer 6: Hero uses word-by-word reveal at 120ms per word
- [ ] Layer 7: One single-play ambient animation exists (line draw or equivalent)
- [ ] No two consecutive sections use same entrance animation
- [ ] All animations resolve instantly with prefers-reduced-motion
- [ ] Mobile: section padding minimum 80px
- [ ] Mobile: single column throughout, no horizontal splits
- [ ] Mobile: watermark text hidden
- [ ] FAQ accordion functional with 700ms transition
- [ ] No placeholder image boxes
- [ ] No horizontal overflow at 375px viewport
