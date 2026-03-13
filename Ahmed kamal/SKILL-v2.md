---
name: atomicx-funnel-v2
description: Generates premium conversion funnel pages modeled after AtomicX's design aesthetic — layered glass surfaces, glowing orbs, GSAP-animated sections, and a full 12-section layout. Use when a client describes their business and wants a complete website funnel. Produces a single standalone HTML file (Tailwind CDN + GSAP CDN) ready for Vercel deployment. Trigger this skill whenever someone describes a business, product, or service and wants a high-converting website built for them. Also trigger when the user says things like "make me a website", "build my funnel", "create a landing page for my business", or provides any kind of business description. Assume aggressively — if context is thin, invent plausible details.
disable-model-invocation: true
argument-hint: [business description]
---

# AtomicX-Style Funnel Generator

You produce a single deployable HTML file that feels like a premium AI-era command center. The design vocabulary is: **void backgrounds, translucent layered glass, ambient glow orbs, gradient type, and choreographed GSAP reveals**. Every client gets this aesthetic — adapted in color, copy, imagery, and theme (dark vs. light) to their business.

Given a business description (however brief), infer everything you need and produce all 12 sections. If details are missing, assume confidently. Never ask for clarification — assume and build.

---

## 1. Category & Theme Inference

Infer from keywords. One match is enough.

| Category | Keywords | Accent | Theme |
|---|---|---|---|
| `ai-saas` | AI, SaaS, software, automation, API, platform, agent, bot | `#06b6d4` | **dark** |
| `agency` | agency, marketing, creative, branding, consulting, studio | `#8b5cf6` | **dark** |
| `finance` | finance, fintech, trading, investment, wealth, insurance | `#0ea5e9` | **dark** |
| `automotive` | car, auto, dealership, vehicle, motors | `#dc2626` | **dark** |
| `coaching` | coach, mentor, course, program, mastermind, transformation | `#eab308` | **dark** |
| `real-estate` | real estate, property, broker, listings, homes | `#3b82f6` | **dark** |
| `legal` | law, attorney, legal, firm, litigation | `#64748b` | **dark** |
| `fitness` | fitness, gym, training, athletic, supplement | `#ef4444` | **dark** |
| `ecommerce` | shop, store, brand, DTC, dropship, products, retail | `#f97316` | **light** |
| `healthcare` | health, medical, clinic, dental, doctor, wellness, therapy | `#22c55e` | **light** |
| `hospitality` | hotel, restaurant, travel, tourism, venue, dining | `#d946ef` | **light** |
| `local-service` | plumbing, HVAC, salon, cleaning, contractor, repair | `#14b8a6` | **light** |

Default if no match: `agency`, dark theme. Accent can be overridden by user's brand color.

---

## 2. Theme Systems

### Dark Theme (ai-saas, agency, finance, automotive, coaching, real-estate, legal, fitness)

```css
:root {
  --bg: #0a0a0a;
  --bg-card: rgba(255, 255, 255, 0.05);
  --bg-card-hover: rgba(255, 255, 255, 0.08);
  --bg-elevated: rgba(255, 255, 255, 0.08);
  --fg: #f1f5f9;
  --fg-muted: #94a3b8;
  --border: rgba(255, 255, 255, 0.1);
  --border-strong: rgba(255, 255, 255, 0.18);
  --edge-highlight: rgba(255, 255, 255, 0.08);
  --shadow-card: 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
  --navbar-bg: rgba(10, 10, 10, 0.85);
  --footer-bg: #030712;
  --accent: /* from table */;
  --accent-rgb: /* R,G,B of accent */;
  --success: #22c55e;
}
body { background: var(--bg); color: var(--fg); }
```

### Light Theme (ecommerce, healthcare, hospitality, local-service)

```css
:root {
  --bg: #f8fafc;
  --bg-card: rgba(255, 255, 255, 0.65);
  --bg-card-hover: rgba(255, 255, 255, 0.85);
  --bg-elevated: rgba(255, 255, 255, 0.85);
  --fg: #0f172a;
  --fg-muted: #475569;
  --border: rgba(0, 0, 0, 0.08);
  --border-strong: rgba(0, 0, 0, 0.14);
  --edge-highlight: rgba(255, 255, 255, 0.95);
  --shadow-card: 0 4px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9);
  --navbar-bg: rgba(248, 250, 252, 0.85);
  --footer-bg: #0f172a;
  --accent: /* from table */;
  --accent-rgb: /* R,G,B of accent */;
  --success: #16a34a;
}
body { background: var(--bg); color: var(--fg); }
```

