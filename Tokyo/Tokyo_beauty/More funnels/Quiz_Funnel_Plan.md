# Quiz / Recommendation Funnel (Tokyo Beauty Architecture)

**Objective**: Repurpose the precise, atmospheric engineering of Tokyo Beauty to construct a high-converting **Zero-Party Data capture flow** (Priority P1). Modern brands (Skincare, Supplements, Finance) need quizzes that don't look like cheap Typeforms, but feel like bespoke, curated experiences.

**Target Output**: `s:\Templates\Tokyo\Tokyo_beauty\More funnels\Quiz_Funnel\`

## Component Mapping (The Reuse Strategy)

A Quiz Funnel is fundamentally a state machine: (1) The Hook -> (2) The Questions -> (3) The Analysis -> (4) The Result/Gate. Here is how we reuse the Tokyo Beauty framework:

### 1. The Hook (Landing Screen)
- **Role**: The entry point selling the *value* of the quiz.
- **Reuse**: The `Experience Canvas` (Hero Slides). A massive, edge-to-edge aesthetic hook. We keep the dark-mode bias and the smooth `weatherEase` typography reveals. A single, dominant "Begin the Assessment" button replaces the VSL.

### 2. The Question Engine (Full-Screen Focus)
- **Role**: Asking 3-4 diagnostic questions without breaking immersion.
- **Reuse**: The `slide` mechanics from the Canvas. Instead of scrolling down a long page, we use a single 100vh viewport. When a user clicks an answer (styled using the `ghost-card` aesthetics—low contrast until hovered/selected), GSAP transitions the current question out horizontally/vertically and brings the next one in. It feels like an app, not a webpage.

### 3. The Analysis Loader (The "Fake" Processing)
- **Role**: Building anticipation. Quizzes convert better when users believe an AI or system is actually "calculating" their bespoke result.
- **Reuse**: We adapt the planned (but unbuilt) "Attendance Line" concept from Phase 2. A minimalist loading state with rotating "Kinetic Lintel" text ("Analyzing dermal barrier...", "Matching active compounds...").

### 4. The Recommendation Gate
- **Role**: Capturing the email before delivering the bespoke result.
- **Reuse**: We use a tight adaptation of the `Final Witness` section with "Focus Lighting". The email input is the only illuminated element on the screen.

## Code Adjustments for "Modern/Novel" Feel
- **Layout**: We will abandon the long-scroll `lenis.js` for this specific funnel, trapping the user in a `100vh` application-like state to force completion of the quiz.
- **Interaction**: The `Temporal Decoupling` (drifting background images) will run constantly on the `100vh` background as they answer questions, creating a mesmerizing, calming environment ("The Aesthetic of Attending") that lowers friction.

## Engineering Plan
1. Create `Quiz_Funnel_Plan.md` (this document).
2. Scaffold `index.html`, `style.css`, and `quiz.js` in `More funnels/Quiz_Funnel/`.
3. Build the 100vh container structure and port the CSS tokens.
4. Write the vanilla JS state machine (`currentStep = 0`) to handle the GSAP transitions between the Hook, Questions, and the Gate.
