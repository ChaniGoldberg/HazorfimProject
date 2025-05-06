import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { links } from '../../constants/links.js'; // Adjust the import to the correct path
import CategoryPage from '../categoryPage/CategoryPage.js'; // Import your CategoryPage component
import PopupToNav from '../popupToNav/PopupToNav.js';
//read the links from the links page
const AppRoutes = () => {
    return (
        <Routes>
            {links.map((link) => (
                <Route
                    key={link.link}
                    path={link.link}
                    element={<CategoryPage categoryName={link.name} />} // Pass category name as a prop
                />
            ))}
            
            {/* צריך להוסיף אופציות ניתוב */}
            <Route path="/" element={<p>אני בדף הבית</p>} /> {/* Fallback route */}
        </Routes>
    );
};

export default AppRoutes;