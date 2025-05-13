
import React from 'react';
import { useSelector } from 'react-redux';
import { showCategories } from '../../../constants/showCategory';

//הצגת המלל של הקטגוריה
//הקטגוריה נשלחת כפרופס מהקומפוננטה הראשית
const CategoryDisplay = ({ categoryName }) => {
    const categoryData = showCategories[categoryName]; // גישה לקטגוריה לפי השם

    return (
        <>
            {categoryData ? (
                <p>{categoryData.longDescription}</p> // הצגת השם בעברית
            ) : (// הודעה אם הקטגוריה לא קיימת
                <>
                    <h1>קטגוריה לא נמצאה</h1>
                </>
            )}

        </>
    );
};

export default CategoryDisplay;
