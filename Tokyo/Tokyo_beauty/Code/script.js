const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const cursor = document.getElementById("cursor");
const follower = document.getElementById("follower");

let currentIndex = 0;
let isAnimating = false;

// 1. Inertial Scroll Physics (Lenis)
const lenis = new Lenis({
  duration: 1.8,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

const weatherEase = "cubic-bezier(0.23, 1, 0.75, 1)";
const motionRevealTime = 1.2;
const motionMicroTime = 0.24;

// 2. Custom Cursor (Architecture of the Almost)
document.addEventListener("mousemove", (e) => {
  gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1, ease: "power2.out" });
  gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.6, ease: weatherEase });
});

// 3. Meteorological Motion (Ken Burns Drift)
function initKenBurns() {
  slides.forEach((slide) => {
    const img = slide.querySelector("img");
    gsap.to(img, {
      scale: 1.15,
      x: "random(-40, 40)",
      y: "random(-40, 40)",
      duration: 25,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  });
}

// 4. Temporal Debt (The Page Remembers)
function applyTemporalDebt(index) {
  const slideId = `slide-visited-${index}`;
  localStorage.setItem(slideId, "true");
  
  // Apply visual residue to visited slide
  const slide = slides[index];
  slide.style.filter = "sepia(0.1) contrast(1.05)";
}

function checkTemporalDebt() {
  slides.forEach((slide, index) => {
    if (localStorage.getItem(`slide-visited-${index}`)) {
      slide.classList.add("visited-residue");
    }
  });
}

// 5. Threshold Transitions (Meteorological Curve)
// weatherEase is now defined globally above

function gotoSlide(index, direction) {
  if (isAnimating) return;
  isAnimating = true;

  const currentSlide = slides[currentIndex];
  const nextSlide = slides[index];
  
  const tl = gsap.timeline({
    onComplete: () => {
      currentSlide.classList.remove("active");
      isAnimating = false;
      currentIndex = index;
      applyTemporalDebt(index);
    }
  });

  // Outbound
  tl.to(currentSlide.querySelector(".content-wrap"), { 
    y: direction === "next" ? -30 : 30, 
    opacity: 0, 
    duration: 0.8, 
    ease: weatherEase 
  }, 0);
  
  tl.to(currentSlide.querySelector(".visual-wrap"), { 
    clipPath: direction === "next" ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)", 
    duration: 1.2, 
    ease: weatherEase 
  }, 0.1);

  // Inbound
  tl.set(nextSlide, { opacity: 1 }, 0);
  nextSlide.classList.add("active");

  tl.fromTo(nextSlide.querySelector(".visual-wrap"), 
    { clipPath: direction === "next" ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)" },
    { clipPath: "inset(0 0% 0 0)", duration: 1.4, ease: weatherEase }, 0.3
  );

  tl.fromTo(nextSlide.querySelector(".content-wrap"),
    { y: direction === "next" ? 30 : -30, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.2, ease: weatherEase }, 0.7
  );
}

// 6. ScrollTrigger: Archaeological Reveals
gsap.registerPlugin(ScrollTrigger);

function initScrollAnims() {
  // Kinetic Lintel (Parallax Text - Job 2)
  gsap.to(".manifesto-quote", {
    scrollTrigger: {
      trigger: ".lintel-section",
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    },
    y: -100,
    ease: "none"
  });

  // Reveal: 1200ms clip-path/transform sustain
  gsap.utils.toArray(".lintel-section, .memory-item, .sanctuary-section, .ritual-step, .ghost-card, .accordion-item, .artifact-card, .witness-hero, .conversion-section").forEach((section) => {
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

  // Echoes Watermark Parallax
  gsap.to(".echoes-watermark", {
    scrollTrigger: {
      trigger: ".echoes-section",
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    },
    x: -100,
    ease: "none"
  });

  // Voyage Counter Animation
  const voyages = document.getElementById('voyages');
  if (voyages) {
    ScrollTrigger.create({
      trigger: voyages,
      onEnter: () => {
        let count = { val: 0 };
        gsap.to(count, {
          val: 429,
          duration: 3,
          ease: "power2.out",
          onUpdate: () => {
            voyages.innerText = `${Math.floor(count.val).toString().padStart(3, '0')},429 VOYAGES ARCHIVED`;
          }
        });
      }
    });
  }

  // Accordion Logic for The Oracle
  const accordions = document.querySelectorAll('.accordion-item');
  accordions.forEach(acc => {
    const trigger = acc.querySelector('.accordion-trigger');
    trigger.addEventListener('click', () => {
      const isActive = acc.classList.contains('active');
      accordions.forEach(a => a.classList.remove('active')); // Close others
      if (!isActive) acc.classList.add('active'); // Open clicked if it wasn't active
    });
  });

  // Memory Item Blur Reveal (Constraint #7)
  gsap.utils.toArray(".memory-media img").forEach((img) => {
    gsap.to(img, {
      scrollTrigger: {
        trigger: img,
        start: "top 90%",
        end: "bottom 10%",
        scrub: true,
      },
      filter: "grayscale(0) blur(0px)",
      scale: 1.05
    });
  });
}

// Event Listeners
nextBtn.addEventListener("click", () => gotoSlide((currentIndex + 1) % slides.length, "next"));
prevBtn.addEventListener("click", () => gotoSlide((currentIndex - 1 + slides.length) % slides.length, "prev"));

window.addEventListener("load", () => {
  checkTemporalDebt();
  initKenBurns();
  initScrollAnims();
  
  gsap.from(".logo, .nav-links a", {
    y: -10,
    opacity: 0,
    stagger: 0.1,
    duration: 1.2,
    ease: weatherEase
  });
});

// Capture Form: Structured Submission (Constraint #8)
const captureForm = document.querySelector('.capture-form');
captureForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = document.querySelector('.btn-submit');
  
  // Forgiving Click Interaction
  gsap.to(btn, {
    backgroundColor: '#e83f43',
    scale: 0.98,
    duration: 0.12,
    yoyo: true,
    repeat: 1,
    ease: "power2.out",
    onComplete: () => {
      alert("Coordinates archived. The memory persists.");
      captureForm.reset();
    }
  });
});

// 7. The Sound of the Void (Generative Atmospheric Engine)
let audioCtx;
let noiseNode;
let gainNode;
let isAudioActive = false;

function initAudio() {
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  
  // Create Brownian Noise (Softer than White Noise, like distant wind/rain)
  const bufferSize = 4096;
  let lastOut = 0.0;
  
  noiseNode = audioCtx.createScriptProcessor(bufferSize, 1, 1);
  noiseNode.onaudioprocess = (e) => {
    const output = e.outputBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      // Brownian integration: output = (lastOut + (0.02 * white)) / 1.02
      let out = (lastOut + (0.02 * white)) / 1.02;
      output[i] = out * 0.15; // Low intensity
      lastOut = out;
    }
  };

  gainNode = audioCtx.createGain();
  gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
  
  noiseNode.connect(gainNode);
  gainNode.connect(audioCtx.destination);
}

const audioToggle = document.getElementById('audio-toggle');
audioToggle.addEventListener('click', () => {
  if (!audioCtx) initAudio();
  
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  isAudioActive = !isAudioActive;
  audioToggle.classList.toggle('active', isAudioActive);
  
  // Smooth Crossfade using the weather curve
  const targetGain = isAudioActive ? 0.3 : 0;
  gsap.to(gainNode.gain, {
    value: targetGain,
    duration: 1.5,
    ease: weatherEase
  });
});
