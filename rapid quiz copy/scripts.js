// ============================================
// INITIALIZATION & MOTION ENGINE
// ============================================

// Initialize Lenis with high-snappiness settings for faster response
const lenis = new Lenis({
  lerp: 0.15,
  smoothWheel: true,
  wheelMultiplier: 1.2,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "power3.out" });

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
  .to(
    ".floating-badge",
    { yPercent: 40, rotate: 5, ease: "none" },
    "-=0.3",
  );

// ============================================
// QUIZ DATA
// ============================================
const quizData = [
  {
    question: "How do you currently get most of your new customers?",
    options: [
      {
        text: "Word-of-mouth or referrals only. Haven't spent on ads yet.",
        points: 1,
      },
      {
        text: "Small paid ads, but results are inconsistent.",
        points: 2,
      },
      {
        text: "Daily content posting across multiple platforms.",
        points: 3,
      },
      {
        text: "Dedicated weekly ad budget with clear tracking.",
        points: 4,
      },
    ],
  },
  {
    question: "How consistent is your marketing activity?",
    options: [
      {
        text: "Starts and stops depending on mood or cash flow.",
        points: 1,
      },
      {
        text: "Try to stay active, but often go weeks without posting.",
        points: 2,
      },
      {
        text: "Generally follow a schedule, though miss deadlines sometimes.",
        points: 3,
      },
      {
        text: "Automated or delegated. Know what goes out daily.",
        points: 4,
      },
    ],
  },
  {
    question: "How much do you know about your marketing data?",
    options: [
      {
        text: "Don't track ROI. Just know if money made money.",
        points: 1,
      },
      { text: "Know clicks, but not which ones convert.", points: 2 },
      {
        text: "Track leads and roughly know where they come from.",
        points: 3,
      },
      {
        text: "Track pixel events, attribution, and customer LTV.",
        points: 4,
      },
    ],
  },
  {
    question: "What does your buy process look like?",
    options: [
      { text: "DMs, contact form, or phone call directly.", points: 1 },
      { text: "Basic landing page, not optimized.", points: 2 },
      {
        text: "Clear offer, landing page, thank-you sequence.",
        points: 3,
      },
      {
        text: "Full funnel with upsells, retargeting, CRM automation.",
        points: 4,
      },
    ],
  },
  {
    question: "What is your current priority right now?",
    options: [
      {
        text: "Figure out if marketing works for my business.",
        points: 1,
      },
      { text: "Need reliable way to generate steady leads.", points: 2 },
      {
        text: "Scale what's working without blowing up budget.",
        points: 3,
      },
      {
        text: "Manage growth without drowning in operations.",
        points: 4,
      },
    ],
  },
];

// Results Configuration
const resultsData = [
  {
    category: "Marketing Beginner",
    emoji: "🎓",
    title: "You're Laying the Foundation",
    summary:
      "You're taking the first steps, but you lack a structured plan. Relying on hope rather than systems makes revenue unpredictable.",
    mistakes: [
      "Chasing too many tactics at once",
      "Ignoring tracking data (flying blind)",
      "Waiting for perfect timing to launch",
    ],
    actionTitle: "Build the basics before spending.",
    actionDesc: "Get our free implementation checklist.",
    ctaText: "Download Zero-to-One Checklist",
    ctaColor: "#1A1A1A",
  },
  {
    category: "Growth Experimenter",
    emoji: "🧪",
    title: "You Have Momentum, But Lack Stability",
    summary:
      "You know marketing works, but rely on random bursts. Need a repeatable process to stop the churn.",
    mistakes: [
      "Turning off campaigns before data gathers",
      "Changing offers constantly instead of testing creative",
      "Treating marketing as art instead of math",
    ],
    actionTitle: "Stop guessing. Start optimizing.",
    actionDesc: "Get our conversion audit template.",
    ctaText: "Download Conversion Template",
    ctaColor: "#B85C38",
  },
  {
    category: "Scaling Marketer",
    emoji: "🚀",
    title: "You're Ready to Grow Faster",
    summary:
      "You have a working engine. Bottlenecked by capacity. Need to systematize execution to handle increased volume.",
    mistakes: [
      "Trying to do everything yourself",
      "Underestimating customer retention needs",
      "Ad fatigue without fresh creative testing",
    ],
    actionTitle: "Systematize to Scale.",
    actionDesc: "Book a revenue audit session.",
    ctaText: "Book Strategy Call",
    ctaColor: "#B85C38",
  },
  {
    category: "Advanced Operator",
    emoji: "💼",
    title: "You Are Building a Machine",
    summary:
      "Your operations are professional-grade. Next challenge is optimization, delegation, and maximizing margin.",
    mistakes: [
      "Stagnation due to lack of innovation",
      "Complex tech stacks slowing teams",
      "Focusing only on revenue vs net profit",
    ],
    actionTitle: "Unlock Enterprise-Level Growth.",
    actionDesc: "Priority access and VIP support.",
    ctaText: "Request VIP Access",
    ctaColor: "#1A1A1A",
  },
];

