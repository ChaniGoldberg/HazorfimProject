
import React from 'react';
import { showCategories } from '../../../constants/showCategory'; // Update with the correct path

const CategoryDisplay = ({ categoryName }) => {
    // Find the category object based on the provided category name
    const category = showCategories.find(cat => cat[categoryName]);

    if (!category) {
        return <div>קטגוריה לא נמצאה</div>;
    }

    const categoryData = category[categoryName];

    return (
        <div>
            <h2>{categoryName}</h2>
            {categoryData.map((item, index) => {
                // Check if item is an object (like the "סט קידוש" case)
                if (typeof item === 'object') {
                    const itemName = Object.keys(item)[0];
                    const itemDetails = item[itemName];

                    return (
                        <div key={index}>
                            <h3>{itemName}</h3>
                            {itemDetails.pictures.map((picture, picIndex) => (
                                <img key={picIndex} src={picture} alt={itemName} />
                            ))}
                            <p>{itemDetails.shortDescription}</p>
                            <p>{itemDetails.longDescription}</p>
                        </div>
                    );
                }

                // If it's a string, just display it
                return <div key={index}>{item}</div>;
            })}
        </div>
    );
};

export default CategoryDisplay;
