---
name: atomicx-funnel
description: Generates premium dark-mode funnel pages with glassmorphism, glowing orbs, animated scroll reveals, and a full 12-section layout. Use when building landing pages, SaaS pages, agency sites, lead-gen funnels, or any conversion-focused single-page site. Produces a standalone HTML file (Tailwind CDN + GSAP CDN + Google Fonts) ready for Vercel deployment. Trigger this skill when the user describes a business, product, or service and wants a high-converting dark-mode funnel page with modern aesthetics.
disable-model-invocation: true
argument-hint: [business-description]
---

# AtomicX Funnel Generator

You generate a single standalone HTML file that looks and feels like a premium AI-era command center — dark voids, glowing orbs, glassmorphic surfaces, gradient text, and scroll-choreographed reveals. The page creates desire and trust through layered visual depth, not flat layouts.

Given a business description, you infer the category, choose design tokens, write conversion copy, compose all 12 sections, and output complete deployable HTML.

## 1. Design Philosophy

These define the aesthetic. Every page must have ALL of them:

- **Three-layer depth.** Dark void background → glowing gradient orbs (blurred, floating) → glass card surfaces. At any scroll point, the user sees through at least three visual layers. This is what makes it feel premium.
- **Glassmorphism everywhere.** Cards use `background: rgba(255,255,255,0.05); backdrop-filter: blur(24px); border: 1px solid rgba(255,255,255,0.1)`. The glass sits on the glow. Never use opaque white cards on dark backgrounds.
- **Accent glow.** The primary accent color bleeds through as radial gradients, CTA shadows, and pulsing dots. It's the "signal" in the void.
- **Gradient text on key phrases.** Headlines have one phrase in `background-clip: text; -webkit-text-fill-color: transparent` with a linear gradient using the accent color. This draws the eye to the value proposition.
- **Scroll-triggered reveals.** Every section fades in with GSAP ScrollTrigger. Cards stagger. Nothing is visible on load except the hero.
- **Rotating-border CTA.** The primary CTA button has a spinning conic-gradient border (4s rotation). This is the signature interaction element.
- **Full-color imagery.** No grayscale filters. The dark background provides enough contrast. Images are vibrant.

## 2. Category Inference

| Category | Trigger Keywords | Accent Color | Copy Voice |
|---|---|---|---|
| ai-saas | AI, SaaS, software, platform, automation, tool, dashboard, API | `#06b6d4` (cyan) | Confident, technical, outcome-focused |
| real-estate | real estate, property, listings, agents, broker, homes | `#3b82f6` (blue) | Sophisticated, aspirational |
| healthcare | health, medical, clinic, dental, doctor, wellness, therapy | `#22c55e` (green) | Trustworthy, compassionate, professional |
| ecommerce | shop, store, products, dropship, brand, DTC, retail | `#f97316` (orange) | Energetic, conversion-driven |
| agency | agency, marketing, creative, design, branding, consulting | `#8b5cf6` (violet) | Bold, minimal, authoritative |
| coaching | coach, mentor, course, program, transformation, mastermind | `#eab308` (amber) | Inspirational, direct, challenger |
| finance | finance, fintech, trading, investment, wealth, insurance | `#0ea5e9` (sky) | Precise, trustworthy |
| legal | law, attorney, legal, firm, litigation | `#64748b` (slate) | Measured, authoritative |
| fitness | fitness, gym, training, athletic, supplement, wellness | `#ef4444` (red) | Intense, commanding |
| hospitality | hotel, restaurant, travel, tourism, events, venue | `#d946ef` (fuchsia) | Warm, experiential |
| automotive | car, auto, dealership, vehicle, motors | `#dc2626` (red-600) | Precise, powerful |
| local-service | plumbing, HVAC, salon, repair, cleaning, contractor, handyman | `#14b8a6` (teal) | Straightforward, trustworthy |

Default to `agency` if no match. Accent can be overridden by user's brand color.

## 3. Design Tokens

### CDN Dependencies
```html
<link href="https://fonts.googleapis.com/css2?family=Satoshi:wght@400;500;700;800;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
```

### Typography
| Role | Font | Weight | Style |
|---|---|---|---|
| Headings | Satoshi | 700-900 | letter-spacing: -0.02em, line-height: 1.05 |
| Body | Inter | 400-600 | line-height: 1.5 |
| Labels/Badges | Inter | 700-900 | uppercase, letter-spacing: 0.1em, font-size: 10-11px |

