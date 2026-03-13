---
name: atomicx-funnel-v5
description: Generates premium conversion funnel pages modeled after AtomicX's design aesthetic — layered glass surfaces, glowing orbs, GSAP-animated sections, and a full 12-section layout. Use when a client describes their business and wants a complete website funnel. Produces a single standalone HTML file (Tailwind CDN + GSAP CDN) ready for Vercel deployment. Trigger this skill whenever someone describes a business, product, or service and wants a high-converting website built for them. Also trigger when the user says things like "make me a website", "build my funnel", "create a landing page for my business", or provides any kind of business description. Assume aggressively — if context is thin, invent plausible details.
disable-model-invocation: true
argument-hint: [business description]
---

# AtomicX-Style Funnel Generator v5

You produce a single deployable HTML file. Design vocabulary: **void/pastel backgrounds, translucent layered glass, ambient glow orbs, gradient type, GSAP reveals**. Given a business description, infer everything and produce all 12 sections. Never ask for clarification.

## TOKEN PROTOCOL

Generate S1–S8 at full fidelity. If approaching output limit, stub S9–S12 as:

```html
<!-- TODO: S9 Social Proof -->
<section id="social-proof" style="padding:72px 0;position:relative;z-index:90;"><div class="container"><p style="color:var(--fg-muted);text-align:center">Section pending — run /atomicx-funnel-v5 again and say "expand S9"</p></div></section>
```

A complete skeleton beats a truncated masterpiece.

## CODE OUTPUT STYLE

Output code optimised for AI consumption — dense, minimal whitespace inside blocks, terse variable names. No explanatory comments. Humans will read the rendered page, not the source.

## LAYOUT ALIGNMENT RULE

**All section header blocks (badge + H2 + subtitle sitting above a card grid) use `text-center` and `mx-auto` on the subtitle.** Only deviate when the section blueprint explicitly specifies a 2-column layout (S7, S10). If in doubt, center it.

## SCRIPT PLACEMENT RULE

**All GSAP ScrollTrigger registrations and interactive system IIFEs go inside a single `window.addEventListener('DOMContentLoaded', function(){ ... })` block at the bottom of `<body>`.** Never register ScrollTrigger outside DOMContentLoaded — the target elements won't exist yet.

---

## 1. Category & Theme Inference

**Default theme: LIGHT.** Only use dark if the user explicitly says "dark", "dark theme", or uses a category that is inherently dark-coded.

| Category | Keywords | Accent | Theme |
| --- | --- | --- | --- |
| `ai-saas` | AI, SaaS, software, automation, API, platform, agent, bot | `#06b6d4` | dark (explicit) |
| `agency` | agency, marketing, creative, branding, consulting, studio | `#8b5cf6` | dark (explicit) |
| `finance` | finance, fintech, trading, investment, wealth, insurance | `#0ea5e9` | **light** |
| `automotive` | car, auto, dealership, vehicle, motors | `#dc2626` | **light** |
| `coaching` | coach, mentor, course, program, mastermind, transformation | `#eab308` | **light** |
| `real-estate` | real estate, property, broker, listings, homes | `#3b82f6` | **light** |
| `legal` | law, attorney, legal, firm, litigation | `#64748b` | **light** |
| `fitness` | fitness, gym, training, athletic, supplement | `#ef4444` | **light** |
| `ecommerce` | shop, store, brand, DTC, dropship, products, retail | `#f97316` | **light** |
| `healthcare` | health, medical, clinic, dental, doctor, wellness, therapy | `#22c55e` | **light** |
| `hospitality` | hotel, restaurant, travel, tourism, venue, dining | `#d946ef` | **light** |
| `local-service` | plumbing, HVAC, salon, cleaning, contractor, repair | `#14b8a6` | **light** |

**Conflict resolution:** If a description crosses categories (e.g. "AI-powered healthcare"), the industry noun wins over the technology adjective. "AI healthcare" → healthcare → light.

Default if no match: `agency`, **light** theme. Dark theme only if user says "dark".

---

## 2. Theme Systems

### Dark Theme

Add `class="theme-dark"` to `<body>` when using dark theme. Light theme: no class needed.

