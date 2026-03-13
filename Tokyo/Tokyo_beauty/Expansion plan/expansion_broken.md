# Tokyo Beauty: Micro-Upgrade Roadmap (v4.1)

This roadmap breaks down the "Infinite Threshold" vision into discrete, visible upgrades. Each step is a small "Job" that enhances the masterpiece without overwhelming the architecture.

## Phase 1: Atmospheric Foundation
1.  **Job: The Sound of the Void**
    - **Action**: Add a subtle, looping ambient wind/rain audio file via Web Audio API.
    - **Visible Upgrade**: A minimalist "Sound/Silence" toggle in the header.
2.  **Job: Kinetic Lintel (Parallax)**
    - **Action**: Bind the `.manifesto-quote` to a ScrollTrigger parallax effect.
    - **Visible Upgrade**: Text that slides at a different speed than the background, creating physical depth.
3.  **Job: Filmic Rain Overlay**
    - **Action**: Add a secondary SVG filter that mimics falling rain streaks at 2% opacity.
    - **Visible Upgrade**: A more tactile, meteorological texture on the glass layers.

## Phase 2: The Archive (Persistence)
4.  **Job: The Attendance Line**
    - **Action**: Implement a constant-width `1px` line at the bottom of the viewport that fills based on "Dwell Time" (time spent without moving cursor).
    - **Visible Upgrade**: A subtle indicator that rewards stillness.
5.  **Job: The Ghost Reveal (Echoes)**
    - **Action**: Add a "Testimonials" section where text starts at `opacity: 0.05` and reveals to `1` on slow hover.
    - **Visible Upgrade**: Interactive "Ghost" text that requires focused attention to read.
6.  **Job: Section Milestone Tracking**
    - **Action**: Update `localStorage` as each section is fully "Archived" (viewed for >5s).
    - **Visible Upgrade**: The custom cursor crosshair changes style when hovering over archived content.

## Phase 3: The Sanctuary (Deep Content)
7.  **Job: The Masonry of Memory**
    - **Action**: Add a 3-image grid using a `1:3` ratio where images are blurred until the user "crosses the threshold" (scrolls past 50%).
    - **Visible Upgrade**: A high-impact visual section that responds to your entrance.
8.  **Job: The Oracle’s Stillness (FAQ)**
    - **Action**: Create accordions that only expand if the custom cursor is perfectly still for 1.5 seconds.
    - **Visible Upgrade**: Information that is unlocked through a "Ritual of Silence."
9.  **Job: Sumi-Ink Palette Shift (Night Mode)**
    - **Action**: Add a JS check for local time. If after 8 PM, shift `--color-background` to a deep charcoal.
    - **Visible Upgrade**: Automatic site-wide atmosphere shift based on your reality.

## Phase 4: The Final Ritual
10. **Job: The Cartography Footer**
    - **Action**: Replace the static footer with a dynamic SVG map that "inks in" based on viewed sections.
    - **Visible Upgrade**: A personalized map of your voyage through the page.
11. **Job: Capture Form Breath**
    - **Action**: Make the email input field "inhale/exhale" (subtle pulse) every 10 seconds to draw attention without a "Call to Action" button.
    - **Visible Upgrade**: A living, breathing conversion point.

---

### 💡 Vocabulary Upgrade
1.  **Micro-Upgrade**: An atomic unit of development that produces a tangible visual or functional result.
2.  **Dwell-Trigger**: Interaction logic that activates only when the user is stationary.
3.  **Parallax Depth**: The illusion of 3D space created by move objects at different speeds.
4.  **Ghost Card**: UI elements that are nearly invisible until the user "attends" to them.
5.  **Night-Sync**: The practice of adjusting UI luminosity to match the user's circadian rhythm.
