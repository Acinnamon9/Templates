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
- **Spatial typography.** Words placed in individual grid cells, one word per tile. Reading feels like discovery, not scanning.
- **Image fragmentation.** One image shown through multiple adjacent grid "windows" using `object-position` offsets. Never show a full image in one tile.
- **Scroll as narrative.** Each section pins to the viewport, choreographs elements in, holds, then choreographs them out. Sections are chapters.
- **Single accent against grayscale.** All imagery gets `grayscale(100%) contrast(1.15)`. One accent color pops.
- **Three-tier type system.** Impact headings (Montserrat 900, uppercase), body (Inter), mono labels (IBM Plex Mono). Three fonts, no more.
- **Grain overlay.** Fixed SVG noise at 4% opacity over everything.

## 2. Category Inference

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

Default to `creative-agency` if no match. Accent can be overridden by user's brand color.

## 3. Design Tokens

### Typography (load all three from Google Fonts CDN)

| Role | Font | Weight | Style |
|---|---|---|---|
| `.font-heading` | Montserrat | 800-900 | Uppercase, letter-spacing: -0.02em, line-height: 0.9 |
| `.font-body` | Inter | 400-600 | Normal case |
| `.font-mono-label` | IBM Plex Mono | 500 | Uppercase, 11px, letter-spacing: 0.08em |

### Color System (always these four)
```
bg-primary:     #F2F2F2   grid background
bg-secondary:   #111111   contact section
text-primary:   #111111
text-secondary: #6E6E6E
accent:         [from category table]
```

## 4. Grid System

### CSS — use gap approach for perfectly consistent 1px gridlines

```css
.grid-checkerboard {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(6, 1fr);
  width: 100vw;
  height: 100vh;
  background: rgba(17, 17, 17, 0.65); /* this IS the gridline color */
  gap: 1px;                            /* this creates the gridlines */
}
.grid-tile {
  position: relative;
  background: #F2F2F2;                 /* tiles cover the grid bg, gap reveals it */
  overflow: hidden;                    /* default: clip content */
  display: flex;
  align-items: center;
  justify-content: center;
}
.grid-tile.text-tile {
  overflow: visible;                   /* text tiles let words bleed into adjacent empty space */
  z-index: 1;                          /* sit above empty neighbors so overflow reads cleanly */
}
```

Why gap instead of borders: individual `border` on each tile creates double-width lines at intersections. The gap approach gives exactly 1px everywhere with zero inconsistency. Accent tiles set their own `background` to override the default.

**Text overflow philosophy:** words in tile typography are not trapped in boxes — they float in a field. A word slightly wider than its tile bleeds naturally into the adjacent empty tile, which the eye reads as intentional spatial typography. `overflow: visible` on text tiles enables this. Image and accent tiles keep `overflow: hidden` so fragments stay crisp.

### Responsive Breakpoints

- `@media (max-width: 1024px)`: 6 columns
- `@media (max-width: 768px)`: 4 columns, 8 rows. Hide nav links.

### Tile Types

| Type | Content |
|---|---|
| Empty | Nothing — whitespace is intentional |
| Text | `<div class="grid-tile text-tile"><span class="tile-text">` — one word, Montserrat 900, uppercase, `clamp(24px, 3.5vw, 48px)`, `white-space: nowrap`. Never break words mid-tile. |
| Image fragment | `<img class="image-slice" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:X% Y%;filter:grayscale(100%) contrast(1.15)">` |
| Accent | Background set to accent color. Subtle `animation: pulse-scale 2s ease-in-out infinite` |
| CTA | `<button class="cta-button">` — accent bg, mono font, shimmer hover via `::after` pseudo-element |
| Label | `<span class="font-mono-label">` — small uppercase text |

### Image Fragmentation

Same `src`, varied `object-position` across adjacent tiles. 2×2 block example:
- Top-left: `25% 25%` · Top-right: `75% 25%`
- Bottom-left: `25% 75%` · Bottom-right: `75% 75%`

Distribute evenly for larger blocks. Each tile is a different window into the same image.

### Placement Guidelines

