import { FaRegHeart } from 'react-icons/fa'
import { AiFillHeart } from 'react-icons/ai'
import {  useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../State/store'
const FavoriButton = () => {
  const [active,setActive] = useState(false)
  const dispatch = useDispatch<AppDispatch>()
  
  
  return (
    <div>
        
    <div onClick={()=>{
      setActive(!active)
     
    }} className="like relative">
        <FaRegHeart className={`absolute ${active?"text-red-600":''} max-sm:text-[12px]`}/>
        <AiFillHeart className={`text-red-600 ${active?'flex':'hidden'} max-sm:text-[12px] `}/>
       </div>
    </div>
  )
}

export default FavoriButton