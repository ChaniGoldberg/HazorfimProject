import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/ProductDetailModal.css'; // ודא שאתה כולל את קובץ ה-CSS
//מציגה בגדול את המוצר
const ProductDetailModal = ({ product, onClose }) => {
  const handleAddToCart = () => {
    console.log(`המוצר ${product.name} נוסף לסל.`);
    // כאן תוכל להוסיף לוגיקה להוספת המוצר לסל
  };

  const handleAddToFavorites = () => {
    console.log(`המוצר ${product.name} נוסף למועדפים.`);
    // כאן תוכל להוסיף לוגיקה להוספת המוצר למועדפים
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>✖️</button>
        <img src={product.productImage} alt={product.name} className="modal-image" />
        <h2 className="modal-product-name">{product.name}</h2>
        <p className="modal-product-price">מחיר: <span>{product.price} ש"ח</span></p>
        <button className="add-to-cart-button" onClick={handleAddToCart}>הוסף לסל</button>
        <button className="add-to-favorites-button" onClick={handleAddToFavorites}>הוסף למועדפים</button>
      </div>
    </div>
  );
};

ProductDetailModal.propTypes = {
  product: PropTypes.shape({
    productImage: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProductDetailModal;
