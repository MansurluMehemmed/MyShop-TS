import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useSelector } from "react-redux";
import { RootState } from "../State/store";
import CardProps from "./CardProps";

const MostRecentlyViewed = () => {
  const { mostRecentlyProducts } = useSelector((state: RootState) => state.fetch);
  
  return (
    <div className="flex w-full flex-col justify-center mb-20 items-center bg-[#F7F7F7]">
     <div className="flex flex-col gap-10 w-[80%]">
       <h2 className="text-3xl font-semibold self-start">Most Recently Viewed</h2>
      <div className="w-full flex ">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          navigation
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {mostRecentlyProducts.map((product) => (
            <div key={product.id} className="grid grid-cols-5 w-full">
              <SwiperSlide key={product.id}>
                <CardProps item={product} />
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
     </div>
    </div>
  );
};

export default MostRecentlyViewed;
