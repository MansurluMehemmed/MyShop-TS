import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../State/store"
import { AiOutlineDelete } from "react-icons/ai"
import { add, decrease, deleteProducts } from "../State/FetchSlice"
import { Link } from "react-router-dom"
import CartSection from "../layouts/CartSection"

const Payment = () => {
    const dispatch = useDispatch<AppDispatch>()
    const {basketData} = useSelector((state:RootState)=>state.fetch)
  return (
    <div className="w-full flex flex-col items-center  bg-[#ebebeb] h-screen absolute ">
        <div className="flex flex-col w-[60%] mt-[140px] gap-10 min-h-[20%] bg-white justify-between">
                    <div className="flex py-10"><CartSection/></div>
                    <Link to='/delivery' className="flex flex-row w-full justify-center items-center">
                      <button  className="w-full bg-[#7c62e3] transition duration-300 hover:bg-[#9783e8] text-white  py-[10px] ">Order it</button>
                    </Link>
        </div>
    </div>
  )
}

export default Payment