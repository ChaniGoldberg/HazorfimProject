// import React from 'react';

const PopupToNav = ({ title, listItems, imageUrl, onClose }) => {
    return (
        <div className="popup">
            <div className="popup-header">
                <h2>{title}</h2>
                <button onClick={onClose} className="close-button">×</button>
            </div>
            {imageUrl && <img src={imageUrl} alt={title} />}
            <ul>
                {listItems.map((item, index) => (
                    <li key={index}>
                        <a href="#">{item}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PopupToNav;