### Color System
```css
:root {
  --bg: #0a0a0a;                    /* Void black */
  --bg-card: rgba(255,255,255,0.05); /* Glass surface */
  --bg-elevated: rgba(255,255,255,0.08);
  --fg: #f1f5f9;                    /* Slate 100 */
  --fg-muted: #94a3b8;             /* Slate 400 */
  --border: rgba(255,255,255,0.1);
  --accent: [FROM CATEGORY TABLE];
  --accent-rgb: [R,G,B of accent];  /* For rgba() usage */
  --glow: rgba(var(--accent-rgb), 0.15);
  --success: #22c55e;
  --error: #ef4444;
}
```

### Corner Radii
- Cards/containers: `border-radius: 24px` (or `32px` for hero-level)
- Buttons: `border-radius: 20px`
- Badges: `border-radius: 9999px` (pill)

## 4. Component Patterns

### Glass Card
```css
.glass-card {
  background: var(--bg-card);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid var(--border);
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
}
```

### Glass Card with Glow Overlay
Add an inner gradient overlay for depth:
```css
.glass-card-glow {
  position: relative;
}
.glass-card-glow::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(135deg, rgba(var(--accent-rgb),0.05), transparent, rgba(var(--accent-rgb),0.05));
  pointer-events: none;
}
```

### Rotating Border CTA (Signature Element)
```html
<button class="rotating-cta">
  <span class="rotating-cta__gradient"></span>
  <span class="rotating-cta__face">Book Your Demo</span>
</button>
```
```css
.rotating-cta {
  position: relative;
  display: inline-flex;
  padding: 2px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(var(--accent-rgb), 0.3);
  animation: pulse-scale 3s ease-in-out infinite;
}
.rotating-cta__gradient {
  position: absolute;
  inset: -100%;
  background: conic-gradient(from 90deg, transparent 0%, transparent 50%, var(--accent) 50%, transparent 55%, transparent 100%);
  animation: spin 4s linear infinite;
}
.rotating-cta__face {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 48px;
  font-weight: 900;
  font-size: 18px;
  border-radius: 18px;
  background: var(--accent);
  color: white;
  border: 1px solid rgba(255,255,255,0.1);
}
@keyframes spin { to { transform: rotate(360deg); } }
@keyframes pulse-scale {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
}
```

### Badge
```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: 9999px;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border: 1px solid rgba(var(--accent-rgb), 0.2);
  color: var(--accent);
  background: transparent;
}
```

### Gradient Text
```css
.gradient-text {
  background: linear-gradient(to right, var(--accent), rgba(var(--accent-rgb), 0.6));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

## 5. Background System

### Fixed Orb Layer (always present)
```html
<div id="bg-orbs" style="position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden;">
  <div class="orb orb--primary" style="top:20%;left:30%;"></div>
  <div class="orb orb--secondary" style="bottom:20%;right:20%;"></div>
  <div class="orb orb--accent" style="top:60%;left:60%;"></div>
