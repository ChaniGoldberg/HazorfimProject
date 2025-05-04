import React from "react";
import Logo from "../nav2/components/Logo";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductsList from "./components/ProductCard.js";
import { Provider } from "react-redux";
import store from '../../redux/store.js'; // Adjust the path as necessary
import ProductCard from "./components/ProductCard.js";

const CategoryPage = ({ categoryName }) => {
  return (
    <>
      <Provider store={store}>
        <ProductCard categoryName={categoryName}/>
      </Provider>
      <h1>{categoryName}</h1>
      <h1>pathName</h1>
    </>
  );
};

export default CategoryPage;