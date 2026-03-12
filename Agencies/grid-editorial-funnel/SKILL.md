---
name: grid-editorial-funnel
description: Generates premium grid-editorial funnel pages with scroll-driven GSAP animations, checkerboard grid layouts, and spatial typography. Use when building landing pages, product showcases, brand pages, high-ticket funnels, or any premium single-page site. Produces a standalone HTML file (Tailwind CDN + GSAP CDN) ready for Vercel deployment. Trigger this skill when the user describes a business, product, or service and wants a visually striking funnel page.
disable-model-invocation: true
argument-hint: [business-description]
---

# Grid-Editorial Funnel Generator

You generate a single standalone HTML file that looks and feels like a premium editorial magazine brought to life on the web. The page uses a checkerboard grid, fragmented images, scroll-pinned animations, and spatial typography to create desire — not understanding.

Given a business description, you infer the category, choose design tokens, write manifesto-style copy, compose sections, and output complete deployable HTML.

## 1. Design Philosophy — The Non-Negotiables

These rules define the style. Every page must have ALL of them:

- **The grid IS the design.** An 8x6 checkerboard with visible 1px borders. Empty tiles are intentional. The grid creates the texture.
- **Spatial typography.** Words are placed in individual grid cells, one word per tile. Reading feels like discovery, not scanning. Hero phrases are 3-5 words scattered across the grid.
- **Image fragmentation.** One image shown through multiple adjacent grid "windows" using `object-position` offsets. The viewer's brain stitches it together. Never show a full image in one tile.
- **Scroll as narrative.** Each section pins to the viewport, choreographs elements in, holds, then choreographs them out before the next section reveals. Sections are chapters.
- **Single accent against grayscale.** All imagery gets `grayscale(100%) contrast(1.15)`. One accent color pops against the neutral grid. That restraint creates impact.
- **Three-tier type system.** Impact headings (bold 900, uppercase), body text (clean sans), mono labels (small, uppercase, letterspaced). Three fonts, no more.
- **Grain overlay.** A fixed SVG noise texture at 4% opacity over everything. Adds analog warmth.

## 2. Category Inference

Read the business description and match to the closest category. This determines default accent color, copy voice, and section selection.

| Category | Trigger Keywords | Default Accent | Copy Voice |
|---|---|---|---|
| fashion-beauty | beauty, cosmetic, skincare, fashion, clothing, apparel, style | `#FF2D8F` | Provocative, daring |
| watches-jewelry | watch, jewelry, ring, necklace, bracelet, accessory, luxury goods | `#C9A961` | Refined, timeless |
| spirits-fragrance | wine, whiskey, spirits, fragrance, perfume, cologne, coffee, tea, artisan food | `#C45D2A` | Sensory, evocative |
| high-ticket-coaching | coach, mentor, program, course, consulting, transformation, mastermind | `#1A1A1A` | Authoritative, direct |
| premium-fitness | fitness, gym, workout, training, body, athletic, wellness, supplement | `#00E5FF` | Intense, commanding |
| creative-agency | agency, studio, design, branding, creative, portfolio, motion | `#5B21B6` | Confident, minimal |
| architecture-interiors | architecture, interior, building, space, renovation, home design | `#2D3436` | Measured, spatial |
| luxury-real-estate | real estate, property, penthouse, villa, estate, listing | `#0D1B2A` | Sophisticated, aspirational |
| event-launch | event, launch, reveal, conference, exhibition, drop, release | `#FF4500` | Urgent, electric |
| luxury-automotive | car, automotive, vehicle, drive, motor, supercar | `#B91C1C` | Precise, powerful |
| premium-saas | saas, software, app, platform, tool, dashboard, startup, tech | `#6366F1` | Clean, forward |
| upscale-dining | restaurant, dining, chef, cuisine, menu, food, bar, bistro | `#8B0000` | Rich, intimate |
| photography-art | photography, art, gallery, exhibition, artist, studio, film | `#374151` | Contemplative, raw |

If no category matches well, default to `creative-agency` tokens. The accent color can be overridden if the user specifies brand colors.

## 3. Design Tokens

### Typography (Google Fonts CDN — always load these three)