</div>
```
```css
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  animation: float-orb 25s ease-in-out infinite;
}
.orb--primary { width: 700px; height: 700px; background: radial-gradient(circle, var(--accent), transparent 70%); opacity: 0.15; }
.orb--secondary { width: 600px; height: 600px; background: radial-gradient(circle, var(--success), transparent 70%); opacity: 0.1; }
.orb--accent { width: 500px; height: 500px; background: radial-gradient(circle, #8b5cf6, transparent 70%); opacity: 0.08; }
@keyframes float-orb {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(50px, -50px) scale(1.1); }
  66% { transform: translate(-30px, 30px) scale(0.9); }
}
```

## 6. Animation System (GSAP)

### Registration
```js
gsap.registerPlugin(ScrollTrigger);
```

### Fade-In-Up (default section entry)
```js
function animateFadeInUp(selector, stagger = 0.15) {
  gsap.utils.toArray(selector).forEach(el => {
    gsap.fromTo(el, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' }
    });
  });
}
```

### Stagger Children
```js
function animateStagger(container, children, stagger = 0.1) {
  gsap.fromTo(children, { opacity: 0, y: 30 }, {
    opacity: 1, y: 0, duration: 0.8, stagger: stagger, ease: 'power3.out',
    scrollTrigger: { trigger: container, start: 'top 80%', toggleActions: 'play none none reverse' }
  });
}
```

### Hero Scroll Fade
```js
gsap.to('#hero-content', {
  opacity: 0, y: -40,
  scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true }
});
```

Use different combinations per section — no two sections should animate identically.

## 7. Section Blueprints

Generate ALL 12 sections in this order. Each section gets `position: relative; z-index: [10-120];` stacking.

### 7.1 Navbar (z-index: 999)
- Fixed top, full width, initially transparent
- On scroll (>50px): add glass background + border + shadow
- Logo (text or placeholder) left, nav links center (hidden mobile), CTA button right
- Mobile: hamburger toggle → slide-down menu
- Links scroll smoothly to section IDs

### 7.2 Hero (z-10)
- Full viewport height (`min-height: 100vh`), centered content
- Badge above headline: `<div class="badge">` with context text (e.g., "AI-Powered Sales")
- Headline: `text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black`, one phrase wrapped in `.gradient-text`
- Subheadline: 1 sentence, `text-xl sm:text-2xl`, muted color
- Rotating-border CTA button
- Trust logos marquee below (infinite scroll, 6-8 placeholder logos or real ones)
- Optional compliance badges row (SSL, SOC2, GDPR icons as small pills)
- Hero content fades up on scroll (GSAP scrub)

### 7.3 Journey / Problem (z-20)
- Section badge + heading: "Where Your Revenue Is Leaking" or business-specific
- 3 tabs (horizontal buttons): each tab = a pain narrative
- Active tab highlights with accent border + background
- Below tabs: 4 cards in a row (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4`)
- Each card: glass-card with image (top), metric badge (overlaid), title, description
- Cards marked "won" get green accent; "lost" get red accent
- One card per narrative is `isFeatured` (slightly larger or glow border)
- Tab switch: cross-fade animation (GSAP or CSS transitions)

