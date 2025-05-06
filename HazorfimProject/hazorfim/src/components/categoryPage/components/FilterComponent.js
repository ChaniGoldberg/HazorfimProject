import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const FilterComponent = ({ selectedFilters }) => {
    const products = useSelector((state) => state.products.products);
    
    const filteredProducts = products.filter(product => {
        const { price, material, size, categoryName } = selectedFilters;
        const priceMatch = price ? product.price >= parseInt(price.split('-')[0]) && product.price <= parseInt(price.split('-')[1]) : true;
        const materialMatch = material ? product.material === material : true;
        const sizeMatch = size ? product.size === size : true;
        const categoryMatch = categoryName ? product.category === categoryName : true; // סינון לפי קטגוריה

        return priceMatch && materialMatch && sizeMatch && categoryMatch;
    });

    return (
        <div className="products-category">
            <div className="products-list">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p>אין מוצרים בקטגוריה זו.</p>
                )}
            </div>
        </div>
    );
};

export default FilterComponent;
