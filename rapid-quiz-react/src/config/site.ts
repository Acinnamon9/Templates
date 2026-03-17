export const siteConfig = {
  name: "Growth Diagnostic",
  description: "Understand where your growth engine is broken in 60 seconds.",
  links: {
    howItWorks: "#how-it-works",
    results: "#results",
    pricing: "#pricing",
    faq: "#faq",
  },
  assets: {
    logo: "📊",
    quizAtmosphere: "https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439be070c58e28e626115.png",
    heroImages: [
      "https://assets.codepen.io/16327/portrait-pattern-1.jpg",
      "https://assets.codepen.io/16327/portrait-image-12.jpg",
      "https://assets.codepen.io/16327/portrait-image-8.jpg",
      "https://assets.codepen.io/16327/portrait-pattern-2.jpg",
      "https://assets.codepen.io/16327/portrait-image-4.jpg",
      "https://assets.codepen.io/16327/portrait-image-3.jpg",
      "https://assets.codepen.io/16327/portrait-pattern-3.jpg",
      "https://assets.codepen.io/16327/portrait-image-1.jpg"
    ],
    featuresBg: "https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439bebfc81f54f4f24807.png"
  },
  features: [
    {
      icon: "🎯",
      title: "Precision Diagnosis",
      description: "Identify exactly which lever isn't pulling and where your biggest revenue leaks are hiding."
    },
    {
      icon: "⚡",
      title: "Instant Action Plan",
      description: "Get prioritized recommendations you can implement immediately—no vague advice included."
    },
    {
      icon: "📈",
      title: "Benchmark Against Peers",
      description: "See how your growth maturity compares to other founders at your stage."
    }
  ],
  testimonials: [
    {
      stars: 5,
      text: "This diagnostic exposed the one bottleneck I was blind to. Implemented their recommendation and saw 23% increase in qualified leads within 3 weeks.",
      author: "Sarah Kim",
      role: "Founder, ScaleUp Co.",
      initials: "SK"
    },
    {
      stars: 5,
      text: "Finally, a framework that speaks to actual business mechanics, not fluff. The scoring system helped me prioritize what mattered most.",
      author: "Marcus Rivera",
      role: "CEO, GrowthLabs",
      initials: "MR"
    }
  ],
  pricing: [
    {
      name: "Strategy Scan",
      price: "0",
      description: "Quick identification of high-level bottlenecks.",
      features: ["Full 60-second diagnostic", "Instant score card", "Top 3 priority leaks", "Email report"]
    },
    {
      name: "Optimization Plan",
      price: "199",
      description: "Step-by-step roadmap to fix your core metrics.",
      popular: true,
      features: ["Everything in Strategy Scan", "Tactical fix guide", "Platform benchmarks", "1:1 Strategy debrief"]
    },
    {
      name: "Full Audit",
      price: "950",
      description: "Deep dive into your entire measurement stack.",
      features: ["Hands-on GTM review", "Server-side tracking setup", "Conversion API audit", "Lifetime access to updates"]
    }
  ],
  faq: [
    {
      question: "How long does the assessment take?",
      answer: "The diagnostic is designed to be completed in under 60 seconds. We focus on high-impact strategic questions."
    },
    {
      question: "Will I get my results immediately?",
      answer: "Yes! Once you complete the quiz and enter your email, you'll see your instant breakdown and receive a copy via email."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use industry-standard encryption and never sell your diagnostic data to third parties."
    }
  ]
};