```css
:root{--bg:#0a0a0a;--bg-card:rgba(255,255,255,0.05);--bg-card-hover:rgba(255,255,255,0.08);--bg-elevated:rgba(255,255,255,0.08);--fg:#f1f5f9;--fg-muted:#94a3b8;--border:rgba(255,255,255,0.1);--border-strong:rgba(255,255,255,0.18);--edge-highlight:rgba(255,255,255,0.08);--shadow-card:0 8px 32px rgba(0,0,0,0.4),inset 0 1px 0 rgba(255,255,255,0.08);--navbar-bg:rgba(10,10,10,0.85);--footer-bg:#030712;--orb-opacity1:0.12;--orb-opacity2:0.08;--orb-opacity3:0.06;--accent:/* from table */;--accent-rgb:/* R,G,B */;--success:#22c55e}
body{background:var(--bg);color:var(--fg)}
```

### Light Theme

```css
:root{--bg:#f8fafc;--bg-card:rgba(255,255,255,0.65);--bg-card-hover:rgba(255,255,255,0.85);--bg-elevated:rgba(255,255,255,0.85);--fg:#0f172a;--fg-muted:#475569;--border:rgba(0,0,0,0.08);--border-strong:rgba(0,0,0,0.14);--edge-highlight:rgba(255,255,255,0.95);--shadow-card:0 4px 24px rgba(0,0,0,0.08),inset 0 1px 0 rgba(255,255,255,0.9);--navbar-bg:rgba(248,250,252,0.85);--footer-bg:#0f172a;--orb-opacity1:0.08;--orb-opacity2:0.05;--orb-opacity3:0.04;--accent:/* from table */;--accent-rgb:/* R,G,B */;--success:#16a34a}
body{background:var(--bg);color:var(--fg)}
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
| --- | --- | --- | --- |
| Headings | Satoshi | 700–900 | `letter-spacing:-0.02em;line-height:1.05` |
| Body | Inter | 400–600 | `line-height:1.6` |
| Labels | Inter | 700–900 | `text-transform:uppercase;letter-spacing:0.1em;font-size:10–11px` |

### Spacing

Sections: `padding:72px 0`. Container: `max-width:1200px;margin:0 auto;padding:0 24px`. Cards: `gap:16px`. Never 120px+ vertical padding.

### Radii

containers `28px` · cards `20px` · buttons `14px` · pills `9999px`

---

## 4. Glass Card System

Three visual layers must always be perceivable: fixed orbs (background) → glass surface (mid) → card content (top).

```css
.glass-card{background:var(--bg-card);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid var(--border);border-radius:20px;box-shadow:var(--shadow-card);transition:background 0.3s ease,transform 0.3s ease,box-shadow 0.3s ease;position:relative;overflow:hidden}
.glass-card::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent 0%,var(--edge-highlight) 40%,var(--edge-highlight) 60%,transparent 100%);pointer-events:none}
.glass-card::after{content:'';position:absolute;inset:0;border-radius:inherit;background:linear-gradient(135deg,rgba(var(--accent-rgb),0.04) 0%,transparent 50%,rgba(var(--accent-rgb),0.04) 100%);pointer-events:none}
.glass-card:hover{background:var(--bg-card-hover);transform:translateY(-4px);box-shadow:var(--shadow-card),0 0 40px rgba(var(--accent-rgb),0.1)}
.glass-container{background:var(--bg-card);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border:1px solid var(--border);border-radius:28px;box-shadow:0 20px 60px rgba(0,0,0,0.25),inset 0 1px 0 var(--edge-highlight);position:relative;overflow:hidden}
.glass-container::after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(var(--accent-rgb),0.05) 0%,transparent 60%);pointer-events:none}
.dot-grid{position:absolute;inset:0;opacity:0.03;background-image:radial-gradient(circle,currentColor 1px,transparent 1px);background-size:40px 40px;-webkit-mask-image:radial-gradient(ellipse at center,black,transparent 80%);mask-image:radial-gradient(ellipse at center,black,transparent 80%);pointer-events:none}
```

---

## 5. Background Orb System

`position:fixed` — bleeds through all glass surfaces at every scroll position.

```html
<div id="bg-orbs" style="position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden">
  <div class="orb" id="orb1"></div><div class="orb" id="orb2"></div><div class="orb" id="orb3"></div>
