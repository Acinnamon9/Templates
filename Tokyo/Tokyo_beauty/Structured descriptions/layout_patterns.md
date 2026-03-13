Below is a **practical `layout_patterns.md`** designed specifically for **AI-generated funnel websites**.

The goal is to give the AI **structural intelligence** so it can assemble pages that feel intentional rather than random.

This file focuses on:

* section hierarchy
* layout ratios
* content slots
* spacing logic
* allowed variations

It should work alongside your **design system and constraints**.

---

# layout_patterns.md

## Purpose

This document defines **structural patterns for landing page sections**.

The AI should use these patterns when assembling pages so that the result follows **recognizable marketing and UX structures** rather than arbitrary layouts.

Each pattern specifies:

* content blocks
* layout proportions
* spacing
* alignment rules
* optional variations

Sections may be reordered when appropriate but must remain **logically coherent**.

---

# Global Layout Rules

### Maximum Content Width

```
max-width: 1200px
margin: auto
```

---

### Section Spacing

Sections must follow a consistent vertical rhythm.

```
section spacing: clamp(6rem, 12vw, 10rem)
```

Small sections (like CTA or FAQ):

```
clamp(4rem, 8vw, 6rem)
```

---

### Grid Rules

Layouts should use **asymmetric grids**.

Allowed ratios:

```
1 : 2
2 : 1
1 : 3
3 : 1
```

Avoid:

```
1 : 1 (perfect symmetry)
```

---

### Text Width

Body text should not exceed:

```
max-width: 60ch
```

---

### Content Hierarchy

Most landing pages follow this hierarchy:

```
Hero
Problem
Solution
Benefits
Proof
Offer
CTA
Footer
```

The AI may omit sections when appropriate but should maintain **narrative flow**.

---

# Section Patterns

---

# 1. Hero Section

## Purpose

Introduce the offer and create immediate clarity.

---

## Structure

```
headline
subheadline
primary CTA
secondary CTA (optional)
visual element
trust indicators (optional)
```

---

## Layout

Two-column asymmetrical layout.

```
text column: 1fr
visual column: 2fr
```

Or inverted.

```
2fr text
1fr visual
```

---

## Spacing

Headline margin bottom:

```
1.2em
```

CTA group spacing:

```
1.5rem
```

---

## Visual Types

Allowed visuals:

```
product screenshot
illustration
video preview
hero image
interactive animation
```

---

## Optional Elements

```
logo strip
rating badges
short testimonial
```

---

# 2. Problem Section

## Purpose

Articulate the user's pain point.

---

## Structure

```
section headline
problem explanation
3–4 problem bullets
supporting visual (optional)
```

---

## Layout

Text-dominant layout.

Single column or:

```
text:visual = 2:1
```

---

## Problem Bullet Pattern

Each bullet contains:

```
icon
short title
one sentence description
```

---

# 3. Solution Section

## Purpose

Explain the mechanism or product.

---

## Structure

```
headline
explanation paragraph
feature blocks
optional diagram
```

---

## Layout

Feature grid.

Allowed layouts:

```
3 columns
2 columns
```

---

## Feature Block Structure

```
icon
feature title
short explanation
```

---

## Grid Rule

Maximum features per section:

```
6
```

If more exist, split across sections.

---

# 4. Benefits Section

## Purpose

Translate features into outcomes.

---

## Structure

```
headline
benefit cards
optional illustration
```

---

## Layout

Card grid.

Allowed patterns:

```
3 cards
4 cards
```

Cards should be equal width.

---

## Card Structure

```
benefit title
1–2 sentence explanation
optional icon
```

---

# 5. Social Proof Section

## Purpose

Build trust.

---

## Allowed Formats

```
testimonials
case studies
review summaries
client logos
metrics
```

---

## Testimonial Layout

Three-column grid.

Each testimonial contains:

```
quote
author
company
photo (optional)
```

---

## Metrics Layout

Large numbers.

Example:

```
10k+ users
4.8 rating
500 companies
```

Display in:

```
3 or 4 column grid
```

---

# 6. Offer Section

## Purpose

Present the product or service clearly.

---

## Structure

```
headline
offer explanation
pricing or plan cards
primary CTA
```

---

## Layout

Centered text followed by pricing cards.

Allowed pricing layouts:

```
2 plans
3 plans
```

Avoid:

```
more than 4 plans
```

---

## Pricing Card Structure

```
plan name
price
features list
CTA button
```

---

# 7. FAQ Section

## Purpose

Resolve objections.

---

## Structure

```
section headline
accordion questions
```

---

## Layout

Single column list.

Recommended count:

```
4–8 questions
```

---

# 8. CTA Section

## Purpose

Capture conversion.

---

## Structure

```
headline
supporting text
primary CTA
optional secondary CTA
```

---

## Layout

Centered layout.

Optional background contrast.

---

## CTA Rules

There must be **one clear action**.

Examples:

```
Book a call
Start free trial
Get demo
Join waitlist
```

---

# 9. Footer

## Purpose

Provide secondary navigation and legal information.

---

## Structure

```
logo
navigation links
contact info
social icons
legal links
```

---

## Layout

Two patterns allowed:

### Simple Footer

```
logo
copyright
links
```

### Multi-column Footer

```
logo column
links column
contact column
social column
```

---

# Common Page Layout Templates

---

## Template 1 — Lead Generation Page

```
Hero
Problem
Solution
Benefits
Testimonials
CTA
FAQ
Footer
```

---

## Template 2 — Product Launch Page

```
Hero
Product Demo
Features
Benefits
Social Proof
Pricing
CTA
Footer
```

---

## Template 3 — Agency Landing Page

```
Hero
Client Logos
Services
Process
Case Studies
Testimonials
CTA
Footer
```

---

# Section Assembly Rules

When constructing a page:

1. Always begin with **Hero**.
2. Introduce **problem or opportunity**.
3. Explain **solution or mechanism**.
4. Present **benefits**.
5. Show **social proof**.
6. Introduce **offer or pricing**.
7. End with **strong CTA**.

---

# Anti-Patterns

Avoid the following layouts:

```
multiple competing CTAs above the fold
more than 3 columns on mobile
text blocks longer than 80ch
hero sections without CTA
carousels as primary hero
```

---

# Assembly Logic for AI

When generating a page:

```
1 select page template
2 instantiate sections
3 populate content blocks
4 apply design tokens
5 apply motion rules
```

---

If you want, I can also give you the **second most powerful file for AI websites**:

`components.md`

That one dramatically improves the **visual coherence of generated pages**.
