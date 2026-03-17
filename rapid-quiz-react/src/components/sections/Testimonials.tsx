import React from 'react';
import { siteConfig } from '../../config/site';

const Testimonials: React.FC = () => {
  return (
    <section className="py-xl bg-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-15">
        <img
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2000"
          alt="Founders vision"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-1">
        <div className="mb-xl text-center">
          <h2 className="text-[2.5rem] font-heading font-bold mb-sm text-white">
            Trusted by 12,500+ Founders
          </h2>
          <p className="text-secondary text-lg md:text-xl max-w-[600px] mx-auto">
            Real insights that led to real growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg relative z-10">
          {siteConfig.testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-md p-lg rounded-md border border-white/10">
              <div className="text-accent mb-sm">{'★'.repeat(testimonial.stars)}</div>
              <p className="text-white text-[1.1rem] italic mb-lg">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-sm">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="text-white font-bold mb-[2px]">{testimonial.author}</h4>
                  <p className="text-secondary text-[0.85rem]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