---

## 3. Design Tokens

### CDN Stack
```html
<link href="https://fonts.googleapis.com/css2?family=Satoshi:wght@400;500;700;800;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
```

### Typography
| Role | Font | Weight | Notes |
|---|---|---|---|
| Headings | Satoshi | 700–900 | `letter-spacing: -0.02em; line-height: 1.05` |
| Body | Inter | 400–600 | `line-height: 1.6` |
| Labels/Badges | Inter | 700–900 | `text-transform: uppercase; letter-spacing: 0.1em; font-size: 10–11px` |

### Spacing Philosophy
Sections use `padding: 72px 0`. Container is `max-width: 1200px; margin: 0 auto; padding: 0 24px`. Cards use `gap: 16px`. **Dense and rich — not airy and editorial.** Never use 120px+ vertical padding.

### Corner Radii
- Large glass containers (wrapping entire sections): `28px`
- Cards: `20px`
- Buttons: `14px`
- Badges/pills: `9999px`

---

## 4. The Glass Card System

Glass creates depth by being genuinely translucent — the orbs behind it must bleed through. Three visual layers must always be perceivable:

- **Layer 1 (deepest):** Fixed orbs (background)
- **Layer 2 (mid):** Glass card surface — translucent, blurred, catching light at edges
- **Layer 3 (top):** Card content

### Base Glass Card
```css
.glass-card {
  background: var(--bg-card);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--border);
  border-radius: 20px;
  box-shadow: var(--shadow-card);
  transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}
/* Top edge highlight — simulates light catching the rim of the glass surface */
.glass-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, var(--edge-highlight) 40%, var(--edge-highlight) 60%, transparent 100%);
  pointer-events: none;
}
/* Inner chromatic depth gradient */
.glass-card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(135deg,
    rgba(var(--accent-rgb), 0.04) 0%,
    transparent 50%,
    rgba(var(--accent-rgb), 0.04) 100%
  );
  pointer-events: none;
}
.glass-card:hover {
  background: var(--bg-card-hover);
  transform: translateY(-4px);
  box-shadow: var(--shadow-card), 0 0 40px rgba(var(--accent-rgb), 0.1);
}
```

### Large Glass Container (wraps full sections)
```css
.glass-container {
  background: var(--bg-card);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid var(--border);
  border-radius: 28px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.25), inset 0 1px 0 var(--edge-highlight);
  position: relative;
  overflow: hidden;
}
.glass-container::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(var(--accent-rgb),0.05) 0%, transparent 60%);
  pointer-events: none;
}
```

### Dot Grid Overlay (used inside glass-container sections)
```css
.dot-grid {
  position: absolute;
  inset: 0;
  opacity: 0.03;
  background-image: radial-gradient(circle, currentColor 1px, transparent 1px);
  background-size: 40px 40px;
  -webkit-mask-image: radial-gradient(ellipse at center, black, transparent 80%);
  mask-image: radial-gradient(ellipse at center, black, transparent 80%);
  pointer-events: none;
}
```

---

## 5. Background Orb System

Orbs are `position: fixed` so they bleed through glass across ALL scroll positions.

```html
<div id="bg-orbs" style="position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden;">
  <div class="orb" id="orb1"></div>
  <div class="orb" id="orb2"></div>
  <div class="orb" id="orb3"></div>
</div>
```

```css
.orb {
  position: absolute; border-radius: 50%;
  filter: blur(140px);
  animation: float-orb 30s ease-in-out infinite;
}
#orb1 {
  width: 800px; height: 800px;
  background: radial-gradient(circle, var(--accent), transparent 70%);
  opacity: 0.12; top: 10%; left: 20%; animation-delay: 0s;
}
#orb2 {
  width: 600px; height: 600px;
  background: radial-gradient(circle, var(--success), transparent 70%);
  opacity: 0.08; bottom: 10%; right: 15%; animation-delay: -10s;
}
#orb3 {
  width: 500px; height: 500px;
  background: radial-gradient(circle, #8b5cf6, transparent 70%);
  opacity: 0.06; top: 50%; left: 55%; animation-delay: -20s;
}
@keyframes float-orb {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25%       { transform: translate(60px, -40px) scale(1.08); }
  50%       { transform: translate(-40px, 60px) scale(0.95); }
  75%       { transform: translate(30px, 30px) scale(1.04); }
}
```

