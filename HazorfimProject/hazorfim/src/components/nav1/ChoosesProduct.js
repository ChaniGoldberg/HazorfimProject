import "../../styles/ChoosesProduct.css"

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, deleteProduct, updateCountProduct } from '../../redux/slices/basketSlice'; 
 export const ChoosesProduct = () => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.basket.products);
    const totalPrice = useSelector((state) => state.basket.totalPrice);
    const price = useSelector((state) => state.basket.price);
    const count = useSelector((state) => state.basket.count)
    
    const updateCountOfProduct = (product1) => {
        console.log(product1)
        const updatedCount = prompt("Enter new count:");
        if (updatedCount !== null) {
            dispatch(updateCountProduct({product:{product1},count:{updatedCount}}));
        }
    }
    if (products.length === 0) {
        return <div>אין מוצרים בסל</div>
    }
    else {
        return (
            <>
                {products.map((i,index) => (
                    <div id="ChoosesProductCard">
                        <div id="leftSideDetailes">
                            <p>{i.name}</p>
                            {/* <img src={i.picture} className="productPicture" alt="productPicture" /> */}
                            <button onClick={() => {dispatch(deleteProduct(i))}}>מחיקה</button>
                            <button onClick={() => {updateCountOfProduct(i)}}>עדכון</button>
                        </div>
                        <div id="rightSideDetiles">
                            <p>מחיר ליחידה:{i.price}</p>
                            <p>כמות להזמנה :{count[index]}</p>
                            <p>סה"כ: {totalPrice[index]} </p>
                        </div>
                    </div>))
                    }
            </>)
    }
}
export default ChoosesProduct;
