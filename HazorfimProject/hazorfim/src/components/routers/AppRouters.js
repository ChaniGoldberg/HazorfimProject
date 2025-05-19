import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategoryPage from '../../screens/CategoryPage.js'; // Import your CategoryPage component
import PopupToNav from '../nav2/PopupToNav.js';
import HomePage from '../../screens/HomePage.js';
import ProductDetail from '../categoryPage/components/ProductDetail.js';
import Branches from '../nav1/Branches.js';
import Basket from '../nav1/Basket.js';
import AccountComponent from '../nav1/AccountComponent .js'; 
import Favorites from '../nav1/Favorites.js'; // Import your Favorites component
//read the links from the links page
const AppRoutes = () => {
    return (
         <Routes>
            <Route path="/categories/:categoryName" element={<CategoryPage />} />
            <Route path="/categories/:categoryName/products/:productId" element={<ProductDetail />} />
            <Route path='/error' element={<div><h1>error:( this page not exists</h1></div>} />
            <Route path="/" element={<HomePage />} /> {/* Fallback route */}
            <Route path="/Basket" element={<Basket />} />
            <Route path="/AccountComponent" element={<AccountComponent />} />
            <Route path="/Favorites" element={<Favorites />} />
            <Route path="/Branches" element={<Branches />} />
        </Routes>
    );
};

export default AppRoutes;
