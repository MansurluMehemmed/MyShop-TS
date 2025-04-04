import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../State/store";
import { add, decrease, deleteAll, deleteProducts } from "../State/FetchSlice";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import CartSection from "../layouts/CartSection";

interface ChildProps {
  setBasketMenu: React.Dispatch<React.SetStateAction<boolean>>;
  ref?:any
}

const Basket: React.FC<ChildProps> = ({ setBasketMenu,ref }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { basketData } = useSelector((state: RootState) => state.fetch);
  let total: number = 0;
  basketData.forEach((item) => {
    let productTotal =
      item.count *
      (item.discountPercentage
        ? Number((item.price * (1 - item.discountPercentage / 100)).toFixed(2))
        : item.price);
    total = Number((total + productTotal).toFixed(2));
  });

  return (
    <>
      <div ref={ref} className="flex py-5  rounded flex-col gap-10 bg-[#ebebeb]  w-[600px] top-10 right-[15px] transition-all duration-1000 absolute z-25 h-auto max-h-[500px]">
         <ul className="flex flex-col px-5 overflow-y-scroll gap-[10px] max-h-[400px]     w-full m-0 p-0">
              {basketData.length === 0 ? (
                <p className="text-[18px] flex self-center justify-self-center text-red-400">
                  The cart is empty.
                </p>
              ) : (
                basketData.map((product) => (
                  <li
                    key={product.id}
                    className="flex justify-between items-center shadow p-[10px] h-[80px]"
                  >
                    <div className="flex w-[60%] gap-3">
                      <div className="w-[70px]  h-[70px] relative">
                        <img
                          className="w-full rounded-xl h-full "
                          src={product.thumbnail}
                          alt={product.title}
                        />
                        <span className="bg-red-600 absolute  rounded-full  top-1 right-1 flex h-4 text-[15px] text-white items-center justify-center w-4">
                          {product.count}
                        </span>
                      </div>
                      <div className="flex flex-col gap-5 ">
                        <p className="overflow-clip text-nowrap text-ellipsis  w-full">
                          {product.title}
                        </p>
                        <div className="flex flex-row gap-[10px] items-center">
                          <p className="text-red-600">
                            $
                            {product.discountPercentage
                              ? (
                                  product.price *
                                  (1 - product.discountPercentage / 100)
                                ).toFixed(2)
                              : product.price}
                          </p>
                          <p className="text-gray-400 text-[14px] line-through">
                            ${product.price}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    
                  </li>
                ))
              )}
            </ul>

        <div className="flex px-5 justify-between items-center  w-full ">
          <h6>Total Price: {total}$</h6>
          <div className="flex gap-2">
            <button
              onClick={() => {
                dispatch(deleteAll());
                setBasketMenu(false);
              }}
              className="bg-red-500 rounded p-[6px] transition duration-500 text-white hover:bg-red-400"
            >
              Delete All
            </button>
            <Link to="/isOrdered">
              <button
                onClick={() => setBasketMenu(false)}
                className="bg-[#7c62e3] rounded p-[6px] transition duration-500 text-white hover:bg-[#a791ff] "
              >
                Go to cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Basket;
