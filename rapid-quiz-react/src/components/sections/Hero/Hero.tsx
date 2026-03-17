import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/all';
import HeroOverlay from './HeroOverlay';
import BentoGallery from './BentoGallery';
import { siteConfig } from '../../../config/site';

gsap.registerPlugin(ScrollTrigger, Flip);

const Hero: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const heroOverlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!galleryRef.current || !heroOverlayRef.current) return;

    const galleryElement = galleryRef.current;
    const galleryItems = galleryElement.querySelectorAll('.gallery__item');
    const heroOverlay = heroOverlayRef.current;

    const ctx = gsap.context(() => {
      // Reveal text
      gsap.to('.hero-initial-overlay .line-mask span', {
        y: '0%',
        duration: 1.2,
        stagger: 0.1,
        ease: 'power4.out',
      });

      gsap.to('.hero-initial-overlay .reveal-sub', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.4,
      });

      // Capture final state
      // Instead of .gallery--final, we use Tailwind utility classes via classList
      galleryElement.classList.add('grid-cols-bento-final', 'grid-rows-bento-final', 'scale-110');
      const flipState = Flip.getState(galleryItems);
      galleryElement.classList.remove('grid-cols-bento-final', 'grid-rows-bento-final', 'scale-110');

      const flip = Flip.to(flipState, {
        simple: true,
        ease: 'none',
      });

      const tlMain = gsap.timeline({
        scrollTrigger: {
          trigger: '.gallery-wrap',
          start: 'top top',
          end: '+=150%',
          scrub: true,
          pin: true,
        },
      });

      tlMain.to(heroOverlay, {
        opacity: 0,
        scale: 0.9,
        duration: 0.2,
      }, 0);

      tlMain.add(flip, 0);

      tlMain.to(galleryElement.querySelectorAll('.gallery__item img'), {
        filter: 'brightness(1) grayscale(0)',
        duration: 0.5,
        stagger: 0.05,
      }, 0.1);
    });

    return () => ctx.revert();
  }, []);

  const handleStartQuiz = () => {
      const quizSection = document.getElementById('quiz');
      if (quizSection) {
          quizSection.scrollIntoView({ behavior: 'smooth' });
      }
  };

  return (
    <div className="gallery-wrap relative w-full h-screen z-5 overflow-hidden bg-primary">
      <HeroOverlay 
        onStartQuiz={handleStartQuiz} 
        overlayRef={heroOverlayRef} 
      />
      <BentoGallery 
        images={siteConfig.assets.heroImages} 
        galleryRef={galleryRef} 
      />
    </div>
  );
};

export default Hero;
