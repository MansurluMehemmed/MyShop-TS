
import {  AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../State/store";
import { add, decrease } from "../State/FetchSlice";

const Basket = () => {
    const dispatch = useDispatch<AppDispatch>()
    const {basketData} = useSelector((state:RootState)=>state.fetch)
    
    

  return (
    <>
    
        <div className="flex py-5 px-5 rounded-xl flex-col gap-10 bg-[#ebebeb]  w-[600px] top-18 right-[15px] transition-all duration-1000 absolute z-25 h-auto max-h-[400px]">
        <ul  className="flex flex-col  w-full m-0 p-0">
            
         {
            basketData.map(product=>(
                
          <li key={product.id} className="flex justify-between items-center  h-[80px]">
            <div className="flex w-[50%] gap-3">
            <div className="w-[70px]  h-[70px] relative">
              <img className="w-full rounded-xl h-full " src={product.thumbnail} alt={product.title} />
              <span className="bg-red-600 absolute  rounded-full  top-1 right-1 flex h-4 text-[15px] text-white items-center justify-center w-4">
                {product.count}
              </span>
            </div>
            <div className="flex flex-col gap-5 ">
              <p >{product.title}</p>
              <p className="text-red-600">${product.discountPercentage ? (product.price * (1 - product.discountPercentage / 100)):product.price }</p>
            </div>
            </div>
            <div className="flex items-center border w-[80px] justify-between ">
              <button  onClick={()=>dispatch(decrease({...product,count:product.count}))} className="bg-gray-400 hover:bg-gray-300 text-[15px] w-[20px] h-[20px] rounded-full flex border items-center justify-center ">-</button>
              <span>{product.count}</span>
              <button onClick={()=>dispatch(add({...product,count:product.count}))} className="bg-gray-400 text-[15px] w-[20px] h-[20px] rounded-full flex border items-center justify-center hover:bg-gray-300">+</button>
            </div>
            <div className="">
              <AiOutlineDelete size={18} className="hover:text-red-500  cursor-pointer hover:shadow-red-400"/> 
            </div>
          </li>
            ))
         }
        </ul>

        <div className="flex  justify-between items-center  w-full ">
          <h6>Total Price:100$</h6>
          <div className="flex gap-2">
          <button className="bg-red-500 rounded p-[6px] transition duration-500 text-white hover:bg-red-400">Delete All</button>
              <button className="bg-green-500 rounded p-[6px] transition duration-500 text-white hover:bg-green-400 ">Ordered</button>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Basket;
