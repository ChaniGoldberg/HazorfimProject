import React, { useState } from 'react';
import ProductDetailModal from './ProductDetailModal.js';
import '../../../styles/ProductCard.css';
//מציג את כרטיס המוצר
const ProductCard = ({ product }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  console.log(product);
  //במקרה והproduct לא קיים
  if (!product) {
    return <div>מוצר לא זמין</div>; // או כל הודעת שגיאה אחרת
  }
  
  return (
    <div className="products-list">
      <div className="product-card">
        {isModalOpen ? null : (
          <>
            <img src={product.productImage} alt={product.name} className="product-image" />
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">מחיר: <span>{product.price} ש"ח</span></p>
              <button className="favorite-button">❤️</button>
              <button className="view-button" onClick={() => setModalOpen(true)}>🔍</button>
            </div>
          </>
        )}
        
        {isModalOpen && (
          <ProductDetailModal
            product={product}
            onClose={() => setModalOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
