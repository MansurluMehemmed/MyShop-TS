import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface ImageSliderProps {
  images: string[];
  interval?: number; // optional, default 3000ms
}

const Slider: React.FC<ImageSliderProps> = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Avtomatik keçid
  useEffect(() => {
    const slider = setInterval(() => {
      goToNext();
    }, interval);

    return () => clearInterval(slider); // Təhlükəsizlik üçün interval təmizlənir
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
    <div className="relative w-full h-screen  mt-[100px]">
      <div className="w-[80%] h-full absolute flex justify-center items-center">
        <div className="md:gap-4 flex flex-col gap-8 w-[60%] max-sm:w-[90%] h-auto">
          <p className="max-sm:text-[14px] sm:text-[18px] md:text-xl">
            Spring / Summer Collection 2025
          </p>
          <h1 className="font-semibold max-sm:text-[25px] sm:text-[35px] md:text-[40px] lg:text-[60px] xl:text-[72px]">
            Get up to 30% Off New Arrivals
          </h1>
          <Link
            className="text-white w-32 max-sm:w-25 sm:w-28 max-sm:py-1 bg-red-500 flex items-center justify-center cursor-pointer py-2 rounded hover:bg-red-400 transition duration-200 ease-linear"
            to=""
          >
            Show now
          </Link>
        </div>
      </div>

      {/* Şəkil */}
      <img
        src={images[currentIndex]}
        alt={`slide-${currentIndex}`}
        className="w-full h-full rounded-lg"
      />

      {/* Sol düymə */}
      {images.length > 1 && (
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-4xl bg-gray-300 bg-opacity-50 text-white border-none p-2 rounded-full cursor-pointer"
        >
          ‹
        </button>
      )}

      {/* Sağ düymə */}
      {images.length > 1 && (
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-4xl bg-gray-300 bg-opacity-50 text-white border-none p-2 rounded-full cursor-pointer"
        >
          ›
        </button>
      )}
    </div>
  );
};

export default Slider;




// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// interface ImageSliderProps {
//   images: string[];
//   interval?: number; // optional, default 3000ms
// }

// const Slider: React.FC<ImageSliderProps> = ({ images, interval = 3000 }) => {
//   const [currentIndex, setCurrentIndex] = useState<number>(0);

//   // Avtomatik keçid
//   useEffect(() => {
//     const slider = setInterval(() => {
//       goToNext();
//     }, interval);

//     return () => clearInterval(slider);
//   }, [currentIndex, interval]);

//   const goToPrevious = () => {
//     const isFirst = currentIndex === 0;
//     const newIndex = isFirst ? images.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToNext = () => {
//     const isLast = currentIndex === images.length - 1;
//     const newIndex = isLast ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   return (
//     <div className="relative w-full max-w-2xl mx-auto">
//       <div className=" w-[80%] h-full absolute  flex justify-center items-center">
//           <div className="md:gap-4 flex flex-col gap-8  w-[60%] max-sm:w-[90%] h-auto">
//             <p className=" max-sm:text-[14px] sm:text-[18px] md:text-xl  ">
//               Spring / Summer Collection 2025
//             </p>
//             <h1 className=" font-semibold max-sm:text-[25px] sm:text-[35px] md:text-[40px] lg:text-[60px] xl:text-[72px]">
//               Get up to 30% Off New Arrivals
//             </h1>
//             <Link
//               className="text-white w-32 max-sm:w-25 sm:w-28  max-sm:py-1 bg-red-500 flex items-center justify-center  cursor-pointer  py-2 rounded hover:bg-red-400 transition duration-200 ease-linear"
//               to=""
//             >
//               Show now
//             </Link>
//           </div>
//         </div>
//       <img
//         src={images[currentIndex]}
//         alt={`slide-${currentIndex}`}
//         className="w-full h-auto rounded-lg"
//       />

//       {/* Sol düymə */}
//       <button
//         onClick={goToPrevious}
//         className={`${images.length>1?'block':'hidden'} absolute top-1/2 left-4 transform -translate-y-1/2 text-4xl bg-gray-300  bg-opacity-50 text-white border-none p-2  cursor-pointer`}
//       >
//         ‹
//       </button>

//       {/* Sağ düymə */}
//       <button
//         onClick={goToNext}
//         className= {`${images.length>1?'block':'hidden'} absolute top-1/2 right-4 transform -translate-y-1/2 text-4xl bg-gray-300 bg-opacity-50 text-white border-none p-2 cursor-pointer`}
//       >
//         ›
//       </button>
//     </div>
//   );
// };

// export default Slider;




