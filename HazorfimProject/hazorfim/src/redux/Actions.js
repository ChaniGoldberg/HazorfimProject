
import { ADD_PRODUCT,DELETE_PRODUCT,UPDATE_COUNT_PRODUCT,GET_ALL_PRODUCTS } from "./ActionsTypes"
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
export const getAllProducts = (products) => ({
    type: GET_ALL_PRODUCTS,
})
