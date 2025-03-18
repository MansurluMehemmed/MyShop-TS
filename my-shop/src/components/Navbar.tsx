import { Search } from "lucide-react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenuFold } from "react-icons/ai";
import {  FaShoppingCart, FaSignInAlt, FaUser, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [menu,setMenu] = useState(false)
  const handleChange = ()=>{
    setMenu(!menu)
  }
  const closeMenu = ()=>{
    setMenu(false)
  }

  return (
    <header className="flex flex-row w-full h-[100px] justify-center">
      <nav className=" flex w-[80%] justify-between items-center ">
        <div >
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
          <div className="flex ">
            <Search className="w-5 h-5 hover:text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 hidden outline-none"
            />
          </div>
          <div className="flex ">
              <FaUser className="hover:text-gray-500 " />
              <div className=" hidden left-0 w-[100px] cursor-pointer bg-amber-50 ">
              <p className="hover:text-gray-500 flex gap-2 items-center border-b-black ">
                  <FaSignInAlt/>
                  Sign In</p>
                <p className="hover:text-gray-500 flex gap-2 items-center">
                  <FaUserPlus/>
                  Register</p>


              </div>
          </div>
          <div>
            <FaShoppingCart className="hover:text-gray-500"/>
          </div>
          <div className="md:hidden flex">
            {menu?<AiOutlineClose size={25} onClick={handleChange}/> : <AiOutlineMenuFold onClick={handleChange} size={25}/>}
          </div>
        </div>
        
      </nav>
      <div className={`  ${menu?'translate-x-0':'translate-x-full '} z-10 md:hidden flex flex-col gap-5 absolute right-0 w-full sm:w-[400px] h-screen pl-5 text-xl pt-10 transition-transform bg-gray-50  font-medium duration-300   `}>
      <div className="flex items-end justify-end pr-5">
      {menu?<AiOutlineClose className="" size={25} onClick={closeMenu}/> : ''}
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
