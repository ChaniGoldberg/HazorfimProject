import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductDetailModal from './ProductDetail.js';
import '../../../styles/ProductCard.css';
import { useDispatch,useSelector } from 'react-redux'; 
import UseFavoriteProductHook from './hooks/useFavoriteProductHook.js';
// מציג את כרטיס המוצר
const ProductCard = ({ product }) => {
    const [isModalOpen, setModalOpen] = useState(false);
  // במקרה וה-product לא קיים
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
              <button className="favorite-button" onClick={UseFavoriteProductHook({product})}>❤️</button>
              <Link to={`/categories/${product.category}/products/${product.id}`} className="view-button">
                🔍
              </Link>
              
              {/* הוספת הודעה "בלעדי באתר" אם המוצר נמצא רק באתר */}
              {product.inSite && (               
                <p className="product-exclusive">בלעדי באתר</p>
              )}
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
