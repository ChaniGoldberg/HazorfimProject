import React, { useEffect, useState } from "react";

//מראה את התמונות המתחלפות בדף הבית
const ChangePictures = () => {
    //צריך לטפל בפונקציית טעינת התמונות אולי לעשות אותה בתור use??
  const images = require.context('../../assests/HomePage/start', false, /\.(png|jpe?g|svg)$/);
  const imageList = images.keys().reduce((acc, image) => {
    acc[image.replace('./', '')] = images(image);
    return acc;
  }, {});

  const imageKeys = Object.keys(imageList);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageKeys.length);
    }, 3000); // החלף כל 3 שניות

    return () => clearInterval(intervalId); // נקה את ה-intervall כשמרכיבים מתעדכנים
  }, [imageKeys.length]);

  return (
    <div>
      <img src={imageList[imageKeys[currentImageIndex]]} alt="Changing" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
}

export default ChangePictures;
