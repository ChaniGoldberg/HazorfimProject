import React, { useState } from 'react';
import PopupToNav from '../../popupToNav/PopupToNav.js'; // Import your popup component
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { categories, gifts } from '../../../constants/categories';

const NavLinks = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [popupData, setPopupData] = useState({ title: '', listItems: [], imageUrl: '' });
    const [isMouseOverPopup, setMouseOverPopup] = useState(false);
    const [isMouseOverLink, setMouseOverLink] = useState(false);

    const showCategoriesPopup = () => {
        const listItems = categories.map(category => {
            const title = Object.keys(category)[0];
            return [title, ...category[title]];
        });
        setPopupData({
            title: 'קטגוריות',
            listItems,
            imageUrl: ''
        });
        setPopupVisible(true);
    };

    const showGiftsPopup = () => {
        const listItems = Object.entries(gifts).map(([key, value]) => {
            return [key, ...value];
        });
        setPopupData({
            title: 'מתנות',
            listItems,
            imageUrl: ''
        });
        setPopupVisible(true);
    };

    const closePopup = () => {
        if (!isMouseOverPopup && !isMouseOverLink) {
            setPopupVisible(false);
        }
    };

    return (
        <Router>
            <nav>
                <Link 
                    to="#" 
                    onMouseEnter={() => { setMouseOverLink(true); showCategoriesPopup(); }} 
                    onMouseLeave={() => { setMouseOverLink(false); closePopup(); }}
                >
                    קטגוריות
                </Link>
                <Link 
                    to="#" 
                    onMouseEnter={() => { setMouseOverLink(true); showGiftsPopup(); }} 
                    onMouseLeave={() => { setMouseOverLink(false); closePopup(); }}
                >
                    מתנות
                </Link>
                <Link to="/judaica-silver-plated">מתנות יודאיקה בציפוי כסף</Link>
                <Link to="/tableware-silver-plated">אירוח ועיצוב הבית</Link>
                <Link to="/Independence-Day">יום העצמאות</Link>
                <Link to="/Operation-to-the-site">מבצע בלעדי באתר</Link>
            </nav>

            {isPopupVisible && (
                <div 
                    onMouseEnter={() => setMouseOverPopup(true)} 
                    onMouseLeave={() => setMouseOverPopup(false)}
                    className="popup-container"
                    onClick={closePopup} // Close the popup when clicking outside
                >
                    <PopupToNav
                        title={popupData.title}
                        listItems={popupData.listItems}
                        imageUrl={popupData.imageUrl}
                        onClose={closePopup}
                    />
                </div>
            )}

            <Routes>
                <Route path="/page1" element={<div>Content for Page 1</div>} />
                <Route path="/page2" element={<div>Content for Page 2</div>} />
                {/* Define additional routes as necessary */}
            </Routes>
        </Router>
    );
};

export default NavLinks;
