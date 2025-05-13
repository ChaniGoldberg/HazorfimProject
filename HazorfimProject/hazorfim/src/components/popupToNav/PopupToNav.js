import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import style from '../../styles/PopupToNav.css'; // Import your CSS file
import { links } from '../../constants/links';
//הפופאפ של הקטגוריות
const PopupToNav = ({ name, items, isVisible }) => {
    if (!isVisible || !name) return null;

    return (
        <div className="popup">
            <h3>{name}</h3>
            <ul>
                {items.map((item, index) => {
                    // חפש את האובייקט המתאים ב-links
                    //אפשר לשפר את ביצועי הלינקים לא מקובץ וכו יותר מאוחר
                    const linkObject = links.find(link => link.nameHebrew === item);
                    const linkToUse = linkObject ? linkObject.link : '/'; // אם לא נמצא, השתמש בלינק ברירת מחדל

                    return (
                        <li key={index}>
                            <Link to={linkToUse}>{item}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default PopupToNav;
