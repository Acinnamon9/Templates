# Brutalist Funnel Generator

A Claude Code skill that generates brutalist-aesthetic landing pages and funnels with bold typography, thick borders, and GSAP animations.

## What It Does

Converts business descriptions into complete, standalone HTML5 brutalist funnels optimized for high-signal conversions.

## Design Philosophy

**Brutalism = Heuristic Filter**

The aesthetic repels the "corporate-safe" crowd and attracts:
- High-level outliers
- Makers over managers
- Speed-over-perfection mindset
- Anti-corporate builders

## Supported Customer Types

1. **High-Ticket Mastermind** — $5k+ accelerators, coaching programs
2. **PLG SaaS** — Developer tools, API-first products, beta launches
3. **Ghost-Invitational Community (DAO)** — Web3 collectives, invite-only groups
4. **Boutique Creative Agency** — Process-as-product, discovery sprints
5. **Premium Newsletter** — Thought leadership, weekly principles
6. **Educational Paid-Tier** — Gumroad courses, Maven classes, playbooks
7. **Anti-Corporate Recruitment** — Startup talent portals, maker hiring
8. **Experimental Type Foundry** — Font licensing, specimen sheets
9. **Subscription Design Service** — Flat-fee design, DesignJoy model
10. **Physical Goods / Streetwear Drop** — Limited merch, manifesto-driven

## Design System

### Typography
- **Display:** Unbounded (900 weight)
- **Stamp:** Bebas Neue
- **Mono:** Space Mono

### Colors
- Yellow: `#ffe500`
- Cyan: `#00bae2`
- Pink: `#ff2d78`
- Lavender: `#9d95ff`
- Orange: `#ff8709`
- Lime: `#abff84`
- Green: `#0ae448`
- Ink: `#0a0a0a`

### Borders
- Standard: `4px solid`
- Thick: `6px solid`

### Symbols
★ ∞ ◉ ✦

## Key Features

- **Custom cursor dot** with GSAP tracking
- **Scroll progress bar** at top of page
- **12-card principles grid** with 3D tilt on hover
- **Ghost typography** with parallax scroll
- **SplitText animations** on hero and CTA
- **Noise texture overlays** on all sections
- **Mobile responsive** (3→2→1 column grids)
- **Single HTML file** ready for Vercel deployment

## Section Architecture

1. Cursor Dot + Scroll Progress
2. Hero / Manifesto
3. Principles Grid (12 cards)
4. Beliefs / Philosophy Split
5. Offer / Pricing (optional)
6. CTA Banner
7. Footer

## Usage Examples

### High-Ticket Mastermind
```
Generate a brutalist funnel for a $10k creative accelerator for
elite founders who want to ship faster
```

### PLG SaaS
```
Create a brutalist landing page for a developer tool that helps
engineers ship prototypes in 24 hours
```

### Premium Newsletter
```
Build a brutalist funnel for a weekly newsletter teaching makers
how to build and launch products
```

## Technical Stack

- **HTML5** (standalone, no build)
- **CSS3** (inline, no external sheets)
- **GSAP 3.12.5** (CDN)
  - ScrollTrigger
  - SplitText
  - CustomEase
- **Google Fonts** (CDN)

## Output Format

Single `.html` file containing:
- All CSS (inline in `<style>` tag)
- All JavaScript (inline in `<script>` tag)
- All content (no external dependencies)

## Performance

- **Load time:** <1s on 3G
- **File size:** ~50-80KB
- **Animations:** 60fps with GSAP
- **Mobile-first:** Responsive grid system

## Deployment

Drag and drop the HTML file to:
- Vercel
- Netlify Drop
- GitHub Pages
- Any static host

No build process required.

## Anti-Patterns

The skill is designed to AVOID:
- Soft shadows and gradients
- Rounded corners and pastels
- Corporate-safe copy
- Generic CTAs ("Learn More")
- Stock photos
- Carousels and sliders

## Voice & Tone

Brutalist copy is:
- **Declarative** (not suggestive)
- **Opinionated** (not neutral)
- **Direct** (not polite)
- **Anti-corporate** (not professional)

Examples:
- ✅ "Ship it now. Perfect it never."
- ❌ "We help you deliver high-quality solutions."

## Success Criteria

A brutalist funnel works when:
1. Wrong people bounce immediately
2. Right people feel seen
3. Aesthetic matches ethos
4. CTA is unambiguous
5. Page loads fast
6. Every word earns its place

---

**Skill Version:** 1.0
**Last Updated:** 2026-03-18
**Skill Type:** Funnel Generator
**Output:** Standalone HTML5 Document
