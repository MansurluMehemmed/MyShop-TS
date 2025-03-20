import { Facebook, Instagram, Twitter } from "lucide-react";
import { FaPinterest, FaSkype } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-100% flex justify-center items-center h-[260px]">
      <div className="flex flex-col justify-between gap-20 w-[80%] ">
        <div className="flex flex-row w-full justify-between items-center ">
          <section className="flex flex-row items-center justify-between gap-10 text-[#51545f] text-[14px]">
            <Link
              to="blog"
              className="hover:text-red-600 transition duration-300 ease-in-out "
            >
              Blog
            </Link>
            <Link
              to="faqs"
              className="hover:text-red-600 transition duration-300 ease-in-out"
            >
              FAQs
            </Link>
            <Link
              to="contact"
              className="hover:text-red-600 transition duration-300 ease-in-out"
            >
              Contact Us
            </Link>
          </section>
          <section className="flex flex-row justify-between items-center">
                <ul className="m-0 p-0 flex flex-row justify-between items-center gap-8">
                    <li><Facebook size={14} className="hover:text-red-600 cursor-pointer"/></li>
                    <li><Twitter size={14} className="hover:text-red-600 cursor-pointer"/></li>
                    <li><Instagram size={14} className="hover:text-red-600 cursor-pointer"/></li>
                    <li><FaSkype size={14} className="hover:text-red-600 cursor-pointer"/></li>
                    <li><FaPinterest size={14} className="hover:text-red-600 cursor-pointer"/></li>
                </ul>
          </section>
        </div>
        <div className="flex">
            <p className="text-red-400">Developed by Muhammed</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
