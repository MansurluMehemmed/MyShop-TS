import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../State/store"
import { AiOutlineDelete } from "react-icons/ai"
import { add, decrease, deleteProducts } from "../State/FetchSlice"

const Payment = () => {
    const dispatch = useDispatch<AppDispatch>()
    const {basketData} = useSelector((state:RootState)=>state.fetch)
  return (
    <div className="w-full flex flex-col items-center  bg-[#ebebeb] h-screen absolute mt-[100px]">
        <div className="flex flex-col w-[60%] mt-10 bg-white">
             <ul className="flex flex-col px-5 overflow-y-scroll gap-[10px] max-h-[300px]  w-full m-0 p-0">
                      {basketData.length === 0 ? (
                        <p className="text-[18px] text-center text-red-400">
                          The cart is empty.
                        </p>
                      ) : (
                        basketData.map((product) => (
                          <li
                            key={product.id}
                            className="flex justify-between items-center shadow p-[10px] h-[80px]"
                          >
                            <div className="flex w-[60%] gap-3">
                              <div className="w-[70px]  h-[70px] relative">
                                <img
                                  className="w-full rounded-xl h-full "
                                  src={product.thumbnail}
                                  alt={product.title}
                                />
                                <span className="bg-red-600 absolute  rounded-full  top-1 right-1 flex h-4 text-[15px] text-white items-center justify-center w-4">
                                  {product.count}
                                </span>
                              </div>
                              <div className="flex flex-col gap-5 ">
                                <p className="overflow-clip text-nowrap text-ellipsis  w-full">
                                  {product.title}
                                </p>
                                <p className="text-red-600">
                                  $
                                  {product.discountPercentage
                                    ? (
                                        product.price *
                                        (1 - product.discountPercentage / 100)
                                      ).toFixed(2)
                                    : product.price}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center border w-[80px] justify-between ">
                              <button
                                onClick={() =>
                                  dispatch(decrease({ ...product, count: product.count }))
                                }
                                className=" bg-gray-400 hover:bg-gray-300 text-[15px] w-[20px] h-[20px] rounded-full flex border items-center justify-center "
                              >
                                -
                              </button>
                              <span>{product.count}</span>
                              <button
                                onClick={() =>
                                  dispatch(add({ ...product, count: product.count }))
                                }
                                className="bg-gray-400 text-[15px] w-[20px] h-[20px] rounded-full flex border items-center justify-center hover:bg-gray-300"
                              >
                                +
                              </button>
                            </div>
                            <div className="">
                              <AiOutlineDelete
                                onClick={() => dispatch(deleteProducts(product.id))}
                                size={18}
                                className="hover:text-red-500  cursor-pointer hover:shadow-red-400"
                              />
                            </div>
                          </li>
                        ))
                      )}
                    </ul>
        </div>
    </div>
  )
}

export default Payment