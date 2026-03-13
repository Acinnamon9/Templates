
---

# components.md

## Purpose

This document defines the **reusable UI components** available when generating pages.
Each component includes:

* name
* description
* structure
* variants
* usage guidelines

Components should be **composable, responsive, and conversion-focused**.

---

# Core Components

## Navbar

**Description**

Primary navigation container appearing at the top of the page.

**Structure**

* logo
* navigation links
* CTA button
* optional mobile menu

**Example Structure**

```
Navbar
 ├─ Logo
 ├─ Nav Links
 │   ├─ Features
 │   ├─ Pricing
 │   ├─ About
 │   └─ Contact
 └─ CTA Button
```

**Variants**

* centered navigation
* split navigation
* minimal navbar
* transparent navbar (hero overlay)

**Guidelines**

* Keep links under 6
* Always include a CTA
* Mobile collapse required

---

# Hero Section

**Description**

Primary above-the-fold section that communicates the core value proposition.

**Structure**

```
Hero
 ├─ Headline
 ├─ Subheadline
 ├─ CTA Button
 ├─ Secondary CTA (optional)
 └─ Hero Image / Illustration
```

**Variants**

* centered hero
* split hero (text left, image right)
* video hero
* background image hero

**Guidelines**

* headline should communicate outcome
* CTA must be immediately visible
* avoid more than two CTAs

---

# Feature Grid

**Description**

Displays product features or benefits in a structured grid.

**Structure**

```
FeatureGrid
 ├─ Section Title
 ├─ Feature Item
 │   ├─ Icon
 │   ├─ Title
 │   └─ Description
 ├─ Feature Item
 └─ Feature Item
```

**Variants**

* 3 column grid
* 4 column grid
* stacked list
* icon cards

**Guidelines**

* use short benefit statements
* icons should visually differentiate features

---

# Testimonial Section

**Description**

Displays social proof from users or clients.

**Structure**

```
Testimonials
 ├─ Section Title
 ├─ Testimonial Card
 │   ├─ Quote
 │   ├─ Name
 │   ├─ Role
 │   └─ Avatar
```

**Variants**

* single highlight testimonial
* carousel
* grid testimonials

**Guidelines**

* include real names and roles
* highlight outcomes when possible

---

# Pricing Section

**Description**

Displays pricing plans and plan comparison.

**Structure**

```
Pricing
 ├─ Section Title
 ├─ Plan Card
 │   ├─ Plan Name
 │   ├─ Price
 │   ├─ Features List
 │   └─ CTA
```

**Variants**

* 3 plan comparison
* monthly/yearly toggle
* single plan highlight

**Guidelines**

* highlight recommended plan
* avoid more than 4 plans

---

# CTA Section

**Description**

Conversion-focused call-to-action section.

**Structure**

```
CTA
 ├─ Headline
 ├─ Supporting Text
 └─ CTA Button
```

**Variants**

* centered CTA
* split CTA
* banner CTA

**Guidelines**

* keep copy concise
* emphasize urgency or benefit

---

# Footer

**Description**

Bottom section containing navigation, company info, and links.

**Structure**

```
Footer
 ├─ Logo
 ├─ Link Columns
 │   ├─ Product
 │   ├─ Company
 │   └─ Resources
 ├─ Social Links
 └─ Copyright
```

**Variants**

* simple footer
* multi-column footer
* minimal legal footer

---

# Form Component

**Description**

Captures user input for signup, contact, or lead generation.

**Structure**

```
Form
 ├─ Input Field
 ├─ Input Field
 ├─ Submit Button
 └─ Privacy Notice
```

**Variants**

* contact form
* email capture
* multi-step form

**Guidelines**

* minimize number of fields
* clear submit CTA

---

# Card Component

**Description**

Flexible container used for features, blog posts, or services.

**Structure**

```
Card
 ├─ Image/Icon
 ├─ Title
 ├─ Description
 └─ Link/CTA
```

**Variants**

* shadow card
* bordered card
* minimal card

---

# Design Constraints

Components should follow these principles:

* mobile responsive
* clear visual hierarchy
* consistent spacing
* reusable structure
* minimal nesting complexity

---

# Component Composition

Pages should typically follow patterns like:

```
Navbar
Hero
Feature Grid
Testimonials
Pricing
CTA
Footer
```

or

```
Navbar
Hero
Feature Grid
CTA
Footer
```

---

## Important Clarification

Before I generate the **rest of the AI website generation system**, I need to know:

1. Are these files meant for **AI prompt context** or **a structured generator pipeline**?
2. Are you using **plain HTML/CSS generation** or **React / Next.js components**?
3. Should components include **actual code snippets** or just **semantic structure** like above?
4. Do you also want:

   * `design_tokens.md`
   * `layout_patterns.md`
   * `copy_patterns.md`
   * `section_sequences.md`

If your goal is **AI-generated high-quality landing pages**, those four files together create a **much stronger generation system** than `components.md` alone.