| Role | Font | Weight | Style |
|---|---|---|---|
| Heading (`.font-heading`) | Montserrat | 800-900 | Uppercase, letter-spacing: -0.02em, line-height: 0.9 |
| Body (`.font-body`) | Inter | 400-600 | Normal case, clean |
| Mono label (`.font-mono-label`) | IBM Plex Mono | 500 | Uppercase, 11px, letter-spacing: 0.08em |

### Color System

Every page uses exactly 4 colors:
```
bg-primary:    #F2F2F2  (light grey, the grid background)
bg-secondary:  #111111  (dark, for contact section)
text-primary:  #111111
text-secondary: #6E6E6E
accent:        [from category table above]
```

## 4. Grid System

### Base Grid CSS

```css
.grid-checkerboard {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(6, 1fr);
  width: 100vw;
  height: 100vh;
}
.grid-tile {
  position: relative;
  border: 1px solid rgba(17, 17, 17, 0.65);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s ease;
}
.grid-tile:hover { border-color: rgba(17, 17, 17, 0.9); }
```

### Responsive Breakpoints

- `@media (max-width: 1024px)`: 6 columns
- `@media (max-width: 768px)`: 4 columns, 8 rows. Hide nav links.

### Tile Types

| Type | Class | Content |
|---|---|---|
| Empty | `.grid-tile` | Nothing — whitespace is intentional |
| Text | `.grid-tile` + child `<span class="tile-text">` | One word, Montserrat 900, uppercase, `clamp(28px, 3.5vw, 56px)` |
| Image fragment | `.grid-tile.relative` + child `<img class="image-slice absolute inset-0">` | `object-fit:cover; object-position: X% Y%; filter: grayscale(100%) contrast(1.15)` |
| Accent | `.grid-tile-accent` | Solid accent color fill + subtle pulse animation |
| CTA | `.grid-tile` + child `<button class="cta-button">` | Accent bg, mono font, shimmer hover |
| Label | `.grid-tile` + child `<span class="font-mono-label">` | Small uppercase text, secondary color |

### Image Fragmentation Rule

To fragment one image across N adjacent tiles, use the SAME `src` but vary `object-position`. For a 2x2 block of tiles showing one image:
- Top-left: `object-position: 25% 25%`
- Top-right: `object-position: 75% 25%`
- Bottom-left: `object-position: 25% 75%`
- Bottom-right: `object-position: 75% 75%`

For a 2x3 block, distribute positions evenly across the grid area. The key: each tile shows a different "window" into the same image.

### Placement Guidelines

- Image fragments: place in rows 2-4, offset from edges. Never fill the entire row.
- Text tiles: scatter the phrase across adjacent or near-adjacent cells. One word per tile.
- Accent tiles: 2-3 per section, placed to punctuate — near image blocks or at grid edges.
- Empty tiles: at least 30% of tiles should be empty. Density kills the design.
- CTAs: bottom-right quadrant of the grid. Never top row.

## 5. Animation Vocabulary (GSAP + ScrollTrigger)

