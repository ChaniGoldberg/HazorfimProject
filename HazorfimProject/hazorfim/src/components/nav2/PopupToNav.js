import React from 'react';
import { Link } from 'react-router-dom';
import { links } from '../../constants/links';
import '../../styles/PopupToNav.css'; // Import the CSS file for styling


const PopupToNav = ({ categories, isVisible }) => {
    if (!isVisible || !categories) return null;

    return (
        <div className="unique-popup"> {/* השתנה ל-className ייחודי */}
            {categories.map((category, index) => {
                if (!category.name || !category.items) return null;

                return (
                    <div key={index}>
                        <h3>{category.name}</h3>
                        <ul>
                            {category.items.map((item, itemIndex) => {
                                const linkObject = links.find(link => link.nameHebrew === item);
                                const linkToUse = linkObject ? linkObject.link : '/error';
                                const categoryLink = linkObject ? `/categories/${linkObject.name}` : linkToUse;

                                return (
                                    <li key={itemIndex}>
                                        <Link to={categoryLink}>{item}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
};

export default PopupToNav;
