import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../State/store";
import { moreInfoOrder, productPageElement } from "../State/FetchSlice";
import { useEffect } from "react";

const Orders = () => {
    const dispatch = useDispatch<AppDispatch>()
  const { orders } = useSelector((state: RootState) => state.fetch);
  useEffect(() => {
      window.scrollTo(0, 0);
    }, [orders]);
  return (
    <div className="flex w-full h-full justify-center">
      <div className="flex flex-col w-[80%] mt-[100px]">
        <h1 className="text-[28px] font-semibold">My Orders</h1>
        <ul className="flex flex-col w-full px-5 m-0">
          {orders.map((order) => (
            <li key={order.id} className="flex flex-col w-full p-5">
              <div className="flex justify-between w-full border-b py-5">
                <span className="text-xl ">Order № {order.id}</span>
                <div className="flex flex-row gap-5">
                  <p className="text-[15px]">Date of order : {order.date}</p>
                  <p className="text-green-400 px-[5px] bg-gray-200">
                    delivered
                  </p>
                </div>
              </div>

              <div className="flex w-full my-[10px] ">
                {order.product.map((product) => (
                  <Link key={product.id} onClick={()=>{dispatch(productPageElement(product.id))}} className="w-[100px] h-[100px]" to={`/productpage/${product.id}`}>
                    <img className="rounded-xl" src={product.thumbnail} alt={product.title} />
                  </Link>
                ))}
              </div>
              <div className="flex justify-between ">
                <Link className="text-[#7c62e3]" onClick={()=>dispatch(moreInfoOrder(order.id))} to={`/orders/${order.id}`}>
                  More about the order
                </Link>
                <p>
                  {order.product.length} product amount: {order.totalPrice} $
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Orders;
