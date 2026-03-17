// --- Configuration ---
const CONFIG = {
  LENIS_LERP: 0.15,
  WHEEL_MULTIPLIER: 1.2,
  GSAP_DEFAULT_EASE: "power3.out",
  FLAIR_BURST_COUNT: 8,
  FLAIR_MAX_ELEMENTS: 40,
  SCROLL_END_GALLERY: "+=150%",
  ACCENT_COLOR: "#B85C38",
  BORDER_COLOR: "#E6E2DA"
};

// Initialize Lenis with high-snappiness settings for faster response
const lenis = new Lenis({
  lerp: CONFIG.LENIS_LERP,
  smoothWheel: true,
  wheelMultiplier: CONFIG.WHEEL_MULTIPLIER,
});

const raf = (time) => {
  lenis.raf(time);
  requestAnimationFrame(raf);
};
requestAnimationFrame(raf);

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, Flip);
gsap.defaults({ ease: CONFIG.GSAP_DEFAULT_EASE });

let flipCtx;

const createBentoTween = () => {
  const galleryElement = document.querySelector("#gallery-8");
  const galleryItems = galleryElement.querySelectorAll(".gallery__item");
  const heroOverlay = document.querySelector(".hero-initial-overlay");

  if (flipCtx) flipCtx.revert();
  galleryElement.classList.remove("gallery--final");

  flipCtx = gsap.context(() => {
    // Initial reveal animation (run once)
    const tlReveal = gsap.timeline();
    tlReveal
      .to(".hero-initial-overlay .line-mask span", {
        y: "0%",
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
      })
      .to(
        ".hero-initial-overlay .reveal-sub",
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.8",
      );

    // Capture final state
    galleryElement.classList.add("gallery--final");
    const flipState = Flip.getState(galleryItems);
    galleryElement.classList.remove("gallery--final");

    const flip = Flip.to(flipState, {
      simple: true,
      ease: "none", // We use scrub for the feel
    });

    const tlMain = gsap.timeline({
      scrollTrigger: {
        trigger: ".gallery-wrap",
        start: "top top",
        end: CONFIG.SCROLL_END_GALLERY,
        scrub: true,
        pin: true,
      },
    });

    // fading out text as we start scrolling
    tlMain.to(
      heroOverlay,
      {
        opacity: 0,
        y: -50,
        duration: 0.2,
      },
      0,
    );

    // Run the Flip animation
    tlMain.add(flip, 0);

    // Brighten on scroll for that premium feel
    tlMain.to(
      galleryElement.querySelectorAll(".gallery__item img"),
      {
        filter: "brightness(1) grayscale(0)",
        duration: 0.5,
        stagger: 0.05,
      },
      0.1,
    );

    return () => gsap.set(galleryItems, { clearProps: "all" });
  });

  return () => {
    if (flipCtx) flipCtx.revert();
    galleryElement.classList.remove("gallery--final");
  };
};

// Start the engine
document.addEventListener("DOMContentLoaded", createBentoTween);
window.addEventListener("resize", createBentoTween);

// Initialize on load variable
let bentoCleanup;

// Background Texture: Slow Breathing Parallax
gsap.to(".hero-bg", {
  x: "5%",
  y: "-5%",
  repeat: -1,
  yoyo: true,
  duration: 8,
  ease: "sine.inOut",
});

// Hero Parallax Orchestration
const heroTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

heroTl
  .to(".hero-bg", { yPercent: 30, ease: "none" })
  .to(".hero-title", { yPercent: -10, ease: "none" }, 0)
  .to(".hero-image-wrapper", { yPercent: 15, ease: "none" }, "-=0.3")
  .to(".floating-badge", { yPercent: 40, rotate: 5, ease: "none" }, "-=0.3");

// Data is now sourced from data.js

// --- State Management ---
const STATE = {
  currentQuestion: 0,
  answers: [],
  userEmail: "",
  flairIndex: 0,
  flairElements: []
};

// Flair (Falling Icons) Animation State
const flairAssets = [
  "https://assets.codepen.io/16327/Revised+Flair.png",
  "https://assets.codepen.io/16327/Revised+Flair-1.png",
  "https://assets.codepen.io/16327/Revised+Flair-2.png",
  "https://assets.codepen.io/16327/Revised+Flair-3.png",
  "https://assets.codepen.io/16327/Revised+Flair-4.png",
  "https://assets.codepen.io/16327/Revised+Flair-5.png",
  "https://assets.codepen.io/16327/Revised+Flair-6.png",
  "https://assets.codepen.io/16327/Revised+Flair-7.png",
  "https://assets.codepen.io/16327/Revised+Flair-8.png",
];

