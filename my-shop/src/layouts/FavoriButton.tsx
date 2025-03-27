import { FaRegHeart } from 'react-icons/fa'
import { AiFillHeart } from 'react-icons/ai'
import {  useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../State/store'
import { addFavorite } from '../State/FetchSlice'
const FavoriButton = () => {
  const [active,setActive] = useState(false)
  const dispatch = useDispatch<AppDispatch>()
  return (
    <div>
        
    <div onClick={()=>{
      setActive(!active)
      if(active){
        
      }
    }} className="like relative">
        <FaRegHeart className={`absolute ${active?"text-red-600":''}`}/>
        <AiFillHeart className={`text-red-600 ${active?'flex':'hidden'}  `}/>
       </div>
    </div>
  )
}

export default FavoriButton