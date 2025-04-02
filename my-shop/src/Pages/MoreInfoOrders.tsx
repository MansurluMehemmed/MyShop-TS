import { useSelector } from "react-redux"
import { RootState } from "../State/store"

const MoreInfoOrders = () => {
    const {orders} = useSelector((state:RootState)=>state.fetch)
  return (
    <div className='flex w-full bg-gray-100'>
        <div className="flex w-[80%] xs:bg-red-500 bg-white mt-[100px]">
        <h1 className="text-[28px] font-semibold">Order </h1>
            <div className="flex flex-col">
                <h2>Order information</h2>
            </div>
        </div>
    </div>
  )
}

export default MoreInfoOrders