import React from "react";
import { useDispatch,useSelector } from 'react-redux'; 
import { getAllFavoritesProducts,addFavoriteProduct, deleteFavoriteProduct } from '../../../../redux/slices/favoritesSlice';
const UseFavoriteProductHook=(product)=>{
    console.log(product);
    const dispatch=useDispatch();
    dispatch(addFavoriteProduct({product}))
}
export default UseFavoriteProductHook;