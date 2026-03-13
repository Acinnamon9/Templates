Below is a **complete `prompt_instructions.md`** designed to control **how the AI actually builds pages**.

This file acts like an **operating manual for the generator** so it produces:

* structured pages
* consistent design
* funnel-oriented layouts
* compliant with aesthetic rules and constraints

It explicitly tells the AI **what to read first and how to assemble the page**.

---

# prompt_instructions.md

## Purpose

This document defines the **generation process the AI must follow** when creating websites or landing pages.

The AI must treat the design system as a **multi-stage pipeline**, not a free-form generation task.

The goal is to produce pages that are:

```
structured
aesthetically consistent
conversion-oriented
technically valid
```

The generator must follow the process defined below.

---

# Generation Pipeline

The AI must follow these steps **in order**.

```
1 Read aesthetic philosophy
2 Read machine-readable aesthetic constraints
3 Read technical constraints
4 Determine page type
5 Select layout template
6 Assemble sections
7 Populate components
8 Apply design tokens
9 Apply motion rules
10 Generate HTML/CSS structure
```

Each step is described below.

---

# Step 1 — Read Aesthetic Philosophy

Source:

* `Beauty.md`

This file defines the **creative philosophy of the system**.

It influences:

```
visual restraint
asymmetry
spatial rhythm
typographic presence
motion atmosphere
```

The AI must internalize these principles before generating any layout.

The design should feel **discovered rather than constructed**. 

---

# Step 2 — Read Machine-Readable Aesthetic Constraints

Source:

* `Beauty_for_AI.md`

This file translates the philosophy into **technical rules**.

Examples include:

```
spacing logic
grid asymmetry
color restrictions
motion curves
typographic scale
```

For example:

```
motion must follow the --weather cubic-bezier curve
spacing must use clamp() with viewport units
no perfect symmetry
```

These constraints must override any default UI patterns. 

---

# Step 3 — Read Technical Constraints

Source:

* `constraints.md`

This file defines the **technical architecture** for generated pages.

It includes:

```
allowed frameworks
animation libraries
analytics integrations
marketing funnel tools
hosting environment
```

Typical environment:

```
HTML / CSS / JS
Tailwind or custom CSS
GSAP for animation
Vercel hosting
external APIs for integrations
```

The generated page must remain compatible with this environment. 

---

# Step 4 — Determine Page Type

Before generating content, determine which **page archetype** is being built.

Examples:

```
Lead generation landing page
Product launch page
SaaS marketing page
Agency landing page
Portfolio page
```

The chosen type determines:

```
section sequence
component density
conversion elements
```

---

# Step 5 — Select Layout Template

Choose an appropriate **site map template**.

Example structures:

Lead generation:

```
Hero
Problem
Solution
Benefits
Testimonials
Offer
FAQ
CTA
Footer
```

Product marketing:

```
Hero
Product demo
Features
Benefits
Social proof
Pricing
CTA
Footer
```

Agency:

```
Hero
Client logos
Services
Process
Case studies
Testimonials
CTA
Footer
```

The template defines the **narrative flow of the page**.

---

# Step 6 — Instantiate Sections

For each section:

1. create a section container
2. apply layout pattern
3. assign content slots

Example hero structure:

```
headline
subheadline
primary CTA
supporting visual
optional trust indicators
```

Example testimonial section:

```
section headline
testimonial cards
author metadata
```

Sections must follow **layout_patterns.md** rules.

---

# Step 7 — Populate Components

Sections are built from **reusable components**.

Example components:

```
feature card
testimonial card
pricing card
CTA block
logo strip
icon feature block
```

Each component must follow:

```
consistent spacing
tokenized colors
design token typography
```

No component should introduce new styles outside the token system.

---

# Step 8 — Apply Brand Tokens

All visual values must come from **design tokens**.

Sources:

```
brand_tokens.md
Beauty_for_AI.md
```

Allowed token types:

```
color tokens
spacing tokens
typography tokens
shadow tokens
radius tokens
motion tokens
```

Examples:

```
var(--space-lg)
var(--color-primary)
var(--radius-md)
var(--shadow-sm)
```

Never hardcode:

```
pixel spacing
hex colors
font sizes
```

---

# Step 9 — Apply Motion Rules

Motion must follow the **meteorological animation philosophy**.

Key rules:

```
slow reveal
soft easing
opacity-based transitions
minimal microinteractions
```

Example:

```
reveal duration: 1200ms
microinteraction: 150–300ms
```

No:

```
bounce animations
elastic effects
linear timing
```

All animation curves must follow:

```
--weather cubic-bezier
```

---

# Step 10 — Generate HTML/CSS Structure

The final output should include:

```
semantic HTML structure
tokenized CSS variables
responsive layout
accessible markup
```

Structure example:

```
<header>
<section class="hero">
<section class="problem">
<section class="solution">
<section class="benefits">
<section class="testimonials">
<section class="offer">
<section class="faq">
<section class="cta">
<footer>
```

Layout should follow:

```
grid-based systems
asymmetrical columns
consistent spacing rhythm
```

---

# Responsiveness Rules

The page must adapt across:

```
desktop
tablet
mobile
```

Key adjustments:

Mobile:

```
single-column layouts
reduced spacing tokens
stacked sections
```

Tablet:

```
2-column layouts when appropriate
```

Desktop:

```
asymmetrical grid layouts
large typography
expanded spacing
```

---

# Conversion Requirements

Every generated page must include **at least one primary conversion action**.

Examples:

```
Book a call
Start free trial
Get demo
Join waitlist
Download guide
```

CTA placement:

```
hero
mid-page
final CTA section
```

---

# Performance Rules

Generated pages must be optimized for performance.

Requirements:

```
lazy load images
use modern image formats
minimize blocking scripts
avoid large JS bundles
```

Animations must not block rendering.

---

# AI Behavioral Constraints

The AI must avoid:

```
random section ordering
unstructured layouts
arbitrary styling
overuse of animation
generic marketing clichés
```

The system should prefer:

```
clarity
restraint
asymmetry
conversion-focused narrative
```

---

# Generation Summary

The AI must follow this mental model:

```
read philosophy
→ read constraints
→ choose page archetype
→ build section structure
→ populate components
→ apply tokens
→ apply motion rules
→ output responsive HTML/CSS
```

This pipeline ensures the output is:

```
coherent
beautiful
structured
conversion-oriented
```

---

## Final Instruction

The AI must behave like a **design system interpreter**, not a freeform generator.

Every design decision must be traceable to:

```
aesthetic philosophy
technical constraint
design token
layout pattern
conversion logic
```

If a decision cannot be traced to one of these sources, it should not be introduced.
