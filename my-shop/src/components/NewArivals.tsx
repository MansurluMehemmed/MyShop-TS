import { useEffect, useState } from 'react'
import '../index.css'
import Cards from './Cards'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../State/store'
import { selectedCategories } from '../State/FetchSlice'
const NewArivals = () => {
    const dispatch = useDispatch<AppDispatch>()
    
    const data = useSelector((state:RootState)=>state.fetch.data)
    const category = useSelector((state:RootState)=>state.fetch.category)
    const selectedCategory = useSelector((state:RootState)=>state.fetch.selectedCategory)

    
    
    const handleClickCategory= (e:any)=>{
      
      dispatch(selectedCategories(e.target.textContent))
    }
   
    
  return (
    <div className="flex flex-col items-center justify-center " >
        <h1 className="text-[40px] font-semibold flex items-center justify-center">New Arrivals</h1>
        <div className="flex flex-row items-center justify-center w-auto mt-10">
            <ul className="flex flex-row decoration-0  text-2xl p-0 m-0 items-center justify-center">
            <li onClick={(e)=>handleClickCategory(e)} className={`h-[40px] min-w-[108px] px-[25px ] cursor-pointer ${selectedCategory==='ALL'? 'active':''}  text-[14px]   border border-[#ebebeb] rounded-[3px] bg-white flex items-center justify-center `}>ALL</li>
                {
                  category.map((item,index)=>(
                    <li id={item} key={index} onClick={(e)=>handleClickCategory(e)} className={`h-[40px] min-w-[108px] px-[25px ]  cursor-pointer text-[14px]   border border-[#ebebeb] rounded-[3px] bg-white flex items-center justify-center ${item===selectedCategory? 'active':''} `}>{item}</li>
                  ))
                }
                
                
            </ul>

        </div>
        <div className='w-[80%] flex flex-row flex-wrap h-auto mt-10'>
            <Cards/>
        </div>
    </div>
  )
}

export default NewArivals