For **light theme**: reduce orb opacity to 0.08, 0.05, 0.04.

---

## 6. Core Components

### Badge
```css
.badge {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 6px 14px; border-radius: 9999px;
  font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em;
  border: 1px solid rgba(var(--accent-rgb), 0.25);
  color: var(--accent); background: rgba(var(--accent-rgb), 0.08);
}
.badge-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--accent); animation: pulse-dot 2s ease-in-out infinite;
}
@keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:0.6;transform:scale(1.5);} }
```

### Gradient Text
```css
.gradient-text {
  background: linear-gradient(135deg, var(--accent), rgba(var(--accent-rgb), 0.5));
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Rotating-Border CTA (Hero and Final CTA only)
```css
.rotating-cta {
  position: relative; display: inline-flex; padding: 2px;
  border-radius: 14px; overflow: hidden; cursor: pointer; border: none;
  box-shadow: 0 4px 24px rgba(var(--accent-rgb), 0.35);
  animation: pulse-scale 3s ease-in-out infinite;
}
.rotating-cta-gradient {
  position: absolute; inset: -100%;
  background: conic-gradient(from 0deg, transparent 40%, var(--accent) 50%, transparent 60%);
  animation: spin 4s linear infinite;
}
.rotating-cta-face {
  position: relative; z-index: 1;
  display: inline-flex; align-items: center; gap: 10px;
  padding: 14px 40px; font-weight: 900; font-size: 16px; letter-spacing: 0.05em;
  border-radius: 12px; background: var(--accent); color: #fff;
  font-family: 'Satoshi', sans-serif;
}
@keyframes spin { to { transform: rotate(360deg); } }
@keyframes pulse-scale { 0%,100%{transform:scale(1);} 50%{transform:scale(1.02);} }
```

### Secondary Glass Button
```css
.btn-glass {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 12px 28px; border-radius: 14px; border: none; cursor: pointer;
  background: rgba(var(--accent-rgb), 0.12);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(var(--accent-rgb), 0.3);
  color: var(--accent); font-weight: 700; font-size: 15px;
  transition: all 0.25s;
}
.btn-glass:hover { background: rgba(var(--accent-rgb), 0.2); transform: translateY(-2px); }
```

---

## 7. Animation System

### Init
```js
gsap.registerPlugin(ScrollTrigger);
```

### Fade-In-Up (default section entry)
```js
function revealUp(selector, stagger = 0.12) {
  document.querySelectorAll(selector).forEach(el => {
    gsap.fromTo(el, { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' }
      });
  });
}
```

### Stagger Children
```js
function revealStagger(container, childSel, stagger = 0.1) {
  document.querySelectorAll(container).forEach(c => {
    const kids = c.querySelectorAll(childSel);
    gsap.fromTo(kids, { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger, ease: 'power3.out',
        scrollTrigger: { trigger: c, start: 'top 82%', toggleActions: 'play none none reverse' }
      });
  });
}
```

### Counter Animation
```js
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    gsap.fromTo({ val: 0 }, { val: target, duration: 2, ease: 'power2.out',
      onUpdate: function() {
        el.textContent = prefix + Math.round(this.targets()[0].val) + suffix;
      },
      scrollTrigger: { trigger: el, start: 'top 85%', once: true }
    });
  });
}
```

### Hero Scroll Fade
```js
gsap.to('#hero-content', {
  y: -60, opacity: 0.3,
  scrollTrigger: { trigger: '#hero', start: 'top top', end: '80% top', scrub: 1 }
});
```

### Timeline Progress Fill
```js
gsap.to('#timeline-fill', {
  width: '100%', ease: 'none',
  scrollTrigger: { trigger: '#timeline-section', start: 'top 70%', end: 'bottom 60%', scrub: 1 }
});
```

Vary animation styles per section — no two adjacent sections should animate identically.

---

## 8. Section Blueprints

Generate ALL 12 sections. Each gets `position: relative; z-index: [10–120]` above the fixed orbs (z: 0).

### S1: Navbar (z: 999, position: fixed)
- Initial state: fully transparent, no border
- On scroll > 60px: JS adds `.scrolled` class → `background: var(--navbar-bg); backdrop-filter: blur(20px); border-bottom: 1px solid var(--border)`
- Layout: Logo left · Nav links center (hide on mobile) · CTA button right
- Logo: Business name in Satoshi 800 + small accent dot
- Mobile: hamburger → slide-down glass drawer (JS toggle)
- All nav links smooth-scroll to section IDs

### S2: Hero (z: 10, min-height: 100vh)
- Centered flex column content
- **Badge** (pulsing dot + 3–4 word context)
- **Headline** `clamp(40px, 5.5vw, 78px)` Satoshi 900 · one phrase in `.gradient-text`
- **Subheadline** `clamp(16px, 2vw, 22px)` · muted · 3 punchy outcome claims
- **Rotating-border CTA** + secondary ghost text link ("See how it works ↓")
- **Trust logos marquee** — 8 logos in infinite horizontal CSS scroll animation
  ```
  Salesforce: https://a.storyblok.com/f/336825/16x16/1cd2862772/salesforce.svg
  HubSpot:    https://a.storyblok.com/f/336825/16x16/ac29a03cf8/hubspot.svg
  Shopify:    https://a.storyblok.com/f/336825/16x16/71024255bb/shopify.svg
  Telegram:   https://a.storyblok.com/f/336825/16x16/acc6cdc2e9/telegram.svg
  WhatsApp:   https://a.storyblok.com/f/336825/16x16/dd632446e4/whatsapp.svg
  Monday:     https://a.storyblok.com/f/336825/500x500/df28baf91e/monday.webp
  ```
- **Compliance badges** (small pill row): SOC2 · GDPR · HIPAA
  ```
  https://www.callers.ai/images/soc2-logo.svg
  https://www.callers.ai/images/gdpr-logo.svg
  https://www.callers.ai/images/hipaa-logo.svg
  ```
- GSAP scrub: hero content parallax-fades out on scroll

### S3: Journey / The Problem (z: 20)
- Badge + heading (e.g., "Where Your Revenue Is Leaking")
- **3 horizontal tab buttons** — active tab: `background: rgba(var(--accent-rgb),0.12); border: 1px solid var(--accent); color: var(--accent)`
- Below tabs: **4-column card grid** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` `gap:16px`
- **CRITICAL: Cards are FLAT glass-cards. Zero rotation, zero tilt, zero skew.**
  - Image top: `height: 200px; object-fit: cover; border-radius: 12px 12px 0 0`
  - Status badge overlaid on image: "✓ WON" (green) or "✗ LOST" (red)
  - Title (Satoshi 700), 2-line description, metric stat
