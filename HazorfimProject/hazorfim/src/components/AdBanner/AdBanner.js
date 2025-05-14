import React, { useState } from 'react';
import '../../styles/AdBanner.css'; // ייבוא קובץ CSS

const AdBanner = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) {
        return null; // אם לא נראה, מחזירים null
    }

    return (
        <div className="ad-banner">
            <span className="ad-message">המתנה המושלמת לכל רגע בחיים! | משלוחים חינם מעל 399 ש”ח|🎗</span>
            <button className="close-button" onClick={handleClose}>X</button>
        </div>
    );
};

export default AdBanner;
