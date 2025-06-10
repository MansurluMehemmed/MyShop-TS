
import { Link } from "react-scroll";


const Slider = () => {
  

  return (
   <div className="flex w-full h-screen  mt-[100px] ">
     
          <div className="flex w-full  h-full  bg-[url(https://themewagon.github.io/coloshop/images/slider_1.jpg)] bg-cover bg-center">
      <div className="w-[80%] h-full    flex justify-center items-center">

        <div className="md:gap-4 flex flex-col gap-8 w-[60%] max-sm:w-[90%] h-auto">
          <p className="max-sm:text-[14px] sm:text-[18px] md:text-xl">
            Spring / Summer Collection 2025
          </p>
          <h1 className="font-semibold max-sm:text-[25px] sm:text-[35px] md:text-[40px] lg:text-[60px] xl:text-[72px]">
            Get up to 30% Off New Arrivals
          </h1>
          <Link 
            className="text-white w-32 max-sm:w-25 sm:w-28 max-sm:py-1 bg-red-500 flex items-center justify-center cursor-pointer py-2 rounded hover:bg-red-400 transition duration-200 ease-linear"
            to="newArrivals"
            smooth={true}
            duration={1000}
          >
            Show now
          </Link>
        </div>
        </div>
        </div>
        
        
   </div>

  );
};

export default Slider;









