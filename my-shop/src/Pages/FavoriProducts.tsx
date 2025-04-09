import { add, addFavorite, productPageElement } from "../State/FetchSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../State/store";
import FavoriButton from "../layouts/FavoriButton";
import { Link } from "react-router-dom";
import CardProps from "../components/CardProps";

const FavoriProducts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { favoriteProducts } = useSelector((state: RootState) => state.fetch);

  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="flex w-[80%] flex-col justify-center items-center  mt-[120px] gap-10">
        <h2 className="text-3xl self-start font-semibold">
          My Favorite Products
        </h2>
        <div className="w-full   grid grid-cols-1  max-sm:grid-cols-2 gap-[5px]  max-lg:gap-[10px] sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5   px-0 md:px-10">
          {favoriteProducts.map((item) => (
            <CardProps key={item.id} item={{ ...item }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoriProducts;
