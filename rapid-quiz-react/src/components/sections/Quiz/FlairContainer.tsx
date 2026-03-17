import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const flairAssets = [
  "https://assets.codepen.io/16327/Revised+Flair.png",
  "https://assets.codepen.io/16327/Revised+Flair-1.png",
  "https://assets.codepen.io/16327/Revised+Flair-2.png",
  "https://assets.codepen.io/16327/Revised+Flair-3.png",
  "https://assets.codepen.io/16327/Revised+Flair-4.png",
  "https://assets.codepen.io/16327/Revised+Flair-5.png",
  "https://assets.codepen.io/16327/Revised+Flair-6.png",
  "https://assets.codepen.io/16327/Revised+Flair-7.png",
  "https://assets.codepen.io/16327/Revised+Flair-8.png",
];

const FlairContainer: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const flairElements = useRef<HTMLImageElement[]>([]);
    const flairIndex = useRef(0);

    useEffect(() => {
        if (!containerRef.current) return;
        
        // Create 40 flair elements
        for (let i = 0; i < 40; i++) {
            const img = document.createElement("img");
            img.className = "flair";
            img.src = flairAssets[i % flairAssets.length];
            containerRef.current.appendChild(img);
            flairElements.current.push(img);
        }

        const handleTriggerFlair = (e: any) => {
            const { x, y } = e.detail;
            const burstCount = 8;
            for (let i = 0; i < burstCount; i++) {
                const img = flairElements.current[flairIndex.current % flairElements.current.length];
                
                // Add some random offset
                const offsetX = (Math.random() - 0.5) * 40;
                const offsetY = (Math.random() - 0.5) * 40;
                
                playFlairAnimation(img, x + offsetX, y + offsetY);
                flairIndex.current++;
            }
        };

        window.addEventListener('trigger-flair', handleTriggerFlair);
        return () => window.removeEventListener('trigger-flair', handleTriggerFlair);
    }, []);

    const playFlairAnimation = (shape: HTMLImageElement, x: number, y: number) => {
        gsap.set(shape, {
            clearProps: "all",
            opacity: 1,
            left: x,
            top: y,
            xPercent: -50,
            yPercent: -50,
        });

        const tl = gsap.timeline();
        tl.from(shape, {
            opacity: 0,
            scale: 0,
            ease: "elastic.out(1,0.3)",
        })
        .to(shape, {
            rotation: "random([-360, 360])",
        }, "<")
        .to(shape, {
            y: "120vh",
            ease: "back.in(.4)",
            duration: 1,
        }, 0);
    };

    return <div id="flair-container" ref={containerRef} />;
};

export default FlairContainer;