- Tab switch: CSS opacity cross-fade 300ms + GSAP stagger on cards (0.08s)
- Journey images (use these hosted URLs):
  ```
  https://vite-react-one-jet-80.vercel.app/assets/Lead%20Goes%20Cold.jpg
  https://vite-react-one-jet-80.vercel.app/assets/First%20Contact%20Attempt.jpg
  https://vite-react-one-jet-80.vercel.app/assets/Lead%20submits%20form.jpg
  https://vite-react-one-jet-80.vercel.app/assets/Peak%20Interest%20Window.jpg
  https://vite-react-one-jet-80.vercel.app/assets/FOLLOW-UP%20DECAY.jpeg
  https://vite-react-one-jet-80.vercel.app/assets/FRAGMENTATION.jpeg
  https://vite-react-one-jet-80.vercel.app/assets/FRICTION%20EXIT.jpeg
  ```

### S4: Solution / Workforce (z: 30)
- Entire section wrapped in `.glass-container` with `.dot-grid` inside
- Badge + heading ("Your AI Workforce" or service equivalent)
- `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` `gap:16px`
- Show 4 cards. "Expand" button reveals 4 more (GSAP stagger reveal)
- **Each workforce card (glass-card):**
  - Character image: `width:100%; height:180px; object-fit:cover; border-radius:12px 12px 0 0`
  - Role title (Satoshi 700)
  - "Replaces: [Human Role] — saves $X/mo" (muted Inter)
  - 3 feature bullets with `✓` in accent
  - Two metric pill badges at bottom
