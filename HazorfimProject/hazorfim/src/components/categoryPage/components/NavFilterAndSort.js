import React, { useState } from 'react';
import filterAndSort from '../../../styles/filterAndSort.css';
import FilterComponent from './FilterComponent';
import ProductsDisplay from './ProductDisplay.js'; // הוספת הקומפוננטה
import store from '../../../redux/store';
import { Provider } from 'react-redux';
import New from './new.js';

const NavFilterAndSort = ({ products }) => {
    const [showFilters, setShowFilters] = useState(false);
    const [pricePopup, setPricePopup] = useState(false);
    const [materialPopup, setMaterialPopup] = useState(false);
    const [sizePopup, setSizePopup] = useState(false);
    const [sortOption, setSortOption] = useState('');
    const [selectedFilters, setSelectedFilters] = useState({ price: '', material: '', size: '' });

    const handlePriceSelect = (price) => {
        setSelectedFilters(prev => ({ ...prev, price }));
        setPricePopup(false);
        setShowFilters(true);
    };

    const handleMaterialSelect = (material) => {
        setSelectedFilters(prev => ({ ...prev, material }));
        setMaterialPopup(false);
        setShowFilters(true);
    };

    const handleSizeSelect = (size) => {
        setSelectedFilters(prev => ({ ...prev, size }));
        setSizePopup(false);
        setShowFilters(true);
    };

    return (
        <div className="nav">
            {/* ... שאר הקוד שלך ... */}
            <Provider store={store}>
                {showFilters && <FilterComponent selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />}
                <New products={products} selectedFilters={selectedFilters} sortOption={sortOption} />
            </Provider>
        </div>
    );
};

export default NavFilterAndSort;
