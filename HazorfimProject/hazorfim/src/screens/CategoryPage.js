import React from "react";
import ProductCategory from "../components/categoryPage/components/ProductCategory.js";
import CategoryDisplay from "../components/categoryPage/components/CategoryDisplay.js";
import CategoryPicture from "../components/categoryPage/components/CategoryPicture.js";
import { useLocation } from "react-router-dom";

// Display the entire category page
const CategoryPage = () => {
  // Get the current location from the router
  // This will help us extract the category name from the URL
  const location = useLocation();
  const categoryName = location.pathname.split("/").pop(); // Extract the last segment

  return (
    <>
      <CategoryPicture categoryName={categoryName} />
      <CategoryDisplay categoryName={categoryName} />
      <ProductCategory categoryName={categoryName} />
    </>
  );
};

export default CategoryPage;