- Use hosted character images:
  ```
  https://vite-react-one-jet-80.vercel.app/assets/Sales%20representative.png
  https://vite-react-one-jet-80.vercel.app/assets/Lead%20Nurturer.png
  https://vite-react-one-jet-80.vercel.app/assets/Customer%20service.png
  https://vite-react-one-jet-80.vercel.app/assets/Receptionist.png
  https://vite-react-one-jet-80.vercel.app/assets/Onboarding%20specialist.png
  https://vite-react-one-jet-80.vercel.app/assets/AB%20tester.png
  https://vite-react-one-jet-80.vercel.app/assets/Content%20Strategist.png
  https://vite-react-one-jet-80.vercel.app/assets/Social%20media%20influencer.png
  ```

### S5: Onboarding Timeline (z: 40)
- Heading: "Live in 48 Hours" (adapt to business)
- **Desktop:** horizontal axis with 4 step dots; step content alternates above/below
- **Mobile:** vertical stack
- Timeline structure:
  ```html
  <div id="timeline-section">
    <div class="timeline-track">
      <div class="timeline-base"></div>   <!-- grey base line -->
      <div id="timeline-fill"></div>      <!-- accent fill, starts at 0 width -->
      <div class="step-dot" data-step="1"></div>
      <!-- ... 4 dots total -->
    </div>
    <div class="timeline-steps">
      <!-- 4 step cards alternating above/below -->
    </div>
  </div>
  ```
- **GSAP scrub on `#timeline-fill`:** width 0% → 100% as section scrolls through viewport
- Each step dot and card: fade+scale in (stagger 0.2s) triggered by ScrollTrigger
- Hover on step card: `max-height` expands to reveal detail text (CSS transition)
- `.timeline-base` : `height:2px; background:var(--border); border-radius:1px`
- `#timeline-fill` : `height:2px; background:var(--accent); border-radius:1px; width:0; position:absolute; top:0; left:0`

### S6: Interactive Demo (z: 50)
- Entire section in `.glass-container`
- `grid-cols-1 lg:grid-cols-2` `gap:24px`
- **Left:** 3 stacked glass-card feature cards (clickable)
  - Active card: `border-color: var(--accent); box-shadow: 0 0 0 1px var(--accent), 0 8px 32px rgba(var(--accent-rgb),0.15)`
  - Each: step number circle (accent bg) + title + 2-line description
- **Right:** large glass preview container
  - Swaps image on left card click (JS `src` update or show/hide)
  - Background radial glow div shifts opacity on active step
- JS: click event on feature card → update active state → swap preview image with GSAP crossfade (opacity 0→1, 0.3s)

### S7: Approach / Philosophy (z: 60)
- `grid-cols-1 lg:grid-cols-2` items-center `gap:20px`
- **Left (text):**
  - Badge → Headline (e.g., `We Adapt AI to <span class="gradient-text">Your Business</span>. <span style="opacity:0.4">Not the Other Way Around.</span>`)
  - 1–2 paragraphs body copy
  - `.btn-glass` CTA
  - Micro-proof row: 3 items with pulsing green dot (e.g., "Live in 48h · Any CRM · Human-in-the-loop")
- **Right (visual):** CSS adaptation diagram — 3 glass-cards stacked with slight offset (top/left offsets 0/16/32px), each labeled (e.g., "Your CRM" → "AtomicX Layer" → "AI Engine"). Gives layered depth without needing an image.
- GSAP: left column `x:-30→0, opacity:0→1`; right column `scale:0.9→1, opacity:0→1`

### S8: Industry Solutions (z: 70)
- Badge + heading ("Built for Every Industry")
- `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` `gap:16px`
- Show 3 initially. "Unlock Full Suite" reveals all (GSAP stagger)
- **Each sector card (glass-card):**
  - Image top: `height:220px; object-fit:cover; border-radius:14px 14px 0 0`
  - Title + 2–3 tag pills
  - 3 metric blocks (number + label)
  - "Deploy Now →" CTA (accent colored text link)
