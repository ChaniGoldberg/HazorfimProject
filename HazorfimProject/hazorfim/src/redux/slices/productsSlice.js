import { createSlice } from '@reduxjs/toolkit';
import productsData from '../../constants/products.json'; // עדכן את הנתיב לפי מיקום הקובץ


// טעינת התמונות
const images = require.context('../../assests/productImages', false, /.(png|jpe?g|svg)$/);
const imageList = images.keys().reduce((acc, image) => {
  acc[image.replace('./', '')] = images(image);
  return acc;
}, {});


const initialState = {
  products: productsData.map(product => ({
    ...product,
    productImage: imageList[product.productImage] // טוען את התמונה לפי השם
  }))
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    updateStock(state, action) {
      const product = state.products.find(product =>product.id ===  action.payload.product.id);
      if (product && product.stock >= action.payload.count) {
        product.stock -=  action.payload.count // עדכון כמות המלאי
      }
    },
    // אפשר להוסיף reducers נוספים לפי הצורך
  },
});

// ייצוא
export const { updateStock } = productsSlice.actions;
export default productsSlice.reducer;
