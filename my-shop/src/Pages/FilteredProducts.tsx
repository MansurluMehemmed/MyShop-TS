import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../State/store"
import { useEffect, useState } from "react";
import { fetchData, selectedBrands, selectedCategories } from "../State/FetchSlice";
import CardProps from "../components/CardProps";

const FilteredProducts = () => {
  const {filteredProduct,seachQuery,categories,selectedCategory,brands,selectedBrand} = useSelector((state:RootState)=>state.fetch)
  const dispatch = useDispatch<AppDispatch>()
  const [minPrice,setMinPrice] = useState<number|undefined>()
  const [maxPrice,setMaxPrice] = useState<number|undefined>()
  useEffect(()=>{
    dispatch(fetchData(seachQuery))
    window.scrollTo(0,0)
  },[])
  const handleChangeMinPrice = (e:React.ChangeEvent<HTMLInputElement>)=>{
    let value = e.target.value
      setMinPrice(value?parseFloat(value):undefined)
  }
  const handleChangeMaxPrice = (e:React.ChangeEvent<HTMLInputElement>)=>{
    let value = e.target.value
   
    setMaxPrice(value?parseFloat(value):undefined)
    
      
  }

  const getFilteredProducts = ()=>{
  let filteredProducts = filteredProduct;

      if(selectedCategory!=='ALL'){
        filteredProducts = filteredProducts.filter(product=>product.category.toUpperCase() ===selectedCategory.toUpperCase())
      }
      if(selectedBrand!==''){
        filteredProducts = filteredProducts.filter(product=>product.brand.toUpperCase() ===selectedBrand?.toUpperCase())

      }
      if(minPrice!==undefined){
        filteredProducts = filteredProducts.filter(product=>product.price>=minPrice)
      }
      if(maxPrice!==undefined){
        filteredProducts = filteredProducts.filter(product=>product.price<=maxPrice)
      }
      else{
        filteredProducts = filteredProducts
      }
      return filteredProducts
  }
 const filteredProducts = getFilteredProducts() 
  const clickResetFilters  = ()=>{
    dispatch(selectedCategories('ALL'))
    dispatch(selectedBrands(''))
    setMinPrice(undefined)
    setMaxPrice(undefined)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    <div className='w-full flex justify-center mt-[100px]'>
        <div className="flex gap-10 w-[90%] max-md:flex-col bg-white">
        <div className="w-64 p-5 h-screen">
      <h1 className="text-2xl font-bold mb-10 ">Filter Products</h1>
      <section>
        
        <div className="flex justify-center items-center">
            <input type="text" className="border-2 mr-2 px-5 py-3 mb-3 w-full" value={minPrice ?? ''} onChange={(e)=>handleChangeMinPrice(e)} placeholder="Min"  />
            <input type="text" className="border-2 mr-2 px-5 py-3 mb-3 w-full" value={maxPrice??''} onChange={(e)=>handleChangeMaxPrice(e)} placeholder="Max" />
        </div>

        {/* {Categories section} */}
        <div className="mb-5">
            <h2 className="text-xl font-semibold mb-3">Categories</h2>
        </div>
        <section>
        
        {categories.map((category,index)=>(
            <label key={index}  className=" block mb-2">
            <input type="radio" name="category" value={category} onChange={()=>dispatch(selectedCategories(category))}   className="mr-2 w-[16px] h-[16px]" checked = {selectedCategory===category} 
  
            />
            {category.toUpperCase()}
        </label>
        ))}
        
        
        </section>
        <div className="mb-5">
            <h2 className="text-xl font-semibold mb-3">Brands</h2>
        </div>
        <section>
        {brands.map((brand,index)=>(
            <label key={index}  className=" block mb-2">
            <input type="radio" name="category" value={brand} onChange={()=>{dispatch(selectedBrands(brand))
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }}   className="mr-2 w-[16px] h-[16px]" 
  
            />
            {brand!==undefined? brand:''}
        </label>
        ))}
        </section>
        {/* {Keywords Section} */}
        {/* <div className="mb-5 mt-4">
            <h2 className="text-xl font-semibold mb-3">Keywords</h2>
            <div>
                {keywords.map((keyword,index)=>(
                    <button key={index} 
                    onClick={()=>handleKeywordClick(keyword)}
                    className="block mb-2 px-4 py-2 w-full text-left border rounded hover:bg-gray-200">{keyword.toUpperCase()}</button>
                ))}
            </div>
        </div> */}
        <button onClick={()=>clickResetFilters()} className="w-full mb-[4rem] py-2 bg-black text-white rounded mt-5">Reset Filters</button>
      </section>
    </div> 
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-2 flex-wrap ">

            {filteredProducts.length===0 ? <p className="text-2xl text-red-500 mt-5">No product found...</p>:filteredProducts.map(product=>(
              <CardProps key={product.id} item={{...product}}/>
            ))}
          </div>
        </div>
    </div>
  )
}

export default FilteredProducts