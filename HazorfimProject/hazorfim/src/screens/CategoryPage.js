import React from "react";
import { Provider } from "react-redux";
import store from '../redux/store.js'; // Adjust the path as necessary
import ProductCategory from "../components/categoryPage/components/ProductCategory.js";
import CategoryDisplay from "../components/categoryPage/components/CategoryDisplay.js";
import CategoryPicture from "../components/categoryPage/components/CategoryPicture.js";


//הצגת כל דף הקטגוריה
//הקטגוריה נשלחת כפרופס מהניתוב
const CategoryPage = ({ categoryName }) => {
  return (
    <>
    <CategoryPicture categoryName={categoryName}/>
    <CategoryDisplay categoryName={categoryName}/>    
      <Provider store={store}>
        <ProductCategory categoryName={categoryName}/>
      </Provider>
    </>
  );
};

export default CategoryPage;