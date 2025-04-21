import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../State/store";
import { useState } from "react";
import { filteredBrands, filteredSearch, selectedBrands } from "../State/FetchSlice";
import { useNavigate } from "react-router-dom";

const slidesPerPage = 5;

const Brands: React.FC = () => {
    const dispatch =useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const {brands} = useSelector((state:RootState)=>state.fetch)
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + slidesPerPage < brands.length) {
      setStartIndex(startIndex + 5);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 5);
    }
  };
  const handleBrands = (e:React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
    const target = e.target as HTMLDivElement;
       dispatch(selectedBrands(target.textContent))
       dispatch(filteredBrands(target.textContent))
        dispatch(filteredSearch(target.textContent))
        navigate('/filteredProducts')
  }

  const currentSlides = brands.slice(startIndex, startIndex + slidesPerPage);

  return (
    <div className="flex w-full py-10 flex-col my-10 justify-center items-center bg-gray-50">
      <div className="flex w-[80%] flex-col gap-15">
      <h2 className="text-3xl font-semibold self-start">Brands</h2>
        <div className="relative w-full flex flex-col px-6 py-4 ">
      <div className="flex items-center w-full space-x-4 overflow-hidden">
        <button
          onClick={handlePrev}
          className="bg-white shadow rounded-full p-2 disabled:opacity-30"
          disabled={startIndex === 0}
        >
          ◀
        </button>

        <div className="grid grid-cols-5 max-sm:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 w-full space-x-4  ">
          {currentSlides.map((brand) => (
            <div
            onClick={(e)=>handleBrands(e)}
              key={brand}
              className="w-full cursor-pointer h-24 bg-white rounded-md shadow flex items-center justify-center"
            > {brand}
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="bg-white shadow rounded-full p-2 disabled:opacity-30"
          disabled={startIndex + slidesPerPage >= brands.length}
        >
          ▶
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: Math.floor(brands.length /5) }).map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === startIndex ? 'bg-purple-500' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
      </div>
    </div>
  );
};

export default Brands;