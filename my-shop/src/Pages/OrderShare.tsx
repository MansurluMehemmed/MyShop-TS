import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../State/store";
import { Link, useNavigate } from "react-router-dom";
import { deleteAll, ordered } from "../State/FetchSlice";

const OrderShare = () => {
    const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>();
  const { basketData } = useSelector((state: RootState) => state.fetch);
  return (
    <div className="w-full flex justify-center py-[50px]">
      <div className="flex flex-col w-[80%]  mt-[100px] bg-white  shadow">
        <div className="flex w-full">
          <ul className="flex flex-col gap-10  w-full p-0 m-0">
            {basketData.map((product) => (
              <li
                key={product.id}
                className="flex justify-between items-center shadow py-[20px] px-[20px] "
              >
                
                  <div className="  h-[70px] flex gap-[10px] items-center w-[80%]">
                    <img
                      className=" w-[100px] rounded-xl h-[70px] "
                      src={product.thumbnail}
                      alt={product.title}
                    />
                     <p className=" text-nowrap text-[18px] text-ellipsis  w-full">
                      {product.title} / {product.brand}
                    </p>
                  </div>
                  
                  <div className="flex flex-row h-full gap-5">
                    <span className="self-center text-gray-500 text-[16px]">{product.count} piece.</span>
                    <div className="flex flex-col gap-[10px] items-center">
                    <p className="text-gray-400 text-[14px] line-through">
                      ${product.price}
                    </p>
                    <p className="text-red-600 text-[18px]">
                      $
                      {product.discountPercentage
                        ? (
                            product.price *
                            (1 - product.discountPercentage / 100)
                          ).toFixed(2)
                        : product.price}
                    </p>
                    </div>
                  </div>
                
              </li>
            ))}
          </ul>
        </div>

        <Link
          to="/delivery"
          className="flex flex-row w-full justify-center items-center"
        >
          <button onClick={()=>{
            dispatch(ordered(basketData.map(product=>product)))
            dispatch(deleteAll())
            navigate(-2)
          }} className="w-full bg-[#7c62e3] transition duration-300 hover:bg-[#9783e8] text-white  py-[10px] ">
            Order it
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderShare;