- One "Universal Baseline" card: `.glass-container` style, slightly elevated, cross-industry stats
- Sector images (hosted):
  ```
  https://vite-react-one-jet-80.vercel.app/Real%20Estate.png
  https://vite-react-one-jet-80.vercel.app/Healthcare.png
  https://vite-react-one-jet-80.vercel.app/Automotive.png
  https://vite-react-one-jet-80.vercel.app/E-commerce.png
  https://vite-react-one-jet-80.vercel.app/Hospitality.png
  https://vite-react-one-jet-80.vercel.app/Lending%20and%20Finance.png
  https://vite-react-one-jet-80.vercel.app/Supply%20Chain%20Management.png
  https://vite-react-one-jet-80.vercel.app/Professional%20services.png
  https://vite-react-one-jet-80.vercel.app/Global%20Status.png
  ```

### S9: ROI Calculator (z: 80)
- `.glass-container` wrapper
- `grid-cols-1 lg:grid-cols-2` `gap:24px`
- **Left:** Badge + "Project Your Revenue Uplift" heading + 2-sentence description + `.rotating-cta`
- **Right (calculator glass-card):**
  - 3 labeled range sliders: Monthly Leads (50–2000), Avg Deal Value ($500–$50k), Close Rate (5%–50%)
  - Slider track fill via JS:
    ```js
    function updateSlider(s) {
      const pct = (s.value - s.min) / (s.max - s.min) * 100;
      s.style.background = `linear-gradient(to right, var(--accent) ${pct}%, var(--border) ${pct}%)`;
    }
    document.querySelectorAll('input[type=range]').forEach(s => {
      updateSlider(s);
      s.addEventListener('input', () => { updateSlider(s); recalcROI(); });
    });
    ```
  - Formula: `projected = leads × (closeRate * 1.3 / 100) × dealValue`
  - Before/After display: "Current: $X" (muted) → "Projected: $Y" (large `.gradient-text`)
  - Numbers update live as sliders move

### S10: Social Proof / Case Studies (z: 90)
- Badge + "Results That Speak"
- Two-column flex layout: `width:260px` sidebar + `flex:1` detail pane
- **Left sidebar:** 3–5 case study buttons
  - Active: left accent bar + `border-color:var(--accent)` + subtle accent bg
  - Each: initials avatar (accent circle) + company name + industry tag + key metric pill
- **Right pane:** active case study
  - Large italic quote (Satoshi, `font-size:22px`)
  - Before/After metrics: 2–3 stat blocks with `data-count`
  - Client name + role + company (Inter, muted)
- Tab switch: `gsap.fromTo(pane, {x:24,opacity:0},{x:0,opacity:1,duration:0.4})`
- Generate 3–5 plausible case studies from the inferred category

### S11: FAQ (z: 100)
- `.glass-container` wrapper, `padding:40px`
- Two-column flex: `width:220px` category sidebar + `flex:1` questions
- **Left sidebar:** 4–5 category pills
  - Active: `background:var(--accent); color:#fff`
  - Others: glass-card style
- **Right:** question list for active category
  - Each question: `border-bottom:1px solid var(--border)` · `padding:16px 0`
  - Click to expand: JS sets `maxHeight` from `0` to `${el.scrollHeight}px`, smooth `transition:max-height 0.3s ease`
  - Expanded: bottom border turns accent color; answer text in muted
  - Category switch: `gsap.fromTo(list,{opacity:0,y:8},{opacity:1,y:0,duration:0.25})`
- Generate 4–5 categories with 3–4 questions each (business-relevant)

### S12: Final CTA + Footer (z: 110)
**Final CTA block:**
- `background:rgba(var(--accent-rgb),0.04)` subtle tint
- Badge: "Limited Availability" (red urgent dot)
- Headline: problem statement + `.gradient-text` solution phrase
- Subheadline: urgency + social proof (1–2 sentences)
- `.rotating-cta` (primary) + `.btn-glass` ("Watch Case Study")
- 3 stat blocks below with `data-count` (e.g., "48" + "h Setup Time", "100" + "% Automated", "30" + "d Guarantee")

**Footer:**
- `background:var(--footer-bg)` · `border-top:1px solid var(--border)` · `padding:60px 0 24px`
- 4-column grid: Brand (logo + tagline + social icons) · Platform · Company · Contact
- Social icons: hover turns accent color
- Bottom bar: copyright + legal links · `font-size:13px`

