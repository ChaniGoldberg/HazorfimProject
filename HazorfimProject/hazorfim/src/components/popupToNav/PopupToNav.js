import React from 'react';
import { Link } from 'react-router-dom';
import style from '../../styles/PopupToNav.css'; // Import your CSS file
import { links } from '../../constants/links';

const PopupToNav = ({ name, items, isVisible }) => {
    if (!isVisible || !name) return null;

    return (
        <div className="popup">
            <h3>{name}</h3>
            <ul>
                {items.map((item, index) => {
                    // חפש את האובייקט המתאים ב-links
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
