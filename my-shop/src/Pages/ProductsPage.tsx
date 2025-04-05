
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../State/store";
import { add } from "../State/FetchSlice";
import Rating from "../layouts/Rating/Rating";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import ImageSlider from "../layouts/ImageSlider";

const ProductsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [rewiewDisplay, setRewiewDisplay] = useState(false);
  const navigate = useNavigate();
  const { productPageData } = useSelector((state: RootState) => state.fetch);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex justify-center items-center  ">
      <div className=" w-[80%]  mt-[100px] relative ">
        <button
          onClick={() => navigate(-1)}
          className=" flex fixed z-30 max-md:left-3  left-20 justify-self-start self-start px-5 py-2 bg-red-600 text-white rounded cursor-pointer"
        >
          Back
        </button>
        {productPageData.map((product) => (
          <div key={product.id} className="flex flex-col w-full">
            <div key={product.id} className="flex flex-col md:flex-row gap-10 ">
              <div
                key={product.id}
                className="flex w-full mx-[10px] md:w-[50%] md:mx-0 h-screen"
              >
               

<ImageSlider images={product.images} interval={4000}/>
               
              </div>
              <div className="flex w-full md:w-[50%] flex-col ">
                <h2 className="font-semibold text-2xl mb-[10px]">
                  {product.title}
                </h2>

                <p className="mb-5">{product.description}</p>
                <Rating />
                <div className="flex flex-row  mb-10 gap-5">
                  <p>Total Rating: {product.rating}</p>
                  <Link
                    to="/reviews"
                    className="flex cursor-pointer "
                    onClick={() => setRewiewDisplay(!rewiewDisplay)}
                  >
                    <MessageCircle />
                    <span>{product.reviews?.length} rewiew</span>
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
                  onClick={() => dispatch(add({ ...product, count: 1 }))}
                  className="w-full bg-[#7c62e3] transition duration-300 hover:bg-[#9783e8] text-white  py-[10px] "
                >
                  Order it
                </button>

                <div className="flex flex-col p-5 gap-[5px] mt-10 w-full shadow bg-white">
                  <p className="font-semibold">Product information:</p>
                  <p>Brand: {product.brand}</p>
                  <p>Warranty Information : {product.warrantyInformation}</p>
                  <p>Shipping Information : {product.shippingInformation}</p>
                  <p>Availability Status : {product.availabilityStatus}</p>
                  <p>Return Policy : {product.returnPolicy}</p>
                </div>
              </div>
            </div>
            <div className="flex mt-10 w-full">
              <div id="/reviews" className={`flex flex-col w-full gap-5 `}>
                <h2 className="text-2xl">Product reviews and ratings:</h2>
                <ul className="w-full flex flex-col p-0 m-0 shadow gap-2">
                  {product.reviews.map((review) => (
                    <li className="flex flex-col shadow px-[10px] py-[10px] max-sm:gap-1 gap-3">
                      <div className="flex">
                        <div className="flex gap-3  w-[50%] ">
                          <span className="bg-blue-300 max-sm:text-[16px] max-sm:w-[35px] max-sm:h-[35px] sm:text-[18px] md:text-xl  max-xl:w-[65px] max-xl:h-[65px]  text-3xl flex w-[70px] h-[70px] rounded-full  items-center justify-center">
                            {review.reviewerName[0]}
                          </span>
                          <div className="flex flex-col">
                            <h2 className="text-[20px] max-sm:text-[14px] font-semibold">
                              {review.reviewerName}
                            </h2>
                            <p className="text-[14px] mb-5 max-sm:mb-2 max-sm:text-[10px] text-gray-700">
                              {review.date}
                            </p>
                            <p className="text-[16px]  max-sm:text-[12px] text-gray-500">
                              {review.comment}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-end w-[50%]">
                          <p className="text-[16px] max-sm:text-[12px]">
                            Rating: {review.rating}/5
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
