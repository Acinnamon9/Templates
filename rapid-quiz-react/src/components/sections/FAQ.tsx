import React, { useState } from 'react';
import { siteConfig } from '../../config/site';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-xl bg-background">
      <div className="container">
        <div className="mb-xl text-center">
          <h2 className="text-[2.5rem] font-heading font-bold text-primary">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-[800px] mx-auto space-y-0">
          {siteConfig.faq.map((item, index) => (
            <div key={index} className="border-b border-border">
              <button 
                className={`w-full flex justify-between items-center py-6 text-left text-[1.25rem] font-bold transition-colors hover:text-accent ${
                  activeIndex === index ? 'text-accent' : 'text-primary'
                }`} 
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                {item.question}
                <span className="text-2xl text-secondary">{activeIndex === index ? '−' : '+'}</span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="pb-6 text-secondary text-[1.05rem] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
