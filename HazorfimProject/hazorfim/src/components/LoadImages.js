// LoadImages.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initializeProducts } from '../../redux/slices/productsSlice';

const LoadImages = ({ imagePath }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const images = require.context(imagePath, false, /\.(png|jpe?g|svg)$/);
    const imageList = images.keys().reduce((acc, image) => {
      acc[image.replace('./', '')] = images(image);
      return acc;
    }, {});

    dispatch(initializeProducts(imageList)); // שלח את רשימת התמונות ל-RDX
  }, [dispatch, imagePath]);

  return null; // לא מחזירה שום דבר
};

export default LoadImages;
