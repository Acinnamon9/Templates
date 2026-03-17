import React from 'react';
import { siteConfig } from '../../../config/site';

interface HeroOverlayProps {
  onStartQuiz: () => void;
  overlayRef: React.RefObject<HTMLDivElement | null>;
}

const HeroOverlay: React.FC<HeroOverlayProps> = ({ onStartQuiz, overlayRef }) => {
  return (
    <div 
      className="hero-initial-overlay absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-20 flex items-center justify-center pointer-events-none text-center" 
      ref={overlayRef}
    >
      <div className="container">
        <div className="hero-content pointer-events-auto max-w-[950px] w-[90%] mx-auto bg-black/45 backdrop-blur-xl p-8 md:p-16 rounded-lg border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] text-white">
          <span className="inline-block bg-primary text-white px-md py-xs rounded-sm text-[0.8rem] font-medium mb-md uppercase tracking-wider">
            FREE DIAGNOSTIC TOOL
          </span>
          <h1 className="hero-title text-[clamp(2.5rem,6vw,4rem)] mb-md font-heading font-bold leading-tight">
            <div className="line-mask overflow-hidden block">
              <span className="block translate-y-[110%]">What's Your</span>
            </div>
            <div className="line-mask overflow-hidden block">
              <span className="block translate-y-[110%] text-accent">Growth Strategy Score?</span>
            </div>
          </h1>
          <p className="hero-subtitle text-lg md:text-xl text-secondary mb-lg max-w-[600px] mx-auto reveal-sub opacity-0 translate-y-5">
            {siteConfig.description}
          </p>
          <div className="flex flex-wrap gap-sm items-center justify-center">
            <button 
              id="startQuizBtn" 
              className="bg-accent text-white px-10 py-[18px] text-[1.05rem] font-semibold rounded-sm flex items-center gap-sm hover:bg-[#9a4a2d] hover:-translate-y-0.5 hover:shadow-lg transition-all" 
              onClick={onStartQuiz}
            >
              Start Free Assessment ↗
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOverlay;