Load from CDN:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
```

### Section Pin Pattern

Every grid section (except card grid and contact) uses this ScrollTrigger pattern:
```js
gsap.timeline({
  scrollTrigger: {
    trigger: section,
    start: 'top top',
    end: '+=130%',
    pin: true,
    scrub: 0.6
  }
})
```

### Enter Choreography (timeline position 0 to 0.5)

| Element | From | To | Stagger | Ease |
|---|---|---|---|---|
| Image tiles | `x:'-18vw', opacity:0` or `y:'35vh', opacity:0` | `x:0, y:0, opacity:1` | 0.02-0.03 | `power2.out` |
| Text tiles | `y:'12vh', opacity:0` | `y:0, opacity:1` | 0.02 | `power2.out` |
| Accent tiles | `scale:0.6, opacity:0` | `scale:1, opacity:1` | 0.05 | `back.out(1.4)` |

### Exit Choreography (timeline position 0.7 to 1.0)

| Element | From | To | Ease |
|---|---|---|---|
| All tiles | `x:0, opacity:1` | `x:'-18vw'` or `y:'-18vh', opacity:0` | `power2.in` |
| Accent tiles | `scale:1, opacity:1` | `scale:1.15, opacity:0` | `power2.in` |

### Hero Load Animation (non-scroll, plays on page load)

```js
const heroLoadTl = gsap.timeline({ delay: 0.3 });
heroLoadTl.fromTo(tiles, {scaleY:0, opacity:0}, {scaleY:1, opacity:1, duration:0.9, stagger:{amount:0.6}});
heroLoadTl.fromTo(images, {clipPath:'inset(100% 0 0 0)'}, {clipPath:'inset(0% 0 0 0)', duration:0.7, stagger:0.06}, "-=0.5");
heroLoadTl.fromTo(textTiles, {scale:0.85, opacity:0}, {scale:1, opacity:1, duration:0.5, ease:'back.out(1.6)', stagger:0.05}, "-=0.4");
```

### Global Snap (optional, add after all ScrollTriggers)

After all sections are set up, create a global snap that snaps to the center of each pinned section. This prevents the user from landing between sections.

## 6. Section Types

Generate 5-7 sections per page. Always include Hero and Contact. Select others based on business context.

| Section | When to Use | Grid Content | Scroll Behavior |
|---|---|---|---|
| **Hero** | Always first | Fragment `hero_1` across 4-6 tiles + scatter brand phrase (3-5 words) + CTA button + mono label ("New Season Drop" equivalent) | Pin + load animation + scroll exit |
| **Manifesto** | Brand story, origin, values | Fragment `lifestyle` image + phrase like "IT'S YOUR [THING] AND YOUR LIFE" (6-10 words across tiles) | Pin + enter/exit |
| **Spotlight** | Product/service showcase | Fragment `product_1` + `hero_2` images + tagline like "THE ICON [PRODUCT] THAT NEVER SLEEPS" | Pin + enter/exit |
| **Texture** | Sensory/quality emphasis | Fragment `detail` + `product_2` images + "FEEL THE [QUALITY]" phrase | Pin + enter/exit |
| **Card Grid** | Multiple offerings/variants | 3-6 cards in responsive grid (NOT checkerboard). Each card: image + name + price/description + CTA. Use `card_1` through `card_4` images. | Normal scroll, staggered reveal |
| **Statement** | Closing impact | Fragment `hero_2` + `lifestyle` images + memorable closing phrase | Pin + enter/exit |
| **Contact** | Always last | Dark bg (`#111111`). Three columns: link tiles (Stockists/Press/Care equivalents), email form, social tiles. Footer with copyright. | Normal scroll, fade-in |

### Section Selection by Category

- **Product brands** (fashion, watches, spirits, automotive): Hero + Manifesto + Spotlight + Texture + Card Grid + Statement + Contact
- **Service businesses** (coaching, agency, dining): Hero + Manifesto + Spotlight + Card Grid + Contact
- **Property/event** (real estate, launch): Hero + Spotlight + Texture + Card Grid + Statement + Contact
- **Tech** (saas): Hero + Manifesto + Spotlight + Card Grid + Contact
- **Creative** (photography, art): Hero + Manifesto + Card Grid + Statement + Contact

## 7. Image Library

Default image set (use for all categories until category-specific libraries are added):

```
hero_1:    https://images.unsplash.com/photo-1613834926943-9e4ac2945744?q=80&w=870&auto=format&fit=crop
hero_2:    https://images.unsplash.com/photo-1552820755-733e038f86d5?q=80&w=870&auto=format&fit=crop
lifestyle: https://images.unsplash.com/photo-1522717425499-89d3198ccc74?q=80&w=1032&auto=format&fit=crop
product_1: https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=580&auto=format&fit=crop
product_2: https://images.unsplash.com/photo-1523884156331-22cc4f5df98d?q=80&w=874&auto=format&fit=crop
detail:    https://images.unsplash.com/photo-1763888450559-c1e93e238000?q=80&w=580&auto=format&fit=crop
card_1:    https://images.unsplash.com/photo-1522125123931-9304d91a42ee?q=80&w=582&auto=format&fit=crop
card_2:    https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=580&auto=format&fit=crop
card_3:    https://images.unsplash.com/photo-1622586757007-efda9475c347?q=80&w=870&auto=format&fit=crop
card_4:    https://images.unsplash.com/photo-1657771192840-7e3f6e827e58?q=80&w=925&auto=format&fit=crop
```

All images are rendered with `filter: grayscale(100%) contrast(1.15)` and `object-fit: cover`.

## 8. Copy Generation

The copy should feel like a brand manifesto, not a sales pitch. Short, punchy, uppercase.

