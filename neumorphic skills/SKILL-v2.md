---
name: neumorphic-funnel
description: Generates premium neumorphic landing pages — soft extruded surfaces, dual-shadow depth, tactile buttons, GSAP scroll animations. Produces a single standalone HTML file (Tailwind CDN + GSAP CDN) ready for Vercel deployment. Trigger whenever a user describes a business, product, or service and wants a website, landing page, or funnel built. Also trigger for phrases like "make me a website", "build my landing page", "create a site for my business", "I need a landing page for...", or any business description followed by a request for a web presence. Assume aggressively — if business context is thin, invent plausible details.
argument-hint: [business description]
---

# Neumorphic Funnel Generator

You produce a single deployable HTML file. Design vocabulary: **soft gray base (#e6e9ef), dual-shadow neumorphic depth, tactile extruded cards and buttons, GSAP scroll reveals**. Given a business description, infer everything and produce all 12 sections. Never ask for clarification.

## TOKEN PROTOCOL

Generate S1–S8 at full fidelity. If approaching output limit, stub S9–S12 as:

```html
<!-- TODO: S9 - run /neumorphic-funnel again and say "expand S9" -->
<section style="padding:72px 0;background:#e6e9ef"><div style="max-width:1200px;margin:0 auto;padding:0 24px;text-align:center"><p style="color:#6b7280;font-family:Inter,sans-serif">Section pending — run /neumorphic-funnel again and say "expand S[N]"</p></div></section>
```

A complete skeleton beats a truncated masterpiece.

## CODE OUTPUT STYLE

Dense, minimal whitespace inside blocks. No explanatory comments. Humans will read the rendered page, not the source.

---

## 1. Category & Accent Inference

| Category | Keywords | Accent | Accent Dark |
|---|---|---|---|
| tech/saas | software, app, AI, platform, automation, SaaS, tool, API, bot | `#7c3aed` | `#6d28d9` |
| finance | finance, fintech, trading, investment, wealth, insurance, bank | `#0ea5e9` | `#0284c7` |
| health/wellness | health, medical, wellness, clinic, dental, doctor, therapy | `#10b981` | `#059669` |
| fitness | gym, fitness, training, athletic, supplement, workout | `#ef4444` | `#dc2626` |
| coaching | coach, mentor, course, mastermind, program, transformation | `#f59e0b` | `#d97706` |
| real-estate | property, real estate, homes, broker, listings, villa | `#3b82f6` | `#2563eb` |
| ecommerce | shop, store, brand, products, DTC, retail, dropship | `#f97316` | `#ea580c` |
| agency/creative | agency, creative, branding, studio, design, marketing | `#8b5cf6` | `#7c3aed` |
| restaurant/food | restaurant, dining, food, chef, cuisine, bar, café | `#dc2626` | `#b91c1c` |
| legal | law, attorney, legal, firm, litigation, compliance | `#64748b` | `#475569` |

Default if no match: tech/saas, accent `#7c3aed`.

---

## 2. Design System

### Core Color Variables (always these exact values)

```css
:root {
  --bg: #e6e9ef;           /* neumorphic base — NEVER pure white, NEVER dark */
  --bg-mid: #d1d5db;       /* slightly darker surface */
  --shadow-dark: #b8bcc2;  /* dark shadow direction */
  --shadow-light: #ffffff; /* light shadow direction */
  --accent: /* from table */;
  --accent-dark: /* from table */;
  --text-primary: #1f2937;
  --text-muted: #6b7280;
  --footer-bg: #1f2937;
}
body { background: var(--bg); color: var(--text-primary); }
```

### Neumorphic Surface Classes (define ALL of these)

The magic: same base color, two opposing shadows at 45° simulate a light source from top-left. Dark shadow goes bottom-right, bright highlight goes top-left.

```css
/* Raised: element pops out of the surface */
.neu-raised {
  background: linear-gradient(145deg, var(--bg), var(--bg-mid));
  box-shadow: 8px 8px 16px var(--shadow-dark), -8px -8px 16px var(--shadow-light);
  border-radius: 24px;
}
/* Small raised: for badges, pills, small buttons */
.neu-raised-sm {
  background: linear-gradient(145deg, var(--bg), var(--bg-mid));
  box-shadow: 4px 4px 8px var(--shadow-dark), -4px -4px 8px var(--shadow-light);
  border-radius: 12px;
}
/* Convex: raised + inner bevel — use on colored gradient buttons */
.neu-convex {
  box-shadow: 8px 8px 16px var(--shadow-dark), -8px -8px 16px var(--shadow-light),
              inset 1px 1px 2px rgba(255,255,255,0.4), inset -1px -1px 2px rgba(0,0,0,0.15);
}
/* Inset: pressed into the surface — use on inputs, pressed states, preview areas */
.neu-inset {
  background: linear-gradient(145deg, var(--bg-mid), var(--bg));
  box-shadow: inset 4px 4px 8px var(--shadow-dark), inset -4px -4px 8px var(--shadow-light);
  border-radius: 12px;
}
```

### Typography

```html
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

| Role | Font | Weight | Notes |
|---|---|---|---|
| Headings | Outfit | 800–900 | `letter-spacing: -0.02em; line-height: 1.1` |
| Body | Inter | 400–600 | `line-height: 1.6` |
| Labels/badges | Inter | 700 | `text-transform: uppercase; letter-spacing: 0.08em; font-size: 11px` |

### Button Patterns

```css
/* Primary CTA — gradient + convex shadow */
.btn-primary {
  background: linear-gradient(135deg, var(--accent), var(--accent-dark));
  box-shadow: 8px 8px 16px var(--shadow-dark), -8px -8px 16px var(--shadow-light),
              inset 1px 1px 2px rgba(255,255,255,0.4), inset -1px -1px 2px rgba(0,0,0,0.15);
  border-radius: 14px; padding: 14px 40px; color: white; border: none; cursor: pointer;
  font-family: 'Outfit', sans-serif; font-weight: 700; font-size: 16px;
  transition: all 0.15s ease;
}
.btn-primary:hover { transform: translateY(-2px); }
.btn-primary:active { transform: translateY(1px); box-shadow: inset 4px 4px 8px rgba(0,0,0,0.2), inset -2px -2px 4px rgba(255,255,255,0.1); }

/* Secondary — same shape, no color, just raised */
.btn-secondary {
  background: linear-gradient(145deg, var(--bg), var(--bg-mid));
  box-shadow: 6px 6px 12px var(--shadow-dark), -6px -6px 12px var(--shadow-light);
  border-radius: 14px; padding: 14px 40px; color: var(--text-primary); border: none; cursor: pointer;
  font-family: 'Outfit', sans-serif; font-weight: 700; font-size: 16px;
  transition: all 0.15s ease;
}
.btn-secondary:hover { transform: translateY(-2px); }
```

### Card Pattern

```css
.neu-card {
  background: linear-gradient(145deg, var(--bg), var(--bg-mid));
  box-shadow: 8px 8px 16px var(--shadow-dark), -8px -8px 16px var(--shadow-light);
  border-radius: 24px; padding: 32px;
  transition: transform 0.3s ease;
}
.neu-card:hover { transform: translateY(-4px); }
```

### Spacing

- Sections: `padding: 80px 0`
- Container: `max-width: 1200px; margin: 0 auto; padding: 0 24px`
- Card gaps: `gap: 24px`

---

## 3. CDN Stack (always all four)

```html
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
```

---

## 4. Animation Rules

- **All GSAP code** inside a single `window.addEventListener('DOMContentLoaded', function() { ... })`
- **Each system** (navbar, animations, demo, FAQ, hamburger) in its own IIFE inside that listener
- `gsap.registerPlugin(ScrollTrigger)` at top of the GSAP IIFE
- Section reveals: `start: 'top 85%', toggleActions: 'play none none reverse'`
- Card stagger: `stagger: 0.1, duration: 0.8, ease: 'power3.out'`
- **Hero entry**: page-load GSAP (NOT scroll-driven) so it's visible on first paint
- Blob animations: CSS `@keyframes float` (not GSAP — keeps JS bundle lean)
- Marquee: CSS `@keyframes marquee` — NEVER Tailwind's `animate-marquee` class

---

## 5. Section Blueprints (S1–S8 Full Fidelity)

All sections: `position: relative; z-index: [10–120]`

### S1: Navbar (z: 999, position: fixed)

- Transparent by default
- On scroll > 60px: JS adds `.scrolled` → `background: rgba(230,233,239,0.92); backdrop-filter: blur(20px); box-shadow: 0 4px 24px rgba(0,0,0,0.08)`
- Logo: Outfit 800 + accent-colored dot after brand name
- Center: nav links (hidden on mobile)
- Right: small `.btn-primary` CTA
- Mobile: hamburger icon → slide-down `.neu-raised` drawer with nav links

### S2: Hero (z: 10, min-height: 100vh)

- **Background blobs**: 2 `position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.18` circles. One accent color, one complementary. CSS `@keyframes float { 0%,100%{transform:translate(0,0)} 50%{transform:translate(30px,-20px)} }` with different delays.
- **Badge pill**: `.neu-raised-sm` + `border: 1px solid [accent]; color: [accent]` — "↑ [3-word outcome]"
- **Headline**: `clamp(40px, 5.5vw, 80px)` Outfit 900; one key phrase in accent-colored gradient text via `background: linear-gradient(135deg, var(--accent), var(--accent-dark)); -webkit-background-clip: text; -webkit-text-fill-color: transparent`
- **Subheadline**: Inter 18-20px, 2-3 punchy outcome bullets (use `✓` prefix)
- **CTA row**: `.btn-primary` + `.btn-secondary` side by side
- **Trust strip**: "Trusted by 500+ businesses" + 5 company name pills (`.neu-raised-sm` gray)
- **Hero GSAP entry (page-load, not scroll)**: stagger badge → headline → sub → CTAs → trust strip

### S3: Stats + Testimonials (z: 20)

- 3–4 `.neu-card` stat blocks in a row: large `data-count` number (Outfit 900, `clamp(48px,6vw,72px)`, accent color) + descriptor label. Animate counters on scroll.
- Below: 3 testimonial `.neu-card` cards: avatar circle (`.neu-raised-sm` with accent initial), bold name, muted role, italic quote text.
- GSAP: fade+slide up staggered on scroll.

### S4: Features (z: 30)

- Section badge + centered Outfit 900 heading + Inter muted subtitle
- `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- 6 `.neu-card` feature cards: icon in `40px` circle with accent gradient background, Outfit 700 title, 2-line Inter description. Cards lift on hover.
- GSAP stagger reveal.

### S5: How It Works (z: 40)

- Centered heading + subtitle
- 4 horizontal steps desktop / vertical mobile
- Each step: numbered circle (`.neu-raised`, accent gradient number Outfit 900) + dashed connector line + `.neu-card` with step title + description
- GSAP scrub: connector line `width: 0 → 100%` as user scrolls through the section
- Steps fade+scale in with stagger

### S6: Interactive Demo (z: 50)

- Outer `.neu-card` container with padding
- `grid-cols-1 lg:grid-cols-2 gap-8`
- **Left**: 3 clickable feature pills — default `.neu-raised-sm`; active state: `.neu-inset` + `border: 2px solid var(--accent); color: var(--accent)`
- **Right**: preview area with `.neu-inset` background; content swaps on pill click
- GSAP crossfade: `gsap.fromTo(preview, {opacity:0}, {opacity:1, duration:0.3})` on switch

### S7: Pricing (z: 60)

- `grid-cols-1 md:grid-cols-3 gap-6` — 3 plan cards
- **Middle card**: `box-shadow: 12px 12px 24px var(--shadow-dark), -12px -12px 24px var(--shadow-light)` (deeper lift) + "Most Popular" badge in accent
- Each card: plan name (Inter 700 uppercase), price (Outfit 900 `clamp(40px,5vw,60px)`), billing period, feature list with `✓` in accent color, `.btn-primary` or `.btn-secondary` CTA
- GSAP: middle card fades in first, outer cards stagger in after

### S8: FAQ (z: 70)

- Section heading centered
- 5–7 accordion items; each is a `.neu-raised` container with `border-radius: 16px; padding: 20px 24px; margin-bottom: 12px`
- Question row: Outfit 700 text + `+`/`−` icon (rotates with GSAP)
- Answer: `max-height: 0; overflow: hidden` initially; **GSAP accordion** (not CSS transition):

```js
(function(){
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const a = q.nextElementSibling, open = q.classList.contains('active');
      document.querySelectorAll('.faq-q.active').forEach(o => {
        o.classList.remove('active');
        gsap.to(o.nextElementSibling, {maxHeight: 0, duration: 0.3, ease: 'power2.in'});
        gsap.to(o.querySelector('.faq-icon'), {rotation: 0, duration: 0.3});
      });
      if (!open) {
        q.classList.add('active');
        gsap.to(a, {maxHeight: a.scrollHeight, duration: 0.35, ease: 'power2.out'});
        gsap.to(q.querySelector('.faq-icon'), {rotation: 45, duration: 0.3});
      }
    });
  });
})();
```

---

## 6. Section Blueprints (S9–S12, Full if Space Allows)

### S9: CTA Banner (z: 80)

- Outer `.neu-card` with `position: relative; overflow: hidden`
- Accent gradient overlay: `position: absolute; inset: 0; background: linear-gradient(135deg, var(--accent), var(--accent-dark)); opacity: 0.08`
- "Ready to [outcome]?" Outfit 900 heading + subtext + `.btn-primary`
- GSAP fade+scale in on scroll

### S10: Marquee / Integration Strip (z: 90)

- "Works with your stack" label
- **CSS marquee only** — never Tailwind `animate-marquee`:

```css
@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
.marquee-track { display: flex; gap: 32px; animation: marquee 20s linear infinite; width: max-content; }
.marquee-wrap { overflow: hidden; -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); }
```

- 8–10 company/tool names in `.neu-raised-sm` pills, duplicated 2× for seamless loop

### S11: About / Team (z: 100)

- `grid-cols-1 lg:grid-cols-2 gap-12 items-center`
- Left: brand story paragraph + mission statement + `.btn-secondary`
- Right: 3 team member cards in a column — each `.neu-raised-sm` with avatar circle, name, role
- Avatar circles: `.neu-raised` `width:64px; height:64px; border-radius:50%` with accent initial

### S12: Footer (z: 110)

- `background: var(--footer-bg)` (#1f2937) — the only dark section
- `grid-cols-2 md:grid-cols-4 gap-8 padding: 64px 0`
- Columns: Brand (logo + tagline + social links) · Product · Company · Newsletter
- Newsletter input (dark inset: `box-shadow: inset 3px 3px 6px rgba(0,0,0,0.4), inset -3px -3px 6px rgba(255,255,255,0.05); background: rgba(255,255,255,0.05); border-radius: 12px; border: none; color: white`) + `.btn-primary` side by side
- Bottom bar: copyright + Privacy / Terms links. Color: `rgba(255,255,255,0.4)`

---

## 7. JavaScript Architecture

Wrap ALL systems in IIFEs inside one `DOMContentLoaded`:

```js
window.addEventListener('DOMContentLoaded', function() {

  // 1. Navbar scroll glass
  (function(){
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 60));
  })();

  // 2. GSAP animations
  (function(){
    gsap.registerPlugin(ScrollTrigger);
    // Hero page-load (NOT scroll-driven):
    gsap.fromTo(['.hero-badge','.hero-headline','.hero-sub','.hero-ctas','.hero-trust'],
      {opacity:0, y:30}, {opacity:1, y:0, duration:0.8, stagger:0.15, ease:'power3.out'});
    // Section reveals:
    document.querySelectorAll('.reveal-section').forEach(el =>
      gsap.fromTo(el, {opacity:0, y:40}, {opacity:1, y:0, duration:0.8, ease:'power3.out',
        scrollTrigger: {trigger:el, start:'top 85%', toggleActions:'play none none reverse'}}));
    // Card stagger:
    document.querySelectorAll('.reveal-grid').forEach(grid =>
      gsap.fromTo(grid.querySelectorAll('.neu-card'), {opacity:0, y:30},
        {opacity:1, y:0, duration:0.8, stagger:0.1, ease:'power3.out',
          scrollTrigger: {trigger:grid, start:'top 82%', toggleActions:'play none none reverse'}}));
    // Counters:
    document.querySelectorAll('[data-count]').forEach(el => {
      const t = parseFloat(el.dataset.count), sf = el.dataset.suffix||'', pf = el.dataset.prefix||'';
      gsap.fromTo({v:0},{v:t,duration:2,ease:'power2.out',
        onUpdate:function(){el.textContent=pf+Math.round(this.targets()[0].v).toLocaleString()+sf},
        scrollTrigger:{trigger:el,start:'top 85%',once:true}});
    });
  })();

  // 3. Demo tab swap
  (function(){
    const pills = document.querySelectorAll('.demo-pill');
    const previews = document.querySelectorAll('.demo-preview');
    if (!pills.length) return;
    pills.forEach((pill, i) => pill.addEventListener('click', () => {
      pills.forEach(p => { p.classList.remove('active'); });
      pill.classList.add('active');
      previews.forEach(p => p.style.display = 'none');
      if (previews[i]) { previews[i].style.display = 'block'; gsap.fromTo(previews[i],{opacity:0},{opacity:1,duration:0.3}); }
    }));
    pills[0]?.click();
  })();

  // 4. FAQ accordion
  (function(){
    document.querySelectorAll('.faq-q').forEach(q => {
      q.addEventListener('click', () => {
        const a = q.nextElementSibling, open = q.classList.contains('active');
        document.querySelectorAll('.faq-q.active').forEach(o => {
          o.classList.remove('active');
          gsap.to(o.nextElementSibling, {maxHeight:0, duration:0.3, ease:'power2.in'});
          gsap.to(o.querySelector('.faq-icon'), {rotation:0, duration:0.3});
        });
        if (!open) {
          q.classList.add('active');
          gsap.to(a, {maxHeight:a.scrollHeight, duration:0.35, ease:'power2.out'});
          gsap.to(q.querySelector('.faq-icon'), {rotation:45, duration:0.3});
        }
      });
    });
  })();

  // 5. Hamburger mobile menu
  (function(){
    const btn = document.getElementById('hamburger');
    const drawer = document.getElementById('mobile-drawer');
    if (!btn || !drawer) return;
    btn.addEventListener('click', () => {
      const open = drawer.style.display === 'flex';
      drawer.style.display = open ? 'none' : 'flex';
      if (!open) gsap.fromTo(drawer, {opacity:0, y:-10}, {opacity:1, y:0, duration:0.25});
    });
  })();

});
```

---

## 8. Image Library

Use real hosted images throughout — never placeholder boxes or broken paths. Pick the most contextually appropriate image for each use case.

### Priority 1: Aura James Collection (CDN-hosted, always available)

| ID | Context | URL | Best Used For |
|---|---|---|---|
| `atm_wealth` | Wealth & Heritage | `https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439beeba48751402641db.png` | Finance, luxury, coaching backgrounds |
| `atm_biohacking` | Biohacking / Health-tech | `https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439be070c58e28e626115.png` | Health, wellness, fitness, tech hero images |
| `atm_estate` | Luxury Estate | `https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439bed548179ed021687d.png` | Real estate, architecture, aspirational backgrounds |
| `hero_wealth` | Luxury Object of Desire | `https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439befb38cabb229231e2.png` | Finance, legal, premium goods hero |
| `hero_biohacking` | Biosensing / Motion Art | `https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439bebfc81f54f4f24807.png` | Fitness, health, performance, tech feature images |
| `hero_estate` | Cinematic Mansion | `https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439befc5128f11e732220.png` | Real estate, hospitality, luxury services |
| `hero_mindset` | Founder / Leader | `https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439be070c582337626116.png` | Coaching, agency, personal brand hero |
| `process_lifestyle` | Elite Social Proof | `https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b43b27eba4875b6d267ef7.png` | Testimonial sections, lifestyle proof |
| `process_biological` | Technical / Science | `https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439bebfc81f54f4f24807.png` | Health tech, biotech, research-backed products |

### Priority 2: Unsplash (use when no Aura James image fits)

Format: `https://images.unsplash.com/photo-[ID]?q=80&w=870&auto=format&fit=crop`

| Category | Suggested Photo IDs |
|---|---|
| Fitness / gym | `1534438327167-1dcbe013c94b`, `1517836357163-dcda8edfe2b6`, `1581009137042-c6f2a95ef2c8` |
| Coaching / mindset | `1522075469751-3a6694fb2f61`, `1507003211169-0a1dd7228f2d` |
| Health / medical | `1559757148-5c350d0d3c56`, `1576091160550-2173dba999ef` |
| Tech / SaaS | `1518770660439-4636190af475`, `1563013544-824ae1b704d3` |
| Finance | `1611974789855-9c4f4b7e8b69`, `1565514020179-026b92b2d70b` |
| Real estate | `1560518883-ce09059eeffa`, `1582407947304-d97f8a4c2e8b` |
| Restaurant / food | `1414235077428-338989a2e8c0`, `1504674900247-0877df9cc836` |
| Agency / creative | `1497366216548-37526070297c`, `1559136555-9303baea8ebd` |

### Image Usage Rules

- Use images as `<img>` tags with `width:100%; height:[N]px; object-fit:cover; border-radius:[N]px` inside `.neu-card` or preview areas
- For team/avatar circles: use gradient backgrounds with initials rather than photos (safer, always works)
- Feature card icons: use inline SVG or Unicode emoji in a `40px` gradient circle — no photos needed
- Never use `placeholder.com`, `via.placeholder`, or `picsum.photos` — use real hosted images only
- Never use local file paths — only absolute https:// URLs

---

## 9. Copy Generation

- **Outcome-first**: numbers beat adjectives. "Save 12 hours per week" beats "powerful platform"
- **Specific**: infer plausible metrics from category (a fitness gym might save "$200/month on scheduling tools")
- **Voice by category**: Healthcare → warm/reassuring · Fitness → intense/direct · Finance → measured/trustworthy · Agency → confident/creative · Tech → crisp/forward
- **Gradient phrase** in hero headline = the thing the client *most wants* (e.g., "more clients", "more revenue", "ship faster")
- FAQ questions should be real objections: pricing, timeline, support, integrations, security

---

## 9. Output Checklist

- [ ] `background: #e6e9ef` on `body` — neumorphic base (never white, never dark)
- [ ] CSS variables `--bg`, `--bg-mid`, `--shadow-dark`, `--shadow-light`, `--accent`, `--accent-dark` defined
- [ ] `.neu-raised`, `.neu-raised-sm`, `.neu-convex`, `.neu-inset` CSS classes defined
- [ ] `.neu-card` class defined with hover lift
- [ ] `.btn-primary`, `.btn-secondary` defined with active press state
- [ ] Accent color and accent-dark inferred from category table
- [ ] Google Fonts (Outfit + Inter) CDN in `<head>`
- [ ] Tailwind CDN in `<head>`
- [ ] GSAP + ScrollTrigger CDN in `<head>`
- [ ] Hero entry is page-load GSAP (not scroll-driven)
- [ ] Navbar transparent → glassy on scroll via `.scrolled` class
- [ ] `[data-count]` counters animate on scroll with GSAP
- [ ] FAQ uses GSAP accordion (not CSS `max-height` transition)
- [ ] Marquee uses CSS `@keyframes marquee` — NOT Tailwind `animate-marquee`
- [ ] Marquee items duplicated 2× for seamless loop
- [ ] S1–S8 complete at full fidelity
- [ ] S9–S12: full if space allows, stubbed if token-limited
- [ ] All form endpoints use `{{FORM_ENDPOINT}}` placeholder
- [ ] `<title>` contains business name
- [ ] Footer background is `#1f2937` (dark) — all other sections use `#e6e9ef`
- [ ] All blob/float animations use CSS keyframes (not GSAP)
- [ ] Mobile responsive: hamburger nav, stacked grids on small screens
- [ ] Section z-indices: S2=10 through S12=110
- [ ] All JS in one `DOMContentLoaded`, each system in its own IIFE
- [ ] Single HTML file — all CSS in `<style>`, all JS in `<script>` at bottom of `<body>`