</div>
```

```css
.orb{position:absolute;border-radius:50%;filter:blur(140px);animation:float-orb 30s ease-in-out infinite}
#orb1{width:800px;height:800px;background:radial-gradient(circle,var(--accent),transparent 70%);opacity:var(--orb-opacity1);top:10%;left:20%;animation-delay:0s}
#orb2{width:600px;height:600px;background:radial-gradient(circle,var(--success),transparent 70%);opacity:var(--orb-opacity2);bottom:10%;right:15%;animation-delay:-10s}
#orb3{width:500px;height:500px;background:radial-gradient(circle,#8b5cf6,transparent 70%);opacity:var(--orb-opacity3);top:50%;left:55%;animation-delay:-20s}
@keyframes float-orb{0%,100%{transform:translate(0,0) scale(1)}25%{transform:translate(60px,-40px) scale(1.08)}50%{transform:translate(-40px,60px) scale(0.95)}75%{transform:translate(30px,30px) scale(1.04)}}
```

---

## 6. Core Components

```css
.badge{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;border-radius:9999px;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;border:1px solid rgba(var(--accent-rgb),0.25);color:var(--accent);background:rgba(var(--accent-rgb),0.08)}
.badge-dot{width:6px;height:6px;border-radius:50%;background:var(--accent);animation:pulse-dot 2s ease-in-out infinite}
@keyframes pulse-dot{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.6;transform:scale(1.5)}}

.gradient-text{background:linear-gradient(135deg,var(--accent),rgba(var(--accent-rgb),0.5));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}

/* Rotating-border CTA — Hero and Final CTA only.
   Arc is wider on light theme so it reads against pale backgrounds.
   Dark theme: tight 40-60 arc looks premium on void bg.
   Light theme: wider 30-70 arc + stronger pulse to register on pale bg. */