const getFlairWrapper = (idx) => idx % STATE.flairElements.length;

// DOM Elements (Selected after DOM is ready)
let startQuizBtn, quizSection, questionContainer, progressFill, currentQSpan, prevBtn, nextBtn, emailGateModal, resultModal, resultContent, closeEmailBtn, closeResultBtn;

function setupDOMElements() {
  startQuizBtn = document.getElementById("startQuizBtn");
  quizSection = document.getElementById("quiz");
  questionContainer = document.getElementById("questionContainer");
  progressFill = document.getElementById("progressFill");
  currentQSpan = document.getElementById("currentQ");
  prevBtn = document.getElementById("prevBtn");
  nextBtn = document.getElementById("nextBtn");
  emailGateModal = document.getElementById("emailGateModal");
  resultModal = document.getElementById("resultModal");
  resultContent = document.getElementById("resultContent");
  closeEmailBtn = document.getElementById("closeEmailBtn");
  closeResultBtn = document.getElementById("closeResultBtn");
}

// Initialize Quiz
function initQuiz() {
  setupDOMElements();
  setupListeners();
  if (typeof quizData === 'undefined' || !quizData.length) {
    console.error("Quiz data not loaded!");
    return;
  }
  
  // Attach form listener
  const emailForm = document.getElementById('emailForm');
  if (emailForm) {
    emailForm.addEventListener('submit', handleEmailSubmit);
  }

  renderQuestion();
  updateProgress();
}

function initFlairs() {
  if (!quizSection) {
    console.warn("Quiz section not found");
    return;
  }
  
  // Check if already initialized
  if (document.getElementById("flair-container")) return;
  
  const container = document.createElement("div");
  container.id = "flair-container";
  (quizSection || document.getElementById("quiz")).appendChild(container); // ✅ Append to quizSection for local absolute positioning
  
  for (let i = 0; i < CONFIG.FLAIR_MAX_ELEMENTS; i++) {
    const img = document.createElement("img");
    img.className = "flair";
    img.src = flairAssets[i % flairAssets.length];
    container.appendChild(img);
    STATE.flairElements.push(img);
  }
}

/**
 * Play a GSAP animation on a specific flair element (Demo Aligned)
 */
function playFlairAnimation(shape, x, y) {
  let tl = gsap.timeline();
  
  gsap.set(shape, {
    clearProps: "all",
    opacity: 1,
    left: x,
    top: y,
    xPercent: -50,
    yPercent: -50,
  });
  
  tl.from(shape, {
    opacity: 0,
    scale: 0,
    ease: "elastic.out(1,0.3)",
  })
  .to(shape, {
    rotation: "random([-360, 360])",
  }, "<")
  .to(shape, {
    y: "120vh",
    ease: "back.in(.4)",
    duration: 1,
  }, 0);
}

// Test function - for manual verification
window.testFlair = () => {
  if (STATE.flairElements.length > 0) {
    triggerFlairBurst(window.innerWidth / 2, window.innerHeight / 2);
    console.log("Flair test triggered!");
  } else {
    console.warn("Flair elements not initialized yet.");
  }
};

/**
 * Trigger a burst of flairs from a specific coordinate
 */
function triggerFlairBurst(x, y) {
  const burstCount = CONFIG.FLAIR_BURST_COUNT;
  for (let i = 0; i < burstCount; i++) {
    const wrappedIdx = getFlairWrapper(STATE.flairIndex);
    const img = STATE.flairElements[wrappedIdx];
    
    // Add some random offset to the burst origin
    const offsetX = (Math.random() - 0.5) * 40;
    const offsetY = (Math.random() - 0.5) * 40;
    
    playFlairAnimation(img, x + offsetX, y + offsetY);
    STATE.flairIndex++;
  }
}

// Render Current Question
function renderQuestion() {
  const q = quizData[STATE.currentQuestion];
  if (!q) return;

  const oldContent = questionContainer.children;
  
  if (oldContent.length > 0) {
    gsap.to(oldContent, {
      duration: 0.3,
      y: -20,
      opacity: 0,
      ease: "power2.in",
      stagger: 0.05,
      onComplete: () => injectNewQuestion(q),
    });
  } else {
    injectNewQuestion(q);
  }
}

