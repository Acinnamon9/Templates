import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/all';
import HeroOverlay from './HeroOverlay';
import BentoGallery from './BentoGallery';
import { siteConfig } from '../../../config/site';

gsap.registerPlugin(ScrollTrigger, Flip);

function Hero() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const heroOverlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!galleryRef.current || !heroOverlayRef.current) return;

    const galleryElement = galleryRef.current;
    const galleryItems = galleryElement.querySelectorAll('.gallery__item');
    const heroOverlay = heroOverlayRef.current;

    const ctx = gsap.context(() => {
      // 1. Initial State (Reveal text)
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

      // 2. Capture "Before" State for Flip
      // Temporarily add the "full screen" class to capture the state
      galleryElement.classList.add('gallery--final');
      const flipState = Flip.getState(galleryItems);
      galleryElement.classList.remove('gallery--final');

      // 3. Create the Transition
      const flip = Flip.to(flipState, {
        simple: true,
        ease: 'expoScale(1, 5)',
      });

      // 4. Link to Scroll (ScrollTrigger)
      const tlMain = gsap.timeline({
        scrollTrigger: {
          trigger: '.gallery-wrap',
          start: 'top top',
          end: '+=150%',
          scrub: true,
          pin: true,
        },
      });

      // Fade out the overlay as we scroll
      tlMain.to(heroOverlay, {
        opacity: 0,
        scale: 0.9,
        duration: 0.2,
      }, 0);

      // Add the flip animation to the timeline
      tlMain.add(flip, 0);

      // Enhance the visuals during the transition
      tlMain.to(galleryElement.querySelectorAll('.gallery__item img'), {
        filter: 'brightness(1) grayscale(0)',
        duration: 0.5,
        stagger: 0.05,
      }, 0.1);
    });

    return () => {
      ctx.revert();
      // Ensure props are cleared on cleanup as per instructions
      gsap.set(galleryItems, { clearProps: 'all' });
    };
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
}

export default Hero;
