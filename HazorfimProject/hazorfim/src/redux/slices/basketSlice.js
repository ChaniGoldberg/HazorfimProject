
import { createSlice } from '@reduxjs/toolkit';
// Basket Slice

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        products: [],
        count: [],
        price: [],
        totalPrice: []
    },
    reducers: {
        addProduct(state, action) {
            const index = state.products.findIndex(product => product.name === action.payload.product.name);
            if (index === -1) {
                state.products.push(action.payload.product);
                state.count.push(action.payload.count);
                state.price.push(action.payload.product.price);
                state.totalPrice.push(action.payload.product.price * action.payload.count);
            } else {
                state.count[index] += action.payload.count;
                state.totalPrice[index] = state.price[index] * state.count[index];
            }
        },
        deleteProduct(state, action) {
            const index = state.products.findIndex(product => product.name === action.payload.name);
            if (index !== -1) {
                state.products.splice(index, 1);
                state.price.splice(index, 1);
                state.count.splice(index, 1);
                state.totalPrice.splice(index, 1);
            }
        },
        updateCountProduct(state, action) {
            const index = state.products.findIndex(product => product.name === action.payload.product.name);
            if (index !== -1) {
                state.count[index] = action.payload.count;
                state.totalPrice[index] = state.price[index] * action.payload.count;
            }
        },
        getAllBasketProducts(state) {
            return state.products;
        }
    }
});

// // Create Store
// const store = configureStore({
//     reducer: {
//         favorites: favoritesSlice.reducer,
//         basket: basketSlice.reducer
//     }
// });

export const { getAllBasketProducts,updateCountProduct,deleteProduct,addProduct } = basketSlice.actions;
export default basketSlice.reducer;
