Below is a **clean, AI-consumable `anti_patterns.md`**.
The goal of this file is to **constrain generation** so the AI avoids low-quality, generic, or conversion-killing patterns.

Think of it as **negative design rules**.

---

# anti_patterns.md

## Purpose

This document defines **patterns that must never appear in AI-generated websites**.

These rules prevent:

* generic template design
* poor conversion structures
* visual inconsistency
* low-credibility marketing signals

When generating pages, the AI should **actively check outputs against this list** and remove violations.

---

# Structural Anti-Patterns

## Too Many CTAs Above the Fold

Never place multiple competing actions in the hero.

Forbidden:

```
Book a demo
Start trial
Watch video
Learn more
Contact sales
```

Rule:

```
Maximum primary CTAs above the fold: 1
Optional secondary CTA: 1
```

---

## Carousel Hero Sections

Avoid rotating hero content.

Reasons:

* users rarely interact with slides
* messaging becomes diluted
* poor accessibility

Forbidden:

```
hero slider
auto-rotating banners
multi-slide carousels
```

Hero content must remain **static and immediately readable**.

---

## Random Section Order

Do not generate pages with chaotic narrative flow.

Forbidden structure examples:

```
Hero
Pricing
Features
Problem
Testimonials
```

Correct narrative progression:

```
Hero
Problem
Solution
Benefits
Proof
Offer
CTA
```

---

## Infinite Scroll Landing Pages

Avoid excessive vertical length.

Rule:

```
Recommended sections: 6–9
Maximum sections: 12
```

---

# Typography Anti-Patterns

## Too Many Fonts

Forbidden:

```
3+ font families
```

Allowed:

```
1 primary font
1 optional accent font
```

---

## Centered Body Paragraphs

Centered paragraphs reduce readability.

Forbidden:

```
long centered paragraphs
```

Allowed:

```
centered headings
left-aligned body text
```

---

## Extremely Wide Text Blocks

Do not allow line lengths that reduce readability.

Forbidden:

```
text width > 75ch
```

Preferred:

```
45–65ch
```

---

# Visual Design Anti-Patterns

## Stock Handshake Photos

These reduce credibility.

Forbidden image types:

```
corporate handshakes
people pointing at whiteboards
fake office smiles
generic team photos
```

---

## Mixed Illustration Styles

Avoid mixing visual systems.

Forbidden combinations:

```
3D renders + flat icons
cartoon illustrations + stock photography
neon gradients + minimalist UI
```

Each page must use **one coherent visual style**.

---

## Overused Gradients

Gradients must be subtle.

Forbidden:

```
rainbow gradients
aggressive neon gradients
multi-color gradients across large backgrounds
```

---

## Decorative Noise

Avoid unnecessary visual clutter.

Forbidden:

```
floating shapes
confetti graphics
random geometric decorations
```

Visual elements must serve a **structural or communicative purpose**.

---

# Layout Anti-Patterns

## Perfect Symmetry Everywhere

Pages should not feel mechanically balanced.

Avoid:

```
1:1 grid layouts everywhere
perfect center alignment for entire pages
```

Prefer:

```
asymmetric composition
visual tension
offset elements
```

---

## Dense Text Walls

Avoid large blocks of uninterrupted text.

Forbidden:

```
paragraphs longer than 5 lines
```

Use:

```
short paragraphs
bullet lists
content blocks
```

---

## Overloaded Feature Sections

Avoid dumping too many features in one grid.

Forbidden:

```
10+ feature cards in one section
```

Preferred:

```
3–6 features
```

---

# Interaction Anti-Patterns

## Aggressive Animations

Avoid distracting motion.

Forbidden:

```
bounce animations
continuous looping motion
rapid transitions
```

Motion should be:

```
slow
subtle
atmospheric
```

---

## Modal Overuse

Do not interrupt users excessively.

Forbidden:

```
multiple popups
auto-triggered modals on load
stacked modals
```

Allowed:

```
one modal for key interaction
```

---

## Scroll Hijacking

Never override native scrolling behavior.

Forbidden:

```
scroll-jacking
forced scroll animations
horizontal scroll traps
```

---

# Conversion Anti-Patterns

## Early Pricing

Avoid showing pricing before context.

Forbidden flow:

```
Hero
Pricing
Features
```

Preferred:

```
Hero
Problem
Solution
Benefits
Pricing
```

---

## Weak CTA Language

Avoid vague actions.

Forbidden:

```
Submit
Click here
Learn more
Continue
```

Preferred:

```
Start free trial
Book a demo
Get early access
See the platform
```

---

## Multiple Competing Offers

Do not overwhelm users.

Forbidden:

```
newsletter signup
ebook download
demo booking
trial signup
community invite
```

Choose **one primary conversion path**.

---

# Performance Anti-Patterns

## Large Hero Videos

Avoid heavy assets that delay load.

Forbidden:

```
autoplay 4k background videos
uncompressed hero video
```

Preferred:

```
static image
compressed short video
interactive preview
```

---

## Too Many Fonts or Libraries

Avoid bloated dependencies.

Forbidden:

```
multiple font CDNs
excessive animation libraries
heavy UI frameworks
```

---

# Content Anti-Patterns

## Generic Marketing Language

Avoid empty statements.

Forbidden phrases:

```
cutting edge
revolutionary platform
game changing solution
next generation technology
```

Content must be **specific and concrete**.

---

## Buzzword Stacking

Avoid meaningless jargon.

Forbidden examples:

```
AI-powered synergy platform
blockchain-enabled growth ecosystem
holistic optimization framework
```

---

# Quality Check Before Output

Before generating a website, the AI should verify:

```
No forbidden visual patterns
No forbidden layout structures
No weak CTA language
No mixed design systems
No excessive CTAs
```

If violations are detected, the AI must **revise the layout before final output**.

---

If you want, the **next file worth building is `components.md`**.

That file often produces the **biggest improvement in AI-generated websites**, because it gives the model a **library of reusable UI primitives instead of forcing it to invent everything every time**.
