import React from "react";
import Logo from "../nav2/components/Logo";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductsList from "./components/ProductCard.js";
import { Provider } from "react-redux";
import store from '../../redux/store.js'; // Adjust the path as necessary
import ProductCard from "./components/ProductCard.js";
import ProductCategory from "./components/ProductCategory.js";
import CategoryDisplay from "./components/CategoryDisplay.js";
import CategoryPicture from "./components/CategoryPicture.js";



const CategoryPage = ({ categoryName }) => {
  return (
    <>
    <CategoryPicture categoryName={categoryName}/>
    {/* <CategoryDisplay categoryName={categoryName}/>     */}
      <Provider store={store}>
        <ProductCategory categoryName={categoryName}/>
      </Provider>
    </>
  );
};

export default CategoryPage;