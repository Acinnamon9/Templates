Below is a **production-grade `brand_tokens.md`** designed so an AI system can **consistently generate coherent design systems** instead of inventing arbitrary CSS values.

The philosophy is:

* **tokens first**
* **components consume tokens**
* **no raw values in UI code**

This file defines **global reusable variables**.

---

# brand_tokens.md

## Purpose

This file defines **global design tokens** used across all generated interfaces.

Tokens ensure:

* visual consistency
* predictable spacing
* consistent color usage
* reusable UI patterns

All generated CSS should reference these tokens rather than using raw values.

Example:

Avoid:

```css
margin-top: 37px;
color: #1f2937;
```

Prefer:

```css
margin-top: var(--space-lg);
color: var(--color-text-primary);
```

---

# Token Categories

Tokens are organized into the following groups:

```
Color tokens
Spacing tokens
Typography tokens
Radius tokens
Shadow tokens
Z-index tokens
Motion tokens
Layout tokens
```

---

# Color Tokens

## Philosophy

Color usage should follow a **semantic system**, not arbitrary palettes.

Colors represent **roles**, not specific hues.

---

## Core Color Roles

```css
--color-primary
--color-primary-hover
--color-accent
--color-accent-hover
```

These represent the main interactive colors.

---

## Background Layers

Used for depth and surface hierarchy.

```css
--color-background
--color-surface
--color-surface-alt
--color-overlay
```

Usage:

```
background → page
surface → cards
surface-alt → subtle panels
overlay → modals
```

---

## Text Colors

```css
--color-text-primary
--color-text-secondary
--color-text-muted
--color-text-inverse
```

Guidelines:

```
Primary → headings and body
Secondary → supporting text
Muted → captions and labels
Inverse → text on dark backgrounds
```

---

## Border Colors

```css
--color-border
--color-border-subtle
--color-border-strong
```

---

## Status Colors

```css
--color-success
--color-warning
--color-error
--color-info
```

These are used for UI feedback.

---

# Spacing Tokens

Spacing defines the **visual rhythm** of the interface.

Spacing should scale proportionally.

---

## Base Unit

```
4px
```

All spacing should be multiples of this unit.

---

## Spacing Scale

```css
--space-2xs: 4px
--space-xs: 8px
--space-sm: 12px
--space-md: 16px
--space-lg: 24px
--space-xl: 32px
--space-2xl: 48px
--space-3xl: 64px
--space-4xl: 96px
```

---

## Section Spacing

Large vertical breathing space.

```css
--section-space-sm: 64px
--section-space-md: 96px
--section-space-lg: 128px
```

These should be used between major page sections.

---

# Typography Tokens

Typography tokens define **hierarchy and readability**.

---

## Font Families

```css
--font-primary
--font-secondary
--font-mono
```

Rules:

```
Primary → body text
Secondary → headings (optional)
Mono → code or numeric displays
```

---

## Font Sizes

```css
--text-xs: 12px
--text-sm: 14px
--text-md: 16px
--text-lg: 18px
--text-xl: 20px
--text-2xl: 24px
--text-3xl: 32px
--text-4xl: 40px
--text-5xl: 56px
--text-6xl: 72px
```

---

## Line Heights

```css
--line-tight: 1.1
--line-normal: 1.5
--line-loose: 1.8
```

---

## Letter Spacing

```css
--tracking-tight: -0.02em
--tracking-normal: 0
--tracking-wide: 0.05em
```

---

# Border Radius Tokens

These define corner rounding.

---

## Radius Scale

```css
--radius-none: 0px
--radius-sm: 2px
--radius-md: 6px
--radius-lg: 10px
--radius-xl: 16px
--radius-pill: 999px
```

Usage:

```
sm → buttons
md → cards
lg → panels
pill → tags / chips
```

---

# Shadow Tokens

Shadows represent **elevation**.

---

## Elevation Levels

```css
--shadow-xs
--shadow-sm
--shadow-md
--shadow-lg
--shadow-xl
```

Example definitions:

```css
--shadow-xs: 0 1px 2px rgba(0,0,0,0.05);
--shadow-sm: 0 2px 4px rgba(0,0,0,0.08);
--shadow-md: 0 6px 16px rgba(0,0,0,0.12);
--shadow-lg: 0 12px 32px rgba(0,0,0,0.16);
--shadow-xl: 0 24px 64px rgba(0,0,0,0.24);
```

---

# Motion Tokens

Motion must remain **subtle and purposeful**.

---

## Duration

```css
--motion-fast: 120ms
--motion-normal: 240ms
--motion-slow: 400ms
```

---

## Easing

```css
--ease-standard
--ease-in
--ease-out
--ease-in-out
```

Example:

```css
--ease-standard: cubic-bezier(0.4,0,0.2,1);
```

---

# Layout Tokens

Layout tokens define structural constraints.

---

## Container Widths

```css
--container-sm: 640px
--container-md: 768px
--container-lg: 1024px
--container-xl: 1200px
--container-2xl: 1400px
```

---

## Grid Gap

```css
--grid-gap-sm: 12px
--grid-gap-md: 24px
--grid-gap-lg: 32px
```

---

# Z-Index Tokens

To prevent stacking conflicts.

```css
--z-base: 0
--z-dropdown: 100
--z-sticky: 200
--z-modal: 1000
--z-toast: 1100
```

---

# Interaction Tokens

Used for interactive UI elements.

---

## Button Padding

```css
--button-padding-sm: 8px 12px
--button-padding-md: 10px 18px
--button-padding-lg: 14px 24px
```

---

## Focus Ring

```css
--focus-ring: 0 0 0 3px rgba(100,150,250,0.5)
```

Used for accessibility.

---

# Token Usage Rules

The AI must follow these constraints:

### Rule 1

Never use raw spacing values.

Always use spacing tokens.

---

### Rule 2

Never define arbitrary colors in components.

Always use semantic color tokens.

---

### Rule 3

Typography must follow defined size tokens.

---

### Rule 4

All shadows must reference shadow tokens.

---

# Example Token Implementation

Example CSS variable block:

```css
:root {

--color-primary: #2563eb;
--color-accent: #22c55e;

--space-md: 16px;
--space-xl: 32px;

--text-md: 16px;
--text-3xl: 32px;

--radius-md: 6px;

--shadow-sm: 0 2px 4px rgba(0,0,0,0.08);

}
```

---

# Example Component Usage

Example card:

```css
.card {

background: var(--color-surface);
padding: var(--space-lg);
border-radius: var(--radius-md);
box-shadow: var(--shadow-sm);

}
```

---

# Design Principles

The token system should produce designs that feel:

```
consistent
structured
balanced
intentional
```

Avoid:

```
arbitrary spacing
random colors
inconsistent typography
unstructured layouts
```

---

If you're building an **AI website generator**, two additional files dramatically improve quality:

* `interaction_patterns.md`
* `site_map_templates.md`

Together with `layout_patterns.md` and `brand_tokens.md`, they make the AI behave much closer to an **actual UI designer instead of a random HTML generator**.
