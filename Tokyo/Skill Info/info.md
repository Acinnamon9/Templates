Based on my analysis of this code, here is the aesthetic breakdown:

## Overall Aesthetic: **Editorial Minimalism with Japanese Modernism**

### Visual Language
- **Clean, grid-based typography** using Barlow (a geometric sans-serif) with bold, oversized headlines
- **High-contrast monochrome** base (black/white/gray) punctuated by a single accent color — a muted **crimson red** (`#e83f43`)
- **Generous whitespace** and asymmetric layouts that feel magazine-like

### Motion Design
- **Cinematic reveals**: The `revealRight` animation creates a "wipe" effect reminiscent of film transitions or high-end editorial websites
- **Subtle parallax-adjacent motion**: Elements fade and slide up (`fadeInUp`) rather than harsh cuts
- **Purposeful restraint**: Animations are slow (0.8s–1.2s) and use custom cubic-bezier curves for elegance

### Layout Philosophy
- **Asymmetric hero composition**: Text overlays positioned bottom-left with glass-morphism backdrop (`backdrop-filter: blur`)
- **Full-bleed imagery**: 75vh height photos treated as immersive backgrounds
- **Architectural grid system**: Custom flex-based grid with precise column percentages (not a framework)

### UI Details
- **Custom iconography**: Arrow buttons built from pure CSS (1px lines, rotated borders) rather than icon fonts
- **Invisible borders**: 1px black borders on controls that invert on hover (black fill, white text)
- **Mobile-first collapse**: Navigation transforms from horizontal to hamburger with smooth state changes

### Cultural Resonance
The aesthetic channels **Japanese design principles**: *ma* (negative space), *wabi-sabi* (intentional imperfection in the hand-drawn underline), and the **ultra-modern/traditional tension** that matches the content (Tokyo's neon vs. Kyoto's temples).

This is essentially the web equivalent of a **Monocle magazine spread** or **Kinfolk editorial** — refined, confident, and quietly luxurious without being ostentatious.