### Copy Slots

| Slot | Format | Example (fashion) | Example (coaching) |
|---|---|---|---|
| Hero phrase | 3-5 words, one per tile | DARE TO WEAR | BUILT TO LEAD |
| Manifesto phrase | 6-10 words across tiles | IT'S YOUR LIPS AND YOUR LIFE | YOUR POTENTIAL IS NOT A CEILING |
| Spotlight tagline | 5-8 words across tiles | THE ICON SHADE THAT NEVER SLEEPS | THE PROGRAM THAT CHANGES EVERYTHING |
| Texture phrase | 4-6 words across tiles | FEEL THE COLOR OWN THE ROOM | FEEL THE SHIFT OWN THE DAY |
| Statement phrase | 5-8 words across tiles | LIFE IS TOO SHORT FOR NUDE LIPS | LIFE IS TOO SHORT FOR AVERAGE |
| CTA buttons | 2-4 words | Shop the Drop | Apply Now |
| Mono labels | 2-4 words, descriptive | New Season Drop | Limited Cohort |
| Section tagline | One sentence, mono font | Velvet matte. All day. No apologies. | 12 weeks. Total transformation. No excuses. |

### Voice Rules

- Always uppercase for tile text
- Manifesto tone: speak TO the audience, not ABOUT the product
- Use tension and contrast ("too short for nude lips" = tension between brevity and boldness)
- Never use corporate language (leverage, synergy, solutions)
- Short sentences. Fragments are fine. Periods add weight.

## 9. Form Integration

The contact section includes an email capture form. Wire it to a placeholder endpoint.

```html
<form class="flex flex-col gap-4" onsubmit="event.preventDefault(); fetch('{{FORM_ENDPOINT}}', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({email: this.querySelector('input[type=email]').value, source: 'funnel-page'})}).then(() => this.querySelector('button').textContent = 'Subscribed').catch(() => this.querySelector('button').textContent = 'Try Again')">
  <input type="email" placeholder="YOUR EMAIL" required class="bg-transparent border border-white/30 px-4 py-3 text-white font-mono text-sm focus:border-[ACCENT] focus:outline-none transition-colors">
  <button type="submit" class="cta-button w-full">Subscribe</button>
</form>
```

Replace `{{FORM_ENDPOINT}}` with the actual API endpoint at deploy time. Replace `[ACCENT]` with the category accent color.

## 10. Output Structure

Generate a single HTML file with this structure:

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Brand Name] - [Hero Phrase]</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>tailwind.config = { /* theme with category accent color, fonts */ }</script>
  <style type="text/tailwindcss">
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@800;900&family=IBM+Plex+Mono:wght@400;500&display=swap');
    /* Grid system CSS, tile styles, grain overlay, CTA button, nav, responsive */
  </style>
</head>
<body>
  <nav class="nav-fixed"> /* mix-blend-mode: difference */ </nav>
  <div class="grain-overlay"></div>
  <main>
    <!-- Each section: a .section-pinned containing a .grid-checkerboard with 48 .grid-tile children (8x6) -->
    <!-- Card Grid section: regular responsive grid, not checkerboard -->
    <!-- Contact section: dark bg, 3-column layout, form, footer -->
  </main>
  <script src="gsap CDN"></script>
  <script src="ScrollTrigger CDN"></script>
  <script>
    // Register plugin, build timelines per section, add global snap
  </script>
</body>
</html>
```

### Checklist Before Output

- [ ] All 48 tiles per grid section are present (8 columns x 6 rows)
- [ ] Image fragments use same src with different object-position values
- [ ] At least 30% empty tiles per section
- [ ] All images have `grayscale(100%) contrast(1.15)` filter
- [ ] Grain overlay is present and fixed
- [ ] Navigation uses `mix-blend-mode: difference` and white text
- [ ] Each pinned section has GSAP enter + exit choreography
- [ ] Hero has a non-scroll load animation
- [ ] Card grid section uses responsive grid, not checkerboard
- [ ] Contact section has dark background and form with `{{FORM_ENDPOINT}}`
- [ ] CTA buttons have accent background + shimmer hover effect
- [ ] Responsive breakpoints are set (6-col at 1024, 4-col at 768)
- [ ] Title tag includes brand name
- [ ] Copy is uppercase, manifesto-style, no corporate language
