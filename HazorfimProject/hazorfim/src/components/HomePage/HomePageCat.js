import React from "react";
import { links } from '../../constants/links'; 
import style from '../../styles/HomePageCat.css'
const  HomePageCat= () => {
  const images = require.context('../../assests/HomePage/pictureCategory', false, /\.(png|jpe?g|svg)$/);
  const imageList = images.keys().reduce((acc, image) => {
    acc[image.replace('./', '')] = images(image);
    return acc;
  }, {});

  return (
    <div className="category-container">
      {Object.keys(imageList).map((imageKey) => {
        // Extract the category name from the image key
        // For example, if the image key is 'category1.png', the category name would be 'category1'
        const categoryLink = links.find(link => link.name === imageKey.replace('.png', '').replace('.jpg', '').replace('.jpeg', ''));
        return categoryLink ? (
          <div key={imageKey} className="category-item">
            <img src={imageList[imageKey]} alt={categoryLink.nameHebrew} className="category-image" />
            <h3>{categoryLink.nameHebrew}</h3>
            <a href={categoryLink.link}>הצג הכל</a>
          </div>
        ) : null;
      })}
    </div>
  );
}

export default HomePageCat;


