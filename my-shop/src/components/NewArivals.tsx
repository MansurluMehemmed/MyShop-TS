import { useEffect } from 'react'
import '../index.css'
import Cards from './Cards'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../State/store'
import { fetchData, selectedCategories, showMoreClick } from '../State/FetchSlice'
const NewArivals = () => {
    const dispatch = useDispatch<AppDispatch>()
   const {showMore} = useSelector((state:RootState)=>state.fetch)
    const {categories} = useSelector((state:RootState)=>state.fetch)
    const selectedCategory = useSelector((state:RootState)=>state.fetch.selectedCategory)

    
    
    const handleClickCategory= (e:any)=>{
      
      dispatch(selectedCategories(e.target.textContent))
    }
    useEffect(()=>{
      dispatch(fetchData(showMore));
    },[showMore])
   const handleShowMore = ()=>{
    dispatch(showMoreClick())    
   }
    
  return (
    <div  id='newArrivals'  className="flex flex-col items-center justify-center relative bg-[#F7F7F7] py-10" >
        <h1   className="text-[40px] max-sm:text-[24px] font-semibold flex items-center justify-center">New Arrivals</h1>
        <div  className="flex flex-row items-center justify-center w-auto mt-10 max-sm:mt-5">
            <ul className="flex flex-row decoration-0 flex-wrap  text-2xl p-0 m-0 items-center justify-center">
            <li onClick={(e)=>handleClickCategory(e)} className={`h-[40px] min-w-[108px] max-sm:h-[25px] max-sm:min-w-[70px] max-sm:px-[15px] px-[25px ] max-sm:text-[12px] cursor-pointer ${selectedCategory==='ALL'? 'activee':''}  text-[14px]   border border-[#ebebeb] rounded-[3px] bg-white flex items-center justify-center `}>ALL</li>
                {
                  categories.map((item,index)=>(
                    <li id={item} key={index} onClick={(e)=>handleClickCategory(e)} className={`max-sm:h-[25px] max-sm:min-w-[70px] max-sm:px-[15px] max-sm:text-[12px] h-[40px] min-w-[108px] px-[25px ]  cursor-pointer text-[14px]   border border-[#ebebeb] rounded-[3px] bg-white flex items-center justify-center ${item===selectedCategory? 'activee':''} `}>{item}</li>
                  ))
                }
                
                
            </ul>

        </div>
        <div  className='w-[80%] flex flex-row flex-wrap  h-auto mt-10'>
          <div className='grid grid-cols-1  max-sm:grid-cols-2 max-lg:gap-[10px] relative sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[5px]  px-0 md:px-10 '>
            <Cards/>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <button onClick={()=>handleShowMore()}  className='flex mt-5 items-center justify-center p-[10px] max-sm:text-[12px] max-sm:p-[5px] rounded-[5px] hover:bg-gray-200 transition duration-400 ease-out border border-[#ebebeb]'>Show More ...</button>
        </div>
    </div>
  )
}

export default NewArivals