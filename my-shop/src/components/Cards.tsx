import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../State/store";
import FavoriButton from "../layouts/FavoriButton";
import { Link } from "react-router-dom";
import { useEffect} from "react";
import { fetchData } from "../State/FetchSlice";

const Cards = () => {
  const dispatch = useDispatch<AppDispatch>();
  let {  data,isLoading, error,showMore } = useSelector(
    (state: RootState) => state.fetch
  );
  const selectedCategory = useSelector(
    (state: RootState) => state.fetch.selectedCategory
  );

  useEffect(() => {
    dispatch(fetchData(showMore));
  }, [dispatch]);
  
  const getFilteredProducts = ()=>{
    if(selectedCategory!=='ALL'){
      data = data.filter(product=>product.category.toUpperCase()===selectedCategory)
    }
    else{
      data = data
    }
    return data
  }
  const filteredProducts = getFilteredProducts()
  return (
    <>
      
      {filteredProducts.map((item) => (
        <div
        key={item.id}
       
          
          className="flex group  relative cursor-pointer border-r-[#EBEBEB]  bg-white flex-col w-[20%] hover:shadow-[0_25px_29px_rgba(63,78,100,0.15)] transition-transform duration-300 ease-linear hover:border-2 hover:border-solid hover:border-[#EBEBEB]  hover:rounded-lg "
        >
          <div className="w-full flex  ">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-auto "
            />
          </div>
          <div className="absolute z-10 top-[15px] left-[15px] ">
            <FavoriButton />
          </div>
          <div className="flex flex-col px-[10px] items-center justify-center">
            <Link
              to="/ProductInfo"
              className="text-[#1e1e27] hover:text-gray-500 flex items-center justify-center h-[55px] text-[18px]"
            >
              {item.title}
            </Link>
            <div className="flex  flex-row gap-[15px] justify-around items-center text-[14px]">
              <p className="text-red-600 ">${item.discountPercentage}</p>
              <span className="text-[#b5aec4} line-through">${item.price}</span>
            </div>
          </div>

          <button className="text-white mt-[20px] h-[40px] group-hover:bg-red-500 flex items-center justify-center hover:bg-red-400 transition duration-200 ease-linear w-full text-[12px] font-semibold">
            ADD TO CARD
          </button>
        </div>
      ))}
    </>
  );
};

export default Cards;
