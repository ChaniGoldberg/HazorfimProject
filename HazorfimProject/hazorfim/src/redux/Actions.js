
import { ADD_PRODUCT,DELETE_PRODUCT,UPDATE_COUNT_PRODUCT,GET_ALL_BASKET_PRODUCTS,GET_ALL_FAVORITES_PRODUCTS,ADD_FAVORITE_PRODUCT,DELETE_FAVORITE_PRODUCT } from "./ActionsTypes"
export const addProduct = (product,count) => ({
    type: ADD_PRODUCT,
    payload: {product,count}
});
export const deleteProduct = (product) => ({
    type: DELETE_PRODUCT,
    payload: product,
});
export const updateCountProduct = (product,count) => ({
    type: UPDATE_COUNT_PRODUCT,
    payload: {product, count} 
})
export const getAllBasketProducts = (products) => ({
    type: GET_ALL_BASKET_PRODUCTS,
})
export const getAllFavoritesProducts = () => ({
    type: GET_ALL_FAVORITES_PRODUCTS,
})
export const addFavoriteProduct = (product) => ({
    type: ADD_FAVORITE_PRODUCT,
    payload: product,
})
export const deleteFavoriteProduct = (product) => ({
    type: DELETE_FAVORITE_PRODUCT,
    payload: product,
})