---

## 9. Voice / Lead Widget (Floating, Mocked)

Bottom-right floating button. Mocked lead capture — not a live AI. Client connects it to their CRM via `{{CHAT_ENDPOINT}}`.

```css
#widget-toggle {
  position:fixed; bottom:28px; right:28px; z-index:9999;
  width:60px; height:60px; border-radius:50%;
  background:var(--accent); color:#fff; border:none; cursor:pointer;
  box-shadow:0 8px 32px rgba(var(--accent-rgb),0.45);
  display:flex; align-items:center; justify-content:center;
  transition:transform 0.2s;
}
#widget-toggle:hover { transform:scale(1.1); }
.widget-ping {
  position:fixed; bottom:28px; right:28px; z-index:9998;
  width:60px; height:60px; border-radius:50%;
  background:var(--accent); opacity:0.4;
  animation:ping 2s ease-out infinite; pointer-events:none;
}
@keyframes ping { 0%{transform:scale(1);opacity:0.4;} 100%{transform:scale(1.8);opacity:0;} }
#widget-panel {
  position:fixed; bottom:104px; right:28px; z-index:9998;
  width:360px; max-width:calc(100vw - 40px);
  background:var(--bg-card); backdrop-filter:blur(24px);
  border:1px solid var(--border); border-radius:20px;
  box-shadow:0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 var(--edge-highlight);
  display:none; flex-direction:column; overflow:hidden;
}
```

**Widget panel structure:**
1. **Header:** accent-tinted bg · bot avatar (accent circle + wave SVG) · "Talk to [Business] AI" (Satoshi 700) · green "Online" dot
2. **Messages (200px scroll area):** 2–3 pre-filled glass chat bubbles from the bot introducing the service
3. **Lead form:** Name + Email + Phone inputs (glass style) + accent submit button
4. **Footer strip:** "Powered by CloserX AI" · muted 10px

```js
function toggleWidget() {
  const p = document.getElementById('widget-panel');
  const isOpen = p.style.display === 'flex';
  p.style.display = isOpen ? 'none' : 'flex';
  if (!isOpen) gsap.fromTo(p,{opacity:0,y:20,scale:0.95},{opacity:1,y:0,scale:1,duration:0.3,ease:'back.out(1.4)'});
}
document.getElementById('widget-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  fetch('{{CHAT_ENDPOINT}}', {
    method:'POST', headers:{'Content-Type':'application/json'},
    body: JSON.stringify({...Object.fromEntries(new FormData(this)), source:'voice-widget'})
  }).catch(()=>{});
  this.innerHTML = '<p style="text-align:center;padding:24px;color:var(--success);font-weight:700;">✓ We\'ll be in touch shortly.</p>';
});
```

---

## 10. Interactivity Checklist

Every generated page must have ALL of these:

- **Cursor accent dot** — 12px circle, follows mouse with 0.1s lag, scales 2× on hover over interactive elements
- **Navbar glassmorphs on scroll** — JS scroll listener adds `.scrolled` class
- **All glass cards lift on hover** — `translateY(-4px)` + glow (CSS `:hover`)
- **CTA hover transform** — `scale(1.03)` or `translateY(-2px)`
- **Counter animations** — all `[data-count]` elements animate on first scroll into view
- **Rotating-border CTA** — continuous spin
- **Trust logos marquee** — infinite CSS scroll
- **FAQ accordion** — smooth max-height transition
- **Demo cards** — click to swap preview with GSAP crossfade
- **ROI sliders** — live revenue update
- **Journey tabs** — cross-fade card set
- **Widget** — GSAP open/close
- **Timeline fill** — GSAP scrub

```js
// Cursor dot
const cur = document.createElement('div');
cur.id = 'cursor-dot';
cur.style.cssText = 'position:fixed;width:12px;height:12px;border-radius:50%;background:var(--accent);pointer-events:none;z-index:99999;opacity:0.6;transform:translate(-50%,-50%);transition:transform 0.15s ease;';
document.body.appendChild(cur);
document.addEventListener('mousemove', e => { cur.style.left=e.clientX+'px'; cur.style.top=e.clientY+'px'; });
document.querySelectorAll('button,a').forEach(el => {
  el.addEventListener('mouseenter', ()=> cur.style.transform='translate(-50%,-50%) scale(2.5)');
  el.addEventListener('mouseleave', ()=> cur.style.transform='translate(-50%,-50%) scale(1)');
});
```

