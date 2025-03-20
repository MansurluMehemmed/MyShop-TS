import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <Swiper className="mb-10"
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      
      loop={true}
    >
      <SwiperSlide className=" w-full mt-[100px] h-screen bg-[url(https://themewagon.github.io/coloshop/images/slider_1.jpg)] bg-cover bg-center bg-repeat ">
        <div className=" w-[80%] flex h-screen justify-center items-center">
          <div className="md:gap-4 flex flex-col gap-8  w-[60%] h-auto">
            <p className=" sm:text-[18px] md:text-xl  ">
              Spring / Summer Collection 2025
            </p>
            <h1 className=" font-semibold text-[35px] md:text-[40px] lg:text-[60px] xl:text-[72px">
              Get up to 30% Off New Arrivals
            </h1>
            <Link className="text-white w-32  bg-red-500 flex items-center justify-center  cursor-pointer px-5 py-2 rounded hover:bg-red-400 transition duration-200 ease-linear" to=''>
                Show now 
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className=" w-full h-screen mt-[100px] bg-[url(https://themewagon.github.io/coloshop/images/slider_1.jpg)] bg-cover bg-center bg-repeat ">
        <div className=" w-[80%] flex h-screen justify-center items-center">
          <div className="md:gap-4 flex flex-col gap-8  w-[60%] h-auto">
            <p className=" sm:text-[18px] md:text-xl  ">
              Spring / Summer Collection 2025
            </p>
            <h1 className=" font-semibold text-[35px] md:text-[40px] lg:text-[60px] xl:text-[72px">
              Get up to 30% Off New Arrivals
            </h1>
            <Link className="text-white w-32  bg-red-500 flex items-center justify-center  cursor-pointer px-5 py-2 rounded hover:bg-red-400 transition duration-200 ease-linear" to=''>
                Show now 
            </Link>
          </div>
        </div>
      </SwiperSlide>
      
    </Swiper>
  );
};
export default Slider;