// State Management
let currentQuestion = 0;
let answers = [];
let userEmail = "";

// DOM Elements
const startQuizBtn = document.getElementById("startQuizBtn");
const quizSection = document.getElementById("quiz");
const questionContainer = document.getElementById("questionContainer");
const progressFill = document.getElementById("progressFill");
const currentQSpan = document.getElementById("currentQ");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const emailGateModal = document.getElementById("emailGateModal");
const resultModal = document.getElementById("resultModal");
const resultContent = document.getElementById("resultContent");

// Initialize Quiz
function initQuiz() {
  renderQuestion();
  updateProgress();
}

// Render Current Question
function renderQuestion() {
  const q = quizData[currentQuestion];

  // Fade out transition (if already rendered)
  const oldContent = questionContainer.children;
  if (oldContent.length > 0) {
    gsap.to(oldContent, {
      duration: 0.3,
      y: -20,
      opacity: 0,
      ease: "power2.in",
      onComplete: () => injectNewQuestion(q),
    });
  } else {
    injectNewQuestion(q);
  }
}

function injectNewQuestion(q) {
  questionContainer.innerHTML = `
          <h2 class="question-title" style="font-size: 1.5rem; margin-bottom: var(--spacing-lg); opacity: 0;">${q.question}</h2>
          ${q.options
            .map(
              (opt, idx) => `
              <div class="question-card" onclick="selectAnswer(${idx})" id="option-${idx}" style="opacity: 0; transform: translateY(20px);">
                  <div class="option-icon">${idx + 1}</div>
                  <span class="option-text">${opt.text}</span>
              </div>
          `,
            )
            .join("")}
      `;

  // Micro-staggered entry
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
  prevBtn.disabled = currentQuestion === 0;

  if (currentQuestion === quizData.length - 1) {
    nextBtn.textContent = "Complete Quiz →";
  } else {
    nextBtn.textContent = "Next →";
  }
}

// Select Answer
function selectAnswer(index) {
  // Remove previous selection styling
  document.querySelectorAll(".question-card").forEach((card) => {
    card.classList.remove("selected");
  });

  // Add selection to clicked
  const selectedCard = document.getElementById(`option-${index}`);
  selectedCard.classList.add("selected");

  // Save answer
  answers[currentQuestion] = index;

  // Auto advance after short delay
  setTimeout(() => {
    goToNextQuestion();
  }, 400);
}

// Go To Next Question
function goToNextQuestion() {
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    renderQuestion();
    updateProgress();
  } else {
    openEmailGate();
  }
}

// Go To Previous Question
function goToPreviousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
    updateProgress();
  }
}

