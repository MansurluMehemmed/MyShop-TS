import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../State/store";
import { useEffect, useState } from "react";
import {
  fetchData,
  filteredBrands,
  filteredSearch,
  selectedBrands,
  selectedCategories,
} from "../State/FetchSlice";
import CardProps from "../components/CardProps";
import { Tally3 } from "lucide-react";

const FilteredProducts = () => {
  const {
    filteredProduct,
    seachQuery,
    categories,
    selectedCategory,
    brands,
    selectedBrand,
  } = useSelector((state: RootState) => state.fetch);
  const dispatch = useDispatch<AppDispatch>();
  const [minPrice, setMinPrice] = useState<number | undefined>();
  const [maxPrice, setMaxPrice] = useState<number | undefined>();
  const [filter, setFilter] = useState("all");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  
  useEffect(() => {
    dispatch(fetchData(seachQuery));
    
    window.scrollTo(0, 0);
  }, []);
  const handleChangeMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setMinPrice(value ? parseFloat(value) : undefined);
  };
  const handleChangeMaxPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    setMaxPrice(value ? parseFloat(value) : undefined);
  };

  const getFilteredProducts = () => {
    let filteredProducts = [...filteredProduct];

    if(selectedCategory!=='ALL'){
      filteredProducts = filteredProducts.filter(prdouct=>prdouct.category.toUpperCase()===selectedCategory.toUpperCase())
    }
    
    if (minPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= minPrice
      );
    }
    if (maxPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= maxPrice
      );
    } else {
      filteredProducts = filteredProducts;
    }
    switch(filter){
      case "expensive":
        return filteredProducts.sort((a, b) => b.price - a.price);
      case "cheap":
        return filteredProducts.sort((a, b) => a.price - b.price);
      case "popular":
        return filteredProducts.sort((a, b) => Number(b.rating) -Number( a.rating));
      default:
        return filteredProducts;
    }

    return filteredProducts;
  };
  const filteredProducts = getFilteredProducts();
  const clickResetFilters = () => {
    dispatch(selectedCategories("ALL"));
    dispatch(selectedBrands(""));
    setMinPrice(undefined);
    setMaxPrice(undefined);
    dispatch(filteredSearch('data'))
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-full flex justify-center mt-[100px]">
      <div className="flex gap-10 w-[90%] max-md:flex-col ">
        <div className="w-64 p-5 h-screen">
          <h1 className="text-2xl font-bold mb-10 ">Filter Products</h1>
          <section>
            <div className="flex justify-center items-center">
              <input
                type="text"
                className="border-2 mr-2 px-5 py-3 mb-3 w-full"
                value={minPrice ?? ""}
                onChange={(e) => handleChangeMinPrice(e)}
                placeholder="Min"
              />
              <input
                type="text"
                className="border-2 mr-2 px-5 py-3 mb-3 w-full"
                value={maxPrice ?? ""}
                onChange={(e) => handleChangeMaxPrice(e)}
                placeholder="Max"
              />
            </div>

            {/* {Categories section} */}
            <div className="mb-5">
              <h2 className="text-xl font-semibold mb-3">Categories</h2>
            </div>
            <section>
              {categories.map((category, index) => (
                <div key={index} onClick={()=>{
                  dispatch(selectedCategories(category))
                }} className={`${selectedCategory===category?'activeCategory':''} cursor-pointer hover:bg-[rgb(245, 245, 245)] p-2 rounded  flex mb-2 border shadow `}>
                  {category.toUpperCase()}
                </div>
                // <label key={index} className=" block mb-2">
                //   <input
                //     type="radio"
                //     name="category"
                //     value={category}
                //     onChange={() => {dispatch(selectedCategories(category))
                //       dispatch(filteredCategory(category))
                //     }}
                //     className="mr-2 w-[16px] h-[16px]"
                //     checked={selectedCategory===category}
                //   />
                //   {category.toUpperCase()}
                // </label>
              ))}
            </section>
            <div className="mb-5">
              <h2 className="text-xl font-semibold mb-3">Brands</h2>
            </div>
            <section>
              {brands.map((brand, index) => (
                <label key={index} className=" block mb-2">
                  <input
                    type="radio"
                    name="brand"
                    value={brand}
                    onChange={() => {
                      dispatch(selectedBrands(brand));
                      dispatch(filteredBrands(brand))
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                    checked={selectedBrand===brand}
                    className="mr-2 w-[16px] h-[16px]"
                  />
                  {brand }
                </label>
              ))}
            </section>
            
            <button
              onClick={() => clickResetFilters()}
              className="w-full mb-[4rem] py-2 bg-black text-white rounded mt-5"
            >
              Reset Filters
            </button>
          </section>
        </div>
        <div className="flex flex-col relative gap-10">
          <div className="flex">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="border px-4 py-2 rounded-full flex items-center "
            >
              <Tally3 className="mr-2" />
              {filter === "all"
                ? "Filter"
                : filter.charAt(0).toLowerCase() + filter.slice(1)}
            </button>
            {dropdownOpen && (
              <div className="absolute z-100 bg-white border border-gray-300 rounded mt-2 w-full sm:w-40">
                <button
                  onClick={() => {setFilter("cheap")
                    setDropdownOpen(false)
                  }}
                  className="black px-4 py-2 w-full text-left"
                >
                  Cheap
                </button>
                <button
                  onClick={() => {setFilter("expensive")
                    setDropdownOpen(false)
                  }}
                  className="black px-4 py-2 w-full text-left"
                >
                  Expensive
                </button>
                <button
                  onClick={() => {setFilter("popular")
                    setDropdownOpen(false)
                  }}
                  className="black px-4 py-2 w-full text-left"
                >
                  Popular
                </button>
              </div>
            )}
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-2 flex-wrap gap-[8px] ">
            {filteredProducts.length === 0 ? (
              <p className="text-2xl text-red-500 mt-5">No product found...</p>
            ) : (
              filteredProducts.map((product) => (
                <CardProps key={product.id} item={{ ...product }} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilteredProducts;
