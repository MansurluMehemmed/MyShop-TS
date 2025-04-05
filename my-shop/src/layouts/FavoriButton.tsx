import { FaRegHeart } from 'react-icons/fa'
import { AiFillHeart } from 'react-icons/ai'
import {  useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../State/store'
const FavoriButton = () => {
  const [active,setActive] = useState<boolean>(()=>{
    const fav = localStorage.getItem('favoriButton')
    return fav? JSON.parse(fav):false
  })
  const dispatch = useDispatch<AppDispatch>()
  useEffect(()=>{
    localStorage.setItem('favoriButton',JSON.stringify(active))

  },[active])
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