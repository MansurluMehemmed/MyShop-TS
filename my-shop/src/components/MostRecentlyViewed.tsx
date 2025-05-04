import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useSelector } from "react-redux";
import { RootState } from "../State/store";
import CardProps from "./CardProps";

const MostRecentlyViewed = () => {
  const { mostRecentlyProducts } = useSelector(
    (state: RootState) => state.fetch
  );

  return (
    <div className="flex w-full flex-col justify-center mb-20 items-center bg-[#F7F7F7]">
      <div className="flex flex-col gap-10 w-[80%]">
        <h2 className="text-3xl font-semibold self-start">
          Most Recently Viewed
        </h2>
        {mostRecentlyProducts.length===0?<p className="text-red-500">There are no recently viewed products.</p>:<div className="w-full  flex ">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={5}
            navigation
            breakpoints={{
              220: { slidesPerView: 2 },
              450: { slidesPerView: 3 },
              700: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1200: { slidesPerView: 5 },
            }}
            className="w-full"
          >
            {mostRecentlyProducts.map((product) => (
              <SwiperSlide  key={product.id}>
                
                  <CardProps  item={product} />
                
              </SwiperSlide>
            ))}
          </Swiper>
        </div>}
      </div>
    </div>
  );
};

export default MostRecentlyViewed;
