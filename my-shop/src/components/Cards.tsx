import { useSelector } from "react-redux";
import { RootState } from "../State/store";
import FavoriButton from "../layouts/FavoriButton";
import { Link } from "react-router-dom";

const Cards = () => {
  const data = useSelector((state: RootState) => state.fetch);
//   console.log(data);

  return (
    <div className="flex relative bg-white flex-col w-[20%] border border-gray-400 ">
      <div className="w-full flex  ">
        
        <img
          src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
          alt=""
          className="w-full h-auto "
        />

      </div>
      <div className="absolute z-10 top-[15px] left-[15px] "><FavoriButton /></div>
      <div className="flex flex-col px-[10px] items-center justify-center">
        <Link to='/ProductInfo' className="text-[#1e1e27]  text-[18px]">Title asd asdasda dasdasd asdas asdasdas</Link>
        <div className="flex  flex-row gap-[15px] justify-around items-center text-[14px]">
            <p className="text-red-600 ">Price</p>
            <span className="text-[#b5aec4} line-through">Discount</span>
        </div>
      </div>
      
      <button className="text-white mt-[20px] h-[40px]  bg-red-500 flex items-center justify-center hover:bg-red-400 transition duration-200 ease-linear w-full text-[12px] font-semibold">
        ADD TO CARD
      </button>
    </div>
  );
};

export default Cards;
