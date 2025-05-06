import React from 'react';

const New = ({ products, selectedFilters, sortOption }) => {
    // פונקציה לסינון המוצרים
    const filterProducts = (products) => {
        return products.filter(product => {
            const priceMatch = selectedFilters.price ? 
                checkPriceRange(product.price, selectedFilters.price) : true;
            const materialMatch = selectedFilters.material ? 
                product.material === selectedFilters.material : true;
            const sizeMatch = selectedFilters.size ? 
                product.size === selectedFilters.size : true;

            return priceMatch && materialMatch && sizeMatch;
        });
    };

    // פונקציה לבדוק אם המחיר נמצא בטווח שנבחר
    const checkPriceRange = (price, range) => {
        const [min, max] = range.split('-').map(Number);
        return price >= min && price <= max;
    };

    // פונקציה למיון המוצרים
    const sortProducts = (products) => {
        switch (sortOption) {
            case 'priceAsc':
                return products.sort((a, b) => a.price - b.price);
            case 'priceDesc':
                return products.sort((a, b) => b.price - a.price);
            case 'newest':
                return products; // או ליישם מיון לפי תאריך אם יש
            default:
                return products;
        }
    };

    const filteredProducts = filterProducts(products);
    const sortedProducts = sortProducts(filteredProducts);

    return (
        <div className="product-list">
            {sortedProducts.map(product => (
                <div key={product.id} className="product-item">
                    <img src={product.productImage} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>מחיר: {product.price} ש"ח</p>
                    <p>מלאי: {product.stock}</p>
                </div>
            ))}
        </div>
    );
};

export default New;