function injectNewQuestion(q) {
  questionContainer.innerHTML = `
    <h2 class="question-title initial-hidden">${q.question}</h2>
    ${q.options.map(
        (opt, idx) => `
        <div class="question-card initial-hidden" data-index="${idx}" id="option-${idx}" role="radio" aria-checked="false">
            <div class="option-icon">${idx + 1}</div>
            <span class="option-text">${opt.text}</span>
        </div>
    `,
      )
      .join("")}
  `;

  // Staggered entry
  gsap.to(questionContainer.querySelector(".question-title"), {
    duration: 0.4,
    opacity: 1,
    y: 0,
    ease: "power3.out",
  });

  gsap.to(questionContainer.querySelectorAll(".question-card"), {
    duration: 0.4,
    opacity: 1,
    y: 0,
    stagger: 0.08,
    ease: "back.out(1.2)",
  });

  // Update navigation state
  prevBtn.disabled = STATE.currentQuestion === 0;
  nextBtn.textContent = STATE.currentQuestion === quizData.length - 1 ? "Complete Quiz →" : "Next →";
}

function setupListeners() {
  if (!questionContainer) return;

  // Handle Question clicks (Event Delegation)
  questionContainer.addEventListener("click", (e) => {
    const card = e.target.closest(".question-card");
    if (card) {
      const index = parseInt(card.dataset.index);
      selectAnswer(index);
    }
  });

  // Handle Hover Animation (Event Delegation)
  questionContainer.addEventListener("mouseover", (e) => {
    const card = e.target.closest(".question-card");
    if (card && !card.classList.contains("animating")) {
      const rect = card.getBoundingClientRect();
      const quizRect = quizSection.getBoundingClientRect();
      
      // Calculate position relative to the quiz container
      const centerX = rect.left - quizRect.left + rect.width / 2;
      const centerY = rect.top - quizRect.top + rect.height / 2;
      
      triggerFlairBurst(centerX, centerY);
      
      card.classList.add("animating");
      setTimeout(() => card.classList.remove("animating"), 600);
    }
  });

  // Modal Close Buttons
  if (closeEmailBtn) closeEmailBtn.addEventListener("click", closeEmailGate);
  if (closeResultBtn) closeResultBtn.addEventListener("click", closeResultModal);

  // Footer Legal Buttons (Event Delegation)
  const footerLegal = document.querySelector(".legal-buttons");
  if (footerLegal) {
    footerLegal.addEventListener("click", (e) => {
      const btn = e.target.closest(".legal-btn");
      if (btn) {
        const type = btn.dataset.legal;
        const messages = {
          privacy: "Privacy Policy",
          terms: "Terms of Service",
          cookie: "Cookie Policy",
          support: "Contact Support"
        };
        alert(messages[type] || "Legal Information");
      }
    });
  }
}

// Select Answer
function selectAnswer(index) {
  document.querySelectorAll(".question-card").forEach((card) => {
    const isSelected = parseInt(card.dataset.index) === index;
    card.classList.toggle("selected", isSelected);
    card.setAttribute("aria-checked", isSelected);
  });

  STATE.answers[STATE.currentQuestion] = index;

  // Auto advance
  setTimeout(goToNextQuestion, 400);
}

// Navigation
function goToNextQuestion() {
  if (STATE.currentQuestion < quizData.length - 1) {
    STATE.currentQuestion++;
    renderQuestion();
    updateProgress();
  } else {
    openEmailGate();
  }
}

function goToPreviousQuestion() {
  if (STATE.currentQuestion > 0) {
    STATE.currentQuestion--;
    renderQuestion();
    updateProgress();
  }
}

// Update Progress Bar
function updateProgress() {
  if (!quizData) return;
  const percentage = ((STATE.currentQuestion + 1) / quizData.length) * 100;
  progressFill.style.width = `${percentage}%`;
  currentQSpan.textContent = STATE.currentQuestion + 1;
}

// Open Email Gate
function openEmailGate() {
  emailGateModal.classList.add("active");
  document.body.style.overflow = "hidden";

  // Premium modal entry
  gsap.from("#emailGateModal .modal-content", {
    duration: 0.5,
    scale: 0.9,
    opacity: 0,
    ease: "elastic.out(1, 0.75)",
  });
}