// Update Progress Bar
function updateProgress() {
  const percentage = ((currentQuestion + 1) / quizData.length) * 100;
  progressFill.style.width = `${percentage}%`;
  currentQSpan.textContent = currentQuestion + 1;
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
  userEmail = emailInput.value;

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
    if (answers[idx] !== undefined) {
      totalPoints += q.options[answers[idx]].points;
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
                   class="result-avatar-img" style="opacity: 0;">
              <span class="result-badge" style="opacity: 0;">
                  <span class="result-icon">${result.emoji}</span>
                  ${result.category}
              </span>
          </div>
          <h2 class="result-headline" style="opacity: 0;">${result.title}</h2>
          <p class="result-summary" style="opacity: 0;">${result.summary}</p>

          
          <div class="result-mistakes" style="opacity: 0;">
              <div class="mistake-title">
                  <span style="color: var(--accent);">⚠️</span>
                  Top 3 Revenue Leaks
              </div>
              <ul class="mistake-list">
                  ${result.mistakes
                    .map(
                      (m) => `
                      <li class="mistake-item" style="opacity: 0; transform: translateX(20px);">
                          <span class="mistake-icon">•</span>
                          <span>${m}</span>
                      </li>
                  `,
                    )
                    .join("")}
              </ul>
          </div>
          
          <div class="recommended-action" style="opacity: 0;">
              <div class="action-title">${result.actionTitle}</div>
              <p class="action-desc">${result.actionDesc}</p>
              <div class="action-cta">
                  <a href="#" class="action-btn" style="background: white; color: var(--primary);">
                      <span>${result.ctaText}</span>
                  </a>
              </div>
          </div>
          
          <p class="sent-notice" style="text-align: center; color: var(--secondary); font-size: 0.9rem; opacity: 0;">
              📧 Full report sent to ${userEmail}
          </p>
          
          <div class="reset-link" style="text-align: center; margin-top: var(--spacing-md); opacity: 0;">
              <a href="#" style="color: var(--accent); font-weight: 500;">View Another Result Type</a>
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
    .to(
      ".result-headline",
      { scale: 1, opacity: 1, duration: 0.4 },
      "-=0.2",
    )

    .to(".result-summary", { x: 0, opacity: 1, duration: 0.4 }, "-=0.2")
    .to(".result-mistakes", { opacity: 1, duration: 0.4 }, "-=0.2")
    .to(".mistake-item", { x: 0, opacity: 1, stagger: 0.1 }, "-=0.2")
    .to(
      ".recommended-action",
      { y: 0, opacity: 1, duration: 0.4 },
      "-=0.2",
    )
    .to([".sent-notice", ".reset-link"], { opacity: 1, duration: 0.4 });
}

// Close Result Modal
function closeResultModal() {
  resultModal.classList.remove("active");
  document.body.style.overflow = "";
}

// Event Listeners
startQuizBtn.addEventListener("click", () => {
  quizSection.classList.remove("quiz-hidden");
  quizSection.classList.add("quiz-active");
  window.scrollTo({
    top: quizSection.offsetTop - 80,
    behavior: "smooth",
  });
  initQuiz();
});

prevBtn.addEventListener("click", goToPreviousQuestion);
nextBtn.addEventListener("click", goToNextQuestion);

// FAQ Accordion logic with GSAP smooth height
document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const faqItem = btn.parentElement;
    const answer = faqItem.querySelector(".faq-answer");
    const isOpening = !faqItem.classList.contains("active");

    // Close others
    document.querySelectorAll(".faq-item.active").forEach((item) => {
      if (item !== faqItem) {
        item.classList.remove("active");
        gsap.to(item.querySelector(".faq-answer"), {
          maxHeight: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
      }
    });

    faqItem.classList.toggle("active");

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
      borderColor: "#B85C38",
      duration: 0.3,
      ease: "power2.out",
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      y: 0,
      boxShadow: "0 4px 20px rgba(26, 26, 26, 0.08)",
      borderColor: "#E6E2DA",
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

// Event Listeners for Modal Clicks
emailGateModal.addEventListener("click", (e) => {
  if (e.target === emailGateModal) {
    closeEmailGate();
  }
});

resultModal.addEventListener("click", (e) => {
  if (e.target === resultModal) {
    closeResultModal();
  }
});

// Keyboard Navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeEmailGate();
    closeResultModal();
  }
});

// Page Load Animation: Editorial Reveal
window.addEventListener("load", () => {
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
