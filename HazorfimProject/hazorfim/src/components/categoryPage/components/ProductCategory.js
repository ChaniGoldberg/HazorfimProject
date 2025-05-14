
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import FilterPopup from './FilterPopup'; // קומפוננטת הפופאפ
import style from '../../../styles/ProductCategory.css'; // הוספת הסטיילים

//הקומפוננטה שמזמנת את כרטיס הצגת המוצרים
const ProductCategory = ({ categoryName }) => {
  //the data
  const products = useSelector((state) => state.products.products);
  
  const [filters, setFilters] = useState({ price: null, size: null, material: null });
  const [showPopup, setShowPopup] = useState(false);
//מביא רק את המוצרים ששם הקטגוריה שלהם הוא שם הקטגוריה הנוכחי ובודק האם  filters ריק 
  const categoryProducts = products.filter((product) => {
    return product.category === categoryName && 
           (!filters.price || product.price <= filters.price) && 
           (!filters.size || product.size === filters.size) && 
           (!filters.material || product.material === filters.material);
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setShowPopup(false);
  };

  return (
  <>
    <button onClick={() => setShowPopup(true)}>סנן</button>
    {showPopup && <FilterPopup onFilterChange={handleFilterChange} />}

    <div className="products-list"> {/* הוסף את ה-div הזה */}
      {categoryProducts.map((pro) => (
        <ProductCard key={pro.id} product={pro} />
      ))}
    </div>
  </>
  );
};

export default ProductCategory;
