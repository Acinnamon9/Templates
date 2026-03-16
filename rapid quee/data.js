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