---

## 11. Copy Generation

### Rules
- **Outcome-first.** "Book 300 appointments/month" beats "our AI makes calls"
- **Specific numbers.** Infer plausible metrics from the category. Never use vague language.
- **Problem-first arc.** Every section names pain before showing fix.
- **Gradient phrase = aspiration.** The `.gradient-text` word(s) in any headline should be the thing the client *wants*, not the feature you're selling.

### Copy Slots
| Slot | Example |
|---|---|
| Hero headline | "AI Agents That Call, Qualify, and Book — **Automatically**" |
| Hero sub | "Launch in 48h. Works with any CRM. Zero missed leads." |
| Journey heading | "Where Your Revenue Is Leaking" |
| Journey tabs | "⏱ Lead Goes Cold" · "🧠 Human Bottleneck" · "🔁 Trust Erosion" |
| Solution heading | "Your AI Sales Workforce" |
| Approach headline | "We Adapt AI to **Your Business.** _Not the Other Way Around._" |
| Final CTA | "Stop Losing Leads. **Start Capturing Revenue.**" |
| Badges | "AI-Powered Sales" · "Limited Availability" · "ROI Calculator" |

Adapt voice to category: Healthcare = compassionate, Fitness = intense, Finance = measured, Agency = authoritative.

---

## 12. Responsive Rules

- Mobile-first. Default: 1 column. Scale at `md: 768px`, `lg: 1024px`
- Container: `max-width: 1200px; margin: 0 auto; padding: 0 20px`
- Hero type: `clamp(36px, 5.5vw, 78px)`
- Navbar: hide center links on mobile, show hamburger
- Timeline: vertical on mobile, horizontal on desktop
- Widget panel: `width: min(360px, calc(100vw - 40px))`
- Grids always collapse to 1 col on mobile

---

## 13. Output Checklist

- [ ] Single HTML file — all CSS in `<style>`, all JS in `<script>`
- [ ] `<title>` contains business name
- [ ] Tailwind CDN + GSAP + ScrollTrigger + Google Fonts in `<head>`
- [ ] `--accent`, `--accent-rgb`, `--bg`, `--fg` set from category inference
- [ ] Theme is dark or light per §1 table — NOT always dark
- [ ] 3 background orbs: `position:fixed`, `float-orb` animation
- [ ] All glass cards: `backdrop-filter:blur(20px)` + `::before` edge highlight + `::after` inner gradient
- [ ] **Zero rotation/tilt/skew on any card anywhere**
- [ ] Journey cards: flat, image on top, status badge overlaid, NO transform
- [ ] Hero has rotating-border CTA
- [ ] Gradient text in at least one heading per section
- [ ] GSAP ScrollTrigger on every section — nothing is static
- [ ] Timeline fill (`#timeline-fill`) animates via GSAP scrub
- [ ] Counter animations on all `[data-count]` elements
- [ ] ROI sliders: live formula update + track fill
- [ ] FAQ: accordion + category sidebar both functional
- [ ] Demo: 3 clickable cards swap preview
- [ ] Workforce expand/collapse works
- [ ] Industry Solutions expand works
- [ ] Case study sidebar switches pane with GSAP
- [ ] Trust logos marquee: infinite CSS animation
- [ ] Navbar transparent → glass on scroll
- [ ] Hamburger menu functional on mobile
- [ ] Voice widget toggles with GSAP animation, form posts to `{{CHAT_ENDPOINT}}`
- [ ] All endpoints use `{{FORM_ENDPOINT}}` / `{{CHAT_ENDPOINT}}` placeholders
- [ ] Cursor dot present
- [ ] All images use live URLs (hosted Vercel or Unsplash) — no broken local paths
- [ ] Section z-indices: S2=10 through S12=110 (above fixed orbs at z:0)
- [ ] Sections use `padding: 72px 0` — not 120px+
- [ ] Marquee logos displayed at readable size with filter/opacity adaptation per theme
