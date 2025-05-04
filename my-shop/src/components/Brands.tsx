import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../State/store";
import {
  filteredBrands,
  filteredSearch,
  selectedBrands,
} from "../State/FetchSlice";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import "../hooks/SwiperStyle.css";

const Brands: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { brands } = useSelector((state: RootState) => state.fetch);
  const handleBrands = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    dispatch(selectedBrands(target.textContent));
    dispatch(filteredBrands(target.textContent));
    dispatch(filteredSearch(target.textContent));
    navigate("/filteredProducts");
  };
  return (
    <div className="w-full flex  justify-center px-4 py-6">
      <div className="flex !h-24  max-sm:h-[12] sm:h-[18] w-[80%]">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerGroup={5} // Bir dəfəlik hərəkətdə 5 slayd çevriləcək
          pagination={false}
          slidesPerView={3}
          breakpoints={{
            220: { slidesPerView: 2,slidesPerGroup:2 },
            640: { slidesPerView: 3,slidesPerGroup:3 },
            768: { slidesPerView: 4,slidesPerGroup:4 },
            1024: { slidesPerView: 5,slidesPerGroup:5 },
          }}
          navigation
          className="mySwiper !h-24 max-sm:h-[12] sm:h-[18]"
        >
          {brands.map((brand, index) => (
            <div className="flex justify-center w-[80%]">
              <SwiperSlide key={index} className="!h-24 max-sm:h-[12] sm:h-[18]">
                <div
                  onClick={(e) => handleBrands(e)}
                  key={brand}
                  className="w-full max-sm:text-[11px]  sm:text-[15px] cursor-pointer h-24 max-sm:h-[12] sm:h-[18] bg-white rounded-md shadow flex items-center justify-center"
                  //  className="bg-white rounded-xl shadow-md h-[100px]  text-center text-lg font-semibold"
                >
                  {brand}
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
  //   const [startIndex, setStartIndex] = useState(0);

  //   const handleNext = () => {
  //     if (startIndex + slidesPerPage < brands.length) {
  //       setStartIndex(startIndex + 5);
  //     }
  //   };

  //   const handlePrev = () => {
  //     if (startIndex > 0) {
  //       setStartIndex(startIndex - 5);
  //     }
  //   };
  //   const handleBrands = (e:React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
  //     const target = e.target as HTMLDivElement;
  //        dispatch(selectedBrands(target.textContent))
  //        dispatch(filteredBrands(target.textContent))
  //         dispatch(filteredSearch(target.textContent))
  //         navigate('/filteredProducts')
  //   }

  //   const currentSlides = brands.slice(startIndex, startIndex + slidesPerPage);

  //   return (
  //     <div className="flex w-full py-10 flex-col my-10 justify-center items-center bg-gray-50">
  //       <div className="flex w-[80%] flex-col gap-15">
  //       <h2 className="text-3xl font-semibold self-start">Brands</h2>
  //         <div className="relative w-full flex flex-col px-6 py-4 ">
  //       <div className="flex items-center w-full space-x-4 overflow-hidden">
  //         <button
  //           onClick={handlePrev}
  //           className="bg-white shadow rounded-full p-2 disabled:opacity-30"
  //           disabled={startIndex === 0}
  //         >
  //           ◀
  //         </button>

  //         <div className="grid grid-cols-5 max-sm:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 w-full space-x-4  ">
  //           {currentSlides.map((brand) => (
  //             <div
  //             onClick={(e)=>handleBrands(e)}
  //               key={brand}
  //               className="w-full cursor-pointer h-24 bg-white rounded-md shadow flex items-center justify-center"
  //             > {brand}
  //             </div>
  //           ))}
  //         </div>

  //         <button
  //           onClick={handleNext}
  //           className="bg-white shadow rounded-full p-2 disabled:opacity-30"
  //           disabled={startIndex + slidesPerPage >= brands.length}
  //         >
  //           ▶
  //         </button>
  //       </div>

  //       <div className="flex justify-center mt-4 space-x-2">
  //         {Array.from({ length: Math.floor(brands.length /5) }).map((_, i) => (
  //           <div
  //             key={i}
  //             className={`w-2 h-2 rounded-full ${
  //               i === startIndex ? 'bg-purple-500' : 'bg-gray-300'
  //             }`}
  //           ></div>
  //         ))}
  //       </div>
  //     </div>
  //       </div>
  //     </div>
  //   );
};

export default Brands;
