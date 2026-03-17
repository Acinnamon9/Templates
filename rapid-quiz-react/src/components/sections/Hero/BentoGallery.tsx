import React from 'react';

interface BentoGalleryProps {
  images: string[];
  galleryRef: React.RefObject<HTMLDivElement | null>;
}

const BentoGallery: React.FC<BentoGalleryProps> = ({ images, galleryRef }) => {
  // Map index to tailwind classes for grid-area
  const getGridAreaClass = (idx: number) => {
    switch(idx) {
      case 0: return "row-start-1 col-start-1 row-end-3 col-end-2";
      case 1: return "row-start-1 col-start-2 row-end-2 col-end-3";
      case 2: return "row-start-2 col-start-2 row-end-4 col-end-3";
      case 3: return "row-start-1 col-start-3 row-end-3 col-end-4";
      case 4: return "row-start-3 col-start-1 row-end-4 col-end-2";
      case 5: return "row-start-3 col-start-3 row-end-5 col-end-4";
      case 6: return "row-start-4 col-start-1 row-end-5 col-end-2";
      case 7: return "row-start-4 col-start-2 row-end-5 col-end-3";
      default: return "";
    }
  };

  return (
    <div 
      id="gallery-8" 
      className="gallery grid gap-[1vh] w-full h-full p-[1vw] bg-primary transition-all duration-1000 grid-cols-bento grid-rows-bento justify-center align-center" 
      ref={galleryRef}
    >
      {images.map((src, i) => (
        <div 
          key={i} 
          className={`gallery__item relative w-full h-full overflow-hidden rounded-md bg-border ${getGridAreaClass(i)}`} 
          data-flip-id={`item-${i}`}
        >
          <img 
            src={src} 
            alt="" 
            className="w-full h-full object-cover brightness-[0.8] grayscale-[0.5] transition-all duration-normal" 
          />
        </div>
      ))}
    </div>
  );
};

export default BentoGallery;
