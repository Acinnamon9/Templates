---
name: aura-heritage-funnel
description: Generates ultra-premium "Institutional Elite Stewardship" funnels featuring a rigid 4x4 bento hero grid, fixed Fiduciary typography (Editor's Note & Inter), and structured 3-step roadmaps. Perfect for high-end B2B, legacy wealth, luxury real estate, biohacking, and sovereign executive coaching. Produces a single standalone HTML file. Trigger this skill when the user describes a high-ticket business or service that requires an atmosphere of absolute authority, permanence, and luxury.
disable-model-invocation: true
argument-hint: [business description]
---

# Aura Heritage Template Generator

You generate a single standalone HTML file that conveys absolute authority and institutional permanence. This design is characterized by **rigid 4x4 image grids, asymmetric white space, muted sophisticated palettes, and hyper-confident "fiduciary" copywriting.**

Given a business description, you infer the category, lock in the exact CSS tokens assigned to that category, compose the sections exactly as blueprinted below, and output deployable HTML. 

## 1. Design Philosophy — The Non-Negotiables

These rules define the "Aura Heritage" aesthetic. **You must follow them exactly with no creative deviation.**
- **The Hero IS a 4x4 Bento Grid.** A precise CSS Grid measuring 4 columns by 4 rows. It contains empty tiles, solid color pseudo-tiles, and exactly 5 image tiles that scale by `1.05` on hover.
- **Micro-interactions only.** No scroll-jacking. No massive GSAP timelines. The only animations should be hover states on buttons and images. This conveys stable authority.
- **Two Fiduciary Fonts.** `'Editor\'s Note'` (serif) for display/H1s, and `'Inter'` for body/UI. Nothing else.
- **Institutional Copywriting.** You do not write "sales copy." You write like an elite strategist speaking to a sovereign entity. Use words like *Governance, Attendance, Stewardship, Architecture, Legacy, Capital.*

## 2. Category & Theme Matrix

Based on the prompt, rigidly select ONE of these four themes. Inject these exact `:root` variables.

### Theme 1: Wealth & Heritage (Default)
*Triggers: Finance, wealth, legal, consulting, heritage brands, family office.*
```css
:root {
  --black: #101E2C; /* Deep Navy */
  --hotshot: #D4AF37; /* Burnished Gold */
  --hotshot-10: #FDF9EA; /* Pale Gold Tint */
  --pearl: #F5F4F3; /* Bone White */
  --white: #FFFFFF;
  --mdy-light: #F4E8D7; /* Warm Foundation */
}
```

### Theme 2: Biological Capital
*Triggers: Biohacking, longevity clinic, health tech, performance protocols.*
```css
:root {
  --black: #0F2A1D; /* Deep Forest Green */
  --hotshot: #4A90E2; /* Sharp Blue */
  --hotshot-10: #EEF4FA; /* Blue Tint */
  --pearl: #F4F6F5; /* Stark White/Gray */
  --white: #FFFFFF;
  --mdy-light: #5A2A82; /* Deep Violet */
}
```

### Theme 3: Generational Real Estate
*Triggers: Real estate, property development, architecture, physical assets, estates.*
```css
:root {
  --black: #111111; /* Brutalist Black */
  --hotshot: #555555; /* Concrete Gray */
  --hotshot-10: #F0F0F0; /* Pale Gray */
  --pearl: #F5F4F3;
  --white: #FFFFFF;
  --mdy-light: #E0E0E0; /* Foundation Gray */
}
```

### Theme 4: Sovereign Mindset
*Triggers: Executive coaching, founder mentorship, high-performance psychology.*
```css
:root {
  --black: #050505; /* Pure Black */
  --hotshot: #E63946; /* Aggressive Red */
  --hotshot-10: #FDEBEB; /* Red Tint */
  --pearl: #141414; /* Dark Interface (Inverted) */
  --white: #FFFFFF;
  --mdy-light: #331A1C; /* Dark Blood Red */
}
```

*(Note: If using Theme 4, ensure text on `--pearl` backgrounds is set to `var(--white)`).*

## 3. Mandatory CSS Blueprints

You must include the following precise CSS configurations in the `<head>` `<style>` block.

### Global & Typography
```css
:root {
  --gray-light: #D4D6D8;
  --gray-dark: #828282;
  --button-corner: 0px; 
  --font-display: 'Editor\'s Note', serif;
  --font-main: 'Inter', sans-serif;
  --compact: 1.1;
}
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: var(--font-main); color: var(--black); background: var(--pearl); line-height: 1.6; }
h1, h2, h3, .brand-font { font-family: var(--font-display); font-weight: 400; line-height: var(--compact); color: var(--black); }
/* Inverted utility for dark theme overrides */
.dark-section { background: var(--black); color: var(--white); }
.dark-section h1, .dark-section h2, .dark-section h3 { color: var(--hotshot); }
```

### The 4x4 Bento Grid (CRITICAL)
This is the core visual identifier of this template. **Do not alter these grid coordinates or ratios.**
```css
.aura-hero-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 8px;
    width: 100%;
    aspect-ratio: 1/1;
    background: transparent;
}
.aura-box {
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.aura-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}
.aura-box:hover img {
    transform: scale(1.05); /* The signature hover effect */
}
/* Responsive constraints */
@media (max-width: 991px) {
  .aura-hero-grid { max-height: 600px; aspect-ratio: auto; }
}
```

### Components (Buttons & Layout)
```css
.container { max-width: 1200px; margin: 0 auto; padding: 0 5%; }
.section { padding: 100px 0; }
.bg-white { background-color: var(--white); }
.bg-pearl { background-color: var(--pearl); }

.button {
    display: inline-block;
    padding: 16px 32px;
    background-color: var(--black);
    color: var(--white);
    text-decoration: none;
    font-size: 13px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 600;
    border: 1px solid var(--black);
    transition: all 0.3s ease;
}
.button:hover { background-color: transparent; color: var(--black); }
.button.outline { background-color: transparent; color: var(--black); }
.button.outline:hover { background-color: var(--black); color: var(--white); }
.button.gold { background-color: var(--hotshot); color: var(--white); border-color: var(--hotshot); }
.button.gold:hover { background-color: var(--black); border-color: var(--black); }
```

## 4. Architectural HTML Elements

You must assemble the HTML structure exactly as follows.

### A. The Alert Bar & Navbar
A tiny bar at the very top to create urgency, followed by a minimal flexbox navbar.
```html
<div style="background: var(--hotshot); color: var(--white); text-align: center; padding: 12px; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; font-weight: 700;">
    ADVISORY: [SCARCITY MESSAGE - e.g. ONLY 7 SPOTS REMAINING].
</div>
<nav style="padding: 30px 5%; display: flex; justify-content: space-between; align-items: center; background: var(--pearl); border-bottom: 1px solid rgba(0,0,0,0.05);">
    <div style="font-family: var(--font-display); font-size: 24px; letter-spacing: 1px;">BRAND NAME</div>
    <div style="display: flex; gap: 40px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px;">
        <a href="#" style="text-decoration: none; color: inherit;">Link 1</a>
        <a href="#" style="text-decoration: none; color: inherit;">Link 2</a>
        <a href="#" style="text-decoration: none; color: var(--hotshot);">Portal</a>
    </div>
</nav>
```

### B. The 4x4 Hero Section (CRITICAL STRUCTURE)
Two columns. Left is text (`width:45%`), Right is the grid (`width:50%`). 
**You must use this exact inner layout for `.aura-hero-grid`**. The structure uses 9 `.aura-box` divs (4 ghost boxes acting as negative space, and 5 images assigned specifically by `grid-area`).
```html
<header class="section bg-white">
  <div class="container" style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 40px;">
    <div style="flex: 1; min-width: 300px; max-width: 500px;">
      <div style="text-transform: uppercase; letter-spacing: 3px; font-size: 12px; font-weight: 600; color: var(--hotshot); margin-bottom: 20px;">[Micro-Category Hook]</div>
      <h1 style="font-size: clamp(3rem, 5vw, 4.5rem); margin-bottom: 30px;">[Punchy H1].</h1>
      <p style="font-size: 18px; margin-bottom: 40px; color: var(--gray-dark);">[Fiduciary paragraph outlining stewardship of the asset].</p>
      <div style="display: flex; gap: 20px; flex-wrap: wrap;">
        <a href="#" class="button">Primary CTA</a>
        <a href="#" class="button outline">Secondary</a>
      </div>
    </div>
    
    <!-- THE MANDATORY GRID -->
    <div style="flex: 1; min-width: 300px; max-width: 550px;">
      <div class="aura-hero-grid">
        <div class="aura-box" style="grid-area: 1 / 2; background: var(--pearl);"></div>
        <div class="aura-box" style="grid-area: 1 / 4 / 3 / 5;"><img src="IMAGE_1_VERTICAL" alt="Vertical Asset"/></div>
        <div class="aura-box" style="grid-area: 2 / 1;"><img src="IMAGE_2_SQUARE" alt="Square Asset"/></div>
        <div class="aura-box" style="grid-area: 2 / 2; background: var(--hotshot-10);"></div>
        <div class="aura-box" style="grid-area: 3 / 1; background: var(--mdy-light);"></div>
        <div class="aura-box" style="grid-area: 3 / 2 / 5 / 4;"><img src="IMAGE_3_LARGE" alt="Large Spotlight"/></div>
        <div class="aura-box" style="grid-area: 3 / 4; background: var(--pearl);"></div>
        <div class="aura-box" style="grid-area: 4 / 1; background: var(--black);"></div>
        <div class="aura-box" style="grid-area: 4 / 4;"><img src="IMAGE_4_SQUARE" alt="Square Asset"/></div>
      </div>
    </div>
  </div>
</header>
```

### C. The Manifesto
A massive, centered, simple text block that declares a truth.
```html
<section class="section bg-pearl text-center" style="padding: 120px 5%; text-align: center;">
    <h2 style="font-size: clamp(2rem, 4vw, 3.5rem); max-width: 900px; margin: 0 auto 30px auto; line-height: 1.2;">
        You deserve the [integrity/resilience] of a sovereign [entity/state].
    </h2>
    <p style="max-width: 800px; margin: 0 auto; font-size: 18px; color: var(--gray-dark);">[Two sentences about why the industry fails, followed by]: We build the architecture of attendance for your [asset].</p>
</section>
```

### D. The Sticky 3-Step Process
A layout where the left column (H2 + Text + CTA) sticks while the right column (numbered list) scrolls.
```html
<section class="section bg-white">
  <div class="container" style="display: flex; flex-wrap: wrap; gap: 60px;">
    <!-- Sticky Sidebar -->
    <div style="flex: 1; min-width: 300px;">
      <div style="position: sticky; top: 120px;">
        <h2 style="font-size: 60px; margin-bottom: 30px;">3 Steps to [Outcome]</h2>
        <p style="margin-bottom: 40px;">[Brief explanation of the protocol].</p>
        <a href="#" class="button">Access Protocol</a>
      </div>
    </div>
    <!-- Scrolling Steps -->
    <div style="flex: 1.5; min-width: 300px; padding-top: 20px;">
      <!-- Step 1 -->
      <div style="display: flex; gap: 30px; margin-bottom: 80px;">
        <div style="font-family: var(--font-display); font-size: 32px; border: 1px solid var(--black); border-radius: 50%; min-width: 60px; height: 60px; display: flex; align-items: center; justify-content: center;">1</div>
        <div><h3 style="font-size: 28px; margin-bottom: 15px;">[Step Title].</h3><p>[Description].</p></div>
      </div>
      <!-- Step 2 -->
      <div style="display: flex; gap: 30px; margin-bottom: 80px;">
        <div style="font-family: var(--font-display); font-size: 32px; border: 1px solid var(--black); border-radius: 50%; min-width: 60px; height: 60px; display: flex; align-items: center; justify-content: center;">2</div>
        <div><h3 style="font-size: 28px; margin-bottom: 15px;">[Step Title].</h3><p>[Description].</p></div>
      </div>
      <!-- Step 3 -->
      <div style="display: flex; gap: 30px;">
        <div style="font-family: var(--font-display); font-size: 32px; border: 1px solid var(--black); border-radius: 50%; min-width: 60px; height: 60px; display: flex; align-items: center; justify-content: center;">3</div>
        <div><h3 style="font-size: 28px; margin-bottom: 15px;">[Step Title].</h3><p>[Description].</p></div>
      </div>
    </div>
  </div>
</section>
```

### E. Immersive Final CTA
A massive dark block. Use the `.dark-section` class logic overriding text color.
```html
<section class="section dark-section" style="text-align: center; background-color: var(--black); color: var(--white); padding: 140px 5%;">
  <h2 style="font-size: clamp(2.5rem, 5vw, 4.5rem); margin-bottom: 40px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Join our [briefing/advisory] to take control of your [asset].
  </h2>
  <a href="#" class="button gold">Apply for Access</a>
</section>
```

## 5. Image Assets 

You MUST use EXACTLY these URLs for images based on the chosen theme. DO NOT use Unsplash.

**Theme 1: Wealth & Heritage**
- Vertical (Grid 1): `https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439beeba48751402641db.png`
- Square/Large (Grid 2, 3, 4): `https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439befb38cabb229231e2.png`, `https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b43b27eba4875b6d267ef7.png`

**Theme 2: Biohacking & Health**
- Vertical: `https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439be070c58e28e626115.png`
- Square/Large: `https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439bebfc81f54f4f24807.png`

**Theme 3: Real Estate**
- Vertical: `https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439bed548179ed021687d.png`
- Square/Large: `https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439befc5128f11e732220.png`

**Theme 4: Mindset Mastery**
- Vertical: `https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439be070c582337626116.png`
- Square/Large: (Re-use Vertical or Estate assets for high contrast).

## 6. Output Checklist

Before generating the final HTML, verify:
- [ ] Only ONE HTML file is generated inside a markdown code block.
- [ ] The font imports for 'Editor's Note' and 'Inter' are included (or fallback to 'Georgia' / 'Helvetica' if standard CDNs fail).
- [ ] The CSS :root EXACTLY matches the chosen thematic palette.
- [ ] The Hero contains the `.aura-hero-grid` with all 9 div slots assigned properly via `grid-area`. 
- [ ] Images have `transition: transform 0.5s ease;` and `.aura-box:hover img { transform: scale(1.05); }`.
- [ ] The Copywriting tone is austere, mature, and authoritative using "Governance/Architecture" vernacular.
- [ ] The 3-Step process layout uses CSS Sticky on the left sidebar.
- [ ] Only the specified `filesafe.space` image links are used.

Output the final HTML code block.
