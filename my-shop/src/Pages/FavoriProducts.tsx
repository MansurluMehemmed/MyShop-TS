
import { add, addFavorite, productPageElement } from '../State/FetchSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../State/store';
import FavoriButton from '../layouts/FavoriButton';
import { Link } from 'react-router-dom';

const FavoriProducts = () => {
    const dispatch = useDispatch<AppDispatch>();
  const  {  favoriteProducts } = useSelector(
    (state: RootState) => state.fetch
  );
  
  
  return (
   
    <div className='flex w-full h-full justify-center items-center  '>
      <div className='w-[80%]  mt-[100px]  grid grid-cols-1  max-sm:grid-cols-2 gap-0 max-lg:gap-[10px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5   px-0 md:px-10'>
    {favoriteProducts.map((item)=>(
        
        <div className="flex flex-row w-full">
          <div 
        key={item.id}
       
          
          className="   flex  group relative cursor-pointer border-r-[#EBEBEB]  bg-white flex-col w-[20%] hover:shadow-[0_25px_29px_rgba(63,78,100,0.15)] transition-transform duration-300 ease-linear hover:border-2 hover:border-solid hover:border-[#EBEBEB]  hover:rounded-lg "
        >
          <div className="w-full flex  ">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-auto "
            />
          </div>
          <div onClick={()=>dispatch(addFavorite({...item}))} className="absolute z-10 top-[15px] left-[15px] ">
            <FavoriButton  />
          </div>
          <div className="flex flex-col px-[10px] items-center justify-center">
            <Link
              to={`/productpage/${item.id}`}
              className="text-[#1e1e27] hover:text-gray-500 flex items-center justify-center h-[55px] text-[18px]"
              onClick={()=>{dispatch(productPageElement(item.id))}}
            >
              {item.title}
            </Link>
            <div className="flex  flex-row gap-[15px] justify-around items-center text-[14px]">
              <p className={`text-[#b5aec4} ${item.discountPercentage? "line-through":''} `}>${item.price}</p>
              {item.discountPercentage && (
                      <span className="text-red-600">${(item.price * (1 - item.discountPercentage / 100)).toFixed(2)}</span>)}
              
            </div>
          </div>

          <button onClick={()=>dispatch(add({...item,count:1}))} className="text-white mt-[20px] h-[40px] group-hover:bg-red-500 flex items-center justify-center hover:bg-red-400 transition duration-200 ease-linear w-full text-[12px] font-semibold">
            ADD TO CARD
          </button>
        </div>
        </div>
       
    ))}
     </div>
    </div>
  )
}

export default FavoriProducts