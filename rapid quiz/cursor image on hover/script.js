gsap.set(".hover-trigger .follower-element", { yPercent: -50, xPercent: -50 });

let isInitialFrame;

gsap.utils.toArray(".hover-trigger").forEach((trigger) => {
  const followerMedia = trigger.querySelector(".follower-element"),
    syncX = gsap.quickTo(followerMedia, "x", { duration: 0.4, ease: "power3" }),
    syncY = gsap.quickTo(followerMedia, "y", { duration: 0.4, ease: "power3" }),
    reconcilePointer = (event) => {
      if (isInitialFrame) {
        // Force immediate sync on first interaction frame
        syncX(event.clientX, event.clientX);
        syncY(event.clientY, event.clientY);
        isInitialFrame = false;
      } else {
        syncX(event.clientX);
        syncY(event.clientY);
      }
    },
    enableGlobalTracking = () => document.addEventListener("mousemove", reconcilePointer),
    disableGlobalTracking = () => document.removeEventListener("mousemove", reconcilePointer),
    opacityTimeline = gsap.to(followerMedia, {
      autoAlpha: 1,
      ease: "none",
      paused: true,
      duration: 0.1,
      onReverseComplete: disableGlobalTracking,
    });

  trigger.addEventListener("mouseenter", (event) => {
    isInitialFrame = true;
    opacityTimeline.play();
    enableGlobalTracking();
    reconcilePointer(event);
  });

  trigger.addEventListener("mouseleave", () => opacityTimeline.reverse());
});
