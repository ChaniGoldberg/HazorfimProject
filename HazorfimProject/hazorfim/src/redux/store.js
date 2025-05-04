// store.js
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice.js';

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
