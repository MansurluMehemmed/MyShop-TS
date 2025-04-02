import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../State/store";
import FavoriButton from "../layouts/FavoriButton";
import { Link } from "react-router-dom";
import { useEffect, useState} from "react";
import { add, addFavorite, fetchData, productPageElement } from "../State/FetchSlice";

const Cards = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  let {  data,isLoading, error,showMore,seachQuery,favoriteProducts } = useSelector(
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
    if(seachQuery){
      data = data.filter((product)=>product.title.toUpperCase().includes(seachQuery.toUpperCase()))
    }
    return data
  }
  const filteredProducts = getFilteredProducts()
  return (
    <>
      
      {filteredProducts.map((item) => (
        <div 
        key={item.id}
       
          
          className="   flex group relative cursor-pointer border-r-[#EBEBEB]  bg-white flex-col  hover:shadow-[0_25px_29px_rgba(63,78,100,0.15)] transition-transform duration-300 ease-linear hover:border-2 hover:border-solid hover:border-[#EBEBEB]  hover:rounded-lg "
        >
          <div className="w-full flex  ">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-auto "
            />
          </div>
          <div onClick={()=>dispatch(addFavorite({...item}))}  className="absolute z-10 top-[15px] left-[15px] ">
            <FavoriButton/>
          </div>
          <div className="flex flex-col px-[10px] items-center justify-center">
            <Link
              to={`/productpage/${item.id}`}
              className="text-[#1e1e27] hover:text-gray-500 flex max-sm:text-[13px] items-center justify-center h-[55px] text-[18px]"
              onClick={()=>{dispatch(productPageElement(item.id))}}
            >
              {item.title}
            </Link>
            <div className="flex  flex-row gap-[15px] justify-around items-center text-[14px]">
              <p className={`text-[#b5aec4] max-sm:text-[10px] ${item.discountPercentage? "line-through":''} `}>${item.price}</p>
              {item.discountPercentage && (
                      <span className="text-red-600 max-sm:text-[11px]">${(item.price * (1 - item.discountPercentage / 100)).toFixed(2)}</span>)}
              
            </div>
          </div>

          <button onClick={()=>{dispatch(add({...item,count:1}))
            setIsModalOpen(true)
            setTimeout(() => {
              setIsModalOpen(false)
            }, 800);
        }} className={`text-white gap-0 bg-white ${isModalOpen?'group-hover:bg-green-600':'group-hover:bg-red-500'}  max-lg:bg-red-500 mt-[20px] h-[40px] max-sm:h-[25px] max-sm:text-[10px]  flex items-center justify-center  transition duration-200 ease-linear w-full text-[12px] font-semibold`}>
          {isModalOpen?'ADDED ':'ADD TO CART'}
          </button>
        </div>
      ))}
    </>
  );
};

export default Cards;
