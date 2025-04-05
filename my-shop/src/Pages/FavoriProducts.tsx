
import { add, addFavorite, productPageElement } from '../State/FetchSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../State/store';
import FavoriButton from '../layouts/FavoriButton';
import { Link } from 'react-router-dom';
import CardProps from '../components/CardProps';

const FavoriProducts = () => {
    const dispatch = useDispatch<AppDispatch>();
  const  {  favoriteProducts } = useSelector(
    (state: RootState) => state.fetch
  );
  
  
  return (
   
    <div className='flex w-full h-full justify-center items-center  '>
      <div className='w-[80%]  mt-[100px]  grid grid-cols-1  max-sm:grid-cols-2 gap-0  max-lg:gap-[10px] sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5   px-0 md:px-10'>
    {favoriteProducts.map((item)=>(
        
        <CardProps key={item.id} item={{...item}}/>
       
    ))}
     </div>
    </div>
  )
}

export default FavoriProducts