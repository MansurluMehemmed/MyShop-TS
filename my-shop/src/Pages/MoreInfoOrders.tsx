import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../State/store";
import { Link, useNavigate } from "react-router-dom";
import { moreInfoOrder, productPageElement } from "../State/FetchSlice";

const MoreInfoOrders = () => {
  const { MoreInfoOrders } = useSelector((state: RootState) => state.fetch);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();


  return (
    <div className="flex w-full bg-gray-100 justify-center h-full">
      <div className="flex w-[80%] xs:bg-red-500 bg-white flex-col h-full mt-[100px]">
        <p onClick={() => navigate(-1)} className="cursor-pointer px-10 text-gray-700">
          {"<"} My Orders
        </p>

        {MoreInfoOrders.map((order) => (
          <div className="flex flex-col">
            <div key={order.id} className="flex flex-col px-10">
              <Link
                to="/orders"
                className="text-[28px] border-b font-semibold mb-20"
              >
                Order № {order.id}
              </Link>
              <div className="flex flex-col w-[70%] self-center">
                <h2 className="font-semibold text-xl mb-5">
                  Order information
                </h2>
                <div className=" order-details flex flex-row ">
                  <div className="flex flex-col w-[22%] gap-5">
                    <p>Order status:</p>
                    <p>Delivery date and time:</p>
                    <p>Delivery method:</p>
                    <p>Payment method:</p>
                    <p>Order processing date:</p>
                  </div>
                  <div className="flex flex-col w-[78%] gap-5">
                    <span>Delivered</span>
                    <span>{order.date}</span>
                    <span>{order.deliveryMethod}</span>
                    <span>{order.paymentMethod}</span>
                    <span>{order.date}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-[100px] px-10 w-full justify-center items-center">
              <div className="flex  w-[70%]  gap-10 flex-col">
                <h2 className="text-xl flex self-start font-semibold">
                  Contents of the order:
                </h2>
                <div className="flex flex-col gap-[10px]">
                  {order.product.map((product) => (
                    <div className="flex w-full h-[150px] border p-[10px] gap-5 px-[10px]">
                      <img
                        className="h-auto w-[150px] rounded "
                        src={product.thumbnail}
                        alt={product.title}
                      />
                      <div className="flex flex-col ">
                        <Link
                          onClick={() => {
                            dispatch(productPageElement(product.id));
                          }}
                          to={`/productpage/${product.id}`}
                          className="text-xl mb-[8px] hover:text-gray-600"
                        >
                          {product.title}
                        </Link>
                        <button className="bg-[#7c62e3] w-[130px] rounded p-[8px] text-white ">
                          Write a review
                        </button>
                        <p className="text-xl mt-[20px] font-semibold ">
                          $
                          {product.discountPercentage
                            ? (
                                product.price *
                                (1 - product.discountPercentage / 100)
                              ).toFixed(2)
                            : product.price}{" "}
                          <span className="text-[13px] ml-[10px] text-[#9497ad]">
                            {product.count} piece
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col w-full gap-[10px] p-[10px] mb-20">
                  <div className="flex justify-between">
                      <p className="text-[13px] text-[#50557a]">Order amount ({order.product.length} product):</p>
                      <p className="text-[16px]">${order.totalPrice}</p>
                  </div>
                  <div className="flex justify-between ">
                      <p className="text-[13px] text-[#50557a]">Delivery:</p>
                      <p className="text-[#16c67a] text-[16px]">for free</p>
                  </div>
                  <div className="flex justify-between mt-[10px] border-t py-5">
                    <strong>Total payment:</strong>
                    <strong >${order.totalPrice}</strong>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreInfoOrders;
