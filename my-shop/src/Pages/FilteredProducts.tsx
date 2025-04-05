import { useSelector } from "react-redux"
import { RootState } from "../State/store"

const FilteredProducts = () => {
  const {filteredProduct} = useSelector((state:RootState)=>state.fetch)
  console.log(filteredProduct);
  
  return (
    <div className='w-full flex justify-center'>
        <div className="flex w-[90%] bg-white"></div>
    </div>
  )
}

export default FilteredProducts