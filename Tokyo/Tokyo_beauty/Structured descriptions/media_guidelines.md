Below is a **clean, AI-usable `media_guidelines.md`**.
The purpose of this file is to prevent the most common failure mode of AI-generated websites: **visual incoherence**.

Without this file, AI often mixes:

* flat icons
* 3D renders
* stock photos
* cartoon illustrations

which instantly makes a site look amateur.

---

# media_guidelines.md

## Purpose

This document defines the **visual media rules** used across all generated websites.

Media includes:

* images
* icons
* illustrations
* video
* graphics
* diagrams

The AI must maintain **stylistic consistency**.
Mixing incompatible visual styles should be avoided.

---

# Global Media Principles

### Visual Consistency

All visual assets must belong to **one coherent visual family**.

Avoid mixing:

```
flat icons + 3D illustrations
photography + cartoon illustrations
photography + claymorphism graphics
```

Pick **one dominant style** per page.

---

### Visual Density

Images should not overwhelm the layout.

Recommended ratio:

```
text : visual = 60 : 40
```

Hero sections may invert this.

---

### Image Quality

All images must be:

```
high resolution
sharp
well-lit
free of visible compression
```

Avoid:

```
blurry stock photos
generic office handshakes
overly staged corporate photography
```

---

# Hero Images

Hero visuals define the **tone of the entire page**.

### Orientation

Hero images should be:

```
landscape
16:9 preferred
```

Avoid portrait images in hero sections.

---

### Composition

Preferred characteristics:

```
subject slightly off-center
negative space available for text
strong depth of field
clean background
```

---

### Allowed Hero Media Types

```
product screenshot
software interface
product photography
abstract illustration
short looping video
interactive animation
```

---

### Avoid

```
crowded scenes
complex backgrounds
multiple focal points
stock handshake photos
```

---

# Product Screenshots

Used for SaaS or software products.

### Rules

```
show real interface
avoid mockup overload
highlight one feature per screenshot
```

### Presentation

Allowed treatments:

```
subtle shadow
soft border radius
device frame (optional)
```

Avoid:

```
heavy drop shadows
neon glows
extreme perspective transforms
```

---

# Icons

Icons should follow a **consistent icon system**.

### Preferred Style

```
outline icons
2px stroke
minimal detail
rounded line endings
```

---

### Icon Size

Standard icon sizes:

```
16px
24px
32px
48px
```

Feature icons usually use:

```
32px or 48px
```

---

### Color Rules

Icons should typically use:

```
single color
brand accent color
neutral gray
```

Avoid multi-color icons unless part of a defined icon set.

---

### Avoid

```
emoji-style icons
3D icons
skeuomorphic icons
random icon packs
```

---

# Illustrations

Illustrations may be used when photography is unsuitable.

### Illustration Style

Preferred:

```
minimal
geometric
clean line work
limited color palette
```

Optional:

```
monochrome illustrations
brand color highlights
```

---

### Complexity

Illustrations should be **simple and symbolic**.

Avoid:

```
highly detailed scenes
comic-style drawings
cartoon characters
```

---

# Photography

Photography should feel **natural and contemporary**.

### Preferred Characteristics

```
soft lighting
natural environments
shallow depth of field
authentic expressions
```

---

### Color Treatment

Photos should match the site palette.

Allowed adjustments:

```
subtle color grading
slight desaturation
warm tone balance
```

Avoid:

```
heavy filters
extreme color overlays
overexposed highlights
```

---

# Background Graphics

Background graphics should remain **subtle**.

Allowed types:

```
soft gradients
abstract shapes
grain textures
blurred color fields
```

---

### Opacity Rule

Background elements should not exceed:

```
opacity: 20–40%
```

This prevents distraction.

---

# Diagrams and Visual Explanations

Used to explain systems, flows, or processes.

### Diagram Style

```
simple shapes
thin lines
minimal labels
consistent spacing
```

Avoid overly complex diagrams.

---

# Video

Video may be used for:

```
product demos
hero backgrounds
explainer clips
```

---

### Video Rules

Videos must:

```
autoplay muted
loop smoothly
be under 10 seconds when used as background
```

Avoid large video files that slow loading.

---

# Logos and Brand Marks

Logo strips may be used for credibility.

### Rules

Client logos should be:

```
monochrome
grayscale
uniform height
evenly spaced
```

Avoid full-color logo chaos.

---

# Image Placement Rules

Images should appear in predictable positions.

Common placements:

```
hero visual
feature illustration
product screenshot
testimonial photo
background accent
```

---

# Image Count Guidelines

Landing pages should generally include:

```
1 hero visual
3–6 supporting visuals
optional screenshots
optional testimonial photos
```

Too many images reduce clarity.

---

# Responsive Behavior

Images must adapt to screen size.

### Rules

```
maintain aspect ratio
avoid cropping key subject
scale fluidly
```

On mobile:

```
hero images may stack below text
```

---

# Anti-Patterns

The AI must avoid these combinations:

```
3D icons + flat illustrations
photography + cartoon drawings
multiple illustration styles
stock photos with watermarks
low-resolution screenshots
```

These patterns create **visual incoherence**.

---

# Media Selection Logic for AI

When choosing media:

```
1 determine site style (photographic or illustrative)
2 select consistent visual type
3 ensure composition fits layout
4 maintain spacing and alignment
5 apply minimal styling
```

---

If you're building a **serious AI website generator**, the next file that becomes extremely powerful is:

**`anti_patterns.md`**

It prevents about **70% of ugly AI website outputs** before they even appear.
