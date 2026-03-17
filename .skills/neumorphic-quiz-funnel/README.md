# Neumorphic Quiz Funnel Skill

A Claude Code skill for generating premium quiz/diagnostic funnel pages with neumorphic design, GSAP animations, and interactive elements.

## What This Generates

A single standalone HTML file featuring:
- **Bento hero grid** that expands via GSAP Flip on scroll
- **Interactive quiz** with 5-6 questions, card-based answers, auto-advance
- **Falling icon trails** that follow mouse movement through quiz section
- **Email gate** to capture leads before showing results
- **Personalized results** with cascade reveal animation
- **Neumorphic (claymorphism) design** with soft 3D shadows
- **Full mobile responsiveness**

## How to Use

### 1. Trigger the Skill

Provide a business description. Example:

```
"I run a premium wellness company called VitalEdge that helps high-performers
optimize their health through personalized supplement stacks. I want a
diagnostic quiz that asks about energy levels, sleep quality, stress, workout
intensity, and current supplement use. After 5-6 questions, we recommend one
of our 3 custom supplement packs: The Starter (foundational vitamins),
The Optimizer (nootropics + adaptogens), or The Elite (full-stack performance
enhancement). The aesthetic should feel clinical but aspirational."
```

Or just say:
```
"Build me a quiz funnel for my [business type]"
```

### 2. Review Output

The skill generates a complete HTML file. Save it and open in a browser to test.

### 3. Known Issues & Fixes

**If the output has issues (missing navbar, broken animations, etc.)**, the model likely didn't follow CRITICAL-FIXES.md properly.

**Quick fix:** Ask Claude to:
```
"Please regenerate following CRITICAL-FIXES.md exactly. Focus on:
1. Working navbar with anchor links
2. Bento grid expanding forward on scroll
3. Falling icons initializing properly
4. FAQ cursor images at correct z-index
5. Center alignment for all section headers"
```

## Files in This Skill

- **SKILL.md** - Main skill instructions for Claude
- **CRITICAL-FIXES.md** - Mandatory fixes for recurring issues (READ THIS FIRST)
- **README.md** - This file (usage guide)

## Categories Supported

The skill auto-detects category and sets appropriate accent color + copy voice:

- Wellness/Supplement → Deep green (`#273c39`)
- Coaching/Mindset → Indigo (`#6366f1`)
- SaaS Diagnostic → Cyan (`#22d3ee`)
- Fitness/Training → Red (`#ef4444`)
- Finance/Advisory → Blue (`#0ea5e9`)
- Real Estate → Blue (`#3b82f6`)
- Marketing Agency → Purple (`#8b5cf6`)
- Legal/Consultation → Slate (`#64748b`)
- Beauty/Skincare → Pink (`#f472b6`)
- E-commerce Finder → Orange (`#f97316`)

## Top 3 Use Cases

1. **Wellness/Biohacking** (best match)
   - Energy diagnostics, supplement finders, health assessments
   - 3 tiers: Starter → Optimizer → Elite

2. **Executive Coaching**
   - Leadership maturity assessment
   - 3 personas: Reactive Leader → Builder → Visionary

3. **SaaS Growth Audit**
   - Funnel diagnostics for founders
   - 3 levels: Baseline Setup → Growth Engine → Revenue Machine

## Technical Details

**Stack:**
- Google Fonts (Bricolage Grotesque + Plus Jakarta Sans)
- Lenis smooth scroll
- GSAP 3.12.2 (with ScrollTrigger, Flip plugins)
- Medium Zoom
- 100% vanilla JS (no frameworks)

**Performance:**
- Falling icons disabled on mobile
- FAQ cursor images disabled on mobile
- GSAP animations optimized with `will-change` and `backface-visibility`

**Browser Support:**
- Modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Mobile responsive (iOS Safari, Chrome Android)

## Customization After Generation

### Change Colors

Find this in the `<style>` section:
```css
:root {
  --accent: #273c39; /* Change this */
  /* ... */
}
```

### Change Quiz Questions

Find the `quizData` object in `<script>`:
```js
const quizData = [
  {
    question: "Your question here?",
    options: [
      { text: "Option A", points: 1, category: "beginner" },
      // ...
    ]
  },
  // ...
];
```

### Change Result Profiles

Find the `resultsData` array in `<script>`:
```js
const resultsData = [
  {
    category: "BEGINNER PROFILE",
    emoji: "🌱",
    title: "The Starter",
    summary: "Your results show...",
    mistakes: ["...", "...", "..."],
    actionTitle: "Your Next Step: ...",
    actionDesc: "...",
    ctaText: "Get Started →"
  },
  // ...
];
```

## Deployment

1. Save the generated HTML file (e.g., `index.html`)
2. Deploy to Vercel:
   ```bash
   vercel --prod
   ```
3. Or upload to any static host (Netlify, GitHub Pages, etc.)

No build process required — it's a single self-contained file.

## License

This skill is part of your personal Claude Code skills library. The generated output is yours to use commercially.
