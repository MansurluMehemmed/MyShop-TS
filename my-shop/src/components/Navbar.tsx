import { Search } from "lucide-react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenuFold } from "react-icons/ai";
import {
  FaShoppingCart,
  FaSignInAlt,
  FaUser,
  FaUserPlus,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch } from "../State/store";
import { setSearchQuery } from "../State/FetchSlice";
import Basket from "./Basket";

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [basketMenu,setBasketMenu] = useState(false)
  const [menu, setMenu] = useState(false);
  const [isVisible,setIsVisible] = useState(false)

  const handleChange = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <header className="flex  fixed z-20 mb-[100px] bg-white flex-row w-full h-[100px] justify-center">
      <nav className=" flex relative w-[80%] justify-between items-center ">
        <div>
          <Link to="home">
            <h1 className="font-bold text-3xl text-black">
              {" "}
              My<span className="text-red-600">Shop</span>
            </h1>
          </Link>
        </div>
        <nav className="hidden md:flex flex-row  items-center gap-10 text-xl font-medium ">
          <Link
            to="home"
            className=" hover:text-gray-400 transition duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="shop"
            className="hover:text-gray-400 transition duration-300 ease-in-out "
          >
            Shop
          </Link>
          <Link
            to="blog"
            className="hover:text-gray-400 transition duration-300 ease-in-out "
          >
            Blog
          </Link>
          <Link
            to="contact"
            className="hover:text-gray-300 transition duration-300 ease-in-out"
          >
            Contact
          </Link>
        </nav>
        <div className="gap-5 flex flex-row lg:gap-10    justify-between items-center   ">
          <div className="flex cursor-pointer">
            <Search onClick={()=>setIsVisible(!isVisible)} className="w-5 h-5 hover:text-gray-500" />
            <input onChange={(e)=>dispatch(setSearchQuery(e.target.value))}
              type="text"
              placeholder="Search..."
              className={`ml-2 ${isVisible?'flex':'hidden'} outline-none`}
            />
          </div>
          <div className="flex  cursor-pointer">
            <FaUser className= "hover:text-gray-500 " />
            <div className="hidden absolute left-4 z-10 px-2 py-2 top-3 w-[150px] cursor-pointer bg-amber-50 ">
              <p className="hover:text-gray-500 flex gap-2 items-center border-b-black ">
                <FaSignInAlt />
                Sign In
              </p>
              <p className="hover:text-gray-500 flex gap-2 items-center">
                <FaUserPlus />
                Register
              </p>
            </div>
          </div>
          <div onClick={()=>setBasketMenu(!basketMenu)} className="cursor-pointer relative rounded-full flex justify-center items-center w-[40px] h-[40px] bg-gray-300">
            <FaShoppingCart  className="hover:text-gray-500 " />
            <span className="bg-red-600 rounded-full absolute top-0 right-0 flex h-4 text-[15px] text-white items-center justify-center w-4">
              1
            </span>
            
          </div>
          {basketMenu&& <Basket />}
            
          <div className="md:hidden cursor-pointer flex">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuFold onClick={handleChange} size={25} />
            )}
          </div>
        </div>
      </nav>
      <div
        className={`  ${menu ? "translate-x-0" : "translate-x-full "} z-10 md:hidden flex flex-col gap-5 absolute right-0 w-full sm:w-[400px] h-screen pl-5 text-xl pt-10 transition-transform bg-gray-50  font-medium duration-300   `}
      >
        <div className="flex items-end justify-end pr-5">
          {menu ? (
            <AiOutlineClose className="" size={25} onClick={closeMenu} />
          ) : (
            ""
          )}
        </div>
        <Link
          to="home"
          className=" hover:text-gray-400 transition duration-300 ease-in-out"
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          to="shop"
          className="hover:text-gray-400 transition duration-300 ease-in-out "
          onClick={closeMenu}
        >
          Shop
        </Link>
        <Link
          to="blog"
          className="hover:text-gray-400 transition duration-300 ease-in-out "
          onClick={closeMenu}
        >
          Blog
        </Link>
        <Link
          to="contact"
          className="hover:text-gray-400 transition duration-300 ease-in-out"
          onClick={closeMenu}
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
