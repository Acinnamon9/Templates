---
name: editorial-newspaper-brutalism
version: 1.0
description: Generates high-converting landing pages in the Editorial / Newspaper Brutalism aesthetic — dense typographic grids, hard column rules, serif/monospace mix, Financial Times meets underground zine. Signals intellectual authority and analytical rigor.
---

# Editorial / Newspaper Brutalism — Funnel Skill

---

## Aesthetic Identity

This aesthetic treats the browser like a broadsheet — every pixel earns its place inside a strict columnar grid, content is ink-dense and unsentimental, and hierarchy is communicated through type alone rather than cards, shadows, or color washes. The visual language is simultaneously archaic and cutting-edge: broadsheet column rules next to monospace labels, massive serif display type colliding with tight tabular data, an editorial red that appears exactly once like a screaming headline. It looks intentional because every decision is — there is no decorative softness, only structure.

---

## Visual Grammar

**How it separates things:** Elements are separated exclusively by 1–2px solid borders and column rules. Section boundaries are always hard lines. Whitespace may exist but is never the primary separator — the border carries that weight. No blurs, no shadows, no fades between zones.

**How it creates hierarchy:** Hierarchy is communicated through typographic scale and weight contrast alone. The display serif at 80–180px signals primacy; the 11px uppercase monospace label signals metadata. Nothing in between gets visual decoration. Higher-importance elements always have a larger type size or heavier weight — never color alone.

**Its relationship with color:** Color is applied as flat fills or as spot-color text only. One and only one spot color exists per page (the action color). All other differentiation is black/white/newsprint. Gradients are prohibited. Color washes on section backgrounds are prohibited — backgrounds are either newsprint or black.

**Its relationship with space:** Spacing follows newspaper-column rhythm: tight internal gutters (16–24px), generous inter-column rules, and section padding that mirrors a printed broadsheet (40–60px vertical). Sections feel dense and purposeful — never airy, never padded for padding's sake.

---

## Depth Model

Depth is created exclusively through **border-depth**: heavier borders signal greater visual weight and importance. A 4px border outranks a 1px border. A filled-black region outranks a ruled region. Shadow-depth, opacity-depth, and elevation via box-shadow are prohibited — they import softness that violates the aesthetic.

---

## Color Roles

All non-surface colors stored as RGB triplets for `rgba()` compositing.

```css
--surface:    248, 246, 240;   /* Newsprint: warm off-white, the resting page */
--ink:        10,  10,  10;    /* Ink black: text, borders, column rules */
--spot:       209,  27,  27;   /* Editorial red: the single spot color — CTAs only */
--highlight:  255, 214,   0;   /* Yellow press highlight: emphasis, never background */
--anchor:     10,  10,  10;    /* Ink fill: the page's one full-black section */
--paper-mid:  220, 218, 212;   /* Mid newsprint: subtle fill variants, rule lines */
```

**Role constraints:**
- `--spot` (editorial red) appears only on primary CTA buttons, one pull-quote accent, and the primary headline kicker label. Maximum 3 elements per page total. Never as a section background fill.
- `--anchor` (full ink black) is used exactly once — on the page's peak commitment section. It is the only section that may be black-filled.
- `--highlight` (yellow) appears only as a text highlight treatment or an inline accent mark. Never as a block fill.
- `--paper-mid` may be used as alternating section fills (newsprint → paper-mid → newsprint rhythm).
- `--surface` is the default for all sections not assigned `--anchor`.

---

## Personality Constraints

**Always:**
1. Always: display type uses a serif typeface (Georgia, Playfair Display, or equivalent). No exceptions on headlines.
2. Always: labels, bylines, captions, and metadata use monospace (Courier New, JetBrains Mono, or equivalent).
3. Always: section label text is uppercase and monospace, 10–12px, tracking 0.15em.
4. Always: the page grid is a strict multi-column rule — 12-column at desktop, 4-column at tablet. Content sits in these columns.
5. Always: 1px column rules are visible between content columns in any multi-column section.
6. Always: headlines are left-aligned. Centered headlines are prohibited.
7. Always: every number displayed as a metric uses tabular figures (font-variant-numeric: tabular-nums).

