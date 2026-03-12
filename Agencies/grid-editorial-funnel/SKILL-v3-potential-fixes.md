---
name: grid-editorial-funnel
description: Generates premium grid-editorial funnel pages. Use when building landing pages, product showcases, brand pages, or high-ticket funnels.
disable-model-invocation: true
---

# SKILL-v3 Potential Fixes

This file documents anticipated issues with SKILL-v3 before running iteration-3 evals. Apply confirmed fixes to SKILL-v4.

---

## Fix A: Text bleeding into image tiles

**Problem:** Text tiles have `overflow: visible` + `z-index: 1`. If a text tile sits adjacent to an image tile, the word bleeds over the image fragment — not into empty space as intended.

**Current v3 state:** Placement guidelines say "scatter text near empty tiles" but don't explicitly forbid text-next-to-image adjacency.

**Fix to add to Placement Guidelines:**
> "Text tiles must not be placed directly adjacent (left, right, above, or below) to image fragment tiles. Text bleed only reads as intentional when it flows into empty space. An image neighbor will visually absorb the bleed and look like a layout error."

---

## Fix B: Hero page-load animation conflicts with early scrolling

**Problem:** The page-load animation runs for ~1.5s. If the user starts scrolling before it completes, the GSAP scroll scrub and the load timeline fight — elements pulled in two directions simultaneously.

**Fix to add to Hero Section:**
```js
// Lock scroll during hero load animation, release on complete
document.body.style.overflow = 'hidden';
const heroLoadTl = gsap.timeline({
  delay: 0.3,
  onComplete: () => { document.body.style.overflow = ''; }
});
```
> "Lock scroll during the hero load animation. Release in `onComplete`. Prevents scroll scrub from fighting the entry animation on fast scrollers."

---

## Fix C: Hero "exit only" wording not strong enough

**Problem:** v3 explains the exit-only architecture in prose. Agents pattern-match on the enter+exit structure they see in other sections and apply it to the hero too — making the hero invisible at scroll position 0 when scrubbing back.

**Fix — rewrite the hero section opener as a hard warning:**
```
⚠️ HERO IS DIFFERENT FROM ALL OTHER SECTIONS:
- Entry: page-load animation ONLY. Not scroll-driven.
- Scroll timeline: exit phase ONLY (position 0.7 → 1.0).
- DO NOT add enter animations to the hero scroll timeline.
  Reason: scrubbing back to position 0 reverses the enter,
  making the hero invisible when the user is at the top of the page.
```

---

## Fix D: Z-index stacking for pinned sections

**Problem:** When section N+1 enters while section N is still pinned, they overlap. Without explicit z-index, the new section can render behind the exiting one.

**Fix to add to Output Structure:**
> "Each pinned section must have a progressively higher z-index:
> Hero: z-index 10. Each subsequent section +10 (Manifesto: 20, Spotlight: 30, Texture: 40, Statement: 50). Contact stays at z-[70].
> This ensures incoming sections always render in front of exiting ones."

---

## Fix E: Animation vocabulary not producing actual variety

**Problem:** The vocabulary of moves is listed but without assignment, agents default to the same comfortable pattern (slide-from-left, fade-out) for every section. "No two sections should animate the same way" is too abstract.

**Fix — add a motion brief pattern before implementation:**
> "Before writing animation code, write a one-line motion brief per section as a comment:
> ```js
> // Manifesto: images wipe in (clipPath), text rises from below, exit drifts right
> // Spotlight: products rotate in from lower-left, portrait slides from right
> // Texture: macro images zoom out while entering, text floats up slowly
> ```
> Committing to a brief before coding forces deliberate choreography choices and prevents all sections defaulting to the same generic slide."

---

## Priority

| Fix | Likely to surface? | Impact |
|-----|-------------------|--------|
| A — text bleeds onto images | High | Visual bug |
| B — scroll locked during load | Medium | Animation glitch |
| C — hero exit-only unclear | High | Hero invisible on scroll-back |
| D — z-index stacking | Medium | Wrong section overlap order |
| E — animation variety | High | Generic-looking output |
