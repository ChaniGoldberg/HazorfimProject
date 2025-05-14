import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'; // אל תשכח לייבא את useSelector
import '../../../styles/ProductDetail.css'; // ודא שאתה כולל את קובץ ה-CSS

// מציגה את פרטי המוצר
const ProductDetail = () => {
  // select from redux
  const products = useSelector((state) => state.products.products);
  const location = useLocation();
  
  // חילוץ המילה האחרונה מהנתיב
  const pathSegments = location.pathname.split('/');
  const lastSegment = pathSegments[pathSegments.length - 1];

  // מציאת המוצר על פי ה-ID
  const productObject = products.find((pro) => pro.id.toString() === lastSegment);

  const handleAddToCart = () => {
    console.log(`המוצר ${productObject.name} נוסף לסל.`);
    // כאן תוכל להוסיף לוגיקה להוספת המוצר לסל
  };

  const handleAddToFavorites = () => {
    console.log(`המוצר ${productObject.name} נוסף למועדפים.`);
    // כאן תוכל להוסיף לוגיקה להוספת המוצר למועדפים
  };

return (
  <div className="product-detail-unique">
    {productObject ? (
      <>
        <h2 className="product-name-unique">{productObject.name}</h2>
        <img src={productObject.productImage} alt={productObject.name} className="product-image-unique" />
        <p className="product-price-unique">מחיר: <span>{productObject.price} ש"ח</span></p>
      </>
    ) : (
      <p>המוצר לא נמצא.</p>
    )}
    <button className="add-to-cart-button-unique" onClick={handleAddToCart}>הוסף לסל</button>
    <button className="add-to-favorites-button-unique" onClick={handleAddToFavorites}>הוסף למועדפים</button>
  </div>
);
};

ProductDetail.propTypes = {
  // אם אתה לא משתמש ב-props, לא צריך להגדיר propTypes
};

export default ProductDetail;