.rotating-cta{position:relative;display:inline-flex;padding:2px;border-radius:14px;overflow:hidden;cursor:pointer;border:none;box-shadow:0 4px 24px rgba(var(--accent-rgb),0.35)}
.rotating-cta-gradient{position:absolute;inset:-100%;animation:spin 4s linear infinite}
body.theme-dark .rotating-cta-gradient{background:conic-gradient(from 0deg,transparent 40%,var(--accent) 50%,transparent 60%)}
body:not(.theme-dark) .rotating-cta-gradient{background:conic-gradient(from 0deg,transparent 30%,var(--accent) 50%,transparent 70%)}
.rotating-cta-face{position:relative;z-index:1;display:inline-flex;align-items:center;gap:10px;padding:14px 40px;font-weight:900;font-size:16px;letter-spacing:0.05em;border-radius:12px;background:var(--accent);color:#fff;font-family:'Satoshi',sans-serif}
@keyframes spin{to{transform:rotate(360deg)}}
body.theme-dark .rotating-cta{animation:pulse-dark 3s ease-in-out infinite}
body:not(.theme-dark) .rotating-cta{animation:pulse-light 3s ease-in-out infinite}
@keyframes pulse-dark{0%,100%{transform:scale(1)}50%{transform:scale(1.02)}}
@keyframes pulse-light{0%,100%{transform:scale(1)}50%{transform:scale(1.04)}}

.btn-glass{display:inline-flex;align-items:center;gap:8px;padding:12px 28px;border-radius:14px;border:none;cursor:pointer;background:rgba(var(--accent-rgb),0.12);backdrop-filter:blur(12px);border:1px solid rgba(var(--accent-rgb),0.3);color:var(--accent);font-weight:700;font-size:15px;transition:all 0.25s}
.btn-glass:hover{background:rgba(var(--accent-rgb),0.2);transform:translateY(-2px)}
```

---

## 7. Animation System

```js
gsap.registerPlugin(ScrollTrigger);
const revealUp=(s,st=0.12)=>document.querySelectorAll(s).forEach(el=>gsap.fromTo(el,{opacity:0,y:40},{opacity:1,y:0,duration:0.9,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%',toggleActions:'play none none reverse'}}));
const revealStagger=(c,ch,st=0.1)=>document.querySelectorAll(c).forEach(c=>gsap.fromTo(c.querySelectorAll(ch),{opacity:0,y:30},{opacity:1,y:0,duration:0.8,stagger:st,ease:'power3.out',scrollTrigger:{trigger:c,start:'top 82%',toggleActions:'play none none reverse'}}));
const animateCounters=()=>document.querySelectorAll('[data-count]').forEach(el=>{const t=parseFloat(el.dataset.count),sf=el.dataset.suffix||'',pf=el.dataset.prefix||'';gsap.fromTo({v:0},{v:t,duration:2,ease:'power2.out',onUpdate:function(){el.textContent=pf+Math.round(this.targets()[0].v)+sf},scrollTrigger:{trigger:el,start:'top 85%',once:true}})});
gsap.to('#hero-content',{y:-60,opacity:0.3,scrollTrigger:{trigger:'#hero',start:'top top',end:'80% top',scrub:1}});
gsap.to('#timeline-fill',{width:'100%',ease:'none',scrollTrigger:{trigger:'#timeline-section',start:'top 70%',end:'bottom 60%',scrub:1}});
```

Vary animation style per section — no two adjacent sections animate identically.

---

## 8. Section Blueprints (S1–S8 — FULL FIDELITY)

All sections: `position:relative; z-index:[10–120]` above fixed orbs (z:0).

### S1: Navbar (z:999, position:fixed)

- Transparent → glassmorphs on scroll >60px: JS `.scrolled` class → `background:var(--navbar-bg);backdrop-filter:blur(20px);border-bottom:1px solid var(--border)`
- Logo: Satoshi 800 + accent dot · Nav links center (hide mobile) · CTA right
- Mobile: hamburger → slide-down glass drawer

### S2: Hero (z:10, min-height:100vh)

- Centered flex column
- Badge (pulsing dot + 3–4 word context)
- Headline `clamp(40px,5.5vw,78px)` Satoshi 900 · one phrase `.gradient-text`
- Subheadline `clamp(16px,2vw,22px)` · 3 punchy outcome claims
- `.rotating-cta` + secondary ghost link ("See how it works ↓")
- **Trust logos marquee** — use for ALL categories; signals integration breadth universally. **Always provide this exact CSS — do not use Tailwind `animate-marquee` (it doesn't exist in CDN Tailwind):**

```css
@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
.marquee-track{display:flex;gap:48px;animation:marquee 24s linear infinite;width:max-content}
.marquee-wrap{overflow:hidden;-webkit-mask-image:linear-gradient(to right,transparent,black 10%,black 90%,transparent);mask-image:linear-gradient(to right,transparent,black 10%,black 90%,transparent)}
```

Duplicate the logo set inside `.marquee-track` (2× same 6 logos back-to-back) for a seamless loop:

```text
Salesforce: https://a.storyblok.com/f/336825/16x16/1cd2862772/salesforce.svg
HubSpot:    https://a.storyblok.com/f/336825/16x16/ac29a03cf8/hubspot.svg
Shopify:    https://a.storyblok.com/f/336825/16x16/71024255bb/shopify.svg
Telegram:   https://a.storyblok.com/f/336825/16x16/acc6cdc2e9/telegram.svg
WhatsApp:   https://a.storyblok.com/f/336825/16x16/dd632446e4/whatsapp.svg
Monday:     https://a.storyblok.com/f/336825/500x500/df28baf91e/monday.webp
```

- Compliance badge row: SOC2 · GDPR · HIPAA

```text
https://www.callers.ai/images/soc2-logo.svg
https://www.callers.ai/images/gdpr-logo.svg
https://www.callers.ai/images/hipaa-logo.svg
```

- GSAP scrub: hero content parallax-fades on scroll

### S3: Journey / The Problem (z:20)

**Image priority: use the hosted Vercel URLs listed below first. Fall back to Unsplash only when no hosted image fits the content context.**

- Badge + heading ("Where Your Revenue Is Leaking") — centered header block
- 3 horizontal tab buttons; active: `background:rgba(var(--accent-rgb),0.12);border:1px solid var(--accent);color:var(--accent)`
- Below tabs: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4`
- Cards are flat. The only `transform` allowed on a card is `translateY(-4px)` on hover — nothing else.
  - Image top: `height:200px;object-fit:cover;border-radius:12px 12px 0 0`
  - Status badge overlaid: "✓ WON" (green) or "✗ LOST" (red)
  - Title Satoshi 700 · 2-line desc · metric stat
- Tab switch: CSS opacity crossfade 300ms + GSAP stagger 0.08s

```text
https://vite-react-one-jet-80.vercel.app/assets/Lead%20Goes%20Cold.jpg
https://vite-react-one-jet-80.vercel.app/assets/First%20Contact%20Attempt.jpg
https://vite-react-one-jet-80.vercel.app/assets/Lead%20submits%20form.jpg
https://vite-react-one-jet-80.vercel.app/assets/Peak%20Interest%20Window.jpg
https://vite-react-one-jet-80.vercel.app/assets/FOLLOW-UP%20DECAY.jpeg
https://vite-react-one-jet-80.vercel.app/assets/FRAGMENTATION.jpeg
https://vite-react-one-jet-80.vercel.app/assets/FRICTION%20EXIT.jpeg
```

### S4: Solution / Workforce (z:30)

- `.glass-container` wrapper with `.dot-grid` · centered header block
- `grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4`
- 4 visible · "Expand" button reveals 4 more (GSAP stagger)
- Each card (glass-card): image `height:180px;object-fit:cover;border-radius:12px 12px 0 0` · role title · "Replaces: X — saves $Y/mo" · 3 `✓` bullets · 2 metric pills

```text
https://vite-react-one-jet-80.vercel.app/assets/Sales%20representative.png
https://vite-react-one-jet-80.vercel.app/assets/Lead%20Nurturer.png
https://vite-react-one-jet-80.vercel.app/assets/Customer%20service.png
https://vite-react-one-jet-80.vercel.app/assets/Receptionist.png
https://vite-react-one-jet-80.vercel.app/assets/Onboarding%20specialist.png
https://vite-react-one-jet-80.vercel.app/assets/AB%20tester.png
https://vite-react-one-jet-80.vercel.app/assets/Content%20Strategist.png
https://vite-react-one-jet-80.vercel.app/assets/Social%20media%20influencer.png
```

### S5: Onboarding Timeline (z:40)

- Heading: "Live in 48 Hours" (adapt to business) — centered header block
- Desktop: horizontal axis · 4 step dots · content alternates above/below
- Mobile: vertical stack

```html
<div id="timeline-section"><div class="timeline-track" style="position:relative;height:2px;margin:40px 0">
  <div style="position:absolute;top:0;left:0;right:0;height:2px;background:var(--border);border-radius:1px"></div>
  <div id="timeline-fill" style="position:absolute;top:0;left:0;height:2px;width:0;background:var(--accent);border-radius:1px"></div>
</div></div>
```

- Each step dot + card: fade+scale in (stagger 0.2s) via ScrollTrigger
- Step card hover: CSS `max-height` expands to reveal detail (step cards are not FAQ — CSS transition is fine here)

### S6: Interactive Demo (z:50)

- `.glass-container` wrapper · centered header block
- `grid-cols-1 lg:grid-cols-2 gap-6`
- Left: 3 stacked glass-card feature cards (clickable); active: `border-color:var(--accent);box-shadow:0 0 0 1px var(--accent),0 8px 32px rgba(var(--accent-rgb),0.15)` · step number circle + title + 2-line desc
- Right: large glass preview — swaps image on card click; background radial glow shifts on active step
- JS: click → update active → swap preview with GSAP crossfade `opacity 0→1, duration:0.3`

### S7: Approach / Philosophy (z:60)

- `grid-cols-1 lg:grid-cols-2 items-center gap-5` — this section is intentionally 2-column, left-aligned text
- Left: Badge → Headline with `.gradient-text` → 2 body paragraphs → `.btn-glass` → micro-proof row (pulsing green dot)
- GSAP: left `x:-30→0,opacity:0→1`; right `scale:0.9→1,opacity:0→1`

**Right column — Optical Depth Stack.**

The layered card effect is achieved exclusively through these three CSS properties: `transform:translate(X,Y)` to offset position, `opacity` to create perceived recession, and `box-shadow` to imply elevation. That is the complete list — use nothing else to create depth.

```css
.approach-stack{position:relative;height:260px}
.approach-card{position:absolute;width:320px;padding:24px;border-radius:24px;background:rgba(255,255,255,0.03);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,0.08);box-shadow:0 4px 24px -1px rgba(0,0,0,0.2),inset 0 1px 1px rgba(255,255,255,0.1);transition:all 0.4s cubic-bezier(0.23,1,0.32,1)}
.approach-card.card-1{z-index:30;transform:translate(0,0);border-left:4px solid var(--accent)}
.approach-card.card-2{z-index:20;transform:translate(32px,32px);opacity:0.6}
.approach-card.card-3{z-index:10;transform:translate(64px,64px);opacity:0.3}
.connector-line{position:absolute;height:1px;background:linear-gradient(90deg,var(--accent) 0%,transparent 100%);box-shadow:0 0 8px var(--accent)}
```

The three cards represent layers of the product (e.g., "Your CRM" → "Integration Layer" → "AI Engine"). Opacity gradient makes back cards read as receding — pure optical illusion through material properties alone.

### S8: Industry Solutions (z:70)

- Centered header block
- `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`
- 3 visible · "Unlock Full Suite" reveals all (GSAP stagger)
- Each card: image `height:220px;object-fit:cover;border-radius:14px 14px 0 0` · title + 2–3 tag pills · 3 metric blocks · "Deploy Now →"
- One "Universal Baseline" card: `.glass-container` style, slightly elevated

```text
https://vite-react-one-jet-80.vercel.app/Real%20Estate.png
https://vite-react-one-jet-80.vercel.app/Healthcare.png
https://vite-react-one-jet-80.vercel.app/Automotive.png
https://vite-react-one-jet-80.vercel.app/E-commerce.png
https://vite-react-one-jet-80.vercel.app/Hospitality.png
https://vite-react-one-jet-80.vercel.app/Lending%20and%20Finance.png
https://vite-react-one-jet-80.vercel.app/Supply%20Chain%20Management.png
https://vite-react-one-jet-80.vercel.app/Professional%20services.png
```

---

## 9. Section Blueprints (S9–S12 — STUB IF TOKEN-LIMITED)

If S1–S8 are complete and output space allows, generate these at full fidelity. Otherwise emit the stub pattern from TOKEN PROTOCOL.

### S9: ROI Calculator (z:80)

- `.glass-container` · `grid-cols-1 lg:grid-cols-2 gap-6`
- Left: Badge + heading + desc + `.rotating-cta`
- Right (glass-card): 3 range sliders (Monthly Leads 50–2000 · Avg Deal $500–$50k · Close Rate 5%–50%)
- Slider track fill: `linear-gradient(to right, var(--accent) X%, var(--border) X%)`
- Formula: `projected = leads × (closeRate*1.3/100) × dealValue`
- Before/After: "Current: $X" (muted) → "Projected: $Y" (large `.gradient-text`) — live update on slider `input`

### S10: Social Proof / Case Studies (z:90)

- This section uses a 2-column layout — left-aligned sidebar, not centered header
- Left sidebar `width:260px`: 3–5 case study buttons; active: left accent bar + accent border + accent bg tint; each: initials avatar + company + industry tag + key metric
- Right pane: large italic quote (Satoshi 22px) + 2–3 `data-count` stat blocks + client name/role
- Tab switch: `gsap.fromTo(pane,{x:24,opacity:0},{x:0,opacity:1,duration:0.4})`
- Generate 3–5 plausible case studies from inferred category

### S11: FAQ (z:100)

- `.glass-container padding:40px` · left sidebar `width:220px` + right questions
- Left: 4–5 category pills; active: `background:var(--accent);color:#fff`
- Right: questions with `border-bottom:1px solid var(--border)`. Use GSAP for accordion — not CSS max-height transition, which is jerky. Answer elements start with `style="max-height:0;overflow:hidden"`.

```js
(function(){
  document.querySelectorAll('.faq-question').forEach(q=>{
    q.addEventListener('click',()=>{
      const a=q.nextElementSibling,open=q.classList.contains('active');
      document.querySelectorAll('.faq-question.active').forEach(o=>{
        o.classList.remove('active');
        gsap.to(o.nextElementSibling,{maxHeight:0,duration:0.3,ease:'power2.in'});
      });
      if(!open){q.classList.add('active');gsap.to(a,{maxHeight:a.scrollHeight,duration:0.35,ease:'power2.out'});}
    });
  });
})();
```

- Category switch: `gsap.fromTo(list,{opacity:0,y:8},{opacity:1,y:0,duration:0.25})`
- 4–5 categories × 3–4 questions (business-relevant)

### S12: Final CTA + Footer (z:110)

- CTA block: `background:rgba(var(--accent-rgb),0.04)` · "Limited Availability" badge (red dot) · `.rotating-cta` + `.btn-glass` · 3 `data-count` stat blocks
- Footer: `background:var(--footer-bg);border-top:1px solid var(--border);padding:60px 0 24px` · 4-col grid: Brand · Platform · Company · Contact · bottom bar copyright

---

## 10. Voice / Lead Widget (Floating, Mocked)

```css
#widget-toggle{position:fixed;bottom:28px;right:28px;z-index:9999;width:60px;height:60px;border-radius:50%;background:var(--accent);color:#fff;border:none;cursor:pointer;box-shadow:0 8px 32px rgba(var(--accent-rgb),0.45);display:flex;align-items:center;justify-content:center;transition:transform 0.2s}
#widget-toggle:hover{transform:scale(1.1)}
.widget-ping{position:fixed;bottom:28px;right:28px;z-index:9998;width:60px;height:60px;border-radius:50%;background:var(--accent);opacity:0.4;animation:ping 2s ease-out infinite;pointer-events:none}
@keyframes ping{0%{transform:scale(1);opacity:0.4}100%{transform:scale(1.8);opacity:0}}
#widget-panel{position:fixed;bottom:104px;right:28px;z-index:9998;width:360px;max-width:calc(100vw - 40px);background:var(--bg-card);backdrop-filter:blur(24px);border:1px solid var(--border);border-radius:20px;box-shadow:0 20px 60px rgba(0,0,0,0.3),inset 0 1px 0 var(--edge-highlight);display:none;flex-direction:column;overflow:hidden}
```

Widget structure: header (accent tint · bot avatar · "Talk to [Business] AI" · green "Online" dot) · messages scroll area (2–3 pre-filled bot bubbles) · lead form (Name + Email + Phone + submit) · footer "Powered by CloserX AI"

---

## 11. JavaScript Architecture

**Each interactive system is wrapped in an IIFE to prevent variable collision. All IIFEs go inside a single `DOMContentLoaded` listener.**

```js
window.addEventListener('DOMContentLoaded', function() {

  (function(){
    const nav=document.getElementById('navbar');
    window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>60));
  })();

  (function(){
    gsap.registerPlugin(ScrollTrigger);
    // hero parallax, timeline fill, revealUp calls, counters, approach animations, etc.
  })();

  (function(){
    const leads=document.getElementById('roi-leads'),deal=document.getElementById('roi-deal'),rate=document.getElementById('roi-rate'),out=document.getElementById('roi-output');
    if(!leads)return;
    function calc(){out.textContent='$'+Math.round(leads.value*(rate.value*1.3/100)*deal.value).toLocaleString()}
    [leads,deal,rate].forEach(s=>{s.addEventListener('input',()=>{const p=(s.value-s.min)/(s.max-s.min)*100;s.style.background=`linear-gradient(to right,var(--accent) ${p}%,var(--border) ${p}%)`;calc()});s.dispatchEvent(new Event('input'))});
  })();

  (function(){
    const panel=document.getElementById('widget-panel');
    if(!panel)return;
    window.toggleWidget=()=>{const open=panel.style.display==='flex';panel.style.display=open?'none':'flex';if(!open)gsap.fromTo(panel,{opacity:0,y:20,scale:0.95},{opacity:1,y:0,scale:1,duration:0.3,ease:'back.out(1.4)'})};
    document.getElementById('widget-form')?.addEventListener('submit',function(e){e.preventDefault();fetch('{{CHAT_ENDPOINT}}',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...Object.fromEntries(new FormData(this)),source:'voice-widget'})}).catch(()=>{});this.innerHTML='<p style="text-align:center;padding:24px;color:var(--success);font-weight:700">✓ We\'ll be in touch shortly.</p>'});
  })();

  (function(){
    const c=document.createElement('div');c.style.cssText='position:fixed;width:12px;height:12px;border-radius:50%;background:var(--accent);pointer-events:none;z-index:99999;opacity:0.6;transform:translate(-50%,-50%);transition:transform 0.15s ease';
    document.body.appendChild(c);
    document.addEventListener('mousemove',e=>{c.style.left=e.clientX+'px';c.style.top=e.clientY+'px'});
    document.querySelectorAll('button,a').forEach(el=>{el.addEventListener('mouseenter',()=>c.style.transform='translate(-50%,-50%) scale(2.5)');el.addEventListener('mouseleave',()=>c.style.transform='translate(-50%,-50%) scale(1)')});
  })();

});
```

Wrap ALL systems in IIFEs inside DOMContentLoaded: navbar · GSAP/ScrollTrigger · journey tabs · workforce expand · demo swap · approach stack · industry expand · ROI calculator · case study tabs · FAQ accordion · cursor dot · widget · counters.

---

## 12. Copy Generation

- **Outcome-first:** numbers beat adjectives. "Book 300 appointments/month" beats "powerful AI"
- **Specific:** infer plausible metrics from category. Never vague.
- **Problem arc:** every section names pain before fix
- **Gradient phrase = aspiration** — the `.gradient-text` word(s) should be what the client *wants*

Voice by category: Healthcare → compassionate · Fitness → intense · Finance → measured · Agency → authoritative · Local-service → direct and trustworthy

---

## 13. Responsive Rules

Mobile-first. `md:768px` · `lg:1024px`. Container `max-width:1200px;margin:0 auto;padding:0 20px`. Hero type `clamp(36px,5.5vw,78px)`. Timeline vertical on mobile. Navbar: hide links, show hamburger. Widget `width:min(360px,calc(100vw - 40px))`.

---

## 14. Output Checklist

- [ ] Single HTML file — all CSS in `<style>`, all JS in `<script>`
- [ ] `<title>` contains business name
- [ ] CDN stack in `<head>` (Tailwind, GSAP, ScrollTrigger, Google Fonts)
- [ ] `--accent`, `--accent-rgb` set from inference table
- [ ] **Theme defaults to LIGHT unless user said "dark"**
- [ ] Dark theme: `<body class="theme-dark">` · Light theme: no class
- [ ] Theme CSS variables match chosen theme
- [ ] 3 background orbs: `position:fixed;z-index:0` with `float-orb` animation
- [ ] Orb opacity uses `--orb-opacity1/2/3` (lower for light theme)
- [ ] All glass cards: `backdrop-filter:blur(20px)` + `::before` edge highlight + `::after` inner gradient
- [ ] Cards: only `translateY(-4px)` on hover — no other transforms on any card
- [ ] S7 approach stack: depth via `translate` offset + `opacity` + `box-shadow` only
- [ ] Journey cards: flat, image on top, status badge overlaid, Vercel URLs used
- [ ] Hero has `.rotating-cta` with correct arc width for theme
- [ ] `.gradient-text` in at least one heading per section
- [ ] GSAP ScrollTrigger on every section — nothing static
- [ ] `#timeline-fill` animates via GSAP scrub
- [ ] All `[data-count]` elements animate on scroll into view
- [ ] ROI sliders: live formula + track fill gradient
- [ ] **Every JS system wrapped in its own IIFE inside DOMContentLoaded**
- [ ] S1–S8 complete at full fidelity
- [ ] S9–S12: full if space allows, stubbed if token-limited
- [ ] **Trust logos marquee: uses `.marquee-track` + `@keyframes marquee` CSS — NOT `animate-marquee` Tailwind class**
- [ ] Logos duplicated 2× inside `.marquee-track` for seamless loop
- [ ] Navbar transparent → glass on scroll (`.scrolled` class)
- [ ] Hamburger functional on mobile
- [ ] Voice widget toggles with GSAP, form posts to `{{CHAT_ENDPOINT}}`
- [ ] All endpoints use `{{FORM_ENDPOINT}}` / `{{CHAT_ENDPOINT}}` placeholders
- [ ] Cursor dot present and scales on interactive element hover
- [ ] All images use live hosted URLs (Vercel first, Unsplash fallback) — no broken local paths
- [ ] Section z-indices: S2=10 through S12=110
- [ ] Sections use `padding:72px 0` — not 120px+
