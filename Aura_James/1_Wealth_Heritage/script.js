document.addEventListener("DOMContentLoaded", () => {
  const weatherEase = "cubic-bezier(0.23, 1, 0.75, 1)";

  // 1. Lenis Smooth Scroll
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // 2. Custom Cursor System
  const cursor = document.querySelector('.custom-cursor');
  const follower = document.querySelector('.cursor-follower');

  document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
    gsap.to(follower, { 
      x: e.clientX - 15, 
      y: e.clientY - 15, 
      duration: 0.6, 
      ease: weatherEase 
    });
  });

  // 3. Temporal Decoupling (Background Drifting)
  const bgAsset = document.querySelector('.drifting-asset');
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) - 0.5;
    const y = (e.clientY / window.innerHeight) - 0.5;
    
    gsap.to(bgAsset, {
      x: x * 30 + "px",
      y: y * 30 + "px",
      duration: 3,
      ease: "power2.out"
    });
  });

  // 4. GSAP Scroll Reveals
  gsap.registerPlugin(ScrollTrigger);

  // Reveal Sections
  gsap.from(".split-title", {
    y: 100,
    opacity: 0,
    duration: 1.8,
    ease: weatherEase,
    delay: 0.2
  });

  gsap.from(".hero-subline", {
    y: 40,
    opacity: 0,
    duration: 1.2,
    ease: weatherEase,
    delay: 0.6
  });

  // Council Cards Parallax
  gsap.from(".ghost-card", {
    scrollTrigger: {
      trigger: ".council-section",
      start: "top 80%",
    },
    y: 100,
    opacity: 0,
    stagger: 0.2,
    duration: 1.2,
    ease: weatherEase
  });

  // 5. Focus Lighting (The Briefing Gate)
  const gate = document.querySelector('.briefing-gate');
  gate.addEventListener('mousemove', (e) => {
    const rect = gate.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    gate.style.setProperty('--mouse-x', `${x}px`);
    gate.style.setProperty('--mouse-y', `${y}px`);
  });

  // Initialize lighting at center
  gate.style.setProperty('--mouse-x', `50%`);
  gate.style.setProperty('--mouse-y', `50%`);

});
