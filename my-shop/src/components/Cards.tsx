import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../State/store";
import { useEffect, useState } from "react";
import {
  fetchData,
} from "../State/FetchSlice";
import CardProps from "./CardProps";

const Cards = () => {
  const dispatch = useDispatch<AppDispatch>();
  let { data,  showMore,seachQuery } =
    useSelector((state: RootState) => state.fetch);
  
  
  const selectedCategory = useSelector(
    (state: RootState) => state.fetch.selectedCategory
  );
  useEffect(() => {
    dispatch(fetchData(showMore));
  }, [showMore]);

  const getFilteredProducts = () => {
    if (selectedCategory !== "ALL") {
      data = data.filter(
        (product) => product.category.toUpperCase() === selectedCategory
      );
    } else {
      data = data;
    }
    
    return data;
  };
  const filteredProducts = getFilteredProducts();
  return (
    <>
      {filteredProducts.map((item) => (
        <CardProps key={item.id} item={{ ...item }} />
        
      ))}
    </>
  );
};

export default Cards;
