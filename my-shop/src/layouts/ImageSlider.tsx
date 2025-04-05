import React, { useEffect, useState } from "react";

interface ImageSliderProps {
  images: string[];
  interval?: number; // optional, default 3000ms
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Avtomatik keçid
  useEffect(() => {
    const slider = setInterval(() => {
      goToNext();
    }, interval);

    return () => clearInterval(slider);
  }, [currentIndex, interval]);

  const goToPrevious = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLast = currentIndex === images.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <img
        src={images[currentIndex]}
        alt={`slide-${currentIndex}`}
        className="w-full h-auto rounded-lg"
      />

      {/* Sol düymə */}
      <button
        onClick={goToPrevious}
        className={`${images.length>1?'block':'hidden'} absolute top-1/2 left-4 transform -translate-y-1/2 text-4xl bg-gray-300  bg-opacity-50 text-white border-none p-2  cursor-pointer`}
      >
        ‹
      </button>

      {/* Sağ düymə */}
      <button
        onClick={goToNext}
        className= {`${images.length>1?'block':'hidden'} absolute top-1/2 right-4 transform -translate-y-1/2 text-4xl bg-gray-300 bg-opacity-50 text-white border-none p-2 cursor-pointer`}
      >
        ›
      </button>
    </div>
  );
};

export default ImageSlider;
