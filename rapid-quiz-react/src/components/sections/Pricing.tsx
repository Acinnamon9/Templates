import React from 'react';
import { siteConfig } from '../../config/site';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-xl bg-white">
      <div className="container">
        <div className="mb-xl text-center">
          <h2 className="text-[2.5rem] font-heading font-bold mb-sm text-primary">Upgrade Your Insights</h2>
          <p className="text-secondary text-lg md:text-xl max-w-[600px] mx-auto">
            Free diagnostic included with any paid tier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          {siteConfig.pricing.map((tier, idx) => (
            <div 
              key={idx} 
              className={`pricing-card p-lg rounded-md border flex flex-col transition-all duration-normal hover:border-accent hover:shadow-lg hover:-translate-y-1 relative ${
                tier.popular ? 'bg-white border-accent border-2 scale-105 shadow-xl z-2 md:scale-110' : 'bg-background border-border'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-full text-center">
                  <div className="bg-accent text-white px-4 py-1.5 rounded-full text-[0.75rem] font-bold inline-block uppercase tracking-wider shadow-md">
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              <div className="text-[0.9rem] font-bold text-secondary tracking-widest mb-md uppercase">{tier.name}</div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-5xl font-heading font-bold">${tier.price}</span>
                <span className="text-secondary text-sm">/one-time</span>
              </div>
              <p className="text-secondary text-sm mb-lg">
                {tier.description}
              </p>
              
              <ul className="space-y-3 mb-xl text-left grow">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-sm text-[0.9rem] text-primary">
                    <span className="text-accent font-bold">✓</span> {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-4 rounded-sm font-bold transition-all hover:opacity-90 hover:-translate-y-0.5 ${
                  tier.popular ? 'bg-accent text-white' : 'bg-primary text-white'
                }`}
              >
                {tier.price === "0" ? 'Start Free Assessment' : 'Get Full Report'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
