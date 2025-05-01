import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import { links } from '../../constants/links.js'; // Adjust the import to the correct path
import CategoryPage from '../categoryPage/CategoryPage.js'; // Import your CategoryPage component
import Logo from '../nav2/components/Logo.js';
// import YourComponent from './YourComponent'; // Import your default component

const AppRoutes = () => {
    return (
        
        <Router>
            <Routes>
                {links.map((link) => (
                    <Route 
                        key={link.link} 
                        path={link.link} 
                        element={<CategoryPage  />} // Pass category name as a prop
                    />
                ))}
                {/* צריך להוסיף אופציות ניתוב */}
                <Route path="/" element={<p>אני בדף הבית</p>} /> {/* Fallback route */}
            </Routes>
        </Router>
        
    );
};

export default AppRoutes;