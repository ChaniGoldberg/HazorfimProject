import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, updateCountProduct, deleteProduct } from '../../redux/Actions'

export const ChoosesProduct = (props) => {

    const dispatch = useDispatch();
     const products = useSelector((state) => state.basket.products);
    const totalPrice = useSelector((state) => state.basket.totalPrice);
    const price = useSelector((state) => state.basket.price);
    const count=useDispatch((state) => state.basket.count)
    const updateCountOfProduct = (product1) => {
        console.log(product1)
        const updatedCount = prompt("Enter new count:");
        if (updatedCount !== null) {
            dispatch(updateCountProduct(product1,updatedCount ));
        }
    }
    if (products.length === 0) {
        return <div>אין מוצרים בסל</div>
    }
    else {
    return (
        <>
            
            {products.map((i, index) => (
                <div id="ChoosesProductCard">
                    <div id="rightSideDetiles">
                        <p>{i.name}</p>
                        {/* <img src={i.picture} className="productPicture" alt="productPicture" /> */}
                        <button onClick={() => {
                            dispatch(deleteProduct(i))
                        }}>מחיקה</button>
                        <button onClick={() => {
                            updateCountOfProduct( i )
                        }}>עדכון</button>
                    </div>
                    <div id="leftSideDetailes">
                        <p>{i.price}</p>
                        <p>כמות להזמנה :</p><p> {count[index]}</p>
                        <p>סה"כ:  </p><p>{count[index] * i.price}</p>
                    </div>
                </div>))}
        </>)
}}
export default ChoosesProduct;
