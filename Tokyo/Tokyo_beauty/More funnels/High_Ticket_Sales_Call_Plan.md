# High-Ticket Sales Call Funnel (Tokyo Beauty Architecture)

**Objective**: Repurpose the premium, high-density "Aesthetic of Attending" codebase from Tokyo Beauty to build a brutalist, high-converting High-Ticket Sales Call Funnel (Priority P2).

**Target Audience**: Coaches, Consultants, B2B Agencies selling $3K+ offers.

## Component Mapping (The Reuse Strategy)

The Tokyo Beauty architecture gives us the perfect modular components to build an elite sales funnel. Here is how we map the existing elements to standard marketing funnel requirements:

### 1. The VSL Hero (Formerly: Experience Canvas)

- **Role**: Hook the user and deliver the core Video Sales Letter (VSL).
- **Reuse**: We use the full-screen `Experience Canvas` layout. Instead of image slides, the center holds an embedded, unbranded video player. We will reuse the `Kinetic Lintel` slow-moving text behind the video for "Environmental Depth" without distracting from the pitch.

### 2. The Paradigm Shift (Formerly: The Memory Grid)

- **Role**: Explain why everything they've tried before has failed, and introduce the "New Mechanism."
- **Reuse**: The Asymmetric 1:3 `Memory Grid`. The dense typographic column will explain the logical argument, while the `Temporal Decoupling` (Floating Canvas) image container will hold a high-level diagram or premium aesthetic shot to create visual tension.

### 3. The Methodology (Formerly: The Ritual)

- **Role**: Break down the specific pillars of the coaching program or agency service.
- **Reuse**: The 3-column `Ritual` grid. The step-by-step numbering (`01`, `02`, `03`) is perfect for "Phase 1: Audit," "Phase 2: Execution," "Phase 3: Scale."

### 4. Elite Social Proof (Formerly: Echoes / Ghost Cards)

- **Role**: Case studies and testimonials.
- **Reuse**: We maintain the `Ghost Cards` with the `Asymmetric Density` layout. By requiring users to hover over client results to read them fully, we increase dwell time and perceived value. The background `Typographic Masking` ("ATTENDANCE") will be changed to "RESULTS" or "EVIDENCE".

### 5. Objection Handling (Formerly: The Oracle)

- **Role**: Answer common questions that block calendar bookings.
- **Reuse**: The interactive `Oracle` FAQ accordions. The slow `--weather` animation curve forces the user to read at a deliberate, measured pace.

### 6. The Application / Calendar (Formerly: Final Witness)

- **Role**: The core Call to Action (CTA) where they book a time.
- **Reuse**: The `Final Witness` section using the `Focus Lighting` (Flashlight) effect. As the user moves their mouse over the calendar embed, the surrounding screen falls into deep shadow, creating absolute isolation and focus on the booking action.

## Engineering Plan

1. **Scaffold the Directory**: Create `index.html`, `style.css`, and `script.js` inside `More funnels/High_Ticket_Sales_Call/`.
2. **Extract Tokens**: Port over the `Brand_tokens.md` CSS variables and the GSAP `weatherEase` logic.
3. **Assemble the DOM**: Reconstruct the HTML using the mapped components above, stripping out Tokyo Beauty-specific copy and injecting high-ticket sales frameworks.
4. **Refine Funnel Logic**: Ensure the bottom-of-funnel calendar/application embed section leverages the lighting interactions perfectly.
