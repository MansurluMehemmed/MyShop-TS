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
}

const Basket: React.FC<ChildProps> = ({ setBasketMenu }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { basketData } = useSelector((state: RootState) => state.fetch);
  let total: number = 0;
  basketData.forEach((item) => {
    let productTotal = item.count * (item.discountPercentage
      ? Number((
          item.price *
          (1 - item.discountPercentage / 100)
        ).toFixed(2))
      : item.price);;
    total = Number((total + productTotal).toFixed(2));
  });
  
  return (
    <>
      <div className="flex py-5  rounded-xl flex-col gap-10 bg-[#ebebeb]  w-[600px] top-18 right-[15px] transition-all duration-1000 absolute z-25 h-auto max-h-[500px]">
        <CartSection/>
        
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
