
const Orders = () => {
  return (
    <div className="flex w-full h-full justify-center" >
        <div className="flex flex-col w-[80%]">
            <h1 className="text-3xl font-semibold">My Orders</h1>
            <ul className="flex flex-col w-full px-5 m-0">
                <li className="flex w-full p-5">
                    <div className="flex justify-between w-full ">
                        <span className="text-2xl ">Order № 1</span>
                        
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Orders