**Never:**
8. Never: border-radius on any element — no rounded corners anywhere on the page.
9. Never: box-shadow or drop-shadow of any kind.
10. Never: gradient fills on any element — backgrounds, buttons, dividers.
11. Never: a sans-serif typeface for display headings. Sans is acceptable for body paragraphs at small sizes only.
12. Never: decorative icons, emojis used decoratively, or illustration assets. The page communicates through type and structure alone. One exception: a single editorial logo or wordmark.

---

## Section Constraints

**Structural constraints:**
- The page must contain at least 9 sections.
- Every section must serve a distinct role in the conversion arc. No two sections may duplicate emotional purpose.
- The conversion arc runs: Interrupt → Promise → Credibility → Mechanism → Peer Validation → Offer → Peak Commitment → Residual → Anchor Exit.

**Fill/color constraints:**
- No two vertically adjacent sections may share the same background fill.
- The anchor (full-black) fill appears exactly once — on the peak commitment section.
- The spot color (editorial red) never appears as a section background.
- At least 5 sections must use the newsprint surface as their background.
- Paper-mid may be used on 2–3 sections for fill rhythm.

**Layout constraints:**
- No two consecutive sections may use the same column structure (e.g., 2-col cannot follow 2-col).
- The hero section is the page's largest element — minimum 90vh or equivalent.
- At least one section must span full-bleed with column rules visible edge-to-edge.
- At least two sections must use an asymmetric column split (35/65 or 30/70 or 25/75).
- At least one section must use a true newspaper grid: 3–4 columns with visible column rules and distinct content in each column.

**Mobile constraints:**
- Every multi-column section must stack to single column on mobile with headline content first.
- Column rules become horizontal rules on mobile.
- No horizontal overflow below 768px.
- Primary CTA must be visible on first load on mobile without scrolling.

---

## Conversion Arc

1. **Interrupt** — A hero that arrests passive scrolling through sheer typographic mass. A serif headline at 120–180px, a byline kicker in red monospace, and a column-rule grid that signals "this is serious content." The visitor must feel they've landed somewhere with authority.

2. **Promise** — A tightly structured statement section: the specific outcome this product delivers, stated in journalistic style — declarative, factual, no hedging. Think "the lede" — one sentence that answers What, For Whom, and How Much.

3. **Credibility** — Proof rendered in editorial format: logos as a masthead-style bar, or metrics displayed as a tabular data section with monospace numbers. Should feel like a financial table, not a marketing carousel.

4. **Mechanism** — How it works, structured as a numbered editorial series or a multi-column breakdown. Each step or component gets equal column weight. The visitor must be able to scan this like a news article and understand the process in 15 seconds.

5. **Peer Validation** — Testimonials presented in broadsheet pull-quote style — large serif quote, attribution line in monospace. At least one testimonial must be visually dominant (full-section-width pull quote at large scale).

6. **Offer** — Pricing or offer presented in tabular format — columns, rows, clear data hierarchy. Feels like comparing fund performance, not buying a SaaS plan. Numbers in tabular figures.

7. **Peak Commitment** — The anchor section: full-black background, white serif headline, single editorial-red CTA button. Maximum contrast, minimum elements. This is the page's typographic peak — the headline here should be the boldest statement.

8. **Residual** — FAQ in accordion format, styled like an editorial corrections section. Each question is a headline; the answer is body copy. One guarantee or risk-reversal statement rendered as an editorial inset box.

---

## Typography Rules

```css
/* Display — always serif */
--type-display: clamp(3rem, 8vw, 11rem);
font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
font-weight: 900;
line-height: 0.95;
letter-spacing: -0.02em;

/* Hero headline — push toward the top of the clamp range */
--type-hero: clamp(4rem, 10vw, 14rem);

/* Section headline */
--type-section-head: clamp(2rem, 4vw, 5rem);
font-weight: 800;

/* Deck / subheadline */
--type-deck: clamp(1.1rem, 1.8vw, 1.5rem);
font-family: 'Playfair Display', Georgia, serif;
font-style: italic;
font-weight: 400;

/* Body copy — can be sans at small sizes */
--type-body: clamp(0.95rem, 1.2vw, 1.05rem);
font-family: 'Georgia', serif;
line-height: 1.65;

/* Labels / bylines — always monospace uppercase */
--type-label: clamp(0.65rem, 0.9vw, 0.75rem);
font-family: 'JetBrains Mono', 'Courier New', monospace;
text-transform: uppercase;
letter-spacing: 0.15em;
font-weight: 500;

/* Metrics / data */
--type-metric: clamp(2.5rem, 5vw, 7rem);
font-family: 'JetBrains Mono', 'Courier New', monospace;
font-variant-numeric: tabular-nums;
font-weight: 700;
```

