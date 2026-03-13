document.addEventListener("DOMContentLoaded", () => {
  // 1. Lenis Smooth Scrolling
  const lenis = new window.Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Bind GSAP ScrollTrigger to Lenis
  gsap.registerPlugin(ScrollTrigger);
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0, 0);

  // Token definition for eases
  const weatherEase = "cubic-bezier(0.23, 1, 0.75, 1)";

  // 2. Custom Cursor Logic
  const cursor = document.querySelector('.custom-cursor');
  const follower = document.querySelector('.cursor-follower');
  
  // Custom Magnetism Interaction
  const magnets = document.querySelectorAll('.btn-submit, .accordion-trigger');
  
  document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
    gsap.to(follower, { x: e.clientX - 16, y: e.clientY - 16, duration: 0.5, ease: weatherEase });
  });

  // 3. Scroll Reveals
  gsap.utils.toArray(".lintel-content, .memory-column-left, .artifact-card, .ritual-step, .ghost-card, .accordion-item").forEach((section) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 40,
      duration: 1.2,
      stagger: 0.1,
      ease: weatherEase
    });
  });

  // Parallax Lintel
  gsap.to(".manifesto-quote", {
    scrollTrigger: {
      trigger: ".lintel-section",
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    },
    y: -80,
    ease: "none"
  });

  // Typographic Masking Parallax
  gsap.to(".echoes-watermark", {
    scrollTrigger: {
      trigger: ".echoes-section",
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    },
    x: -150,
    ease: "none"
  });

  // Temporal Decoupling on Mechanism
  const artifactCard = document.getElementById('mechanism-card');
  if (artifactCard) {
    const img = artifactCard.querySelector('img');
    artifactCard.addEventListener('mousemove', (e) => {
      const rect = artifactCard.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      
      gsap.to(img, {
        x: (x * -40) - 5 + "%",
        y: (y * -40) - 5 + "%",
        duration: 0.8,
        ease: "power2.out"
      });
    });
    
    artifactCard.addEventListener('mouseleave', () => {
      gsap.to(img, {
        x: "-5%",
        y: "-5%",
        duration: 1.2,
        ease: weatherEase
      });
    });
  }

  // Focus Lighting on Final Witness
  const witnessHero = document.querySelector('.witness-hero');
  if (witnessHero) {
    witnessHero.addEventListener('mousemove', (e) => {
      const rect = witnessHero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      witnessHero.style.setProperty('--mouse-x', `${x}px`);
      witnessHero.style.setProperty('--mouse-y', `${y}px`);
    });
  }

  // FAQ Accordion
  const accordions = document.querySelectorAll('.accordion-item');
  accordions.forEach(acc => {
    const trigger = acc.querySelector('.accordion-trigger');
    trigger.addEventListener('click', () => {
      const isActive = acc.classList.contains('active');
      accordions.forEach(a => a.classList.remove('active'));
      if (!isActive) acc.classList.add('active');
    });
  });

});
