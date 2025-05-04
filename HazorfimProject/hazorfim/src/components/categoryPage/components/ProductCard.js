import React from 'react';
import { useSelector } from 'react-redux';
import '../../../styles/ProductCard.css'; // ודא שאתה כולל את קובץ ה-CSS

const ProductCategory = ({ categoryName }) => {
  const products = useSelector((state) => state.products.products);

  // סינון המוצרים לפי קטגוריה
  const filteredProducts = products.filter(product => product.category === categoryName);

  return (
    <div className="products-list">
      {filteredProducts.length > 0 ? (
        filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.productImage} alt={product.name} className="product-image" />
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">מחיר: <span>{product.price} ש"ח</span></p>
              <button className="favorite-button">❤️</button>
              <button className="view-button">🔍</button>
            </div>
          </div>
        ))
      ) : (
        <p>אין מוצרים בקטגוריה זו.</p>
      )}
    </div>
  );
};

export default ProductCategory;
