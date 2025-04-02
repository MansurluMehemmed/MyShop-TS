import { useSelector } from "react-redux";
import { RootState } from "../State/store";
import { Link, useNavigate } from "react-router-dom";
import { moreInfoOrder } from "../State/FetchSlice";

const MoreInfoOrders = () => {
  const { MoreInfoOrders } = useSelector((state: RootState) => state.fetch);
  
  const navigate = useNavigate();
  return (
    <div className="flex w-full bg-gray-100 justify-center h-full">
      <div className="flex w-[80%] xs:bg-red-500 bg-white flex-col h-full mt-[100px]">
        <p onClick={() => navigate(-1)} className="cursor-pointer">
          {" "}
          My Orders
        </p>

        {MoreInfoOrders.map((order) => (
          <div className="flex flex-col px-10">
            <Link to='/orders' className="text-[28px] border-b font-semibold mb-20">Order № {order.id} </Link>
            <div className="flex flex-col w-[70%] self-center">
              <h2 className="font-semibold text-xl mb-5">Order information</h2>
              <div className=" order-details flex flex-col gap-5">
                <p>Order status: <span>Delivered</span></p>
                <p>Delivery date and time: <span>{order.date}</span></p>
                <p>Delivery method: <span>{order.deliveryMethod}</span></p>
                <p>Payment method: <span>{order.paymentMethod}</span></p>
                <p>Sifarişin rəsmiləşdirmə tarixi: <span>{order.date}</span></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreInfoOrders;