---

## Animation System

### Motion Personality
**Mechanical.** Easing: `cubic-bezier(0.25, 0, 0.25, 1)`. Duration range: 200–450ms. The page moves like a printing press — precise, purposeful, no overshoot. Bouncy easing, elastic transitions, and organic/springy motion are prohibited. Every motion must feel like a typeset decision: deliberate and functional.

### CSS Foundation
```css
.anim-ready {
  opacity: 0;
  transform: translateY(24px);
}
.anim-visible {
  opacity: 1;
  transform: none;
  transition: opacity 380ms cubic-bezier(0.25, 0, 0.25, 1),
              transform 380ms cubic-bezier(0.25, 0, 0.25, 1);
}
/* Entrance variants — alternate across sections, never repeat consecutively */
.anim-slide-left  { transform: translateX(-32px); }
.anim-slide-right { transform: translateX(32px); }
.anim-scale       { transform: scale(0.96); }
.anim-clip {
  clip-path: inset(0 100% 0 0);
  opacity: 1 !important; /* clip handles reveal, not opacity */
}
.anim-clip.anim-visible { clip-path: inset(0 0% 0 0); transition: clip-path 480ms cubic-bezier(0.25, 0, 0.25, 1); }

@media (prefers-reduced-motion: reduce) {
  .anim-ready { opacity: 1; transform: none; clip-path: none; }
  .anim-visible { transition: none; }
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
}, { threshold: 0.12 });

document.querySelectorAll('.anim-ready').forEach(el => observer.observe(el));
```

### Required Animation Inventory (7 Layers — All Mandatory)

**Layer 1 — Scroll-Triggered Section Entrances:**
Every section animates into view. Alternate across these entrance variants — no two consecutive sections may share the same:
- Fade-up (translateY 24px → 0, opacity 0→1) — default for newsprint sections
- Clip-reveal from left (clip-path inset 100%→0%) — for headline-dominant sections
- Slide-in from left/right (translateX ±32px → 0) — for asymmetric splits
- Scale-reveal (scale 0.96→1, opacity) — for anchor/black sections

**Layer 2 — Staggered Children Reveals:**
Cards, metric blocks, column items, FAQ rows: stagger delay = 80ms per sibling.
```javascript
section.querySelectorAll('.stagger-child').forEach((child, i) => {
  child.style.transitionDelay = `${i * 80}ms`;
});
```
Minimum 4 sections must use staggered child reveals.

**Layer 3 — Parallax / Drift:**
At least 2 decorative elements drift at different scroll speeds:
- Oversize background text watermarks: scroll rate 0.88 (slower than content)
- Column rule decorative elements: scroll rate 1.08 (slightly faster)
```javascript
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  document.querySelectorAll('[data-parallax]').forEach(el => {
    const rate = parseFloat(el.dataset.parallax);
    el.style.transform = `translateY(${scrollY * (rate - 1)}px)`;
  });
});
```
Mobile (< 768px): parallax intensity × 0.3.

**Layer 4 — Counter Animations:**
All metrics count from 0 to final value on scroll entry. Duration 1600ms, deceleration easing.
```javascript
function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  const duration = 1600;
  const start = performance.now();
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out
    el.textContent = prefix + Math.round(target * eased).toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}
```

**Layer 5 — Hover Micro-Interactions:**
- CTA buttons: `background-color` shifts (spot→darker spot), subtle `translateY(-2px)`, 180ms mechanical ease. Declared with `@media (hover: hover)`.
- Feature/testimonial cards: `border-color` shifts from ink-20% to ink-100%, 150ms.
- Text links: underline expands `width: 0→100%` via pseudo-element, 200ms.
- Images: `scale(1.02)` with `overflow: hidden`, 350ms.

**Layer 6 — Text Reveal (Hero + 1 other):**
Hero headline: **line-by-line clip reveal** — split into line `<span>` wrappers, each clips from bottom sequentially (80ms delay each line):
```css
.headline-line { overflow: hidden; display: block; }
.headline-line span { display: block; transform: translateY(110%); }
.headline-line span.anim-visible { transform: translateY(0); transition: transform 420ms cubic-bezier(0.25, 0, 0.25, 1); }
```
One additional section heading uses word-by-word fade-up (50ms per word).

