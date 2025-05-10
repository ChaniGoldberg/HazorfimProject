
import React from 'react';
import { useSelector } from 'react-redux';
import { showCategories } from '../../../constants/showCategory';

//טוב
const CategoryDisplay = ({ categoryName }) => {
    const categoryData = showCategories[categoryName]; // גישה לקטגוריה לפי השם

    return (
        <>
            {categoryData ? (
                <h1>{categoryData.categoryNamesInHebrew}</h1> // הצגת השם בעברית
            ) : (
                <>
               <p>gtfrd</p>
                <h1>קטגוריה לא נמצאה</h1> // הודעה אם הקטגוריה לא קיימת
                </>
            )}
            
        </>
);
};

export default CategoryDisplay;
