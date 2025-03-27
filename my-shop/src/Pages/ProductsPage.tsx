import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../State/store";
import { useEffect, useState } from "react";
import { add } from "../State/FetchSlice";
import Rating from "../layouts/Rating/Rating";
import { MessageCircle } from "lucide-react";

const ProductsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate()
  const { productPageData } = useSelector((state: RootState) => state.fetch);
  //    useEffect(()=>{

  //    },[])
 
  return (
    <div className="w-full flex justify-center items-center top-[100px] absolute">
        <button onClick={()=>navigate(-1)} className=" flex justify-self-start self-start px-5 py-2 bg-red-600 text-white rounded cursor-pointer">Back</button>
      {productPageData.map((product) => (
        
        
        <div key={product.id} className="flex w-[80%] gap-10 flex-row">
          <div className="flex w-[50%] h-screen">
            <Swiper
              className="mb-10"
              spaceBetween={50}
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
            >
              {product.images.map((image) => (
                <SwiperSlide  key={product.id} className=" w-full  h-screen ">
                  <div className=" w-full  flex h-screen justify-center items-center">
                    <img
                      className="w-full h-full "
                      src={image}
                      alt={product.title}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex w-[50%] flex-col ">
            <h2 className="font-semibold text-2xl mb-[10px]">
              {product.title}
            </h2>
            
            <p className="mb-5">{product.description}</p>
            <Rating/>
            <div className="flex ">
                <Link to="/rewiews">
                    <MessageCircle/> 
                    <span>{} rewiew</span>
                </Link>
            </div>
            <div className="flex  flex-row mb-10  gap-5 items-center text-2xl">
              {product.discountPercentage && (
                <span className="text-red-600">
                  $
                  {(
                    product.price *
                    (1 - product.discountPercentage / 100)
                  ).toFixed(2)}
                </span>
              )}
              <p
                className={`text-gray-400 text-[20px] ${product.discountPercentage ? "line-through" : ""} `}
              >
                ${product.price}
              </p>
            </div>

            <button
              onClick={() => dispatch(add({ ...product,count:1 }))}
              className="w-full bg-[#7c62e3] transition duration-300 hover:bg-[#9783e8] text-white  py-[10px] "
            >
              Order it
            </button>

            <div className="flex flex-col p-5 gap-[5px] w-full shadow bg-white">
              <p className="font-semibold">Product information:</p>
              <p>Brand: {product.brand}</p>
              <p>Warranty Information : {product.warrantyInformation}</p>
              <p>Shipping Information : {product.shippingInformation}</p>
              <p>Availability Status : {product.availabilityStatus}</p>
              <p>Return Policy : {product.returnPolicy}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