**Layer 7 — Ambient / Continuous Motion:**
At least 1 continuously moving element:
- The newspaper dateline / timestamp in the hero slowly increments or pulses opacity (0.4→0.7→0.4 over 3s, `animation: pulse 3s ease-in-out infinite`).
- OR: a marquee ticker strip of logos/keywords scrolling at constant velocity.
```css
@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.marquee-track { animation: marquee 28s linear infinite; }
```

---

## Creative Differentiation Engine

### Visual Device Pool

**STRUCTURAL DEVICES (pick for layout variation):**
1. ★ **Broadsheet hero split** — hero divides into 3+ vertical columns with a different content type in each (headline | image | metrics), separated by visible column rules. SIGNATURE.
2. **Asymmetric 30/70 split** — section with 30% column holding a rotated vertical label and 70% column holding the primary content.
3. **Full-bleed newsprint bar** — a narrow (120–160px tall) full-width section acting as a section separator, containing a scrolling ticker or bold horizontal text.
4. ★ **Editorial grid** — 3 or 4 equal columns with column rules and distinct independent content in each, like a newspaper front page. SIGNATURE.
5. **Overlapping dateline badge** — a box positioned to cross two sections' boundary, displaying a "published" or "filed" timestamp in monospace.
6. **Pull-quote at scale** — a single sentence at 5–8× body size, left-aligned, spanning 8 of 12 columns.
7. **Inset correction box** — a bordered box indented 2 columns from the left margin, styled as an editorial note or guarantee statement.
8. **Sticky sidebar** — one column stays fixed (table of contents or running label) while the main column scrolls.
9. **Staggered column drop** — in a multi-column grid, columns start at different vertical positions (like a real newspaper layout where articles don't start at the same line).

**DECORATIVE DEVICES:**
10. ★ **Watermark oversize text** — a word printed at 15–25vw, 4% opacity, behind a section's content. SIGNATURE.
11. **Horizontal rule system** — thin 1px rules used as structural dividers within sections, with content sitting between rules like a ledger.
12. **Column rule accent** — one vertical column rule is replaced by the spot-color red for a single section.
13. **Monospace date/edition marker** — upper-right or upper-left always shows "Vol. X / Issue Y" or a date in monospace, persistent across scroll.
14. **Classified ad block** — a small section styled like newspaper classifieds: tight monospace, all caps, no images.
15. **Press mark** — a small editorial symbol (★ ▪ §) used as a bullet or section anchor in place of icons.
16. **Dot-matrix texture** — a repeating dot pattern (CSS radial-gradient) at 3% opacity on a section background.
17. **Rotated vertical label** — a label rotated -90° in the left margin, aligned to the section, in monospace uppercase.

**TYPOGRAPHIC DEVICES:**
18. **Mixed-weight headline** — one word in the hero headline is rendered in a contrasting weight (400 italic next to 900 upright) or in the spot color.
19. **Tabular metrics row** — a horizontal row of 3–5 metrics in monospace, all digits vertically aligned with `tabular-nums`, separated by vertical rules.
20. **Running header** — a thin 1px-bordered bar at the top of each section (below the main nav) shows the section name in monospace, like a newspaper section header.

**Required per page:** At least **6 different devices**. No device used more than twice. Signature devices (★): at least **2 must appear** on every page.

---

### Creative Brief Gate

Before writing any HTML, draft this 4-line brief. It is a binding contract:

```
CREATIVE BRIEF (mandatory before any code):

1. HOOK: What is the single most visually striking moment on this page?
   (e.g., "A hero where the headline is split across 3 column-ruled panels
   with a metric counter in the rightmost panel at 9rem monospace" — be specific)

2. RHYTHM: Describe the page's visual rhythm using a newspaper metaphor.
   (e.g., "Front page → feature spread → classified section → editorial → back page"
   or "Breaking news energy that slows to long-form depth by section 5")

3. DEVICES: List the 6+ devices from the pool with their assigned sections.
   (e.g., "Broadsheet hero split → hero | Watermark text → credibility | 
   Tabular metrics row → proof | Pull-quote → testimonials | ...")

4. WILDCARD: One layout or typographic invention NOT in the device pool.
   (e.g., "A section that mimics a newspaper fold — top half visible, 
   bottom half revealed on scroll with a fold-crease CSS border")

The final HTML must deliver every item in this brief.
If a brief item fails during implementation, replace it with something
equally ambitious — never delete or downgrade.
```

---

### Anti-Convergence Rules

The following layouts are **PROHIBITED**:

1. A hero that is only a centered or left-aligned serif heading with a subline and a red button. The hero must include at least one structural device from the pool — a column split, a metrics panel, a dateline badge, or a watermark oversize text.
2. Three equal-width feature cards with an icon, heading, and paragraph each. If showing 3+ features, they must use the editorial grid device (4 columns, column rules) or a 2+1 asymmetric split.
3. A testimonial section that is just quote cards in a 2- or 3-column grid. At least one testimonial must be a full-section-width pull-quote at large scale (5rem+).
4. A logo bar that is just logos on a newsprint background in a centered row. Logos must be presented in a bordered masthead strip, a marquee ticker, or a classified-ad-style list with company descriptors.
5. A metrics section where numbers are just large text with labels below, in a 3-column symmetric layout. Numbers must use tabular-figures and be in a structured row with visible column rules.
6. A CTA section that is just a headline, a subline, and a button on a black background. The anchor section must include at least one additional layer: a pull quote, a metrics statement, a rotated vertical label, or a structural device.
7. A FAQ that is just a flat accordion list. The FAQ section must include at least one non-FAQ element: an editorial inset correction box, a guarantee statement, or a running total counter.
8. A nav that is just a centered logo with links. Nav must be styled as a newspaper masthead: left-aligned logo/wordmark, right-aligned links in monospace uppercase, separated by a 2px bottom rule.
9. A footer that is just 3 columns of links on newsprint. Footer must contain one typographically dominant element: a large serif closing statement, a "published by" dateline block, or an edition number.
10. Gradient fills on any element. If you find yourself reaching for a gradient, use a fill-contrast shift (newsprint vs paper-mid) instead.

---

## Mobile Directive

**Breakpoints:** 768px (tablet), 480px (small mobile).

**Hero at < 768px:**
- Single column. Headline: `clamp(2.8rem, 8vw, 5rem)`. Deck copy below.
- Column rules become 1px horizontal rules between stacked elements.
- CTA button full-width (100%), visible without scroll.
- Dateline / edition marker: retained, displayed below logo at 10px monospace.

**Navigation at < 768px:**
- Hamburger toggle (functional JS required). Logo/wordmark always visible left.
- Menu expands as a full-width dropdown with 1px bordered rows for each link.
- Touch targets: minimum 44×44px.

**Grid collapse rules:**
- 12-column → 1 column at < 768px. All column rules become horizontal separators.
- 4-column editorial grid → 1 column (vertical stack) at < 768px, with column rules as horizontal rules between items.
- Asymmetric 30/70 → 1 column, label row on top, content below.
- Sticky sidebar: `position: static` on mobile; sidebar content appears above main column.

**Typography floor:**
- Display minimum: `clamp(2.5rem, 7vw, 4.5rem)`.
- Body minimum: `1rem`, line-height `1.6`.
- Label minimum: `0.65rem`, always uppercase monospace.

**Spacing floor:**
- Section vertical padding: `clamp(40px, 8vw, 80px)`.
- Section horizontal padding: `clamp(16px, 5vw, 40px)`.

**Decorative elements on mobile:**
- Watermark oversize text: `display: none` below 480px (too wide, breaks layout).
- Rotated vertical labels: `display: none` below 768px.
- Horizontal rule system, press marks, column rule accents: retained.
- Parallax: reduced to 30% intensity below 768px.

---

## Interactivity Requirements (All Mandatory)

- [ ] Hamburger nav toggle: fully functional open/close with accessible aria labels.
- [ ] FAQ accordion: each question expands/collapses its answer. One open at a time preferred.
- [ ] Smooth scroll: clicking anchor links scrolls smoothly to sections.
- [ ] All 7 animation layers: scroll entrances, stagger, parallax, counters, hover states, text reveal, ambient motion.
- [ ] Counter animations: all metric numbers count from 0.
- [ ] Marquee ticker (if used): continuous, pauses on hover.
- [ ] Reduced-motion: all animations resolve to end state instantly when `prefers-reduced-motion: reduce`.
- [ ] JavaScript is mandatory — no purely CSS-only implementations for animation layers.

---

## Image Guidance

This aesthetic is typography-first. Images are editorial tools, not decoration.

**Usage rules:**
- Images should appear as editorial photographs: black-and-white or desaturated preferred.
- Apply duotone treatment via CSS `filter: grayscale(100%)` or `mix-blend-mode: multiply` with an ink-color overlay.
- Images must sit within the column grid — never violate the column structure without explicit intention (overlapping container device).
- Maximum 3 images per page. More images dilute the typographic dominance.

**Unsplash fallbacks (editorial/business contexts):**
```
Thought leadership / research:  photo-1454165804606-c3d57bc86b40
Finance / investment:           photo-1579621970795-87facc2f976d
Workspace / productivity:       photo-1499750310107-5fef28a66643
Team / people:                  photo-1522202176988-66273c2fd55f
Founder / authority portrait:   photo-1507003211169-0a1dd7228f2d
```
Format: `https://images.unsplash.com/[photo-id]?w=1200&q=80&auto=format`

Apply grayscale filter to all images: `filter: grayscale(90%) contrast(1.1);`

**Rule:** No placeholder boxes. No broken img tags. Every image slot must have a real URL.

---

## Anti-Patterns

**Visual anti-patterns:**
- Border-radius on any element — immediate disqualification.
- Any box-shadow or drop-shadow — prohibited.
- Gradient backgrounds, gradient text, gradient buttons — prohibited.
- Centered headlines at display size — prohibited.
- Icons from icon libraries (Heroicons, Lucide, Font Awesome) — prohibited. Use press marks (★ ▪ §) or no icon at all.
- Section backgrounds in the spot color (editorial red) — prohibited.
- More than 3 distinct section background fills on one page — prohibited.

**Typography anti-patterns:**
- Sans-serif at display sizes — prohibited.
- Mixing more than 2 typefaces (one serif, one monospace is the limit) — prohibited.
- Non-tabular figures in metric displays — prohibited.
- Letter-spacing on body copy beyond 0.02em — prohibited.

**Animation anti-patterns:**
- Elastic or bouncy easing on any element — prohibited (mechanical aesthetic only).
- Animations that loop continuously on content elements (text, metrics, headlines) — prohibited. Ambient motion is for decorative elements only.
- Hover states on mobile (touch devices) — declare with `@media (hover: hover)`.
- Consecutive sections with identical entrance animation — prohibited.
- Page that delivers only FAQ accordion as its interactive element — failed page.

**Structural anti-patterns:**
- All sections at the same column count — prohibited. Column variation is mandatory.
- A page where no section uses full-bleed width — prohibited.
- Symmetric layouts dominating more than 40% of sections — prohibited.

---

## QA Checklist

Before shipping, verify every item by inspection:

- [ ] No border-radius anywhere on the page (including buttons, images, cards)
- [ ] No box-shadow or drop-shadow anywhere
- [ ] No gradient fills anywhere
- [ ] No centered display headlines
- [ ] Exactly one spot-color (editorial red) appearing on ≤3 elements total
- [ ] Exactly one full-black anchor section
- [ ] No two adjacent sections share the same background fill
- [ ] All label/byline/metadata text is monospace uppercase
- [ ] All display headlines are serif
- [ ] Column rules visible in at least one multi-column section
- [ ] At least 2 signature devices from the pool are present
- [ ] At least 6 total devices from the pool are present
- [ ] Creative brief was written before code and is fulfilled
- [ ] Hero headline is not a simple centered heading + subline + button
- [ ] No three-equal-feature-card layout exists
- [ ] Layer 1: Every section has a scroll-triggered entrance animation
- [ ] Layer 2: At least 4 sections use staggered child reveals
- [ ] Layer 3: At least 2 decorative elements have parallax drift
- [ ] Layer 4: All metric numbers count up from 0 on scroll entry
- [ ] Layer 5: Every button, card, and link has a hover micro-interaction
- [ ] Layer 6: Hero headline uses line-by-line clip reveal
- [ ] Layer 7: At least 1 continuously moving ambient element exists
- [ ] No two consecutive sections use the same entrance animation variant
- [ ] All animations resolve instantly with prefers-reduced-motion
- [ ] Hamburger nav is functional on mobile
- [ ] FAQ accordion is functional
- [ ] All metrics display with tabular-nums
- [ ] No placeholder image boxes — all img tags have real URLs
- [ ] No horizontal overflow at 375px viewport width
- [ ] Primary CTA visible on mobile first load without scroll
