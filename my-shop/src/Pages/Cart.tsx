import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../State/store"
import { AiOutlineDelete } from "react-icons/ai"
import { add, decrease, deleteProducts } from "../State/FetchSlice"
import { Link, useNavigate } from "react-router-dom"
import CartSection from "../layouts/CartSection"

const Payment = () => {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const { basketData } = useSelector((state: RootState) => state.fetch);
  let total: number = 0;
  basketData.forEach((item) => {
    let productTotal = item.count * item.price;
    total = Number((total + productTotal).toFixed(2));
  });
  return (
    <div className="w-full flex flex-col items-center  bg-[#ebebeb] h-full absolute ">
       
        <div className="flex flex-col  relative w-[80%] mt-[140px] gap-10 min-h-[20%] bg-white justify-between">
        <button
          onClick={() => navigate(-1)}
          className=" flex fixed z-30 max-md:left-3  left-20 justify-self-start self-start px-5 py-2 bg-red-600 text-white rounded cursor-pointer"
        >
          Back
        </button>
                    <div className="flex py-10 flex-col gap-10">
                      <CartSection/>
                      <h2 className="text-xl self-end mr-10">Total price : ${total}</h2>
                    </div>
                    <Link to='/delivery' className="flex flex-row w-full justify-center items-center">
                      <button  className="w-full bg-[#7c62e3] transition duration-300 hover:bg-[#9783e8] text-white  py-[10px] ">Order it</button>
                    </Link>
        </div>
    </div>
  )
}

export default Payment