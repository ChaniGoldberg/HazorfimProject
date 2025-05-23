// import React, { useState } from 'react';
// import PopupToNav from '../../popupToNav/PopupToNav.js';
// import { categories, usefulCategories } from '../../../constants/categories.js';
// import { Link } from 'react-router-dom';

// const NavLinks = () => {
//     const [visiblePopup, setVisiblePopup] = useState(null);
//     const [isPopupHovered, setIsPopupHovered] = useState(false);

//     const handleMouseOver = (name, items) => {
//         setVisiblePopup({ name, items });
//     };

//     const handleMouseLeave = () => {
//         if (!isPopupHovered) {
//             setVisiblePopup(null);
//         }
//     };

//     return (
//         <nav className="nav-links">
//             <div 
//                 onMouseOver={() => handleMouseOver(categories[0].name, categories[0].items)} 
//                 onMouseLeave={handleMouseLeave}
//             >
//                 <Link to="#">קטגוריות</Link>
//             </div>
//             <div 
//                 onMouseOver={() => handleMouseOver(usefulCategories[0].name, usefulCategories[0].items)} 
//                 onMouseLeave={handleMouseLeave}
//             >
//                 <Link to="#">מתנות</Link>
//             </div>
//             <Link to="/Exclusive-on-the-site">בלעדי באתר</Link>
//             <Link to="/judaica-silver-plated">מתנות יודאיקה בציפוי כסף</Link>
//             <Link to="/tableware-silver-plated">אירוח ועיצוב הבית</Link>
//             <Link to="/outlet">outlet</Link>
//             <div 
//                 onMouseEnter={() => setIsPopupHovered(true)} 
//                 onMouseLeave={() => {
//                     setIsPopupHovered(false);
//                     handleMouseLeave();
//                 }}
//             >
//                 <PopupToNav
//                     name={visiblePopup?.name} 
//                     items={visiblePopup?.items} 
//                     isVisible={!!visiblePopup} 
//                     className={visiblePopup ? 'visible' : ''} 
//                 /> 
//             </div>
//         </nav>
//     );
// };

// export default NavLinks;
import React, { useState } from 'react';
import PopupToNav from '../../nav2/PopupToNav.js';
import { categories, usefulCategories } from '../../../constants/categories.js';
import { Link } from 'react-router-dom';

const NavLinks = () => {
    const [isPopupHovered, setIsPopupHovered] = useState(false);

    return (
   <nav className="nav-links">
    <div 
        onMouseOver={() => setIsPopupHovered(true)} 
        onMouseLeave={() => setIsPopupHovered(false)}
    >
        <Link className="nav-link" to="#">קטגוריות</Link>
    </div>
    <div 
        onMouseOver={() => setIsPopupHovered(true)} 
        onMouseLeave={() => setIsPopupHovered(false)}
    >
        <Link className="nav-link" to="#">מתנות</Link>
    </div>
    <Link className="nav-link" to="/categories/Exclusive-on-the-site">בלעדי באתר</Link>
    <Link className="nav-link" to="/categories/judaica-silver-plated">מתנות יודאיקה בציפוי כסף</Link>
    <Link className="nav-link" to="/categories/tableware-silver-plated">אירוח ועיצוב הבית</Link>
    <Link className="nav-link" to="/categories/outlet">outlet</Link>
    <div 
        onMouseEnter={() => setIsPopupHovered(true)} 
        onMouseLeave={() => setIsPopupHovered(false)}
    >
        <PopupToNav
            categories={[...categories, ...usefulCategories]} // העבר את כל הקטגוריות
            isVisible={isPopupHovered} 
        /> 
    </div>
</nav>

    );
};

export default NavLinks;