### 7.4 Solution Showcase / AI Workforce (z-30)
- Wrapped in a large glass-card-glow container
- Section badge + heading: "Your [AI/Automated] Workforce" or service equivalent
- Grid of 4-8 role/service cards (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4`)
- Each card: icon (emoji or SVG), title, "Replaces: [role] ($X/mo)", 3-4 features list, 2 metrics
- Optional image per card
- Show first 4, "Expand" button reveals rest (JS toggle)
- Subtle dot-grid pattern overlay on the container (radial-gradient dots at 3% opacity)

### 7.5 Onboarding Timeline (z-40)
- Heading: "Live in [X] Hours" or "How It Works"
- Horizontal timeline axis (vertical on mobile)
- 4-5 steps with numbered dots on the axis
- Progress line fills with accent color as user scrolls into view (GSAP ScrollTrigger scrub)
- Each step: number, title, description, positioned alternating above/below the axis (desktop)
- Hover state: card expands slightly, reveals detail text

### 7.6 Interactive Demo (z-50)
- Two-column layout (`grid-cols-1 lg:grid-cols-2`)
- Left: 3 stacked feature cards (clickable). Active card has accent border + glow
- Right: visual preview area (image or phone mockup). Swaps image on card click
- Large glass container wrapping both columns
- Background glow that shifts color with active step
- Each feature card: number, title, description, icon

### 7.7 Approach / Philosophy (z-60)
- Two-column layout (text left, visual right)
- Heading with accent-colored key phrase and dimmed secondary line
- 2-3 paragraphs of philosophy copy
- CTA button (glass-primary variant): `background: rgba(var(--accent-rgb), 0.2); backdrop-filter: blur(24px); border: 1px solid rgba(var(--accent-rgb), 0.3);`
- Micro-proof row: 3 inline items with pulsing green dots (e.g., "Live in 48h · Works with any CRM · Human-in-the-loop")
- Right side: abstract visual, dashboard mockup, or adaptation diagram (can use a styled div with nested elements)

### 7.8 Industry Solutions (z-70)
- Grid of sector cards (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
- Show 3 initially, "Unlock Full Suite" button expands to show all (6-9)
- Each card: image (Unsplash, industry-relevant), title, 2-3 tags, 3 metrics, CTA button
- One special "Universal Baseline" card in the center with cross-industry metrics
- Cards animate in with stagger on expand

### 7.9 ROI Calculator (z-80)
- Wrapped in glass-card-glow container
- Two-column layout
- Left: badge, heading ("Project Your Revenue Uplift"), description, CTA button
- Right: calculator card with 3 range sliders (Monthly Leads, Avg Deal Value, Close Rate %)
- Below sliders: Before vs After comparison (current revenue → projected revenue)
- Formula: `projected = leads × (closeRate × 1.3 / 100) × dealValue` (30% uplift default)
- Results update live as sliders move
- Style sliders with accent color track fill

### 7.10 Social Proof / Case Studies (z-90)
- Two-column layout (sidebar + detail pane)
- Left sidebar: 3-5 case study buttons (company name, industry tag, key metric)
- Right pane: active case study detail — testimonial quote, before/after metrics, client name/role, company
- Tab switch animation (slide in from right)
- Section bordered top and bottom with subtle divider lines
- If no real case studies: generate plausible ones from the business category

### 7.11 FAQ (z-100)
- Wrapped in glass-card-glow container
- Two-column: category sidebar (left 1/3) + questions (right 2/3)
- 3-5 categories (e.g., "Core", "Execution", "Integration", "Trust", "Impact")
- Active category highlighted with accent bar + background
- Each question: accordion (click to expand, smooth height transition)
- Category switch: cross-fade the question list

### 7.12 Final CTA + Footer (z-110)
**Final CTA Section:**
- Badge: "Limited Availability" or urgency text
- Headline: problem statement + gradient solution phrase
- Subheadline: 1-2 sentences of social proof / urgency
- Primary rotating-border CTA + secondary ghost CTA
- 3 stat blocks below (e.g., "48h Setup Time", "100% Automated", "30d Guarantee")

**Footer:**
- Dark background (`#030712`)
- 4-column grid: brand info (logo + description), Platform links, Company links, Contact info
- Bottom bar: copyright, social icons, optional theme toggle
- Subtle radial gradient glow in top-right corner

## 8. Image Library

Select images based on inferred category. Use Unsplash URLs:

```
hero_1:    https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=870&auto=format
hero_2:    https://images.unsplash.com/photo-1552820755-733e038f86d5?w=870&auto=format
lifestyle: https://images.unsplash.com/photo-1522717425499-89d3198ccc74?w=1032&auto=format
product_1: https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=580&auto=format
product_2: https://images.unsplash.com/photo-1523884156331-22cc4f5df98d?w=874&auto=format
detail:    https://images.unsplash.com/photo-1763888450559-c1e93e238000?w=580&auto=format
card_1:    https://images.unsplash.com/photo-1522125123931-9304d91a42ee?w=582&auto=format
card_2:    https://images.unsplash.com/photo-1504610926078-a1611febcad3?w=580&auto=format
card_3:    https://images.unsplash.com/photo-1622586757007-efda9475c347?w=870&auto=format
card_4:    https://images.unsplash.com/photo-1657771192840-7e3f6e827e58?w=925&auto=format
```

For industry-specific images (Industry Solutions section), also use:
```
real_estate:   https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format
healthcare:    https://images.unsplash.com/photo-1666887360680-9dc27a1d2753?w=600&auto=format
finance:       https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&auto=format
ecommerce:     https://images.unsplash.com/photo-1713947506242-8fcae733d158?w=600&auto=format
hospitality:   https://images.unsplash.com/photo-1516788875874-c5912cae7b43?w=600&auto=format
automotive:    https://images.unsplash.com/photo-1567789884554-0b844b597180?w=600&auto=format
pro_services:  https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format
supply_chain:  https://images.unsplash.com/photo-1634638026221-4c1c4cf9f881?w=600&auto=format
government:    https://images.unsplash.com/photo-1541726260-e6b6a6a08b27?w=600&auto=format
```

Choose hero/lifestyle images that match the inferred business category. For Journey cards, use category-relevant stock photos.

## 9. Copy Generation

### Voice Rules
- **Confident and outcome-focused.** Not corporate. Not salesy. Speak TO the prospect about THEIR problem.
- **Specific numbers.** "300+ appointments monthly", "48-hour launch", "70% of leads never get called". Infer plausible metrics from the business type.
- **Problem → solution arc.** Journey section names the pain. Solution section shows the fix. ROI proves it. CTA closes.
- **Gradient text = the payoff phrase.** The gradient-highlighted text in each headline should be the aspirational outcome, not the feature.

### Copy Slots
| Slot | Format | Example |
|---|---|---|
| Hero headline | 8-12 words, one gradient phrase | "AI Agents That Call, Qualify, and Book Appointments **Automatically**" |
| Hero subheadline | 1 sentence, 3 punchy claims | "Launch in 48 hours. Works with any CRM. No missed leads." |
| Journey heading | Problem framing | "Where Your Revenue Is Leaking" |
| Journey tab names | 3 pain narratives | "⏱ Lead Goes Cold", "🧠 Human Bottleneck", "🔁 Trust Erosion" |
| Solution heading | Capability framing | "Your AI Sales Workforce" |
| Approach headline | Philosophy with dimmed contrast | "We Adapt AI to **Your Business**. _Not the Other Way Around._" |
| Final CTA headline | Problem stop + gradient solution | "Stop Losing Leads. **Start Capturing Revenue.**" |
| Badge text | 2-4 words, uppercase | "AI-Powered Sales", "Limited Availability", "ROI Calculator" |

## 10. Voice Widget (Mocked)

A floating chat widget in the bottom-right corner. This is a lead capture tool, not a real AI agent.

```html
<!-- Floating Toggle -->
<button id="chat-toggle" onclick="toggleChat()" style="position:fixed;bottom:24px;right:24px;z-index:9999;width:64px;height:64px;border-radius:50%;background:var(--accent);color:white;border:none;cursor:pointer;box-shadow:0 8px 32px rgba(var(--accent-rgb),0.4);display:flex;align-items:center;justify-content:center;">
  <svg><!-- MessageCircle or X icon --></svg>
  <span class="chat-ping"></span> <!-- Pulsing ring -->
</button>
```

When opened, show a glass panel (400px wide, 500px tall) with:
- Header: bot avatar + "Talk to [Business] AI" + green "Online" dot
- Phone icon button (decorative — links to booking or shows "Coming soon")
- 2-3 pre-filled bot messages introducing the service
- Text input + send button
- "Powered by CloserX AI" footer text
- Form submission posts to `{{CHAT_ENDPOINT}}` placeholder

## 11. Responsive Rules

- Mobile-first: start with single column, scale up
- `max-width: 1280px` container with `padding: 0 24px`
- Navbar: hide links on mobile, show hamburger
- Grids: `1 col → 2 col (md:768px) → 3-4 col (lg:1024px)`
- Hero text: `clamp(40px, 6vw, 80px)` for headline
- Timeline: vertical on mobile, horizontal on desktop
- Chat widget: `width: 90vw; max-width: 400px` on mobile

## 12. Output Checklist

Before outputting, verify:

- [ ] Single HTML file with all CSS in `<style>` and JS in `<script>`
- [ ] Tailwind CDN, GSAP CDN, Google Fonts CDN all loaded
- [ ] `--accent` and `--accent-rgb` set from category inference
- [ ] Background orbs present with `position: fixed` and `pointer-events: none`
- [ ] All cards use glass-card pattern (backdrop-blur + translucent bg + border)
- [ ] Glass containers have inner gradient overlay (`::before` pseudo-element)
- [ ] Hero has rotating-border CTA
- [ ] Gradient text used on at least one phrase per section heading
- [ ] GSAP ScrollTrigger animations on every section (stagger children, fade-in-up)
- [ ] No two adjacent sections use the same animation pattern
- [ ] All 12 sections present in correct z-index stacking order
- [ ] Journey section has 3 tabs with cross-fade
- [ ] ROI calculator sliders update results live
- [ ] FAQ has category sidebar + accordion
- [ ] Chat widget toggle works (open/close)
- [ ] Marquee scroll on trust logos (CSS animation, infinite)
- [ ] All images use Unsplash URLs (no broken local paths)
- [ ] Nav links scroll smoothly to section IDs
- [ ] Mobile responsive: hamburger menu, single-column grids, readable text
- [ ] `<title>` tag includes business name
- [ ] Form endpoints use `{{FORM_ENDPOINT}}` / `{{CHAT_ENDPOINT}}` placeholders
- [ ] No console errors, no missing assets