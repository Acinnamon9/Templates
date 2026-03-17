/* 
    Step 1: Dependency Verification
    Success Log: [Check] GSAP Engine found. 
*/
if (typeof gsap !== "undefined") {
    console.log("✅ [Check] Step 1: GSAP Engine Dependency Verified.");
} else {
    console.error("❌ [Error] Step 1: GSAP Engine not found. Ensure script tags are in correct order.");
}

/* 
    Step 2: DOM Audit
    Success Log: [Query] Triggers located.
*/
const triggers = gsap.utils.toArray(".hover-trigger");
if (triggers.length > 0) {
    console.log(`✅ [Query] Step 2: DOM Audit Successful. Found ${triggers.length} triggers.`);
} else {
    console.warn("⚠️ [Warning] Step 2: No elements with class '.hover-trigger' found.");
}

// Global state for frame synchronization
let isInitialFrame;

// Initial state setup for followers: Ensure they start centered on the invisible coordinate
gsap.set(".hover-trigger .follower-element", { yPercent: -50, xPercent: -50 });

triggers.forEach((trigger, index) => {
    /* 
        Step 3: Engine Initialization
        Success Log: [Init] quickTo setters created.
    */
    const followerMedia = trigger.querySelector(".follower-element");
    if (!followerMedia) {
        console.error(`❌ [Error] Step 3: Trigger #${index} missing '.follower-element'.`);
        return;
    }

    // Creating high-performance setters for frame-by-frame updates
    const syncX = gsap.quickTo(followerMedia, "x", { duration: 0.4, ease: "power3" });
    const syncY = gsap.quickTo(followerMedia, "y", { duration: 0.4, ease: "power3" });
    console.log(`✅ [Init] Step 3: GSAP quickTo setters initialized for Trigger #${index}.`);

    const reconcilePointer = (event) => {
        if (isInitialFrame) {
            console.log(`✨ [Sync] Step 5a: Initial frame sync at (${event.clientX}, ${event.clientY})`);
            syncX(event.clientX, event.clientX);
            syncY(event.clientY, event.clientY);
            isInitialFrame = false;
        } else {
            syncX(event.clientX);
            syncY(event.clientY);
        }
    };

    const enableGlobalTracking = () => {
        console.log(`🟢 [Event] Step 5b: MouseMove tracking ENABLED for Trigger #${index}`);
        document.addEventListener("mousemove", reconcilePointer);
    };

    const disableGlobalTracking = () => {
        console.log(`🔴 [Event] Step 6a: MouseMove tracking DISABLED for Trigger #${index}`);
        document.removeEventListener("mousemove", reconcilePointer);
    };

    const opacityTimeline = gsap.to(followerMedia, {
        autoAlpha: 1,
        ease: "none",
        paused: true,
        duration: 0.1,
        onReverseComplete: () => {
            console.log(`✅ [Timeline] Step 6b: Success: Visibility clean-up for Trigger #${index}`);
            disableGlobalTracking();
        },
    });

    /* 
        Step 4: Binding Confirmation
        Success Log: [Event] Interaction listeners bound.
    */
    trigger.addEventListener("mouseenter", (event) => {
        console.log(`🤝 [Interaction] Step 5: Success: Intersection Handshake for Trigger #${index}`);
        isInitialFrame = true;
        opacityTimeline.play();
        enableGlobalTracking();
        reconcilePointer(event);
    });

    trigger.addEventListener("mouseleave", () => {
        console.log(`👋 [Interaction] Step 6: Success: Termination sequence for Trigger #${index}`);
        opacityTimeline.reverse();
    });

    console.log(`✅ [Bind] Step 4: Logic successfully attached to Trigger #${index}.`);
});

console.log("🚀 [System] All steps completed. Cursor Image Hover Module ACTIVE.");
