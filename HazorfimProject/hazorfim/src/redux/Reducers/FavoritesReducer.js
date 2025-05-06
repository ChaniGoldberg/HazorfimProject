import Favorites from "../../components/nav1/Favorites";
import { GET_ALL_FAVORITES_PRODUCTS,ADD_FAVORITE_PRODUCT,DELETE_FAVORITE_PRODUCT } from "../ActionsTypes";
export const initialState={
    favoritesProducts:[]
};


const findIndex = (product, products) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].name === product.name) {
            return i; // Return the index if found
        }
    }
    return -1; // Return -1 if not found
};

export const FavoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE_PRODUCT:
                return {
                    ...state,
                    products: [...state.favoritesProducts, action.payload.product], // Ensure the products remain unchanged

                };
        case DELETE_FAVORITE_PRODUCT:
            {
                const x = findIndex(action.payload, state.favoritesProducts);
                return {
                    ...state,
                    products: state.favoritesProducts.filter((_, index) => index !== x),
                };
            }
        case GET_ALL_FAVORITES_PRODUCTS:
            return state.favoritesProducts;
        default:
            return state;
            }
            
}