import React from "react";
import CategoryPage from "../../../styles/CategoryPage.css"
//מציג את תמונת הקטגוריה 
const CategoryPicture = ({ categoryName }) => {
  //טעינת תמונות 
  const images = require.context('../../../assests/CategoriesPictures', false, /\.(png|jpe?g|svg)$/);
  const imageList = images.keys().reduce((acc, image) => {
    acc[image.replace('./', '')] = images(image);
    return acc;
  }, {});

  return (
    <>
      <img src={imageList[`${categoryName}.jpg`]} alt={categoryName} className="categoryPicture" />
    </>
  );
}

export default CategoryPicture;
