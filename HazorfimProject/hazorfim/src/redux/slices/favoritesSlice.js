import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favoritesProducts: []
    },
    reducers: {
        addFavoriteProduct(state, action) {
            state.favoritesProducts.push(action.payload.product);
        },
        deleteFavoriteProduct(state, action) {
            const index = state.favoritesProducts.findIndex(product => product.name === action.payload.name);
            if (index !== -1) {
                state.favoritesProducts.splice(index, 1);
            }
        },
        getAllFavoritesProducts(state) {
            return state.favoritesProducts;
        }
    }
});
export const { getAllFavoritesProducts, deleteFavoriteProduct,addFavoriteProduct} = favoritesSlice.actions;
export default favoritesSlice.reducer;
