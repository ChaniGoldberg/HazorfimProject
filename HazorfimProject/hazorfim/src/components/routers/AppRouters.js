import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { links } from '../../constants/links.js'; // Adjust the import to the correct path
import CategoryPage from '../../screens/CategoryPage.js'; // Import your CategoryPage component
import PopupToNav from '../nav2/PopupToNav.js';
import HomePage from '../../screens/HomePage.js';
import ProductDetail from '../categoryPage/components/ProductDetail.js';
//read the links from the links page
const AppRoutes = () => {
    return (
        <Routes>
            {/* {links.map((link) => (
                <Route
                    key={link.link}
                    path={link.link}
                    element={<CategoryPage categoryName={link.name} />} // Pass category name as a prop
                />
            ))} */}
            
            <Route path="/categories/:categoryName" element={<CategoryPage/>} />
            <Route path="/categories/:categoryName/products/:productId" element={<ProductDetail/>} />
            <Route path='/error' element={<div><h1>error:( this page not exists</h1></div>} />
        
            <Route path="/" element={<HomePage></HomePage>} /> {/* Fallback route */}
        </Routes>
    );
};

export default AppRoutes;