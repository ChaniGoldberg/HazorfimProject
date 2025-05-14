// store.js
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice'; // Adjust the path as necessary
import favoritesReducer from './slices/favoritesSlice'; // Adjust the path as necessary
import basketReducer from './slices/basketSlice'; // Adjust the path as necessary

const store = configureStore({
  reducer: {
    products: productsReducer,
    favorites: favoritesReducer,
    basket: basketReducer,
  },
});

export default store;
