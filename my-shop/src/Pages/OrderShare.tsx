import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../State/store";
import { Link, useNavigate } from "react-router-dom";
import { deleteAll, ordered } from "../State/FetchSlice";
import { useEffect, useState } from "react";
const OrderShare = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [deliveryMethod, setDeliveryMethod] = useState(
    "Pickup from delivery points"
  );
  const { basketData } = useSelector((state: RootState) => state.fetch);
  let total= 0;
  basketData.forEach((item) => {
    let productTotal = item.count * (item.discountPercentage
      ? Number((
          item.price *
          (1 - item.discountPercentage / 100)
        ).toFixed(2))
      : item.price);
    total = Number((total + productTotal).toFixed(2));
  });
   useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  const handleOrderedFunc = () => {
      const orderPayload = {
        product:basketData.map(product=>product),
        paymentMethod: paymentMethod,
        deliveryMethod: deliveryMethod,
        date: new Date().toLocaleString(),
        totalPrice:total,
        id:Date.now()
      }
      dispatch(ordered(orderPayload))
    
   

    dispatch(deleteAll());
    setIsModalOpen(true);
    setTimeout(() => {
      navigate(-2);

      setIsModalOpen(false);
    }, 1000);
  };

  return (
    <div className="w-full flex justify-center py-[50px] relative">
      <div className="flex flex-col w-[80%]  mt-[100px] bg-white  shadow">
        <button
          onClick={() => navigate(-1)}
          className=" flex fixed z-30 max-md:left-3  left-20 justify-self-start self-start px-5 py-2 bg-red-600 text-white rounded cursor-pointer"
        >
          Back
        </button>
        <div className="flex w-full">
          <ul className="flex flex-col gap-10  w-full p-0 m-0">
            {basketData.map((product) => (
              <li
                key={product.id}
                className="flex justify-between items-center shadow py-[20px] px-[20px] "
              >
                <div className="  h-[70px] flex gap-[10px] items-center w-[80%]">
                  <img
                    className=" w-[100px] rounded-xl h-[70px] "
                    src={product.thumbnail}
                    alt={product.title}
                  />
                  <p className=" text-nowrap text-[18px] text-ellipsis  w-full">
                    {product.title} / {product.brand}
                  </p>
                </div>

                <div className="flex flex-row h-full gap-5">
                  <span className="self-center text-gray-500 text-[16px]">
                    {product.count} piece.
                  </span>
                  <div className="flex flex-col gap-[10px] items-center">
                    <p className="text-gray-400 text-[14px] line-through">
                      ${product.price}
                    </p>
                    <p className="text-red-600 text-[18px]">
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
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row w-full ">
          <section className="flex w-full py-10 px-5 justify-between text-xl">
            <div className="flex gap-[10px] items-center justify-center">
              <p>Payment method:</p>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="bg-gray-200 rounded p-[5px]"
                name=""
                id=""
              >
                <option value="Cash">Cash</option>
                <option value="Card">Card</option>
              </select>
            </div>
            <div className="flex items-center justify-center gap-[10px]">
              <p>Delivery method: </p>
              <select
                value={deliveryMethod}
                onChange={(e) => setDeliveryMethod(e.target.value)}
                className="bg-gray-200 rounded p-[5px]"
                name=""
                id=""
              >
                <option value="Pickup from delivery points">
                  Pickup from delivery points
                </option>
                <option value="Delivery to the address">
                  Delivery to the address
                </option>
              </select>
            </div>
          </section>
        </div>

        <Link
          to="/delivery"
          className="flex flex-row w-full justify-center items-center"
        >
          <button
            onClick={() => {handleOrderedFunc()
            }}
            className={`w-full ${isModalOpen ? "bg-green-500" : "bg-[#7c62e3]"} transition duration-300 hover:bg-[#9783e8] text-white  py-[10px] `}
          >
            {isModalOpen ? "Ordered" : "Order it"} 
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderShare;