// Close Email Gate
function closeEmailGate() {
  emailGateModal.classList.remove("active");
  document.body.style.overflow = "";
}

// Handle Email Submit
function handleEmailSubmit(e) {
  e.preventDefault();

  const emailInput = document.getElementById("emailInput");
  STATE.userEmail = emailInput.value;

  // Simulate API submission
  const submitBtn = e.target.querySelector('button[type="submit"]');
  submitBtn.textContent = "Processing...";
  submitBtn.disabled = true;

  setTimeout(() => {
    calculateAndShowResults();
    closeEmailGate();
  }, 1500);
}

// Calculate Results
function calculateAndShowResults() {
  // Count total points
  let totalPoints = 0;
  let maxPoints = quizData.length * 4;

  quizData.forEach((q, idx) => {
    if (STATE.answers[idx] !== undefined) {
      totalPoints += q.options[STATE.answers[idx]].points;
    }
  });

  // Determine result category
  let resultIndex;
  const percentage = totalPoints / maxPoints;

  if (percentage <= 0.4) {
    resultIndex = 0; // Beginner
  } else if (percentage <= 0.6) {
    resultIndex = 1; // Experimenter
  } else if (percentage <= 0.8) {
    resultIndex = 2; // Scaling
  } else {
    resultIndex = 3; // Advanced
  }

  showResults(resultIndex, Math.round(percentage * 100));
}

// Show Results Modal
function showResults(resultIndex, score) {
  const result = resultsData[resultIndex];

  resultContent.innerHTML = `
          <div class="result-avatar-container">
              <img src="https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439be070c582337626116.png" 
                   alt="Founder mindset" 
                   class="result-avatar-img">
          <span class="result-badge initial-hidden">
              <span class="result-icon">${result.emoji}</span>
              ${result.category}
          </span>
      </div>
      <h2 class="result-headline initial-hidden">${result.title}</h2>
      <p class="result-summary initial-hidden">${result.summary}</p>

      
      <div class="result-mistakes initial-hidden">
          <div class="mistake-title">
              <span style="color: var(--accent);">⚠️</span>
              Top 3 Revenue Leaks
          </div>
          <ul class="mistake-list">
              ${result.mistakes
                .map(
                  (m) => `
                  <li class="mistake-item initial-hidden">
                      <span class="mistake-icon">•</span>
                      <span>${m}</span>
                  </li>
              `,
                )
                .join("")}
          </ul>
      </div>
      
      <div class="recommended-action initial-hidden">
          <div class="action-title">${result.actionTitle}</div>
          <p class="action-desc">${result.actionDesc}</p>
          <div class="action-cta">
              <a href="#" class="action-btn">
                  <span>${result.ctaText}</span>
              </a>
          </div>
      </div>
      
      <p class="sent-notice">
          📧 Full report sent to ${STATE.userEmail}
      </p>
      
      <div class="reset-link">
          <a href="#">View Another Result Type</a>
      </div>
      `;

  resultModal.classList.add("active");
  document.body.style.overflow = "hidden";

  // Result Cascade Animation
  const tl = gsap.timeline();
  tl.fromTo(
    "#resultModal .result-modal",
    { clipPath: "polygon(0 0, 0% 0, 0% 100%, 0% 100%)" },
    {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      duration: 0.6,
      ease: "power2.out",
    },
  )
    .to(
      ".result-avatar-img",
      { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
      "-=0.2",
    )
    .to(".result-badge", { y: 0, opacity: 1, duration: 0.4 }, "-=0.3")
    .to(".result-headline", { scale: 1, opacity: 1, duration: 0.4 }, "-=0.2")

    .to(".result-summary", { x: 0, opacity: 1, duration: 0.4 }, "-=0.2")
    .to(".result-mistakes", { opacity: 1, duration: 0.4 }, "-=0.2")
    .to(".mistake-item", { x: 0, opacity: 1, stagger: 0.1 }, "-=0.2")
    .to(".recommended-action", { y: 0, opacity: 1, duration: 0.4 }, "-=0.2")
    .to([".sent-notice", ".reset-link"], { opacity: 1, duration: 0.4 });
}

// --- Modal Click Handlers ---
const handleModalOutsideClick = (modal, closeFn) => (e) => {
  if (e.target === modal) closeFn();
};

if (emailGateModal) emailGateModal.addEventListener("click", handleModalOutsideClick(emailGateModal, closeEmailGate));
if (resultModal) resultModal.addEventListener("click", handleModalOutsideClick(resultModal, closeResultModal));

// Keyboard Navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeEmailGate();
    closeResultModal();
  }
});

