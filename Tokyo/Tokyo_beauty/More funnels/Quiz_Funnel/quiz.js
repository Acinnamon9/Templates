document.addEventListener("DOMContentLoaded", () => {
  const weatherEase = "cubic-bezier(0.23, 1, 0.75, 1)";
  
  // Custom Cursor
  const cursor = document.querySelector('.custom-cursor');
  const follower = document.querySelector('.cursor-follower');
  
  document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
    gsap.to(follower, { x: e.clientX - 16, y: e.clientY - 16, duration: 0.5, ease: weatherEase });
  });

  // Temporal Decoupling (Global Drifting Background)
  const bg = document.querySelector('.drifting-bg');
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) - 0.5;
    const y = (e.clientY / window.innerHeight) - 0.5;
    
    gsap.to(bg, {
      x: (x * -20) - 5 + "%",
      y: (y * -20) - 5 + "%",
      duration: 2,
      ease: "power2.out"
    });
  });

  // --- 2. THE BUSINESS ENGINE ---

  // Funnel Telemetry (Analytics Hooks)
  function logEvent(action, details = {}) {
    const timestamp = new Date().toISOString();
    const eventData = { action, timestamp, ...details };
    console.log(`[TELEMETRY]`, eventData);
    // In production, this would be an API call to GA4, Mixpanel, etc.
  }

  // Session Persistence (LocalStorage)
  function saveSession() {
    localStorage.setItem('aura_quiz_step', currentStep);
    logEvent('session_saved', { step: currentStep });
  }

  function checkSession() {
    const savedStep = localStorage.getItem('aura_quiz_step');
    if (savedStep && savedStep > 0) {
      logEvent('session_detected', { step: savedStep });
      createResumePrompt(savedStep);
    }
  }

  function createResumePrompt(step) {
    const hookContent = steps[0].querySelector('.step-content');
    const resumeBtn = document.createElement('button');
    resumeBtn.className = 'resume-prompt';
    resumeBtn.textContent = `Resume from Question ${step}`;
    resumeBtn.onclick = () => {
      currentStep = parseInt(step) - 1;
      nextStep();
      resumeBtn.remove();
    };
    hookContent.appendChild(resumeBtn);
  }

  // Psychological Social Proof (Notifications)
  const locations = ["Tokyo", "Kyoto", "Osaka", "London", "New York", "Paris"];
  const actions = ["discovered their protocol", "calculated their baseline", "matched a formulation"];
  
  function triggerSocialProof() {
    const popup = document.createElement('div');
    popup.className = 'notification-popup';
    const location = locations[Math.floor(Math.random() * locations.length)];
    const action = actions[Math.floor(Math.random() * actions.length)];
    
    popup.innerHTML = `
      <div class="notif-dot"></div>
      <div class="notif-text">Someone in <b>${location}</b> just ${action}...</div>
    `;
    
    document.body.appendChild(popup);
    setTimeout(() => popup.classList.add('active'), 100);
    
    setTimeout(() => {
      popup.classList.remove('active');
      setTimeout(() => popup.remove(), 800);
    }, 5000);
  }

  // Start social proof loop
  setInterval(triggerSocialProof, 15000); // Trigger every 15s

  // --- EXISTING LOGIC ENHANCED ---

  // State Machine logic
  let currentStep = 0;
  const totalQuestions = 3; 
  const steps = document.querySelectorAll('.quiz-step');
  const progressBar = document.querySelector('.progress-bar');
  
  checkSession();

  window.nextStep = function() {
    const current = steps[currentStep];
    const nextStepIndex = currentStep + 1;
    const next = steps[nextStepIndex];
    
    logEvent('quiz_progress', { from: currentStep, to: nextStepIndex });

    if (nextStepIndex > 0 && nextStepIndex <= totalQuestions) {
       const progress = (nextStepIndex / totalQuestions) * 100;
       progressBar.style.width = progress + "%";
    }

    gsap.to(current.querySelector('.step-content'), {
      x: -50,
      opacity: 0,
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => {
        current.classList.remove('active');
        current.style.pointerEvents = "none";
        
        next.classList.add('active');
        next.style.pointerEvents = "auto";
        
        gsap.fromTo(next.querySelector('.step-content'), 
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: weatherEase }
        );
        
        currentStep = nextStepIndex;
        saveSession();
      }
    });
  };

  window.beginAnalysis = function() {
    logEvent('analysis_threshold_reached');
    nextStep(); 
    
    const loaderText = document.getElementById('loader-text');
    const texts = [
      "Analyzing Barrier Metrics...",
      "Cross-referencing Environment exposure...",
      "Synthesizing Formulation Blueprint..."
    ];
    
    let textIndex = 0;
    const textInterval = setInterval(() => {
      textIndex++;
      if (textIndex < texts.length) {
        gsap.to(loaderText, { opacity: 0, duration: 0.3, onComplete: () => {
          loaderText.textContent = texts[textIndex];
          gsap.to(loaderText, { opacity: 1, duration: 0.3 });
        }});
      } else {
        clearInterval(textInterval);
        setTimeout(() => {
           logEvent('gate_reached');
           nextStep(); 
           initFocusLighting();
        }, 800);
      }
    }, 1500);
  };

  function initFocusLighting() {
    const gateStep = document.querySelector('.final-witness-step');
    gateStep.addEventListener('mousemove', (e) => {
      gateStep.style.setProperty('--mouse-x', `${e.clientX}px`);
      gateStep.style.setProperty('--mouse-y', `${e.clientY}px`);
    });
    gateStep.style.setProperty('--mouse-x', `${window.innerWidth/2}px`);
    gateStep.style.setProperty('--mouse-y', `${window.innerHeight/2}px`);
  }

});