- Image fragments: rows 2-4, offset from edges. Never a full row.
- Text tiles: scattered, one word per tile. Near-adjacent is fine.
- Accent tiles: 2-3 per section, punctuating near image blocks or edges.
- **Empty tiles: at least 30% per section.** Density kills it.
- CTAs: bottom-right quadrant. Never top row.

## 5. Animation — Vocabulary and Creative Direction

Load GSAP from CDN:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
```

### The Creative Principle

**Every section should feel cinematically different from the ones before and after it.** The page earns its premium feel through surprise — when the next section enters differently than expected, the viewer leans forward.

This means: choose your moves deliberately. Two sections should not enter the same way. An exit should feel like a physical event, not a fade. The grid is full of individual elements — use that to your advantage.

### Pinned Section Pattern (all grid sections except Card Grid and Contact)

```js
gsap.timeline({
  scrollTrigger: { trigger: section, start: 'top top', end: '+=130%', pin: true, scrub: 0.6 }
})
```

The timeline covers scroll progress 0→1. Use positions 0–0.5 for enter choreography, 0.7–1.0 for exit.

### Vocabulary of Moves

These are your tools. Mix them. No two sections should use the same combination:

| Move | How | Character |
|---|---|---|
| **Scatter** | `stagger: { from: 'random' }`, tiles fly to random diagonal | Chaotic, energetic. Works for exits especially. |
| **Wipe reveal** | images: `fromTo clipPath 'inset(0 100% 0 0)' → 'inset(0 0% 0 0)'` | Cinematic, deliberate. Great for image entries. |
| **Scale zoom-out** | images: `fromTo scale: 1.25 → 1` while entering | Photographic, close-in feeling. |
| **Rotate entry** | elements: `fromTo rotate: -6 → 0` while sliding in | Tactile, physical. Use sparingly — once per page. |
| **Slide from edge** | `x: '-30vw' → 0` or `y: '35vh' → 0` | Clean directional momentum. Standard but effective. |
| **Scale pop** | accents: `fromTo scale: 0.6 → 1, ease: back.out(1.4)` | Punctuation. Use on accent tiles. |
| **Parallax offset** | different elements at different speeds: images at `stagger: 0.02`, text at `stagger: 0.04` | Creates depth in the flat grid. |

The page should feel like it was choreographed by someone who had opinions about each section individually.

### Hero Section — Special Architecture

The hero is the only section where the scroll timeline contains **exit only**. The entry is handled by the page-load animation.

**Why this matters:** if you put enter + exit in the scroll timeline, scrubbing backward to position 0 reverses the enter animation — making the hero invisible when you're at the top of the page. The page-load animation runs once and is not reversible.

```js
// 1. PAGE-LOAD animation (NOT scroll-driven, runs once)
document.addEventListener('DOMContentLoaded', () => {
  const heroLoadTl = gsap.timeline({ delay: 0.3 });
  heroLoadTl.fromTo(heroTiles, { scaleY: 0, opacity: 0 }, { scaleY: 1, opacity: 1, duration: 0.9, stagger: { amount: 0.6 } });
  heroLoadTl.fromTo(heroImages, { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: 0.7, stagger: 0.06 }, '-=0.5');
  heroLoadTl.fromTo(heroTextTiles, { scale: 0.85, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.6)', stagger: 0.05 }, '-=0.4');
});

// 2. SCROLL timeline — exit only, starting at progress 0.7
// Use fromTo so GSAP knows the visible "from" state and can reverse cleanly
const heroScrollTl = gsap.timeline({
  scrollTrigger: {
    trigger: heroSection, start: 'top top', end: '+=130%', pin: true, scrub: 0.6,
    onLeaveBack: () => {  // safety net: hard-reset if scroll goes above trigger
      gsap.set([heroImages, heroTextTiles, heroAccentTiles], { opacity: 1, x: 0, y: 0, scale: 1 });
    }
  }
});

// The hero exit is yours to choreograph — use the scatter move for maximum impact
heroScrollTl.fromTo(heroTiles,
  { x: 0, y: 0, opacity: 1 },
  { x: '-18vw', y: '-18vh', opacity: 0, ease: 'power2.in', stagger: { amount: 0.2, from: 'random' } },
  0.7
);
```

The scatter exit (random stagger, diagonal) is the signature move of this design. It should feel like the page is being swept away.

### Non-Pinned Sections (Card Grid, Contact)

Use `toggleActions` — these sections scroll normally:

```js
gsap.fromTo(element, { y: '8vh', opacity: 0 }, {
  y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
  scrollTrigger: { trigger: element, start: 'top 80%', toggleActions: 'play none none reverse' }
});

// Cards: stagger each individually
cards.forEach((card, i) => {
  gsap.fromTo(card, { y: '10vh', opacity: 0 }, {
    y: 0, opacity: 1, duration: 0.7, delay: i * 0.08, ease: 'power2.out',
    scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none reverse' }
  });
});
```

### Global Snap — Target Pinned Range Centers

Snap must target the CENTER of pinned ranges — not the start. At the start, elements are invisible (animation hasn't begun). A snap to start creates a loop where the user can never see the content.

```js
const setupSnap = () => {
  const pinned = ScrollTrigger.getAll().filter(st => st.vars.pin).sort((a, b) => a.start - b.start);
  const maxScroll = ScrollTrigger.maxScroll(window);
  if (!maxScroll || pinned.length === 0) return;
  const pinnedRanges = pinned.map(st => ({
    start: st.start / maxScroll,
    end: (st.end ?? st.start) / maxScroll,
    center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
  }));
  ScrollTrigger.create({
    snap: {
      snapTo: (value) => {
        const inPinned = pinnedRanges.some(r => value >= r.start - 0.02 && value <= r.end + 0.02);
        if (!inPinned) return value;
        return pinnedRanges.reduce((closest, r) =>
          Math.abs(r.center - value) < Math.abs(closest - value) ? r.center : closest,
          pinnedRanges[0]?.center ?? 0
        );
      },
      duration: { min: 0.15, max: 0.35 }, delay: 0, ease: 'power2.out',
    }
  });
};
setTimeout(setupSnap, 500);
```

## 6. Section Types

Generate 5-7 sections. Always include Hero and Contact.

| Section | Grid Content | Scroll Behavior |
|---|---|---|
| **Hero** | Fragment `hero_1` + scatter brand phrase (3-5 words) + CTA + mono label | Page-load entry. Scroll timeline = exit only. |
| **Manifesto** | Fragment `lifestyle` + 6-10 word phrase across tiles | Pin + enter + exit (your choreography choice) |
| **Spotlight** | Fragment `product_1` + `hero_2` + 5-8 word tagline | Pin + enter + exit |
| **Texture** | Fragment `detail` + `product_2` + 4-6 word sensory phrase | Pin + enter + exit |
| **Card Grid** | 3-6 cards, responsive grid (NOT checkerboard). See structure below. | Normal scroll, staggered reveal |
| **Statement** | Fragment `hero_2` + `lifestyle` + closing phrase | Pin + enter + exit |
| **Contact** | Dark bg. See structure below. | Normal scroll, fade-in |

### Card Structure

```html
<div style="display:grid; grid-template-columns:repeat(3,1fr); background:rgba(17,17,17,0.65); gap:1px; max-width:1200px; margin:0 auto;">
  <div style="background:#F2F2F2; display:flex; flex-direction:column;">
    <img src="..." style="width:100%; height:280px; object-fit:cover; filter:grayscale(100%) contrast(1.15);">
    <div style="padding:24px; display:flex; flex-direction:column; gap:12px; flex:1;">
      <span class="font-mono-label" style="color:[ACCENT];">Label</span>
      <h3 class="font-heading" style="font-size:20px;">TITLE</h3>
      <p class="font-body" style="color:#6E6E6E; font-size:14px;">Description.</p>
      <button class="cta-button" style="margin-top:auto; width:100%;">Learn More</button>
    </div>
  </div>
</div>
```

Note: same gap + background approach as the grid — consistent 1px lines.

### Contact Structure

```html
<section id="contactSection" class="relative bg-[#111111] z-[70] py-20 min-h-[60vh]">
  <div class="max-w-7xl mx-auto px-8 flex flex-col" style="min-height:60vh;">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <!-- Left: 3 link tiles (brand-relevant: Stockists/Press/About etc.) -->
      <!-- Center: form block — big heading + email form -->
      <!-- Right: 3 social tiles (IG/TK/X etc.) -->
    </div>
    <!-- Footer: mt-auto pushes it to bottom. NEVER position:absolute -->
    <div class="mt-auto pt-8 border-t border-white/10 flex justify-between">
      <span class="font-mono-label text-white/40">© 2026 BRAND</span>
      <span class="font-mono-label text-white/40">TAGLINE</span>
    </div>
  </div>
</section>
```

### Section Selection

- **Product brands** (fashion, watches, spirits, automotive): Hero + Manifesto + Spotlight + Texture + Cards + Statement + Contact
- **Service/coaching** (coaching, agency, dining): Hero + Manifesto + Spotlight + Cards + Contact
- **Property/event** (real estate, launch): Hero + Spotlight + Texture + Cards + Statement + Contact
- **Tech**: Hero + Manifesto + Spotlight + Cards + Contact
- **Creative/art**: Hero + Manifesto + Cards + Statement + Contact

## 7. Image Library

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

## 8. Copy Generation

Manifesto tone. Not sales. Uppercase. No corporate language.

### Word Length Rule

Spatial typography words (one per tile) must be **6 characters or fewer**.
- Safe: DARE, TASTE, FORGE, CRAFT, BUILT, BOLD, OWN, FEEL, LIFE, RISE, EDGE
- Unsafe: ALTITUDE (8), SKYLINE (7), ORDINARY (8) — replace with synonyms

### Copy Slots

| Slot | Format |
|---|---|
| Hero phrase | 3-5 words, one per tile |
| Manifesto phrase | 6-10 words across tiles |
| Section tagline | One punchy sentence, mono font |
| CTA buttons | 2-4 words, action |
| Mono labels | 2-4 words, descriptive |

Voice: speak TO the audience, not ABOUT the product. Tension and contrast ("too short for bland" — brevity against boldness). Periods add weight. Fragments are fine.

## 9. Form Integration

```html
<form onsubmit="event.preventDefault(); fetch('{{FORM_ENDPOINT}}', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({email:this.querySelector('input[type=email]').value, source:'funnel-page'})}).then(()=>this.querySelector('button').textContent='Subscribed').catch(()=>this.querySelector('button').textContent='Try Again')" class="flex flex-col gap-4">
  <input type="email" placeholder="YOUR EMAIL" required style="background:transparent; border:1px solid rgba(255,255,255,0.3); padding:12px 16px; color:white; font-family:'IBM Plex Mono',monospace; font-size:13px;">
  <button type="submit" class="cta-button w-full">Subscribe</button>
</form>
```

## 10. Output Checklist

Before outputting, verify:

- [ ] Grid uses `background: rgba(17,17,17,0.65)` + `gap: 1px` — NOT individual tile borders
- [ ] All 48 tiles present per grid section (8×6)
- [ ] 30%+ empty tiles per section
- [ ] All images have `grayscale(100%) contrast(1.15)` filter
- [ ] Image fragments use same `src` with varied `object-position`
- [ ] Grain overlay present and fixed
- [ ] Nav uses `mix-blend-mode: difference`
- [ ] Hero: page-load animation only for entry. Scroll timeline starts at visible state, exits only.
- [ ] Hero scroll timeline uses `fromTo` (not `.to`) so scrub reversal works
- [ ] Hero has `onLeaveBack` safety reset
- [ ] Each non-hero pinned section uses a different enter move from the vocabulary
- [ ] Global snap targets pinned range centers, initialized with `setTimeout(setupSnap, 500)`
- [ ] Card Grid and Contact use `toggleActions: 'play none none reverse'`
- [ ] Contact section: `z-[70]`, footer uses `mt-auto` (never `position:absolute`)
- [ ] All nav `href` values match section `id` attributes
- [ ] Card buttons at bottom via `margin-top: auto`
- [ ] All spatial typography words ≤ 6 characters (prefer shorter — words bleed elegantly, but very long words look broken)
- [ ] Text tiles use `.text-tile` class with `overflow: visible` and `z-index: 1`
- [ ] Text tiles use `white-space: nowrap` — never `word-break: break-all`
- [ ] Image and accent tiles keep `overflow: hidden`
- [ ] Form uses `{{FORM_ENDPOINT}}` placeholder
- [ ] Title tag includes brand name
- [ ] Copy is uppercase, manifesto-style