// Event Listeners for Nav
if (startQuizBtn) {
  startQuizBtn.addEventListener("click", () => {
    if (typeof lenis !== 'undefined') {
      lenis.scrollTo("#quiz", { 
        offset: -80,
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    } else {
      const offsetTop = quizSection.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  });
}

if (prevBtn) prevBtn.addEventListener("click", goToPreviousQuestion);
if (nextBtn) nextBtn.addEventListener("click", goToNextQuestion);

// Close Result Modal
function closeResultModal() {
  resultModal.classList.remove("active");
  document.body.style.overflow = "";
}

// Auto-initialize Quiz on Scroll
ScrollTrigger.create({
  trigger: "#quiz",
  start: "top 80%",
  onEnter: () => {
    initQuiz();
    initFlairs();
  },
  once: true
});

// Fallback initialization if already past the point
window.addEventListener("load", () => {
  if (window.scrollY > 0) {
    initQuiz();
    initFlairs();
  }
});

// FAQ Accordion logic
document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const faqItem = btn.parentElement;
    const answer = faqItem.querySelector(".faq-answer");
    const isOpening = !faqItem.classList.contains("active");

    // Close all other active FAQ items and reset their aria-expanded
    document.querySelectorAll(".faq-item.active").forEach((item) => {
      if (item !== faqItem) {
        item.classList.remove("active");
        item.querySelector(".faq-question").setAttribute("aria-expanded", "false");
        gsap.to(item.querySelector(".faq-answer"), {
          maxHeight: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
      }
    });

    faqItem.classList.toggle("active");
    btn.setAttribute("aria-expanded", isOpening);
    gsap.to(answer, {
      maxHeight: isOpening ? answer.scrollHeight + 40 : 0,
      duration: 0.4,
      ease: "power2.inOut",
    });
  });
});

// Feature Cards: Hover Lift + Shadow Depth
document.querySelectorAll(".feature-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      y: -12,
      boxShadow: "0 15px 45px rgba(26, 26, 26, 0.12)",
      borderColor: CONFIG.ACCENT_COLOR,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      y: 0,
      boxShadow: "0 4px 20px rgba(26, 26, 26, 0.08)",
      borderColor: CONFIG.BORDER_COLOR,
      duration: 0.3,
      ease: "power2.in",
    });
  });
});

// Medium Zoom for images
mediumZoom(".hero-image");

// Stat Numbers: Count-Up on Scroll
const stats = [
  { el: ".stat-value", value: 12500, suffix: "+" },
  { el: ".stat-value", index: 1, value: 85, suffix: "%" },
  { el: ".stat-value", index: 2, value: 4.9, suffix: "★", decimals: 1 },
];

stats.forEach((stat) => {
  const target = document.querySelectorAll(stat.el)[stat.index || 0];
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        const countUpAnim = new countUp.CountUp(target, stat.value, {
          duration: 2,
          decimalPlaces: stat.decimals || 0,
          suffix: stat.suffix,
          useGrouping: true,
        });
        if (!countUpAnim.error) {
          countUpAnim.start();
        }
        observer.disconnect();
      }
    },
    { threshold: 0.5 },
  );

  observer.observe(target);
});

// --- Global Initializations ---
mediumZoom(".hero-image");

// Page Load Animation: Editorial Reveal & Bento Init
window.addEventListener("load", () => {
  // Initialize Bento Gallery
  bentoCleanup = createBentoTween();
  
  // initFlairs() removed from here - now triggered by ScrollTrigger

  const masterTl = gsap.timeline();

  masterTl
    .to(".line-mask span", {
      y: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power4.out",
    })
    .to(
      ".hero-subtitle.reveal-sub",
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.8",
    )
    .from(
      ".hero-image-wrapper",
      {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.8",
    );
});

// Re-initialize Bento on resize
window.addEventListener("resize", () => {
  if (bentoCleanup) bentoCleanup();
  ScrollTrigger.getAll().forEach((t) => t.kill());
  bentoCleanup = createBentoTween();
  ScrollTrigger.refresh();
});
