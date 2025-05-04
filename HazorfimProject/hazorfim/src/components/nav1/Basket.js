import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts, updateCountProduct, deleteProduct, addProduct } from '../../redux/Actions'
import ChoosesProduct from './ChoosesProduct'
const Basket = () => {
  const dispatch = useDispatch();
  const products1 = useSelector((state) => state.basket.products);

  useEffect(() => {
    // Condition to check if products array is empty
    dispatch(addProduct({ name: "kufsa", price: 597 }, 6));
    dispatch(addProduct({ name: "gavia", price: 999 }, 3));
    dispatch(addProduct({ name: "pamot", price: 1022 }, 8));
    console.log('Products added on first load');

  }, []);

  const totalPrice = useSelector((state) => state.basket.totalPrice);
  const price = useSelector((state) => state.basket.price);
  const count1 = useSelector((state) => state.basket.count);


  return (
    //dispatch(addProduct({name:"gavia",price:999},count=3)),
    <>
      <h1>סל קניות</h1>
      <ChoosesProduct count={count1}></ChoosesProduct>
    </>
  )
}
export default Basket;