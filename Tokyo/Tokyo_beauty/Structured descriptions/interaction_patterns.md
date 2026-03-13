Below is a **clean, AI-oriented `interaction_patterns.md`** that complements your existing philosophy where motion should feel like **natural systems (“movement must feel like weather”)**.

This file defines **behavioral rules**, not just animation — it tells the AI **how UI elements respond to user actions**.

---

# interaction_patterns.md

## Purpose

This document defines **interaction behavior patterns** for UI elements.

Interactions must feel:

* responsive
* calm
* predictable
* unobtrusive

Motion should feel **organic and continuous**, not mechanical or flashy.

Avoid sudden or exaggerated animations.

---

# Global Interaction Principles

### 1. Motion Philosophy

Movement should feel **like environmental change**, not mechanical triggers.

Examples:

* fade instead of snap
* glide instead of jump
* soften instead of pop

Animation should **support clarity**, not attract attention to itself.

---

### 2. Response Timing

Interactions must feel immediate but smooth.

Standard durations:

```
micro interaction: 120ms – 180ms
standard UI transition: 200ms – 300ms
section reveal: 400ms – 700ms
```

---

### 3. Easing

Avoid harsh acceleration.

Preferred easing:

```
ease-out
cubic-bezier(0.22, 1, 0.36, 1)
```

Avoid:

```
linear
bounce
elastic
```

---

# Hover Interactions

Hover should provide **confirmation**, not spectacle.

### Buttons

On hover:

```
background: subtle color shift
translateY: -1px
box-shadow: slight increase
```

Example behavior:

```
transition: 200ms ease-out
```

---

### Links

On hover:

```
underline fade-in
color shift
```

Avoid sudden underlines.

Preferred pattern:

```
text-decoration-thickness: animate
```

---

### Cards

Card hover behavior:

```
translateY(-4px)
box-shadow increase
border color shift
```

Do not exceed:

```
translateY(-6px)
```

---

# Click Interactions

Click feedback should be **immediate and subtle**.

### Button Click

On press:

```
scale: 0.98
```

Release:

```
scale: 1
```

Duration:

```
120ms
```

---

### Toggle Elements

Examples:

* tabs
* switches
* segmented controls

Transition pattern:

```
background fade
indicator slide
```

Avoid:

```
instant state swap
```

---

# Form Interactions

Forms must feel **fast and forgiving**.

---

### Input Focus

On focus:

```
border color shift
subtle glow
```

Example:

```
border-color: accent
box-shadow: 0 0 0 2px accent-alpha
```

---

### Inline Validation

Validation should occur:

```
on blur
or after typing pause
```

Error display:

```
small text below input
color: warning
fade-in animation
```

Avoid:

```
alert popups
```

---

### Success State

After submission:

```
form fades out
confirmation message fades in
```

Alternative pattern:

```
form morphs into confirmation block
```

Avoid page reloads.

---

# Scroll Interactions

Scrolling should reveal content gradually.

---

### Section Reveal

Elements should animate when entering viewport.

Allowed animations:

```
fade-in
slide-up (20–40px)
scale-in (0.96 → 1)
```

Duration:

```
500–700ms
```

---

### Staggered Reveal

Lists or grids should reveal sequentially.

Example delay pattern:

```
0ms
80ms
160ms
240ms
```

Avoid large delays.

---

# Navigation Interactions

Navigation should feel **stable and predictable**.

---

### Sticky Header

When scrolling down:

```
header compresses
background becomes solid
```

Animation duration:

```
250ms
```

---

### Mobile Menu

Opening pattern:

```
fade + slide from top
```

Closing pattern:

```
reverse animation
```

Avoid:

```
instant overlay appearance
```

---

# Modal Behavior

Modals should feel **softly layered above content**.

---

### Opening

Animation:

```
overlay fade-in
modal scale 0.96 → 1
```

Duration:

```
250–300ms
```

---

### Closing

Animation:

```
modal fade
overlay fade
```

---

### Interaction Rules

Modal must close when:

```
overlay click
escape key
close button
```

---

# Loading States

Loading should communicate progress.

---

### Button Loading

After click:

```
button label fades
spinner appears
```

Button width should remain constant.

---

### Page Loading

Prefer:

```
skeleton loaders
```

Avoid:

```
full-screen spinners
```

---

# Microinteractions

Microinteractions provide **feedback and delight** without distraction.

Examples:

```
heart icon fills when liked
bookmark icon slides
checkbox draws checkmark
```

Rules:

```
duration < 250ms
```

Avoid exaggerated animations.

---

# Error Interactions

Errors should be informative but calm.

Example:

```
input border turns red
error text fades in
```

Avoid:

```
shake animations
```

They feel aggressive.

---

# Accessibility Rules

All interactions must support accessibility.

Requirements:

```
focus states visible
animations disabled when prefers-reduced-motion
keyboard navigation supported
```

Example CSS:

```
@media (prefers-reduced-motion: reduce)
```

---

# Anti-Patterns

Avoid the following interaction styles:

```
parallax overload
excessive hover animations
carousel autoplay
long delays
scroll hijacking
```

These reduce usability.

---

# Interaction Assembly Rules for AI

When generating UI:

```
1 apply hover state
2 apply click state
3 apply focus state
4 apply loading state
5 apply success state
```

Every interactive element must have **at least two feedback states**.

---

If you'd like, the **next file that dramatically improves AI-generated sites** is:

**`components.md`**

That one defines the **actual UI building blocks (cards, testimonials, pricing blocks, etc.)** the AI can assemble.
