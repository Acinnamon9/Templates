import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

// Navigation Component
const Navigation = () => (
  <nav className="nav-fixed">
    <div className="nav-logo">Lipstick Queen</div>
    <div className="nav-links">
      <a href="#shop" className="nav-link">Shop</a>
      <a href="#shades" className="nav-link">Shades</a>
      <a href="#story" className="nav-link">Story</a>
      <a href="#contact" className="nav-link">Contact</a>
    </div>
  </nav>
);

// Grain Overlay
const GrainOverlay = () => <div className="grain-overlay" />;

// Hero Section - Collage with DARE TO WEAR
const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const tilesRef = useRef<HTMLDivElement[]>([]);
  const imageSlicesRef = useRef<HTMLImageElement[]>([]);
  const textTilesRef = useRef<HTMLDivElement[]>([]);
  const accentTilesRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Initial load animation
      const loadTl = gsap.timeline({ delay: 0.3 });

      // Tiles background wipe
      loadTl.fromTo(
        tilesRef.current,
        { scaleY: 0, opacity: 0 },
        {
          scaleY: 1,
          opacity: 1,
          duration: 0.9,
          ease: 'power2.out',
          stagger: { amount: 0.6, from: 'start' },
        }
      );

      // Image slices reveal
      loadTl.fromTo(
        imageSlicesRef.current,
        { clipPath: 'inset(100% 0 0 0)' },
        {
          clipPath: 'inset(0% 0 0 0)',
          duration: 0.7,
          ease: 'power2.out',
          stagger: 0.06,
        },
        '-=0.5'
      );

      // Text tiles pop
      loadTl.fromTo(
        textTilesRef.current,
        { scale: 0.85, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: 'back.out(1.6)',
          stagger: 0.05,
        },
        '-=0.4'
      );

      // Accent tiles flash
      loadTl.fromTo(
        accentTilesRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: 'back.out(1.6)',
          stagger: 0.08,
        },
        '-=0.3'
      );

      // Scroll-driven exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            // Reset all elements when scrolling back to top
            gsap.set(tilesRef.current, { opacity: 1, x: 0, y: 0, scale: 1 });
            gsap.set(imageSlicesRef.current, { opacity: 1, x: 0, y: 0 });
            gsap.set(textTilesRef.current, { opacity: 1, x: 0, y: 0 });
            gsap.set(accentTilesRef.current, { opacity: 1, scale: 1 });
          },
        },
      });

      // EXIT phase (70% - 100%)
      scrollTl.fromTo(
        tilesRef.current,
        { x: 0, y: 0, opacity: 1 },
        {
          x: '-18vw',
          y: '-18vh',
          opacity: 0,
          ease: 'power2.in',
          stagger: { amount: 0.2, from: 'random' },
        },
        0.7
      );

      scrollTl.fromTo(
        accentTilesRef.current,
        { scale: 1, opacity: 1 },
        { scale: 1.15, opacity: 0, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const addToTilesRef = (el: HTMLDivElement | null, index: number) => {
    if (el) tilesRef.current[index] = el;
  };

  const addToImageSlicesRef = (el: HTMLImageElement | null, index: number) => {
    if (el) imageSlicesRef.current[index] = el;
  };

  const addToTextTilesRef = (el: HTMLDivElement | null, index: number) => {
    if (el) textTilesRef.current[index] = el;
  };

  const addToAccentTilesRef = (el: HTMLDivElement | null, index: number) => {
    if (el) accentTilesRef.current[index] = el;
  };

  return (
    <section ref={sectionRef} className="section-pinned bg-lipstick-grey z-10">
      <div className="grid-checkerboard">
        {/* Row 1 */}
        <div ref={(el) => addToTilesRef(el, 0)} className="grid-tile" />
        <div ref={(el) => addToTilesRef(el, 1)} className="grid-tile" />
        <div ref={(el) => addToTilesRef(el, 2)} className="grid-tile" />
        <div ref={(el) => addToTilesRef(el, 3)} className="grid-tile" />
        <div ref={(el) => addToTilesRef(el, 4)} className="grid-tile" />
        <div ref={(el) => addToTilesRef(el, 5)} className="grid-tile" />
        <div ref={(el) => addToTilesRef(el, 6)} className="grid-tile" />
        <div ref={(el) => addToTilesRef(el, 7)} className="grid-tile" />

        {/* Row 2 - Image slices + DARE text start */}
        <div ref={(el) => addToTilesRef(el, 8)} className="grid-tile" />
        <div ref={(el) => addToTilesRef(el, 9)} className="grid-tile" />
        <div ref={(el) => addToTilesRef(el, 10)} className="grid-tile relative">
          <img
            ref={(el) => addToImageSlicesRef(el, 0)}
            src="/images/hero_face.jpg"
            alt=""
            className="image-slice absolute inset-0"
            style={{ objectPosition: '20% 20%' }}
          />
        </div>
        <div ref={(el) => addToTilesRef(el, 11)} className="grid-tile relative">
          <img
            ref={(el) => addToImageSlicesRef(el, 1)}
            src="/images/hero_face.jpg"
            alt=""
            className="image-slice absolute inset-0"
            style={{ objectPosition: '40% 20%' }}
          />
        </div>
        <div ref={(el) => addToTilesRef(el, 12)} className="grid-tile relative">
          <div ref={(el) => addToTextTilesRef(el, 0)} className="tile-text">T</div>
        </div>
        <div
          ref={(el) => {
            addToTilesRef(el, 13);
            addToAccentTilesRef(el, 0);
          }}
          className="grid-tile grid-tile-accent"
        />
        <div ref={(el) => addToTilesRef(el, 14)} className="grid-tile">
          <span className="font-mono-label text-lipstick-black">New Season Drop</span>
        </div>
        <div ref={(el) => addToTilesRef(el, 15)} className="grid-tile" />

        {/* Row 3 */}
        <div ref={(el) => addToTilesRef(el, 16)} className="grid-tile" />
        <div ref={(el) => addToTilesRef(el, 17)} className="grid-tile relative">
          <div ref={(el) => addToTextTilesRef(el, 1)} className="tile-text">D</div>
        </div>
        <div ref={(el) => addToTilesRef(el, 18)} className="grid-tile relative">
          <div ref={(el) => addToTextTilesRef(el, 2)} className="tile-text">A</div>
        </div>
        <div ref={(el) => addToTilesRef(el, 19)} className="grid-tile relative">
          <img
            ref={(el) => addToImageSlicesRef(el, 2)}
            src="/images/hero_face.jpg"
            alt=""
            className="image-slice absolute inset-0"
            style={{ objectPosition: '60% 40%' }}
          />
        </div>
        <div ref={(el) => addToTilesRef(el, 20)} className="grid-tile relative">
          <img
            ref={(el) => addToImageSlicesRef(el, 3)}
            src="/images/hero_face.jpg"
            alt=""
            className="image-slice absolute inset-0"
            style={{ objectPosition: '80% 40%' }}
          />
        </div>
        <div ref={(el) => addToTilesRef(el, 21)} className="grid-tile relative">
          <div ref={(el) => addToTextTilesRef(el, 3)} className="tile-text">O</div>
        </div>
        <div ref={(el) => addToTilesRef(el, 22)} className="grid-tile" />
        <div ref={(el) => addToTilesRef(el, 23)} className="grid-tile" />

        {/* Row 4 */}
        <div ref={(el) => addToTilesRef(el, 24)} className="grid-tile" />
        <div ref={(el) => addToTilesRef(el, 25)} className="grid-tile relative">
          <div ref={(el) => addToTextTilesRef(el, 4)} className="tile-text">R</div>
        </div>
        <div ref={(el) => addToTilesRef(el, 26)} className="grid-tile relative">
          <div ref={(el) => addToTextTilesRef(el, 5)} className="tile-text">E</div>
        </div>
        <div ref={(el) => addToTilesRef(el, 27)} className="grid-tile relative">
          <img
            ref={(el) => addToImageSlicesRef(el, 4)}
            src="/images/hero_face.jpg"
            alt=""
            className="image-slice absolute inset-0"
            style={{ objectPosition: '30% 60%' }}
          />
        </div>
        <div ref={(el) => addToTilesRef(el, 28)} className="grid-tile relative">
          <img
            ref={(el) => addToImageSlicesRef(el, 5)}
            src="/images/hero_face.jpg"
            alt=""
            className="image-slice absolute inset-0"
            style={{ objectPosition: '50% 60%' }}
          />
        </div>
        <div
          ref={(el) => {
            addToTilesRef(el, 29);
            addToAccentTilesRef(el, 1);
          }}
          className="grid-tile grid-tile-accent"
        />
        <div ref={(el) => addToTilesRef(el, 30)} className="grid-tile" />
        <div ref={(el) => addToTilesRef(el, 31)} className="grid-tile" />

        {/* Row 5 - WEAR text */}
        <div ref={(el) => addToTilesRef(el, 32)} className="grid-tile" />
        <div ref={(el) => addToTilesRef(el, 33)} className="grid-tile" />
        <div ref={(el) => addToTilesRef(el, 34)} className="grid-tile" />
        <div ref={(el) => addToTilesRef(el, 35)} className="grid-tile" />
        <div ref={(el) => addToTilesRef(el, 36)} className="grid-tile relative">
          <div ref={(el) => addToTextTilesRef(el, 6)} className="tile-text">W</div>
        </div>
        <div ref={(el) => addToTilesRef(el, 37)} className="grid-tile relative">
          <div ref={(el) => addToTextTilesRef(el, 7)} className="tile-text">E</div>
        </div>
        <div ref={(el) => addToTilesRef(el, 38)} className="grid-tile">
          <button className="cta-button">Shop the Drop</button>
        </div>
        <div ref={(el) => addToTilesRef(el, 39)} className="grid-tile" />

        {/* Row 6 */}
        <div ref={(el) => addToTilesRef(el, 40)} className="grid-tile" />
        <div ref={(el) => addToTilesRef(el, 41)} className="grid-tile" />
        <div ref={(el) => addToTilesRef(el, 42)} className="grid-tile" />
        <div ref={(el) => addToTilesRef(el, 43)} className="grid-tile" />
        <div ref={(el) => addToTilesRef(el, 44)} className="grid-tile relative">
          <div ref={(el) => addToTextTilesRef(el, 8)} className="tile-text">A</div>
        </div>
        <div ref={(el) => addToTilesRef(el, 45)} className="grid-tile relative">
          <div ref={(el) => addToTextTilesRef(el, 9)} className="tile-text">R</div>
        </div>
        <div ref={(el) => addToTilesRef(el, 46)} className="grid-tile" />
        <div ref={(el) => addToTilesRef(el, 47)} className="grid-tile" />
      </div>
    </section>
  );
};

// Manifesto Section
const ManifestoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const textTiles = section.querySelectorAll('.text-tile');
      const imageTiles = section.querySelectorAll('.image-tile');
      const accentTiles = section.querySelectorAll('.accent-tile');

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      // ENTRANCE (0% - 30%)
      scrollTl.fromTo(
        textTiles,
        { y: '12vh', opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.02, ease: 'power2.out' },
        0
      );

      scrollTl.fromTo(
        imageTiles,
        { x: '-18vw', clipPath: 'inset(0 100% 0 0)' },
        { x: 0, clipPath: 'inset(0 0% 0 0)', stagger: 0.03, ease: 'power2.out' },
        0
      );

      scrollTl.fromTo(
        accentTiles,
        { scale: 0.6, opacity: 0 },
        { scale: 1, opacity: 1, stagger: 0.05, ease: 'back.out(1.4)' },
        0.12
      );

      // EXIT (70% - 100%)
      scrollTl.fromTo(
        textTiles,
        { x: 0, opacity: 1 },
        { x: '10vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        imageTiles,
        { x: 0, opacity: 1 },
        { x: '-10vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        accentTiles,
        { scale: 1, opacity: 1 },
        { scale: 1.2, opacity: 0, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-pinned bg-lipstick-grey z-20">
      <div className="grid-checkerboard">
        {/* Row 1 */}
        <div className="grid-tile" /><div className="grid-tile" /><div className="grid-tile" />
        <div className="grid-tile" /><div className="grid-tile" /><div className="grid-tile" />
        <div className="grid-tile" /><div className="grid-tile" />

        {/* Row 2 */}
        <div className="grid-tile" />
        <div className="grid-tile image-tile relative overflow-hidden">
          <img src="/images/manifesto_face.jpg" alt="" className="image-slice absolute inset-0" style={{ objectPosition: '10% 20%' }} />
        </div>
        <div className="grid-tile image-tile relative overflow-hidden">
          <img src="/images/manifesto_face.jpg" alt="" className="image-slice absolute inset-0" style={{ objectPosition: '30% 20%' }} />
        </div>
        <div className="grid-tile accent-tile grid-tile-accent" />
        <div className="grid-tile text-tile"><span className="tile-text">IT'S</span></div>
        <div className="grid-tile text-tile"><span className="tile-text">YOUR</span></div>
        <div className="grid-tile text-tile"><span className="tile-text">LIPS</span></div>
        <div className="grid-tile text-tile"><span className="tile-text">(AND</span></div>

        {/* Row 3 */}
        <div className="grid-tile" />
        <div className="grid-tile image-tile relative overflow-hidden">
          <img src="/images/manifesto_face.jpg" alt="" className="image-slice absolute inset-0" style={{ objectPosition: '10% 50%' }} />
        </div>
        <div className="grid-tile image-tile relative overflow-hidden">
          <img src="/images/manifesto_face.jpg" alt="" className="image-slice absolute inset-0" style={{ objectPosition: '30% 50%' }} />
        </div>
        <div className="grid-tile image-tile relative overflow-hidden">
          <img src="/images/manifesto_face.jpg" alt="" className="image-slice absolute inset-0" style={{ objectPosition: '50% 50%' }} />
        </div>
        <div className="grid-tile text-tile"><span className="tile-text">YOUR</span></div>
        <div className="grid-tile text-tile"><span className="tile-text">LIFE)</span></div>
        <div className="grid-tile" />
        <div className="grid-tile" />

        {/* Row 4 */}
        <div className="grid-tile" />
        <div className="grid-tile image-tile relative overflow-hidden">
          <img src="/images/manifesto_face.jpg" alt="" className="image-slice absolute inset-0" style={{ objectPosition: '20% 80%' }} />
        </div>
        <div className="grid-tile" />
        <div className="grid-tile accent-tile grid-tile-accent" />
        <div className="grid-tile" />
        <div className="grid-tile text-tile"><span className="tile-text">DARE</span></div>
        <div className="grid-tile text-tile"><span className="tile-text">TO</span></div>
        <div className="grid-tile text-tile"><span className="tile-text">WEAR</span></div>

        {/* Row 5 */}
        <div className="grid-tile" /><div className="grid-tile" /><div className="grid-tile" />
        <div className="grid-tile" />
        <div className="grid-tile accent-tile grid-tile-accent" />
        <div className="grid-tile" />
        <div className="grid-tile flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-lipstick-black">
            <path d="M8 4L16 12L8 20" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <div className="grid-tile" />

        {/* Row 6 */}
        <div className="grid-tile" /><div className="grid-tile" /><div className="grid-tile" />
        <div className="grid-tile" /><div className="grid-tile" /><div className="grid-tile" />
        <div className="grid-tile" /><div className="grid-tile" />
      </div>
    </section>
  );
};

// Product Spotlight Section
const ProductSpotlightSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const productTiles = section.querySelectorAll('.product-tile');
      const portraitTiles = section.querySelectorAll('.portrait-tile');
      const textTiles = section.querySelectorAll('.text-tile');
      const accentTiles = section.querySelectorAll('.accent-tile');

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=140%',
          pin: true,
          scrub: 0.6,
        },
      });

      // ENTRANCE (0% - 30%)
      scrollTl.fromTo(
        productTiles,
        { x: '-30vw', rotate: -6, opacity: 0 },
        { x: 0, rotate: 0, opacity: 1, stagger: 0.02, ease: 'power2.out' },
        0
      );

      scrollTl.fromTo(
        portraitTiles,
        { y: '35vh', opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.03, ease: 'power2.out' },
        0.06
      );

      scrollTl.fromTo(
        textTiles,
        { x: '12vw', opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.02, ease: 'power2.out' },
        0.1
      );

      scrollTl.fromTo(
        accentTiles,
        { scale: 0.7, opacity: 0 },
        { scale: 1, opacity: 1, stagger: 0.05, ease: 'back.out(1.4)' },
        0.15
      );

      // EXIT (70% - 100%)
      scrollTl.fromTo(
        [productTiles, portraitTiles],
        { y: 0, opacity: 1 },
        { y: '-18vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        textTiles,
        { x: 0, opacity: 1 },
        { x: '14vw', opacity: 0, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="shop" className="section-pinned bg-lipstick-grey z-30">
      <div className="grid-checkerboard">
        {/* Row 1 */}
        <div className="grid-tile" /><div className="grid-tile" /><div className="grid-tile" />
        <div className="grid-tile" /><div className="grid-tile" /><div className="grid-tile" />
        <div className="grid-tile" /><div className="grid-tile" />

        {/* Row 2 */}
        <div className="grid-tile" />
        <div className="grid-tile product-tile relative overflow-hidden">
          <img src="/images/product_lipstick.jpg" alt="" className="image-slice absolute inset-0" style={{ objectPosition: '30% 30%' }} />
        </div>
        <div className="grid-tile product-tile relative overflow-hidden">
          <img src="/images/product_lipstick.jpg" alt="" className="image-slice absolute inset-0" style={{ objectPosition: '60% 30%' }} />
        </div>
        <div className="grid-tile portrait-tile relative overflow-hidden">
          <img src="/images/spotlight_face.jpg" alt="" className="image-slice absolute inset-0" style={{ objectPosition: '20% 20%' }} />
        </div>
        <div className="grid-tile portrait-tile relative overflow-hidden">
          <img src="/images/spotlight_face.jpg" alt="" className="image-slice absolute inset-0" style={{ objectPosition: '50% 20%' }} />
        </div>
        <div className="grid-tile accent-tile grid-tile-accent" />
        <div className="grid-tile text-tile"><span className="tile-text">THE</span></div>
        <div className="grid-tile" />

        {/* Row 3 */}
        <div className="grid-tile" />
        <div className="grid-tile product-tile relative overflow-hidden">
          <img src="/images/product_lipstick.jpg" alt="" className="image-slice absolute inset-0" style={{ objectPosition: '30% 60%' }} />
        </div>
        <div className="grid-tile product-tile relative overflow-hidden">
          <img src="/images/product_lipstick.jpg" alt="" className="image-slice absolute inset-0" style={{ objectPosition: '60% 60%' }} />
        </div>
        <div className="grid-tile portrait-tile relative overflow-hidden">
          <img src="/images/spotlight_face.jpg" alt="" className="image-slice absolute inset-0" style={{ objectPosition: '20% 50%' }} />
        </div>
        <div className="grid-tile portrait-tile relative overflow-hidden">
          <img src="/images/spotlight_face.jpg" alt="" className="image-slice absolute inset-0" style={{ objectPosition: '50% 50%' }} />
        </div>
        <div className="grid-tile portrait-tile relative overflow-hidden">
          <img src="/images/spotlight_face.jpg" alt="" className="image-slice absolute inset-0" style={{ objectPosition: '80% 50%' }} />
        </div>
        <div className="grid-tile text-tile"><span className="tile-text">ICON</span></div>
        <div className="grid-tile text-tile"><span className="tile-text">SHADE</span></div>

        {/* Row 4 */}
        <div className="grid-tile" /><div className="grid-tile" />
        <div className="grid-tile portrait-tile relative overflow-hidden">
          <img src="/images/spotlight_face.jpg" alt="" className="image-slice absolute inset-0" style={{ objectPosition: '30% 80%' }} />
        </div>
        <div className="grid-tile portrait-tile relative overflow-hidden">
          <img src="/images/spotlight_face.jpg" alt="" className="image-slice absolute inset-0" style={{ objectPosition: '60% 80%' }} />
        </div>
        <div className="grid-tile accent-tile grid-tile-accent" />
        <div className="grid-tile text-tile"><span className="tile-text">THAT</span></div>
        <div className="grid-tile text-tile"><span className="tile-text">NEVER</span></div>
        <div className="grid-tile text-tile"><span className="tile-text">SLEEPS</span></div>

        {/* Row 5 */}
        <div className="grid-tile" /><div className="grid-tile" /><div className="grid-tile" />
        <div className="grid-tile" /><div className="grid-tile" />
        <div className="grid-tile accent-tile grid-tile-accent" />
        <div className="grid-tile" /><div className="grid-tile" />

        {/* Row 6 */}
        <div className="grid-tile" /><div className="grid-tile" /><div className="grid-tile" />
        <div className="grid-tile" /><div className="grid-tile" />
        <div className="grid-tile flex items-center justify-center">
          <button className="cta-button">Add to Bag</button>
        </div>
        <div className="grid-tile flex items-center justify-center">
          <span className="font-mono-label text-lipstick-black">$28</span>
        </div>
        <div className="grid-tile" />
      </div>
    </section>
  );
};

// Texture Study Section
const TextureSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const macroTiles = section.querySelectorAll('.macro-tile');
      const portraitTiles = section.querySelectorAll('.portrait-tile');
      const textTiles = section.querySelectorAll('.text-tile');
      const accentTiles = section.querySelectorAll('.accent-tile');

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      // ENTRANCE (0% - 30%)
      scrollTl.fromTo(
        macroTiles,
        { scale: 1.25, x: '10vw', opacity: 0 },
        { scale: 1, x: 0, opacity: 1, stagger: 0.02, ease: 'power2.out' },
        0
      );

      scrollTl.fromTo(
        portraitTiles,
        { x: '-22vw', opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.03, ease: 'power2.out' },
        0.05
      );

      scrollTl.fromTo(
        textTiles,
        { y: '10vh', opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.02, ease: 'power2.out' },
        0.1
      );

      scrollTl.fromTo(
        accentTiles,
        { scale: 0.6, opacity: 0 },
        { scale: 1, opacity: 1, stagger: 0.05, ease: 'back.out(1.4)' },
        0.15
      );

      // EXIT (70% - 100%)
      scrollTl.fromTo(
        macroTiles,
        { x: 0, opacity: 1 },
        { x: '-12vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        textTiles,
        { y: 0, opacity: 1 },
        { y: '-10vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        accentTiles,
        { scale: 1, opacity: 1 },
        { scale: 1.15, opacity: 0, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-pinned bg-lipstick-grey z-40">
        <div className="grid-checkerboard">
        {/* Row 1 */}
        <div className="grid-tile" /><div className="grid-tile" /><div className="grid-tile" />
        <div className="grid-tile" /><div className="grid-tile" /><div className="grid-tile" />
        <div className="grid-tile" /><div className="grid-tile" />

        {/* Row 2 */}
        <div className="grid-tile" />
        <div className="grid-tile portrait-tile relative overflow-hidden">
          <img src="/images/texture_face_side.jpg" alt="" className="image-slice absolute inset-0" style={{ objectPosition: '20% 30%' }} />
        </div>
        <div className="grid-tile portrait-tile relative overflow-hidden">
          <img src="/images/texture_face_side.jpg" alt="" className="image-slice absolute inset-0" style={{ objectPosition: '50% 30%' }} />
        </div>
        <div className="grid-tile macro-tile relative overflow-hidden">
          <img src="/images/texture_lips.jpg" alt="" className="image-slice absolute inset-0" style={{ objectPosition: '30% 30%' }} />
        </div>
        <div className="grid-tile macro-tile relative overflow-hidden">
          <img src="/images/texture_lips.jpg" alt="" className="image-slice absolute inset-0" style={{ objectPosition: '60% 30%' }} />
        </div>
        <div className="grid-tile accent-tile grid-tile-accent" />
        <div className="grid-tile text-tile"><span className="tile-text">FEEL</span></div>
        <div className="grid-tile text-tile"><span className="tile-text">THE</span></div>

        {/* Row 3 */}
        <div className="grid-tile" />
        <div className="grid-tile portrait-tile relative overflow-hidden">
          <img src="/images/texture_face_side.jpg" alt="" className="image-slice absolute inset-0" style={{ objectPosition: '20% 60%' }} />
        </div>
        <div className="grid-tile portrait-tile relative overflow-hidden">
          <img src="/images/texture_face_side.jpg" alt="" className="image-slice absolute inset-0" style={{ objectPosition: '50% 60%' }} />
        </div>
        <div className="grid-tile macro-tile relative overflow-hidden">
          <img src="/images/texture_lips.jpg" alt="" className="image-slice absolute inset-0" style={{ objectPosition: '30% 60%' }} />
        </div>
        <div className="grid-tile macro-tile relative overflow-hidden">
          <img src="/images/texture_lips.jpg" alt="" className="image-slice absolute inset-0" style={{ objectPosition: '60% 60%' }} />
        </div>
        <div className="grid-tile macro-tile relative overflow-hidden">
          <img src="/images/texture_lips.jpg" alt="" className="image-slice absolute inset-0" style={{ objectPosition: '80% 60%' }} />
        </div>
        <div className="grid-tile text-tile"><span className="tile-text">COLOR</span></div>
        <div className="grid-tile text-tile"><span className="tile-text">OWN</span></div>

        {/* Row 4 */}
        <div className="grid-tile" /><div className="grid-tile" />
        <div className="grid-tile macro-tile relative overflow-hidden">
          <img src="/images/texture_lips.jpg" alt="" className="image-slice absolute inset-0" style={{ objectPosition: '40% 80%' }} />
        </div>
        <div className="grid-tile macro-tile relative overflow-hidden">
          <img src="/images/texture_lips.jpg" alt="" className="image-slice absolute inset-0" style={{ objectPosition: '70% 80%' }} />
        </div>
        <div className="grid-tile accent-tile grid-tile-accent" />
        <div className="grid-tile text-tile"><span className="tile-text">THE</span></div>
        <div className="grid-tile text-tile"><span className="tile-text">ROOM</span></div>
        <div className="grid-tile accent-tile grid-tile-accent" />

        {/* Row 5 */}
        <div className="grid-tile" /><div className="grid-tile" /><div className="grid-tile" />
        <div className="grid-tile" /><div className="grid-tile" /><div className="grid-tile" />
        <div className="grid-tile flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-lipstick-black">
            <path d="M10 0V20M0 10H20" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <div className="grid-tile" />

        {/* Row 6 */}
        <div className="grid-tile col-span-8 flex items-center justify-center">
          <span className="font-mono-label text-lipstick-text-secondary">Velvet matte. All day. No apologies.</span>
        </div>
      </div>
    </section>
  );
};

// Shade Range Section (Flowing)
const ShadeRangeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const heading = section.querySelector('.section-heading');
      const cards = section.querySelectorAll('.shade-card');

      gsap.fromTo(
        heading,
        { y: '8vh', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: '10vh', rotate: -1.5, opacity: 0 },
          {
            y: 0,
            rotate: 0,
            opacity: 1,
            duration: 0.7,
            delay: i * 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const shades = [
    { name: 'Stage Red', image: '/images/shade_swatch_1.jpg' },
    { name: 'Afterhours Plum', image: '/images/shade_swatch_2.jpg' },
    { name: 'Riot Pink', image: '/images/shade_swatch_3.jpg' },
    { name: 'Bare Threat', image: '/images/shade_swatch_4.jpg' },
    { name: 'Midnight Merlot', image: '/images/shade_swatch_5.jpg' },
    { name: 'Neon Confession', image: '/images/shade_swatch_6.jpg' },
  ];

  return (
    <section ref={sectionRef} id="shades" className="relative bg-lipstick-grey z-50 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-8">
        <div className="section-heading mb-16">
          <h2 className="font-heading text-5xl md:text-7xl text-lipstick-black mb-4">CHOOSE</h2>
          <h2 className="font-heading text-5xl md:text-7xl text-lipstick-black mb-4">YOUR</h2>
          <h2 className="font-heading text-5xl md:text-7xl text-lipstick-pink">TRUTH</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shades.map((shade) => (
            <div
              key={shade.name}
              className="shade-card group relative bg-white border border-lipstick-black/20 overflow-hidden"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={shade.image}
                  alt={shade.name}
                  className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-lipstick-pink/0 group-hover:bg-lipstick-pink/10 transition-colors duration-300" />
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-heading text-xl text-lipstick-black">{shade.name}</h3>
                  <span className="font-mono-label text-lipstick-text-secondary">$28</span>
                </div>
                <div className="w-10 h-10 bg-lipstick-pink animate-pulse-scale rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">+</span>
                </div>
              </div>
              <button className="w-full cta-button">Add to Bag</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Final Statement Section
const FinalStatementSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const imageTiles = section.querySelectorAll('.image-tile');
      const textTiles = section.querySelectorAll('.text-tile');
      const accentTiles = section.querySelectorAll('.accent-tile');

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=120%',
          pin: true,
          scrub: 0.6,
        },
      });

      // ENTRANCE (0% - 30%)
      scrollTl.fromTo(
        imageTiles,
        { x: (i) => (i < 4 ? '-18vw' : '18vw'), opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.02, ease: 'power2.out' },
        0
      );

      scrollTl.fromTo(
        textTiles,
        { y: '12vh', opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.02, ease: 'power2.out' },
        0.08
      );

      scrollTl.fromTo(
        accentTiles,
        { scale: 0.7, opacity: 0 },
        { scale: 1, opacity: 1, stagger: 0.05, ease: 'back.out(1.4)' },
        0.15
      );

      // EXIT (70% - 100%)
      scrollTl.fromTo(
        [...imageTiles, ...textTiles],
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="story" className="section-pinned bg-lipstick-grey z-[60]">
      <div className="grid-checkerboard">
        {/* Row 1 */}
        <div className="grid-tile" /><div className="grid-tile" /><div className="grid-tile" />
        <div className="grid-tile" /><div className="grid-tile" /><div className="grid-tile" />
        <div className="grid-tile" /><div className="grid-tile" />

        {/* Row 2 */}
        <div className="grid-tile" />
        <div className="grid-tile image-tile relative overflow-hidden">
          <img src="/images/closing_face_1.jpg" alt="" className="image-slice absolute inset-0" style={{ objectPosition: '20% 30%' }} />
        </div>
        <div className="grid-tile image-tile relative overflow-hidden">
          <img src="/images/closing_face_1.jpg" alt="" className="image-slice absolute inset-0" style={{ objectPosition: '50% 30%' }} />
        </div>
        <div className="grid-tile image-tile relative overflow-hidden">
          <img src="/images/closing_face_2.jpg" alt="" className="image-slice absolute inset-0" style={{ objectPosition: '30% 30%' }} />
        </div>
        <div className="grid-tile image-tile relative overflow-hidden">
          <img src="/images/closing_face_2.jpg" alt="" className="image-slice absolute inset-0" style={{ objectPosition: '60% 30%' }} />
        </div>
        <div className="grid-tile accent-tile grid-tile-accent" />
        <div className="grid-tile text-tile"><span className="tile-text">LIFE</span></div>
        <div className="grid-tile text-tile"><span className="tile-text">IS</span></div>

        {/* Row 3 */}
        <div className="grid-tile" />
        <div className="grid-tile image-tile relative overflow-hidden">
          <img src="/images/closing_face_1.jpg" alt="" className="image-slice absolute inset-0" style={{ objectPosition: '20% 60%' }} />
        </div>
        <div className="grid-tile image-tile relative overflow-hidden">
          <img src="/images/closing_face_1.jpg" alt="" className="image-slice absolute inset-0" style={{ objectPosition: '50% 60%' }} />
        </div>
        <div className="grid-tile image-tile relative overflow-hidden">
          <img src="/images/closing_face_2.jpg" alt="" className="image-slice absolute inset-0" style={{ objectPosition: '30% 60%' }} />
        </div>
        <div className="grid-tile image-tile relative overflow-hidden">
          <img src="/images/closing_face_2.jpg" alt="" className="image-slice absolute inset-0" style={{ objectPosition: '60% 60%' }} />
        </div>
        <div className="grid-tile accent-tile grid-tile-accent" />
        <div className="grid-tile text-tile"><span className="tile-text">TOO</span></div>
        <div className="grid-tile text-tile"><span className="tile-text">SHORT</span></div>

        {/* Row 4 */}
        <div className="grid-tile" /><div className="grid-tile" /><div className="grid-tile" />
        <div className="grid-tile" />
        <div className="grid-tile accent-tile grid-tile-accent" />
        <div className="grid-tile text-tile"><span className="tile-text">FOR</span></div>
        <div className="grid-tile text-tile"><span className="tile-text">NUDE</span></div>
        <div className="grid-tile text-tile"><span className="tile-text">LIPS</span></div>

        {/* Row 5 */}
        <div className="grid-tile" /><div className="grid-tile" /><div className="grid-tile" />
        <div className="grid-tile" /><div className="grid-tile" /><div className="grid-tile" />
        <div className="grid-tile" /><div className="grid-tile" />

        {/* Row 6 */}
        <div className="grid-tile col-span-8 flex items-center justify-center">
          <span className="font-mono-label text-lipstick-text-secondary">Go bold. Stay bold.</span>
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const formBlock = section.querySelector('.form-block');
      const tiles = section.querySelectorAll('.contact-tile');

      gsap.fromTo(
        formBlock,
        { y: '6vh', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: formBlock,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        tiles,
        { y: '4vh', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="relative bg-lipstick-black z-[70] py-20 min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Links */}
          <div className="flex flex-col gap-4">
            <div className="contact-tile p-6 border border-white/20 hover:border-lipstick-pink transition-colors cursor-pointer">
              <span className="font-heading text-white text-xl">STOCKISTS</span>
            </div>
            <div className="contact-tile p-6 border border-white/20 hover:border-lipstick-pink transition-colors cursor-pointer">
              <span className="font-heading text-white text-xl">PRESS</span>
            </div>
            <div className="contact-tile p-6 border border-white/20 hover:border-lipstick-pink transition-colors cursor-pointer">
              <span className="font-heading text-white text-xl">CARE</span>
            </div>
          </div>

          {/* Center Form */}
          <div className="form-block lg:col-span-1">
            <h2 className="font-heading text-4xl text-white mb-2">GET</h2>
            <h2 className="font-heading text-4xl text-white mb-2">THE</h2>
            <h2 className="font-heading text-4xl text-lipstick-pink mb-8">DROP</h2>
            <p className="font-body text-white/70 mb-8 text-sm">
              New shades, restocks, and behind-the-scenes—once a week, zero spam.
            </p>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="bg-transparent border border-white/30 px-4 py-3 text-white font-mono text-sm focus:border-lipstick-pink focus:outline-none transition-colors"
              />
              <button type="submit" className="cta-button w-full">Subscribe</button>
            </form>
          </div>

          {/* Right Social */}
          <div className="flex flex-col gap-4">
            <div className="contact-tile p-6 border border-white/20 hover:border-lipstick-pink transition-colors cursor-pointer">
              <span className="font-heading text-white text-xl">IG</span>
            </div>
            <div className="contact-tile p-6 border border-white/20 hover:border-lipstick-pink transition-colors cursor-pointer">
              <span className="font-heading text-white text-xl">TK</span>
            </div>
            <div className="contact-tile p-6 border border-white/20 hover:border-lipstick-pink transition-colors cursor-pointer">
              <span className="font-heading text-white text-xl">PIN</span>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-mono-label text-white/40">© 2026 LIPSTICK QUEEN</span>
          <span className="font-mono-label text-white/40">DARE TO WEAR</span>
        </div>
      </div>
    </section>
  );
};

// Main App
function App() {
  useEffect(() => {
    // Global snap configuration for pinned sections
    const setupSnap = () => {
      const pinned = ScrollTrigger.getAll()
        .filter((st) => st.vars.pin)
        .sort((a, b) => a.start - b.start);
      
      const maxScroll = ScrollTrigger.maxScroll(window);
      if (!maxScroll || pinned.length === 0) return;

      const pinnedRanges = pinned.map((st) => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
      }));

      ScrollTrigger.create({
        snap: {
          snapTo: (value) => {
            const inPinned = pinnedRanges.some(
              (r) => value >= r.start - 0.02 && value <= r.end + 0.02
            );
            if (!inPinned) return value;

            const target = pinnedRanges.reduce(
              (closest, r) =>
                Math.abs(r.center - value) < Math.abs(closest - value)
                  ? r.center
                  : closest,
              pinnedRanges[0]?.center ?? 0
            );
            return target;
          },
          duration: { min: 0.15, max: 0.35 },
          delay: 0,
          ease: 'power2.out',
        },
      });
    };

    // Delay to ensure all ScrollTriggers are created
    const timer = setTimeout(setupSnap, 500);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="relative">
      <Navigation />
      <GrainOverlay />
      <main className="relative">
        <HeroSection />
        <ManifestoSection />
        <ProductSpotlightSection />
        <TextureSection />
        <ShadeRangeSection />
        <FinalStatementSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
