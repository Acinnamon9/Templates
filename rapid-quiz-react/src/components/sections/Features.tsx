import React, { useEffect } from 'react';
import gsap from 'gsap';
import { siteConfig } from '../../config/site';

const Features: React.FC = () => {
  useEffect(() => {
    gsap.from('.feature-card', {
      scrollTrigger: {
        trigger: '.features-section',
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
    });
  }, []);

  return (
    <section id="how-it-works" className="features-section py-xl bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50">
        <img
          src={siteConfig.assets.featuresBg}
          alt="Motion trails"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container relative z-1">
        <div className="mb-xl text-center">
          <h2 className="text-[2.5rem] font-heading font-bold mb-sm text-primary">Why Take The Diagnostic?</h2>
          <p className="text-secondary text-lg md:text-xl max-w-[600px] mx-auto">
            Most businesses fail because they optimize the wrong things first.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg relative z-10">
          {siteConfig.features.map((feature, idx) => (
            <div key={idx} className="feature-card bg-white p-lg rounded-md border border-border transition-all duration-normal hover:-translate-y-[10px] hover:border-accent hover:shadow-lg">
              <div className="text-[2rem] mb-md">{feature.icon}</div>
              <h3 className="text-[1.25rem] font-heading font-bold mb-sm text-primary">{feature.title}</h3>
              <p className="text-secondary text-[0.95rem]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
